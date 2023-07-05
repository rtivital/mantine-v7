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

export function SplitChars() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput
        defaultValue={['React', 'Angular']}
        placeholder="Enter tags"
        splitChars={[' ', ',']}
      />
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

export function WithData() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput
        defaultValue={['React', 'Angular']}
        placeholder="Enter tags"
        data={['test-1', 'test-2']}
      />
    </div>
  );
}
