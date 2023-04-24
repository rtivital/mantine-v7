import React, { useState } from 'react';
import { useRouter } from 'next/router';
import chroma from 'chroma-js';
import { IconCopy } from '@tabler/icons-react';
import {
  ColorPicker,
  TextInput,
  Input,
  Button,
  ColorSwatch,
  Group,
  Switch,
  Stack,
} from '@mantine/core';
import { COLORS_PRESET } from './colors-preset';
import classes from './ColorsInput.module.css';

interface ColorsInputProps {
  value: string;
  onChange(value: string): void;
  displayColorsIndex: boolean | undefined;
  setDisplayColorsIndex(value: boolean): void;
  displayColorsValue: boolean | undefined;
  setDisplayColorsValue(value: boolean): void;
}

export function ColorsInput({
  value,
  onChange,
  displayColorsIndex,
  displayColorsValue,
  setDisplayColorsIndex,
  setDisplayColorsValue,
}: ColorsInputProps) {
  const [inputState, setInputState] = useState(value);
  const [error, setError] = useState(false);
  const router = useRouter();

  const updateQuery = (color: string) => {
    router.replace({ query: { ...router.query, color: color.replace('#', '') } });
  };

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
    !hasError && updateQuery(val);
  };

  const presetControls = COLORS_PRESET.map((color) => (
    <Button
      variant="default"
      leftSection={<ColorSwatch size={20} color={color.color} />}
      radius="md"
      key={color.color}
      onClick={() => {
        handleChange(color.color);
        updateQuery(color.color);
      }}
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
          onChangeEnd={updateQuery}
          size="lg"
          classNames={{ saturation: classes.saturation }}
        />

        <Stack mt="xl">
          <Switch
            label="Display colors index"
            size="md"
            checked={displayColorsIndex}
            onChange={(event) => setDisplayColorsIndex(event.currentTarget.checked)}
          />
          <Switch
            label="Display colors value"
            size="md"
            checked={displayColorsValue}
            onChange={(event) => setDisplayColorsValue(event.currentTarget.checked)}
          />
        </Stack>

        <Button
          fullWidth
          leftSection={<IconCopy style={{ width: '1.2rem' }} />}
          rightSection={<span />}
          justify="space-between"
          size="md"
          mt="xl"
          radius="md"
        >
          Copy url to clipboard
        </Button>
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
