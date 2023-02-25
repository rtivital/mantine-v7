import { DEFAULT_THEME } from '../../../MantineProvider';
import { sortMediaQueries } from './sort-media-queries';

describe('@mantine/core/Box/sort-media-queries', () => {
  it('sorts media queries correctly', () => {
    expect(
      sortMediaQueries({
        hasResponsiveStyles: true,
        inlineStyles: {},
        styles: {
          padding: '1.5rem',
          marginLeft: '2rem',
          marginRight: '2rem',
          color: 'var(--mantine-color-red-5)',
          opacity: 0.65,
        },
        media: {
          [`(min-width: ${DEFAULT_THEME.breakpoints.sm})`]: {
            padding: '3rem',
            marginLeft: '6rem',
            marginRight: '6rem',
            color: 'var(--mantine-color-red-7)',
            opacity: 0.95,
          },

          [`(min-width: ${DEFAULT_THEME.breakpoints.xl})`]: {
            padding: '4rem',
            marginLeft: '8rem',
            marginRight: '8rem',
            color: 'var(--mantine-color-red-9)',
            opacity: 0.95,
          },

          [`(min-width: ${DEFAULT_THEME.breakpoints.xs})`]: {
            padding: '2rem',
            marginLeft: '4rem',
            marginRight: '4rem',
            color: 'var(--mantine-color-red-6)',
            opacity: 0.85,
          },
        },
      })
    ).toStrictEqual({
      hasResponsiveStyles: true,
      inlineStyles: {},
      styles: {
        padding: '1.5rem',
        marginLeft: '2rem',
        marginRight: '2rem',
        color: 'var(--mantine-color-red-5)',
        opacity: 0.65,
      },
      media: [
        {
          query: `(min-width: ${DEFAULT_THEME.breakpoints.xs})`,
          styles: {
            padding: '2rem',
            marginLeft: '4rem',
            marginRight: '4rem',
            color: 'var(--mantine-color-red-6)',
            opacity: 0.85,
          },
        },
        {
          query: `(min-width: ${DEFAULT_THEME.breakpoints.sm})`,
          styles: {
            padding: '3rem',
            marginLeft: '6rem',
            marginRight: '6rem',
            color: 'var(--mantine-color-red-7)',
            opacity: 0.95,
          },
        },
        {
          query: `(min-width: ${DEFAULT_THEME.breakpoints.xl})`,
          styles: {
            padding: '4rem',
            marginLeft: '8rem',
            marginRight: '8rem',
            color: 'var(--mantine-color-red-9)',
            opacity: 0.95,
          },
        },
      ],
    });
  });
});
