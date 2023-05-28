import React from 'react';
import { Template } from '../MdxTemplatesList/data';
import { MdxTemplatesList } from '../MdxTemplatesList/MdxTemplatesList';
import { MdxTitle } from '../MdxTitle/MdxTitle';
import { MdxParagraph } from '../MdxTypography/MdxTypography';
import { MdxLink } from '../MdxLink/MdxLink';

interface MdxGetTemplatesProps {
  type: Template['type'];
}

export function MdxGetTemplates({ type }: MdxGetTemplatesProps) {
  return (
    <>
      <MdxTitle id="templates">Get started with a template</MdxTitle>
      <MdxParagraph>
        The easiest way to get started is to use one of the templates. All templates are configured
        correctly: they include <MdxLink href="/styles/postcss-preset">PostCSS setup</MdxLink>,{' '}
        <MdxLink href="/styles/color-schemes">ColorSchemeScript</MdxLink> and other essential
        features. Some templates also include additional features like{' '}
        <MdxLink href="/guide/jest">Jest</MdxLink>,{' '}
        <MdxLink href="/guide/storybook">Storybook</MdxLink> and ESLint.
      </MdxParagraph>
      <MdxTemplatesList type={type} />
    </>
  );
}
