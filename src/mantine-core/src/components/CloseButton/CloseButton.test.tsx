import React from 'react';
import { tests, render } from '@mantine/tests';
import { CloseButton, CloseButtonProps, CloseButtonStylesNames } from './CloseButton';
import { CloseIcon } from './CloseIcon';

const defaultProps: CloseButtonProps = {};

describe('@mantine/core/CloseButton', () => {
  tests.axe([<CloseButton aria-label="test" />]);

  tests.itSupportsFocusEvents<CloseButtonProps>({
    component: CloseButton,
    props: defaultProps,
  });

  tests.itSupportsSystemProps<CloseButtonProps, CloseButtonStylesNames>({
    component: CloseButton,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    refType: HTMLButtonElement,
    displayName: '@mantine/core/CloseButton',
    stylesApiSelectors: ['root'],
  });
});

describe('@mantine/core/CloseIcon', () => {
  tests.itSupportsRef({ component: CloseIcon, refType: SVGSVGElement, props: {} });

  it('sets width and height to size prop', () => {
    const { container } = render(<CloseIcon size="2rem" />);
    expect(container.querySelector('svg')).toHaveStyle({ width: '2rem', height: '2rem' });
  });

  it('has correct displayName', () => {
    expect(CloseIcon.displayName).toEqual('@mantine/core/CloseIcon');
  });
});
