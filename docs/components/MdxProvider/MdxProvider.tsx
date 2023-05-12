import React from 'react';
import { Demo } from '@mantine/ds';
import { MDXProvider } from '@mdx-js/react';
import { MdxDataTable } from './MdxDataTable/MdxDataTable';
import { MdxPre } from './MdxPre/MdxPre';
import { MdxLink } from './MdxLink/MdxLink';
import { MdxParagraph, MdxLi, MdxUl, MdxCode } from './MdxTypography/MdxTypography';
import { h } from './MdxTitle/MdxTitle';
import { MdxInfo } from './MdxInfo/MdxInfo';
import { MdxKeyboardEventsTable } from './MdxKeyboardEventsTable/MdxKeyboardEventsTable';
import { MdxInstallScript } from './MdxInstallScript/MdxInstallScript';
import {
  MdxGetElementRef,
  MdxPolymorphic,
  MdxTargetComponent,
  MdxInputFeatures,
  MdxInputAccessibility,
} from './MdxSharedContent';

export function MdxProvider({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider
      components={{
        Demo,
        GetElementRef: MdxGetElementRef,
        Polymorphic: MdxPolymorphic,
        InputFeatures: MdxInputFeatures,
        InputAccessibility: MdxInputAccessibility,
        DataTable: MdxDataTable,
        TargetComponent: MdxTargetComponent,
        KeyboardEventsTable: MdxKeyboardEventsTable,
        InstallScript: MdxInstallScript,
        pre: MdxPre,
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
        blockquote: MdxInfo,
        code: MdxCode,
      }}
    >
      {children}
    </MDXProvider>
  );
}
