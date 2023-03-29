import React from 'react';
import { Input } from './Input';

export default { title: 'Input' };

export function Variants() {
  return (
    <div style={{ padding: 40 }}>
      <Input placeholder="default" />
      <Input placeholder="cursor pointer" pointer mt="md" />
      <Input placeholder="input with error" mt="md" error leftSection="##" />
      <Input placeholder="disabled" mt="md" disabled />
      <Input placeholder="with icon" mt="md" leftSection="$" />
      <Input placeholder="filled" variant="filled" mt="md" />
      <Input placeholder="unstyled" variant="unstyled" mt="md" />
      <Input placeholder="none" variant="none" mt="md" />
    </div>
  );
}

export function Sizes() {
  const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <Input
      placeholder={`Input ${size}`}
      size={size}
      key={size}
      leftSection={size}
      rightSection={size}
      mt="md"
      styles={{
        rightSection: { backgroundColor: 'pink' },
        leftSection: { backgroundColor: 'cyan' },
      }}
    />
  ));

  return <div style={{ padding: 40 }}>{sizes}</div>;
}

export function RightSection() {
  return (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <Input
        placeholder="Input with right section"
        rightSection="$"
        defaultValue="asdasdnjknwebdkjwbjrbfkjberfhjbrefhberjfbjherbfjherbfjhb"
        rightSectionWidth={40}
        styles={{
          rightSection: { backgroundColor: 'pink' },
        }}
      />
    </div>
  );
}

export function Multiline() {
  const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <div style={{ padding: 40, display: 'flex' }} key={size}>
      <Input defaultValue="default input" size={size} />
      <Input
        size={size}
        component="textarea"
        placeholder="Multiline input"
        defaultValue="asdasdnjknwebdkjwbjrbfkjberfhjbrefhberjfbjherbfjherbfjhb"
        multiline
        rows={3}
      />
    </div>
  ));

  return <>{sizes}</>;
}

export function CompoundComponents() {
  return (
    <div style={{ padding: 40 }}>
      <Input.Label required>Input label</Input.Label>
    </div>
  );
}
