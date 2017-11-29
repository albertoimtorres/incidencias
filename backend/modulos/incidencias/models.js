#!/usr/bin/env node

;(() => {
  'use strict';

  const mongoose = require('mongoose');

  let IncidenciasSchema = new mongoose.Schema({
    incidente: {type: String, required: true},
    estado: {type: String, required: true},
    municipio: {type: String, required: true},
    nombre: {type: String, required: true},
    email: {type: String, required: true},
    edad: {type: Number, required: true},
    descripcion: {type: String, required: true},
    fecha_creacion: {type: Date},
    activo: {type: Boolean, default: true}
  }, {versionKey: false});

  let Incidencia = mongoose.model('Incidencia', IncidenciasSchema);

  let catalogoIncidencia = new mongoose.Schema({
    incidencias: [
      {
        id: Number,
        incidencia: String,
        clave: String,
        _id: false
      },
      {
        id: Number,
        incidencia: String,
        clave: String,
        _id: false
      },
      {
        id: Number,
        incidencia: String,
        clave: String,
        _id: false
      },
      {
        id: Number,
        incidencia: String,
        clave: String,
        _id: false
      },
      {
        id: Number,
        incidencia: String,
        clave: String,
        _id: false
      }
    ]
  }, {versionKey: false});

  let Catalogo_Incidencias = mongoose.model('Catalogo_Incidencias', catalogoIncidencia);

  let catalogoEstados = new mongoose.Schema({
    estados: [
      {
        estado: String,
        municipios: [
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          }
        ]
      },
      {
        estado: String,
        municipios: [
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          },
          {
            id: Number,
            municipio: String,
            _id: false
          }
        ]
      }
    ]
  }, {versionKey: false});

  let Catalogo_Estados = mongoose.model('Catalogo_Estados', catalogoEstados);

  module.exports = {
    Incidencia: Incidencia,
    Catalogo_Incidencias: Catalogo_Incidencias,
    Catalogo_Estados: Catalogo_Estados
  };
})();
