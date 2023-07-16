import { BasicAppShell } from './BasicAppShell/BasicAppShell';

import BasicAppShellCode from './BasicAppShell/code.json';

interface AppShellExampleComponent {
  component: () => JSX.Element;
  code: {
    fileName: string;
    language: string;
    code: string;
  }[];
}

export const APP_SHELL_EXAMPLES_COMPONENTS = {
  BasicAppShell: {
    component: BasicAppShell,
    code: BasicAppShellCode,
  },
} satisfies Record<string, AppShellExampleComponent>;

export type AppShellExampleId = keyof typeof APP_SHELL_EXAMPLES_COMPONENTS;
