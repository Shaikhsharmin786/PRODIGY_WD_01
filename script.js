const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const scrollProgress = document.getElementById('scrollProgress');

// Scroll: change nav style + update progress bar
window.addEventListener('scroll', () => {
  // Toggle scrolled class on navbar
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Update scroll progress bar width
  const scrollTop = document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const pct = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = pct + '%';
});

// Hamburger toggle (mobile)
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});