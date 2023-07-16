import { BasicAppShell } from './BasicAppShell/BasicAppShell';
import { ResponsiveSizes } from './ResponsiveSizes/ResponsiveSizes';
import { MobileNavbar } from './MobileNavbar/MobileNavbar';
import { FullLayout } from './FullLayout/FullLayout';
import { AltLayout } from './AltLayout/AltLayout';
import { CollapseDesktop } from './CollapseDesktop/CollapseDesktop';

import BasicAppShellCode from './BasicAppShell/code.json';
import ResponsiveSizesCode from './ResponsiveSizes/code.json';
import MobileNavbarCode from './MobileNavbar/code.json';
import FullLayoutCode from './FullLayout/code.json';
import AltLayoutCode from './AltLayout/code.json';
import CollapseDesktopCode from './CollapseDesktop/code.json';

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
  FullLayout: {
    component: FullLayout,
    code: FullLayoutCode,
  },
  AltLayout: {
    component: AltLayout,
    code: AltLayoutCode,
  },
  CollapseDesktop: {
    component: CollapseDesktop,
    code: CollapseDesktopCode,
  },
} satisfies Record<string, AppShellExampleComponent>;

export type AppShellExampleId = keyof typeof APP_SHELL_EXAMPLES_COMPONENTS;
