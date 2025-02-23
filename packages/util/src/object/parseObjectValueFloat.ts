export function parseObjectValueFloat(data: Record<string, any>, keys: string[]) {
  return Object.fromEntries(Object.entries(data).map(([k, v]) => [k, keys.includes(k) ? parseFloat(v) : v]));
}
