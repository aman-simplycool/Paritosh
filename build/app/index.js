"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

// Express server
var app = (0, _express["default"])();
var PORT = 8000; //Listen the server

app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});
var _default = app;
exports["default"] = _default;