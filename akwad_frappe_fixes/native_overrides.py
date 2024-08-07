import frappe
from frappe.utils.pdf import PdfWriter, PdfReader, prepare_options, scrub_urls, get_file_data_from_writer, get_wkhtmltopdf_version, cleanup
import pdfkit
import io
from packaging.version import Version
from bs4 import BeautifulSoup

PDF_CONTENT_ERRORS = [
    "ContentNotFoundError",
    "ContentOperationNotPermittedError",
    "UnknownContentError",
    "RemoteHostClosedError",
]

def custom_get_pdf(html, options=None, output: PdfWriter | None = None):    
    html = scrub_urls(html)
    html = add_rtl_direction(html)
    html, options = prepare_options(html, options)
     

    options.update({"disable-javascript": "", "disable-local-file-access": ""})    

    filedata = ""
    if Version(get_wkhtmltopdf_version()) > Version("0.12.3"):
        options.update({"disable-smart-shrinking": ""})

    try:
        # Set filename property to false, so no file is actually created
        filedata = pdfkit.from_string(html, options=options or {}, verbose=True)

        # create in-memory binary streams from filedata and create a PdfReader object
        reader = PdfReader(io.BytesIO(filedata))
    except OSError as e:
        if any([error in str(e) for error in PDF_CONTENT_ERRORS]):
            if not filedata:
                print(html, options)
                frappe.throw(_("PDF generation failed because of broken image links"))

            # allow pdfs with missing images if file got created
            if output:
                output.append_pages_from_reader(reader)
        else:
            raise
    finally:
        cleanup(options)

    if "password" in options:
        password = options["password"]

    if output:
        output.append_pages_from_reader(reader)
        return output

    writer = PdfWriter()
    writer.append_pages_from_reader(reader)

    if "password" in options:
        writer.encrypt(password)

    filedata = get_file_data_from_writer(writer)

    return filedata

def add_rtl_direction(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    
    head = soup.find('head')
    if not head:
        head = soup.new_tag('head')
        soup.html.insert(0, head)
        
    style = soup.new_tag('style')
    style.string = """
    .ql-editor li.ql-direction-rtl>.ql-ui:before{
            display:none;
        }
    """
    head.append(style)

    li_elements = soup.find_all('li', class_='ql-direction-rtl')
    ordered_counter = 1

    for li in li_elements:
        span = li.find('span', class_='ql-ui')
        if span:
            if li.get('data-list') == 'ordered':
                ordered_number = soup.new_string(f'{ordered_counter}. ')
                span.insert_after(ordered_number)
                ordered_counter += 1
            else:
                bullet_span = soup.new_tag('span', style='font-size: 1em;')
                bullet_span.string = '• '
                span.insert_after(bullet_span)

    return str(soup)