import React from 'react';
import {
  polymorphicFactory,
  useComponentDefaultProps,
  MantineColor,
  MantineTheme,
} from '../../core';
import { Text, TextStylesNames, TextProps } from '../Text';
import { Mark } from '../Mark';
import { highlighter } from './highlighter/highlighter';

export interface HighlightProps extends TextProps {
  /** Substring or an array of substrings to highlight in `children` */
  highlight: string | string[];

  /** Key of `theme.colors` or any valid CSS color, passed to `Mark` component `color` prop, `yellow` by default */
  color?: MantineColor | string;

  /** Styles applied to `mark` elements */
  highlightStyles?: React.CSSProperties | ((theme: MantineTheme) => React.CSSProperties);

  /** String parts of which must be highlighted */
  children: string;
}

export interface HighlightFactory {
  props: HighlightProps;
  defaultRef: HTMLDivElement;
  defaultComponent: 'div';
  stylesNames: TextStylesNames;
}

const defaultProps: Partial<HighlightProps> = {};

export const Highlight = polymorphicFactory<HighlightFactory>((props, ref) => {
  const { unstyled, children, highlight, highlightStyles, color, ...others } =
    useComponentDefaultProps('Highlight', defaultProps, props);

  const highlightChunks = highlighter(children, highlight);

  return (
    <Text unstyled={unstyled} ref={ref} {...others} __staticSelector="Highlight">
      {highlightChunks.map(({ chunk, highlighted }, i) =>
        highlighted ? (
          <Mark
            unstyled={unstyled}
            key={i}
            color={color}
            style={highlightStyles}
            data-highlight={chunk}
          >
            {chunk}
          </Mark>
        ) : (
          <span key={i}>{chunk}</span>
        )
      )}
    </Text>
  );
});

Highlight.displayName = '@mantine/core/Highlight';
