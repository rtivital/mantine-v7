import React from 'react';
import { Demo } from '@mantine/ds';
import { MDXProvider } from '@mdx-js/react';
import { NextLink } from './NextLink/NextLink';
import { DataTable } from './DataTable/DataTable';
import { Pre } from './Pre/Pre';
import { MdxLink } from './MdxLink/MdxLink';
import { MdxParagraph, MdxLi, MdxUl, MdxCode } from './MdxTypography/MdxTypography';
import { h } from './MdxTitle/MdxTitle';
import { MdxQuote } from './MdxInfo/MdxInfo';
import { KeyboardEventsTable } from './KeyboardEventsTable/KeyboardEventsTable';

export function MdxProvider({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider
      components={{
        Demo,
        NextLink,
        DataTable,
        KeyboardEventsTable,
        pre: Pre,
        h1: h(1),
        h2: h(2),
        h3: h(3),
        h4: h(4),
        h5: h(5),
        h6: h(6),
        a: MdxLink,
        p: MdxParagraph,
        li: MdxLi,
        ul: MdxUl,
        blockquote: MdxQuote,
        code: MdxCode,
      }}
    >
      {children}
    </MDXProvider>
  );
}
