import React from 'react';
import { Footer } from '@/components/Footer';
import classes from './MdxPageBase.module.css';

interface MdxPageBaseProps {
  children: React.ReactNode;
}

export function MdxPageBase({ children }: MdxPageBaseProps) {
  return (
    <>
      <div className={classes.content}>{children}</div>
      <Footer withNavbar />
    </>
  );
}
