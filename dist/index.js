"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Accordion = require("./Accordion");
Object.keys(_Accordion).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Accordion[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Accordion[key];
    }
  });
});
var _Tooltip = require("./Tooltip");
Object.keys(_Tooltip).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Tooltip[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Tooltip[key];
    }
  });
});