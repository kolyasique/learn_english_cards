/* eslint-disable react/button-has-type */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/self-closing-comp */
const React = require('react');
const Layout = require('../Layout');

module.exports = function Login() {
  return (
    <Layout>
      <div className="central-form-div">

        <form action="/login" method="POST" id="login-form">
          <h1>Войти</h1>
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

            <div id='login-submit-btn'>
          <button className="submit" type="SUBMIT"> Апдейт </button>
            </div>
          <div className="cut"></div>
          <div id="login-status"></div>
        </form>
      </div>
    </Layout>
  );
};

// /* eslint-disable react/button-has-type */
// /* eslint-disable react/void-dom-elements-no-children */
// /* eslint-disable react/self-closing-comp */
// const React = require('react');
// const Layout = require('../Layout');

// module.exports = function Login() {
//   return (
//     <Layout>
//       <div>
//         <h1>LOGIN</h1>
//         <form action="/login" method="POST" id="login-form">
//           <input type="text" name="login" placeholder="Введите логин" />
//           <input type="password" name="password" placeholder="Введите пароль" />
//           <button type="SUBMIT"> Войти </button>
//           <div id="login-status"></div>
//         </form>
//       </div>
//     </Layout>
//   );
// };
