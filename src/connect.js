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
function connect(params) {
  let arrFactory;
  if (params !== undefined) {
    arrFactory = Object.entries(params);
  };
  const concatedObject = {};

  function addParamToObj(arg) {
    if (params === undefined && arg === undefined) {
      return concatedObject;
    } else if (arg === undefined) {
      return params;
    } else if (params === undefined) {
      return arg;
    } else {
      arrFactory.forEach((num, index) => {
        if (arg[num[0]]) {
          concatedObject[num[0]] = arg[num[0]];
        } else {
          concatedObject[num[0]] = num[1];
        }

        if (index === arrFactory.length - 1) {
          Object.entries(arg).forEach(element => {
            if (arrFactory.reduce((acum, value) => acum
              .concat(value), [])
              .indexOf(element[0]) === -1) {
              concatedObject[element[0]] = element[1];
            }
          });
        }
      });

      return concatedObject;
    }
  }

  return addParamToObj;
}

module.exports = connect;
