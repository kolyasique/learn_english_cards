document.querySelector('#login-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const login = event.target.login.value;
  const password = event.target.password.value;

  const loginErrorShow = await fetch('/login', {
    method: 'POST',
    body: JSON.stringify({ login, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  // получаем с сервера
  const { status } = await loginErrorShow.json();
  console.log(status, '++++++++++++++++++++++++++++++++++');
  if (status === 'false') {
    document.querySelector('#login-status').innerHTML = "<p>Пользователь не зарегистрирован</p> <a href='/registration'> Регистрация </a>";
  }
  if (status === 'wrong password') {
    document.querySelector('#login-status').innerHTML = '<p>Неверный пароль</p>';
  }
  if (status === 'true') {
    document.querySelector('#login-status').innerHTML = '<p>Успешный вход</p>';
    setTimeout(() => {
      window.location.replace('/');
    }, 1000);
  }
});
