export function isNumberLike(value: unknown) {
  if (typeof value === 'number') {
    return true;
  }

  if (typeof value === 'string') {
    if (value.startsWith('calc(')) {
      return true;
    }

    return /[0-9]/.test(value.trim().replace('-', '')[0]);
  }

  return false;
}
