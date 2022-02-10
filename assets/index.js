document.addEventListener('DOMContentLoaded', function() {
  tns({
    container: '.b-slider',
    items: 1,
    gutter: 20,
    slideBy: 1,
    controlsPosition: 'bottom',
    navPosition: 'bottom',
    mouseDrag: true,
    autoplay: true,
    autoplayButtonOutput: false,
    preventScrollOnTouch: true,
    controlsContainer: '#banner-control',
  });

  document.querySelectorAll('.p-slider').forEach(slider => {
    tns({
      container: slider,
      items: 5,
      gutter: 20,
      slideBy: 5,
      autoWidth: true,
      controlsPosition: 'bottom',
      nav: false,
      mouseDrag: true,
      preventScrollOnTouch: true,
      controlsContainer: slider.nextElementSibling,
      responsive: {
        479: {
          items: 3,
          slideBy: 3,
        },
        767: {
          gutter: 10,
          items: 4,
          slideBy: 4,
        },
      },
      lazyload: true,
    });
  });

  document.querySelectorAll('.price>span').forEach(tag => {
    const priceTag = Number(tag.innerHTML).toLocaleString('vi');
    tag.innerHTML = `${priceTag}\u20ab`;
  });

  const iso = new Isotope('.all-products', {
    itemSelector: '.product',
  });

  const filterElement = document.querySelector('.dropdown-menu');
  filterElement.addEventListener('click', function(event) {
    const filterValue = event.target.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });
  });
});