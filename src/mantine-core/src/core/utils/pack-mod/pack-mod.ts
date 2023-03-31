import type { BoxMod } from '../../Box';

export function packMod(mod: BoxMod | undefined) {
  return Array.isArray(mod) ? mod : typeof mod === 'undefined' ? [] : [mod];
}
