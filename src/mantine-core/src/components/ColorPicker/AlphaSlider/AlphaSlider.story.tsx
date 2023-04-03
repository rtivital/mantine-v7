import React from 'react';
import { AlphaSlider } from './AlphaSlider';

export default { title: 'AlphaSlider' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <AlphaSlider color="#FF0F0F" value={0.45} onChange={() => {}} onChangeEnd={() => {}} />
    </div>
  );
}
