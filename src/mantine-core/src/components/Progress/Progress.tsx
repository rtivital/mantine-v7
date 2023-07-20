import React from 'react';
import { StylesApiProps, factory, useProps, Factory } from '../../core';
import {
  ProgressRoot,
  ProgressRootStylesNames,
  ProgressRootCssVariables,
  __ProgressRootProps,
} from './ProgressRoot/ProgressRoot';
import { ProgressSection } from './ProgressSection/ProgressSection';
import { ProgressLabel } from './ProgressLabel/ProgressLabel';
import classes from './Progress.module.css';

export type ProgressStylesNames = ProgressRootStylesNames;

export interface ProgressProps extends __ProgressRootProps, StylesApiProps<ProgressFactory> {
  value?: number;
}

export type ProgressFactory = Factory<{
  props: ProgressProps;
  ref: HTMLDivElement;
  stylesNames: ProgressStylesNames;
  vars: ProgressRootCssVariables;
  staticComponents: {
    Section: typeof ProgressSection;
    Root: typeof ProgressRoot;
    Label: typeof ProgressLabel;
  };
}>;

const defaultProps: Partial<ProgressProps> = {};

export const Progress = factory<ProgressFactory>((_props, ref) => {
  const { value, ...others } = useProps('Progress', defaultProps, _props);
  return <ProgressRoot ref={ref} {...others} />;
});

Progress.classes = classes;
Progress.displayName = '@mantine/core/Progress';
Progress.Section = ProgressSection;
Progress.Root = ProgressRoot;
Progress.Label = ProgressLabel;
