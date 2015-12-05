var users = require('../controllers/user.server.controller');
var passport = require('passport');

module.exports = function(app) {
    app.route('/signup')
    .post(users.signup)
    .get(users.renderSignup);
    
    app.route('/users/:userid')
    .get(users.renderSignin)
    .put(passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/signin',
        failureFlash: true
    }));
    
    app.get('/signout', users.signout);
};