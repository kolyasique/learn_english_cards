const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ arrThemes }) {
  return (
    <Layout>
      <div className="central-form-div">
        <h1 className="themeTitle">Выберите тему:</h1>
        <div className="themesContainer">
          {arrThemes.length
            ? arrThemes.map((theme) => (
              <div className="themeCard">
                <a href={`/${theme.id}`}>{theme.title}</a>
              </div>
            ))
            : <h3>Тем не существует!</h3>}
        </div>
      </div>
    </Layout>
  );
};
