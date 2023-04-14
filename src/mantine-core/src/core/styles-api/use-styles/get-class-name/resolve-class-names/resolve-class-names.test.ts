import { DEFAULT_THEME } from '../../../../MantineProvider';
import { resolveClassNames } from './resolve-class-names';

describe('@mantine/core/resolve-class-names', () => {
  it('returns empty object if classNames is undefined', () => {
    expect(
      resolveClassNames({
        theme: DEFAULT_THEME,
        classNames: undefined,
        props: {},
        stylesCtx: undefined,
      })
    ).toStrictEqual({});
  });

  it('correctly resolves classNames function (theme)', () => {
    expect(
      resolveClassNames({
        theme: DEFAULT_THEME,
        classNames: (theme) => ({ test: theme.activeClassName }),
        props: {},
        stylesCtx: undefined,
      })
    ).toStrictEqual({ test: DEFAULT_THEME.activeClassName });
  });

  it('correctly resolves classNames function (props)', () => {
    expect(
      resolveClassNames({
        theme: DEFAULT_THEME,
        classNames: (_, props) => ({ test: props.test }),
        props: { test: 'test' },
        stylesCtx: undefined,
      })
    ).toStrictEqual({ test: 'test' });
  });

  it('correctly resolves classNames function (stylesCtx)', () => {
    expect(
      resolveClassNames({
        theme: DEFAULT_THEME,
        classNames: (_, __, stylesCtx) => ({ test: stylesCtx?.test }),
        props: {},
        stylesCtx: { test: 'test' },
      })
    ).toStrictEqual({ test: 'test' });
  });

  it('correctly resolves classNames object', () => {
    expect(
      resolveClassNames({
        theme: DEFAULT_THEME,
        classNames: { test1: 'test1', test2: 'test2' },
        props: {},
        stylesCtx: undefined,
      })
    ).toStrictEqual({ test1: 'test1', test2: 'test2' });
  });
});
