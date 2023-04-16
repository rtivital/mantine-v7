import { tests } from '@mantine/tests';
import { VisuallyHidden, VisuallyHiddenProps } from './VisuallyHidden';

const defaultProps: VisuallyHiddenProps = {};

describe('@mantine/core/VisuallyHidden', () => {
  tests.itSupportsClassName({ component: VisuallyHidden, props: defaultProps });
  tests.itRendersChildren({ component: VisuallyHidden, props: defaultProps });

  it('has correct displayName', () => {
    expect(VisuallyHidden.displayName).toEqual('@mantine/core/VisuallyHidden');
  });
});
