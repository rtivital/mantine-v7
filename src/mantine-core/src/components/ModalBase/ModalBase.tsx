import React, { useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { useFocusReturn, useId, useWindowEvent } from '@mantine/hooks';
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
  MantineSpacing,
  MantineSize,
  MantineShadow,
  getSpacing,
  getDefaultZIndex,
  getShadow,
  ClassNamesArray,
} from '../../core';
import { TransitionOverride } from '../Transition';
import { PortalProps, OptionalPortal } from '../Portal';
import { ModalBaseProvider } from './ModalBase.context';
import { ModalBaseCloseButton } from './ModalBaseCloseButton/ModalBaseCloseButton';
import { ModalBaseOverlay } from './ModalBaseOverlay/ModalBaseOverlay';
import { ModalBaseContent } from './ModalBaseContent/ModalBaseContent';
import { ModalBaseHeader } from './ModalBaseHeader/ModalBaseHeader';
import { ModalBaseTitle } from './ModalBaseTitle/ModalBaseTitle';
import { ModalBaseBody } from './ModalBaseBody/ModalBaseBody';
import { NativeScrollArea } from './NativeScrollArea/NativeScrollArea';
import { useLockScroll } from './use-lock-scroll';
import classes from './ModalBase.module.css';

export type ModalBaseStylesNames =
  | 'root'
  | 'content'
  | 'close'
  | 'overlay'
  | 'inner'
  | 'header'
  | 'title'
  | 'body';
export type ModalBaseVariant = string;
export type ModalBaseCssVariables = {
  root: '--mb-padding' | '--mb-z-index' | '--mb-shadow';
};

export interface ModalBaseSettings
  extends BoxProps,
    StylesApiProps<ModalBaseFactory>,
    ElementProps<'div'> {
  /** If set modal/drawer will not be unmounted from the DOM when it is hidden, display: none styles will be added instead, `false` by default */
  keepMounted?: boolean;

  /** Determines whether modal/drawer is opened */
  opened: boolean;

  /** Called when modal/drawer is closed */
  onClose(): void;

  /** Modal/drawer content */
  children?: React.ReactNode;

  /** Determines whether the modal/drawer should be closed when user clicks on the overlay, `true` by default */
  closeOnClickOutside?: boolean;

  /** Props added to the `Transition` component that used to animate overlay and body, use to configure duration and animation type, `{ duration: 200, transition: 'pop' }` by default */
  transitionProps?: TransitionOverride;

  /** Determines whether the component should be rendered inside `Portal`, `true` by default */
  withinPortal?: boolean;

  /** Props passed down to the Portal component when `withinPortal` is set */
  portalProps?: Omit<PortalProps, 'children'>;

  /** Determines whether scroll should be locked when `opened={true}`, `true` by default */
  lockScroll?: boolean;

  /** Determines whether focus should be trapped, `true` by default */
  trapFocus?: boolean;

  /** `z-index` CSS property of the root element, `200` by default */
  zIndex?: React.CSSProperties['zIndex'];

  /** Key of `theme.spacing` or any valid CSS value to set content, header and footer padding, `'md'` by default */
  padding?: MantineSpacing | (string & {}) | number;

  /** Id used to connect modal/drawer with body and title */
  id?: string;

  /** Determines whether focus should be returned to the last active element when `onClose` is called, `true` by default */
  returnFocus?: boolean;

  /** Determines whether `onClose` should be called when user presses the escape key, `true` by default */
  closeOnEscape?: boolean;

  /** Controls content width, `'md'` by default */
  size?: MantineSize | (string & {}) | number;

  /** Key of `theme.shadows` or any valid css box-shadow value, 'xl' by default */
  shadow?: MantineShadow | (string & {});
}

export interface ModalBaseProps extends Omit<ModalBaseSettings, 'classNames'> {
  __staticSelector: string;
  classNames?: ClassNamesArray<ModalBaseFactory>;
}

export type ModalBaseFactory = Factory<{
  props: ModalBaseProps;
  ref: HTMLDivElement;
  stylesNames: ModalBaseStylesNames;
  vars: ModalBaseCssVariables;
  variant: ModalBaseVariant;
  staticComponents: {
    CloseButton: typeof ModalBaseCloseButton;
    Overlay: typeof ModalBaseOverlay;
    Content: typeof ModalBaseContent;
    Header: typeof ModalBaseHeader;
    Title: typeof ModalBaseTitle;
    Body: typeof ModalBaseBody;
    NativeScrollArea: typeof NativeScrollArea;
  };
}>;

const defaultProps: Partial<ModalBaseProps> = {
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: getDefaultZIndex('modal'),
  padding: 'md',
  size: 'md',
  shadow: 'xl',
};

const varsResolver = createVarsResolver<ModalBaseFactory>((_, { padding, shadow, zIndex }) => ({
  root: {
    '--mb-padding': getSpacing(padding),
    '--mb-shadow': getShadow(shadow),
    '--mb-z-index': zIndex?.toString() || getDefaultZIndex('modal').toString(),
  },
}));

export const ModalBase = factory<ModalBaseFactory>((_props, ref) => {
  const props = useProps('ModalBase', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    id,
    transitionProps,
    opened,
    closeOnClickOutside,
    closeOnEscape,
    onClose,
    trapFocus,
    returnFocus,
    __staticSelector,
    portalProps,
    withinPortal,
    shadow,
    zIndex,
    padding,
    keepMounted,
    lockScroll,
    children,
    ...others
  } = props;

  const _id = useId(id);
  const [titleMounted, setTitleMounted] = useState(false);
  const [bodyMounted, setBodyMounted] = useState(false);

  const transitionDuration =
    typeof transitionProps?.duration === 'number' ? transitionProps?.duration : 200;

  const shouldLockScroll = useLockScroll({ opened, transitionDuration });

  useWindowEvent('keydown', (event) => {
    if (!trapFocus && event.key === 'Escape' && closeOnEscape) {
      onClose();
    }
  });

  useFocusReturn({ opened, shouldReturnFocus: trapFocus && returnFocus });

  const getStyles = useStyles<ModalBaseFactory>({
    name: 'ModalBase',
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

  return (
    <OptionalPortal {...portalProps} withinPortal={withinPortal}>
      <ModalBaseProvider
        value={{
          __staticSelector,
          opened,
          onClose,
          closeOnClickOutside,
          transitionProps: { ...transitionProps, duration: transitionDuration, keepMounted },
          id: _id,
          getTitleId: () => `${_id}-title`,
          getBodyId: () => `${_id}-body`,
          titleMounted,
          bodyMounted,
          setTitleMounted,
          setBodyMounted,
          trapFocus,
          closeOnEscape,
          getStyles,
          zIndex,
        }}
      >
        <RemoveScroll enabled={shouldLockScroll && lockScroll}>
          <Box {...getStyles('root')} ref={ref} {...others}>
            {children}
          </Box>
        </RemoveScroll>
      </ModalBaseProvider>
    </OptionalPortal>
  );
});

ModalBase.classes = classes;
ModalBase.displayName = '@mantine/core/ModalBase';
ModalBase.CloseButton = ModalBaseCloseButton;
ModalBase.Overlay = ModalBaseOverlay;
ModalBase.Content = ModalBaseContent;
ModalBase.Header = ModalBaseHeader;
ModalBase.Title = ModalBaseTitle;
ModalBase.Body = ModalBaseBody;
ModalBase.NativeScrollArea = NativeScrollArea;
