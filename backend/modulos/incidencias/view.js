#!/usr/bin/env node

;(() => {
  'use strict';

  const models = require('./models');
  const mongoose = require('mongoose');
  const ObjectId = mongoose.Types.ObjectId;
  const async = require('async');
  const cat_Estados = require('../../catalogos/estados.json');
  const cat_Incidencias = require('../../catalogos/incidencias.json');

  function crearIncidencia(request, response) {
    let incidente = request.body.incidente;
    let estado = request.body.estado;
    let municipio = request.body.municipio;
    let nombre = request.body.nombre;
    let email = request.body.email;
    let edad = request.body.edad;
    let descripcion = request.body.descripcion;

    async.series([
      function(done) {
        models.Incidencia.find({'email': email}, function(err, doc) {
          console.log(err);
          console.log();
          console.log(doc);
        });
      },
      function(done) {

      }
    ], function(err, result) {
    });

  };

  function tipoIncidencias(request, response) {
    let Catalogo_Incidencias = models.Catalogo_Incidencias(cat_Incidencias);
    Catalogo_Incidencias.save((err) => {response.status(401).json(err)});
    response.status(200).json(Catalogo_Incidencias);
  };

  function estados(request, response) {
    let Catalogo_Estados = models.Catalogo_Estados(cat_Estados);
    Catalogo_Estados.save((err) => {console.log(err)});
    response.status(200).json(Catalogo_Estados);
  };

  module.exports = {
    crearIncidencia: crearIncidencia,
    catalogoIncidencia: tipoIncidencias,
    catalogoEstados: estados
  };
})();
