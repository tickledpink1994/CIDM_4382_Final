angular.module('menu').controller('MenuController', ['$scope', 'Dungeon', function($scope, Dungeon) {
    $scope.navmenu = [{ref: "dungeon", disp: "Main"}];
    /*for(var i = 0; i < Dungeon.levelCount; i++){
        var menuLink = {ref: "level", disp: "Level " & i};
        $scope.navmenu.push(menuLink);
    }*/
    //length is 1-indexed
    if($scope.navmenu.length < 2){ 
        $scope.navmenu.push({ref:"level", disp:"Level 1"});
    }
}]);