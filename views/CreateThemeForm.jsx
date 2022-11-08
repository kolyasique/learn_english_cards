/* eslint-disable react/button-has-type */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/self-closing-comp */
const React = require('react');

module.exports = function CreateThemeForm() {
  return (
    <div id="theme-form">
        <form action="/creationthemeform" method="POST">
          <h3> add Theme</h3>

          <div className="input-container ic1">
            <input id="firstname" className="input" name="word" type="text" placeholder=" " />
            <div className="cut"></div>
            <label htmlFor="firstname" className="placeholder">Слово на английском</label>
          </div>

          <div id="login-submit-btn">
            <button className="submit" type="SUBMIT"> Добавить </button>
          </div>
          <div className="cut"></div>
          <div id="login-status"></div>
        </form>
        <script defer src="/js/showThemeForm.js" />
        </div>

  );
};
