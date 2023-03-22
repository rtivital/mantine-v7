import { CSSProperties } from 'react';

export function packStyle(style: unknown): CSSProperties[] {
  return Array.isArray(style) ? style : typeof style === 'undefined' ? [] : [style];
}
