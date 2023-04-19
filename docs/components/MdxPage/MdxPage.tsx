import React from 'react';
import { MdxPageHeader } from '@/components/MdxPageHeader';
// import { MdxPageTabs } from '@/components/MdxPageTabs';
import { MdxRawContent } from '@/components/MdxRawContent';
import { Frontmatter } from '@/types';

interface MdxPageProps {
  meta: Frontmatter;
  children: React.ReactNode;
}

export function MdxPage(props: MdxPageProps) {
  return (
    <>
      <MdxPageHeader {...props} />
      <MdxRawContent {...props} />

      {/* {Array.isArray(props.frontmatter.props) ? (
        <MdxPageTabs {...props} />
      ) : (
        <MdxRawContent {...props} />
      )} */}
    </>
  );
}
