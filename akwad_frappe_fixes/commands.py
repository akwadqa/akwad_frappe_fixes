import click
import subprocess
import os

@click.command('stop')
def bench_stop():
    """Custom Bench Stop Command."""
    # Get the absolute path to the bench directory
    bench_dir = os.path.dirname(os.getcwd())
    # Build path to script
    script_path = os.path.join(bench_dir, 'apps', 'akwad_frappe_fixes', 'akwad_frappe_fixes', 'bench_stop.py')
    # Call the script
    subprocess.call(['python3', script_path])

commands = [bench_stop]