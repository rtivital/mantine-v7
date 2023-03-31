import { packMod } from './pack-mod';

describe('@mantine/core/pack-mod', () => {
  it('returns array of styles', () => {
    expect(packMod({ 'data-color': 'red' })).toStrictEqual([{ 'data-color': 'red' }]);
    expect(packMod([{ 'data-color': 'red' }, { 'data-background': 'blue' }])).toStrictEqual([
      { 'data-color': 'red' },
      { 'data-background': 'blue' },
    ]);
  });
});
