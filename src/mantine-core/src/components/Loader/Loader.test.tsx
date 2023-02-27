import React, { forwardRef } from 'react';
import { tests, render } from '@mantine/tests';
import { Loader, LoaderProps, LoaderStylesNames, defaultLoaders } from './Loader';
import { MantineLoaderComponent } from './Loader.types';

const customLoader: MantineLoaderComponent = forwardRef(() => <div data-custom-loader />);

const defaultProps: LoaderProps = {};

describe('@mantine/core/Loader', () => {
  tests.itSupportsSystemProps<LoaderProps, LoaderStylesNames>({
    component: Loader,
    props: defaultProps,
    styleProps: true,
    refType: SVGSVGElement,
    displayName: '@mantine/core/Loader',
    stylesApiSelectors: ['root'],
  });

  it('supports custom loaders', () => {
    const { container } = render(
      <Loader
        type="custom"
        loaders={{
          ...defaultLoaders,
          custom: customLoader,
        }}
      />
    );
    expect(container.querySelector('[data-custom-loader]')).toBeInTheDocument();
  });

  it('supports custom loaders on MantineProvider', () => {
    const { container } = render(<Loader />, {
      loader: 'custom',
      components: {
        Loader: {
          defaultProps: {
            loaders: { ...defaultLoaders, custom: customLoader },
          },
        },
      },
    });

    expect(container.querySelector('[data-custom-loader]')).toBeInTheDocument();
  });
});
