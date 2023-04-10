import React from 'react';
import { CodeDemo, CodeDemoProps } from '../CodeDemo/CodeDemo';
import { ConfiguratorDemo, ConfiguratorDemoProps } from '../ConfiguratorDemo/ConfiguratorDemo';
import { StylesApiDemo, StylesApiDemoProps } from '../StylesApiDemo/StylesApiDemo';

export type MantineDemo =
  | ({ type: 'code' } & CodeDemoProps)
  | ({ type: 'configurator' } & ConfiguratorDemoProps)
  | ({ type: 'styles-api' } & StylesApiDemoProps);

interface DemoProps {
  demo: MantineDemo;
}

export function Demo({ demo }: DemoProps) {
  switch (demo.type) {
    case 'code':
      return <CodeDemo {...demo} />;
    case 'configurator':
      return <ConfiguratorDemo {...demo} />;
    case 'styles-api':
      return <StylesApiDemo {...demo} />;
    default:
      return null;
  }
}
