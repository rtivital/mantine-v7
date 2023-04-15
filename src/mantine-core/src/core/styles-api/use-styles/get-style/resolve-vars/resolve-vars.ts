import { CSSProperties } from 'react';
import { CssVariable } from '../../../../Box';
import { MantineTheme } from '../../../../MantineProvider';

export type VarsResolver = (
  theme: MantineTheme,
  props: Record<string, any>,
  stylesCtx: Record<string, any> | undefined
) => Partial<Record<string, Record<CssVariable, string>>>;

interface ResolveVarsInput {
  vars: VarsResolver | undefined;
  varsResolver: VarsResolver | undefined;
  theme: MantineTheme;
  props: Record<string, any>;
  stylesCtx: Record<string, any> | undefined;
  selector: string;
}

export function resolveVars({
  vars,
  varsResolver,
  theme,
  props,
  stylesCtx,
  selector,
}: ResolveVarsInput) {
  return {
    ...varsResolver?.(theme, props, stylesCtx)?.[selector],
    ...vars?.(theme, props, stylesCtx)?.[selector],
  } as CSSProperties;
}
