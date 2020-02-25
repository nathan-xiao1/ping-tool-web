$("#hostname-submit-btn").click(function () {
    reset_error();
    displayLoading();
    $.post(
        "/ajax_ping",
        {
            hostname: $("#hostname-input").val()
        },
        function (data) {
            loadingFinish();
            if (data === undefined) {
                error();
                return;
            }
            handleResult(data);
        }
    )
});