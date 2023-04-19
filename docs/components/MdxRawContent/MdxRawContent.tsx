import React from 'react';
import { TableOfContents } from '../TableOfContents/TableOfContents';
import { MdxPageBase } from '../MdxPageBase/MdxPageBase';
import classes from './MdxRawContent.module.css';

interface MdxRawContentProps {
  children: React.ReactNode;
}

export function MdxRawContent({ children }: MdxRawContentProps) {
  return (
    <MdxPageBase>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          {children}
          <div>Siblings</div>
        </div>

        <div className={classes.tableOfContents}>
          <TableOfContents headings={[]} withTabs={false} />
        </div>
      </div>
    </MdxPageBase>
  );
}
