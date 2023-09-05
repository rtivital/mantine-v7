import React from 'react';
import { IconCheck } from '@tabler/icons-react';
import { Chip } from './Chip';

export default { title: 'Chip' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Chip type="checkbox" variant="light">
        Light
      </Chip>
      <Chip type="checkbox" variant="filled">
        Filled
      </Chip>
      <Chip type="checkbox" variant="outline">
        Outline
      </Chip>
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ padding: 40 }}>
      <Chip type="checkbox" size="xs">
        XS chip
      </Chip>
      <Chip type="checkbox" size="sm">
        SM chip
      </Chip>
      <Chip type="checkbox" size="md">
        MD chip
      </Chip>
      <Chip type="checkbox" size="lg">
        LG chip
      </Chip>
      <Chip type="checkbox" size="xl">
        XL chip
      </Chip>
    </div>
  );
}

export function CustomIcon() {
  return (
    <div style={{ padding: 40 }}>
      <Chip type="checkbox" size="xs" icon={<IconCheck size={14} />}>
        XS chip
      </Chip>
      <Chip type="checkbox" size="sm" icon={<IconCheck size={20} />}>
        SM chip
      </Chip>
      <Chip type="checkbox" size="md" icon={<IconCheck size={12} />}>
        MD chip
      </Chip>
      <Chip type="checkbox" size="lg" icon={<IconCheck size={12} />}>
        LG chip
      </Chip>
      <Chip type="checkbox" size="xl" icon={<IconCheck size={14} />}>
        XL chip
      </Chip>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Chip type="checkbox" variant="light" unstyled>
        unstyled
      </Chip>
    </div>
  );
}
