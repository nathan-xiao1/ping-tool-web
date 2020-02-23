from flask import Flask, render_template, request, jsonify
from pythonping import ping
from urllib.parse import urlparse
import json, socket

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/ajax_ping', methods=["POST"])
def ajax_ping(count=4):
    url = urlparse(request.form["hostname"])
    hostname = (url.netloc + url.path).rstrip('/')
    try:
        response = ping(hostname, count=count)
        ip = socket.gethostbyname(hostname)
        print(socket.getfqdn(ip))
    except:
        return ('', 204)
    data = []
    for res in response:
        data.append(str(res))
    return jsonify(hostname=hostname, ip=ip,rtt_min=response.rtt_min_ms, rtt_max=response.rtt_max_ms, rtt_avg=response.rtt_avg_ms, pings=data)


if __name__ == '__main__':
    # app.run()
    app.run(port=5000, debug=True)
