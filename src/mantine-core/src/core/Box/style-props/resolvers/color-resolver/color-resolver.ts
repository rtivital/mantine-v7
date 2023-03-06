import { MantineColorScheme, MantineTheme, parseThemeColor } from '../../../../MantineProvider';

export function colorResolver(
  color: unknown,
  theme: MantineTheme,
  colorScheme: MantineColorScheme
) {
  const parsedColor = parseThemeColor({ color, theme });

  if (parsedColor.color === 'dimmed') {
    return colorScheme === 'dark' ? 'var(--mantine-color-dark-2)' : 'var(--mantine-color-gray-6)';
  }

  return parsedColor.variable ? `var(${parsedColor.variable})` : parsedColor.color;
}
