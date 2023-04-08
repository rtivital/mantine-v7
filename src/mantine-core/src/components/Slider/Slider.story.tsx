import React from 'react';
import { Slider } from './Slider/Slider';

export default { title: 'Slider' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Slider defaultValue={45} />
      <Slider defaultValue={45} disabled mt="xl" />
      <Slider defaultValue={45} inverted mt="xl" />
      <Slider defaultValue={45} inverted disabled mt="xl" />
      <Slider defaultValue={45} radius={0} mt="xl" />
    </div>
  );
}
