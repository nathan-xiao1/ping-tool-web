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
            handleResult(data);
        }
    )
});