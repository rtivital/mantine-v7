import { useMantineTheme } from '../../MantineProvider';
import { VarsResolver } from '../create-vars-resolver/create-vars-resolver';

const EMPTY_PARAMS = {};

function resolveVars(
  vars:
    | Record<string, string | undefined>
    | ((params: Record<string, any>) => Record<string, string | undefined>)
    | undefined,
  params: Record<string, any> | undefined
) {
  if (typeof vars === 'function') {
    return vars(params || EMPTY_PARAMS);
  }

  return vars;
}

export function useVars<Params extends Record<string, any> = never>(
  name: string,
  resolver: VarsResolver<`--${string}`, Params>,
  vars?:
    | Record<string, string | undefined>
    | ((params: Params) => Record<string, string | undefined>),
  params?: Params
) {
  const theme = useMantineTheme();
  const themeVars = resolveVars(theme.components[name]?.vars, params);
  const componentVars = resolveVars(vars as any, params);
  const resolvedVars = resolver(params || (EMPTY_PARAMS as Params), theme);
  return { ...resolvedVars, ...themeVars, ...componentVars };
}
