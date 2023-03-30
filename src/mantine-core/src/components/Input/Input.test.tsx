import React from 'react';
import { render, tests } from '@mantine/tests';
import { Input, InputProps, InputStylesNames } from './Input';

const defaultProps: InputProps = {
  rightSection: 'right',
  leftSection: 'left',
};

describe('@mantine/core/Input', () => {
  tests.axe([
    <Input aria-label="test-input" />,
    <Input placeholder="test-input" />,
    <Input placeholder="test-input" error />,
  ]);

  tests.itSupportsSystemProps<InputProps, InputStylesNames>({
    component: Input,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    extend: true,
    refType: HTMLDivElement,
    polymorphicSelector: '.mantine-Input-input',
    displayName: '@mantine/core/Input',
    stylesApiSelectors: ['input', 'leftSection', 'rightSection', 'wrapper'],
  });

  tests.itSupportsFocusEvents<InputProps>({
    component: Input,
    props: defaultProps,
    selector: '.mantine-Input-input',
  });

  tests.itSupportsInputSections<InputProps>({
    component: Input,
    props: defaultProps,
  });
});
