import { getBoxStyle } from './get-box-style';
import { DEFAULT_THEME } from '../../MantineProvider';

describe('@mantine/core/Box/get-box-style', () => {
  it('returns empty object if no style or vars provided', () => {
    expect(getBoxStyle({ theme: DEFAULT_THEME })).toEqual({});
    expect(getBoxStyle({ theme: DEFAULT_THEME, style: {} })).toEqual({});
    expect(getBoxStyle({ theme: DEFAULT_THEME, vars: {} })).toEqual({});
    expect(getBoxStyle({ theme: DEFAULT_THEME, vars: {}, style: {} })).toEqual({});
    expect(getBoxStyle({ theme: DEFAULT_THEME, vars: () => ({}), style: () => ({}) })).toEqual({});
  });

  it('merges style and vars', () => {
    expect(
      getBoxStyle({ theme: DEFAULT_THEME, style: { color: 'red' }, vars: { '--test': 'red' } })
    ).toEqual({
      color: 'red',
      '--test': 'red',
    });

    expect(
      getBoxStyle({
        theme: DEFAULT_THEME,
        style: (theme) => ({ color: theme.colors.blue[7] }),
        vars: (theme) => ({ '--test': theme.spacing.md }),
      })
    ).toEqual({
      color: DEFAULT_THEME.colors.blue[7],
      '--test': DEFAULT_THEME.spacing.md,
    });
  });
});
