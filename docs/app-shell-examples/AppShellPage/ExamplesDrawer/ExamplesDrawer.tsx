import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDisclosure } from '@mantine/hooks';
import { Button, Affix, Drawer, Group, rem, UnstyledButton, Text } from '@mantine/core';
import { IconMenu2, IconArrowLeft } from '@tabler/icons-react';
import { APP_SHELL_EXAMPLES_DATA } from '../../app-shell-examples-data';
import classes from './ExamplesDrawer.module.css';

export function ExamplesDrawer() {
  const [opened, { open, close }] = useDisclosure();
  const router = useRouter();

  const examples = APP_SHELL_EXAMPLES_DATA.map((example) => (
    <UnstyledButton
      component={Link}
      href={`/app-shell?e=${example.id}`}
      key={example.id}
      mod={{ active: router.query.e === example.id }}
      className={classes.control}
    >
      <Text span className={classes.name}>
        {example.name}
      </Text>
      <Text span className={classes.description}>
        {example.description}
      </Text>
    </UnstyledButton>
  ));

  return (
    <>
      <Affix zIndex={1000}>
        <Group p="xl">
          <Button
            component={Link}
            href="/core/app-shell"
            variant="default"
            size="md"
            leftSection={
              <IconArrowLeft
                className="mantine-rotate-rtl"
                style={{ width: rem(20), height: rem(20) }}
              />
            }
            style={{ boxShadow: 'var(--mantine-shadow-sm)' }}
            radius="xl"
          >
            Back to AppShell documentation
          </Button>
          <Button
            onClick={open}
            size="md"
            radius="xl"
            leftSection={<IconMenu2 style={{ width: rem(20), height: rem(20) }} />}
            style={{ boxShadow: 'var(--mantine-shadow-sm)' }}
          >
            Other AppShell examples
          </Button>
        </Group>
      </Affix>

      <Drawer
        opened={opened}
        onClose={close}
        title="AppShell component examples"
        zIndex={2000}
        position="right"
      >
        {examples}
      </Drawer>
    </>
  );
}
