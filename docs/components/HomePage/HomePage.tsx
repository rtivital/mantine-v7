import React from 'react';
import { Shell } from '../Shell';
import { Footer } from '../Footer';
import classes from './HomePage.module.css';

export function HomePage() {
  return (
    <Shell withNavbar={false}>
      <div className={classes.root}>Homepage</div>
      <Footer />
    </Shell>
  );
}
