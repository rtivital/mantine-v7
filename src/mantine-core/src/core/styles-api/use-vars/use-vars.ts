import { MantineTheme, useMantineTheme } from '../../MantineProvider';
import { VarsResolver } from '../create-vars-resolver/create-vars-resolver';
import { FactoryPayload } from '../../factory';

function resolveVars(
  vars:
    | Record<string, string | undefined>
    | ((
        theme: MantineTheme,
        props: Record<string, any>,
        ctx: unknown
      ) => Record<string, string | undefined>)
    | undefined,
  theme: MantineTheme,
  props: Record<string, any>,
  ctx: unknown
) {
  if (typeof vars === 'function') {
    return vars(theme, props, ctx);
  }

  return vars;
}

interface UseVarsInput<Payload extends FactoryPayload> {
  name: string;
  resolver: VarsResolver<Payload>;
  vars:
    | undefined
    | Record<string, string | undefined>
    | ((
        theme: MantineTheme,
        props: Payload['props'],
        ctx: Payload['ctx']
      ) => Record<string, string | undefined>);
  props: Payload['props'];
  ctx?: Payload['ctx'];
}

export function useVars<Payload extends FactoryPayload>({
  name,
  resolver,
  vars,
  props,
  ctx,
}: UseVarsInput<Payload>) {
  const theme = useMantineTheme();
  const themeVars = resolveVars(theme.components[name]?.vars, theme, props, ctx!);
  const componentVars = resolveVars(vars as any, theme, props, ctx!);
  const resolvedVars = resolver(theme, props, ctx!);
  return { ...resolvedVars, ...themeVars, ...componentVars };
}
