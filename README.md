# Online Network Tools
Network tools to help you analyse or diagnose network issues through a easy to use web interface. All requests will be sent/measured from the computer hosting this application.

## Features
- Ping - test the reachability of a host and measure round-trip time
- WHOIS - find information about a domain
- Port Scan (Planned)

## Getting Started

```bash
# Clone the git repository
git clone git@github.com:nathan-xiao1/ping-tool-web.git

# Navigate into newly cloned repository folder
cd ping-tool-web

# Setup virtual environment 
virtualenv -p python3 env

# Activate the virtual environment
source env/bin/activate

# Install the required modules
pip install -r requirements.txt

# Start app
python app.py
```