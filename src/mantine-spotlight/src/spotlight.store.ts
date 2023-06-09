import { clamp } from '@mantine/hooks';
import { createStore, useStore, MantineStore } from '@mantine/store';

export interface SpotlightState {
  opened: boolean;
  selected: number;
  listId: string;
}

export type SpotlightStore = MantineStore<SpotlightState>;

export const createSpotlightStore = () =>
  createStore<SpotlightState>({ opened: true, selected: -1, listId: '' });
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

export function setSelectedAction(index: number, store: SpotlightStore = spotlightStore) {
  store.updateState((state) => ({ ...state, selected: index }));
}

export function setListId(id: string, store: SpotlightStore = spotlightStore) {
  store.updateState((state) => ({ ...state, listId: id }));
}

export function selectAction(index: number, store: SpotlightStore = spotlightStore) {
  const state = store.getState();
  const actionsList = document.getElementById(state.listId)!;
  const selected = actionsList.querySelector<HTMLButtonElement>('[data-selected]');
  const actions = actionsList.querySelectorAll<HTMLButtonElement>('[data-action]');

  const selectedIndex = clamp(index, 0, actions.length - 1);
  selected?.removeAttribute('data-selected');
  actions[selectedIndex]?.scrollIntoView({ block: 'nearest' });
  actions[selectedIndex]?.setAttribute('data-selected', 'true');
  setSelectedAction(selectedIndex, store);

  return selectedIndex;
}

export function selectNextAction(store: SpotlightStore = spotlightStore) {
  return selectAction(store.getState().selected + 1, store);
}

export function selectPreviousAction(store: SpotlightStore = spotlightStore) {
  return selectAction(store.getState().selected - 1, store);
}

export function triggerSelectedAction(store: SpotlightStore = spotlightStore) {
  const state = store.getState();
  const selected = document.querySelector<HTMLButtonElement>(`#${state.listId} [data-selected]`);
  selected?.click();
}

export const spotlight = {
  open: openSpotlight,
  close: closeSpotlight,
  toggle: toggleSpotlight,
  updateState: updateSpotlightState,
  setSelectedAction,
  setListId,
  selectAction,
  selectNextAction,
  selectPreviousAction,
  triggerSelectedAction,
};
