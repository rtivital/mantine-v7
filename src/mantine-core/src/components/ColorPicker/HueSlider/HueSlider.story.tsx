import React from 'react';
import { HueSlider } from './HueSlider';

export default { title: 'HueSlider' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <HueSlider value={155} onChange={() => {}} onChangeEnd={() => {}} />
    </div>
  );
}
