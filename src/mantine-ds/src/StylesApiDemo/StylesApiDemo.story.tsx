import React from 'react';
import { Tabs } from '@mantine/core';
import { TabsStylesApi } from '@mantine/styles-api';
import { StylesApiDemo } from './StylesApiDemo';

const code = `
import { Tabs } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Tabs classNames={classes}>
      <Tabs.List>
        <Tabs.Tab
          value="react"
          leftSection={<IconPackage size={16} />}
          rightSection={<IconPackage size={16} />}
        >
          React
        </Tabs.Tab>
        <Tabs.Tab value="sv">Svelte</Tabs.Tab>
        <Tabs.Tab value="ng">Wrapped tab</Tabs.Tab>
        <Tabs.Tab value="ds" disabled>
          Disabled
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="react" pr="sm">
        React Panel
      </Tabs.Panel>
      <Tabs.Panel value="sv" pr="sm">
        Svelte Panel
      </Tabs.Panel>
      <Tabs.Panel value="ng" pr="sm">
        Angular Panel
      </Tabs.Panel>
    </Tabs>
  );
}
`;

export default { title: 'DS/StylesApiDemo' };

function Demo(props: any) {
  return (
    <Tabs defaultValue="react" {...props}>
      <Tabs.List>
        <Tabs.Tab value="react" leftSection="$">
          React
        </Tabs.Tab>
        <Tabs.Tab value="sv" rightSection="$">
          Svelte
        </Tabs.Tab>
        <Tabs.Tab value="ng">Wrapped tab</Tabs.Tab>
        <Tabs.Tab value="ds" disabled>
          Disabled
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="react" pr="sm" mt="sm">
        React Panel
      </Tabs.Panel>
      <Tabs.Panel value="sv" pr="sm" mt="sm">
        Svelte Panel
      </Tabs.Panel>
      <Tabs.Panel value="ng" pr="sm" mt="sm">
        Angular Panel
      </Tabs.Panel>
    </Tabs>
  );
}

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <StylesApiDemo code={code} data={TabsStylesApi} onStylesApiLink={() => {}} centered>
        <Demo />
      </StylesApiDemo>
    </div>
  );
}
