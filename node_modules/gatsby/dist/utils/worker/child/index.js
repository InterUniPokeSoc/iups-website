"use strict";

exports.__esModule = true;
exports.loadConfigAndPlugins = exports.setInferenceMetadata = exports.setQueries = exports.renderHTMLDev = exports.renderHTMLProd = void 0;

var _renderHtml = require("./render-html");

exports.renderHTMLProd = _renderHtml.renderHTMLProd;
exports.renderHTMLDev = _renderHtml.renderHTMLDev;

var _schema = require("./schema");

exports.setQueries = _schema.setQueries;
exports.setInferenceMetadata = _schema.setInferenceMetadata;

var _loadConfigAndPlugins = require("./load-config-and-plugins");

exports.loadConfigAndPlugins = _loadConfigAndPlugins.loadConfigAndPlugins;
//# sourceMappingURL=index.js.map