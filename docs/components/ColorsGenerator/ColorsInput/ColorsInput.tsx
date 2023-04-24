import React, { useState } from 'react';
import chroma from 'chroma-js';
import { ColorPicker, TextInput, Input, Button, ColorSwatch, Group } from '@mantine/core';
import { COLORS_PRESET } from './colors-preset';
import classes from './ColorsInput.module.css';

interface ColorsInputProps {
  value: string;
  onChange(value: string): void;
}

export function ColorsInput({ value, onChange }: ColorsInputProps) {
  const [inputState, setInputState] = useState(value);
  const [error, setError] = useState(false);

  const handleChange = (val: string) => {
    setInputState(val);
    onChange(val);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.currentTarget.value;
    const hasError = !chroma.valid(val);
    setInputState(val);
    setError(hasError);
    !hasError && onChange(val);
  };

  const presetControls = COLORS_PRESET.map((color) => (
    <Button
      variant="default"
      leftSection={<ColorSwatch size={20} color={color.color} />}
      radius="md"
      key={color.color}
      onClick={() => handleChange(color.color)}
    >
      {color.name}
    </Button>
  ));

  return (
    <div className={classes.root}>
      <div className={classes.inputs}>
        <TextInput
          value={inputState}
          onChange={handleInputChange}
          error={error}
          label="Enter base color"
          className={classes.input}
          size="md"
          radius="md"
        />
        <ColorPicker
          value={value}
          onChange={handleChange}
          size="lg"
          classNames={{ saturation: classes.saturation }}
        />
      </div>
      <div className={classes.presets}>
        <Input.Label size="md">Preset</Input.Label>
        <Group mt={5} gap="xs">
          {presetControls}
        </Group>
      </div>
    </div>
  );
}
