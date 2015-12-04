angular.module('dungeon').controller('DungeonController', ['$scope', '$routeParams', '$location', 'Dungeon', 
function($scope, $routeParams, $location, Dungeon) {
    
    $scope.create = function() {
        var dungeon = new Dungeon({
            name: "New Dungeon"
        });
        
        dungeon.$save(function(response) {
            $location.path('dungeon/' + response._id);
        }, function(errorResponse) {
            $scope.error = errorResponse.data.message;
        });
    };
    
    
    $scope.find = function() {
        $scope.dungeons = Dungeon.query();
    };
    
    $scope.findOne = function() {
        $scope.dungeon = Dungeon.get({
            dungeonid: $routeParams.dungeonid
        });
    };
    
    $scope.update = function() {
        $scope.dungeon.$update(function() {
            $location.path('dungeon/' + $scope.dungeon._id);
        }, function(errorResponse) {
            $scope.error = errorResponse.data.message;
        });
    };
    
    $scope.delete = function (dungeon) {
        if (dungeon) {
            dungeon.$remove(function() {
                for (var i in $scope.dungeons) {
                    if ($scope.dungeons[i] === dungeon) {
                        $scope.dungeons.splice(i, 1);
                    }
                }
            });
        } else {
            $scope.dungeon.$remove(function() {
                $location.path('dungeon');
            })
        }
    };

    /*$scope.addLevel = function() {
        var levelCount = $scope.dungeon.Levels.length;
        $scope.dungeon.Levels.push({GMID: levelCount + 1});
        $scope.updateMenu();
    };
    
    $scope.updateMenu = function(){*/
        //console.log($scope.dungeon);
        //console.log($scope.dungeon.Levels);
        //var levelCount = $scope.dungeon.Levels.length;
        $scope.navmenu = [{ref:"DungeonGeneral", disp:"Main", hidemain:false, gmid: -1}];
        /*for(var i = 0; i < levelCount; i++){
            var menuLink = {ref: "DungeonLevel", disp: "Level " & i, hidemain:true, gmid: i};
            $scope.navmenu.push(menuLink);
        }*/
        //length is 1-indexed
        if($scope.navmenu.length < 2){ 
            $scope.navmenu.push({ref:"DungeonLevel", disp:"Level 1", hidemain:true, gmid: 1});
        }  
    //};
    
}]);