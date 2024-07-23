$('.nav-tabs-dropdown')
    .on("click", ".nav-link:not('.active')", function (event) {
        // alert('e');
        $(this).closest('ul').removeClass("open");
    })
    .on("click", ".nav-link.active", function (event) {
        // alert('e');
        $(this).closest('ul').toggleClass("open");
    });

function scrollToMappers() {
    var elem = document.getElementById("mappers-section");
    elem.scrollIntoView();
}