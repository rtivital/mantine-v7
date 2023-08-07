import userEvent from '@testing-library/user-event';

// Shared tests
import { itIsPolymorphic } from './shared/it-is-polymorphic';
import { itRendersChildren } from './shared/it-renders-children';
import { itSupportsClassName } from './shared/it-supports-classname';
import { itSupportsOthers } from './shared/it-supports-others';
import { itSupportsRef } from './shared/it-supports-ref';
import { itSupportsStyle } from './shared/it-supports-style';
import { itSupportsFocusEvents } from './shared/it-supports-focus-events';
import { itSupportsProviderDefaultProps } from './shared/it-supports-provider-default-props';
import { itSupportsStylesApi } from './shared/it-supports-style-api';
import { itThrowsContextError } from './shared/it-throws-context-error';
import { itSupportsVariant } from './shared/it-supports-variant';
import { itSupportsSize } from './shared/it-supports-size';
import { itHasExtend } from './shared/it-has-extend';
import { itHasClasses } from './shared/it-has-classes';
import { itSupportsHiddenVisible } from './shared/it-supports-hidden-visible';

// Style props tests
import { itSupportsMarginsProps } from './style-props/it-supports-margins-props';
import { itSupportsPaddingsProps } from './style-props/it-supports-paddings-props';
import { itSupportsColorsProps } from './style-props/it-supports-colors-props';
import { itSupportsFontsProps } from './style-props/it-supports-fonts-props';
import { itSupportsSizeProps } from './style-props/it-supports-size-props';
import { itSupportsBackgroundProps } from './style-props/it-supports-background-props';
import { itSupportsPositionProps } from './style-props/it-supports-position-props';

// Inputs tests
import { itSupportsInputSections } from './inputs/it-supports-input-sections';
import { itSupportsInputContainer } from './inputs/it-supports-input-container';
import { itSupportsInputAsterisk } from './inputs/it-supports-input-asterisk';
import { itSupportsInputWrapperOrder } from './inputs/it-supports-input-wrapper-order';
import { itSupportsInputWrapperElements } from './inputs/it-supports-input-wrapper-elements';
import { itHandlesCheckboxState } from './inputs/it-handles-checkbox-state';
import { itConnectsLabelAndInput } from './inputs/it-connects-label-and-input';

// Dates
import { itSupportsWeekdaysProps } from './dates/it-supports-weekdays-props';
import { itSupportsMonthProps } from './dates/it-supports-month-props';
import { itSupportsHeaderProps } from './dates/it-support-header-props';
import { itSupportsGetDayRef } from './dates/it-supports-get-day-ref';
import { itSupportsWithNextPrevious } from './dates/it-supports-with-next-previous';
import { itSupportsOnDayKeydown } from './dates/it-supports-on-day-keydown';
import { itSupportsGetControlRef } from './dates/it-supports-get-control-ref';
import { itSupportsMonthsListProps } from './dates/it-supports-months-list-props';
import { itSupportsYearsListProps } from './dates/it-supports-years-list-props';
import { itSupportsOnControlKeydown } from './dates/it-supports-on-control-key-down';
import { itSupportsOnControlClick } from './dates/it-supports-on-control-click';
import { itSupportsOnDayClick } from './dates/it-supports-on-day-click';
import { itHandlesMonthKeyboardEvents } from './dates/it-handles-month-keyboard-events';
import { itHandlesControlsKeyboardEvents } from './dates/it-handles-controls-keyboard-events';
import { itSupportsOnControlMouseEnter } from './dates/it-supports-on-control-mouse-enter';
import { itSupportsClearableProps } from './dates/it-supports-clearable-props';
import { itSupportsDateInputProps } from './dates/it-supports-date-input-props';

// High level tests
import { itSupportsSystemProps } from './it-supports-system-props';
import { itSupportsInputWrapperProps } from './inputs/it-supports-input-wrapper-props';
import { itSupportsInputProps } from './inputs/it-supports-input-props';
import { axe } from './axe';

export const tests = {
  itIsPolymorphic,
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStyle,
  itSupportsFocusEvents,
  itSupportsProviderDefaultProps,
  itSupportsStylesApi,
  itThrowsContextError,
  itSupportsVariant,
  itSupportsSize,
  itHasExtend,
  itHasClasses,
  itSupportsHiddenVisible,

  itSupportsMarginsProps,
  itSupportsPaddingsProps,
  itSupportsColorsProps,
  itSupportsFontsProps,
  itSupportsSizeProps,
  itSupportsBackgroundProps,
  itSupportsPositionProps,

  itSupportsInputSections,
  itSupportsInputContainer,
  itSupportsInputAsterisk,
  itSupportsInputWrapperOrder,
  itSupportsInputWrapperElements,
  itHandlesCheckboxState,
  itConnectsLabelAndInput,

  itSupportsSystemProps,
  itSupportsInputWrapperProps,
  itSupportsInputProps,

  dates: {
    itSupportsWeekdaysProps,
    itSupportsMonthProps,
    itSupportsHeaderProps,
    itSupportsGetDayRef,
    itSupportsWithNextPrevious,
    itSupportsOnDayKeydown,
    itSupportsGetControlRef,
    itSupportsMonthsListProps,
    itSupportsYearsListProps,
    itSupportsOnControlKeydown,
    itSupportsOnControlClick,
    itSupportsOnDayClick,
    itHandlesMonthKeyboardEvents,
    itHandlesControlsKeyboardEvents,
    itSupportsOnControlMouseEnter,
    itSupportsClearableProps,
    itSupportsDateInputProps,
  },

  axe,
};

export { render, renderWithAct } from './render';
export { wait } from './wait';
export { patchConsoleError } from './patch-console-error';
export { createContextContainer } from './create-context-container';
export { inputDefaultProps, inputStylesApiSelectors } from './inputs/inputs-test-props';
export * from './queries';
export * from './dates/date-input-test-helpers';
export { screen } from '@testing-library/react';
export { expectWeekdaysNames } from './dates/it-supports-weekdays-props';
export { userEvent };
