angular
    .module('app', [ 'ng-ias', 'ias.icons', 'ui.router', 'ng-prism' ])
    .config(function($stateProvider, $urlServiceProvider) {
        $urlServiceProvider.rules.otherwise({state: 'app.project'});

        $stateProvider
                .state('app', {
                url: '/app',
                component: 'app',
                abstract: true
            })
            .state('app.project', {
                url: '/project',
                templateUrl: 'components/project/project.component.html',

            })
            .state('app.icons', {
                url: '/icons?query',
                component: 'icons',
                abstract: true
            })
            .state('app.icons.table', {
                url: '/table',
                templateUrl: 'components/icons/icons-table.component.html'
            })
            .state('app.icons.tile', {
                url: '/tile',
                templateUrl: 'components/icons/icons-tile.component.html'
            });

    });


angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});


