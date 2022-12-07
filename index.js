//Buscador tabla
jQuery("#buscador").keyup(function () {
    if (jQuery(this).val() != "") {
        jQuery("#tablaLaWebera tbody>tr").hide();
        jQuery("#tablaLaWebera td:contiene-palabra('" + jQuery(this).val() + "')").parent("tr").show();
    }
    else {
        jQuery("#tablaLaWebera tbody>tr").show();
    }
});

jQuery.extend(jQuery.expr[":"],
    {
        "contiene-palabra": function (elem, i, match, array) {
            return (elem.textContent || elem.innerText || jQuery(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
        }
    });

//Buscador de cartas de los paises
$(document).ready(function () {
    $('#buscador-pais').keyup(function () {
        var nombres = $('.card-title');
        var buscando = $(this).val();
        var item = '';
        for (var i = 0; i < nombres.length; i++) {
            item = $(nombres[i]).html().toLowerCase();
            for (var x = 0; x < item.length; x++) {
                if (buscando.length == 0 || item.indexOf(buscando) > -1) {
                    $(nombres[i]).parents('.card').show();
                } else {
                    $(nombres[i]).parents('.card').hide();
                }
            }
        }
    });
});