import React from 'react';
import { Grid } from './Grid';
import { SimpleGrid } from '../SimpleGrid';
import { Button } from '../Button';

export default { title: 'Grid' };

export function Usage() {
  return (
    <div style={{ padding: 0 }}>
      <SimpleGrid cols={4} bg="orange">
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
        <Button>Forth</Button>
      </SimpleGrid>
      <Grid columns={12} bg="pink.3">
        <Grid.Col span={6}>
          <Button fullWidth>First</Button>
        </Grid.Col>
        <Grid.Col span={3}>
          <Button fullWidth>Second</Button>
        </Grid.Col>
        <Grid.Col span={3}>
          <Button fullWidth>Third</Button>
        </Grid.Col>
      </Grid>
    </div>
  );
}

// export function Usage() {
//   return (
//     <div style={{ display: 'flex', background: 'pink', gap: 0, flexWrap: 'wrap' }}>
//       <div style={{ flex: 3, minWidth: '25%', maxWidth: '25%', background: 'silver' }}>3</div>
//       <div style={{ flex: 3, minWidth: '25%', maxWidth: '25%', background: 'silver' }}>3</div>
//       <div style={{ flex: 3, minWidth: '25%', maxWidth: '25%', background: 'silver' }}>3</div>
//       <div style={{ flex: 3, minWidth: '25%', maxWidth: '25%', background: 'silver' }}>3</div>
//       {/* <div style={{ flex: 3, background: 'silver' }}>3</div> */}
//     </div>
//   );
// }
