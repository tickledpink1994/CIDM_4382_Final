angular.module('dungeon').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/dungeon', {
        templateUrl: 'dungeon/views/create-dungeon.client.view.html'
    }).when('/gallery', {
        templateUrl: 'dungeon/views/list-dungeon.client.view.html'
    }).otherwise({
        redirectTo: 'dungeon'
    });
}]);