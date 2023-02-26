export type MantineLoader = 'bars' | 'dots' | 'oval';

export interface SvgLoaderProps extends React.ComponentPropsWithoutRef<'svg'> {
  size: string;
  color: string | undefined;
}
