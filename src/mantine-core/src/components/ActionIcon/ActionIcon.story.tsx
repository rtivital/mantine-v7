import React from 'react';
import { ActionIcon } from './ActionIcon';

export default { title: 'ActionIcon' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <ActionIcon size="xl" radius="xl" color="orange">
        $$
      </ActionIcon>
    </div>
  );
}

export function ColorIndex() {
  return (
    <div style={{ padding: 40 }}>
      <ActionIcon size="xl" radius="xl" color="pink.3">
        $$
      </ActionIcon>
    </div>
  );
}

export function CssColor() {
  return (
    <div style={{ padding: 40 }}>
      <ActionIcon size="xl" radius="xl" color="#ff00ff">
        $$
      </ActionIcon>
    </div>
  );
}
