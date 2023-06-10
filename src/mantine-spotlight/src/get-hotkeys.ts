import { HotkeyItem } from '@mantine/hooks';
import { spotlight, SpotlightStore } from './spotlight.store';

export function getHotkeys(
  hotkeys: string | string[] | null | undefined,
  store: SpotlightStore | undefined
): HotkeyItem[] {
  if (!hotkeys) {
    return [];
  }

  const open = () => spotlight.open(store);

  if (Array.isArray(hotkeys)) {
    return hotkeys.map((hotkey) => [hotkey, open]);
  }

  return [[hotkeys, open]];
}
