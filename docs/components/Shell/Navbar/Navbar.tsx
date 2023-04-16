import React from 'react';
import classes from './Navbar.module.css';

interface NavbarProps {
  navbarOpened: boolean;
  onNavbarClose(): void;
}

export function Navbar({ navbarOpened, onNavbarClose }: NavbarProps) {
  return <nav className={classes.navbar}>Navabr</nav>;
}
