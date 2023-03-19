import { MantineTheme, parseThemeColor } from '../../../../MantineProvider';

export function colorResolver(color: unknown, theme: MantineTheme) {
  const parsedColor = parseThemeColor({ color, theme });

  if (parsedColor.color === 'dimmed') {
    return 'var(--mantine-color-dimmed)';
  }

  return parsedColor.variable ? `var(${parsedColor.variable})` : parsedColor.color;
}
