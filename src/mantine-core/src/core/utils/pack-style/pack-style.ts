export function packStyle<T>(style: T | T[]) {
  return Array.isArray(style) ? style : [style];
}
