import { forwardRef } from 'react';
import cx from 'clsx';
import { useMantineTheme, useMantineColorScheme } from '../MantineProvider';
import { InlineStyles } from '../InlineStyles';
import { createPolymorphicComponent } from '../utils';
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

export interface BoxComponentProps extends BoxProps {
  /** CSS variables defined on root component element */
  vars?: CssVarsProp;
}

const _Box = forwardRef<HTMLDivElement, BoxComponentProps & { component: any; className: string }>(
  ({ component, style, vars, className, ...others }, ref) => {
    const theme = useMantineTheme();
    const Element = component || 'div';
    const { colorScheme } = useMantineColorScheme();
    const { styleProps, rest } = extractStyleProps(others);
    const responsiveClassName = useRandomClassName();
    const parsedStyleProps = parseStyleProps({
      styleProps,
      theme,
      colorScheme,
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
          {...rest}
        />
      </>
    );
  }
);

_Box.displayName = '@mantine/core/Box';

export const Box = createPolymorphicComponent<'div', BoxProps>(_Box);
