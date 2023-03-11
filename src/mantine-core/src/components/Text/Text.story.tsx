import React from 'react';
import { Text } from './Text';

export default { title: 'Text' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Text>Just text</Text>
    </div>
  );
}

export function Truncate() {
  return (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <Text truncate>Please truncate this text from the end</Text>
      <Text truncate="start">Please truncate this text from the start</Text>
      <Text truncate="end">Please truncate this text from the end</Text>
    </div>
  );
}

export function StyleProps() {
  return (
    <div style={{ padding: 40 }}>
      <Text tt="uppercase">Text transform</Text>
      <Text td="underline">Underline</Text>
      <Text td="line-through">Strike</Text>
      <Text fz="xl">Font size xl</Text>
      <Text ta="center">Align center</Text>
      <Text fw="bolder">Font weight</Text>
      <Text fs="italic">Italic</Text>
    </div>
  );
}
