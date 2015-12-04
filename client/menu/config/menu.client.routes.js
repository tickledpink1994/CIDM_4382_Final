angular.module('menu').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/dungeon', {
        templateUrl: 'menu/views/menu.client.view.html'
    }).when('/level', {
        templateUrl: 'menu/views/menu.client.view.html'
    }).otherwise({
        redirectTo: '/'
    });
}]);