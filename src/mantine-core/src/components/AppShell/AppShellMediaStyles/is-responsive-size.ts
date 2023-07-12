import type { AppShellSize, AppShellResponsiveSize } from '../AppShell';

export function isResponsiveSize(
  size: AppShellSize | AppShellResponsiveSize | undefined
): size is AppShellResponsiveSize {
  return typeof size === 'object' && size !== null;
}
