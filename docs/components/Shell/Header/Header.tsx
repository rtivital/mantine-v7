/* eslint-disable import/no-relative-packages */
import React from 'react';
import { Code, Group } from '@mantine/core';
import { HeaderControls, ColorSchemeControl } from '@mantine/ds';
import { Logo } from '@/components/Logo';
import packageJson from '../../../../package.json';
import classes from './Header.module.css';

interface HeaderProps {
  navbarOpened: boolean;
  onNavbarToggle(): void;
}

export function Header({ navbarOpened, onNavbarToggle }: HeaderProps) {
  return (
    <>
      <header className={classes.header} data-desktop>
        <div className={classes.logo}>
          <Logo />
          <Code fw="bold" className={classes.version}>
            {packageJson.version}
          </Code>
        </div>

        <HeaderControls
          className={classes.controls}
          onSearch={() => {}}
          githubLink="https://github.com/mantinedev/mantine"
        />
      </header>

      <header className={classes.header} data-mobile>
        <Group justify="space-between" w="100%">
          <div>bur</div>
          <Logo />

          <ColorSchemeControl />
        </Group>
      </header>
    </>
  );
}
