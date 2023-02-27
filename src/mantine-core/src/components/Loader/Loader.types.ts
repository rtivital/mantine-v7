import type { CssVarsProp } from '../../core';
import type { LoaderCssVariables } from './Loader';

export type MantineLoader = 'bars' | 'dots' | 'oval';

export interface SvgLoaderProps extends React.ComponentPropsWithoutRef<'svg'> {
  vars?: CssVarsProp<LoaderCssVariables>;
}
