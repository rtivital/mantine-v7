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
  CopyButton,
  Tooltip,
  ActionIcon,
} from '@mantine/core';
import classes from './CodeHighlight.module.css';
import { CopyIcon } from './CopyIcon';

export type CodeHighlightStylesNames = 'root' | 'code' | 'pre' | 'copy' | 'header';
export type CodeHighlightVariant = string;
export type CodeHighlightCssVariables = '--test';

export interface CodeHighlightStylesParams {}

export interface CodeHighlightProps
  extends BoxProps,
    StylesApiProps<CodeHighlightStylesNames, CodeHighlightVariant, CodeHighlightCssVariables>,
    ElementProps<'div'> {
  /** Code that should be highlighted */
  children: string;

  /** Language of the highlighted code, `'tsx'` by default */
  language?: string;
}

export interface CodeHighlightFactory {
  props: CodeHighlightProps;
  ref: HTMLDivElement;
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
      ref={ref}
      vars={{
        ..._vars,
      }}
      {...others}
    >
      <div {...getStyles('header')}>
        <div>files list</div>
        <CopyButton value={children.trim()}>
          {({ copied, copy }) => (
            <Tooltip label={copied ? 'Copied' : 'Copy'} fz="sm" position="left" withArrow>
              <ActionIcon onClick={copy} variant="none" {...getStyles('copy')}>
                <CopyIcon copied={copied} />
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      </div>
      <pre {...getStyles('pre')}>
        <code {...getStyles('code')} dangerouslySetInnerHTML={{ __html: highlighted }} />
      </pre>
    </Box>
  );
});

CodeHighlight.displayName = '@mantine/core/CodeHighlight';
