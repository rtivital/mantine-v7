import type { MantineTheme } from '../MantineProvider';
import type { CssVarsProp, CssVariable } from '../Box';

export type StylesRecord<StylesNames extends string, Payload> = Partial<
  Record<StylesNames, Payload>
>;

export interface StylesApiProps<
  StylesNames extends string,
  Variant extends string = string,
  Variables extends CssVariable = CssVariable
> {
  unstyled?: boolean;
  variant?: Variant;
  classNames?: Partial<Record<StylesNames, string>>;
  styles?:
    | StylesRecord<StylesNames, React.CSSProperties>
    | ((theme: MantineTheme) => StylesRecord<StylesNames, React.CSSProperties>);
  vars?: CssVarsProp<Variables | (string & {})>;
}
