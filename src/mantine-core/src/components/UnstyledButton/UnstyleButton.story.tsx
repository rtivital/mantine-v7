import React from 'react';
import { UnstyledButton } from './UnstyledButton';
import { MantineProvider } from '../../core';

export default { title: 'UnstyledButton' };

export function Usage() {
  return (
    <MantineProvider
      inherit
      withCssVariables={false}
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
    </MantineProvider>
  );
}
