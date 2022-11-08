const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ arrThemes }) {
  return (
    <Layout>
      <div className="themesContainer">
        <div className="section">
          <div className="row">
            {arrThemes.length
              ? arrThemes.map((theme) => (
                <div className="themeCard">
                  <a className="infText" href={`/${theme.id}`}>{theme.title}</a>
                </div>
              ))
              : <h3>Тем не существует!</h3>}
          </div>
        </div>
      </div>
    </Layout>
  );
};
