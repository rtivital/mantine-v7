import { getGradient } from './get-gradient';
import { DEFAULT_THEME } from '../../default-theme';

describe('@mantine/core/get-gradient', () => {
  it('returns default gradient from theme if gradient is not provided', () => {
    expect(getGradient(DEFAULT_THEME)).toEqual(
      'linear-gradient(45deg, var(--mantine-color-blue-filled) 0%, var(--mantine-color-cyan-filled) 100%)'
    );
  });

  it('merges given gradient with theme default gradient', () => {
    expect(
      getGradient(DEFAULT_THEME, {
        from: 'red',
        to: 'blue',
        deg: 90,
      })
    ).toEqual(
      'linear-gradient(90deg, var(--mantine-color-red-filled) 0%, var(--mantine-color-blue-filled) 100%)'
    );
  });

  it('get colors from theme by index', () => {
    expect(
      getGradient(DEFAULT_THEME, {
        from: 'red.3',
        to: 'blue.8',
        deg: 90,
      })
    ).toEqual(
      'linear-gradient(90deg, var(--mantine-color-red-3) 0%, var(--mantine-color-blue-8) 100%)'
    );
  });

  it('allows using CSS colors', () => {
    expect(
      getGradient(DEFAULT_THEME, {
        from: '#FEFEFE',
        to: '#CDCDCD',
        deg: 90,
      })
    ).toEqual('linear-gradient(90deg, #FEFEFE 0%, #CDCDCD 100%)');
  });
});
