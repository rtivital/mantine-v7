import type { MantineTheme } from '../MantineProvider';
import type { CssVariables } from '../Box';
import type { FactoryPayload } from '../factory';

export type StylesRecord<StylesNames extends string, Payload> = Partial<
  Record<StylesNames, Payload>
>;

export interface StylesApiProps<Payload extends FactoryPayload> {
  unstyled?: boolean;
  variant?: Payload['variant'] extends string ? Payload['variant'] | (string & {}) : string;
  classNames?: Payload['stylesNames'] extends string
    ? Partial<Record<Payload['stylesNames'], string>>
    : never;
  styles?: Payload['stylesNames'] extends string
    ?
        | StylesRecord<Payload['stylesNames'], React.CSSProperties>
        | ((
            theme: MantineTheme,
            props: Payload['props'],
            ctx: Payload['ctx']
          ) => StylesRecord<Payload['stylesNames'], React.CSSProperties>)
    : never;
  vars?: Payload['vars'] extends string
    ?
        | CssVariables<Payload['vars'] | (string & {})>
        | ((
            theme: MantineTheme,
            props: Payload['props'],
            ctx: Payload['ctx']
          ) => CssVariables<Payload['vars'] | (string & {})>)
    : CssVariables;
}
