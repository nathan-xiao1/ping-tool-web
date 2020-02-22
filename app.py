from flask import Flask, render_template, request, jsonify
from pythonping import ping


app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/ajax_ping', methods=["POST"])
def ajax_ping():
    hostname = request.form["hostname"]
    print("hostname:", hostname)
    return jsonify(hostname=hostname, ping=ping(hostname, count=1).rtt_avg_ms)


if __name__ == '__main__':
    app.run()
