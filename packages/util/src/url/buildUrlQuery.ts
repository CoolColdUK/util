export function buildUrlQuery(url: string, query: Record<string, string>) {
  const queryString = Object.entries(query)
    .map(([k, v]) => `${k}=${v}`)
    .join('&');
  return queryString.length ? `${url}?${queryString}` : url;
}
