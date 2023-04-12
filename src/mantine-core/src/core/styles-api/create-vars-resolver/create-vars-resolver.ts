import { CssVariable } from '../../Box';
import { MantineTheme } from '../../MantineProvider';
import { FactoryPayload } from '../../factory';

export type VarsResolver<Payload extends FactoryPayload> = (
  theme: MantineTheme,
  props: Payload['props'],
  ctx: Payload['ctx']
) => Payload['vars'] extends string
  ? Record<Payload['vars'], string | undefined>
  : Record<CssVariable, string | undefined>;

export function createVarsResolver<Payload extends FactoryPayload>(
  resolver: VarsResolver<Payload>
) {
  return resolver;
}
