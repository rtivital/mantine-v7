import React from 'react';
import Link from 'next/link';
import { Anchor } from '@mantine/core';

export function MdxLink({ href, ...others }: React.ComponentPropsWithoutRef<'a'>) {
  const replaced = href?.replace('https://mantine.dev', '')!;

  if (!replaced?.startsWith('http') && replaced.trim().length > 0) {
    return <Anchor component={Link} href={replaced} {...others} />;
  }

  return <Anchor href={href} {...others} />;
}
