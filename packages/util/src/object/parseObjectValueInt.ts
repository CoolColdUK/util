export function parseObjectValueInt(data: Record<string, any>, keys: string[]) {
  return Object.fromEntries(Object.entries(data).map(([k, v]) => [k, keys.includes(k) ? parseInt(v, 10) : v]));
}
