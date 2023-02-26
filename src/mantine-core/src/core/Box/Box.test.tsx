import { tests } from '@mantine/tests';
import { Box, BoxProps } from './Box';

const defaultProps: BoxProps = {};

describe('@mantine/core/Box', () => {
  tests.itSupportsSystemProps<BoxProps>({
    component: Box,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    children: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Box',
    providerName: null,
  });
});
