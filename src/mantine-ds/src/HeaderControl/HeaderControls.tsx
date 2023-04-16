import React from 'react';
import { BoxProps, Group, Tooltip } from '@mantine/core';
import { ColorSchemeControl } from './ColorSchemeControl';
import { DirectionControl } from './DirectionControl';
import { GithubControl } from './GithubControl';
import { DiscordControl } from './DiscordControl';
import { SearchControl } from '../SearchControl';

interface HeaderControlsProps extends BoxProps {
  onSearch(): void;
  githubLink: string;
}

export function HeaderControls({ onSearch, githubLink, ...others }: HeaderControlsProps) {
  return (
    <Tooltip.Group openDelay={600} closeDelay={100}>
      <Group gap="xs" {...others}>
        <SearchControl onClick={onSearch} />
        <DiscordControl />
        <GithubControl link={githubLink} />
        <DirectionControl />
        <ColorSchemeControl />
      </Group>
    </Tooltip.Group>
  );
}
