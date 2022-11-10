const React = require('react');
const Layout = require('./Layout')

module.exports = function Statistics({ userInSession, arrThemes, arrWords, arrWordStatus, arrAllTest}) {
  return (
    <Layout userInSession={userInSession}>
      <div className="central-form-div2">

        <div className='progress'>
        <h1 style={{color:'black'}}>Прогресс</h1>
        <p>Ты запомнил:</p>
        <p>{arrWordStatus.length}/{arrWords.length} слов</p>
        <progress id="file" value={arrWordStatus.length} max={arrWords.length}> {(arrWordStatus.length)/(arrWords.length)*100}% </progress>
        </div>

        <div className="themesContainer2">

            {arrThemes.length
                ? arrThemes.map((theme, id) => (
                  <div className="themeCard2">
                      {/* <div>{theme.Word[0].id}</div> */}
                      {/* arrThemes[1].Words[2].Wordstatuses.find(el => el.user_id == req.session.user.id) */}
                    <p className='infText'>{theme.title}</p>
                    <progress id="file" value={theme.Words.reduce((acc,el)=> acc + el.Wordstatuses.filter(el=>el.user_id===userInSession.id).length, 0)} max={theme.Words.length}> {(arrWordStatus.length)/(arrWords.length)*100}% </progress>
                   <p style={{color:'white'}}>{theme.Words.reduce((acc,el)=> acc + el.Wordstatuses.filter(el=>el.user_id===userInSession.id).length, 0)}/{theme.Words.length}</p>
                   <div className='testScroll'>
                    <p>{theme.AllTests.filter(el=>el.user_id === userInSession.id).map(el=>{
                        return(
                            // <div>{el.login}, {el.createdAt.toLocaleString()}</div>
                            // <div>{el.login}, {el.createdAt.toTimeString()}</div>
                            // <div>{el.login}, {el.createdAt.toLocaleTimeString()}</div>
                            <div className='testInfo'>
                                <div className='testInfo2'> 
                                    <p>Тест от: <p style={{fontWeight:'bold'}}>{el.createdAt.toLocaleString()}</p></p>
                                </div>
                                    <div className='testInfo2'>
                                    <p style={{color:'darkGreen'}}>{el.correct} Правильно</p>
                                    <p style={{color:'red'}}>{el.incorrect} Неправильно</p>
                                    </div>
                            </div>
                        )
                    })} </p>
                    </div>

                  </div>
                ))
                : <h3>Тем не существует!</h3>}
                </div>
            </div>
    </Layout>
  );
};
