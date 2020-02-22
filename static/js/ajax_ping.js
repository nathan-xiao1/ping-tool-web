$("#hostname-submit").click(function() {
    $.post(
        "/ajax_ping",
        {
            hostname: $("#hostname-input").val()
        },
        function(data) {
            // if (window.console) console.log(data.ping);
            $("#result-table-entries").append('<tr><th scope="row">'+ data.hostname + '</th><td>' + data.ping + ' ms</td></tr>')
        }
    )
});