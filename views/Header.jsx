/* eslint-disable react/self-closing-comp */
const React = require('react');

module.exports = function Header() {
  return (
    <div id="header-all">
      <img src='/img/logo.png' id="logo"></img>
      <div id="header-menu">

        <div><a href="/" id="authorizationbutton">Главная</a></div>
        <div id="vert-line-menu1"> </div>
        <button id="createFormButton"><a href="/creationform"> Добавить карточку</a></button>
        <div id="vert-line-menu2"> </div>
        <button><a href="/"> Статистика </a></button>
        <div id="vert-line-menu3"> </div>
        <button><a href="/login/logout">Выйти</a></button>
      </div>
      <hr />
    </div>
  );
};
