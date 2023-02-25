import { sizeResolver } from './size-resolver';

describe('@mantine/core/Box/size-resolver', () => {
  it('resolves number correctly', () => {
    expect(sizeResolver(10)).toBe('0.625rem');
    expect(sizeResolver(-10)).toBe('-0.625rem');
    expect(sizeResolver(1.5)).toBe('0.09375rem');
    expect(sizeResolver(0)).toBe('0rem');
  });

  it('resolves string correctly', () => {
    expect(sizeResolver('10px')).toBe('10px');
    expect(sizeResolver('-10px')).toBe('-10px');
  });
});
