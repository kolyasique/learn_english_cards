/* eslint-disable react/button-has-type */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/self-closing-comp */
const React = require('react');
const Layout = require('../Layout');

module.exports = function AuthError() {
  return (
    <Layout>
      <div className="central-form-div">
        <h1>Эта страница доступна только авторизованным пользователям</h1>
        <a href="/login"> Войти</a>
        <a href="/registration"> Зарегистрироваться</a>
      </div>
    </Layout>
  );
};
