document.getElementById('opening-theme-form').onclick = function () {
  const themeForm = document.getElementById('opening-theme-form-btn');
  themeForm.style.display === 'none' ? themeForm.style.display = 'initial' : themeForm.style.display = 'none';
};
//* нужен слушатель событий возможно