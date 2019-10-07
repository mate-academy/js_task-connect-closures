'use strict';

/**
 * Write a function (factory) accepting `baseParams` object and creating a
 * function (device). Device receives `extraParams` and returns an object with
 * all the fields from `baseParams` and `extraParams`. In case of conflict
 * `extraParams` has priority. All the received objects should not be changed.
 *
 * For Example:
 *
 * const connected1 = connect({ x: 1, y: 2 });
 * const result1 = connected1({ z: 3, x: 10 });
 * result1 is { x: 10, y: 2, z: 3 }
 *
 * const connected1 = connect({ x: 1, y: 2 });
 * const result1 = connected1();
 * result1 is { x: 1, y: 2 }
 *
 * @param {Object} baseParams
 * @return {Function}
 */
function connect(params = 0) {
  const rezultObj = { ...params };
  return function addParams(args) {
    if (!args) {
      return rezultObj;
    }
    for (const i of Object.entries(params)) {
      rezultObj[i[0]] = i[1];
    }

    return rezultObj || {};
  };
}

module.exports = connect;
