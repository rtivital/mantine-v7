import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Header } from './Header/Header';
import { Navbar } from './Navbar/Navbar';
import classes from './Shell.module.css';

interface ShellProps {
  children: React.ReactNode;
  withNavbar?: boolean;
}

export function Shell({ children, withNavbar = true }: ShellProps) {
  const [navbarOpened, navbarHandlers] = useDisclosure(false);

  return (
    <>
      <Header navbarOpened={navbarOpened} onNavbarToggle={navbarHandlers.toggle} />
      {withNavbar && <Navbar navbarOpened={navbarOpened} onNavbarClose={navbarHandlers.close} />}
      <main
        className={classes.main}
        id="mdx"
        style={{
          paddingLeft: withNavbar ? undefined : 0,
          paddingRight: withNavbar ? undefined : 0,
        }}
      >
        {children}
      </main>
    </>
  );
}
