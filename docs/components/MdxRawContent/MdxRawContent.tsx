import React from 'react';
import { Frontmatter } from '@/types';
import { TableOfContents } from '@/components/TableOfContents';
import { MdxPageBase } from '@/components/MdxPageBase';
import { MdxSiblings } from '@/components/MdxSiblings';
import classes from './MdxRawContent.module.css';

interface MdxRawContentProps {
  children: React.ReactNode;
  meta: Frontmatter;
}

export function MdxRawContent({ children, meta }: MdxRawContentProps) {
  return (
    <MdxPageBase>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          {children}
          <MdxSiblings slug={meta.slug} />
        </div>

        <div className={classes.tableOfContents}>
          <TableOfContents withTabs={false} />
        </div>
      </div>
    </MdxPageBase>
  );
}
