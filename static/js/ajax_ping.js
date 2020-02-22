$("#hostname-submit").click(function () {
    $.post(
        "/ajax_ping",
        {
            hostname: $("#hostname-input").val()
        },
        function (data) {
            if (window.console) console.log(data.pings);
            $("#result-outputs").empty()
            for (let i = 0; i < data.pings.length; i++) {
                $("#result-outputs").append("<div><code>" + data.pings[i] + "</code> </div>")
            }
            $("#result-hostname-header").text($("#hostname-input").val());
            $("#rtt-min").text(data.rtt_min + " ms");
            $("#rtt-max").text(data.rtt_max + " ms");
            $("#rtt-avg").text(data.rtt_avg + " ms");
        }
    )
});