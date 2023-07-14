import React, { useState } from 'react';
import { Select } from './Select';
import { Button } from '../Button';

export default { title: 'Select' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Select data={['React', 'Angular', 'Svelte']} placeholder="Select something" />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState<string | null>('React');
  return (
    <div style={{ padding: 40 }}>
      <Select
        value={value}
        onChange={setValue}
        data={['React', 'Angular', 'Svelte']}
        placeholder="Select something"
      />
      <Button onClick={() => setValue('Angular')}>Angular</Button>
      <Button onClick={() => setValue(null)}>Null</Button>
    </div>
  );
}

export function Searchable() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        data={['React', 'Angular', 'Svelte']}
        placeholder="Select something"
        searchable
        nothingFoundMessage="Nothing found..."
      />
    </div>
  );
}
