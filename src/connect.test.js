'use strict';
/*eslint-disable*/

const connect = require('./connect');

describe('Basic scenario', () => {
  const baseParams = {
    x: 1, y: 2,
  };
  const extraParams = {
    z: 3, x: 10,
  };
  let connected;

  beforeEach(() => {
    connected = connect(baseParams);
  });

  test('should return expected object', () => {
    expect(connected(extraParams))
      .toStrictEqual({
        x: 10, y: 2, z: 3,
      });
  });

  test('should not change baseParams', () => {
    expect(baseParams)
      .toStrictEqual({
        x: 1, y: 2,
      });
  });

  test('should not change extraParams', () => {
    expect(extraParams)
      .toStrictEqual({
        z: 3, x: 10,
      });
  });
});

describe('Without baseParams', () => {
  const extraParams = {
    x: 1, y: 2, z: 3,
  };
  let connected;

  beforeEach(() => {
    connected = connect();
  });

  test('should return expected object', () => {
    expect(connected(extraParams))
      .toStrictEqual({
        x: 1, y: 2, z: 3,
      });
  });

  test('should not change extraParams', () => {
    expect(extraParams)
      .toStrictEqual({
        x: 1, y: 2, z: 3,
      });
  });
});

describe('Without extraParams', () => {
  const baseParams = {
    x: 1, y: 2,
  };
  let connected;

  beforeEach(() => {
    connected = connect(baseParams);
  });

  test('should return expected object', () => {
    expect(connected())
      .toStrictEqual({
        x: 1, y: 2,
      });
  });

  test('should not change baseParams', () => {
    expect(baseParams)
      .toStrictEqual({
        x: 1, y: 2,
      });
  });
});

describe('No baseParams with no extraParams', () => {
  let connected;

  beforeEach(() => {
    connected = connect();
  });

  test('should return empty object', () => {
    expect(connected())
      .toStrictEqual({ });
  });
});
