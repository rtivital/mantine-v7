import React from 'react';
import { InputBase } from './InputBase';

export default { title: 'InputBase' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <InputBase
        label="This is input base"
        error="test-error"
        placeholder="test-placeholder"
        data-test="orange"
      />
    </div>
  );
}
