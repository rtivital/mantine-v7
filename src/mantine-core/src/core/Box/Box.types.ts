import type { CSSProperties } from 'react';
import type { MantineTheme } from '../MantineProvider';

type MantineStyle = CSSProperties | ((theme: MantineTheme) => CSSProperties);
export type MantineStyleProp = MantineStyle | MantineStyle[];

export type CssVariable = `--${string}`;

export type CssVariables<Variable extends string = CssVariable> = Partial<Record<Variable, string>>;

export type CssVars<Variable extends string = CssVariable> =
  | CssVariables<Variable>
  | ((theme: MantineTheme) => CssVariables<Variable>);

export type CssVarsProp<Variable extends string = CssVariable> =
  | CssVars<Variable>
  | CssVars<Variable>[];
