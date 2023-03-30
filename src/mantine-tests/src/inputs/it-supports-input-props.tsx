import React from 'react';
import { itSupportsInputWrapperProps } from './it-supports-input-wrapper-props';
import { itSupportsInputSections } from './it-supports-input-sections';
import { itSupportsFocusEvents } from '../shared/it-supports-focus-events';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
  selector: string;
}

export function itSupportsInputProps<Props>(
  options: Options<Props>,
  name = 'supports input props'
) {
  describe(name, () => {
    itSupportsInputWrapperProps(options);
    itSupportsInputSections(options);
    itSupportsFocusEvents(options);
  });
}
