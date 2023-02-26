import { tests } from '@mantine/tests';
import { UnstyledButton, UnstyledButtonProps } from './UnstyledButton';

const defaultProps: UnstyledButtonProps = {};

describe('@mantine/core/UnstyledButton', () => {
  tests.itSupportsFocusEvents<UnstyledButtonProps>({
    component: UnstyledButton,
    props: defaultProps,
  });

  tests.itSupportsSystemProps<UnstyledButtonProps>({
    component: UnstyledButton,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    children: true,
    refType: HTMLButtonElement,
    displayName: '@mantine/core/UnstyledButton',
    providerName: 'UnstyledButton',
  });
});
