/* eslint-disable react/button-has-type */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/self-closing-comp */
const React = require('react');
const Layout = require('../Layout');

module.exports = function Registration() {
  return (
    <Layout>
       <div className="central-form-div">

<form action="/registration" method="POST" id="registration-form">
  <h1>Регистрация</h1>
  <div className="title">privet english</div>
  <div className="subtitle">London is the capital of great britain</div>

  <div className="input-container ic1">
    <input id="firstname" className="input" name="login" type="text" placeholder=" " />
    <div className="cut"></div>
    <label htmlFor="firstname" className="placeholder">Логин</label>
  </div>

  <div className="input-container ic2">
    <input id="lastname" className="input" name="password" type="password" placeholder=" " />
    <div className="cut"></div>
    <label htmlFor="lastname" className="placeholder">Пароль</label>
  </div>

  <div className="input-container ic3">
    <input id="lastname" className="input" name="password2" type="password" placeholder=" " />
    <div className="cut"></div>
    <label htmlFor="lastname" className="placeholder">Еще раз</label>
  </div>

  <div id='registration-submit-btn'>
  <button className="submit" id='submit-registration' type="SUBMIT"> Зарегистрироваться </button>
  </div>

  <div className="cut"></div>
  <div id="incorrect-registration-data"> </div>

</form>
</div>
<script type="module" src="node_modules/spin.js/spin.js"></script>
    </Layout>
  );
};
