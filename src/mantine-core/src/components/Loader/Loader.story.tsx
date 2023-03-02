import React from 'react';
import { Loader } from './Loader';

export default { title: 'Loader' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Loader display="block" />
      <Loader type="bars" display="block" mt="xl" />
      <Loader type="dots" display="block" mt="xl" />
    </div>
  );
}
