from flask import Flask, render_template, request, jsonify
from pythonping import ping
from requests import get
from bs4 import BeautifulSoup
import json, socket, re

app = Flask(__name__)

def getPageTitle(url):
    html = get(url).text
    match = re.search(r"<title>(.*?)<\/title>", html, re.IGNORECASE)
    if match:
        return match.group(1)
    return None

self_ip = None

@app.before_first_request
def init():
    global self_ip
    self_ip = get('https://api.ipify.org').text
    print(self_ip)

@app.context_processor
def inject_user():
    return dict(self_ip=self_ip)

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/ajax_ping', methods=["POST"])
def ajax_ping(count=4):
    hostname = re.sub(r"^(?:http|https|ftp):\/\/", "", request.form["hostname"]).rstrip('/')
    title = getPageTitle("http://" + hostname)
    try:
        response = ping(hostname, count=count)
    except:
        return ('', 204)
    data = []
    for res in response:
        data.append(str(res))
    return jsonify(title=title,rtt_min=response.rtt_min_ms, rtt_max=response.rtt_max_ms, rtt_avg=response.rtt_avg_ms, pings=data, success=response.success())


if __name__ == '__main__':
    app.run(port=5000, debug=True)