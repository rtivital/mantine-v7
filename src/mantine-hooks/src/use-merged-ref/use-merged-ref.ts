import { useCallback } from 'react';
import { assignRef } from '../utils';

export function mergeRefs(...refs: any[]) {
  return (node: any) => {
    refs.forEach((ref) => assignRef(ref, node));
  };
}

export function useMergedRef(...refs: any[]) {
  return useCallback(mergeRefs(...refs), refs);
}
