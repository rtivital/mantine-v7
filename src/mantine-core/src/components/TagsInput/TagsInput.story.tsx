import React from 'react';
import { TagsInput } from './TagsInput';

export default { title: 'TagsInput' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput defaultValue={['React', 'Angular']} placeholder="Enter tags" variant="filled" />
    </div>
  );
}

export function MaxTags() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput defaultValue={['React', 'Angular']} placeholder="Enter tags" maxTags={3} />
    </div>
  );
}

export function AllowDuplicates() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput defaultValue={['React', 'Angular']} placeholder="Enter tags" allowDuplicates />
    </div>
  );
}
