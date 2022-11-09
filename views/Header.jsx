/* eslint-disable react/self-closing-comp */
const React = require('react');

module.exports = function Header({ userInSession }) {
  return (
    <div id="header-all">
      <img src="/img/logo.png" id="logo"></img>

      {
    userInSession ? (
      <div id="header-menu">
        <button><a href="/" id="authorizationbutton">Главная</a></button>

        <button><a href="/creationform">Добавить карточку</a></button>

        <button><a href="/"> Статистика </a></button>

        <button><a href="/login/logout">Выйти</a></button>
      </div>
    ) : (<div> Войдите или зарегистрируйтесь</div>)
}

    </div>
  );
};
