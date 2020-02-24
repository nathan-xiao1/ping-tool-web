$("#hostname-submit-btn").click(function () {
    reset_error();
    displayLoading();
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
            loadingFinish();
        }
    )
});