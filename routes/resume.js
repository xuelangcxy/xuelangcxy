var express = require('express');
var router = express.Router();

/* GET resume page. */
router.get('/', function(req, res, next) {
  res.render('resume', { title: '陈雪勇 | 个人简历' });
});

module.exports = router;
