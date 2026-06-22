/* ===== Mobile menu ===== */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = mobileMenu.querySelectorAll('a');

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* ===== GSAP scroll reveals ===== */
gsap.registerPlugin(ScrollTrigger);

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReduced) {
  const reveals = document.querySelectorAll(
    '.tjeneste-card, .trust__item, .kontakt__detail, .partner-card, ' +
    '.section-header, .om-oss__content, .om-oss__visual, .cta-section__inner, ' +
    '.hero__content, .hero__visual, .kontakt__info, .kontakt__map'
  );

  reveals.forEach(el => {
    el.classList.add('reveal');
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true
      }
    });
  });
}

/* ===== Header background on scroll ===== */
const header = document.getElementById('header');
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      header.style.background = window.scrollY > 40
        ? 'rgba(250,250,247,.95)'
        : 'rgba(250,250,247,.85)';
      ticking = false;
    });
    ticking = true;
  }
});
