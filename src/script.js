document.addEventListener('DOMContentLoaded', () => {
  let lastScrollY = 0;
  const header = document.querySelector('header');
  let headerHeight = header.getBoundingClientRect().height;
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      if (currentScrollY > headerHeight) {
        header.style.transform = 'translateY(-100%)';
      }
    } else {
      header.style.transform = 'translateY(0)';
    }
    lastScrollY = currentScrollY;
  });
  window.addEventListener('resize', () => {
    headerHeight = header.getBoundingClientRect().height;
  });
});

//splide Initialization
document.addEventListener('DOMContentLoaded', function () {
  new Splide('.testimonialSlider', {
    type: 'slide',
    perPage: 4,
    autoplay: true,
    interval: 9000,
    pauseOnHover: true,
    pauseOnFocus: true,
    resetProgress: false,
    arrows: true,
    pagination: false,
    gap: '1.25rem',
    breakpoints: {
      1400: {
        perPage: 3,
      },
      992: {
        perPage: 2,
      },
      768: {
        perPage: 1,
      },
    },
  }).mount();
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerButton = document.getElementById('hamburgerButton');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeButton = document.getElementById('closeButton');
  const overlay = document.getElementById('overlay');

  hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('modal-open');
  });

  closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('modal-open');
  });

  overlay.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('modal-open');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.dropdown');
  const dropdownMenu = dropdown.nextElementSibling;

  dropdown.addEventListener('click', function (event) {
    event.preventDefault();
    dropdownMenu.classList.toggle('opacity-0');
    dropdownMenu.classList.toggle('opacity-100');
  });

  document.addEventListener('click', function (event) {
    if (
      !dropdown.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.add('opacity-0');
      dropdownMenu.classList.remove('opacity-100');
    }
  });
});
