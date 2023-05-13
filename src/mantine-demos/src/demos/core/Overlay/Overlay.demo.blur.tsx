/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { Button, Overlay, AspectRatio } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Button, Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  const [visible, setVisible] = useState(false);

  return (
    <AspectRatio ratio={16 / 9} maw={400} mx="auto">
      <img
        src="https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        alt="Demo"
        onClick={() => setVisible(false)}
      />
      {!visible && (
        <Overlay blur={15} center>
          <Button color="red" radius="xl" onClick={() => setVisible(true)}>
            NSFW, click to reveal
          </Button>
        </Overlay>
      )}
    </AspectRatio>
  );
}
`;

function Demo() {
  const [visible, setVisible] = useState(false);

  return (
    <AspectRatio ratio={16 / 9} maw={400} mx="auto">
      <img
        src="https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        alt="Demo"
        onClick={() => setVisible(false)}
      />
      {!visible && (
        <Overlay blur={15} center>
          <Button color="red" radius="xl" onClick={() => setVisible(true)}>
            NSFW, click to reveal
          </Button>
        </Overlay>
      )}
    </AspectRatio>
  );
}

export const blur: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
