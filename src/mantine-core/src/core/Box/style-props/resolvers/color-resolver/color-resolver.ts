import { MantineColorScheme, MantineTheme, parseThemeColor } from '../../../../MantineProvider';

export function colorResolver(
  color: unknown,
  theme: MantineTheme,
  colorScheme: MantineColorScheme
) {
  const parsedColor = parseThemeColor({ color, colorScheme, theme });

  if (parsedColor.color === 'white') {
    return 'var(--mantine-color-white)';
  }

  if (parsedColor.color === 'black') {
    return 'var(--mantine-color-black)';
  }

  if (parsedColor.color === 'dimmed') {
    return colorScheme === 'dark' ? 'var(--mantine-color-dark-2)' : 'var(--mantine-color-gray-6)';
  }

  return parsedColor.variable ? `var(${parsedColor.variable})` : parsedColor.color;
}
