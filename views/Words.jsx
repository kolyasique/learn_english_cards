const React = require('react');
const Layout = require('./Layout');

module.exports = function Words({
  theme, words, userInSession, statusForLink,
}) {
  return (
    <Layout userInSession={userInSession}>
      <script defer src="/js/words.js" />
      <h2 className="wordTitle">
        Категория:
        {' '}
        {theme.title}
      </h2>


      <div className='testHref'>
      {statusForLink.status === true ? (
        <div className="wordTitle2">
          <h3 id='begginTestButton'>
            <a href={`/test/${theme.id}`} className="testLink">Пройти тест!</a>
          </h3>
        </div>
      ) : (
        <div>
        <div className="wordTitle3 disabled">
          <h3 id='begginTestButton'>
          <a href={`/test/${theme.id}`} className="testLink" style={{color:'white'}}>Пройти тест!</a>
          </h3>
        </div>

        <div className="wordTitle4">
          <h3 id='textTestBegin'>
            <p className="testLink2">Для того, чтобы пройти тест, запомните все слова!</p>
          </h3>
        </div>
        </div>
      )}

      </div>
      <div className="wordsPage">
        {words.length
          ? words.map((word) => (
            <>
              {(word.Wordstatuses.filter((el) => el.user_id === userInSession.id && el.status === true).length !== 0) ? (
                <div className="card-done" id={`card-${word.id}`} key={word.id}>
                  <div className="half">
                    {word.word}
                    {' '}
                  </div>
                  <hr />
                  <div className="half">{word.translation}</div>
                  <button className="buttonDelete" name={word.id} style={userInSession.id === word.created_by ? { display: 'block' } : { display: 'none' }}>Удалить</button>
                </div>
              ) : (
                <div className="card" id={`card-${word.id}`} key={word.id}>
                  <div className="cardFace front">{word.word}</div>
                  <div className="cardFace back">
                    <div>{word.translation}</div>
                    <button id="buttonDone" data-word-id={word.id} data-rus-id={word.translation} data-eng-id={word.word} data-theme-id={theme.id} key={word.id}>
                      <a href={`/words/remember/${theme.id}/${word.id}`} />
                      {' '}
                      Запомнил
                      {' '}
                    </button>
                  </div>
                </div>

              )}
            </>

          ))
          : <h3>Слов не существует!</h3>}
      </div>
    </Layout>
  );
};
