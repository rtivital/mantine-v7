import React from 'react';
import { Autocomplete } from './Autocomplete';

export default { title: 'Autocomplete' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Autocomplete
        label="Test"
        placeholder="Test autocomplete"
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
    </div>
  );
}
