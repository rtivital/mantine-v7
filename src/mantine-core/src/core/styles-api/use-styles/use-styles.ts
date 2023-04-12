import { CSSProperties } from 'react';
import cx from 'clsx';
import { MantineTheme, useMantineTheme, useMantineClassNamesPrefix } from '../../MantineProvider';
import type { MantineStyleProp } from '../../Box';
import { StylesRecord } from '../styles-api.types';

export type Styles<
  StylesNames extends string,
  Props extends Record<string, any>,
  Context = unknown
> =
  | StylesRecord<StylesNames, CSSProperties>
  | ((theme: MantineTheme, props: Props, ctx: Context) => StylesRecord<StylesNames, CSSProperties>);

export type ClassNames<StylesNames extends string> = Partial<Record<StylesNames, string>>;

export interface UseStylesInput<
  StylesNames extends string,
  Props extends Record<string, any>,
  Context = unknown
> {
  name: string | (string | undefined)[];
  classes: Record<StylesNames, string>;
  props: Props;
  ctx?: Context;
  className?: string;
  style?: MantineStyleProp;
  rootSelector?: StylesNames;
  unstyled?: boolean;
  classNames?: ClassNames<StylesNames>;
  styles?: Styles<StylesNames, Props, Context>;
}

export interface GetPropsOptions<
  StylesNames extends string,
  Props extends Record<string, any>,
  Context = unknown
> {
  className?: string;
  style?: MantineStyleProp;
  focusable?: boolean;
  active?: boolean;
  classNames?: Partial<Record<StylesNames, string>>;
  styles?: Styles<StylesNames, Props, Context>;
  variant?: string;
}

function resolveStyles<
  StylesNames extends string,
  Props extends Record<string, any>,
  Context = unknown
>(
  styles: Styles<StylesNames, Props, Context> | undefined,
  theme: MantineTheme,
  props: Props,
  ctx: Context
) {
  return typeof styles === 'function' ? styles(theme, props, ctx) : styles;
}

function resolveStyle(style: MantineStyleProp | undefined, theme: MantineTheme) {
  if (style == null) {
    return {};
  }

  const arrayStyle = Array.isArray(style) ? style : [style];
  return arrayStyle.reduce(
    (acc, val) => ({ ...acc, ...(typeof val === 'function' ? val(theme) : val) }),
    {}
  );
}

export type GetStylesApi<
  StylesNames extends string,
  Props extends Record<string, any>,
  Context = unknown
> = (
  selector: StylesNames,
  options?: GetPropsOptions<StylesNames, Props, Context>
) => {
  className: string;
  style: CSSProperties;
};

export function useStyles<
  StylesNames extends string,
  Props extends Record<string, any>,
  Context = unknown
>({
  name,
  classes,
  props,
  ctx,
  className,
  style,
  rootSelector = 'root' as StylesNames,
  unstyled,
  classNames,
  styles,
}: UseStylesInput<StylesNames, Props, Context>): GetStylesApi<StylesNames, Props, Context> {
  const theme = useMantineTheme();
  const classNamesPrefix = useMantineClassNamesPrefix();
  const themeName = Array.isArray(name) ? (name.filter((n) => n) as string[]) : [name];
  const resolvedStyles = resolveStyles(styles, theme, props, ctx!);
  const resolvedStyle = resolveStyle(style, theme);

  return (selector: StylesNames, options?: GetPropsOptions<StylesNames, Props, Context>) => {
    const themeClassNames = themeName
      .filter((n) => n)
      .map((n) => theme.components?.[n]?.classNames?.[selector]);
    const staticClassNames = themeName.map((n) => `${classNamesPrefix}-${n}-${selector}`);
    const _className = cx(
      options?.focusable && !unstyled && theme.focusClassNames[theme.focusRing],
      options?.active && !unstyled && theme.activeClassName,
      themeClassNames,
      classNames?.[selector],
      options?.variant && classes[`${selector}--${options.variant}` as StylesNames],
      options?.classNames?.[selector],
      className && { [className]: rootSelector === selector },
      { [classes[selector]]: !unstyled },
      options?.className,
      staticClassNames
    );

    const themeStyles = themeName
      .map((n) => resolveStyles(theme.components?.[n]?.styles, theme, props, ctx!)?.[selector])
      .reduce((acc, val) => ({ ...acc, ...val }), {});

    const componentStyles = resolveStyles(options?.styles, theme, props, ctx!);

    const _style = {
      ...themeStyles,
      ...resolvedStyles?.[selector],
      ...componentStyles?.[selector],
      ...(rootSelector === selector ? resolvedStyle : {}),
      ...resolveStyle(options?.style, theme),
    } as CSSProperties;

    return { className: _className, style: _style };
  };
}
