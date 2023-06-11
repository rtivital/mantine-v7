import React from 'react';
import { render, tests } from '@mantine/tests';
import { Spotlight, SpotlightProps, SpotlightStylesNames } from './Spotlight';

const defaultProps: SpotlightProps = {
  forceOpened: true,
  withinPortal: false,
  transitionProps: { duration: 0 },
  children: (
    <>
      <Spotlight.Search />
      <Spotlight.ActionsList>
        <Spotlight.Action label="First" />
        <Spotlight.Action label="Second" />
        <Spotlight.Empty>Empty</Spotlight.Empty>
      </Spotlight.ActionsList>
    </>
  ),
};

describe('@mantine/core/Spotlight', () => {
  tests.itSupportsSystemProps<SpotlightProps, SpotlightStylesNames>({
    component: Spotlight,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/spotlight/Spotlight',
    stylesApiSelectors: ['root'],
    selector: '.mantine-Spotlight-root',
    sizeSelector: '.mantine-Spotlight-root',
    variantSelector: '.mantine-Spotlight-root',
  });
});
