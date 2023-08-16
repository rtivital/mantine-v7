import React, { useMemo } from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
} from '@mantine/core';
import { Editor } from '@tiptap/react';
import classes from './RichTextEditor.module.css';
import { DEFAULT_LABELS, RichTextEditorLabels } from './labels';
import { RichTextEditorProvider } from './RichTextEditor.context';

export type RichTextEditorStylesNames =
  | 'linkEditorSave'
  | 'root'
  | 'content'
  | 'typographyStylesProvider'
  | 'control'
  | 'controlsGroup'
  | 'toolbar'
  | 'linkEditor'
  | 'linkEditorInput'
  | 'linkEditorExternalControl';

export type RichTextEditorCssVariables = {
  root: '--rte-control-bg' | '--rte-control-hover' | '--rte-control-color';
};

export interface RichTextEditorProps
  extends BoxProps,
    StylesApiProps<RichTextEditorFactory>,
    ElementProps<'div'> {
  /** Tiptap editor instance */
  editor: Editor | null;

  /** Determines whether code highlight styles should be added, `true` by default */
  withCodeHighlightStyles?: boolean;

  /** Determines whether typography styles should be added, `true` by default */
  withTypographyStyles?: boolean;

  /** Labels that are used in controls */
  labels?: Partial<RichTextEditorLabels>;

  /** Child editor components */
  children: React.ReactNode;
}

export type RichTextEditorFactory = Factory<{
  props: RichTextEditorProps;
  ref: HTMLDivElement;
  stylesNames: RichTextEditorStylesNames;
  vars: RichTextEditorCssVariables;
}>;

const defaultProps: Partial<RichTextEditorProps> = {
  withCodeHighlightStyles: true,
  withTypographyStyles: true,
};

const varsResolver = createVarsResolver<RichTextEditorFactory>((theme, { variant, color }) => {
  const colors = theme.variantColorResolver({
    color: color || theme.primaryColor,
    theme,
    variant: variant!,
  });

  return {
    root: {
      '--rte-control-bg': colors.background,
      '--rte-control-hover': colors.hover,
      '--rte-control-color': colors.color,
    },
  };
});

export const RichTextEditor = factory<RichTextEditorFactory>((_props, ref) => {
  const props = useProps('RichTextEditor', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    editor,
    withCodeHighlightStyles,
    withTypographyStyles,
    labels,
    children,
    ...others
  } = props;

  const getStyles = useStyles<RichTextEditorFactory>({
    name: 'RichTextEditor',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const mergedLabels = useMemo(() => ({ ...DEFAULT_LABELS, ...labels }), [labels]);

  return (
    <RichTextEditorProvider
      value={{
        editor,
        getStyles,
        labels: mergedLabels,
        withCodeHighlightStyles,
        withTypographyStyles,
      }}
    >
      <Box {...getStyles('root')} {...others} ref={ref}>
        {children}
      </Box>
    </RichTextEditorProvider>
  );
});

RichTextEditor.classes = classes;
RichTextEditor.displayName = '@mantine/core/RichTextEditor';
