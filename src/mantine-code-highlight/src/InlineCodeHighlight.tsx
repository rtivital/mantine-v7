import React from 'react';
import cx from 'clsx';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
} from '@mantine/core';
import hljs from 'highlight.js';
import _classes from './CodeHighlight.module.css';
import themeClasses from './CodeHighlight.theme.module.css';

const classes = { ..._classes, code: cx(_classes.root, themeClasses.theme) };

export type InlineCodeHighlightStylesNames = 'code';
export type InlineCodeHighlightVariant = string;

export interface InlineCodeHighlightProps
  extends BoxProps,
    StylesApiProps<InlineCodeHighlightStylesNames, InlineCodeHighlightVariant>,
    ElementProps<'div'> {
  /** Code to highlight */
  code: string;

  /** Code language, `'tsx'` by default */
  language?: string;
}

export interface InlineCodeHighlightFactory {
  props: InlineCodeHighlightProps;
  ref: HTMLDivElement;
  stylesNames: InlineCodeHighlightStylesNames;
}

const defaultProps: Partial<InlineCodeHighlightProps> = {};

export const InlineCodeHighlight = factory<InlineCodeHighlightFactory>((props, ref) => {
  const { classNames, className, style, styles, unstyled, vars, code, language, ...others } =
    useProps('InlineCodeHighlight', defaultProps, props);

  const getStyles = useStyles({
    name: 'InlineCodeHighlight',
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const highlighted = hljs.highlight(code.trim(), { language: language! }).value;

  return (
    <Box
      {...getStyles('code')}
      component="code"
      ref={ref}
      {...others}
      dangerouslySetInnerHTML={{ __html: highlighted }}
    />
  );
});

InlineCodeHighlight.displayName = '@mantine/core/InlineCodeHighlight';
