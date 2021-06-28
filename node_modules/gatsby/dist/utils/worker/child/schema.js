"use strict";

exports.__esModule = true;
exports.setInferenceMetadata = setInferenceMetadata;
exports.setQueries = setQueries;

var _state = require("./state");

function setInferenceMetadata() {
  (0, _state.setState)([`inferenceMetadata`]);
}

function setQueries() {
  (0, _state.setState)([`components`, `staticQueryComponents`]);
}
//# sourceMappingURL=schema.js.map