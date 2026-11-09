// MOBILE NAVIGATION

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {

  const isOpen = nav.classList.toggle('open');

  menuButton.setAttribute(
    'aria-expanded',
    String(isOpen)
  );

  menuButton.textContent = isOpen ? '×' : '☰';

});


// CLOSE MOBILE MENU WHEN A LINK IS CLICKED

nav?.querySelectorAll('a').forEach(link => {

  link.addEventListener('click', () => {

    nav.classList.remove('open');

    menuButton?.setAttribute(
      'aria-expanded',
      'false'
    );

    if (menuButton) {
      menuButton.textContent = '☰';
    }

  });

});


// REVEAL SECTIONS AS THEY ENTER THE VIEWPORT

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {

  const observer = new IntersectionObserver(
    (entries, obs) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add('visible');

          obs.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );

  revealItems.forEach(item => {
    observer.observe(item);
  });

} else {

  revealItems.forEach(item => {
    item.classList.add('visible');
  });

}


// UPDATE COPYRIGHT YEAR AUTOMATICALLY

const year = document.querySelector('#year');

if (year) {

  year.textContent = new Date().getFullYear();

}
