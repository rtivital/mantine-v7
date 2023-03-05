import type { MantineTheme } from '../MantineProvider';
import type { CssVariables, CssVariable } from '../Box';

export type StylesRecord<StylesNames extends string, Payload> = Partial<
  Record<StylesNames, Payload>
>;

export interface StylesApiProps<
  StylesNames extends string,
  Variant extends string = string,
  Variables extends CssVariable = CssVariable,
  StylesParams extends Record<string, any> = Record<string, any>
> {
  unstyled?: boolean;
  variant?: Variant;
  classNames?: Partial<Record<StylesNames, string>>;
  styles?:
    | StylesRecord<StylesNames, React.CSSProperties>
    | ((theme: MantineTheme) => StylesRecord<StylesNames, React.CSSProperties>);
  vars?: StylesParams extends Record<string, any>
    ?
        | ((params: StylesParams) => CssVariables<Variables | (string & {})>)
        | CssVariables<Variables | (string & {})>
    : CssVariables<Variables | (string & {})>;
}
