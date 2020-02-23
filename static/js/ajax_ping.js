$("#hostname-submit").click(function () {
    reset_error()
    $.post(
        "/ajax_ping",
        {
            hostname: $("#hostname-input").val()
        },
        function (data) {
            if (data === undefined) {
                error();
                return;
            }
            $("#result-outputs").empty()
            for (let i = 0; i < data.pings.length; i++) {
                $("#result-outputs").append("<div><code>" + data.pings[i] + "</code> </div>")
            }
            $("#hostname").text(data.hostname);
            $("#ip").text(data.ip);
            $("#rtt-min").text(data.rtt_min + " ms");
            $("#rtt-max").text(data.rtt_max + " ms");
            $("#rtt-avg").text(data.rtt_avg + " ms");
        }
    )
});

function reset_error() {
    $("#hostname-input").removeClass("is-invalid");
    $("#hostname-submit").removeClass("btn-outline-danger").addClass("btn-outline-light");
}

function error() {
    $("#hostname-input").addClass("is-invalid");
    $("#hostname-submit").removeClass("btn-outline-light").addClass("btn-outline-danger");
}