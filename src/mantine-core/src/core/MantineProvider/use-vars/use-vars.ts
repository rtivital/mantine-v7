import { useMantineTheme } from '../Mantine.context';

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
  vars?:
    | Record<string, string | undefined>
    | ((params: Params) => Record<string, string | undefined>),
  params?: Params
) {
  const theme = useMantineTheme();
  const themeVars = resolveVars(theme.components[name]?.vars, params);
  const componentVars = resolveVars(vars as any, params);
  return { ...themeVars, ...componentVars };
}
