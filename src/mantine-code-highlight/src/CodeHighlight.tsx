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
  CopyButton,
  Tooltip,
  ActionIcon,
  ScrollArea,
} from '@mantine/core';
import { CopyIcon } from './CopyIcon';
import classes from './CodeHighlight.module.css';

export type CodeHighlightStylesNames = 'root' | 'code' | 'pre' | 'copy';
export type CodeHighlightVariant = string;

export interface CodeHighlightProps
  extends BoxProps,
    StylesApiProps<CodeHighlightStylesNames, CodeHighlightVariant>,
    ElementProps<'div'> {
  /** Code to highlight */
  code: string;

  /** Code language, `'tsx'` by default */
  language?: string;

  /** Determines whether copy button should be displayed, `true` by default */
  withCopyButton?: boolean;

  /** Copy tooltip label, `'Copy code'` by default */
  copyLabel?: string;

  /** Copied tooltip label, `'Copied'` by default */
  copiedLabel?: string;
}

export interface CodeHighlightFactory {
  props: CodeHighlightProps;
  ref: HTMLDivElement;
  stylesNames: CodeHighlightStylesNames;
}

const defaultProps: Partial<CodeHighlightProps> = {
  copyLabel: 'Copy code',
  copiedLabel: 'Copied',
  language: 'tsx',
};

export const CodeHighlight = factory<CodeHighlightFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    code,
    copiedLabel,
    copyLabel,
    language,
    ...others
  } = useProps('CodeHighlight', defaultProps, props);

  const getStyles = useStyles({
    name: 'CodeHighlight',
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const highlighted = hljs.highlight(code.trim(), { language: language! }).value;

  return (
    <Box {...getStyles('root')} ref={ref} {...others} dir="ltr">
      <CopyButton value={code.trim()}>
        {({ copied, copy }) => (
          <Tooltip label={copied ? copiedLabel : copyLabel} fz="sm" position="left">
            <ActionIcon onClick={copy} variant="none" {...getStyles('copy')}>
              <CopyIcon copied={copied} />
            </ActionIcon>
          </Tooltip>
        )}
      </CopyButton>

      <ScrollArea type="auto" dir="ltr" offsetScrollbars={false}>
        <pre {...getStyles('pre')}>
          <code {...getStyles('code')} dangerouslySetInnerHTML={{ __html: highlighted }} />
        </pre>
      </ScrollArea>
    </Box>
  );
});

CodeHighlight.displayName = '@mantine/core/CodeHighlight';
