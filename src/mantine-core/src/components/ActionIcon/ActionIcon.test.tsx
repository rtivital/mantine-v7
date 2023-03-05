import React from 'react';
import { tests, render } from '@mantine/tests';
import { ActionIcon, ActionIconProps, ActionIconStylesNames } from './ActionIcon';

const defaultProps: ActionIconProps = {};

describe('@mantine/core/ActionIcon', () => {
  tests.itSupportsFocusEvents<ActionIconProps>({
    component: ActionIcon,
    props: defaultProps,
  });

  tests.itSupportsSystemProps<ActionIconProps, ActionIconStylesNames>({
    component: ActionIcon,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    refType: HTMLButtonElement,
    displayName: '@mantine/core/ActionIcon',
    stylesApiSelectors: ['root'],
  });

  it('adds type="button" to root element if component="button"', () => {
    const { container: buttonContainer } = render(<ActionIcon component="button" />);
    expect(buttonContainer.querySelector('button')).toHaveAttribute('type', 'button');

    const { container: divContainer } = render(<ActionIcon component="div" />);
    expect(divContainer.querySelector('div')).not.toHaveAttribute('type');
  });
});
