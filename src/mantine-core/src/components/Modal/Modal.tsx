import React from 'react';
import {
  Box,
  StylesApiProps,
  factory,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
} from '../../core';
import {
  ModalBaseProps,
  ModalBaseStylesNames,
  ModalBaseOverlayProps,
  ModalBaseCloseButtonProps,
} from '../ModalBase';
import classes from './Modal.module.css';

export type ModalStylesNames = ModalBaseStylesNames;
export type ModalVariant = string;
export type ModalCssVariables = {
  root: '--test';
};

export interface ModalProps extends ModalBaseProps, StylesApiProps<ModalFactory> {
  /** Modal title */
  title?: React.ReactNode;

  /** Determines whether overlay should be rendered, `true` by default */
  withOverlay?: boolean;

  /** Props passed down to the `Overlay` component, use to configure opacity, `background-color`, styles and other properties */
  overlayProps?: ModalBaseOverlayProps;

  /** Modal content */
  children?: React.ReactNode;

  /** Determines whether close button should be rendered, `true` by default */
  withCloseButton?: boolean;

  /** Props passed down to the close button */
  closeButtonProps?: ModalBaseCloseButtonProps;
}

export type ModalFactory = Factory<{
  props: ModalProps;
  ref: HTMLDivElement;
  stylesNames: ModalStylesNames;
  vars: ModalCssVariables;
  variant: ModalVariant;
}>;

const defaultProps: Partial<ModalProps> = {};

const varsResolver = createVarsResolver<ModalFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const Modal = factory<ModalFactory>((_props, ref) => {
  const props = useProps('Modal', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const getStyles = useStyles<ModalFactory>({
    name: 'Modal',
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

  return <Box ref={ref} {...getStyles('root')} {...others} />;
});

Modal.classes = classes;
Modal.displayName = '@mantine/core/Modal';
