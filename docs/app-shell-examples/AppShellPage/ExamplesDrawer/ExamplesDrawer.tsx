import React from 'react';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import { Button, Affix, Drawer, Group, rem } from '@mantine/core';
import { IconMenu2, IconArrowLeft } from '@tabler/icons-react';

export function ExamplesDrawer() {
  const [opened, { open, close }] = useDisclosure();

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
        Examples here
      </Drawer>
    </>
  );
}
