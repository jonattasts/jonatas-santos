//Bloqueia o click nos icones ocultos dos cards da seção Portifólio
$(".link-option").on("click", function (event) {
    if ($(this).css("opacity") == 0) {
        event.preventDefault();
        event.stopPropagation();
    }
});