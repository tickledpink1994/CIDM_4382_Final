var dungeon = require("../controllers/dungeon.server.controller");

module.exports = function(app) {
    
    app.route('/api/dungeon')
    .get(dungeon.list)
    .post(dungeon.create);
    
    app.route('/api/dungeon/:dungeonid')
    .get(dungeon.read)
    .put(dungeon.update)
    .delete(dungeon.delete);
    
    app.param('dungeonid', dungeon.dungeonByID);
};