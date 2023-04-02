import React from 'react';
import hljs from 'highlight.js';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  useVars,
} from '@mantine/core';
import classes from './CodeHighlight.module.css';

export type CodeHighlightStylesNames = 'root' | 'code';
export type CodeHighlightVariant = string;
export type CodeHighlightCssVariables = '--test';

export interface CodeHighlightStylesParams {}

export interface CodeHighlightProps
  extends BoxProps,
    StylesApiProps<CodeHighlightStylesNames, CodeHighlightVariant, CodeHighlightCssVariables>,
    ElementProps<'pre'> {
  /** Code that should be highlighted */
  children: string;

  /** Language of the highlighted code, `'tsx'` by default */
  language?: string;
}

export interface CodeHighlightFactory {
  props: CodeHighlightProps;
  ref: HTMLPreElement;
  stylesNames: CodeHighlightStylesNames;
  vars: CodeHighlightCssVariables;
  stylesParams: CodeHighlightStylesParams;
}

const defaultProps: Partial<CodeHighlightProps> = {
  language: 'tsx',
};

export const CodeHighlight = factory<CodeHighlightFactory>((props, ref) => {
  const { classNames, className, style, styles, unstyled, vars, children, language, ...others } =
    useProps('CodeHighlight', defaultProps, props);

  const getStyles = useStyles({
    name: 'CodeHighlight',
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const _vars = useVars<CodeHighlightStylesParams>('CodeHighlight', vars, {});
  const highlighted = hljs.highlight(children.trim(), { language: language! }).value;

  return (
    <Box
      {...getStyles('root')}
      component="pre"
      ref={ref}
      vars={{
        ..._vars,
      }}
      {...others}
    >
      <code {...getStyles('code')} dangerouslySetInnerHTML={{ __html: highlighted }} />
    </Box>
  );
});

CodeHighlight.displayName = '@mantine/core/CodeHighlight';
