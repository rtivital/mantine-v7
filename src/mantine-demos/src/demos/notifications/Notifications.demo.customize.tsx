import React from 'react';
import { Button } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { notifications } from '@mantine/notifications';

const code = `
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        notifications.show({
          title: 'Default notification',
          message: 'Hey there, your code is awesome! 🤥',
          styles: (theme) => ({
            root: {
              backgroundColor: theme.colors.blue[6],
              borderColor: theme.colors.blue[6],

              '&::before': { backgroundColor: theme.white },
            },

            title: { color: theme.white },
            description: { color: theme.white },
            closeButton: {
              color: theme.white,
              '&:hover': { backgroundColor: theme.colors.blue[7] },
            },
          }),
        })
      }
    >
      Show customized notification
    </Button>
  );
}`;

function Demo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        notifications.show({
          title: 'Default notification',
          message: 'Hey there, your code is awesome! 🤥',
          styles: (theme) => ({
            root: {
              backgroundColor: theme.colors.blue[6],
              borderColor: theme.colors.blue[6],

              '&::before': { backgroundColor: theme.white },
            },

            title: { color: theme.white },
            description: { color: theme.white },
            closeButton: {
              color: theme.white,
              '&:hover': { backgroundColor: theme.colors.blue[7] },
            },
          }),
        })
      }
    >
      Show customized notification
    </Button>
  );
}

export const customize: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
