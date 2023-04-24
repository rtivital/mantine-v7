import React from 'react';
import chroma from 'chroma-js';
import { ColorSwatch, Group } from '@mantine/core';
import classes from './ColorsList.module.css';

interface ColorsListProps {
  colors: chroma.Color[];
  baseColorIndex: number;
  displayColorsIndex: boolean | undefined;
  displayColorsValue: boolean | undefined;
}

function isLight(color: chroma.Color) {
  return chroma.contrast(color, 'white') < 4.5;
}

export function ColorsList({
  colors,
  baseColorIndex,
  displayColorsIndex,
  displayColorsValue,
}: ColorsListProps) {
  const items = colors.map((color, index) => (
    <div key={index} className={classes.item}>
      <ColorSwatch
        color={color.hex()}
        radius={0}
        className={classes.swatch}
        withShadow={false}
        data-base={index === baseColorIndex || undefined}
        c={isLight(color) ? 'black' : 'white'}
      >
        <div className={classes.label}>
          {displayColorsIndex && <span className={classes.index}>{index}</span>}
          {displayColorsValue && <span className={classes.hex}>{color.hex()}</span>}
        </div>
      </ColorSwatch>
    </div>
  ));

  return (
    <Group gap={0} wrap="nowrap" className={classes.root}>
      {items}
    </Group>
  );
}
