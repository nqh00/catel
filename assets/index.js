document.addEventListener('DOMContentLoaded', function() {
  const bsli = tns({
    container: '.b-slider',
    items: 1,
    gutter: 20,
    slideBy: 1,
    controlsPosition: 'bottom',
    navPosition: 'bottom',
    mouseDrag: true,
    autoplay: true,
    autoplayButtonOutput: false,
    controlsContainer: '#banner-control',
  });

  const psli = tns({
    container: '.p-slider',
    items: 5,
    gutter: 20,
    slideBy: 5,
    controlsPosition: 'bottom',
    navPosition: 'bottom',
    mouseDrag: true,
    controlsContainer: '#topprod-control',
  });
});