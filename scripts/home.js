function HomeIndex() {
/* properties */
    const heightFromTop = 300;
/* methods */
    this.initialiseScrollToTopButton = function () {
    /* window scroll event handler */
        $(window).scroll(function () {
            /* show or hide scroll to top button based on distance */
            var verticalHeight = $(this).scrollTop();
            if (verticalHeight > heightFromTop) {
                $("#scrollToTop").fadeIn();
            } else {
                $("#scrollToTop").fadeOut();
            }
        });
    /* scroll to top click event handler */
        $("#scrollToTop").click(function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
    }
}
$(document).ready(function () {
    /* Instantiate new Home class */
    app.homeIndex = new HomeIndex();
/* initialize scroll to top button */
    app.homeIndex.initialiseScrollToTopButton();
});