import React, { forwardRef, useEffect, useId } from 'react';
import { Box, UnstyledButton, BoxProps, ElementProps, useProps } from '@mantine/core';
import { useSpotlightContext } from './Spotlight.context';
import { spotlightActions } from './spotlight.store';

export interface SpotlightActionProps extends BoxProps, ElementProps<'button'> {
  /** Action label, pass string to use in default filter */
  label?: React.ReactNode;

  /** Action description, pass string to use in default filter */
  description?: React.ReactNode;

  /** Section displayed on the left side of the label, for example, icon */
  leftSection?: React.ReactNode;

  /** Section displayed on the right side of the label, for example, hotkey */
  rightSection?: React.ReactNode;

  /** Children override default action elements, if passed, label, description and sections are hidden */
  children?: React.ReactNode;

  /** Determines whether left and right sections should have dimmed styles, `true` by default */
  dimmedSections?: boolean;
}

const defaultProps: Partial<SpotlightActionProps> = {
  dimmedSections: true,
};

export const SpotlightAction = forwardRef<HTMLButtonElement, SpotlightActionProps>((props, ref) => {
  const {
    className,
    style,
    id,
    description,
    label,
    leftSection,
    rightSection,
    children,
    dimmedSections,
    ...others
  } = useProps('SpotlightAction', defaultProps, props);

  const ctx = useSpotlightContext();
  const generatedId = useId();
  const actionId = id || generatedId;
  const shouldRender = ctx.filter(props);
  const removeAction = spotlightActions.registerAction(actionId, ctx.store);

  useEffect(
    () => () => {
      removeAction();
    },
    []
  );

  if (!shouldRender) {
    removeAction();
    return null;
  }

  return (
    <UnstyledButton
      ref={ref}
      data-action
      {...ctx.getStyles('action', { className, style })}
      id={actionId}
      {...others}
      onMouseDown={(event) => event.preventDefault()}
      tabIndex={-1}
    >
      {children || (
        <>
          {leftSection && (
            <Box
              component="span"
              mod={{ position: 'left', dimmed: dimmedSections }}
              {...ctx.getStyles('actionSection')}
            >
              {leftSection}
            </Box>
          )}

          <span {...ctx.getStyles('actionBody')}>
            <span {...ctx.getStyles('actionLabel')}>{label}</span>
            <span {...ctx.getStyles('actionDescription')}>{description}</span>
          </span>

          {rightSection && (
            <Box
              component="span"
              mod={{ position: 'right', dimmed: dimmedSections }}
              {...ctx.getStyles('actionSection')}
            >
              {rightSection}
            </Box>
          )}
        </>
      )}
    </UnstyledButton>
  );
});
