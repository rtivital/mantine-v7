/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { MdxTitle } from '../MdxTitle/MdxTitle';
import { MdxCodeHighlight } from '../MdxPre/MdxPre';
import { MdxParagraph, MdxCode } from '../MdxTypography/MdxTypography';
import { MdxLink } from '../MdxLink/MdxLink';

interface MdxPolymorphic {
  component: string;
  defaultElement: string;
  changeToElement: string;
  withNext?: string;
  package?: string;
}

function getElementCode(input: MdxPolymorphic) {
  return `import { ${input.component} } from '${input.package || '@mantine/core'}';

function Demo() {
  return <${input.component} component="${input.changeToElement}" />;
}
  `;
}

function getNextLinkCode(input: MdxPolymorphic) {
  return `
import Link from 'next/link';
import { ${input.component} } from '${input.package || '@mantine/core'}';

function Demo() {
  return <${input.component} component={Link} href="/" />;
}
  `;
}

export function MdxPolymorphic(props: MdxPolymorphic) {
  return (
    <>
      <MdxTitle id="polymorphic-component">Polymorphic component</MdxTitle>
      <MdxParagraph>
        <MdxCode>{props.component}</MdxCode> is a{' '}
        <MdxLink href="/guides/polymorphic/">polymorphic component</MdxLink> – its default root
        element is <MdxCode>{props.defaultElement}</MdxCode>, but it can be changed to any other
        element or component with <MdxCode>component</MdxCode> prop:
      </MdxParagraph>

      <MdxCodeHighlight code={getElementCode(props)} />
      {props.withNext && (
        <>
          <MdxParagraph>
            You can also use components in <MdxCode>component</MdxCode> prop, for example, Next.js{' '}
            <MdxCode>Link</MdxCode>:
          </MdxParagraph>
          <MdxCodeHighlight code={getNextLinkCode(props)} />
        </>
      )}
    </>
  );
}
