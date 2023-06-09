import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { Spotlight } from './Spotlight';

export default { title: 'Spotlight' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Spotlight>
        <Spotlight.Search
          placeholder="Search something..."
          leftSection={<IconSearch stroke={1.5} size={20} />}
        />
        <Spotlight.ActionsList>
          <Spotlight.Empty>Nothing found...</Spotlight.Empty>
          <Spotlight.Action onClick={() => console.log('action 1')} description="Lorem">
            First
          </Spotlight.Action>
          <Spotlight.Action onClick={() => console.log('action 2')} description="Dolor">
            Second
          </Spotlight.Action>
          <Spotlight.Action
            onClick={() => console.log('action 3')}
            id="third"
            description="Sit ame"
          >
            Third
          </Spotlight.Action>
        </Spotlight.ActionsList>
      </Spotlight>

      <Button onClick={() => Spotlight.open()}>Open spotlight</Button>
    </div>
  );
}
