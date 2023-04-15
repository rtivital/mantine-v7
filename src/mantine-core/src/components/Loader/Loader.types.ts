export type MantineLoader = 'bars' | 'dots' | 'oval' | (string & {});

export interface SvgLoaderProps extends React.ComponentPropsWithoutRef<'svg'> {}

export type MantineLoaderComponent = React.ForwardRefExoticComponent<
  SvgLoaderProps & React.RefAttributes<SVGSVGElement>
>;

export type MantineLoadersRecord = Record<MantineLoader, MantineLoaderComponent>;
