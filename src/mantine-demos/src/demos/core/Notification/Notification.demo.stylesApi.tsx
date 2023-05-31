import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Box, Notification } from '@mantine/core';
import { NotificationStylesApi } from '@mantine/styles-api';
import { IconCheck } from '@tabler/icons-react';

const code = `
import { Box, Notification } from '@mantine/core';

const icon = <IconCheck size="1.2rem" />;

function Demo(props: any) {
  return (
    <Box maw={400} mx="auto">
      <Notification
       {{props}}
        title="Please wait"
        loading
        withCloseButton={false}
      >
        The application is trying to reconnect to the server
      </Notification>
      <Notification
       {{props}}
        icon={icon}
        title="We notify you that"
        withBorder
      >
        You are now obligated to give a star to Mantine project on GitHub
      </Notification>
    </Box>
  );
}
`;

function Demo(props: any) {
  return (
    <Box maw={400} mx="auto">
      <Notification title="Please wait" loading withCloseButton={false} {...props}>
        The application is trying to reconnect to the server
      </Notification>
      <Notification
        mt="md"
        icon={<IconCheck size="1.2rem" />}
        title="We notify you that"
        withBorder
        {...props}
      >
        You are now obligated to give a star to Mantine project on GitHub
      </Notification>
    </Box>
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: NotificationStylesApi,
  centered: true,
  component: Demo,
  code,
};
