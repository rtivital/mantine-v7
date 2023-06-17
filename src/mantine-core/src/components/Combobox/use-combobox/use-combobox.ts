import { useEffect, useRef } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { getPreviousIndex, getNextIndex } from './get-index/get-index';

export interface ComboboxStore {
  dropdownOpened: boolean;
  openDropdown(): void;
  closeDropdown(): void;
  toggleDropdown(): void;

  selectedOptionIndex: number;
  selectOption(index: number): void;
  selectActiveOption(): string | null;
  selectNextOption(): string | null;
  selectPreviousOption(): string | null;
  resetSelectedOption(): void;
  clickSelectedOption(): void;

  listId: string | null;
  setListId(id: string): void;

  searchRef: React.MutableRefObject<HTMLInputElement | null>;
  focusSearchInput(): void;

  targetRef: React.MutableRefObject<HTMLElement | null>;
  focusTarget(): void;
}

interface UseComboboxOptions {
  /** Default value for `dropdownOpened`, `false` by default */
  defaultOpened?: boolean;

  /** Controlled `dropdownOpened` state */
  opened?: boolean;

  /** Called when `dropdownOpened` state changes */
  onOpenedChange?(opened: boolean): void;

  /** Called when dropdown closes */
  onDropdownClose?(): void;

  /** Called when dropdown opens */
  onDropdownOpen?(): void;

  /** Determines whether arrow key presses should loop though items (first to last and last to first), `true` by default */
  loop?: boolean;
}

export function useCombobox({
  defaultOpened,
  opened,
  onOpenedChange,
  onDropdownClose,
  onDropdownOpen,
  loop = true,
}: UseComboboxOptions = {}): ComboboxStore {
  const [dropdownOpened, setDropdownOpened] = useUncontrolled({
    value: opened,
    defaultValue: defaultOpened,
    finalValue: false,
    onChange: onOpenedChange,
  });

  const listId = useRef<string | null>(null);
  const selectedOptionIndex = useRef<number>(-1);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const targetRef = useRef<HTMLElement | null>(null);
  const focusSearchTimeout = useRef<number>(-1);
  const focusTargetTimeout = useRef<number>(-1);

  const openDropdown = () => {
    if (!dropdownOpened) {
      setDropdownOpened(true);
      onDropdownOpen?.();
    }
  };

  const closeDropdown = () => {
    if (dropdownOpened) {
      setDropdownOpened(false);
      onDropdownClose?.();
    }
  };

  const toggleDropdown = () => {
    if (dropdownOpened) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  const clearSelectedItem = () => {
    const selected = document.querySelector(`#${listId.current} [data-combobox-selected]`);
    selected?.removeAttribute('data-combobox-selected');
    selected?.removeAttribute('aria-selected');
  };

  const selectOption = (index: number) => {
    const list = document.getElementById(listId.current!);
    const items = list?.querySelectorAll('[data-combobox-option]');
    const nextIndex = index >= items!.length ? 0 : index < 0 ? items!.length - 1 : index;
    selectedOptionIndex.current = nextIndex;

    if (items?.[nextIndex] && !items[nextIndex].hasAttribute('data-combobox-disabled')) {
      clearSelectedItem();
      items[nextIndex].setAttribute('data-combobox-selected', 'true');
      items[nextIndex].setAttribute('aria-selected', 'true');
      items[nextIndex].scrollIntoView({ block: 'nearest' });
      return items[nextIndex].id;
    }

    return null;
  };

  const selectActiveOption = () => {
    const activeOption = document.querySelector<HTMLDivElement>(
      `#${listId.current} [data-combobox-active]`
    );

    if (activeOption) {
      const items = document.querySelectorAll<HTMLDivElement>(
        `#${listId.current} [data-combobox-option]`
      );
      const index = Array.from(items).findIndex((option) => option === activeOption);
      return selectOption(index);
    }

    return selectOption(0);
  };

  const selectNextOption = () =>
    selectOption(
      getNextIndex(
        selectedOptionIndex.current,
        document.querySelectorAll<HTMLDivElement>(`#${listId.current} [data-combobox-option]`),
        loop
      )
    );

  const selectPreviousOption = () =>
    selectOption(
      getPreviousIndex(
        selectedOptionIndex.current,
        document.querySelectorAll<HTMLDivElement>(`#${listId.current} [data-combobox-option]`),
        loop
      )
    );

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

  const focusSearchInput = () => {
    focusSearchTimeout.current = window.setTimeout(() => searchRef.current!.focus(), 0);
  };

  const focusTarget = () => {
    focusTargetTimeout.current = window.setTimeout(() => targetRef.current!.focus(), 0);
  };

  useEffect(
    () => () => {
      window.clearTimeout(focusSearchTimeout.current);
      window.clearTimeout(focusTargetTimeout.current);
    },
    []
  );

  return {
    dropdownOpened,
    openDropdown,
    closeDropdown,
    toggleDropdown,

    selectedOptionIndex: selectedOptionIndex.current,
    selectOption,
    selectActiveOption,
    selectNextOption,
    selectPreviousOption,
    resetSelectedOption,

    listId: listId.current,
    setListId,
    clickSelectedOption,

    searchRef,
    focusSearchInput,

    targetRef,
    focusTarget,
  };
}
