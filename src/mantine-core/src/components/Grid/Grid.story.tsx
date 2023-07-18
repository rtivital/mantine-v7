import React from 'react';
import { Grid } from './Grid';
import { Button } from '../Button';

export default { title: 'Grid' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Grid>
        <Grid.Col span={4}>
          <Button fullWidth>First</Button>
        </Grid.Col>
        <Grid.Col span={4}>
          <Button fullWidth>Second</Button>
        </Grid.Col>
        <Grid.Col span={4}>
          <Button fullWidth>Third</Button>
        </Grid.Col>
      </Grid>
    </div>
  );
}
