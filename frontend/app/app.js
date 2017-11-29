;(function() {
  'use strict';

  angular
    .module('app', [
      'ngRoute',
      'app.incidencias',
      'app.validaciones'
    ])
    .constant('Produccion', false)
    .constant('Host', 'http://192.168.1.72:3001');
})();
