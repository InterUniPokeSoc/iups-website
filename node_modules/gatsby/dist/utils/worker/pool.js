"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.create = void 0;

var _jestWorker = _interopRequireDefault(require("jest-worker"));

var _gatsbyCoreUtils = require("gatsby-core-utils");

const create = () => {
  process.env.GATSBY_WORKER_POOL_WORKER = `true`;
  const worker = new _jestWorker.default(require.resolve(`./child`), {
    numWorkers: Math.max(1, (0, _gatsbyCoreUtils.cpuCoreCount)() - 1),
    forkOptions: {
      silent: false
    }
  });
  delete process.env.GATSBY_WORKER_POOL_WORKER;
  return worker;
};

exports.create = create;
//# sourceMappingURL=pool.js.map