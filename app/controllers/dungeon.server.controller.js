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
    console.log('creating new dungeon...');
    var dungeon = new Dungeon(req.body);
    dungeon.createdon = Date.now();
    
    dungeon.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }else{
            console.log("Success");
            console.log(dungeon);
            res.json(dungeon);
        }
    });
};

exports.list = function(req, res) {
    console.log("Getting a list of dungeons");
    Dungeon.find().exec(function(err, dungeons) {
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
    console.log("Getting Dungeon by ID");
    console.log("ID: " + id);
    Dungeon.findById(id).exec(function(err, dungeon) {
        if (err) return next(err);
        if (!dungeon) return next(new Error('Failed to load dungeon ' + id));
        req.dungeon = dungeon;
        next();
    });
};

exports.read = function(req, res) {
    console.log("viewing a dungeon");
    res.json(req.dungeon);
};

exports.update = function(req, res) {
    console.log("Updating a dungeon");
    var dungeon = req.dungeon;
  
    console.log(req.dungeon);
    console.log(req.body);
    dungeon.Name = req.body.Name;
    dungeon.Description = req.body.Description;
      
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
    console.log("Deleting a dungeon");
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

exports.hasAuthorization = function(req, res, next) {
  if (req.dungeon.CreatedBy.id !== req.user.id) {
      return res.status(403).send({
          message: 'User is not authorized'
      });
  }
  next();
};