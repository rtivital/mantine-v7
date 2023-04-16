import React from 'react';
import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import classes from './Shell.module.css';

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <>
      <Header />
      <Navbar />
      <main className={classes.main}>{children}</main>
    </>
  );
}
