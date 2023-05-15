import React, { useState } from 'react';
import { useMergedRef } from '@mantine/hooks';
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
} from '../../../core';
import { ScrollAreaProvider } from '../ScrollArea.context';
import classes from '../ScrollArea.module.css';

export type ScrollAreaRootStylesNames =
  | 'root'
  | 'viewport'
  | 'viewportInner'
  | 'scrollbar'
  | 'thumb'
  | 'corner';

export type ScrollAreaRootVariant = string;

export type ScrollAreaRootCssVariables = {
  root: '--sa-corner-width' | '--sa-corner-height';
};

export interface ScrollAreaRootStylesCtx {
  cornerWidth: number;
  cornerHeight: number;
}

export interface ScrollAreaRootProps
  extends BoxProps,
    StylesApiProps<ScrollAreaRootFactory>,
    ElementProps<'div'> {
  /** Scrollbar size, any valid CSS value for width/height, numbers are converted to rem, default value is 0.75rem */
  scrollbarSize?: number | string;

  /**
   * Defines scrollbars behavior, `hover` by default
   * - `hover` – scrollbars are visible when mouse is over the scroll area
   * - `scroll` – scrollbars are visible when the scroll area is scrolled
   * - `always` – scrollbars are always visible
   * - `never` – scrollbars are always hidden
   * - `auto` – similar to `overflow: auto` – scrollbars are always visible when the content is overflowing
   * */
  type?: 'auto' | 'always' | 'scroll' | 'hover' | 'never';

  /** Scroll hide delay in ms, applicable only when type is set to `hover` or `scroll`, `1000` by default */
  scrollHideDelay?: number;

  /** Determines whether scrollbars should be offset with padding, `false` by default */
  offsetScrollbars?: boolean;

  /** Called with current position (`x` and `y` coordinates) when viewport is scrolled */
  onScrollPositionChange?(position: { x: number; y: number }): void;
}

export type ScrollAreaRootFactory = Factory<{
  props: ScrollAreaRootProps;
  ref: HTMLDivElement;
  stylesNames: ScrollAreaRootStylesNames;
  ctx: ScrollAreaRootStylesCtx;
  vars: ScrollAreaRootCssVariables;
  variant: ScrollAreaRootVariant;
}>;

const defaultProps: Partial<ScrollAreaRootProps> = {
  scrollbarSize: 12,
  scrollHideDelay: 1000,
  type: 'hover',
};

const varsResolver = createVarsResolver<ScrollAreaRootFactory>((_, props, ctx) => ({
  root: {
    '--sa-corner-width': `${ctx.cornerWidth}px`,
    '--sa-corner-height': `${ctx.cornerHeight}px`,
  },
}));

export const ScrollAreaRoot = factory<ScrollAreaRootFactory>((_props, ref) => {
  const props = useProps('ScrollAreaRoot', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    scrollbarSize,
    type,
    scrollHideDelay,
    offsetScrollbars,
    onScrollPositionChange,
    ...others
  } = props;

  const [scrollArea, setScrollArea] = useState<HTMLDivElement | null>(null);
  const [viewport, setViewport] = useState<HTMLDivElement | null>(null);
  const [content, setContent] = useState<HTMLDivElement | null>(null);
  const [scrollbarX, setScrollbarX] = useState<HTMLDivElement | null>(null);
  const [scrollbarY, setScrollbarY] = useState<HTMLDivElement | null>(null);
  const [cornerWidth, setCornerWidth] = useState(0);
  const [cornerHeight, setCornerHeight] = useState(0);
  const [scrollbarXEnabled, setScrollbarXEnabled] = useState(false);
  const [scrollbarYEnabled, setScrollbarYEnabled] = useState(false);
  const rootRef = useMergedRef(ref, (node) => setScrollArea(node));

  const getStyles = useStyles<ScrollAreaRootFactory>({
    name: 'ScrollArea',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    stylesCtx: { cornerHeight, cornerWidth },
    vars,
    varsResolver,
  });

  return (
    <ScrollAreaProvider
      value={{
        type: type!,
        scrollHideDelay: scrollHideDelay!,
        scrollArea,
        viewport,
        onViewportChange: setViewport,
        content,
        onContentChange: setContent,
        scrollbarX,
        onScrollbarXChange: setScrollbarX,
        scrollbarXEnabled,
        onScrollbarXEnabledChange: setScrollbarXEnabled,
        scrollbarY,
        onScrollbarYChange: setScrollbarY,
        scrollbarYEnabled,
        onScrollbarYEnabledChange: setScrollbarYEnabled,
        onCornerWidthChange: setCornerWidth,
        onCornerHeightChange: setCornerHeight,
        getStyles,
      }}
    >
      <Box {...others} {...getStyles('root')} ref={rootRef} />
    </ScrollAreaProvider>
  );
});

ScrollAreaRoot.displayName = '@mantine/core/ScrollAreaRoot';
