let template = $('#result-template').html();

function handleResult(data) {

    let resultCard = $(template).clone();

    for (let i = 0; i < data.pings.length; i++) {
        $(resultCard).find(".result-output").append("<div><code>" + data.pings[i] + "</code> </div>")
    }

    $(resultCard).find(".hostname").text(data.hostname);
    $(resultCard).find(".ip").text(data.ip);
    $(resultCard).find(".rtt-min").text(data.rtt_min + " ms");
    $(resultCard).find(".rtt-max").text(data.rtt_max + " ms");
    $(resultCard).find(".rtt-avg").text(data.rtt_avg + " ms");

    $("#result-container").prepend(resultCard);

    $(resultCard).find(".close").click(function () {
        $(this).parent().parent().remove();
    });

}

function reset_error() {
    $("#hostname-input").removeClass("is-invalid");
    $("#hostname-submit").removeClass("btn-outline-danger").addClass("btn-outline-light");
}

function error() {
    $("#hostname-input").addClass("is-invalid");
    $("#hostname-submit").removeClass("btn-outline-light").addClass("btn-outline-danger");
}