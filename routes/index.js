module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('/posts');
        // res.render('index')
    });


    app.use('/signup', require('./signup.js'));
    app.use('/signin', require('./signin.js'));
    app.use('/signout', require('./signout.js'));
    app.use('/posts', require('./posts.js'));
    // 404 page
    // 放到最下面，是因为路由规则是按顺序来的，放在上面，就会直接进去404了
    app.use(function (req, res) {
        if (!res.headersSent) {
            res.status(404).render('404');
        }
    });
    app.use(function (err, req, res, next) {
        res.render('error', {
            error: err
        });
    });
};
