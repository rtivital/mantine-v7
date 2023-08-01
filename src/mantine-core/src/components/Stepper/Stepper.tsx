import React, { Children, cloneElement } from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  MantineColor,
  MantineSpacing,
  MantineSize,
  MantineRadius,
  getThemeColor,
} from '../../core';
import { StepperStep } from './StepperStep/StepperStep';
import { StepCompleted } from './StepperCompleted/StepperCompleted';
import { StepperProvider } from './Stepper.context';
import classes from './Stepper.module.css';

export type StepFragmentComponent = React.FC<{ step: number }>;

export type StepperStylesNames =
  | 'root'
  | 'separator'
  | 'steps'
  | 'content'
  | 'step'
  | 'stepLoader'
  | 'verticalSeparator'
  | 'stepWrapper'
  | 'stepIcon'
  | 'stepCompletedIcon'
  | 'stepBody'
  | 'stepLabel'
  | 'stepDescription';
export type StepperVariant = string;
export type StepperCssVariables = {
  root: '--step-color';
};

export interface StepperProps
  extends BoxProps,
    StylesApiProps<StepperFactory>,
    ElementProps<'div'> {
  /** <Stepper.Step /> components */
  children: React.ReactNode;

  /** Called when step is clicked */
  onStepClick?(stepIndex: number): void;

  /** Index of the active step */
  active: number;

  /** Step icon, default value is step index + 1 */
  icon?: React.ReactNode | StepFragmentComponent;

  /** Step icon displayed when step is completed, check icon by default */
  completedIcon?: React.ReactNode | StepFragmentComponent;

  /** Step icon displayed when step is in progress, default value is step index + 1 */
  progressIcon?: React.ReactNode | StepFragmentComponent;

  /** Key of `theme.colors` or any valid CSS color, controls colors of active and progress steps, `theme.primaryColor` by default */
  color?: MantineColor;

  /** Controls size of the step icon, by default icon size is inferred from `size` prop */
  iconSize?: number | string;

  /** Key of `theme.spacing` or any valid CSS value to set `padding-top` of the content */
  contentPadding?: MantineSpacing | (string & {}) | number;

  /** Stepper orientation, `'horizontal'` by default */
  orientation?: 'vertical' | 'horizontal';

  /** Icon position relative to the step body, `'left'` by default */
  iconPosition?: 'right' | 'left';

  /** Controls size of various Stepper elements */
  size?: MantineSize;

  /** Key of `theme.radius` or any valid CSS value to set steps border-radius, `"xl"` by default */
  radius?: MantineRadius | (string & {}) | number;

  /** Determines whether next steps can be selected, `true` by default **/
  allowNextStepsSelect?: boolean;
}

export type StepperFactory = Factory<{
  props: StepperProps;
  ref: HTMLDivElement;
  stylesNames: StepperStylesNames;
  vars: StepperCssVariables;
  variant: StepperVariant;
  staticComponents: {
    Step: typeof StepperStep;
    Completed: typeof StepCompleted;
  };
}>;

const defaultProps: Partial<StepperProps> = {
  contentPadding: 'md',
  size: 'md',
  radius: 'xl',
  orientation: 'horizontal',
  iconPosition: 'left',
  allowNextStepsSelect: true,
};

const varsResolver = createVarsResolver<StepperFactory>((theme, { color }) => ({
  root: {
    '--step-color': getThemeColor(color, theme),
  },
}));

export const Stepper = factory<StepperFactory>((_props, ref) => {
  const props = useProps('Stepper', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    onStepClick,
    active,
    icon,
    completedIcon,
    progressIcon,
    color,
    iconSize,
    contentPadding,
    orientation,
    iconPosition,
    size,
    radius,
    allowNextStepsSelect,
    ...others
  } = props;

  const getStyles = useStyles<StepperFactory>({
    name: 'Stepper',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const convertedChildren = Children.toArray(children) as React.ReactElement[];
  const _children = convertedChildren.filter((child) => child.type !== StepCompleted);
  const completedStep = convertedChildren.find((item) => item.type === StepCompleted);

  const items = _children.reduce<React.ReactElement[]>((acc, item, index) => {
    const state =
      active === index ? 'stepProgress' : active > index ? 'stepCompleted' : 'stepInactive';

    const shouldAllowSelect = () => {
      if (typeof onStepClick !== 'function') {
        return false;
      }

      if (typeof item.props.allowStepSelect === 'boolean') {
        return item.props.allowStepSelect;
      }

      return state === 'stepCompleted' || allowNextStepsSelect;
    };

    const isStepSelectionEnabled = shouldAllowSelect();

    acc.push(
      cloneElement(item, {
        icon: item.props.icon || icon || index + 1,
        key: index,
        step: index,
        state,
        onClick: () => isStepSelectionEnabled && onStepClick?.(index),
        allowStepClick: isStepSelectionEnabled,
        completedIcon: item.props.completedIcon || completedIcon,
        progressIcon: item.props.progressIcon || progressIcon,
        color: item.props.color || color,
        iconSize,
        size,
        radius,
        classNames,
        styles,
        iconPosition: item.props.iconPosition || iconPosition,
        orientation,
        unstyled,
      })
    );

    if (orientation === 'horizontal' && index !== _children.length - 1) {
      acc.push(
        <div
          {...getStyles('separator')}
          data-active={index < active || undefined}
          key={`separator-${index}`}
        />
      );
    }

    return acc;
  }, []);

  const stepContent = _children[active]?.props?.children;
  const completedContent = completedStep?.props?.children;
  const content = active > _children.length - 1 ? completedContent : stepContent;

  return (
    <StepperProvider value={{ getStyles }}>
      <Box {...getStyles('root')} ref={ref} {...others}>
        <div {...getStyles('steps')}>{items}</div>
        {content && <div {...getStyles('content')}>{content}</div>}
      </Box>
    </StepperProvider>
  );
});

Stepper.classes = classes;
Stepper.displayName = '@mantine/core/Stepper';
Stepper.Completed = StepCompleted;
Stepper.Step = StepperStep;
