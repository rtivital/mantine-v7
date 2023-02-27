import type { CssVarsProp } from '../../core';
import type { LoaderCssVariables } from './Loader';

export type MantineLoader = 'bars' | 'dots' | 'oval' | (string & {});

export interface SvgLoaderProps extends React.ComponentPropsWithoutRef<'svg'> {
  vars?: CssVarsProp<LoaderCssVariables>;
}

export type MantineLoaderComponent = React.ForwardRefExoticComponent<
  SvgLoaderProps & React.RefAttributes<SVGSVGElement>
>;

export type MantineLoadersRecord = Record<MantineLoader, MantineLoaderComponent>;
