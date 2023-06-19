import React from 'react';
import Head from 'next/head';
import { ComboboxShell } from '../ComboboxShell/ComboboxShell';
import { ComboboxDemo } from '../ComboboxDemo/ComboboxDemo';

export function ComboboxPage() {
  return (
    <>
      <Head>
        <title>Combobox examples | Mantine</title>
      </Head>
      <ComboboxShell>
        <ComboboxDemo />
      </ComboboxShell>
    </>
  );
}
