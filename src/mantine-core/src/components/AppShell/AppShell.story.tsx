import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Group } from '../Group';
import { Button } from '../Button';
import { AppShell } from './AppShell';

export default { title: 'AppShell' };

export function Usage() {
  const [opened, { toggle }] = useDisclosure(true);
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false);
  const [headerOpened, { toggle: toggleHeader }] = useDisclosure(true);
  return (
    <AppShell
      padding="md"
      navbar={{
        width: { base: 200, lg: 400 },
        breakpoint: 'md',
        collapsed: { desktop: !opened, mobile: !mobileOpened },
      }}
      header={{
        height: 50,
        collapsed: !headerOpened,
      }}
    >
      <AppShell.Navbar>
        <Button>Focusable element 1</Button>
        <Button>Focusable element 2</Button>
      </AppShell.Navbar>
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Main>
        <Group>
          <Button onClick={toggleHeader}>Toggle header</Button>
          <Button onClick={toggle}>Toggle navbar</Button>
          <Button onClick={toggleMobile}>Toggle navbar mobile</Button>
        </Group>
        <p>Other content</p>
      </AppShell.Main>
    </AppShell>
  );
}
