import React from 'react';

export type MantineLoader = 'bars' | 'dots' | 'oval' | (string & {});

export interface SvgLoaderProps extends React.ComponentPropsWithoutRef<any> {}

export type MantineLoaderComponent = React.ForwardRefExoticComponent<
  React.HTMLAttributes<any> & React.RefAttributes<any>
>;

export type MantineLoadersRecord = Record<MantineLoader, MantineLoaderComponent>;
