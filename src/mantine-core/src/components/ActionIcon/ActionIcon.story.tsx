import React from 'react';
import { ActionIcon, ActionIconProps } from './ActionIcon';
import { DEFAULT_THEME } from '../../core';

export default { title: 'ActionIcon' };

function Colors({ index, ...others }: ActionIconProps & { index?: number }) {
  const colors = Object.keys(DEFAULT_THEME.colors).map((color) => (
    <ActionIcon
      color={`${color}${typeof index === 'number' ? `.${index}` : ''}`}
      key={color}
      {...others}
      size="lg"
    >
      $$
    </ActionIcon>
  ));
  return <div style={{ display: 'flex', gap: 20, padding: 40 }}>{colors}</div>;
}

export function Usage() {
  return (
    <>
      Filled variant:
      <Colors />
      Filled variant index
      <Colors index={4} />
      Light variant:
      <Colors variant="light" />
      Light variant index:
      <Colors variant="light" index={5} />
      Outline variant:
      <Colors variant="outline" />
      Outline variant index:
      <Colors variant="outline" index={4} />
    </>
  );
}

export function CssColor() {
  return (
    <div style={{ padding: 40 }}>
      Filled variant
      <div>
        <ActionIcon size="xl" radius="xl" color="#ff00ff">
          $$
        </ActionIcon>
      </div>
      Light variant
      <div>
        <ActionIcon size="xl" radius="xl" color="#ff00ff" variant="light">
          $$
        </ActionIcon>
      </div>
      Outline variant
      <div>
        <ActionIcon size="xl" radius="xl" color="#ff00ff" variant="outline">
          $$
        </ActionIcon>
      </div>
    </div>
  );
}
