let template = $('#result-template').html();

function handleResult(data) {

    let resultCard = $(template).clone();

    $(resultCard).find(".title").text(data.country);

    $(resultCard).find(".domain").text(data.domain_name[0]);
    $(resultCard).find(".crt-date").text(data.creation_date[0]);
    $(resultCard).find(".exp-date").text(data.expiration_date[0]);

    $(resultCard).find(".registrar").text(data.registrar);
    $(resultCard).find(".whois").text(data.whois_server);
    $(resultCard).find(".upd-date").text(data.updated_date[0]);
    $(resultCard).find(".emails").html(data.emails.join("<br>"));
    
    $(resultCard).find(".org").text(data.org);
    $(resultCard).find(".country").text(data.country);
    
    $("#result-container").prepend(resultCard);

    $(resultCard).find(".close").click(function () {
        $(this).parent().parent().remove();
    });

}