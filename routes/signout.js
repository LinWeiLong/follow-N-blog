var express = require('express');
var router = express.Router();

var checkNotLogin = require('../middlewares/check.js').checkNotLogin;


// POST /signout 用户登出
router.post('/', checkNotLogin, function(req, res, next) {
    res.send(req.flash());
})

module.exports = router;