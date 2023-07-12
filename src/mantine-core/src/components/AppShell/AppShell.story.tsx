import React from 'react';
import { AppShell } from './AppShell';

export default { title: 'AppShell' };

export function Usage() {
  return (
    <AppShell
      navbar={{
        width: { base: 200, lg: 100, md: 300 },
      }}
    >
      <AppShell.Navbar>Navbar</AppShell.Navbar>
    </AppShell>
  );
}
