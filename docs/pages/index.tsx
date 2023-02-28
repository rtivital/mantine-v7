import React from 'react';
import { UnstyledButton } from '@mantine/core';
import { CodeBlock } from '@/components/CodeBlock/CodeBlock';

export default function Home() {
  return (
    <>
      <CodeBlock />
      <UnstyledButton bg="blue">Hello</UnstyledButton>
    </>
  );
}
