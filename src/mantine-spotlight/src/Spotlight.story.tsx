import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { Spotlight } from './Spotlight';

export default { title: 'Spotlight' };

const largeActionsList = Array(1)
  .fill(0)
  .map((_, index) => (
    <Spotlight.Action
      key={index}
      onClick={() => console.log(`action ${index}`)}
      description={`Action ${index}`}
    >
      {`Action ${index}`}
    </Spotlight.Action>
  ));

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Spotlight shortcut={['mod + K', 'mod + P', '/']}>
        <Spotlight.Search
          placeholder="Search something..."
          leftSection={<IconSearch stroke={1.5} size={20} />}
        />

        <Spotlight.ActionsList>
          <Spotlight.Empty>Nothing found...</Spotlight.Empty>
          {largeActionsList}
        </Spotlight.ActionsList>

        <Spotlight.Footer>This is footer</Spotlight.Footer>
      </Spotlight>

      <Button onClick={() => Spotlight.open()}>Open spotlight</Button>
    </div>
  );
}
