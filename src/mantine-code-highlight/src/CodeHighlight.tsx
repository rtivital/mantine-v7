import React from 'react';
import hljs from 'highlight.js';
import { useUncontrolled } from '@mantine/hooks';
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
  UnstyledButton,
  ScrollArea,
} from '@mantine/core';
import classes from './CodeHighlight.module.css';
import { CopyIcon } from './CopyIcon';

export type CodeHighlightStylesNames =
  | 'root'
  | 'code'
  | 'pre'
  | 'copy'
  | 'header'
  | 'file'
  | 'files';
export type CodeHighlightVariant = string;
export type CodeHighlightCssVariables = '--test';

export interface CodeHighlightStylesParams {}

interface CodeHighlightCode {
  language?: string;
  code: string;
  fileName?: string;
  icon?: React.ReactNode;
}

export interface CodeHighlightProps
  extends BoxProps,
    StylesApiProps<CodeHighlightStylesNames, CodeHighlightVariant, CodeHighlightCssVariables>,
    ElementProps<'div'> {
  code: CodeHighlightCode | CodeHighlightCode[];
  defaultActiveTab?: number;
  activeTab?: number;
  onTabChange?(tab: number): void;
}

export interface CodeHighlightFactory {
  props: CodeHighlightProps;
  ref: HTMLDivElement;
  stylesNames: CodeHighlightStylesNames;
  vars: CodeHighlightCssVariables;
  stylesParams: CodeHighlightStylesParams;
}

const defaultProps: Partial<CodeHighlightProps> = {};

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
    defaultActiveTab,
    activeTab,
    onTabChange,
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

  const [value, setValue] = useUncontrolled({
    defaultValue: defaultActiveTab,
    value: activeTab,
    finalValue: 0,
    onChange: onTabChange,
  });

  const nodes = Array.isArray(code) ? code : [code];
  const currentCode = nodes[value];

  const _vars = useVars<CodeHighlightStylesParams>('CodeHighlight', vars, {});
  const highlighted = hljs.highlight(currentCode.code.trim(), {
    language: currentCode.language!,
  }).value;

  const files = nodes.map((node, index) => (
    <UnstyledButton
      {...getStyles('file')}
      key={node.fileName}
      mod={{ active: index === value }}
      onClick={() => setValue(index)}
    >
      {node.icon}
      <span>{node.fileName}</span>
    </UnstyledButton>
  ));

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
        <ScrollArea type="never">
          <div {...getStyles('files')}>{files}</div>
        </ScrollArea>
        <CopyButton value={currentCode.code.trim()}>
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
