import {mapHandlerFunctionToHandler} from './mapHandlerFunctionToHandler';

describe('mapHandlerFunctionToHandler', () => {
  it('returns handler that sends result of fn(req)', async () => {
    const fn = jest.fn().mockResolvedValue({ok: true});
    const handler = mapHandlerFunctionToHandler(fn);
    const req = {};
    const res = {send: jest.fn()};
    const next = jest.fn();

    await handler(req as any, res as any, next);

    expect(fn).toHaveBeenCalledWith(req);
    expect(res.send).toHaveBeenCalledWith({ok: true});
    expect(next).not.toHaveBeenCalled();
  });

  it('calls next with error when fn throws', async () => {
    const err = new Error('fail');
    const fn = jest.fn().mockRejectedValue(err);
    const handler = mapHandlerFunctionToHandler(fn);
    const req = {};
    const res = {send: jest.fn()};
    const next = jest.fn();

    await handler(req as any, res as any, next);

    expect(next).toHaveBeenCalledWith(err);
    expect(res.send).not.toHaveBeenCalled();
  });
});
