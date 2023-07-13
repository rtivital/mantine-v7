/* eslint-disable no-param-reassign */
import { MantineTheme, keys, rem } from '../../../core';
import type { CSSVariables, MediaQueryVariables } from './AppShellMediaStyles';
import type { AppShellProps } from '../AppShell';
import { isResponsiveSize } from './is-responsive-size';
import { isPrimitiveSize } from './is-primitive-size';
import { getBreakpointValue } from './get-breakpoint-value';

interface AssignNavbarVariablesInput {
  baseStyles: CSSVariables;
  minMediaStyles: MediaQueryVariables;
  maxMediaStyles: MediaQueryVariables;
  navbar: AppShellProps['navbar'] | undefined;
  theme: MantineTheme;
}

export function assignNavbarVariables({
  baseStyles,
  minMediaStyles,
  maxMediaStyles,
  navbar,
  theme,
}: AssignNavbarVariablesInput) {
  const navbarWidth = navbar?.width;
  const collapsedNavbarTransform = 'translateX(calc(var(--app-shell-navbar-width) * -1))';

  if (isPrimitiveSize(navbarWidth)) {
    baseStyles['--app-shell-navbar-width'] = rem(navbarWidth);
  }

  if (isResponsiveSize(navbarWidth)) {
    baseStyles['--app-shell-navbar-width'] =
      typeof navbarWidth.base !== 'undefined' ? rem(navbarWidth.base) : '100%';

    keys(navbarWidth).forEach((key) => {
      if (key !== 'base') {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]['--app-shell-navbar-width'] = rem(navbarWidth![key]);
        minMediaStyles[key]['--app-shell-navbar-offset'] = rem(navbarWidth![key]);
      }
    });
  }

  if (navbar?.collapsed?.desktop) {
    const breakpointValue = navbar!.offsetBreakpoint!;
    minMediaStyles[breakpointValue] = minMediaStyles[breakpointValue] || {};
    minMediaStyles[breakpointValue]['--app-shell-navbar-transform'] = collapsedNavbarTransform;
    minMediaStyles[breakpointValue]['--app-shell-navbar-offset'] = '0px';
  }

  if (navbar?.collapsed?.mobile) {
    const breakpointValue = getBreakpointValue(navbar!.offsetBreakpoint!, theme) - 0.1;
    maxMediaStyles[breakpointValue] = maxMediaStyles[breakpointValue] || {};
    maxMediaStyles[breakpointValue] = maxMediaStyles[breakpointValue] || {};
    maxMediaStyles[breakpointValue]['--app-shell-navbar-width'] = '100%';
    maxMediaStyles[breakpointValue]['--app-shell-navbar-offset'] = '0px';
    maxMediaStyles[breakpointValue]['--app-shell-navbar-transform'] = collapsedNavbarTransform;
  }
}
