import { rem } from '@mantine/core';
import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
  selector?: string;
}

export function itSupportsPaddingsProps<Props>(
  options: Options<Props>,
  name = 'supports m, mx, my, mt, mb, mr and ml props'
) {
  const selector = options.selector || '*:not(style)';

  it(name, () => {
    const { container: p } = render(<options.component {...options.props} p={45} />);
    const { container: theme } = render(<options.component {...options.props} p="xl" />);
    const { container: px } = render(<options.component {...options.props} px={34} />);
    const { container: py } = render(<options.component {...options.props} py={22} />);
    const { container: pt } = render(<options.component {...options.props} pt={13} />);
    const { container: pb } = render(<options.component {...options.props} pb={43} />);
    const { container: pr } = render(<options.component {...options.props} pr={98} />);
    const { container: pl } = render(<options.component {...options.props} pl={11} />);

    expect(p.querySelector(selector)).toHaveStyle({ padding: rem(45) });
    expect(theme.querySelector(selector)).toHaveStyle({ padding: 'var(--mantine-spacing-xl)' });
    expect(px.querySelector(selector)).toHaveStyle({ paddingLeft: rem(34), paddingRight: rem(34) });
    expect(py.querySelector(selector)).toHaveStyle({ paddingTop: rem(22), paddingBottom: rem(22) });
    expect(pt.querySelector(selector)).toHaveStyle({ paddingTop: rem(13) });
    expect(pb.querySelector(selector)).toHaveStyle({ paddingBottom: rem(43) });
    expect(pr.querySelector(selector)).toHaveStyle({ paddingRight: rem(98) });
    expect(pl.querySelector(selector)).toHaveStyle({ paddingLeft: rem(11) });
  });
}
