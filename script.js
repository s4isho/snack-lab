/* ============================================================
   SCRIPT.JS — Interactive behaviour for the promotional site
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initCarouselDots();
  initSmoothScroll();
  initBackToTop();
});

/* ------------------------------------------------------------
   1. MOBILE NAVIGATION TOGGLE
   ------------------------------------------------------------ */
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');

  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ------------------------------------------------------------
   2. CAROUSEL DOT NAVIGATION
   ------------------------------------------------------------ */
function initCarouselDots() {
  const track = document.getElementById('product-carousel');
  const dots  = document.querySelectorAll('.carousel-dot');

  if (!track || dots.length === 0) return;

  // Click a dot → scroll to the corresponding card
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = Number(dot.dataset.index);
      const card  = track.children[index];
      if (card) {
        card.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    });
  });

  // Update active dot while scrolling
  track.addEventListener('scroll', () => {
    const cardWidth = track.children[0]?.offsetWidth || 1;
    const scrollLeft = track.scrollLeft;
    const activeIndex = Math.round(scrollLeft / cardWidth);

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === activeIndex);
    });
  });
}

/* ------------------------------------------------------------
   3. SMOOTH SCROLL FOR ANCHOR LINKS
   (CSS already sets scroll-behavior: smooth, but this
    ensures offset for the sticky header.)
   ------------------------------------------------------------ */
function initSmoothScroll() {
  const header = document.getElementById('site-header');
  const headerHeight = header ? header.offsetHeight : 0;

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ------------------------------------------------------------
   4. BACK-TO-TOP BUTTON
   ------------------------------------------------------------ */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}