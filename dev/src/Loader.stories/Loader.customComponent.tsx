import React from 'react';
import { Loader, defaultLoaders } from '@mantine/core';
import { RingLoader } from './RingLoader';

export function LoaderCustomComponent() {
  return (
    <div>
      <Loader
        type="ring"
        loaders={{
          ...defaultLoaders,
          ring: RingLoader,
        }}
      />
    </div>
  );
}
