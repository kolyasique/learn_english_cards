const statisticRouter = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Statistics = require('../views/Statistics');
const { Theme, Word, AllTest, Wordstatus } = require('../db/models');

statisticRouter.get('/', async (req, res) => {
  try {
    const userInSession = req.session.user;
    const arrThemes = await Theme.findAll({include:[{
        model: AllTest, 
        // where:{user_id: userInSession.id}
    }, {
        model: Word, include: Wordstatus,
    }]});

    
  
    const arrWords = await Word.findAll({include: Wordstatus});
    const arrWordStatus = await Wordstatus.findAll({where:{user_id: userInSession.id, status:true}})
    const arrAllTest = await AllTest.findAll({where:{user_id: userInSession.id}})

    // let searchElement
    // let themeName
    // for(let i = 0; i < arrAllTest.length; i++){
    //      searchElement = arrAllTest[i].theme_id
    //     //  console.log(searchElement)
    //      themeName = arrThemes.find(el => el.id == searchElement)
    //     arrAllTest[i].dataValues.name = themeName.dataValues.title
    // }
  
    // const allWords = await Word.findAll()
    // console.log(arrAllTest)
    // console.log(arrThemes[1].Words[2].Wordstatuses.find(el => el.user_id == req.session.user.id));
    // console.log(arrThemes);

    renderTemplate(Statistics, {userInSession, arrThemes, arrWords, arrWordStatus, arrAllTest}, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = statisticRouter;
