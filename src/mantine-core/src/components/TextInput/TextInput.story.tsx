import React from 'react';
import { TextInput } from './TextInput';

export default { title: 'TextInput' };

export function WithinDisabledFieldset() {
  return (
    <fieldset disabled style={{ padding: 40 }}>
      <legend>Disabled fieldset</legend>
      <TextInput label="Disabled by fieldset" placeholder="Disabled by fieldset" />
      <TextInput label="Disabled by prop" placeholder="Disabled by prop" disabled mt="md" />
    </fieldset>
  );
}

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

export function WithoutErrorStyles() {
  return (
    <div style={{ padding: 40 }}>
      <TextInput
        label="Text input without error styles"
        description="Description"
        withErrorStyles={false}
        error="Error"
      />
    </div>
  );
}
