import { MantineTheme } from '../../MantineProvider';

export type VarsResolver<Vars extends `--${string}`, StylesParams extends Record<string, any>> = (
  params: StylesParams,
  theme: MantineTheme
) => Record<Vars, string>;

export function createVarsResolver<
  Vars extends `--${string}`,
  StylesParams extends Record<string, any>
>(resolver: VarsResolver<Vars, StylesParams>) {
  return resolver;
}
