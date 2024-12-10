import {toObject} from './toObject';

interface ITestData {
  id: string | number;
  data: string;
}

let data: ITestData[];

describe('toObject', () => {
  beforeEach(() => {
    data = [
      {id: 123, data: 'first one'},
      {id: '234', data: 'second one'},
    ];
  });
  it('Should convert correctly', () => {
    expect(toObject(data, 'id')).toStrictEqual({
      '123': {id: 123, data: 'first one'},
      '234': {id: '234', data: 'second one'},
    });
  });
});
