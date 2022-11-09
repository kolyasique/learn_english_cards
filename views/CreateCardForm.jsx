/* eslint-disable react/button-has-type */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/self-closing-comp */
const React = require('react');
const Layout = require('./Layout');
const CreateThemeForm = require('./CreateThemeForm');

module.exports = function CreateCardForm({ themeList, userInSession}) {
  return (
    <Layout userInSession={userInSession}>
      <div className="central-form-div">

        <form action="/creationform" method="POST" id="creation-form">
          <div className="form-header">
            <h1>Create word</h1>
          </div>
          <div className="title">Create word</div>
          <div className="subtitle">s perevodom</div>

          <div className="input-container ic1">
            <input id="firstname" className="input" name="word" type="text" placeholder=" " />
            <div className="cut"></div>
            <label htmlFor="firstname" className="placeholder">Слово на английском</label>
          </div>

          <div className="input-container ic2">
            <input id="lastname" className="input" name="translation" type="text" placeholder=" " />
            <div className="cut"></div>
            <label htmlFor="lastname" className="placeholder">Перевод слова</label>
          </div>

          <div className="input-container ic3">

            <select id="lastname" className="input-list" name="theme_id" size={`${themeList.length}`}>

              {themeList.map((el) => (
                <option value={el.id}>{el.title}</option>))}
            </select>
            {/* <p><input type="text" name="textInput" placeholder="Введите текст" /></p>
            <p><input type="text" name="valueInput" placeholder="Введите значение" /></p>
            <p>
              <input type="button" name="addButton" value="Добавить" />
              <input type="button" name="removeButton" value="Удалить" />
            </p> */}
            {/* <button type='click' id="opening-theme-form-btn">+</button>
          */}
          </div>
          <div className="cut"></div>

          {/* <div className="input-container ic2">
            <input id="lastname" className="input" name="translation" type="text" placeholder=" " />
            <div className="cut"></div>
            <label htmlFor="lastname" className="placeholder">Перевод слова</label>
          </div> */}
          
          <div className="cut"></div>
          {/* <div id="login-submit-btn"> */}
            <button className="submit" type="SUBMIT"> Добавить </button>
          {/* </div> */}
          <div className="cut"></div>
          <div id="login-status"></div>
        </form>
      </div>  
    </Layout>
  );
};
