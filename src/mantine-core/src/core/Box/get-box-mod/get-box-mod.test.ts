import { getBoxMod } from './get-box-mod';

describe('@mantine/core/Box/get-box-mod', () => {
  it('returns null if mod is not provided', () => {
    expect(getBoxMod()).toBe(null);
  });

  it('transforms adds data- prefix to keys that do not have it', () => {
    expect(getBoxMod({ test: true, 'data-test-2': true })).toEqual({
      'data-test': true,
      'data-test-2': true,
    });
  });

  it('returns object with truthy data attributes', () => {
    expect(
      getBoxMod({
        'data-test': true,
        'data-test-2': 'test',
        'data-test-3': undefined,
        'data-test-4': null,
        'data-test-5': '',
        'data-test-6': false,
      })
    ).toEqual({
      'data-test': true,
      'data-test-2': 'test',
    });
  });

  it('supports array of mods', () => {
    expect(
      getBoxMod([
        {
          'data-test': true,
          'data-test-2': 'test',
          'data-test-3': undefined,
          'data-test-4': null,
          'data-test-5': '',
          'data-test-6': false,
        },
        {
          'data-test': false,
          'data-test-2': 'test-2',
          'data-test-3': undefined,
          'data-test-4': null,
          'data-test-5': '',
          'data-test-6': false,
        },
      ])
    ).toEqual({
      'data-test': true,
      'data-test-2': 'test-2',
    });
  });
});
