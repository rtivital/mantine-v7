import React from 'react';
import { Select } from './Select';

export default { title: 'Select' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        data={['React', 'Angular', 'Svelte']}
        placeholder="Select something"
        dropdownOpened
        checkIconPosition="right"
      />
    </div>
  );
}

export function Searchable() {
  return (
    <div style={{ padding: 40 }}>
      <Select data={['React', 'Angular', 'Svelte']} placeholder="Select something" searchable />
    </div>
  );
}
