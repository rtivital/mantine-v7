import { useState, useRef } from 'react';

export interface ComboboxStore {
  dropdownOpened: boolean;
  openDropdown(): void;
  closeDropdown(): void;
  toggleDropdown(): void;

  selectedOptionIndex: number;
  selectedOptionId: string | null;
  selectOption(index: number): void;
  selectNextOption(): void;
  selectPreviousOption(): void;
  resetSelectedOption(): void;
  clickSelectedOption(): void;

  listId: string | null;
  setListId(id: string): void;
}

interface UseComboboxOptions {
  /** Default value for `dropdownOpened`, `false` by default */
  defaultOpened?: boolean;
}

export function useCombobox({ defaultOpened = false }: UseComboboxOptions = {}): ComboboxStore {
  const [dropdownOpened, setDropdownOpened] = useState(defaultOpened);
  const listId = useRef<string | null>(null);
  const selectedOptionIndex = useRef<number>(-1);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const openDropdown = () => setDropdownOpened(true);
  const closeDropdown = () => setDropdownOpened(false);
  const toggleDropdown = () => setDropdownOpened((o) => !o);

  const clearSelectedItem = () => {
    const selected = document.querySelector(`#${listId.current} [data-selected]`);
    selected?.removeAttribute('data-selected');
    selected?.removeAttribute('aria-selected');
  };

  const selectOption = (index: number) => {
    const list = document.getElementById(listId.current!);
    const items = list?.querySelectorAll('[data-combobox-option]');
    const nextIndex = index >= items!.length ? 0 : index < 0 ? items!.length - 1 : index;
    selectedOptionIndex.current = nextIndex;

    if (items?.[nextIndex] && !items[nextIndex].hasAttribute('data-disabled')) {
      clearSelectedItem();
      items[nextIndex].setAttribute('data-selected', 'true');
      items[nextIndex].setAttribute('aria-selected', 'true');
      items[nextIndex].scrollIntoView({ block: 'nearest' });
      setSelectedOptionId(items[nextIndex].id);
    }
  };

  const selectNextOption = () => {
    selectOption(selectedOptionIndex.current + 1);
  };

  const selectPreviousOption = () => {
    selectOption(selectedOptionIndex.current - 1);
  };

  const resetSelectedOption = () => {
    selectedOptionIndex.current = -1;
    clearSelectedItem();
  };

  const clickSelectedOption = () => {
    const items = document.querySelectorAll<HTMLDivElement>(
      `#${listId.current} [data-combobox-option]`
    );
    const item = items?.[selectedOptionIndex.current];
    item?.click();
  };

  const setListId = (id: string) => {
    listId.current = id;
  };

  return {
    dropdownOpened,
    openDropdown,
    closeDropdown,
    toggleDropdown,

    selectedOptionId,
    selectedOptionIndex: selectedOptionIndex.current,
    selectOption,
    selectNextOption,
    selectPreviousOption,
    resetSelectedOption,

    listId: listId.current,
    setListId,
    clickSelectedOption,
  };
}
