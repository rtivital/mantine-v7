export interface ComboboxItem {
  value: string;
  label?: string;
  [key: string]: any;
}

export interface ComboboxItemGroup {
  group: string;
  items: ComboboxItem[];
}

export type ComboboxData = (string | ComboboxItem | ComboboxItemGroup)[];
export type ComboboxParsedData = (ComboboxItem | ComboboxItemGroup)[];
