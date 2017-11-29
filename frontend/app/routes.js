;(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfigurator);

  routeConfigurator.$inject = ['$compileProvider', '$routeProvider'];

  function routeConfigurator($compileProvider, $routeProvider) {
    $routeProvider
    .when('/incidencias', {
      templateUrl: 'app/modules/incidencias/incidencias.html',
      controller: 'Incidencias as vm'
    })
    .otherwise({
      redirectTo: '/incidencias'
    });
  };
})();
