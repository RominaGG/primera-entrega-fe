document.addEventListener('DOMContentLoaded', function () {
  
  const sections = document.querySelectorAll('.info-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  
  const techItems = document.querySelectorAll('.tech-item');
  techItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  });
});