import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useLocalStorage } from '@mantine/hooks';
import { generateColorsMap } from '@mantine/colors-generator';
import { MdxTitle } from '@/components/MdxProvider';
import { ColorsList } from './ColorsList/ColorsList';
import { ColorsInput } from './ColorsInput/ColorsInput';

export function ColorsGenerator() {
  const router = useRouter();
  const urlColor = `#${router.query.color}`;
  const [color, setColor] = useState('#5474B4');
  const { colors, baseColorIndex } = generateColorsMap(color);
  const [displayColorsIndex, setDisplayColorsIndex] = useLocalStorage({
    key: 'display-colors-index',
    defaultValue: true,
  });

  const [displayColorsValue, setDisplayColorsValue] = useLocalStorage({
    key: 'display-colors-value',
    defaultValue: true,
  });

  useEffect(() => {
    if (/^#[0-9A-F]{6}$/i.test(urlColor)) {
      setColor(urlColor);
    }
  }, [router.query.color]);

  return (
    <div>
      <MdxTitle order={1}>Mantine colors generator</MdxTitle>
      <ColorsInput
        value={color}
        onChange={setColor}
        displayColorsIndex={displayColorsIndex}
        setDisplayColorsIndex={setDisplayColorsIndex}
        displayColorsValue={displayColorsValue}
        setDisplayColorsValue={setDisplayColorsValue}
      />
      <ColorsList
        colors={colors}
        baseColorIndex={baseColorIndex}
        displayColorsIndex={displayColorsIndex}
        displayColorsValue={displayColorsValue}
      />
    </div>
  );
}
