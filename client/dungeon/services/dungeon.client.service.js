angular.module('dungeon').factory('Dungeon', ['$resource', function($resource) {
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