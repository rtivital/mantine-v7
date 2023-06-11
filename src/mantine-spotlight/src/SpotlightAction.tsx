import React, { useEffect, useId } from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
  UnstyledButton,
} from '@mantine/core';
import classes from './Spotlight.module.css';
import { useSpotlightContext } from './Spotlight.context';
import { spotlightActions } from './spotlight.store';

export type SpotlightActionStylesNames = 'root';

export interface SpotlightActionProps
  extends BoxProps,
    StylesApiProps<SpotlightActionFactory>,
    ElementProps<'button'> {
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

export type SpotlightActionFactory = Factory<{
  props: SpotlightActionProps;
  ref: HTMLButtonElement;
  stylesNames: SpotlightActionStylesNames;
  compound: true;
}>;

const defaultProps: Partial<SpotlightActionProps> = {
  dimmedSections: true,
};

export const SpotlightAction = factory<SpotlightActionFactory>((props, ref) => {
  const {
    className,
    style,
    classNames,
    styles,
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

  useEffect(() => removeAction, []);

  if (!shouldRender) {
    removeAction();
    return null;
  }

  const stylesApi = { classNames, styles };

  return (
    <UnstyledButton
      ref={ref}
      data-action
      {...ctx.getStyles('action', { className, style, ...stylesApi })}
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
              {...ctx.getStyles('actionSection', stylesApi)}
            >
              {leftSection}
            </Box>
          )}

          <span {...ctx.getStyles('actionBody', stylesApi)}>
            <span {...ctx.getStyles('actionLabel', stylesApi)}>{label}</span>
            <span {...ctx.getStyles('actionDescription', stylesApi)}>{description}</span>
          </span>

          {rightSection && (
            <Box
              component="span"
              mod={{ position: 'right', dimmed: dimmedSections }}
              {...ctx.getStyles('actionSection', stylesApi)}
            >
              {rightSection}
            </Box>
          )}
        </>
      )}
    </UnstyledButton>
  );
});

SpotlightAction.classes = classes;
SpotlightAction.displayName = '@mantine/spotlight/SpotlightAction';
