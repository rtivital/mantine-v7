import { useEffect, useRef, useCallback } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { getPreviousIndex, getNextIndex, getFirstIndex } from './get-index/get-index';

export type ComboboxDropdownEventSource = 'keyboard' | 'mouse' | 'unknown';

export interface ComboboxStore {
  dropdownOpened: boolean;
  openDropdown(eventSource?: ComboboxDropdownEventSource): void;
  closeDropdown(eventSource?: ComboboxDropdownEventSource): void;
  toggleDropdown(eventSource?: ComboboxDropdownEventSource): void;

  selectedOptionIndex: number;
  selectOption(index: number): void;
  selectActiveOption(): string | null;
  selectFirstOption(): string | null;
  selectNextOption(): string | null;
  selectPreviousOption(): string | null;
  resetSelectedOption(): void;
  clickSelectedOption(): void;
  updateSelectedOptionIndex(target?: 'active' | 'selected'): void;

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

  /** Called when dropdown closes with event source: keyboard, mouse or unknown */
  onDropdownClose?(eventSource: ComboboxDropdownEventSource): void;

  /** Called when dropdown opens with event source: keyboard, mouse or unknown */
  onDropdownOpen?(eventSource: ComboboxDropdownEventSource): void;

  /** Determines whether arrow key presses should loop though items (first to last and last to first), `true` by default */
  loop?: boolean;

  /** `behavior` passed down to `element.scrollIntoView`, `'instant'` by default */
  scrollBehavior?: ScrollBehavior;
}

export function useCombobox({
  defaultOpened,
  opened,
  onOpenedChange,
  onDropdownClose,
  onDropdownOpen,
  loop = true,
  scrollBehavior = 'instant',
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
  const selectedIndexUpdateTimeout = useRef<number>(-1);

  const openDropdown: ComboboxStore['openDropdown'] = useCallback(
    (eventSource = 'unknown') => {
      if (!dropdownOpened) {
        setDropdownOpened(true);
        onDropdownOpen?.(eventSource);
      }
    },
    [setDropdownOpened, onDropdownOpen, dropdownOpened]
  );

  const closeDropdown: ComboboxStore['closeDropdown'] = useCallback(
    (eventSource = 'unknown') => {
      if (dropdownOpened) {
        setDropdownOpened(false);
        onDropdownClose?.(eventSource);
      }
    },
    [setDropdownOpened, onDropdownClose, dropdownOpened]
  );

  const toggleDropdown: ComboboxStore['toggleDropdown'] = useCallback(
    (eventSource = 'unknown') => {
      if (dropdownOpened) {
        closeDropdown(eventSource);
      } else {
        openDropdown(eventSource);
      }
    },
    [closeDropdown, openDropdown, dropdownOpened]
  );

  const clearSelectedItem = useCallback(() => {
    const selected = document.querySelector(`#${listId.current} [data-combobox-selected]`);
    selected?.removeAttribute('data-combobox-selected');
    selected?.removeAttribute('aria-selected');
  }, []);

  const selectOption = useCallback(
    (index: number) => {
      const list = document.getElementById(listId.current!);
      const items = list?.querySelectorAll('[data-combobox-option]');

      if (!items) {
        return null;
      }

      const nextIndex = index >= items!.length ? 0 : index < 0 ? items!.length - 1 : index;
      selectedOptionIndex.current = nextIndex;

      if (items?.[nextIndex] && !items[nextIndex].hasAttribute('data-combobox-disabled')) {
        clearSelectedItem();
        items[nextIndex].setAttribute('data-combobox-selected', 'true');
        items[nextIndex].setAttribute('aria-selected', 'true');
        items[nextIndex].scrollIntoView({ block: 'nearest', behavior: scrollBehavior });
        return items[nextIndex].id;
      }

      return null;
    },
    [scrollBehavior, clearSelectedItem]
  );

  const selectActiveOption = useCallback(() => {
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
  }, [selectOption]);

  const selectNextOption = useCallback(
    () =>
      selectOption(
        getNextIndex(
          selectedOptionIndex.current,
          document.querySelectorAll<HTMLDivElement>(`#${listId.current} [data-combobox-option]`),
          loop
        )
      ),
    [selectOption, loop]
  );

  const selectPreviousOption = useCallback(
    () =>
      selectOption(
        getPreviousIndex(
          selectedOptionIndex.current,
          document.querySelectorAll<HTMLDivElement>(`#${listId.current} [data-combobox-option]`),
          loop
        )
      ),
    [selectOption, loop]
  );

  const selectFirstOption = useCallback(
    () =>
      selectOption(
        getFirstIndex(
          document.querySelectorAll<HTMLDivElement>(`#${listId.current} [data-combobox-option]`)
        )
      ),
    [selectOption]
  );

  const updateSelectedOptionIndex = useCallback((target: 'active' | 'selected' = 'selected') => {
    selectedIndexUpdateTimeout.current = window.setTimeout(() => {
      const items = document.querySelectorAll<HTMLDivElement>(
        `#${listId.current} [data-combobox-option]`
      );
      const index = Array.from(items).findIndex((option) =>
        option.hasAttribute(`data-combobox-${target}`)
      );
      selectedOptionIndex.current = index;
    }, 0);
  }, []);

  const resetSelectedOption = useCallback(() => {
    selectedOptionIndex.current = -1;
    clearSelectedItem();
  }, [clearSelectedItem]);

  const clickSelectedOption = useCallback(() => {
    const items = document.querySelectorAll<HTMLDivElement>(
      `#${listId.current} [data-combobox-option]`
    );
    const item = items?.[selectedOptionIndex.current];
    item?.click();
  }, []);

  const setListId = useCallback((id: string) => {
    listId.current = id;
  }, []);

  const focusSearchInput = useCallback(() => {
    focusSearchTimeout.current = window.setTimeout(() => searchRef.current!.focus(), 0);
  }, []);

  const focusTarget = useCallback(() => {
    focusTargetTimeout.current = window.setTimeout(() => targetRef.current!.focus(), 0);
  }, []);

  useEffect(
    () => () => {
      window.clearTimeout(focusSearchTimeout.current);
      window.clearTimeout(focusTargetTimeout.current);
      window.clearTimeout(selectedIndexUpdateTimeout.current);
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
    selectFirstOption,
    selectActiveOption,
    selectNextOption,
    selectPreviousOption,
    resetSelectedOption,
    updateSelectedOptionIndex,

    listId: listId.current,
    setListId,
    clickSelectedOption,

    searchRef,
    focusSearchInput,

    targetRef,
    focusTarget,
  };
}
