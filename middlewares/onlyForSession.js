const onlyForSession = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/autherror');
  }
};

module.exports = onlyForSession;
