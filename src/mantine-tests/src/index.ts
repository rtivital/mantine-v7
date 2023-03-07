// Shared tests
import { itIsPolymorphic } from './shared/it-is-polymorphic';
import { itRendersChildren } from './shared/it-renders-children';
import { itSupportsClassName } from './shared/it-supports-classname';
import { itSupportsOthers } from './shared/it-supports-others';
import { itSupportsRef } from './shared/it-supports-ref';
import { itSupportsStyle } from './shared/it-supports-style';
import { itSupportsFocusEvents } from './shared/it-supports-focus-events';
import { itSupportsProviderDefaultProps } from './shared/it-supports-provider-default-props';
import { itSupportsStylesApi } from './shared/it-supports-style-api';

// Style props tests
import { itSupportsMarginsProps } from './style-props/it-supports-margins-props';
import { itSupportsPaddingsProps } from './style-props/it-supports-paddings-props';
import { itSupportsColorsProps } from './style-props/it-supports-colors-props';
import { itSupportsFontsProps } from './style-props/it-supports-fonts-props';
import { itSupportsSizeProps } from './style-props/it-supports-size-props';
import { itSupportsBackgroundProps } from './style-props/it-supports-background-props';
import { itSupportsPositionProps } from './style-props/it-supports-position-props';

// High level tests
import { itSupportsSystemProps } from './it-supports-system-props';
import { axe } from './axe';

export const tests = {
  itIsPolymorphic,
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStyle,
  itSupportsFocusEvents,
  itSupportsProviderDefaultProps,
  itSupportsStylesApi,

  itSupportsMarginsProps,
  itSupportsPaddingsProps,
  itSupportsColorsProps,
  itSupportsFontsProps,
  itSupportsSizeProps,
  itSupportsBackgroundProps,
  itSupportsPositionProps,

  axe,
  itSupportsSystemProps,
};

export { render, renderWithAct } from './render';
