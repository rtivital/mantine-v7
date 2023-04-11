import { MantineTheme } from '../../MantineProvider';
import { CssVariable } from '../../Box';

export type VarsResolver<Vars extends CssVariable, StylesParams extends Record<string, any>> = (
  params: StylesParams,
  theme: MantineTheme
) => Record<Vars, string | undefined>;

export function createVarsResolver<
  Vars extends CssVariable,
  StylesParams extends Record<string, any>
>(resolver: VarsResolver<Vars, StylesParams>) {
  return resolver;
}
