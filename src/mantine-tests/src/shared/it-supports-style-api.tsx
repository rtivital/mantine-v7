import React from 'react';
import { render } from '../render';

const getRandomColor = () => Math.floor(Math.random() * 16777215).toString(16);
const getTestClassNames = (selectors: string[]) =>
  selectors.reduce<Record<string, string>>((acc, selector) => {
    acc[selector] = `test-${selector}`;
    return acc;
  }, {});

interface Options<Props extends Record<string, any> = any, Selectors extends string = string> {
  component: React.ComponentType<Props>;
  props: Props;
  selectors: Selectors[];
}

export function itSupportsStylesApi<
  Props extends Record<string, any>,
  Selectors extends string = string
>(options: Options<Props, Selectors>, name = 'supports styles api') {
  it(`${name}: classNames`, () => {
    const classNames = getTestClassNames(options.selectors);
    const { container } = render(<options.component {...options.props} classNames={classNames} />);

    options.selectors.forEach((selector) => {
      expect(container.querySelector(`.${classNames[selector]}`)).toBeInTheDocument();
    });
  });

  it(`${name}: styles`, () => {
    const classNames = getTestClassNames(options.selectors);
    const styles = options.selectors.reduce<Record<string, React.CSSProperties>>(
      (acc, selector) => {
        acc[selector] = { color: `#${getRandomColor()}` };
        return acc;
      },
      {}
    );

    const { container } = render(
      <options.component {...options.props} classNames={classNames} styles={styles} />
    );

    options.selectors.forEach((selector) => {
      expect(container.querySelector(`.${classNames[selector]}`)).toHaveStyle({
        ...styles[selector],
      });
    });
  });
}
