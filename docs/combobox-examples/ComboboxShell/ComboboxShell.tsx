import React from 'react';
import { Shell } from '@/components/Shell';
import { ComboboxNavbar } from './ComboboxNavbar/ComboboxNavbar';
import classes from './ComboboxShell.module.css';

interface ComboboxShellProps {
  children: React.ReactNode;
}

export function ComboboxShell({ children }: ComboboxShellProps) {
  return (
    <div className={classes.root}>
      <Shell withNavbar={false}>
        <ComboboxNavbar />
        <main className={classes.main}>{children}</main>
      </Shell>
    </div>
  );
}
