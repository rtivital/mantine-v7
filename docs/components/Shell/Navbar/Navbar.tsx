import React from 'react';
import { Box, ScrollArea } from '@mantine/core';
import classes from './Navbar.module.css';

interface NavbarProps {
  navbarOpened: boolean;
  onNavbarClose(): void;
}

const content = Array(100)
  .fill(0)
  .map((_, index) => <p>Content</p>);

export function Navbar({ navbarOpened, onNavbarClose }: NavbarProps) {
  return (
    <Box component="nav" className={classes.navbar} mod={{ hidden: !navbarOpened }}>
      <ScrollArea className={classes.scrollarea} type="never" offsetScrollbars={false}>
        <div className={classes.content}>{content}</div>
      </ScrollArea>
    </Box>
  );
}
