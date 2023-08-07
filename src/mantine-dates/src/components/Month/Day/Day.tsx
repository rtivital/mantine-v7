import React from 'react';
import {
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
  MantineRadius,
  MantineSize,
  UnstyledButton,
} from '@mantine/core';
import dayjs from 'dayjs';
import { useMonthContext } from '../Month.context';

export interface DayProps
  extends BoxProps,
    StylesApiProps<DayFactory>,
    ElementProps<'button', 'type'> {
  __staticSelector?: string;

  /** Determines which element should be used as root, `'button'` by default, `'div'` if static prop is set */
  static?: boolean;

  /** Date that should be displayed */
  date: Date;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `theme.defaultRadius` by default */
  radius?: MantineRadius | (string & {}) | number;

  /** Control width and height of the day, `'sm'` by default */
  size?: MantineSize;

  /** Determines whether the day should be considered to be a weekend, `false` by default */
  weekend?: boolean;

  /** Determines whether the day is outside of the current month, `false` by default */
  outside?: boolean;

  /** Determines whether the day is selected, `false` by default */
  selected?: boolean;

  /** Determines whether the day should not de displayed, `false` by default */
  hidden?: boolean;

  /** Determines whether the day is selected in range, `false` by default */
  inRange?: boolean;

  /** Determines whether the day is first in range selection, `false` by default */
  firstInRange?: boolean;

  /** Determines whether the day is last in range selection, `false` by default */
  lastInRange?: boolean;

  /** Controls day value rendering */
  renderDay?(date: Date): React.ReactNode;
}

export type DayFactory = Factory<{
  props: DayProps;
  ref: HTMLButtonElement;
  compound: true;
}>;

const defaultProps: Partial<DayProps> = {
  tabIndex: 0,
  size: 'sm',
};

export const Day = factory<DayFactory>((_props, ref) => {
  const props = useProps('Day', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    date,
    radius,
    disabled,
    __staticSelector,
    weekend,
    outside,
    selected,
    renderDay,
    inRange,
    firstInRange,
    lastInRange,
    hidden,
    static: isStatic,
    variant,
    size,
    ...others
  } = props;

  const ctx = useMonthContext();

  return (
    <UnstyledButton<any>
      {...ctx.getStyles('day', { className, style })}
      component={isStatic ? 'div' : 'button'}
      ref={ref}
      disabled={disabled}
      data-today={dayjs(date).isSame(new Date(), 'day') || undefined}
      data-hidden={hidden || undefined}
      data-disabled={disabled || undefined}
      data-weekend={(!disabled && !outside && weekend) || undefined}
      data-outside={(!disabled && outside) || undefined}
      data-selected={(!disabled && selected) || undefined}
      data-in-range={(inRange && !disabled) || undefined}
      data-first-in-range={(firstInRange && !disabled) || undefined}
      data-last-in-range={(lastInRange && !disabled) || undefined}
      data-static={isStatic || undefined}
      unstyled={unstyled}
      {...others}
    >
      {renderDay?.(date) || date.getDate()}
    </UnstyledButton>
  );
});

Day.displayName = '@mantine/dates/Day';
