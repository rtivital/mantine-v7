/* eslint-disable no-param-reassign */
import { MantineTheme, keys, rem } from '../../../core';
import type { CSSVariables, MediaQueryVariables } from './AppShellMediaStyles';
import type { AppShellProps } from '../AppShell';
import { isResponsiveSize } from './is-responsive-size/is-responsive-size';
import { isPrimitiveSize } from './is-primitive-size/is-primitive-size';
import { getBreakpointValue } from './get-breakpoint-value/get-breakpoint-value';
import { getBaseSize } from './get-base-size/get-base-size';

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
  const collapsedNavbarTransformRtl = 'translateX(var(--app-shell-navbar-width))';

  if (navbar?.breakpoint) {
    maxMediaStyles[navbar?.breakpoint] = maxMediaStyles[navbar?.breakpoint] || {};
    maxMediaStyles[navbar?.breakpoint]['--app-shell-navbar-width'] = '100%';
    maxMediaStyles[navbar?.breakpoint]['--app-shell-navbar-offset'] = '0px';
  }

  if (isPrimitiveSize(navbarWidth)) {
    const baseSize = rem(getBaseSize(navbarWidth));
    baseStyles['--app-shell-navbar-width'] = baseSize;
    baseStyles['--app-shell-navbar-offset'] = baseSize;
  }

  if (isResponsiveSize(navbarWidth)) {
    if (typeof navbarWidth.base !== 'undefined') {
      baseStyles['--app-shell-navbar-width'] = rem(navbarWidth.base);
      baseStyles['--app-shell-navbar-offset'] = rem(navbarWidth.base);
    }

    keys(navbarWidth).forEach((key) => {
      if (key !== 'base') {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]['--app-shell-navbar-width'] = rem(navbarWidth![key]);
        minMediaStyles[key]['--app-shell-navbar-offset'] = rem(navbarWidth![key]);
      }
    });
  }

  if (navbar?.collapsed?.desktop) {
    const breakpointValue = navbar!.breakpoint;
    minMediaStyles[breakpointValue] = minMediaStyles[breakpointValue] || {};
    minMediaStyles[breakpointValue]['--app-shell-navbar-transform'] = collapsedNavbarTransform;
    minMediaStyles[breakpointValue]['--app-shell-navbar-transform-rtl'] =
      collapsedNavbarTransformRtl;
    minMediaStyles[breakpointValue]['--app-shell-navbar-offset'] = '0px !important';
  }

  if (navbar?.collapsed?.mobile) {
    const breakpointValue = getBreakpointValue(navbar!.breakpoint, theme) - 0.1;
    maxMediaStyles[breakpointValue] = maxMediaStyles[breakpointValue] || {};
    maxMediaStyles[breakpointValue]['--app-shell-navbar-offset'] = '0px !important';
    maxMediaStyles[breakpointValue]['--app-shell-navbar-transform'] = collapsedNavbarTransform;
    maxMediaStyles[breakpointValue]['--app-shell-navbar-transform-rtl'] =
      collapsedNavbarTransformRtl;
  }
}

interface AssignAsideVariablesInput {
  baseStyles: CSSVariables;
  minMediaStyles: MediaQueryVariables;
  maxMediaStyles: MediaQueryVariables;
  aside: AppShellProps['aside'] | undefined;
  theme: MantineTheme;
}

export function assignAsideVariables({
  baseStyles,
  minMediaStyles,
  maxMediaStyles,
  aside,
  theme,
}: AssignAsideVariablesInput) {
  const asideWidth = aside?.width;
  const collapsedAsideTransform = 'translateX(var(--app-shell-aside-width))';
  const collapsedAsideTransformRtl = 'translateX(calc(var(--app-shell-aside-width) * -1))';

  if (aside?.breakpoint) {
    maxMediaStyles[aside?.breakpoint] = maxMediaStyles[aside?.breakpoint] || {};
    maxMediaStyles[aside?.breakpoint]['--app-shell-aside-width'] = '100%';
    maxMediaStyles[aside?.breakpoint]['--app-shell-aside-offset'] = '0px';
  }

  if (isPrimitiveSize(asideWidth)) {
    const baseSize = rem(getBaseSize(asideWidth));
    baseStyles['--app-shell-aside-width'] = baseSize;
    baseStyles['--app-shell-aside-offset'] = baseSize;
  }

  if (isResponsiveSize(asideWidth)) {
    if (typeof asideWidth.base !== 'undefined') {
      baseStyles['--app-shell-aside-width'] = rem(asideWidth.base);
      baseStyles['--app-shell-aside-offset'] = rem(asideWidth.base);
    }

    keys(asideWidth).forEach((key) => {
      if (key !== 'base') {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]['--app-shell-aside-width'] = rem(asideWidth![key]);
        minMediaStyles[key]['--app-shell-aside-offset'] = rem(asideWidth![key]);
      }
    });
  }

  if (aside?.collapsed?.desktop) {
    const breakpointValue = aside!.breakpoint;
    minMediaStyles[breakpointValue] = minMediaStyles[breakpointValue] || {};
    minMediaStyles[breakpointValue]['--app-shell-aside-transform'] = collapsedAsideTransform;
    minMediaStyles[breakpointValue]['--app-shell-aside-transform-rtl'] = collapsedAsideTransformRtl;
    minMediaStyles[breakpointValue]['--app-shell-aside-offset'] = '0px !important';
  }

  if (aside?.collapsed?.mobile) {
    const breakpointValue = getBreakpointValue(aside!.breakpoint, theme) - 0.1;
    maxMediaStyles[breakpointValue] = maxMediaStyles[breakpointValue] || {};
    maxMediaStyles[breakpointValue]['--app-shell-aside-offset'] = '0px !important';
    maxMediaStyles[breakpointValue]['--app-shell-aside-transform'] = collapsedAsideTransform;
    maxMediaStyles[breakpointValue]['--app-shell-aside-transform-rtl'] = collapsedAsideTransformRtl;
  }
}
