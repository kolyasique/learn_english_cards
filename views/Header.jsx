/* eslint-disable react/self-closing-comp */
const React = require('react');

module.exports = function Header() {
  return (
    <div id="header-all">

      <div id="header-menu">
        <div><a href="/main" id="authorizationbutton">Главная</a></div>
        <div id="vert-line-menu1"> </div>
        <div><a href="/"> Добавить карточку</a></div>
        <div id="vert-line-menu2"> </div>
        <div><a href="/"> Статистика </a></div>
        <div id="vert-line-menu3"> </div>
        <div><a href="/t">Выйти</a></div>
      </div>
      <hr />
    </div>
  );
};
