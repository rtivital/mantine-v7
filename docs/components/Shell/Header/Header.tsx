/* eslint-disable import/no-relative-packages */
import React from 'react';
import Link from 'next/link';
import { Code } from '@mantine/core';
import { MantineLogo, HeaderControls } from '@mantine/ds';
import packageJson from '../../../../package.json';
import classes from './Header.module.css';

interface HeaderProps {
  navbarOpened: boolean;
  onNavbarToggle(): void;
}

export function Header({ navbarOpened, onNavbarToggle }: HeaderProps) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/" className={classes.logoLink}>
          <MantineLogo size={30} />
        </Link>
        <Code fw="bold" className={classes.version}>
          {packageJson.version}
        </Code>
      </div>

      <HeaderControls onSearch={() => {}} githubLink="https://github.com/mantinedev/mantine" />
    </header>
  );
}
