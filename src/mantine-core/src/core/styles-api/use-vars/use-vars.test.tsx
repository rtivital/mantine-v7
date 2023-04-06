import React from 'react';
import { renderHook } from '@testing-library/react';
import { useVars } from './use-vars';
import { MantineProvider } from '../../MantineProvider';

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      theme={{
        components: {
          TestObject: {
            vars: {
              '--test': 'provider-var',
            },
          },

          TestFunction: {
            vars: (params) => ({
              '--test': params.test,
            }),
          },
        },
      }}
    >
      {children}
    </MantineProvider>
  );
}

describe('@mantine/core/useVars', () => {
  it('returns vars from MantineProvider context', () => {
    const { result } = renderHook(() => useVars('TestObject', {}, {}), {
      wrapper: Wrapper,
    });
    expect(result.current).toEqual({ '--test': 'provider-var' });
  });

  it('overrides theme vars with vars passed to hook', () => {
    const { result } = renderHook(() => useVars('TestObject', { '--test': 'component-var' }), {
      wrapper: Wrapper,
    });
    expect(result.current).toEqual({ '--test': 'component-var' });
  });

  it('supports function vars', () => {
    const { result } = renderHook(() => useVars('TestFunction', {}, { test: 'test-param' }), {
      wrapper: Wrapper,
    });
    expect(result.current).toEqual({ '--test': 'test-param' });
  });

  it('supports function vars with theme vars', () => {
    const { result } = renderHook(
      () =>
        useVars('TestFunction', (params) => ({ '--test': `component-${params.test}` }), {
          test: 'test-param',
        }),
      { wrapper: Wrapper }
    );
    expect(result.current).toEqual({ '--test': 'component-test-param' });
  });
});
