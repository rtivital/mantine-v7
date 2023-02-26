import React from 'react';
import { render } from '../render';

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
    const classNames = options.selectors.reduce<Record<string, string>>((acc, selector) => {
      acc[selector] = `test-${selector}`;
      return acc;
    }, {});

    const { container } = render(<options.component {...options.props} classNames={classNames} />);

    options.selectors.forEach((selector) => {
      expect(container.querySelector(`.${classNames[selector]}`)).toBeInTheDocument();
    });
  });
}
