import type { AppShellSize, AppShellResponsiveSize } from '../AppShell';

export function isPrimitiveSize(
  size: AppShellSize | AppShellResponsiveSize | undefined
): size is AppShellSize {
  return typeof size === 'number' || typeof size === 'string';
}
