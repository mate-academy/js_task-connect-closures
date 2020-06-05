'use strict';

function connect(params = {}) {
  return (newParams = {}) => Object.assign({}, params, newParams);
}

module.exports = connect;
