import React from 'react';
import { Progress } from './Progress';

export default { title: 'Progress' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Progress value={56} />
    </div>
  );
}

export function Compound() {
  return (
    <div style={{ padding: 40 }}>
      <Progress.Root>
        <Progress.Section value={56}>
          <Progress.Label>Documents</Progress.Label>
        </Progress.Section>
      </Progress.Root>
    </div>
  );
}
