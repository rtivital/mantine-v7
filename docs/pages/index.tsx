import React from 'react';
import Link from 'next/link';
import { Stack, Button } from '@mantine/core';
import { MdxTitle } from '@/components/MdxProvider';

export default function Home() {
  return (
    <>
      <Stack align="center" mt={200}>
        <MdxTitle order={1}>Imagine a home page here</MdxTitle>
        <Button component={Link} href="/getting-started" size="xl" radius="md">
          Get started with 7.x
        </Button>
      </Stack>
    </>
  );
}
