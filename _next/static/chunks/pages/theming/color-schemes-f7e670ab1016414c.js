(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2109],{70591:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theming/color-schemes",function(){return o(7073)}])},7073:function(e,n,o){"use strict";o.r(n);var r=o(85893),t=o(11151),c=o(34940),a=o(25263),l=o(76382),s=o(74445);let i=(0,c.A)(a.us.ColorSchemes);function h(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",pre:"pre",blockquote:"blockquote",strong:"strong"},(0,t.ah)(),e.components),{Demo:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"color-schemes",children:"Color schemes"}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/theming/mantine-provider/",children:"MantineProvider"})," component manages color scheme context in your application.\nYou can configure default color scheme value with ",(0,r.jsx)(n.code,{children:"defaultColorScheme"})," prop, possible values are ",(0,r.jsx)(n.code,{children:"light"}),",\n",(0,r.jsx)(n.code,{children:"dark"})," and ",(0,r.jsx)(n.code,{children:"auto"})," (system color scheme is used). Default value is ",(0,r.jsx)(n.code,{children:"auto"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider defaultColorScheme=\"dark\">\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"data-mantine-color-scheme-attribute",children:"data-mantine-color-scheme attribute"}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.a,{href:"/theming/mantine-provider/",children:"MantineProvider"})," is mounted it sets ",(0,r.jsx)(n.code,{children:"data-mantine-color-scheme"}),"\nattribute on ",(0,r.jsx)(n.code,{children:"<html />"})," element to the value that user has selected previously or to the value of ",(0,r.jsx)(n.code,{children:"defaultColorScheme"})," prop.\n",(0,r.jsx)(n.code,{children:"data-mantine-color-scheme"})," attribute is used in all components styles to determine which colors should component use."]}),"\n",(0,r.jsx)(n.h2,{id:"use-mantine-color-scheme-hook",children:"use-mantine-color-scheme hook"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"useMantineColorScheme"})," hook can be used to get and set current color scheme value:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function useMantineColorScheme(): {\n  /** Current color scheme value */\n  colorScheme: 'dark' | 'light' | 'auto';\n\n  /** Sets colors scheme to given value */\n  setColorScheme: (colorScheme: 'dark' | 'light' | 'auto') => void;\n\n  /** Clears color scheme value from storage and sets it to `defaultColorScheme` */\n  clearColorScheme: () => void;\n};\n"})}),"\n",(0,r.jsx)(o,{data:l.U}),"\n",(0,r.jsx)(n.h2,{id:"use-computed-color-scheme-hook",children:"use-computed-color-scheme hook"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"useComputedColorScheme"})," returns computed color scheme value, it returns either ",(0,r.jsx)(n.code,{children:"light"})," or ",(0,r.jsx)(n.code,{children:"dark"}),".\nIt can be used to implement color scheme toggle logic:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core';\n\nfunction Demo() {\n  // -> colorScheme is 'auto' | 'light' | 'dark'\n  const { colorScheme, setColorScheme } = useMantineColorScheme();\n\n  // -> computedColorScheme is 'light' | 'dark'\n  const computedColorScheme = useComputedColorScheme(colorScheme);\n\n  // Incorrect color scheme toggle implementation\n  // If colorScheme is 'auto', then it is not possible to\n  // change color scheme correctly in all cases:\n  // 'auto' can mean both light and dark\n  const toggleColorScheme = () => {\n    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');\n  };\n\n  // Correct color scheme toggle implementation\n  // computedColorScheme is always either 'light' or 'dark'\n  const toggleColorScheme = () => {\n    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');\n  };\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"color-scheme-value-caveats",children:"Color scheme value caveats"}),"\n",(0,r.jsx)(n.p,{children:"Color scheme value by default is stored in local storage, and its value is saved in state\nbefore component is mounted to avoid flash of inaccurate color scheme. This means that\ncolor scheme value can be different on client and server, as server does not have access\nto local storage and always uses default value."}),"\n",(0,r.jsxs)(n.p,{children:["If you have server side rendering in your application (for example if you use ",(0,r.jsx)(n.a,{href:"/guides/next",children:"Next.js"})," or ",(0,r.jsx)(n.a,{href:"/guides/remix",children:"Remix"}),"), then you cannot use ",(0,r.jsx)(n.code,{children:"colorScheme"}),"\nvalue in your application to avoid hydration issues. Instead you can use ",(0,r.jsx)(n.code,{children:"dark"})," and ",(0,r.jsx)(n.code,{children:"light"}),"\nmixins from ",(0,r.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"})," to generate styles that will\nhide elements based on color scheme value:"]}),"\n",(0,r.jsx)(o,{data:s.k}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"colorScheme for client only applications"})}),"\n",(0,r.jsxs)(n.p,{children:["You can safely use ",(0,r.jsx)(n.code,{children:"colorScheme"})," value in client only applications (for example Vite or create-react-app applications).\nIn this case, there is no hydration, and thus hydration error cannot occur."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"colorschemescript",children:"ColorSchemeScript"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ColorSchemeScript"})," component renders script tag that sets ",(0,r.jsx)(n.code,{children:"data-mantine-color-scheme"})," attribute\non ",(0,r.jsx)(n.code,{children:"<html />"})," element to user selected value or to ",(0,r.jsx)(n.code,{children:"defaultColorScheme"})," prop value before\nhydration. It is used to avoid flash of inaccurate color scheme in server side rendered applications,\nfor example ",(0,r.jsx)(n.a,{href:"/guides/next",children:"Next.js"})," or ",(0,r.jsx)(n.a,{href:"/guides/remix",children:"Remix"}),". Follows framework specific guides\nto learn where to render ",(0,r.jsx)(n.code,{children:"ColorSchemeScript"})," component."]}),"\n",(0,r.jsxs)(n.p,{children:["You can add any additional props to ",(0,r.jsx)(n.code,{children:"<script />"})," tag generated by ",(0,r.jsx)(n.code,{children:"ColorSchemeScript"})," component,\nfor example, you can add ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce",children:"nonce"})," attribute:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { ColorSchemeScript } from '@mantine/core';\n\nfunction Demo() {\n  return <ColorSchemeScript nonce=\"8IBTHwOdqNKAWeKl7plt8g==\" />;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"color-scheme-manager",children:"Color scheme manager"}),"\n",(0,r.jsx)(n.p,{children:"By default, color scheme value is stored in local storage, but you can implement your own\ncolor scheme manager to store value in any other external storage."}),"\n",(0,r.jsx)(n.p,{children:"Color scheme manager must have the following methods:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"interface MantineColorSchemeManager {\n  /** Function to retrieve color scheme value from external storage, for example window.localStorage */\n  get(defaultValue: MantineColorScheme): MantineColorScheme;\n\n  /** Function to set color scheme value in external storage, for example window.localStorage */\n  set(value: MantineColorScheme): void;\n\n  /** Function to subscribe to color scheme changes triggered by external events */\n  subscribe(onUpdate: (colorScheme: MantineColorScheme) => void): void;\n\n  /** Function to unsubscribe from color scheme changes triggered by external events */\n  unsubscribe(): void;\n\n  /** Function to clear value from external storage */\n  clear(): void;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Usually it is better to wrap color scheme manager in a creator function to provide a way to\nconfigure it. Default local storage based color scheme manager example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { MantineColorScheme, MantineColorSchemeManager, isMantineColorScheme } from '@mantine/core';\n\nexport interface LocalStorageColorSchemeManagerOptions {\n  /** Local storage key used to retrieve value with `localStorage.getItem(key)`, `mantine-color-scheme` by default */\n  key?: string;\n}\n\nexport function localStorageColorSchemeManager({\n  key = 'mantine-color-scheme',\n}: LocalStorageColorSchemeManagerOptions = {}): MantineColorSchemeManager {\n  let handleStorageEvent: (event: StorageEvent) => void;\n\n  return {\n    get: (defaultValue) => {\n      if (typeof window === 'undefined') {\n        return defaultValue;\n      }\n\n      try {\n        return (window.localStorage.getItem(key) as MantineColorScheme) || defaultValue;\n      } catch {\n        return defaultValue;\n      }\n    },\n\n    set: (value) => {\n      try {\n        window.localStorage.setItem(key, value);\n      } catch (error) {\n        // eslint-disable-next-line no-console\n        console.warn(\n          '[@mantine/core] Local storage color scheme manager was unable to save color scheme.',\n          error\n        );\n      }\n    },\n\n    subscribe: (onUpdate) => {\n      handleStorageEvent = (event) => {\n        if (event.storageArea === window.localStorage && event.key === key) {\n          isMantineColorScheme(event.newValue) && onUpdate(event.newValue);\n        }\n      };\n\n      window.addEventListener('storage', handleStorageEvent);\n    },\n\n    unsubscribe: () => {\n      window.removeEventListener('storage', handleStorageEvent);\n    },\n\n    clear: () => {\n      window.localStorage.removeItem(key);\n    },\n  };\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then custom color scheme manager can be passed to ",(0,r.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { localStorageColorSchemeManager } from './localStorageColorSchemeManager';\n\nconst colorSchemeManager = localStorageColorSchemeManager({ key: 'my-color-scheme' });\n\nfunction Demo() {\n  return (\n    <MantineProvider colorSchemeManager={colorSchemeManager}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(i,Object.assign({},e,{children:(0,r.jsx)(h,e)}))}},76382:function(e,n,o){"use strict";o.d(n,{U:function(){return s}});var r=o(67294),t=o(18297),c=o(74378),a=o(43406);let l=`
import { useMantineColorScheme, Button, Group } from '@mantine/core';

function Demo() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  return (
    <Group>
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
      <Button onClick={clearColorScheme}>Clear</Button>
    </Group>
  );
}
`,s={type:"code",component:function(){let{setColorScheme:e,clearColorScheme:n}=(0,t.X)();return r.createElement(c.Z,null,r.createElement(a.z,{onClick:()=>e("light")},"Light"),r.createElement(a.z,{onClick:()=>e("dark")},"Dark"),r.createElement(a.z,{onClick:()=>e("auto")},"Auto"),r.createElement(a.z,{onClick:n},"Clear"))},centered:!0,code:l}},74445:function(e,n,o){"use strict";o.d(n,{k:function(){return u}});var r=o(67294),t=o(38944),c=o(61736),a=o(11541),l=o(18297),s=o(86186),i=o(80194),h={icon:"mantine-dRAgl7-",dark:"mantine-8SeTy2A",light:"mantine-Fq-223G"};let d=`
import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import cx from 'clsx';
import classes from './Demo.module.css';

function Demo() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}
`,m=`
.icon {
  width: rem(22px);
  height: rem(22px);
}

.dark {
  @mixin dark {
    display: none;
  }

  @mixin light {
    display: block;
  }
}

.light {
  @mixin light {
    display: none;
  }

  @mixin dark {
    display: block;
  }
}
`,u={type:"code",component:function(){let{setColorScheme:e}=(0,l.X)(),n=(0,s.l)("light",{getInitialValueInEffect:!0});return r.createElement(i.A,{onClick:()=>e("light"===n?"dark":"light"),variant:"default",size:"xl","aria-label":"Toggle color scheme"},r.createElement(c.Z,{className:(0,t.Z)(h.icon,h.light),stroke:1.5}),r.createElement(a.Z,{className:(0,t.Z)(h.icon,h.dark),stroke:1.5}))},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:d},{fileName:"Demo.module.css",language:"css",code:m}]}}},function(e){e.O(0,[5664,9341,4940,9774,2888,179],function(){return e(e.s=70591)}),_N_E=e.O()}]);