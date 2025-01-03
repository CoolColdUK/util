export const PORT = 3003;

export const API_KEY = process.env['ETSY_API_KEY'];
export const API_SECRET = process.env['ETSY_API_SECRET'];

if (!API_KEY || !API_SECRET) {
  throw new Error('cannot load env file');
}
