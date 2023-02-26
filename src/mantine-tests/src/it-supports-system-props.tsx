import { itSupportsClassName } from './shared/it-supports-classname';
import { itSupportsStyle } from './shared/it-supports-style';
import { itSupportsRef } from './shared/it-supports-ref';
import { itSupportsOthers } from './shared/it-supports-others';
import { itIsPolymorphic } from './shared/it-is-polymorphic';
import { itRendersChildren } from './shared/it-renders-children';
import { itSupportsProviderDefaultProps } from './shared/it-supports-provider-default-props';

import { itSupportsMarginsProps } from './style-props/it-supports-margins-props';
import { itSupportsPaddingsProps } from './style-props/it-supports-paddings-props';
import { itSupportsColorsProps } from './style-props/it-supports-colors-props';
import { itSupportsFontsProps } from './style-props/it-supports-fonts-props';
import { itSupportsSizeProps } from './style-props/it-supports-size-props';
import { itSupportsBackgroundProps } from './style-props/it-supports-background-props';
import { itSupportsPositionProps } from './style-props/it-supports-position-props';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
  styleProps?: boolean;
  polymorphic?: boolean;
  children?: boolean;
  displayName?: string;
  selector?: string;
  refType?: any;
  refProp?: string;
  providerName?: string;
}

export function itSupportsSystemProps<Props>(options: Options<Props>) {
  itSupportsClassName(options);
  itSupportsStyle(options);
  itSupportsOthers(options);
  options.refType && itSupportsRef({ ...options, refType: options.refType });
  options.polymorphic && itIsPolymorphic(options);
  options.children && itRendersChildren(options);
  typeof options.providerName === 'string' &&
    itSupportsProviderDefaultProps({ ...options, providerName: options.providerName });

  if (options.styleProps) {
    itSupportsMarginsProps(options);
    itSupportsPaddingsProps(options);
    itSupportsColorsProps(options);
    itSupportsFontsProps(options);
    itSupportsSizeProps(options);
    itSupportsBackgroundProps(options);
    itSupportsPositionProps(options);
  }

  if (options.displayName) {
    it('has correct displayName', () => {
      expect(options.component.displayName).toBe(options.displayName);
    });
  }
}
