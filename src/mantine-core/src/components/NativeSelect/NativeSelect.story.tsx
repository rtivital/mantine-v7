import React from 'react';
import { NativeSelect } from './NativeSelect';

export default { title: 'NativeSelect' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <NativeSelect data={['React', 'Angular', 'Vue']} />
    </div>
  );
}

export function Groups() {
  return (
    <div style={{ padding: 40 }}>
      <NativeSelect
        data={[
          {
            group: 'Frontend',
            items: ['React', 'Angular', 'Vue'],
          },
          {
            group: 'Backend',
            items: ['Node', 'PHP', 'Python'],
          },
        ]}
      />
    </div>
  );
}

export function OptionsAsChildren() {
  return (
    <div style={{ padding: 40 }}>
      <NativeSelect>
        <optgroup label="Front">
          <option>React</option>
          <option>Angular</option>
          <option>Vue</option>
        </optgroup>
        <optgroup label="Back">
          <option>Node</option>
          <option>PHP</option>
          <option>Python</option>
        </optgroup>
      </NativeSelect>
    </div>
  );
}
