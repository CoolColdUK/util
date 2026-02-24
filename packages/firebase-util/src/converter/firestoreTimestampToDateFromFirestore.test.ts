import {firestoreTimestampToDateFromFirestore} from './firestoreTimestampToDateFromFirestore';

describe('firestoreTimestampToDateFromFirestore', () => {
  it('converts snapshot data timestamps to Date', () => {
    const data = {
      id: 'doc1',
      ts: {_seconds: 1609459200, _nanoseconds: 0},
    };
    const snapshot = {data: () => data};
    const result = firestoreTimestampToDateFromFirestore(snapshot);
    expect(result.id).toBe('doc1');
    expect(result.ts).toBeInstanceOf(Date);
    expect((result.ts as Date).getTime()).toBe(1609459200 * 1000);
  });

  it('returns typed object', () => {
    interface Doc {
      name: string;
      at: Date;
    }
    const snapshot = {
      data: (): {name: string; at: {_seconds: number; _nanoseconds: number}} => ({
        name: 'test',
        at: {_seconds: 0, _nanoseconds: 0},
      }),
    };
    const result = firestoreTimestampToDateFromFirestore<Doc>(snapshot);
    expect(result.name).toBe('test');
    expect(result.at).toBeInstanceOf(Date);
  });
});
