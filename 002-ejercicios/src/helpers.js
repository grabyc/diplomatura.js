"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.helpers = void 0;

var _basededatos = require("./basededatos");

var helpers = {
  tablaPorId: function tablaPorId(tabla, id) {
    return _basededatos.database[tabla].find(function (buscado) {
      return buscado.id === id;
    });
  },
  lastPorTabla: function lastPorTabla(tabla) {
    return _basededatos.database[tabla][_basededatos.database[tabla].length - 1];
  }
};
exports.helpers = helpers;