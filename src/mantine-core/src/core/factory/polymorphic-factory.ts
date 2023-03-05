import { forwardRef } from 'react';
import { ExtendPayload, StaticComponents, ThemeExtend, identity } from './factory';
import { PolymorphicComponentProps } from './create-polymorphic-component';

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
