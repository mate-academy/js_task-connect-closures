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
const connect = params => {
  const res = {};
  if (params) {
    for (const param in params) {
      res[param] = params[param];
    }
  }

  return function(paramsInner) {
    if (paramsInner) {
      for (const param in paramsInner) {
        res[param] = paramsInner[param];
      }
    }

    return res;
  };
};
module.exports = connect;
