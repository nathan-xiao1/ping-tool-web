let template = $('#result-template').html();

function handleResult(data) {

    let resultCard = $(template).clone();

    for (let i = 0; i < data.pings.length; i++) {
        $(resultCard).find(".result-output").append("<div><code>" + data.pings[i] + "</code> </div>")
    }

    $(resultCard).find(".title").text(data.title);
    // $(resultCard).find(".ip").text(data.ip);
    $(resultCard).find(".rtt-min").text(data.rtt_min + " ms");
    $(resultCard).find(".rtt-max").text(data.rtt_max + " ms");
    $(resultCard).find(".rtt-avg").text(data.rtt_avg + " ms");

    if (!data.success) {
        $(resultCard).find(".badge-success").css("display", "none")
        $(resultCard).find(".badge-danger").css("display", "inline-block")
    }

    $("#result-container").prepend(resultCard);

    $(resultCard).find(".close").click(function () {
        $(this).parent().parent().remove();
    });

}