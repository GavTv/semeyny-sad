document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');

  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('header--scrolled', window.scrollY > 50);
    });
  }

  const closeNav = () => {
    burger?.classList.remove('burger--open');
    nav?.classList.remove('nav--open');
    document.body.classList.remove('nav-open');
  };

  if (burger && nav) {
    burger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav--open');
      burger.classList.toggle('burger--open', isOpen);
      document.body.classList.toggle('nav-open', isOpen);
    });

    nav.querySelectorAll('.nav__link, .nav__extra').forEach(link => {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeNav();
    });

    nav.addEventListener('click', e => {
      if (e.target === nav) closeNav();
    });
  }

  const fadeElements = document.querySelectorAll('.fade-in');
  if (fadeElements.length) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    fadeElements.forEach(el => observer.observe(el));
  }
});
