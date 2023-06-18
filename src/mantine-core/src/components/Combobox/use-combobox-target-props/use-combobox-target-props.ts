import { useState } from 'react';
import { useComboboxContext } from '../Combobox.context';

interface UseComboboxTargetPropsInput {
  withAriaAttributes: boolean | undefined;
  withKeyboardNavigation: boolean | undefined;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement> | undefined;
}

export function useComboboxTargetProps({
  onKeyDown,
  withKeyboardNavigation,
  withAriaAttributes,
}: UseComboboxTargetPropsInput) {
  const ctx = useComboboxContext();
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event);

    if (withKeyboardNavigation) {
      if (event.nativeEvent.code === 'ArrowDown') {
        event.preventDefault();

        if (!ctx.store.dropdownOpened) {
          ctx.store.openDropdown();
          setSelectedOptionId(ctx.store.selectActiveOption());
        } else {
          setSelectedOptionId(ctx.store.selectNextOption());
        }
      }

      if (event.nativeEvent.code === 'ArrowUp') {
        event.preventDefault();

        if (!ctx.store.dropdownOpened) {
          ctx.store.openDropdown();
          setSelectedOptionId(ctx.store.selectActiveOption());
        } else {
          setSelectedOptionId(ctx.store.selectPreviousOption());
        }
      }

      if (event.nativeEvent.code === 'Enter') {
        if (ctx.store.dropdownOpened) {
          event.preventDefault();
          ctx.store.clickSelectedOption();
        }
      }

      if (event.nativeEvent.code === 'Escape') {
        ctx.store.closeDropdown();
      }
    }
  };

  const ariaAttributes = withAriaAttributes
    ? {
        'aria-haspopup': 'listbox',
        'aria-expanded': ctx.store.listId ? ctx.store.dropdownOpened : undefined,
        'aria-controls': ctx.store.listId,
        'aria-activedescendant': ctx.store.dropdownOpened
          ? selectedOptionId || undefined
          : undefined,
        autoComplete: 'off',
        'data-expanded': ctx.store.dropdownOpened ? true : undefined,
      }
    : {};

  return {
    ...ariaAttributes,
    onKeyDown: handleKeyDown,
  };
}
