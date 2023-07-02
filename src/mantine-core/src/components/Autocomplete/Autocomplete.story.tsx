import React from 'react';
import { Autocomplete } from './Autocomplete';

export default { title: 'Autocomplete' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Autocomplete
        label="Test"
        placeholder="Test autocomplete"
        data={[
          { value: 're', label: 'React' },
          { value: 'ng', label: 'Angular' },
          { value: 'vu', label: 'Vue' },
          { value: 'sv', label: 'Svelte' },
          {
            group: 'backend',
            items: [
              { value: 'no', label: 'Node' },
              { value: 'ex', label: 'Express' },
            ],
          },

          {
            group: 'python',
            items: [
              { value: 'dj', label: 'Django' },
              { value: 'fl', label: 'Flask' },
            ],
          },
        ]}
      />
    </div>
  );
}
