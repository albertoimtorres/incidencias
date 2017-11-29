;(function() {
  'use strict';

  angular
    .module('app.incidencias')
    .service('IncidenciasService', IncidenciasService);

  IncidenciasService.$inject = ['Host', '$http', '$q', '$timeout'];

  function IncidenciasService(Host, $http, $q, $timeout) {
    return {
      crearIncidencia: crearIncidencia,
      obtenerIncidencias: obtenerIncidencias,
      obtenerEstados: obtenerEstados
    };

    function crearIncidencia(incidencia) {
      var aplazar = $q.defer();
      var aplazarTimeout = $q.defer();
      var tiempoTerminado = false;

      var peticionHTTP = $http({
        method: 'POST',
        url: Host + '/incidencias/creacion',
        data: incidencia,
        timeout: aplazarTimeout.promise,
        headers: {'Content-Type': 'application/json'}
      });

      peticionHTTP.then(success).catch(error);

      function success(data) {
        aplazar.resolve(data);
      };

      function error(data) {
        if(tiempoTerminado)
          aplazar.reject({error: 'Transcurrió el tiempo máximo de espera, verifique su conexión a internet'});
        else if(data !== null)
          aplazar.reject({error: data.error});
        else
          aplazar.reject({error: 'Favor de habilitar su conexión a internet y pruebe nuevamente', resp: data});
      };

      $timeout(function() {
        tiempoTerminado = true;
        aplazarTimeout.resolve();
      }, 4000);

      return aplazar.promise;
    };

    function obtenerIncidencias() {
      var aplazar = $q.defer();
      var aplazarTimeout = $q.defer();
      var tiempoTerminado = false;

      var peticionHTTP = $http({
        method: 'POST',
        url: Host + '/incidencias/catalogoIncidencia',
        timeout: aplazarTimeout.promise,
        headers: {'Content-Type': 'application/json'}
      });

      peticionHTTP.then(success).catch(error);

      function success(data) {
        aplazar.resolve(data);
      };

      function error(data) {
        if(tiempoTerminado)
          aplazar.reject({error: 'Transcurrió el tiempo máximo de espera, verifique su conexión a internet'});
        else if(data !== null)
          aplazar.reject({error: data.error});
        else
          aplazar.reject({error: 'Favor de habilitar su conexión a internet y pruebe nuevamente', resp: data});
      };

      $timeout(function() {
        tiempoTerminado = true;
        aplazarTimeout.resolve();
      }, 4000);

      return aplazar.promise;
    };

    function obtenerEstados() {
      var aplazar = $q.defer();
      var aplazarTimeout = $q.defer();
      var tiempoTerminado = false;

      var peticionHTTP = $http({
        method: 'POST',
        url: Host + '/incidencias/catalogoEstados',
        timeout: aplazarTimeout.promise,
        headers: {'Content-Type': 'application/json'}
      });

      peticionHTTP.then(success).catch(error);

      function success(data) {
        aplazar.resolve(data);
      };

      function error(data) {
        if(tiempoTerminado)
          aplazar.reject({error: 'Transcurrió el tiempo máximo de espera, verifique su conexión a internet'});
        else if(data !== null)
          aplazar.reject({error: data.error});
        else
          aplazar.reject({error: 'Favor de habilitar su conexión a internet y pruebe nuevamente', resp: data});
      };

      $timeout(function() {
        tiempoTerminado = true;
        aplazarTimeout.resolve();
      }, 4000);

      return aplazar.promise;
    };
  };
})();
