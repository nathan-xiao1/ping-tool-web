from flask import Flask, render_template, request, jsonify, redirect, url_for
from pythonping import ping as pythonping
from requests import get
import json, re
import whois as pythonwhois

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
    return redirect(url_for('ping'))

@app.route('/ping')
def ping():
    return render_template("ping.html")

@app.route('/whois')
def whois():
    return render_template("whois.html")

@app.route('/ajax/whois', methods=["POST"])
def ajax_whois():
    hostname = re.sub(r"^(?:http|https|ftp):\/\/", "", request.form["hostname"]).rstrip('/')
    who = pythonwhois.whois(hostname)  
    print(who)
    return who

@app.route('/ajax/ping', methods=["POST"])
def ajax_ping(count=4):
    hostname = re.sub(r"^(?:http|https|ftp):\/\/", "", request.form["hostname"]).rstrip('/')
    title = getPageTitle("http://" + hostname)
    try:
        response = pythonping(hostname, count=count)
    except:
        return ('', 204)
    data = []
    for res in response:
        data.append(str(res))
    return jsonify(title=title,rtt_min=response.rtt_min_ms, rtt_max=response.rtt_max_ms, rtt_avg=response.rtt_avg_ms, pings=data, success=response.success())


if __name__ == '__main__':
    app.run(port=5000, debug=True)