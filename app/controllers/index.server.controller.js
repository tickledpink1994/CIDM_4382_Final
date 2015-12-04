exports.render = function(req, res) {
    res.render('index', {
        dungeon: JSON.stringify(req.dungeon)
    });
};