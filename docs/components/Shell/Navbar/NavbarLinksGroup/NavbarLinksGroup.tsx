import React from 'react';
import { MdxPagesGroup } from '@/types';
import classes from './NavbarLinksGroup.module.css';

interface NavbarLinksGroupProps {
  data: MdxPagesGroup;
  onNavbarClose(): void;
}

export function NavbarLinksGroup({ data, onNavbarClose }: NavbarLinksGroupProps) {
  return <div>Links group</div>;
}
