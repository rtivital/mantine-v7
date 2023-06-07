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
      </Spotlight>

      <Button>Open spotlight</Button>
    </div>
  );
}
