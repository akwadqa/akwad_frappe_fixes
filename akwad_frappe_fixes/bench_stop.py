import os
import socket
import errno
import time

# List of base ports
ports = [800, 900, 1100, 1200, 1300]
port_suffix = None
# Get the port suffix from the Redis configuration
try:
    with open("../config/redis_cache.conf") as config_file:
        for line in config_file:
            if line.startswith("port"):
                port_suffix = line.split()[-1][-1]
                break
    if not port_suffix:
        raise ValueError("Port suffix not found in redis_cache.conf")
except (IOError, ValueError) as e:
    print(f"Error: {e}. Could not locate the redis_cache.conf file. Please ensure it is in the correct path relative to where the script is run.")
    exit(1)

# Function to close ports
def close_port(port):
    full_port = int(f"{port}{port_suffix}")
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    try:
        sock.bind(("127.0.0.1", full_port))
        print(f"Port {full_port} already closed")
    except socket.error as e:
        if e.errno == errno.EADDRINUSE:
            print(f"Closing port {full_port}...")
            os.system(f"echo 'shutdown' | redis-cli -h 127.0.0.1 -p {full_port}")
            time.sleep(3)
            try:
                sock.bind(("127.0.0.1", full_port))
                print(f"Port {full_port} closed successfully")
            except socket.error as e:
                if e.errno == errno.EADDRINUSE:
                    os.system(f"fuser {full_port}/tcp -k")
                    print(f"Port {full_port} closed")
    finally:
        sock.close()

# Close all specified ports
for port in ports:
    close_port(port)

print("Bench stopped")