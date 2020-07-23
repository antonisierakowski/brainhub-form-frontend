import { createAction } from '../utils';

describe('createAction function', () => {
  it('should create an object with specified action type and payload', () => {
    expect(createAction('TEST', { test: 'value' }))
      .toEqual({
        type: 'TEST',
        payload: {
          test: 'value',
        },
      });
  });
  it('should create an object with specified action without payload if none is provided', () => {
    expect(createAction('TEST'))
      .toEqual({
        type: 'TEST',
      });
  });
});
