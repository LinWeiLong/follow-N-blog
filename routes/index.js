module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('/posts');
    });
    app.use('/signup', require('./signup.js'));
    app.use('/signin', require('./signin.js'));
    app.use('/signout', require('./signout.js'));
    app.use('/posts', require('./posts.js'));
};