"use strict";

exports.__esModule = true;
exports.GatsbyIterable = void 0;

class GatsbyIterable {
  constructor(source) {
    this.source = source;
  }

  [Symbol.iterator]() {
    return this.source;
  }

  concat(other) {
    return new GatsbyIterable(concatSequence(this, other));
  }

  map(fn) {
    return new GatsbyIterable(mapSequence(this, fn));
  }

  filter(predicate) {
    return new GatsbyIterable(filterSequence(this, predicate));
  }

  forEach(callback) {
    for (const value of this) {
      callback(value);
    }
  }

}

exports.GatsbyIterable = GatsbyIterable;

function* mapSequence(source, fn) {
  for (const value of source) {
    yield fn(value);
  }
}

function* filterSequence(source, predicate) {
  for (const value of source) {
    if (predicate(value)) {
      yield value;
    }
  }
}

function* concatSequence(first, second) {
  for (const value of first) {
    yield value;
  }

  for (const value of second) {
    yield value;
  }
}
//# sourceMappingURL=iterable.js.map