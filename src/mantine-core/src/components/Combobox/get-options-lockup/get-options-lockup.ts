import { ComboboxParsedItem, ComboboxItem } from '../Combobox.types';

export function getOptionsLockup(options: ComboboxParsedItem[]): Record<string, ComboboxItem> {
  return options.reduce<Record<string, ComboboxItem>>((acc, item) => {
    if ('group' in item) {
      return { ...acc, ...getOptionsLockup(item.items) };
    }

    acc[(item as any).value] = item;

    return { ...acc, [item.value]: item };
  }, {});
}
