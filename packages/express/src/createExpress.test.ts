import {createExpress} from './createExpress';
import {ExpressMethod} from './enum/ExpressMethod';

describe('createExpress', () => {
  it('returns express app with route methods', () => {
    const app = createExpress({
      ping: {
        method: ExpressMethod.GET,
        handler: (_req, res) => {
          res.send('pong');
        },
      },
    });

    expect(typeof app).toBe('function');
    expect(app.get).toBeDefined();
    expect(app.post).toBeDefined();
  });

  it('accepts options with cors and middleware', () => {
    const middleware = (_req: any, _res: any, next: () => void) => next();
    const app = createExpress(
      {},
      {
        middleware: [middleware],
        cors: {origin: true},
      },
    );
    expect(typeof app).toBe('function');
  });
});
