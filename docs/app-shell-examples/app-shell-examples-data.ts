import { APP_SHELL_EXAMPLES_COMPONENTS } from './examples';

export interface AppShellExample {
  /** Demo id, based on it component will render component on the page */
  id: keyof typeof APP_SHELL_EXAMPLES_COMPONENTS;

  /** Name used in search */
  name: string;

  /** Short component description, used in search */
  description: string;

  /** Full component description, displayed on the page */
  fullDescription?: string;
}

export const APP_SHELL_EXAMPLES_DATA: AppShellExample[] = [
  {
    id: 'BasicAppShell',
    name: 'Basic app shell',
    description: 'App shell with Header and Navbar',
  },
];
