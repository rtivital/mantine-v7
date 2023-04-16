import React from 'react';
import { rem } from '@mantine/core';
import { HeaderControl } from './HeaderControl';
import { DiscordIcon } from '../Icons';
import { meta } from '../meta';
import classes from './DiscordControl.module.css';

export function DiscordControl() {
  return (
    <HeaderControl
      tooltip="Discord"
      component="a"
      href={meta.discordLink}
      className={classes.discord}
    >
      <DiscordIcon size={rem(20)} />
    </HeaderControl>
  );
}
