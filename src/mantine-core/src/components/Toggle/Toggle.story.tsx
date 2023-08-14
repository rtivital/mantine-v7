import React from 'react';
import { IconPhoto } from '@tabler/icons-react';
import { Toggle } from './Toggle';

export default { title: 'Toggle' };

export function Usage() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 20 }}>
      <Toggle>
        <IconPhoto style={{ width: '100%', height: '100%' }} />
      </Toggle>
      <Toggle active>
        <IconPhoto style={{ width: '100%', height: '100%' }} />
      </Toggle>
      <Toggle active variant="filled">
        <IconPhoto style={{ width: '100%', height: '100%' }} />
      </Toggle>
      <Toggle>Some text content</Toggle>
    </div>
  );
}

export function Sizes() {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
    <Toggle key={size} size={size} m={5}>
      <IconPhoto style={{ width: '100%', height: '100%', background: 'red' }} />
    </Toggle>
  ));

  return <div style={{ padding: 40 }}>{sizes}</div>;
}
