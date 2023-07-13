import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '../Burger';
import { Button } from '../Button';
import { AppShell } from './AppShell';

export default { title: 'AppShell' };

export function Usage() {
  const [opened, { toggle }] = useDisclosure(true);
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false);
  return (
    <AppShell
      padding="md"
      navbar={{
        width: { base: 200, lg: 400 },
        breakpoint: 'md',
        collapsed: { desktop: !opened, mobile: !mobileOpened },
      }}
    >
      <AppShell.Navbar>
        <Button>Focusable element 1</Button>
        <Button>Focusable element 2</Button>
      </AppShell.Navbar>
      <AppShell.Main>
        <Burger onClick={toggleMobile} opened={mobileOpened} />
        <Burger onClick={toggle} opened={opened} />
        <p>Other content</p>
      </AppShell.Main>
    </AppShell>
  );
}
