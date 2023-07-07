import React from 'react';
import { MultiSelect } from './MultiSelect';

export default { title: 'MultiSelect' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <MultiSelect data={['React', 'Angular', 'Svelte']} placeholder="MultiSelect something" />
    </div>
  );
}

export function HidePickedOptions() {
  return (
    <div style={{ padding: 40 }}>
      <MultiSelect
        data={['React', 'Angular', 'Svelte']}
        placeholder="MultiSelect something"
        hidePickedOptions
      />
    </div>
  );
}

export function Searchable() {
  return (
    <div style={{ padding: 40 }}>
      <MultiSelect
        data={['React', 'Angular', 'Svelte']}
        placeholder="MultiSelect something"
        searchable
        nothingFoundMessage="Nothing found..."
      />
    </div>
  );
}

export function SearchableHidePicked() {
  return (
    <div style={{ padding: 40 }}>
      <MultiSelect
        data={['React', 'Angular', 'Svelte']}
        placeholder="MultiSelect something"
        searchable
        hidePickedOptions
        nothingFoundMessage="Nothing found..."
      />
    </div>
  );
}
