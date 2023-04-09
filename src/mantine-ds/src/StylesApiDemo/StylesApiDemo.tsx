import React from 'react';
import { DEFAULT_THEME } from '@mantine/core';
import { CodeHighlight, CodeHighlightCode } from '@mantine/code-highlight';
import { DemoArea, DemoAreaProps } from '../DemoArea';
import classes from './StylesApiDemo.module.css';

const colors = Object.keys(DEFAULT_THEME.colors)
  .filter((color) => color !== 'dark')
  .map((color) => `var(--mantine-color-${color}-filled)`);
const hoveredColor = colors[0];
const selectedColors = colors.slice(1);

export interface StylesApiProps extends DemoAreaProps {
  data: { selectors: Record<string, string> };
  code: string;
}

function getCss(hovered: string | null, selected: string[]) {
  const hoveredCode = hovered ? `.${hovered} {\n  outline: 2px solid ${hoveredColor};\n}\n` : '';
  const selectedCode = selected
    .map((selector) => `.${selector} {\n  outline: 2px solid ${selectedColors[1]};\n}`)
    .join('\n\n');

  return `${hoveredCode}${selectedCode}`;
}

export function StylesApiDemo({
  data,
  code,
  withPadding,
  maxWidth,
  centered,
  children,
}: StylesApiProps) {
  const [hovered, setHovered] = React.useState<string | null>(null);
  const [selected, setSelected] = React.useState<string[]>([]);

  return (
    <DemoArea withPadding={withPadding} maxWidth={maxWidth} centered={centered}>
      Demo
    </DemoArea>
  );
}
