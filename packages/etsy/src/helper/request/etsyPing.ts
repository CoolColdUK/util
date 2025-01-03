import {ETSY_API_ENDPOINT} from '../../constants';

export function etsyPing(apiKey: string) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'x-api-key': apiKey,
    },
  };

  return fetch(ETSY_API_ENDPOINT + '/application/openapi-ping', requestOptions);
}
