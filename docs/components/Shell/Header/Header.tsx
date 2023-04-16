/* eslint-disable import/no-relative-packages */
import React from 'react';
import Link from 'next/link';
import { MantineLogo } from '@mantine/logo';
import { Code } from '@mantine/core';
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
          <MantineLogo size={30}></MantineLogo>
        </Link>
        <Code fw="bold" className={classes.version}>
          {packageJson.version}
        </Code>
      </div>
    </header>
  );
}
