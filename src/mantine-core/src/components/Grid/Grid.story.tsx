import React from 'react';
import { Grid } from './Grid';
import { Button } from '../Button';

export default { title: 'Grid' };

export function Usage() {
  return (
    <div style={{ padding: 0 }}>
      <Grid columns={12} bg="pink.3">
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Button fullWidth>First</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Button fullWidth>Second</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Button fullWidth>Third</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Button fullWidth>Forth</Button>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export function Offset() {
  return (
    <div style={{ padding: 0 }}>
      <Grid columns={12} bg="pink.3">
        <Grid.Col span={4}>
          <Button fullWidth>First</Button>
        </Grid.Col>
        <Grid.Col span={4} offset={{ sm: 2, md: 4 }}>
          <Button fullWidth>Second</Button>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export function Order() {
  return (
    <div style={{ padding: 0 }}>
      <Grid columns={12} bg="pink.3">
        <Grid.Col span={4} order={{ base: 2, sm: 1 }}>
          <Button fullWidth>First</Button>
        </Grid.Col>
        <Grid.Col span={4} order={{ base: 1, sm: 2 }}>
          <Button fullWidth>Second</Button>
        </Grid.Col>
      </Grid>
    </div>
  );
}
