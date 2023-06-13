/* eslint-disable import/no-relative-packages */
import React from 'react';
import cx from 'clsx';
import { Code, Group, Burger, RemoveScroll } from '@mantine/core';
import { HeaderControls, ColorSchemeControl } from '@mantine/ds';
import { Logo } from '@/components/Logo';
import { searchHandlers } from '@/components/Search';
import packageJson from '../../../../package.json';
import classes from './Header.module.css';

interface HeaderProps {
  navbarOpened: boolean;
  onNavbarToggle(): void;
}

export function Header({ navbarOpened, onNavbarToggle }: HeaderProps) {
  return (
    <>
      <header className={cx(classes.header, RemoveScroll.classNames.fullWidth)} data-desktop>
        <div className={classes.logo}>
          <Logo />
          <Code fw="bold" className={classes.version}>
            {packageJson.version}
          </Code>
        </div>

        <HeaderControls
          className={classes.controls}
          onSearch={searchHandlers.open}
          githubLink="https://github.com/mantinedev/mantine"
        />
      </header>

      <header className={classes.header} data-mobile>
        <Group justify="space-between" w="100%">
          <Burger
            opened={navbarOpened}
            onClick={onNavbarToggle}
            size="sm"
            aria-label="Toggle navbar"
          />

          <Logo />

          <ColorSchemeControl />
        </Group>
      </header>
    </>
  );
}
