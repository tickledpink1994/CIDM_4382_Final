angular.module('dungeon').controller('DungeonController', ['$scope', 'Authentication', '$routeParams', '$location', 'Dungeon', 
function($scope, Authentication, $routeParams, $location, Dungeon) {
    
    $scope.did = $routeParams.dungeonid;
    
    $scope.create = function() {
        console.log("creating new dungeon...");
        var dungeon = new Dungeon({
            Name: "New Dungeon",
            Description: "A quick general description of the exterior of the dungeon and any setup."
        });
        
        dungeon.$save(function(response) {
            console.log("Success: " + response._id);
            $location.path('/dungeon/' + response._id);
        }, function(errorResponse) {
            console.log('Error');
            $scope.error = errorResponse.data.message;
        });
    };
    
    
    $scope.find = function() {
        console.log("finding dungeons");
        $scope.dungeons = Dungeon.query();
        console.log($scope.dungeons);
    };
    
    $scope.findOne = function() {
        console.log("getting dungeon: " + $routeParams.dungeonid);
        $scope.dungeon = Dungeon.get({
            dungeonid: $routeParams.dungeonid
        });
        console.log($scope.dungeon);
    };
    
    $scope.update = function() {
        console.log($scope.dungeon + '\n' + $scope.dungeon._id);
        console.log($scope.dungeon.Name + '\n' + $scope.dungeon.Description);
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