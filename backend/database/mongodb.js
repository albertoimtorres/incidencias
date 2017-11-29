#!/usr/bin/env node

;(() => {
  'use strict';

  const mongoose = require('mongoose');

  function poolConnections(databaseName) {
    function connect() {
      const options = {
        server: {
          socketOptions: {
            keepAlive: 1000, connectTimeoutMS: 1000
          }
        },
        replset: {
          socketOptions: {
            keepAlive: 1000, connectTimeoutMS: 1000
          }
        }
      };

      mongoose.connect('mongodb://127.0.0.1/' + databaseName, options);
    };

    mongoose.connection.on('error', console.log.bind(console, 'connection error'));
    mongoose.connection.on('disconnected', connect);
  };

  module.exports = {
    connection: poolConnections
  };
})();
