export const PORT = 3003;

export const ETSY_API_KEY = process.env['ETSY_API_KEY'] || '';
export const ETSY_API_SECRET = process.env['ETSY_API_SECRET'] || '';
export const ETSY_API_ENDPOINT = 'https://api.etsy.com/v3';

if (ETSY_API_KEY.length === 0 || ETSY_API_SECRET.length === 0) {
  throw new Error('cannot load env file');
}
