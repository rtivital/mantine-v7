import React from 'react';
import { MantineColorsTuple, MantineProvider, Button, Group } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';

interface ComponentsPreviewProps {
  colors: MantineColorsTuple;
}

export function ComponentsPreview({ colors }: ComponentsPreviewProps) {
  const [debouncedColors] = useDebouncedValue(colors, 100);
  return (
    <>
      <MantineProvider theme={{ colors: { '__colors-generator__': debouncedColors } }}>
        <Group mt="xl">
          <Button color="__colors-generator__">Filled</Button>
          <Button color="__colors-generator__" variant="light">
            Light
          </Button>
          <Button color="__colors-generator__" variant="outline">
            Outline
          </Button>
        </Group>
      </MantineProvider>
    </>
  );
}
