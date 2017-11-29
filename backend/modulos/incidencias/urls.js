#!/usr/bin/env node

;(() => {
  'use strict';

  const views = require('./view');
  const express = require('express');
  const router = express.Router();

  router.post('/creacion', views.crearIncidencia);
  router.post('/catalogoIncidencia', views.catalogoIncidencia);
  router.post('/catalogoEstados', views.catalogoEstados);

  module.exports = router;
})();
