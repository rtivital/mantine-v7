import React from 'react';
import { DemoAreaProps } from '../DemoArea';
import { DemoCode } from '../DemoCode';
import { DemoColumns } from '../DemoColumns';
import { DemoRoot } from '../DemoRoot';
import {
  ConfiguratorBooleanControl,
  ConfiguratorSegmentedControl,
  ConfiguratorBooleanControlOptions,
  ConfiguratorSegmentedControlOptions,
} from './controls';
import { injectProps } from './inject-props';

type ConfiguratorControlOptions =
  | ConfiguratorBooleanControlOptions
  | ConfiguratorSegmentedControlOptions;

export interface ConfiguratorDemoProps extends DemoAreaProps {
  code: string;
  controls: ConfiguratorControlOptions[];
}

export function ConfiguratorDemo({ code, controls, children }: ConfiguratorDemoProps) {
  return (
    <DemoRoot>
      <DemoColumns controls={null}>{children}</DemoColumns>
      <DemoCode
        code={[
          {
            fileName: 'Demo.tsx',
            language: 'tsx',
            code: injectProps({ hello: 'there', children: 'lala' }, code),
          },
        ]}
      />
    </DemoRoot>
  );
}
