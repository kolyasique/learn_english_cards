/* eslint-disable react/self-closing-comp */
const React = require('react');

module.exports = function Header({ userInSession }) {
  return (
    <div id="header-all">
      <img src="/img/logo.png" id="logo"></img>

      {
    userInSession ? (
      <div id="header-menu">
        <a href="/" id="authorizationbutton" className='menu-button'>Главная</a>

       <a href="/creationform" className='menu-button'>Добавить карточку</a>

       <a href="/statistic" className='menu-button'> Статистика </a>

        <a href="/login/logout" className='menu-button'>Выйти</a>
      </div>
    ) : (<div> Войдите или зарегистрируйтесь</div>)
}

    </div>
  );
};
