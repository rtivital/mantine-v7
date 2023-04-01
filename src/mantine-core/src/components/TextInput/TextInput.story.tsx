import React from 'react';
import { TextInput } from './TextInput';

export default { title: 'TextInput' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <TextInput
        label="Text input"
        placeholder="This is text input"
        description="Description"
        error="Error"
      />
    </div>
  );
}
