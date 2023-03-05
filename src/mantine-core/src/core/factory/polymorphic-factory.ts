import { forwardRef } from 'react';
import { ExtendPayload, StaticComponents, ThemeExtend, identity } from './factory';

type ExtendedProps<Props = {}, OverrideProps = {}> = OverrideProps &
  Omit<Props, keyof OverrideProps>;

type ElementType = keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;

type PropsOf<C extends ElementType> = JSX.LibraryManagedAttributes<
  C,
  React.ComponentPropsWithoutRef<C>
>;

type ComponentProp<C> = {
  component?: C;
};

type InheritedProps<C extends ElementType, Props = {}> = ExtendedProps<PropsOf<C>, Props>;

export type PolymorphicRef<C> = C extends React.ElementType
  ? React.ComponentPropsWithRef<C>['ref']
  : never;

export type PolymorphicComponentProps<C, Props = {}> = C extends React.ElementType
  ? InheritedProps<C, Props & ComponentProp<C>> & { ref?: PolymorphicRef<C> }
  : Props & { component: React.ElementType };

export interface ExtendPolymorphicPayload extends ExtendPayload {
  defaultComponent: any;
  defaultRef: any;
}

export function polymorphicFactory<Payload extends ExtendPolymorphicPayload>(
  ui: React.ForwardRefRenderFunction<Payload['defaultRef'], Payload['props']>
) {
  type ComponentProps<C> = PolymorphicComponentProps<C, Payload['props']>;

  type _PolymorphicComponent = <C = Payload['defaultComponent']>(
    props: ComponentProps<C>
  ) => React.ReactElement;

  type ComponentProperties = Omit<React.FunctionComponent<ComponentProps<any>>, never>;

  type PolymorphicComponent = _PolymorphicComponent &
    ComponentProperties &
    ThemeExtend<Payload> &
    StaticComponents<Payload['staticComponents']>;

  const Component = forwardRef(ui) as unknown as PolymorphicComponent;

  Component.extend = identity as any;

  return Component as PolymorphicComponent;
}
