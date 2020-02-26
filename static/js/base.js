function reset_error() {
    $("#hostname-input").removeClass("is-invalid");
    $("#hostname-submit-btn").removeClass("btn-outline-danger").addClass("btn-outline-light");
}

function error() {
    $("#hostname-input").addClass("is-invalid");
    $("#hostname-submit-btn").removeClass("btn-outline-light").addClass("btn-outline-danger");
}

function displayLoading() {
    $("#hostname-submit-btn").attr("disabled", "");
    $("#hostname-submit-btn-text").css("display", "none");
    $("#hostname-submit-btn-spinner").css("display", "block");
}

function loadingFinish() {
    $("#hostname-submit-btn").removeAttr("disabled");
    $("#hostname-submit-btn-text").css("display", "block");
    $("#hostname-submit-btn-spinner").css("display", "none");
}