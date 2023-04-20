import React from 'react';
import { Blockquote } from './Blockquote';

export default { title: 'Blockquote' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 820 }}>
      <Blockquote>
        <b>Hello there</b>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugiat rerum officiis,
          excepturi, illum, aut temporibus id dolor beatae quasi eligendi. Quos qui harum veritatis
          saepe unde maiores, recusandae consectetur.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugiat rerum officiis,
          excepturi, illum, aut temporibus id dolor beatae quasi eligendi. Quos qui harum veritatis
          saepe unde maiores, recusandae consectetur.
        </p>
      </Blockquote>
    </div>
  );
}
