import { createStore, useStore, MantineStore } from '@mantine/store';

export interface SpotlightState {
  opened: boolean;
  selected: number;
}

export type SpotlightStore = MantineStore<SpotlightState>;

export const createSpotlightStore = () =>
  createStore<SpotlightState>({ opened: true, selected: -1 });
export const spotlightStore = createSpotlightStore();
export const useSpotlight = (store: SpotlightStore = spotlightStore) => useStore(store);

export function updateSpotlightState(
  update: (state: SpotlightState) => Partial<SpotlightState>,
  store: SpotlightStore = spotlightStore
) {
  const state = store.getState();
  spotlightStore.setState({ ...state, ...update(store.getState()) });
}

export function openSpotlight(store: SpotlightStore = spotlightStore) {
  updateSpotlightState(() => ({ opened: true }), store);
}

export function closeSpotlight(store: SpotlightStore = spotlightStore) {
  updateSpotlightState(() => ({ opened: false }), store);
}

export function toggleSpotlight(store: SpotlightStore = spotlightStore) {
  updateSpotlightState((state) => ({ opened: !state.opened }), store);
}

export function setSelected(index: number, store: SpotlightStore = spotlightStore) {
  store.updateState((state) => ({ ...state, selected: index }));
}

export const spotlight = {
  open: openSpotlight,
  close: closeSpotlight,
  toggle: toggleSpotlight,
  updateState: updateSpotlightState,
};
