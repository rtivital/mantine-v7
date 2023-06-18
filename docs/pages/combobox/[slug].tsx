import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { COMBOBOX_EXAMPLES_COMPONENTS, COMBOBOX_EXAMPLES_DATA } from '@/combobox-examples';

export default function ComboboxExamples() {
  const router = useRouter();
  const slug = router.query.slug as keyof typeof COMBOBOX_EXAMPLES_COMPONENTS;

  return <div>Combobox Examples: {slug}</div>;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: COMBOBOX_EXAMPLES_DATA.map(({ id }) => ({
    params: { slug: id },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
});
