import React from 'react';
import { Shell } from '@/components/Shell';
import { PageBase } from '@/components/PageBase';
import { PageContentContainer } from '../PageContentContainer';

interface ContentPageBaseProps extends React.ComponentPropsWithoutRef<'div'> {}

export function ContentPageBase(props: ContentPageBaseProps) {
  return (
    <Shell>
      <PageBase>
        <PageContentContainer {...props} />
      </PageBase>
    </Shell>
  );
}
