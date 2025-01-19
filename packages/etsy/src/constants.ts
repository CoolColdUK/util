export const PORT = 3003;
export const SERVER = 'http://localhost';
export const SERVER_URL = SERVER + ':' + PORT;
export const OAUTH_REDIRECT = '/oauth/redirect';
export const OAUTH_CALLBACK = '/oauth/callback';

export const ETSY_API_KEY = process.env['ETSY_API_KEY'] || '';
export const ETSY_API_SECRET = process.env['ETSY_API_SECRET'] || '';
export const ETSY_API_ENDPOINT = 'https://api.etsy.com/v3';
