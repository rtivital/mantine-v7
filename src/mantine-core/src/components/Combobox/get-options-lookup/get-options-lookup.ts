import { ComboboxItem, ComboboxParsedItem } from '../Combobox.types';

export function getOptionsLookup(options: ComboboxParsedItem[]): Record<string, ComboboxItem> {
  return options.reduce<Record<string, ComboboxItem>>((acc, item) => {
    if ('group' in item) {
      return { ...acc, ...getOptionsLookup(item.items) };
    }

    acc[(item as any).value] = item;

    return acc;
  }, {});
}

export function getLabelsLookup(options: ComboboxParsedItem[]): Record<string, string> {
  return options.reduce<Record<string, string>>((acc, item) => {
    if ('group' in item) {
      return { ...acc, ...getLabelsLookup(item.items) };
    }

    acc[(item as any).label] = item as any;

    return acc;
  }, {});
}
