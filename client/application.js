//set up the dungeon module
var dungeonModuleName = "DungeonModule";
var dungeonModule = angular.module(dungeonModuleName, ['ngResource', 'ngRoute', 'ui.bootstrap', 'users', 'dungeon']);

dungeonModule.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('!');
}]);

if (window.location.hash ==='#/_=_') window.location.hash = '#!';

angular.element(document.querySelectorAll('section.dungeonModule')).ready(function() {
    angular.bootstrap(document.querySelectorAll('section.dungeonModule'), [dungeonModuleName]);
});