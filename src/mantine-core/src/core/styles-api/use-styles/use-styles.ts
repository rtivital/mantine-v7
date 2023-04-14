import { CSSProperties } from 'react';
import { MantineTheme, useMantineTheme, useMantineClassNamesPrefix } from '../../MantineProvider';
import type { MantineStyleProp } from '../../Box';
import { FactoryPayload } from '../../factory';
import { getClassName } from './get-class-name/get-class-name';
import { Styles, ClassNames, GetStylesApiOptions } from '../styles-api.types';

export interface UseStylesInput<Payload extends FactoryPayload> {
  name: string | (string | undefined)[];
  classes: Payload['stylesNames'] extends string ? Record<Payload['stylesNames'], string> : never;
  props: Payload['props'];
  stylesCtx?: Payload['ctx'];
  className?: string;
  style?: MantineStyleProp;
  rootSelector?: Payload['stylesNames'];
  unstyled?: boolean;
  classNames?: ClassNames<Payload>;
  styles?: Styles<Payload>;
}

function resolveStyles<Payload extends FactoryPayload>(
  styles: Styles<Payload> | ClassNames<Payload> | undefined,
  theme: MantineTheme,
  props: Payload['props'],
  ctx: Payload['ctx']
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

export type GetStylesApi<Payload extends FactoryPayload> = (
  selector: Payload['stylesNames'],
  options?: GetStylesApiOptions
) => {
  className: string;
  style: CSSProperties;
};

export function useStyles<Payload extends FactoryPayload>({
  name,
  classes,
  props,
  stylesCtx,
  className,
  style,
  rootSelector = 'root' as Payload['stylesNames'],
  unstyled,
  classNames,
  styles,
}: UseStylesInput<Payload>): GetStylesApi<Payload> {
  const theme = useMantineTheme();
  const classNamesPrefix = useMantineClassNamesPrefix();
  const themeName = (Array.isArray(name) ? name : [name]).filter((n) => n) as string[];
  const resolvedStyles = resolveStyles(styles, theme, props, stylesCtx!);
  const resolvedStyle = resolveStyle(style, theme);

  return (selector: Payload['stylesNames'], options?: GetStylesApiOptions) => {
    const _selector = selector!;
    const themeStyles = themeName
      .map(
        (n) =>
          (resolveStyles(theme.components?.[n]?.styles as any, theme, props, stylesCtx!) as any)?.[
            _selector
          ]
      )
      .reduce((acc, val) => ({ ...acc, ...val }), {});

    const componentStyles = resolveStyles(options?.styles as any, theme, props, stylesCtx!);

    const _style = {
      ...themeStyles,
      ...(resolvedStyles as any)?.[_selector],
      ...(componentStyles as any)?.[_selector],
      ...(rootSelector === selector ? resolvedStyle : {}),
      ...resolveStyle(options?.style, theme),
    } as CSSProperties;

    return {
      className: getClassName({
        theme,
        options,
        themeName,
        selector: selector!,
        classNamesPrefix,
        classNames,
        classes,
        unstyled,
        className,
        rootSelector: rootSelector!,
        props,
        stylesCtx,
      }),
      style: _style,
    };
  };
}
