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
            classNames: (_theme, props) => ({
              root: `provider-classname-${props.__staticSelector}`,
            }),
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
      // classNames={(theme, props, ctx) => {
      //   console.log(theme, props, ctx);
      //   return {
      //     root: '----test',
      //   };
      // }}
    >
      Hello
    </UnstyledButton>
  );
}
