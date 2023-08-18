import React from 'react';
import { Shell } from '../Shell';
import { Footer } from '../Footer';
import { Jumbotron } from './Jumbotron/Jumbotron';
import classes from './HomePage.module.css';

export function HomePage() {
  return (
    <Shell withNavbar={false}>
      <div className={classes.root}>
        <Jumbotron />
      </div>
      <Footer />
    </Shell>
  );
}
