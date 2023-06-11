import React from 'react';
import { tests } from '@mantine/tests';
import { Spotlight, SpotlightProps, SpotlightStylesNames } from './Spotlight';
import { SpotlightAction } from './SpotlightAction';
import { SpotlightActionsList } from './SpotlightActionsList';
import { SpotlightEmpty } from './SpotlightEmpty';
import { SpotlightFooter } from './SpotlightFooter';
import { SpotlightSearch } from './SpotlightSearch';
import { spotlight } from './spotlight.store';

const defaultProps: SpotlightProps = {
  forceOpened: true,
  withinPortal: false,
  transitionProps: { duration: 0 },
  children: (
    <>
      <Spotlight.Search />
      <Spotlight.ActionsList>
        <Spotlight.Action
          label="First"
          description="Description"
          leftSection="L"
          rightSection="R"
        />
        <Spotlight.Action label="Second" />
        <Spotlight.Empty>Empty</Spotlight.Empty>
      </Spotlight.ActionsList>
      <Spotlight.Footer>Footer</Spotlight.Footer>
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
    stylesApiSelectors: [
      'root',
      'action',
      'actionBody',
      'actionDescription',
      'actionLabel',
      'actionSection',
      'actionsList',
      'actionsListInner',
      'body',
      'content',
      'footer',
      'inner',
      'overlay',
      'search',
    ],
    selector: '.mantine-Spotlight-root',
    sizeSelector: '.mantine-Spotlight-root',
    variantSelector: '.mantine-Spotlight-root',
  });

  it('exposes static components and functions', () => {
    expect(Spotlight.Action).toBe(SpotlightAction);
    expect(Spotlight.ActionsList).toBe(SpotlightActionsList);
    expect(Spotlight.Empty).toBe(SpotlightEmpty);
    expect(Spotlight.Footer).toBe(SpotlightFooter);
    expect(Spotlight.Search).toBe(SpotlightSearch);
    expect(Spotlight.open).toBe(spotlight.open);
    expect(Spotlight.close).toBe(spotlight.close);
    expect(Spotlight.toggle).toBe(spotlight.toggle);
  });
});
