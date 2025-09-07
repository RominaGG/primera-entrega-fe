document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleCard');
  const content = document.querySelector('.profile__content');

  toggleButton.addEventListener('click', function () {
    content.classList.toggle('is-open');
  });
});
