import React, { useRef } from 'react';
import {
  Transition as _Transition,
  TransitionGroup,
  TransitionStatus,
} from 'react-transition-group';
import { useForceUpdate, useDidUpdate, useReducedMotion } from '@mantine/hooks';
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
  PortalProps,
  getDefaultZIndex,
  useMantineTheme,
  Portal,
  rem,
} from '@mantine/core';
import {
  useNotifications,
  NotificationsStore,
  notificationsStore,
  hideNotification,
} from './notifications.store';
import { NotificationContainer } from './NotificationContainer';
import { getNotificationStateStyles } from './get-notification-state-styles';
import classes from './Notifications.module.css';

const Transition: any = _Transition;

export type NotificationsStylesNames = 'root' | 'notification';
export type NotificationsVariant = string;
export type NotificationsCssVariables = {
  root:
    | '--notifications-z-index'
    | '--notifications-top'
    | '--notifications-right'
    | '--notifications-left'
    | '--notifications-left'
    | '--notifications-transform'
    | '--notifications-container-width';
};

export interface NotificationsProps
  extends BoxProps,
    StylesApiProps<NotificationsFactory>,
    ElementProps<'div'> {
  /** Notifications position, `'bottom-right'` by default */
  position?:
    | 'top-left'
    | 'top-right'
    | 'top-center'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center';

  /** Auto close timeout for all notifications in ms, `false` to disable auto close, can be overwritten for individual notifications in `notifications.show` function, `4000` by defualt */
  autoClose?: number | false;

  /** Notification transition duration in ms, `250` by default */
  transitionDuration?: number;

  /** Notification width, cannot exceed 100%, `440` by default */
  containerWidth?: number | string;

  /** Notification `max-height`, used for transitions, `200` by default */
  notificationMaxHeight?: number | string;

  /** Maximum number of notifications displayed at a time, other new notifications will be added to queue, `5` by default */
  limit?: number;

  /** Notifications container z-index, `400` by default */
  zIndex?: React.CSSProperties['zIndex'];

  /** Props passed down to the `Portal` component */
  portalProps?: Omit<PortalProps, 'children'>;

  /** Store for notifications state, can be used to create multiple instances of notifications system in your application */
  store?: NotificationsStore;
}

export type NotificationsFactory = Factory<{
  props: NotificationsProps;
  ref: HTMLDivElement;
  stylesNames: NotificationsStylesNames;
  vars: NotificationsCssVariables;
  variant: NotificationsVariant;
}>;

const defaultProps: Partial<NotificationsProps> = {
  position: 'bottom-right',
  autoClose: 4000,
  transitionDuration: 250,
  containerWidth: 440,
  notificationMaxHeight: 200,
  limit: 5,
  zIndex: getDefaultZIndex('overlay'),
  store: notificationsStore,
};

const varsResolver = createVarsResolver<NotificationsFactory>(
  (_, { zIndex, position, containerWidth }) => {
    const [vertical, horizontal] = position!.split('-');

    return {
      root: {
        '--notifications-z-index': zIndex?.toString(),
        '--notifications-top': vertical === 'top' ? 'var(--mantine-spacing-md)' : undefined,
        '--notifications-bottom': vertical === 'bottom' ? 'var(--mantine-spacing-md)' : undefined,
        '--notifications-left':
          horizontal === 'left'
            ? 'var(--mantine-spacing-md)'
            : horizontal === 'center'
            ? '50%'
            : undefined,
        '--notifications-right': horizontal === 'right' ? 'var(--mantine-spacing-md)' : undefined,
        '--notifications-transform': horizontal === 'center' ? 'translateX(-50%)' : undefined,
        '--notifications-container-width': rem(containerWidth),
      },
    };
  }
);

export const Notifications = factory<NotificationsFactory>((_props, ref) => {
  const props = useProps('Notifications', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    position,
    autoClose,
    transitionDuration,
    containerWidth,
    notificationMaxHeight,
    limit,
    zIndex,
    store,
    portalProps,
    ...others
  } = props;

  const theme = useMantineTheme();
  const notifications = useNotifications(store);
  const forceUpdate = useForceUpdate();
  const shouldReduceMotion = useReducedMotion();
  const refs = useRef<Record<string, HTMLDivElement>>({});
  const previousLength = useRef<number>(0);

  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const duration = reduceMotion ? 1 : transitionDuration;

  const getStyles = useStyles<NotificationsFactory>({
    name: 'Notifications',
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

  useDidUpdate(() => {
    if (notifications.notifications.length > previousLength.current) {
      setTimeout(() => forceUpdate(), 0);
    }
    previousLength.current = notifications.notifications.length;
  }, [notifications]);

  const items = notifications.notifications.map((notification) => (
    <Transition
      key={notification.id}
      timeout={duration}
      onEnter={() => refs.current[notification.id!].offsetHeight}
      nodeRef={{ current: refs.current[notification.id!] }}
    >
      {(state: TransitionStatus) => (
        <NotificationContainer
          {...getStyles('notification', {
            style: getNotificationStateStyles({
              state,
              position,
              transitionDuration: duration!,
              maxHeight: notificationMaxHeight!,
            }),
          })}
          ref={(node) => {
            refs.current[notification.id!] = node!;
          }}
          data={notification}
          onHide={(id) => hideNotification(id, store)}
          autoClose={autoClose!}
        />
      )}
    </Transition>
  ));

  return (
    <Portal {...portalProps}>
      <Box
        {...getStyles('root')}
        ref={ref}
        // sx={{
        //   maxWidth: containerWidth,
        //   ...getPositionStyles(positioning, theme.spacing.md),
        // }}
        {...others}
      >
        <TransitionGroup>{items}</TransitionGroup>
      </Box>
    </Portal>
  );
});

Notifications.displayName = '@mantine/core/Notifications';
