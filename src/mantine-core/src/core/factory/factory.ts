import { forwardRef } from 'react';
import { MantineTheme, MantineThemeComponent } from '../MantineProvider';

export type DataAttributes = Record<`data-${string}`, any>;

export interface ExtendPayload {
  props: Record<string, any>;
  ref: any;
  stylesNames?: string;
  vars?: string;
  variant?: string;
  styleParams?: Record<string, any>;
}

export type ExtendStyles<StylesNames extends string> =
  | Partial<Record<StylesNames, React.CSSProperties>>
  | ((theme: MantineTheme) => Partial<Record<StylesNames, React.CSSProperties>>);

export type ExtendVars<Vars extends string, Variant, StyleParams = {}> =
  | Partial<Record<Vars, string>>
  | ((payload: { variant?: Variant } & StyleParams) => Partial<Record<Vars, string>>);

export interface ExtendComponent<Payload extends ExtendPayload> {
  defaultProps?: Partial<Payload['props']> & DataAttributes;
  classNames?: Payload['stylesNames'] extends string
    ? Partial<Record<Payload['stylesNames'], string>>
    : never;
  styles?: Payload['stylesNames'] extends string ? ExtendStyles<Payload['stylesNames']> : never;
  vars?: Payload['vars'] extends string
    ? ExtendVars<Payload['vars'], Payload['variant'], Payload['styleParams']>
    : never;
}

export type MantineComponent<Payload extends ExtendPayload> = React.ForwardRefExoticComponent<
  Payload['props'] & React.RefAttributes<Payload['ref']>
> & {
  extend: (input: ExtendComponent<Payload>) => MantineThemeComponent;
};

function identity<T>(value: T): T {
  return value;
}

export function factory<Payload extends ExtendPayload>(
  ui: React.ForwardRefRenderFunction<Payload['ref'], Payload['props']>
) {
  const Component = forwardRef(ui) as MantineComponent<Payload>;

  Component.extend = identity as any;

  return Component as MantineComponent<Payload>;
}
