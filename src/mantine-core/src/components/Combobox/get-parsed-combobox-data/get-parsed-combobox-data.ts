import {
  ComboboxData,
  ComboboxParsedData,
  ComboboxItem,
  ComboboxItemGroup,
} from '../Combobox.types';

function parseItem(
  item: string | ComboboxItem | ComboboxItemGroup
): ComboboxItem | ComboboxItemGroup {
  if (typeof item === 'string') {
    return { value: item, label: item };
  }

  if ('group' in item) {
    return {
      group: item.group,
      items: item.items.map(parseItem),
    };
  }

  return item;
}

export function getParsedComboboxData(data: ComboboxData | undefined): ComboboxParsedData {
  if (!data) {
    return [];
  }

  return data.map(parseItem);
}
