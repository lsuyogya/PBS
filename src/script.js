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
