import type { BoxMod, Mod } from '../Box';
import { keys } from '../../utils';

export function getMod(props: Mod) {
  return keys(props).reduce<Mod>((acc, key) => {
    const value = props[key];
    const modKey = key.startsWith('data-') ? key : `data-${key}`;

    if (value === undefined || value === '' || value === false || value === null) {
      return acc;
    }

    acc[modKey] = props[key];
    return acc;
  }, {});
}

export function getBoxMod(mod?: BoxMod) {
  if (!mod) {
    return null;
  }

  const transformed = Array.isArray(mod) ? mod : [mod];

  return transformed.reduce<Record<`data-${string}`, any>>(
    (acc, value) => ({ ...acc, ...getMod(value) }),
    {}
  );
}
