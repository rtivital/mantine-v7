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
