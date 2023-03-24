import React from 'react';
import { render } from '../render';

const randomNumber = (min = 10, max = 100) => Math.floor(Math.random() * (max - min + 1) + min);
const getTestClassNames = (selectors: string[]) =>
  selectors.reduce<Record<string, string>>((acc, selector) => {
    acc[selector] = `test-${selector}`;
    return acc;
  }, {});

interface Options<Props extends Record<string, any> = any, Selectors extends string = string> {
  component: React.ComponentType<Props>;
  props: Props;
  selectors: Selectors[];
  providerName: string;
}

export function itSupportsStylesApi<
  Props extends Record<string, any>,
  Selectors extends string = string
>(options: Options<Props, Selectors>, name = 'supports styles api') {
  it(`${name}: classNames (inline)`, () => {
    const classNames = getTestClassNames(options.selectors);
    const { container } = render(<options.component {...options.props} classNames={classNames} />);

    options.selectors.forEach((selector) => {
      expect(container.querySelector(`.${classNames[selector]}`)).toBeInTheDocument();
    });
  });

  it(`${name}: styles (inline)`, () => {
    const classNames = getTestClassNames(options.selectors);
    const styles = options.selectors.reduce<Record<string, React.CSSProperties>>(
      (acc, selector) => {
        acc[selector] = { fontSize: `${randomNumber()}px` };
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

  it(`${name}: static classNames (default)`, () => {
    const { container } = render(<options.component {...options.props} />);
    options.selectors.forEach((selector) => {
      expect(
        container.querySelector(`.mantine-${options.providerName}-${selector}`)
      ).toBeInTheDocument();
    });
  });

  it(`${name}: classNames (MantineProvider)`, () => {
    const classNames = getTestClassNames(options.selectors);
    const { container } = render(<options.component {...options.props} classNames={classNames} />, {
      components: {
        [options.providerName]: {
          classNames,
        },
      },
    });

    options.selectors.forEach((selector) => {
      expect(container.querySelector(`.${classNames[selector]}`)).toBeInTheDocument();
    });
  });

  it(`${name}: styles (MantineProvider)`, () => {
    const classNames = getTestClassNames(options.selectors);
    const styles = options.selectors.reduce<Record<string, React.CSSProperties>>(
      (acc, selector) => {
        acc[selector] = { fontSize: `${randomNumber()}px` };
        return acc;
      },
      {}
    );

    const { container } = render(<options.component {...options.props} />, {
      components: {
        [options.providerName]: {
          styles,
          classNames,
        },
      },
    });

    options.selectors.forEach((selector) => {
      expect(container.querySelector(`.${classNames[selector]}`)).toHaveStyle({
        ...styles[selector],
      });
    });
  });

  it(`${name}: static classNames (MantineProvider)`, () => {
    const { container } = render(
      <options.component {...options.props} />,
      {},
      { classNamesPrefix: 'test' }
    );

    options.selectors.forEach((selector) => {
      expect(
        container.querySelector(`.test-${options.providerName}-${selector}`)
      ).toBeInTheDocument();
    });
  });
}
