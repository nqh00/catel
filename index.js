document.addEventListener('DOMContentLoaded', function() {
  var slider = tns({
    container: ".my-slider",
    items: 1,
    gutter: 20,
    slideBy: 1,
    controlsPosition: "bottom",
    navPosition: "bottom",
    mouseDrag: true,
    autoplay: true,
    autoplayButtonOutput: false,
    controlsContainer: "#control",
  });
});