import React from 'react';
import { Slider } from './Slider/Slider';

export default { title: 'Slider' };

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Slider defaultValue={45} marks={marks} size="md" />
      <Slider defaultValue={45} disabled mt={60} />
      <Slider defaultValue={45} inverted mt="xl" />
      <Slider defaultValue={45} inverted disabled mt="xl" />
      <Slider defaultValue={45} radius={0} mt="xl" labelAlwaysOn />
    </div>
  );
}
