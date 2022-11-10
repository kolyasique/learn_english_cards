const React = require('react');
const Layout = require('./Layout');


module.exports = function Words({theme, words, userInSession}) {

  return (
    <Layout userInSession={userInSession}>
      <script defer src="/js/words.js" />
      <h2 className="wordTitle">
        Категория:
        {' '}
        {theme.title}
      </h2>
      <h3 className="wordTitle">
        <a href={`/test/${theme.id}`} className="testLink">Пройти тест по выбранной категории</a>
      </h3>
      <div className="wordsPage">
        {words.length
          ? words.map((word) => (
            <>
            {(word.Wordstatuses.filter(el=>el.user_id === userInSession.id && el.status === true ).length !==0) ?(
             <div className="card-done" id={`card-${word.id}`} key={word.id}>
             <div className='half'>{word.word} </div>
             <hr/>
             <div className='half'>{word.translation}</div>
             </div>
            ):(
              <div className="card" id={`card-${word.id}`} key={word.id} >
              <div className="cardFace front">{word.word}</div>
                <div className="cardFace back" >
                  <div>{word.translation}</div>
                <button id='buttonDone' data-word-id={word.id} data-rus-id={word.translation} data-eng-id={word.word} key={word.id}><a href={`/words/remember/${word.id}`}></a> Запомнил </button>
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
