import React from 'react';
import { ContentPageBase } from '@/components/ContentPageBase';
import { MdxPackagesInstallation } from '@/components/MdxProvider';

export default function GettingStarted() {
  return (
    <ContentPageBase title="Getting started">
      <MdxPackagesInstallation />
    </ContentPageBase>
  );
}
