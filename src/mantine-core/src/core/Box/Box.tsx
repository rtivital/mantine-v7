import React, { forwardRef } from 'react';
import cx from 'clsx';
import { useMantineTheme } from '../MantineProvider';
import { InlineStyles } from '../InlineStyles';
import { createPolymorphicComponent } from '../factory';
import type { MantineStyleProp, CssVarsProp } from './Box.types';
import { getBoxStyle } from './get-box-style/get-box-style';
import { useRandomClassName } from './use-random-classname/use-random-classname';
import {
  MantineStyleProps,
  extractStyleProps,
  parseStyleProps,
  STYlE_PROPS_DATA,
} from './style-props';

export interface BoxProps extends MantineStyleProps {
  /** Class added to root element, if applicable */
  className?: string;

  /** Inline style added to root component element, can subscribe to theme defined on MantineProvider */
  style?: MantineStyleProp;
}

export type ElementProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'style'
>;

export interface BoxComponentProps extends BoxProps {
  /** CSS variables defined on root component element */
  vars?: CssVarsProp;

  /** Variant passed from parent component, sets `data-variant` */
  variant?: string;
}

const _Box = forwardRef<HTMLDivElement, BoxComponentProps & { component: any; className: string }>(
  ({ component, style, vars, className, variant, ...others }, ref) => {
    const theme = useMantineTheme();
    const Element = component || 'div';
    const { styleProps, rest } = extractStyleProps(others);
    const responsiveClassName = useRandomClassName();
    const parsedStyleProps = parseStyleProps({
      styleProps,
      theme,
      data: STYlE_PROPS_DATA,
    });

    return (
      <>
        {parsedStyleProps.hasResponsiveStyles && (
          <InlineStyles
            selector={`.${responsiveClassName}`}
            styles={parsedStyleProps.styles}
            media={parsedStyleProps.media}
          />
        )}
        <Element
          ref={ref}
          style={getBoxStyle({ theme, style, vars, styleProps: parsedStyleProps.inlineStyles })}
          className={cx(className, { [responsiveClassName]: parsedStyleProps.hasResponsiveStyles })}
          data-variant={variant}
          {...rest}
        />
      </>
    );
  }
);

_Box.displayName = '@mantine/core/Box';

export const Box = createPolymorphicComponent<'div', BoxComponentProps>(_Box);
