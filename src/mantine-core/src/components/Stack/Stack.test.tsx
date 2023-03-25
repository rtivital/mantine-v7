import { tests } from '@mantine/tests';
import { Stack, StackProps, StackStylesNames } from './Stack';

const defaultProps: StackProps = {};

describe('@mantine/core/Stack', () => {
  tests.itSupportsSystemProps<StackProps, StackStylesNames>({
    component: Stack,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Stack',
    stylesApiSelectors: ['root'],
  });
});
