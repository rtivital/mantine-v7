import React from 'react';
import { FileInput } from './FileInput';

export default { title: 'FileInput' };

export function Usage() {
  const [value, setValue] = React.useState<File | null>(null);
  return (
    <div style={{ padding: 40 }}>
      <FileInput
        placeholder="Pick file"
        value={value}
        onChange={setValue}
        className="test-class-ssssssssss"
      />
    </div>
  );
}

export function Multiple() {
  const [value, setValue] = React.useState<File[]>([]);
  return (
    <div style={{ padding: 40 }}>
      <FileInput placeholder="Multiple" multiple value={value} onChange={setValue} clearable />
    </div>
  );
}
