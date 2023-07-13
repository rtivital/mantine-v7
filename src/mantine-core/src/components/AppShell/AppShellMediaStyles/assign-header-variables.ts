/* eslint-disable no-param-reassign */
import { MantineTheme, keys, rem } from '../../../core';
import type { CSSVariables, MediaQueryVariables } from './AppShellMediaStyles';
import type { AppShellProps } from '../AppShell';
import { isResponsiveSize } from './is-responsive-size';
import { isPrimitiveSize } from './is-primitive-size';
import { getBaseSize } from './get-base-size';

interface AssignHeaderVariablesInput {
  baseStyles: CSSVariables;
  minMediaStyles: MediaQueryVariables;
  maxMediaStyles: MediaQueryVariables;
  header: AppShellProps['header'] | undefined;
  theme: MantineTheme;
}

export function assignHeaderVariables({
  baseStyles,
  minMediaStyles,
  header,
}: AssignHeaderVariablesInput) {
  const headerHeight = header?.height;
  const collapsedHeaderTransform = 'translateY(calc(var(--app-shell-header-height) * -1))';

  if (isPrimitiveSize(headerHeight)) {
    const baseSize = rem(getBaseSize(headerHeight));
    baseStyles['--app-shell-header-height'] = baseSize;
    baseStyles['--app-shell-header-offset'] = baseSize;
  }

  if (isResponsiveSize(headerHeight)) {
    if (typeof headerHeight.base !== 'undefined') {
      baseStyles['--app-shell-header-height'] = rem(headerHeight.base);
      baseStyles['--app-shell-header-offset'] = rem(headerHeight.base);
    }

    keys(headerHeight).forEach((key) => {
      if (key !== 'base') {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]['--app-shell-header-height'] = rem(headerHeight[key]);
        minMediaStyles[key]['--app-shell-header-offset'] = rem(headerHeight[key]);
      }
    });
  }

  if (header?.collapsed) {
    baseStyles['--app-shell-header-transform'] = collapsedHeaderTransform;
    baseStyles['--app-shell-header-offset'] = '0px !important';
  }
}
