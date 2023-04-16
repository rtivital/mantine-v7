import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Header } from './Header/Header';
import { Navbar } from './Navbar/Navbar';
import classes from './Shell.module.css';

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  const [navbarOpened, navbarHandlers] = useDisclosure(false);

  return (
    <>
      <Header navbarOpened={navbarOpened} onNavbarToggle={navbarHandlers.toggle} />
      <Navbar navbarOpened={navbarOpened} onNavbarClose={navbarHandlers.close} />

      <main className={classes.main}>
        <div className={classes.content}>{children}</div>
      </main>
    </>
  );
}
