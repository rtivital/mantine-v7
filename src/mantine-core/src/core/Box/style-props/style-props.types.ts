import type { CSSProperties } from 'react';
import type {
  MantineBreakpoint,
  MantineSpacing,
  MantineFontSize,
  MantineColor,
} from '../../MantineProvider';

export type StyleProp<Value> = Value | Partial<Record<MantineBreakpoint | (string & {}), Value>>;

export type StylePropSpacingValue = MantineSpacing | number | (string & {});

export interface MantineStyleProps {
  m?: StyleProp<StylePropSpacingValue>;
  my?: StyleProp<StylePropSpacingValue>;
  mx?: StyleProp<StylePropSpacingValue>;
  mt?: StyleProp<StylePropSpacingValue>;
  mb?: StyleProp<StylePropSpacingValue>;
  ml?: StyleProp<StylePropSpacingValue>;
  mr?: StyleProp<StylePropSpacingValue>;

  p?: StyleProp<StylePropSpacingValue>;
  py?: StyleProp<StylePropSpacingValue>;
  px?: StyleProp<StylePropSpacingValue>;
  pt?: StyleProp<StylePropSpacingValue>;
  pb?: StyleProp<StylePropSpacingValue>;
  pl?: StyleProp<StylePropSpacingValue>;
  pr?: StyleProp<StylePropSpacingValue>;

  bg?: StyleProp<MantineColor>;
  c?: StyleProp<MantineColor>;
  opacity?: StyleProp<CSSProperties['opacity']>;

  ff?: StyleProp<CSSProperties['fontFamily']>;
  fz?: StyleProp<MantineFontSize>;
  fw?: StyleProp<CSSProperties['fontWeight']>;
  lts?: StyleProp<CSSProperties['letterSpacing']>;
  ta?: StyleProp<CSSProperties['textAlign']>;
  lh?: StyleProp<CSSProperties['lineHeight']>;
  fs?: StyleProp<CSSProperties['fontStyle']>;
  tt?: StyleProp<CSSProperties['textTransform']>;
  td?: StyleProp<CSSProperties['textDecoration']>;

  w?: StyleProp<CSSProperties['width']>;
  miw?: StyleProp<CSSProperties['minWidth']>;
  maw?: StyleProp<CSSProperties['maxWidth']>;
  h?: StyleProp<CSSProperties['height']>;
  mih?: StyleProp<CSSProperties['minHeight']>;
  mah?: StyleProp<CSSProperties['maxHeight']>;

  bgsz?: StyleProp<CSSProperties['backgroundSize']>;
  bgp?: StyleProp<CSSProperties['backgroundPosition']>;
  bgr?: StyleProp<CSSProperties['backgroundRepeat']>;
  bga?: StyleProp<CSSProperties['backgroundAttachment']>;

  pos?: StyleProp<CSSProperties['position']>;
  top?: StyleProp<CSSProperties['top']>;
  left?: StyleProp<CSSProperties['left']>;
  bottom?: StyleProp<CSSProperties['bottom']>;
  right?: StyleProp<CSSProperties['right']>;
  inset?: StyleProp<CSSProperties['inset']>;

  display?: StyleProp<CSSProperties['display']>;
}
