import "./scss/style.scss";
import 'bootstrap';
import { tns } from "../node_modules/tiny-slider/src/tiny-slider";

if ($.contains(document.body, document.getElementById('slider-main'))) {

    var slider_main = tns({
        container: '#slider-main',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        autoplayHoverPause: true,
        autoplayButtonOutput: false,
        controls: false,
        navPosition: 'bottom'
    });

    $(document).on("scroll", function() {
        $(".block-banner-main .slider-main .items").css({"background-position": "center "+ Math.round($(this).scrollTop() / 6 - 100) +"px"});
    });
}