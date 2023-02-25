import { renderHook } from '@testing-library/react';
import { useRandomClassName } from './use-random-classname';

describe('@mantine/core/Box/use-random-classname', () => {
  it('returns random classname', () => {
    const { result } = renderHook(() => useRandomClassName());
    expect(result.current).toMatch(/^mantine-[a-z0-9]+$/);
  });
});
