import React, { useState } from 'react';
import { NumberInput } from './NumberInput';
import { Button } from '../Button';

export default { title: 'NumberInput' };

export function Usage() {
  const [value, setValue] = useState<number | string>(345);
  return (
    <div style={{ padding: 40 }}>
      <NumberInput
        value={value}
        label="Number input"
        placeholder="Number input"
        onChange={setValue}
        ref={console.log}
      />
      {typeof value === 'number' ? `${value} number` : `${value === '' ? 'empty' : value} string`}
      <Button onClick={() => setValue(245.32)}>Set value to float</Button>
    </div>
  );
}
