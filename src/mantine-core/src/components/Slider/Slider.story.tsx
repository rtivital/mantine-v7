import React from 'react';
import { Slider } from './Slider/Slider';
import { RangeSlider } from './RangeSlider/RangeSlider';

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

export function Range() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <RangeSlider defaultValue={[25, 65]} marks={marks} size="md" />
      <RangeSlider defaultValue={[25, 65]} disabled mt={60} />
      <RangeSlider defaultValue={[25, 65]} inverted mt="xl" />
      <RangeSlider defaultValue={[25, 65]} inverted disabled mt="xl" />
      <RangeSlider
        defaultValue={[25, 65]}
        radius={0}
        mt="xl"
        labelAlwaysOn
        color="#fe0d45"
        styles={{
          label: { background: 'pink' },
        }}
      />
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ padding: 40 }}>
      <Slider defaultValue={45} mt="xl" marks={marks} size="xs" />
      <Slider defaultValue={45} mt="xl" marks={marks} size="sm" />
      <Slider defaultValue={45} mt="xl" marks={marks} size="md" />
      <Slider defaultValue={45} mt="xl" marks={marks} size="lg" />
      <Slider defaultValue={45} mt="xl" marks={marks} size="xl" />
      <Slider defaultValue={45} mt="xl" marks={marks} size="1rem" />
      <Slider defaultValue={45} mt="xl" marks={marks} size={20} />
      <Slider defaultValue={45} mt="xl" marks={marks} size="2rem" />
    </div>
  );
}
