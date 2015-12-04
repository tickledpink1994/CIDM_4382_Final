var users = require('../controllers/user.server.controller');

module.exports = function(app) {
    app.route('/users')
    .post(users.create)
    .get(users.list);
    
    app.route('/users/:userid')
    .get(users.read)
    .put(users.update)
    .delete(users.delete);
    
    app.param('userid', users.userByID);
};