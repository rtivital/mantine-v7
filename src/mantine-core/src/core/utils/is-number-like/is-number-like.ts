export function isNumberLike(value: unknown) {
  if (typeof value === 'number') {
    return true;
  }

  if (typeof value === 'string') {
    return /[0-9]/.test(value.trim().replace('-', '')[0]);
  }

  return false;
}
