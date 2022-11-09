// let modal = $modal();

document.querySelector('#createFormButton').addEventListener('click', async (event) => {
  event.preventDefault();
//   const login = event.target.login.value;
//   const password = event.target.password.value;

  const loginErrorShow = await fetch('/creationform', {
    method: 'GET',
    // body: JSON.stringify({ login, password }),
    headers: { 'Content-Type': 'application/json' },
  });
});
