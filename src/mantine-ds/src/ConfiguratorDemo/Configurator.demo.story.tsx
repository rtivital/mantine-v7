import React from 'react';
import { Highlight, HighlightProps } from '@mantine/core';
import { ConfiguratorDemo } from './ConfiguratorDemo';

export default { title: 'DS/ConfiguratorDemo' };

const code = `import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight%%props%%>
      %%children%%
    </Highlight>
  );
}`;

const defaultProps: HighlightProps = {
  children: 'Highlight this',
  highlight: 'this',
};

function Demo(props: Partial<HighlightProps>) {
  return <Highlight {...defaultProps} {...props} />;
}

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <ConfiguratorDemo
        code={code}
        controls={[
          // {
          //   type: 'segmented',
          //   data: ['yellow', 'blue'],
          //   prop: 'color',
          //   initialValue: 'yellow',
          //   libraryValue: 'yellow',
          // },
          {
            type: 'color',
            prop: 'color',
            initialValue: 'yellow',
            libraryValue: 'yellow',
          },
        ]}
      >
        <Demo />
      </ConfiguratorDemo>
    </div>
  );
}
