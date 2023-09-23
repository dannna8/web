var express = require('express');
var router = express.Router();

/* 지역검색 */
router.get('/', function(req, res, next) {
  res.render('index', { title: '지역검색', pageName:'locals/search.ejs' }); //랜더링하는 확장자는 ejs
});

module.exports = router;
