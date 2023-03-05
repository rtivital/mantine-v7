import { useMantineTheme } from '../Mantine.context';
import { MantineThemeComponent } from '../theme.types';

const EMPTY_PARAMS = {};

function resolveVars(vars: MantineThemeComponent['vars'], params: Record<string, any> | undefined) {
  if (typeof vars === 'function') {
    return vars(params || EMPTY_PARAMS);
  }

  return vars;
}

export function useComponentVars(
  name: string,
  vars?: MantineThemeComponent['vars'],
  params?: Record<string, any>
) {
  const theme = useMantineTheme();
  const themeVars = resolveVars(theme.components[name]?.vars, params);
  const componentVars = resolveVars(vars, params);
  return { ...themeVars, ...componentVars };
}
