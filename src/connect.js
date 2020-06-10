'use strict';

function connect(params = {}) {
  return (newParams = {}) => ({
    ...params,
    ...newParams,
  });
}

module.exports = connect;
