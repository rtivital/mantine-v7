import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
  selector?: string;
}

export function itSupportsSizeProps<Props>(
  options: Options<Props>,
  name = 'supports w, miw, maw, h, mih and mah props'
) {
  const selector = options.selector || '*:not(style)';

  it(name, () => {
    const { container: theme } = render(<options.component {...options.props} w="xl" />);
    const { container: w } = render(<options.component {...options.props} w="40rem" />);
    const { container: miw } = render(<options.component {...options.props} miw="50rem" />);
    const { container: maw } = render(<options.component {...options.props} maw="60rem" />);
    const { container: h } = render(<options.component {...options.props} h="40rem" />);
    const { container: mih } = render(<options.component {...options.props} mih="50rem" />);
    const { container: mah } = render(<options.component {...options.props} mah="60rem" />);

    expect(theme.querySelector(selector)).toHaveStyle({ width: 'var(--mantine-spacing-xl)' });
    expect(w.querySelector(selector)).toHaveStyle({ width: '40rem' });
    expect(miw.querySelector(selector)).toHaveStyle({ minWidth: '50rem' });
    expect(maw.querySelector(selector)).toHaveStyle({ maxWidth: '60rem' });
    expect(h.querySelector(selector)).toHaveStyle({ height: '40rem' });
    expect(mih.querySelector(selector)).toHaveStyle({ minHeight: '50rem' });
    expect(mah.querySelector(selector)).toHaveStyle({ maxHeight: '60rem' });
  });
}
