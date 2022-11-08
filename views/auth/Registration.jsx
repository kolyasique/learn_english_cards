/* eslint-disable react/button-has-type */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/self-closing-comp */
const React = require('react');
const Layout = require('../Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <div>
        <h1>REGISTRATION</h1>
        <form action="/registration" method="POST" id="registration-form">
          <input type="text" name="login" placeholder="Введите логин" />
          <input type="password" name="password" placeholder="Введите пароль" />
          <input type="password" name="password2" placeholder="Повторите пароль" />
          <button type="SUBMIT"> Войти </button>
          <div id="incorrect-registration-data"> </div>
        </form>
      </div>
    </Layout>
  );
};
