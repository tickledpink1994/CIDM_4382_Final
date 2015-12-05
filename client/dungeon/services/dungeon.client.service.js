angular.module('dungeon').factory('Dungeon', ['$resource', function($resource) {
    console.log("creating a new dungeon resource");
    return $resource('api/dungeon/:dungeonid', {
        dungeonid : '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
    
    /*
    this.dungeon = window.dungeon;
    
    return {
        dungeon: this.dungeon
    };
    */
}]);