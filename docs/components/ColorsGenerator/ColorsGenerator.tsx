import React, { useState } from 'react';
import { generateColorsMap } from '@mantine/colors-generator';
import { MdxTitle } from '@/components/MdxProvider';
import { ColorsList } from './ColorsList/ColorsList';
import { ColorsInput } from './ColorsInput/ColorsInput';

export function ColorsGenerator() {
  const [color, setColor] = useState('#F13EAF');
  const { colors, baseColorIndex } = generateColorsMap(color);

  return (
    <div>
      <MdxTitle order={1}>Mantine colors generator</MdxTitle>
      <ColorsInput value={color} onChange={setColor} />
      <ColorsList colors={colors} baseColorIndex={baseColorIndex} />
    </div>
  );
}
