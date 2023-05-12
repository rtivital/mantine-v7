import React from 'react';
import { MdxParagraph, MdxCode } from '../MdxTypography/MdxTypography';
import { MdxCodeHighlight } from '../MdxPre/MdxPre';
import { MdxTitle } from '../MdxTitle/MdxTitle';

interface MdxInputAccessibilityProps {
  component: string;
}

const getInaccessibleCode = (component: string) => `
// Inaccessible input – screen reader will not announce it properly
<${component} />`;

const getAriaLabelCode = (component: string) => `
// Accessible input – it has aria-label
<${component} aria-label="My input" />`;

const getLabelCode = (component: string) => `
// Accessible input – it has associated label element
<${component} label="My input" />`;

export function MdxInputAccessibility({ component }: MdxInputAccessibilityProps) {
  return (
    <>
      <MdxTitle id="accessibility">Accessibility</MdxTitle>
      <MdxParagraph>
        If <MdxCode>{component}</MdxCode> is used without <MdxCode>label</MdxCode> prop, it will not
        be announced properly by screen reader:
      </MdxParagraph>
      <MdxCodeHighlight code={getInaccessibleCode(component)} language="tsx" />

      <MdxParagraph>
        Set <MdxCode>aria-label</MdxCode> to make the input accessible. In this case label will not
        be visible, but screen reader will announce it:
      </MdxParagraph>
      <MdxCodeHighlight code={getAriaLabelCode(component)} language="tsx" />

      <MdxParagraph>
        If <MdxCode>label</MdxCode> prop is set, input will be accessible it is not required to set{' '}
        <MdxCode>aria-label</MdxCode>:
      </MdxParagraph>
      <MdxCodeHighlight code={getLabelCode(component)} language="tsx" />
    </>
  );
}
