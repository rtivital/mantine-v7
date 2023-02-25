import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
  selector?: string;
}

export function itSupportsColorsProps<Props>(
  options: Options<Props>,
  name = 'supports c, bg and opacity props'
) {
  const selector = options.selector || '*:not(style)';

  it(name, () => {
    const { container: theme } = render(<options.component {...options.props} c="red" />);
    const { container: themeIndex } = render(<options.component {...options.props} c="red.4" />);
    const { container: cssColor } = render(<options.component {...options.props} c="#FEFEFE" />);
    const { container: bg } = render(<options.component {...options.props} bg="orange" />);
    const { container: opacity } = render(<options.component {...options.props} opacity={0.85} />);

    expect(theme.querySelector(selector)).toHaveStyle({ color: 'var(--mantine-color-red-6)' });
    expect(themeIndex.querySelector(selector)).toHaveStyle({ color: 'var(--mantine-color-red-4)' });
    expect(cssColor.querySelector(selector)).toHaveStyle({ color: '#FEFEFE' });
    expect(bg.querySelector(selector)).toHaveStyle({ color: 'var(--mantine-color-orange-6)' });
    expect(opacity.querySelector(selector)).toHaveStyle({ color: '0.85' });
  });
}
