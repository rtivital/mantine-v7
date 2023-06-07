import { createStore, useStore, MantineStore } from '@mantine/store';

export interface SpotlightState {
  opened: boolean;
}

export type SpotlightStore = MantineStore<SpotlightState>;

export const createSpotlightStore = () => createStore<SpotlightState>({ opened: true });
export const spotlightStore = createSpotlightStore();
export const useSpotlight = (store: SpotlightStore = spotlightStore) => useStore(store);

export function openSpotlight(store: SpotlightStore = spotlightStore) {
  store.setState({ opened: true });
}

export function closeSpotlight(store: SpotlightStore = spotlightStore) {
  store.setState({ opened: false });
}

export function toggleSpotlight(store: SpotlightStore = spotlightStore) {
  const state = store.getState();
  store.setState({ opened: !state.opened });
}

export const spotlight = {
  open: openSpotlight,
  close: closeSpotlight,
  toggle: toggleSpotlight,
};
