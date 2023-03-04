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
      Default variant:
      <Colors variant="default" />
      Filled variant:
      <Colors />
      Filled variant index
      <Colors index={4} />
      Light variant:
      <Colors variant="light" />
      Light variant index:
      <Colors variant="light" index={5} />
      Subtle variant:
      <Colors variant="subtle" />
      Subtle variant index:
      <Colors variant="subtle" index={5} />
      Outline variant:
      <Colors variant="outline" />
      Outline variant index:
      <Colors variant="outline" index={4} />
      Transparent variant:
      <Colors variant="transparent" />
      Transparent variant index:
      <Colors variant="transparent" index={4} />
      <div style={{ backgroundColor: 'rgba(0,0,0,.5)' }}>
        White variant:
        <Colors variant="white" />
        White variant index:
        <Colors variant="white" index={4} />
      </div>
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
      Subtle variant
      <div>
        <ActionIcon size="xl" radius="xl" color="#ff00ff" variant="subtle">
          $$
        </ActionIcon>
      </div>
      Transparent variant
      <div>
        <ActionIcon size="xl" radius="xl" color="#ff00ff" variant="transparent">
          $$
        </ActionIcon>
      </div>
      White variant
      <div style={{ backgroundColor: 'rgba(0,0,0,.5)' }}>
        <ActionIcon size="xl" radius="xl" color="#ff00ff" variant="white">
          $$
        </ActionIcon>
      </div>
    </div>
  );
}

export function GradientVariant() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 40 }}>
      <ActionIcon size="lg" variant="gradient">
        $$
      </ActionIcon>
      <ActionIcon size="lg" variant="gradient" gradient={{ from: 'red', to: 'cyan' }}>
        $$
      </ActionIcon>
      <ActionIcon size="lg" variant="gradient" gradient={{ from: '#FF00FF', to: '#00FF00' }}>
        $$
      </ActionIcon>
    </div>
  );
}
