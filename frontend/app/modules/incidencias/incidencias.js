;(function() {
  'use strict';

  angular
    .module('app.incidencias')
    .controller('Incidencias', Incidencias);

  Incidencias.$inject = ['IncidenciasService', 'Validaciones'];

  function Incidencias(IncidenciasService, Validaciones) {
    var vm = this;

    /* Variables */

    /* Objectos */
    vm.reporte = {
      incidente: '',
      estado: '',
      municipio: '',
      nombre: '',
      email: '',
      edad: '',
      descripcion: ''
    };

    vm.valida = Validaciones.patrones();

    /* Arrays */
    vm.estados = [];
    vm.incidencias = [];
    vm.municipios = [];

    /* Booleanos */
    vm.mostrarTag = false;

    /* Funcionalidades */
    vm.enviar = enviar;
    vm.seleccionaEstado = seleccionaEstado;

    /* Funciones Auxiliares */
    function enviar() {
      if(vm.formIncidencia.$valid){
        vm.mostrarTag = false;
        IncidenciasService.crearIncidencia(vm.reporte).then(success, error);

        function success(data) {
          vm.reporte = {};
        };

        function error(err) {
          console.log('err: ', err);
        };
      } else {
        vm.mostrarTag = true;
      }
    };

    function obtenerEstados() {
      IncidenciasService.obtenerEstados().then(success, error);

      function success(data) {
        vm.estados = data.data.estados;
      };

      function error(err) {
        console.log(err);
      };
    };

    function obtenerIncidencias() {
      IncidenciasService.obtenerIncidencias().then(success, error);

      function success(data){
        vm.incidencias = data.data.incidencias;
      };

      function error(err) {
        console.log(err);
      };
    };

    function seleccionaEstado(estado) {
      vm.municipios = vm.estados.filter(function(item, index) {
        if(item.estado == estado) return item;
      })[0];
    };

    /* Init */
    obtenerEstados();
    obtenerIncidencias();
  };
})();
