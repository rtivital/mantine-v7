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
  CopyButton,
  Tooltip,
  ActionIcon,
  UnstyledButton,
  ScrollArea,
} from '@mantine/core';
import { CopyIcon } from './CopyIcon';
import { FileIcon } from './FileIcon';
import classes from './CodeHighlight.module.css';

export type CodeHighlightStylesNames =
  | 'root'
  | 'code'
  | 'pre'
  | 'copy'
  | 'header'
  | 'file'
  | 'files';

export type CodeHighlightVariant = string;

export interface CodeHighlightCode {
  language?: string;
  code: string;
  fileName?: string;
  icon?: React.ReactNode;
}

export interface CodeHighlightProps
  extends BoxProps,
    StylesApiProps<CodeHighlightStylesNames, CodeHighlightVariant>,
    ElementProps<'div'> {
  /** Code to highlight with meta data (file name and icon) */
  code: CodeHighlightCode | CodeHighlightCode[];

  /** Default active tab index */
  defaultActiveTab?: number;

  /** Index of controlled active tab state */
  activeTab?: number;

  /** Called when tab changes */
  onTabChange?(tab: number): void;

  /** Determines whether header with file names and copy button should be rendered, `true` by default */
  withHeader?: boolean;

  /** Copy tooltip label, `'Copy code'` by default */
  copyLabel?: string;

  /** Copied tooltip label, `'Copied'` by default */
  copiedLabel?: string;

  /** Function that returns icon based on file name */
  getFileIcon?(fileName: string): React.ReactNode;
}

export interface CodeHighlightFactory {
  props: CodeHighlightProps;
  ref: HTMLDivElement;
  stylesNames: CodeHighlightStylesNames;
}

const defaultProps: Partial<CodeHighlightProps> = {
  withHeader: true,
  copyLabel: 'Copy code',
  copiedLabel: 'Copied',
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
    defaultActiveTab,
    activeTab,
    onTabChange,
    withHeader,
    copiedLabel,
    copyLabel,
    getFileIcon,
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
      <FileIcon fileIcon={node.icon} getFileIcon={getFileIcon} fileName={node.fileName} />
      <span>{node.fileName}</span>
    </UnstyledButton>
  ));

  return (
    <Box {...getStyles('root')} ref={ref} {...others} dir="ltr">
      {withHeader && (
        <div {...getStyles('header')}>
          <ScrollArea type="never" dir="ltr" offsetScrollbars={false}>
            <div {...getStyles('files')}>{files}</div>
          </ScrollArea>
          <CopyButton value={currentCode.code.trim()}>
            {({ copied, copy }) => (
              <Tooltip label={copied ? copiedLabel : copyLabel} fz="sm" position="left" withArrow>
                <ActionIcon onClick={copy} variant="none" {...getStyles('copy')}>
                  <CopyIcon copied={copied} />
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
        </div>
      )}

      <ScrollArea type="auto" dir="ltr" offsetScrollbars={false}>
        <pre {...getStyles('pre')}>
          <code {...getStyles('code')} dangerouslySetInnerHTML={{ __html: highlighted }} />
        </pre>
      </ScrollArea>
    </Box>
  );
});

CodeHighlight.displayName = '@mantine/core/CodeHighlight';
