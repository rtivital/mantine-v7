import type { EmptyObject } from 'type-fest';
import type { FactoryPayload } from '@mantine/core';

export interface Modifier<StylesNames extends string> {
  modifier: string;
  selector: StylesNames | StylesNames[];
  condition?: string;
  value?: string;
}

export interface Selectors<Factory extends FactoryPayload> {
  selectors: Factory['stylesNames'] extends string ? Record<Factory['stylesNames'], string> : never;
}

export interface Params<Factory extends FactoryPayload> {
  params: Factory['stylesParams'] extends Record<infer Param, any> ? Param[] : never;
}

export interface Vars<Factory extends FactoryPayload> {
  vars: Factory['vars'] extends string ? Record<Factory['vars'], string> : never;
}

export interface Modifiers<Factory extends FactoryPayload> {
  modifiers?: Factory['stylesNames'] extends string ? Modifier<Factory['stylesNames']>[] : never;
}

export type StylesApiData<Factory extends FactoryPayload> = (Factory['stylesNames'] extends string
  ? Selectors<Factory>
  : EmptyObject) &
  (Factory['stylesParams'] extends Record<string, any> ? Params<Factory> : EmptyObject) &
  (Factory['vars'] extends string ? Vars<Factory> : EmptyObject) &
  (Factory['stylesNames'] extends string ? Modifiers<Factory> : EmptyObject);
