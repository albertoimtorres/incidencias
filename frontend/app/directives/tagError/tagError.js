;(function() {
  'use strict';

  angular
    .module('app')
    .directive('tagError', tagError);

  tagError.$inject = [];

  function tagError() {
    var directiva = {
      restrict: 'E',
      require: '^ngModel',
      templateUrl: 'app/directives/tagError/tagError.html',
      scope: {
        mensaje: '='
      },
      controller: tagErrorController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directiva;
  };

  function tagErrorController() {
    console.log('ENTRA');
    var vm = this;
  };
})();
