from flask import Flask, render_template, request, jsonify
from pythonping import ping
import json

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/ajax_ping', methods=["POST"])
def ajax_ping(count=4):
    hostname = request.form["hostname"]
    response = ping(hostname, count=count)
    data = []
    for res in response:
        data.append(str(res))
    return jsonify(rtt_min=response.rtt_min_ms, rtt_max=response.rtt_max_ms, rtt_avg=response.rtt_avg_ms, pings=data)


if __name__ == '__main__':
    app.run()
