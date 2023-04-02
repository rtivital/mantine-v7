import React from 'react';
import { SegmentedControl } from './SegmentedControl';
import { MantineProvider } from '../../core';

export default { title: 'SegmentedControl' };

export function Usage() {
  return (
    <div style={{ padding: 0 }}>
      <SegmentedControl data={['First', 'Second', 'Third', 'Forth']} />
    </div>
  );
}

export function FullWidth() {
  return (
    <div style={{ padding: 40 }}>
      <SegmentedControl data={['React', 'Angular', 'Svelte', 'Vue']} fullWidth />
    </div>
  );
}

export function Color() {
  return (
    <div style={{ padding: 40 }}>
      <SegmentedControl data={['React', 'Angular', 'Svelte', 'Vue']} color="blue" />
    </div>
  );
}

export function Vertical() {
  return (
    <div style={{ padding: 40 }}>
      <SegmentedControl data={['React', 'Angular', 'Svelte', 'Vue']} orientation="vertical" />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40 }}>
      <SegmentedControl data={['React', 'Angular', 'Svelte', 'Vue']} disabled />
    </div>
  );
}

export function FocusRingAlways() {
  return (
    <div style={{ padding: 40 }}>
      <MantineProvider theme={{ focusRing: 'always' }} inherit>
        <SegmentedControl data={['React', 'Angular', 'Svelte', 'Vue']} />
      </MantineProvider>
    </div>
  );
}
