import {mapObjectTypeToFirestoreDoc} from './mapObjectTypeToFirestoreDoc';

describe('mapObjectTypeToFirestoreDoc', () => {
  it('omits id from object', () => {
    const input = {id: 'doc1', name: 'foo', count: 1};
    const result = mapObjectTypeToFirestoreDoc(input);
    expect(result).toStrictEqual({name: 'foo', count: 1});
    expect(result).not.toHaveProperty('id');
  });
});
