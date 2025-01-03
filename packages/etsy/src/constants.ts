export const PORT = 3003;

export const API_KEY = process.env['ETSY_API_KEY'] || '';
export const API_SECRET = process.env['ETSY_API_SECRET'] || '';
export const API_ENDPOINT = 'https://api.etsy.com/v3';

if (API_KEY.length === 0 || API_SECRET.length === 0) {
  throw new Error('cannot load env file');
}
