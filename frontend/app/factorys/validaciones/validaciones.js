;(function() {
  'use strict';

  angular
    .module('app.validaciones')
    .factory('Validaciones', Validaciones);

  Validaciones.$inject = [];

  function Validaciones() {
    var expresiones = {
      "requerido": {
        "regex": /^$/,
        "error": "Campo requerido"
      },
      "textoEspacios": {
        "regex": /^([a-zA-ZáéíóúAÉÍÓÚÑñ.]+\s)*[a-zA-ZáéíóúAÉÍÓÚÑñ.]+$/,
        "error": "Sólo caracteres de la A a la Z."
      },
      "textoEspaciosEspeciales": {
        "regex": /^([\w\d\sáéíóúñÁÉÍÓÚÑ.,#\-\&\/])+$/i,
        "error": "Sólo letras, números y comodines (#.-_)"
      },
      "texto": {
        "regex": /^[a-zA-ZÑáéíóúAÉÍÓÚÑñ.]*$/,
        "error": "Sólo caracteres de la A a la Z sin espacios."
      },
      "alfanumerico": {
        "regex": /^\s*\S+\s*$/,
        "error": "Sólo letras o números sin espacios."
      },
      "alfanumericoEspacios": {
        "regex": /^[\w ÑáéíóúAÉÍÓÚÑñ.]+$/,
        "error": "Sólo letras y números."
      },
      "numerico": {
        "regex": /^[0-9]*$/,
        "error": "Sólo números."
      },
      "numericoDecimal":{
        "regex" : /^[0-9.]*$/,
        "error" : "Ingresar solo números decimales"
      },
      "email": {
        "regex": /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/,
        "error": "Favor de ingresar un correo válido."
      },
      "celular": {
        "regex": /^(?!^(\+\d{1,3}[- ]?)?\d{13}$).+$/,
        "error": "Favor de ingresar un número de celular válido (13 dígitos)."
      },
      "tel_casa": {
        "regex": /^(?!^(\+\d{1,3}[- ]?)?\d{10}$).+$/,
        "error": "Favor de ingresar un número de casa válido (10 dígitos)."
      },
      "tel10": {
        "regex": /^([0-9]{8,13})$/, // /([^\d]|^)(\d{10})([^\d]|$)/,
        "error": "Favor de ingresar un número válido (8 a 13 dígitos)."
      },
      "alfanumericoGuion": {
        "regex": /^([A-Z]{6})-([0-9]{8})-([A-Z]{1})-([0-9]{3})$/g,
        "error": "La clave electoral debe ser de 18 caracteres alfanuméricos."
      },
      "min8": {
        "regex": /^.{1,7}$/,
        "error": "La longitud mínima debe ser de 8 caracteres"
      },
      "min4": {
        "regex": /^.{4,}$/,
        "error": "La longitud mínima debe ser de 4 caracteres"
      },
      "max5": {
        "regex": /^.{6,}$/,
        "error": "La longitud máxima debe ser de 5 caracteres"
      },
      "seleccion": {
        "regex": /^.{0,2}$/,
        "error": "Debe seleccionar una opción"
      },
      "no": {
        "regex": /a^/,
        "error": ""
      },
      "rfc" : {
        "regex": /^([A-Z,Ñ,&]{3,4}-([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])-[A-Z|\d]{3})$/,
        "error": "RFC incorrecto"
      },
      "rfc_opcional": {
        "regex": /^((^$)|([A-Z,Ñ,&]{3,4}-([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])-[A-Z|\d]{3})$)/,
        "error": "RFC incorrecto"
      },
      "cp": {
        "regex": /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/,
        "error": "Código postal no valido"
      },
      "check": {
        "error": "Seleccione un paquete"
      },
      "credit_card":{
        "regex" : /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
        "error" : "Formato de tarjeta invalido"
      }
    };

    function patrones() {
      return expresiones;
    };

    return {
      patrones: patrones
    };
  };
})();
