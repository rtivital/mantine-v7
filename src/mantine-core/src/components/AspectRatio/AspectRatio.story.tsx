import React from 'react';
import { AspectRatio } from './AspectRatio';

export default { title: 'AspectRatio' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <AspectRatio ratio={16 / 9}>
        <div style={{ background: 'tomato' }} />
      </AspectRatio>
    </div>
  );
}
