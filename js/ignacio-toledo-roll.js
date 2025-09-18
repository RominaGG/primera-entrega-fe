document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleCard');
  const content = document.querySelector('.profile__content');
  const card = document.querySelector('.card.profile');
  const reveal = document.querySelector('.reveal-sequence');
  const photo = document.querySelector('.profile__photo');

  setTimeout(() => {
    content.classList.add('is-open');
  }, 180);

  if (reveal) {
    setTimeout(() => reveal.classList.add('is-ready'), 300);
  }

  toggleButton.addEventListener('click', function () {
    content.classList.toggle('is-open');
  });

  if (photo && card) {
    card.addEventListener('mousemove', function (e) {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const tx = x * 10;
      const ty = y * 10;
      photo.style.transform = `translate3d(${tx}px, ${ty - 6}px, 0) scale(1.02)`;
      photo.classList.add('parallax');
    });
    card.addEventListener('mouseleave', function () {
      photo.style.transform = '';
      photo.classList.remove('parallax');
    });
    window.addEventListener('scroll', function () {
      const rect = card.getBoundingClientRect();
      const offset = Math.max(-100, Math.min(100, (window.innerHeight - rect.top) / 30));
      photo.style.transform = `translate3d(0, ${offset * -0.6}px, 0)`;
    }, { passive: true });
  }
});