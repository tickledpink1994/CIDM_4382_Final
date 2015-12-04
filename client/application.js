//set up the dungeon module
var dungeonModuleName = "DungeonModule";
var dungeonModule = angular.module(dungeonModuleName, ['ngResource', 'ngRoute', 'ui.bootstrap', 'dungeon']);
dungeonModule.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('!');
}]);
angular.element(document.querySelectorAll('section.dungeonModule')).ready(function() {
    angular.bootstrap(document.querySelectorAll('section.dungeonModule'), [dungeonModuleName]);
});

/*
//setup the menubar module
var menuModuleName = "menuModule";
var menuModule = angular.module(menuModuleName, ['ngResource', 'ngRoute', 'dungeon', 'menu']);
menuModule.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('!');
}]);
angular.element(document.querySelectorAll('section.menuModule')).ready(function() {
    angular.bootstrap(document.querySelectorAll('section.menuModule'), [menuModuleName]);
});
*/

//setup the Mapping Module
//var mapModuleName = "MapModule";
//var mapModule = angular.module(mapModuleName, ['ngRoute', 'map']);
/*mapModule.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('!');
}]);*/
/*angular.element(document.querySelectorAll('div.contentRight')).ready(function() {
    angular.bootstrap(document.querySelectorAll('div.contentRight'), [mapModuleName]);
});*/