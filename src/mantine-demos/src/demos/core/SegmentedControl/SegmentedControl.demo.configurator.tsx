import { MantineDemo } from '@mantine/ds';
import { SegmentedControlWrapper } from './Wrapper';

const code = `
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} />;
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: SegmentedControlWrapper,
  code,
  centered: true,
  controls: [{ prop: 'color', type: 'color', initialValue: 'blue', libraryValue: null }],
};
