import React from 'react';
import { Box, ScrollArea } from '@mantine/core';
import { MDX_PAGES_GROUPS } from '@/mdx';
import { NavbarLinksGroup } from './NavbarLinksGroup/NavbarLinksGroup';
import classes from './Navbar.module.css';

interface NavbarProps {
  navbarOpened: boolean;
  onNavbarClose(): void;
}

export function Navbar({ navbarOpened, onNavbarClose }: NavbarProps) {
  const groups = MDX_PAGES_GROUPS.map((group) => (
    <NavbarLinksGroup data={group} onNavbarClose={onNavbarClose} key={group.group} />
  ));

  return (
    <Box component="nav" className={classes.navbar} mod={{ hidden: !navbarOpened }}>
      <ScrollArea className={classes.scrollarea} type="never" offsetScrollbars={false}>
        {groups}
      </ScrollArea>
    </Box>
  );
}
