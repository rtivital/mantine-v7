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
  createVarsResolver,
  rem,
  useVars,
} from '@mantine/core';
import { CopyIcon } from './CopyIcon';
import { FileIcon } from './FileIcon';
import { ExpandIcon } from './ExpandIcon';
import classes from './CodeHighlight.module.css';

export type CodeHighlightStylesNames =
  | 'root'
  | 'code'
  | 'codeWrapper'
  | 'showCodeButton'
  | 'pre'
  | 'controls'
  | 'control'
  | 'header'
  | 'file'
  | 'files';

export type CodeHighlightVariant = string;
export type CodeHighlightCssVariables = '--ch-max-collapsed-height';

export interface CodeHighlightCode {
  language?: string;
  code: string;
  fileName?: string;
  icon?: React.ReactNode;
}

export interface CodeHighlightStylesParams {
  maxCollapsedHeight: React.CSSProperties['maxHeight'] | undefined;
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

  /** `max-height` of code in collapsed state, `'6rem'` by default */
  maxCollapsedHeight?: React.CSSProperties['maxHeight'];

  /** Controlled expanded state */
  expanded?: boolean;

  /** Uncontrolled expanded state initial value */
  defaultExpanded?: boolean;

  /** Called when expanded state changes */
  onExpandedChange?(expanded: boolean): void;

  /** Expand button label and tooltip, `'Expand code'` by default */
  expandCodeLabel?: string;

  /** Collapse button label and tooltip, `'Collapse code'` by default */
  collapseCodeLabel?: string;

  /** Determines whether to show the expand button, `false` by default */
  withExpandButton?: boolean;
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
  maxCollapsedHeight: '8rem',
  expandCodeLabel: 'Expand code',
  collapseCodeLabel: 'Collapse code',
};

const varsResolver = createVarsResolver<CodeHighlightCssVariables, CodeHighlightStylesParams>(
  ({ maxCollapsedHeight }) => ({
    '--ch-max-collapsed-height': rem(maxCollapsedHeight),
  })
);

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
    maxCollapsedHeight,
    expanded,
    defaultExpanded,
    onExpandedChange,
    expandCodeLabel,
    collapseCodeLabel,
    withExpandButton,
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

  const _vars = useVars('CodeHighlight', varsResolver, vars, { maxCollapsedHeight });

  const [value, setValue] = useUncontrolled({
    defaultValue: defaultActiveTab,
    value: activeTab,
    finalValue: 0,
    onChange: onTabChange,
  });

  const [_expanded, setExpanded] = useUncontrolled({
    defaultValue: defaultExpanded,
    value: expanded,
    finalValue: true,
    onChange: onExpandedChange,
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
    <Box {...getStyles('root')} ref={ref} vars={_vars} {...others} dir="ltr">
      {withHeader && (
        <div {...getStyles('header')}>
          <ScrollArea type="never" dir="ltr" offsetScrollbars={false}>
            <div {...getStyles('files')}>{files}</div>
          </ScrollArea>
          <div {...getStyles('controls')}>
            {withExpandButton && (
              <Tooltip
                label={_expanded ? collapseCodeLabel : expandCodeLabel}
                fz="sm"
                position="left"
              >
                <ActionIcon
                  onClick={() => setExpanded(!_expanded)}
                  variant="none"
                  {...getStyles('control')}
                >
                  <ExpandIcon expanded={_expanded} />
                </ActionIcon>
              </Tooltip>
            )}

            <CopyButton value={currentCode.code.trim()}>
              {({ copied, copy }) => (
                <Tooltip label={copied ? copiedLabel : copyLabel} fz="sm" position="left">
                  <ActionIcon onClick={copy} variant="none" {...getStyles('control')}>
                    <CopyIcon copied={copied} />
                  </ActionIcon>
                </Tooltip>
              )}
            </CopyButton>
          </div>
        </div>
      )}

      <ScrollArea type="auto" dir="ltr" offsetScrollbars={false}>
        <Box {...getStyles('codeWrapper')} mod={{ expanded: _expanded }}>
          <pre {...getStyles('pre')}>
            <code {...getStyles('code')} dangerouslySetInnerHTML={{ __html: highlighted }} />
          </pre>

          <UnstyledButton
            {...getStyles('showCodeButton')}
            mod={{ hidden: _expanded }}
            onClick={() => setExpanded(true)}
          >
            Expand code
          </UnstyledButton>
        </Box>
      </ScrollArea>
    </Box>
  );
});

CodeHighlight.displayName = '@mantine/core/CodeHighlight';
