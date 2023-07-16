import { BasicAppShell } from './BasicAppShell/BasicAppShell';
import { ResponsiveSizes } from './ResponsiveSizes/ResponsiveSizes';
import { MobileNavbar } from './MobileNavbar/MobileNavbar';

import BasicAppShellCode from './BasicAppShell/code.json';
import ResponsiveSizesCode from './ResponsiveSizes/code.json';
import MobileNavbarCode from './MobileNavbar/code.json';

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
  ResponsiveSizes: {
    component: ResponsiveSizes,
    code: ResponsiveSizesCode,
  },
  MobileNavbar: {
    component: MobileNavbar,
    code: MobileNavbarCode,
  },
} satisfies Record<string, AppShellExampleComponent>;

export type AppShellExampleId = keyof typeof APP_SHELL_EXAMPLES_COMPONENTS;
