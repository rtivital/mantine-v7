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
