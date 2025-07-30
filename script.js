// Example: Add smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

//Add dark mode toggle and scroll effects
document.querySelector('.dark-mode-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});
document.addEventListener('scroll', function() {
  document.body.classList.toggle('scroll-active', window.scrollY > 0);
});

