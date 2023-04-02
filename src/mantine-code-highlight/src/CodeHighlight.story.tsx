import React from 'react';
import { CodeHighlight } from './CodeHighlight';

export default { title: 'CodeHighlight' };

const tsxCode = `
import { forwardRef } from 'react';
import { Group, Avatar, Text, Select } from '@mantine/core';

// Data for select
// You can use any data structure you want

const data = [
  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Bender Bending Rodríguez',
    value: 'Bender Bending Rodríguez',
    description: 'Fascinated with cooking',
  },

  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    value: 'Carol Miller',
    description: 'One of the richest people on Earth',
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    label: 'Homer Simpson',
    value: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
    label: 'Spongebob Squarepants',
    value: 'Spongebob Squarepants',
    description: 'Not just a sponge',
  },
];

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  image: string;
  label: string;
  description: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />

        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" opacity={0.65}>
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);

function Demo() {
  return (
    <Select
      label="Choose employee of the month"
      placeholder="Pick one"
      itemComponent={SelectItem}
      data={data}
      searchable
      maxDropdownHeight={400}
      nothingFound="Nobody here"
      filter={(value, item) =>
        item.label.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.description.toLowerCase().includes(value.toLowerCase().trim())
      }
    />
  );
}
`;

const cssCode = `.root {
  --ai-size-xs: rem(18px);
  --ai-size-sm: rem(22px);
  --ai-size-md: rem(28px);
  --ai-size-lg: rem(34px);
  --ai-size-xl: rem(44px);

  --_bg: var(--ai-bg);
  --_color: var(--ai-color);
  --_cursor: pointer;

  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;

  width: var(--ai-size);
  height: var(--ai-size);
  min-width: var(--ai-size);
  min-height: var(--ai-size);
  border-radius: var(--ai-radius);
  background: var(--_bg);
  color: var(--_color);
  border: var(--ai-bd);
  cursor: var(--_cursor);

  @mixin hover {
    &:not([data-loading]):not(:disabled):not([data-disabled]) {
      --_bg: var(--ai-hover);
    }
  }

  @mixin light {
    --_loading-overlay-bg: rgba(255, 255, 255, 0.35);
    --_disabled-bg: var(--mantine-color-gray-1);
    --_disabled-color: var(--mantine-color-gray-5);
  }

  @mixin dark {
    --_loading-overlay-bg: rgba(0, 0, 0, 0.35);
    --_disabled-bg: var(--mantine-color-dark-6);
    --_disabled-color: var(--mantine-color-dark-3);
  }

  &[data-loading] {
    --_cursor: not-allowed;

    &::before {
      content: '';
      position: absolute;
      inset: rem(-1px);
      border-radius: var(--ai-radius);
      background-color: var(--_loading-overlay_bg);
    }
  }

  &:disabled:not([data-loading]),
  &[data-disabled]:not([data-loading]) {
    --_cursor: not-allowed;
    --_bg: var(--_disabled-bg);
    --_color: var(--_disabled-color);
  }
}

.loader {
  z-index: 1;
}
`;

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <CodeHighlight>{tsxCode}</CodeHighlight>
    </div>
  );
}

export function CssCode() {
  return (
    <div style={{ padding: 40 }}>
      <CodeHighlight language="scss">{cssCode}</CodeHighlight>
    </div>
  );
}
