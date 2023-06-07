import { createStore, useStore, MantineStore } from '@mantine/store';

export interface SpotlightState {
  opened: boolean;
  registeredActions: Set<string>;
}

export type SpotlightStore = MantineStore<SpotlightState>;

export const createSpotlightStore = () =>
  createStore<SpotlightState>({ opened: true, registeredActions: new Set() });
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

export const spotlight = {
  open: openSpotlight,
  close: closeSpotlight,
  toggle: toggleSpotlight,
  updateState: updateSpotlightState,
};
