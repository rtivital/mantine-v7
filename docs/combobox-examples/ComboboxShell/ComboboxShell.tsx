import React from 'react';
import { Shell } from '@/components/Shell';
import { ComboboxNavbar } from './ComboboxNavbar/ComboboxNavbar';

interface ComboboxShellProps {
  children: React.ReactNode;
}

export function ComboboxShell({ children }: ComboboxShellProps) {
  return (
    <Shell withNavbar={false}>
      <ComboboxNavbar />
      <main>{children}</main>
    </Shell>
  );
}
