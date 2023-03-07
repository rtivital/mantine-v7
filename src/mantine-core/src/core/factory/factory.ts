import { forwardRef } from 'react';
import type { MantineTheme, MantineThemeComponent } from '../MantineProvider';

export type DataAttributes = Record<`data-${string}`, any>;

export interface FactoryPayload {
  props: Record<string, any>;
  ref?: any;
  stylesNames?: string;
  vars?: string;
  variant?: string;
  stylesParams?: Record<string, any>;
  staticComponents?: Record<string, any>;
}

export type ExtendStyles<StylesNames extends string> =
  | Partial<Record<StylesNames, React.CSSProperties>>
  | ((theme: MantineTheme) => Partial<Record<StylesNames, React.CSSProperties>>);

export type ExtendVars<Vars extends string, StyleParams = {}> =
  | Partial<Record<Vars, string>>
  | ((payload: StyleParams) => Partial<Record<Vars, string>>);

export interface ExtendComponent<Payload extends FactoryPayload> {
  defaultProps?: Partial<Payload['props']> & DataAttributes;
  classNames?: Payload['stylesNames'] extends string
    ? Partial<Record<Payload['stylesNames'], string>>
    : never;
  styles?: Payload['stylesNames'] extends string ? ExtendStyles<Payload['stylesNames']> : never;
  vars?: Payload['vars'] extends string
    ? ExtendVars<Payload['vars'], Payload['stylesParams']>
    : never;
}

export type StaticComponents<Input> = Input extends Record<string, any>
  ? Input
  : Record<string, never>;

export interface ThemeExtend<Payload extends FactoryPayload> {
  extend: (input: ExtendComponent<Payload>) => MantineThemeComponent;
}

export type MantineComponent<Payload extends FactoryPayload> = React.ForwardRefExoticComponent<
  Payload['props'] & React.RefAttributes<Payload['ref']>
> &
  ThemeExtend<Payload> &
  StaticComponents<Payload['staticComponents']>;

export function identity<T>(value: T): T {
  return value;
}

export function factory<Payload extends FactoryPayload>(
  ui: React.ForwardRefRenderFunction<Payload['ref'], Payload['props']>
) {
  const Component = forwardRef(ui) as MantineComponent<Payload>;

  Component.extend = identity as any;

  return Component as MantineComponent<Payload>;
}
