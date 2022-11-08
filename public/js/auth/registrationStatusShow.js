document.querySelector('#registration-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const login = event.target.login.value;
  const password = event.target.password.value;
  const password2 = event.target.password2.value;

  const checkRegistration = await fetch('/registration', {
    method: 'POST',
    body: JSON.stringify({ login, password, password2 }),
    headers: { 'Content-Type': 'application/json' },
  });

  // получаем с сервера
  const { status } = await checkRegistration.json();
  if (status === 'user created!') {
    document.querySelector('#incorrect-registration-data').innerHTML = "<p>Ты зарегистрирован, нужно войти</p> <a href='/login'> Сюда </a>";
  }
  if (status === 'user already exists') {
    document.querySelector('#incorrect-registration-data').innerHTML = "<p>Такой пользователь существует!</p> <a href='/login'> Сюда </a> ";
  }
  if (status === 'check password') {
    document.querySelector('#incorrect-registration-data').innerHTML = '<p>Пароли не совпадают</p> ';
  }
  if (status === 'nickname exists') {
    document.querySelector('#incorrect-registration-data').innerHTML = '<p>Никнейм занят уже есть</p> ';
  }
});
