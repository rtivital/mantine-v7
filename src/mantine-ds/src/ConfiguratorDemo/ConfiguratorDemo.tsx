import React from 'react';
import { DemoAreaProps } from '../DemoArea';

export interface ConfiguratorDemoProps extends DemoAreaProps {
  data: { selectors: Record<string, string> };
  code: string;
  onStylesApiLink(): void;
}

function injectProps(props: Record<string, any>, code: string) {}

injectProps({ mt: 2, variant: 'pills', grow: true }, '<Tabs %%props%% />');
// -> <Tabs mt={2} variant="pills" grow />

injectProps({ mt: 2, variant: 'pills', grow: false }, '<Tabs %%props%% />');
// -> <Tabs mt={2} variant="pills" grow={false} />

const multiline = `
<Tabs
  %%props%%
/>
`;

injectProps({ mt: 2, variant: 'pills', grow: true }, multiline);
// <Tabs
//   mt={2}
//   variant="pills"
//   grow
// />

const multilineWithChildren = `
<div>
  <div>
    <Tabs
      %%props%%
    />
  </div>
</div>
`;

injectProps({ mt: 2, variant: 'pills', grow: false }, multilineWithChildren);
// <div>
//   <div>
//     <Tabs
//       mt={2}
//       variant="pills"
//       grow={false}
//     />
//   </div>
// </div>
