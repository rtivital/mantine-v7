import React from 'react';
import { ColorSwatch, Group, Text, DEFAULT_THEME } from '@mantine/core';
import { generateColors } from './generate-colors/generate-colors';

export function ColorsGenerator() {
  const { colors, hueDown, hueUp, baseColorIndex } = generateColors('#FFE3E3');

  console.log(baseColorIndex);

  const swatches = colors.map((color, index) => (
    <div key={color.hex()}>
      <ColorSwatch size={80} color={color.hex()} />
      <Text fz="xs">
        {index} – {color.hex()}
      </Text>
    </div>
  ));

  const themeColors = DEFAULT_THEME.colors.red.map((color, index) => (
    <div key={color}>
      <ColorSwatch size={80} color={color} />
      <Text fz="xs">
        {index} – {color}
      </Text>
    </div>
  ));

  return (
    <div>
      <Group>{swatches}</Group>
      <Group>{themeColors}</Group>
    </div>
  );
}
