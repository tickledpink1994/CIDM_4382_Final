var Dungeon = require("mongoose").model("Dungeon");

var getErrorMessage = function(err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) {
                return err.errors[errName].message;
            }
        }
    } else {
           return 'Unknown server error.';
    }
};

exports.create = function(req, res, next) {
    var dungeon = new Dungeon(req.body);
    dungeon.createdby = req.user;
    dungeon.createdon = Date.now();
    
    dungeon.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }else{
            res.json(dungeon);
        }
    });
};

exports.list = function(req, res) {
    Dungeon.find().sort('-CreatedOn').populate('CreatedBy').exec(function(err, dungeons) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }else{
            res.json(dungeons);
        }
    });
};

exports.dungeonByID = function(req, res, next, id) {
  Dungeon.findById(id)  .populate('CreatedBy').exec(function(err, dungeon) {
      if (err) return next(err);
      if (!dungeon) return next(new Error('Failed to load dungeon ' + id));
      req.dungeon = dungeon;
      next();
  });
};

exports.read = function(req, res) {
  res.json(req.dungeon)  ;
};

exports.update = function(req, res) {
  var dungeon = req.dungeon;
  
  dungeon.Name = req.body.name;
  dungeon.Description = req.body.desc;
  
  dungeon.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }else{
            res.json(dungeon);
        }
    });
};

exports.delete = function(req, res) {
    var dungeon = req.dungeon;
    
    dungeon.remove(function(err){
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }else{
            res.json(dungeon);
        }
    });
};