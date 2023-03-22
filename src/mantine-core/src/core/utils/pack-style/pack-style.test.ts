import { packStyle } from './pack-style';

describe('@mantine/core/pack-style', () => {
  it('returns array of styles', () => {
    expect(packStyle({ color: 'red' })).toStrictEqual([{ color: 'red' }]);
    expect(packStyle([{ color: 'red' }, { background: 'blue' }])).toStrictEqual([
      { color: 'red' },
      { background: 'blue' },
    ]);
  });
});
