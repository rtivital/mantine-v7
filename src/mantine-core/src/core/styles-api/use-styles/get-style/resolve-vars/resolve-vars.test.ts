import { DEFAULT_THEME } from '../../../../MantineProvider';
import { resolveVars } from './resolve-vars';

describe('@mantine/core/resolve-vars', () => {
  it('resolves vars from varsResolver', () => {
    expect(
      resolveVars({
        vars: undefined,
        varsResolver: (theme, props, stylesCtx) => ({
          root: {
            '--theme': theme.colors.red[0],
            '--prop': props['data-prop'],
            '--ctx': stylesCtx?.['data-ctx'],
          },
        }),
        selector: 'root',
        theme: DEFAULT_THEME,
        props: { 'data-prop': 'red' },
        stylesCtx: { 'data-ctx': 'pink' },
      })
    ).toStrictEqual({
      '--theme': DEFAULT_THEME.colors.red[0],
      '--prop': 'red',
      '--ctx': 'pink',
    });
  });

  it('resolves vars from vars', () => {
    expect(
      resolveVars({
        varsResolver: undefined,
        vars: (theme, props, stylesCtx) => ({
          root: {
            '--theme': theme.colors.red[0],
            '--prop': props['data-prop'],
            '--ctx': stylesCtx?.['data-ctx'],
          },
        }),
        selector: 'root',
        theme: DEFAULT_THEME,
        props: { 'data-prop': 'red' },
        stylesCtx: { 'data-ctx': 'pink' },
      })
    ).toStrictEqual({
      '--theme': DEFAULT_THEME.colors.red[0],
      '--prop': 'red',
      '--ctx': 'pink',
    });
  });
});
