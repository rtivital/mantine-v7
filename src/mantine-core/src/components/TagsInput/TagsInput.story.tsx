import React from 'react';
import { TagsInput } from './TagsInput';

export default { title: 'TagsInput' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput defaultValue={['React', 'Angular']} placeholder="Enter tags" />
    </div>
  );
}
