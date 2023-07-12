import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '../Burger';
import { AppShell } from './AppShell';

export default { title: 'AppShell' };

export function Usage() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      padding={{ base: 'sm', md: 'lg' }}
      navbar={{
        width: { base: 200, lg: 100, md: 300 },
        collapsed: !opened,
      }}
      styles={{
        main: {
          transition: 'padding 150ms ease',
        },
      }}
    >
      <AppShell.Navbar>Navbar</AppShell.Navbar>
      <AppShell.Main>
        <Burger onClick={toggle} opened={opened} />
        <p>Other content</p>
      </AppShell.Main>
    </AppShell>
  );
}
