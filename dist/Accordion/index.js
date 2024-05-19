"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionTrigger = exports.AccordionItem = exports.AccordionContent = exports.Accordion = void 0;
var _react = _interopRequireDefault(require("react"));
var RadixAccordion = _interopRequireWildcard(require("@radix-ui/react-accordion"));
var _classnames = _interopRequireDefault(require("classnames"));
var _reactIcons = require("@radix-ui/react-icons");
require("./index.css");
var _excluded = ["children", "className"],
  _excluded2 = ["children", "className"],
  _excluded3 = ["children", "className"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
var Accordion = exports.Accordion = RadixAccordion.Root;
var AccordionItem = exports.AccordionItem = /*#__PURE__*/_react["default"].forwardRef(function (_ref, forwardedRef) {
  var children = _ref.children,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(RadixAccordion.Item, _extends({
    className: (0, _classnames["default"])("AccordionItem", className)
  }, props, {
    ref: forwardedRef
  }), children);
});
AccordionItem.displayName = "ParityAccordionItem";
var AccordionTrigger = exports.AccordionTrigger = /*#__PURE__*/_react["default"].forwardRef(function (_ref2, forwardedRef) {
  var children = _ref2.children,
    className = _ref2.className,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/_react["default"].createElement(RadixAccordion.Header, {
    className: "AccordionHeader"
  }, /*#__PURE__*/_react["default"].createElement(RadixAccordion.Trigger, _extends({
    className: (0, _classnames["default"])("AccordionTrigger", className)
  }, props, {
    ref: forwardedRef
  }), children, /*#__PURE__*/_react["default"].createElement(_reactIcons.ChevronDownIcon, {
    className: "AccordionChevron",
    "aria-hidden": true
  })));
});
AccordionTrigger.displayName = "ParityAccordionTrigger";
var AccordionContent = exports.AccordionContent = /*#__PURE__*/_react["default"].forwardRef(function (_ref3, forwardedRef) {
  var children = _ref3.children,
    className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/_react["default"].createElement(RadixAccordion.Content, _extends({
    className: (0, _classnames["default"])("AccordionContent", className)
  }, props, {
    ref: forwardedRef
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "AccordionContentText"
  }, children));
});
AccordionContent.displayName = "ParityAccordionContent";