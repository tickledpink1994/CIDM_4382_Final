var mainApplicationModuleName = 'mean';

var mainApplicationModule = angular.Module(mainApplicationModuleName, []);

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainApplicationModuleName]);
});