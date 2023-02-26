import { itSupportsClassName } from './shared/it-supports-classname';
import { itSupportsStyle } from './shared/it-supports-style';
import { itSupportsRef } from './shared/it-supports-ref';
import { itSupportsOthers } from './shared/it-supports-others';
import { itIsPolymorphic } from './shared/it-is-polymorphic';
import { itRendersChildren } from './shared/it-renders-children';
import { itSupportsProviderDefaultProps } from './shared/it-supports-provider-default-props';
import { itSupportsStylesApi } from './shared/it-supports-style-api';

import { itSupportsMarginsProps } from './style-props/it-supports-margins-props';
import { itSupportsPaddingsProps } from './style-props/it-supports-paddings-props';
import { itSupportsColorsProps } from './style-props/it-supports-colors-props';
import { itSupportsFontsProps } from './style-props/it-supports-fonts-props';
import { itSupportsSizeProps } from './style-props/it-supports-size-props';
import { itSupportsBackgroundProps } from './style-props/it-supports-background-props';
import { itSupportsPositionProps } from './style-props/it-supports-position-props';

interface Options<Props extends Record<string, any>, StylesApiSelectors extends string> {
  component: React.ComponentType<Props>;
  props: Props;
  styleProps?: boolean;
  polymorphic?: boolean;
  children?: boolean;
  displayName?: string;
  selector?: string;
  refType?: any;
  refProp?: string;
  providerName?: string | null;
  stylesApiSelectors?: StylesApiSelectors[];
}

export function itSupportsSystemProps<
  Props extends Record<string, any>,
  StylesApiSelectors extends string = string
>(options: Options<Props, StylesApiSelectors>) {
  const splittedDisplayName = options.displayName ? options.displayName.split('/') : [];
  const predictedProviderName = options.displayName
    ? splittedDisplayName[splittedDisplayName.length - 1]
    : undefined;
  const providerName = options.providerName || predictedProviderName;

  itSupportsClassName(options);
  itSupportsStyle(options);
  itSupportsOthers(options);
  options.refType && itSupportsRef({ ...options, refType: options.refType });
  options.polymorphic && itIsPolymorphic(options);
  options.children && itRendersChildren(options);
  typeof providerName === 'string' &&
    options.providerName !== null &&
    itSupportsProviderDefaultProps({ ...options, providerName });

  if (options.styleProps) {
    itSupportsMarginsProps(options);
    itSupportsPaddingsProps(options);
    itSupportsColorsProps(options);
    itSupportsFontsProps(options);
    itSupportsSizeProps(options);
    itSupportsBackgroundProps(options);
    itSupportsPositionProps(options);
  }

  if (Array.isArray(options.stylesApiSelectors) && providerName) {
    itSupportsStylesApi<Props, StylesApiSelectors>({
      ...options,
      selectors: options.stylesApiSelectors,
      providerName,
    });
  }

  if (options.displayName) {
    it('has correct displayName', () => {
      expect(options.component.displayName).toBe(options.displayName);
    });
  }
}
