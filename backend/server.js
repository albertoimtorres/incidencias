#!/usr/bin/env node

;(() => {
  'use strict';

  const express = require('express');
  const morgan = require('morgan');
  const bodyParser = require('body-parser');
  const cors = require('cors');
  const helmet = require('helmet');
  const database = require('./database/mongodb');
  const os = require('os');

  let app = express();

  let http = require('http').createServer(app);

  database.connection('incidencias');

  app.disable('x-powered-by');

  app.use(cors());
  app.use(helmet());
  app.use(helmet.noCache());
  app.use(helmet.frameguard());
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));


  app.use(express.static(__dirname + '/public'));

  let apps = [
    {prefix: '', app: 'incidencias'}
  ];

  apps.map((element, index) => {
    let route = require('./modulos/' + element.app + '/urls');
    let prefix = element.prefix;
    if(element.prefix === '') prefix = element.app;
    app.use('/' + prefix, route);
  });

  let server = app.listen(3001);

  server.on('listening', (err) => {
    if(err) throw err;
    let host = os.networkInterfaces().wlp8s0[1].address;
    let port = server.address().port;
    console.log('Servidor corriendo en: http://%s:%s', host, port);
  });
})();
;
