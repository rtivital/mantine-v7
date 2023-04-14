import { CSSProperties } from 'react';
import type { MantineTheme } from '../MantineProvider';
import type { CssVariables, MantineStyleProp } from '../Box';
import type { FactoryPayload } from '../factory';

export interface GetStylesApiOptions {
  className?: string;
  style?: MantineStyleProp;
  focusable?: boolean;
  active?: boolean;
  classNames?: ClassNames<{ props: any; stylesNames: string }>;
  styles?: Styles<{ props: any; stylesNames: string }>;
  variant?: string;
  props?: Record<string, any>;
}

export type StylesApiRecord<
  Payload extends FactoryPayload,
  DataType
> = Payload['stylesNames'] extends string
  ?
      | StylesRecord<Payload['stylesNames'], DataType>
      | ((
          theme: MantineTheme,
          props: Payload['props'],
          ctx: Payload['ctx']
        ) => StylesRecord<Payload['stylesNames'], DataType>)
  : never;

export type Styles<Payload extends FactoryPayload> = StylesApiRecord<Payload, CSSProperties>;
export type ClassNames<Payload extends FactoryPayload> = StylesApiRecord<Payload, string>;

export type StylesRecord<StylesNames extends string, Payload> = Partial<
  Record<StylesNames, Payload>
>;

export interface StylesApiProps<Payload extends FactoryPayload> {
  unstyled?: boolean;
  variant?: Payload['variant'] extends string ? Payload['variant'] | (string & {}) : string;
  classNames?: ClassNames<Payload>;
  styles?: Styles<Payload>;
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
