import React from 'react';
import {
  IconBrandMantine,
  IconCompass,
  IconApi,
  IconHeartHandshake,
  IconPalette,
} from '@tabler/icons-react';
import { Box, ScrollArea } from '@mantine/core';
import { MDX_PAGES_GROUPS } from '@/mdx';
import { NavbarMainLink } from './NavbarMainLink/NavbarMainLink';
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
        <div className={classes.body}>
          <NavbarMainLink icon={<IconCompass stroke={1.5} />} href="/getting-started">
            Getting started
          </NavbarMainLink>
          <NavbarMainLink icon={<IconBrandMantine stroke={1.5} />} href="/about">
            About Mantine
          </NavbarMainLink>
          <NavbarMainLink icon={<IconApi stroke={1.5} />} href="/overview">
            API Overview
          </NavbarMainLink>
          <NavbarMainLink icon={<IconHeartHandshake stroke={1.5} />} href="/contribute">
            Contribute
          </NavbarMainLink>
          <NavbarMainLink icon={<IconPalette stroke={1.5} />} href="/colors-generator">
            Colors generator
          </NavbarMainLink>
          <div className={classes.groups}>{groups}</div>
        </div>
      </ScrollArea>
    </Box>
  );
}
