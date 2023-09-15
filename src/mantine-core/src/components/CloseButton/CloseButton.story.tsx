import React from 'react';
import { CloseButton } from './CloseButton';

export default { title: 'CloseButton' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <CloseButton />
      <CloseButton variant="filled" size="sm" />
      <CloseButton variant="filled" size="md" />
      <CloseButton variant="filled" size="lg" />
      <CloseButton variant="filled" size="xl" />
      <CloseButton variant="filled" size="10rem" iconSize="8rem" />
      <CloseButton unstyled />
    </div>
  );
}
