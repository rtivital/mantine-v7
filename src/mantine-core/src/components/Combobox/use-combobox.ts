import { useState, useRef } from 'react';

export interface ComboboxStore {
  dropdownOpened: boolean;
  openDropdown(): void;
  closeDropdown(): void;
  toggleDropdown(): void;

  selectedItemIndex: number;
  selectItem(index: number): void;
  selectNextItem(): void;
  selectPreviousItem(): void;
  resetSelectedItem(): void;

  dropdownId: string | null;
  setDropdownId(id: string): void;

  listId: string | null;
  setListId(id: string): void;
}

export function useCombobox(): ComboboxStore {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const dropdownId = useRef<string | null>(null);
  const listId = useRef<string | null>(null);
  const selectedItemIndex = useRef<number>(-1);

  const openDropdown = () => setDropdownOpened(true);
  const closeDropdown = () => setDropdownOpened(false);
  const toggleDropdown = () => setDropdownOpened((o) => !o);

  const selectItem = (index: number) => {
    selectedItemIndex.current = index;
  };

  const selectNextItem = () => {
    selectItem(selectedItemIndex.current + 1);
  };

  const selectPreviousItem = () => {
    selectItem(selectedItemIndex.current - 1);
  };

  const resetSelectedItem = () => {
    selectedItemIndex.current = -1;
  };

  const setDropdownId = (id: string) => {
    dropdownId.current = id;
  };

  const setListId = (id: string) => {
    listId.current = id;
  };

  return {
    dropdownOpened,
    openDropdown,
    closeDropdown,
    toggleDropdown,

    selectedItemIndex: selectedItemIndex.current,
    selectItem,
    selectNextItem,
    selectPreviousItem,
    resetSelectedItem,

    dropdownId: dropdownId.current,
    setDropdownId,

    listId: listId.current,
    setListId,
  };
}
