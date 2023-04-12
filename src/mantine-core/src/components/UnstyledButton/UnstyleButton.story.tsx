import React from 'react';
import { UnstyledButton } from './UnstyledButton';
import { MantineThemeProvider } from '../../core';

export default { title: 'UnstyledButton' };

export function Usage() {
  return (
    <MantineThemeProvider
      inherit
      theme={{
        components: {
          UnstyledButton: UnstyledButton.extend({
            styles: {
              root: {
                color: 'orange',
              },
            },
          }),
        },
      }}
    >
      <div style={{ padding: 40 }}>
        <UnstyledButton>Button</UnstyledButton>
      </div>
    </MantineThemeProvider>
  );
}

export function PropsInStyles() {
  return (
    <UnstyledButton
      variant="xl"
      // styles={(theme, props, ctx) => {
      //   console.log(theme, props, ctx);
      //   return {
      //     root: {},
      //   };
      // }}
      vars={(theme, props, ctx) => {
        console.log(theme, props, ctx);
        return {
          '--test': 'red',
        };
      }}
    >
      Hello
    </UnstyledButton>
  );
}

UnstyledButton.extend({
  styles: (_theme, _props, ctx) => ({
    root: {
      backgroundClip: ctx as string,
    },
  }),
  vars: (_theme, _props, ctx) => ({
    '--test': ctx as string,
  }),
});
