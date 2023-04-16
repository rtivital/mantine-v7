import React from 'react';
import classes from './Header.module.css';

interface HeaderProps {
  navbarOpened: boolean;
  onNavbarToggle(): void;
}

export function Header({ navbarOpened, onNavbarToggle }: HeaderProps) {
  return <header className={classes.header}>This is header</header>;
}
