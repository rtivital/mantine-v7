(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3544],{33507:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var t=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var t=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var t=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var t=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var t=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var t=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},79153:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var t=(0,r(30853).Z)("search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]])},62640:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var t=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},84744:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-0-0",function(){return r(63775)}])},63775:function(e,n,r){"use strict";r.r(n);var t=r(85893),o=r(11151),s=r(34940),i=r(25263),l=r(43406),a=r(76382),c=r(64465),d=r(67977),h=r(39442),p=r(72423),m=r(10460),u=r(75646),x=r(82236),f=r(30527),j=r(60261),g=r(71193),y=r(8162);let v=(0,s.A)(i.us.Changelog700);function b(e){let n=Object.assign({h2:"h2",p:"p",a:"a",code:"code",pre:"pre",ul:"ul",li:"li"},(0,o.ah)(),e.components),{Demo:r,DataTable:s}=n;return s||w("DataTable",!0),r||w("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"migration-to-native-css",children:"Migration to native CSS"}),"\n",(0,t.jsxs)(n.p,{children:["Mantine no longer depends on ",(0,t.jsx)(n.a,{href:"https://emotion.sh/",children:"Emotion"})," for styles generation. All ",(0,t.jsx)(n.code,{children:"@mantine/*"}),"\npackages are now shipped with native CSS files which can be imported from ",(0,t.jsx)(n.code,{children:"@mantine/{package}/styles.css"}),",\nfor example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import '@mantine/core/styles.css';\n"})}),"\n",(0,t.jsx)(n.p,{children:"This change improves performance, reduces bundle size of the library and allows using Mantine\nin environments where CSS-in-JS is not supported (or supported with limitations), for example,\nNext.js app directory."}),"\n",(0,t.jsx)(n.p,{children:"Notable breaking changes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"createStyles"})," function is no longer available, use ",(0,t.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," or any other styling solution of your choice instead"]}),"\n",(0,t.jsxs)(n.li,{children:["Components no longer support ",(0,t.jsx)(n.code,{children:"sx"})," prop. You can use ",(0,t.jsx)(n.code,{children:"className"})," or ",(0,t.jsx)(n.code,{children:"style"})," props instead."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"styles"})," prop no longer supports nested selectors"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["It is now recommended to use ",(0,t.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," to style Mantine components.\nTo update your project to ",(0,t.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"}),"\nfollow the ",(0,t.jsx)(n.a,{href:"/guides/6x-to-7x",children:"6.x → 7.x migration guide"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"system-color-scheme-support",children:"System color scheme support"}),"\n",(0,t.jsxs)(n.p,{children:["All components now support system color scheme – when ",(0,t.jsx)(n.code,{children:"colorScheme"})," value is ",(0,t.jsx)(n.code,{children:"auto"}),",\ncomponents will use ",(0,t.jsx)(n.code,{children:"prefers-color-scheme"})," media query to determine if user prefers light or dark color scheme."]}),"\n",(0,t.jsx)(n.h2,{id:"built-in-color-scheme-manager",children:"Built-in color scheme manager"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," now comes with built-in color scheme manager.\nIt is no longer required to use any other components to setup color scheme logic.\nColor scheme can be changed with ",(0,t.jsx)(n.a,{href:"/theming/color-schemes#use-mantine-color-scheme-hook",children:"useMantineColorScheme hook"}),":"]}),"\n",(0,t.jsx)(r,{data:a.U}),"\n",(0,t.jsx)(n.h2,{id:"css-modules-and-postcss-preset",children:"CSS modules and PostCSS preset"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," is now the recommended way to style Mantine components,\nalthough it is not required – you can choose any other styling solution of your choice."]}),"\n",(0,t.jsxs)(n.p,{children:["It is also recommended to use ",(0,t.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),". It includes\nmixins and functions to simplify styling of Mantine components. ",(0,t.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),"\nis included in all templates."]}),"\n",(0,t.jsx)(n.h2,{id:"global-styles",children:"Global styles"}),"\n",(0,t.jsxs)(n.p,{children:["Mantine no longer includes normalize.css. Instead, it uses a bare minimum set of ",(0,t.jsx)(n.a,{href:"/styles/global-styles",children:"global styles"}),".\nThese styles are part of the ",(0,t.jsx)(n.code,{children:"@mantine/core"})," package and are applied automatically when you import\n",(0,t.jsx)(n.code,{children:"@mantine/core/styles.css"})," in your application. Note that these styles cannot be decoupled from the\nrest of the library."]}),"\n",(0,t.jsx)(n.h2,{id:"mantine-as-a-headless-ui-library",children:"Mantine as a headless UI library"}),"\n",(0,t.jsxs)(n.p,{children:["You can now use Mantine as a ",(0,t.jsx)(n.a,{href:"/styles/unstyled",children:"headless"})," library. To do that, just do not import\n",(0,t.jsx)(n.code,{children:"@mantine/*/styles.css"})," in your application. Then you will be able to apply styles with\n",(0,t.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"createtheme-function",children:"createTheme function"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"createTheme"})," function is a replacement for ",(0,t.jsx)(n.code,{children:"MantineThemeOverride"})," type. Use it to create a theme\noverride, it will give you autocomplete for all theme properties:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  fontFamily: 'sans-serif',\n  primaryColor: 'orange',\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"components-extend-functions",children:"Components extend functions"}),"\n",(0,t.jsxs)(n.p,{children:["All components now have static ",(0,t.jsx)(n.code,{children:"extend"})," function which allows getting autocomplete when customizing\n",(0,t.jsx)(n.a,{href:"/theming/default-props",children:"defaultProps"}),", ",(0,t.jsx)(n.a,{href:"/styles/styles-api",children:"classNames and styles"})," of the component\non ",(0,t.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { TextInput, MantineProvider, createTheme } from '@mantine/core';\nimport classes from './Demo.module.css';\n\nconst theme = createTheme({\n  components: {\n    TextInput: TextInput.extends({\n      styles: (theme, props) => ({\n        input: {\n          fontSize: props.size === 'compact' ? theme.fontSizes.sm : undefined,\n        }\n      })\n      classNames: {\n        root: classes.root,\n        input: classes.input,\n        label: classes.label,\n      },\n\n      defaultProps: {\n        size: 'compact',\n      },\n    }),\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"classnames-based-on-component-props",children:"classNames based on component props"}),"\n",(0,t.jsxs)(n.p,{children:["You can now get component props in ",(0,t.jsx)(n.a,{href:"/styles/styles-api",children:"classNames and styles"})," to conditionally apply styles.\nThis feature is a more powerful replacement for styles params."]}),"\n",(0,t.jsx)(r,{data:c.B}),"\n",(0,t.jsx)(n.h2,{id:"components-css-variables",children:"Components CSS variables"}),"\n",(0,t.jsxs)(n.p,{children:["You can now customize components ",(0,t.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"})," to change component styles based on its props.\nFor example, it can be used to add new ",(0,t.jsx)(n.a,{href:"/styles/variants-sizes",children:"sizes"}),":"]}),"\n",(0,t.jsx)(r,{data:d.g}),"\n",(0,t.jsx)(n.h2,{id:"new-variants-system",children:"New variants system"}),"\n",(0,t.jsxs)(n.p,{children:["All components now have ",(0,t.jsx)(n.code,{children:"data-variant"})," attribute on the root element, even if component does not have any predefined variants.\nYou can use it to apply styles to all components of the same type on ",(0,t.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,t.jsx)(r,{data:h.j}),"\n",(0,t.jsx)(n.h2,{id:"new-sizes-system",children:"New sizes system"}),"\n",(0,t.jsx)(n.p,{children:"There are multiple way to customize component sizes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["With ",(0,t.jsx)(n.code,{children:"data-size"})," attribute"]}),"\n",(0,t.jsxs)(n.li,{children:["With component ",(0,t.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"})]}),"\n",(0,t.jsxs)(n.li,{children:["With ",(0,t.jsx)(n.a,{href:"/styles/variants-sizes#sizes-with-static-css-variables",children:"static CSS variables"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Example of customizing ",(0,t.jsx)(n.a,{href:"/core/button",children:"Button"})," size with ",(0,t.jsx)(n.code,{children:"data-size"})," attribute:"]}),"\n",(0,t.jsx)(r,{data:p.R}),"\n",(0,t.jsx)(n.h2,{id:"themevariantcolorresolver",children:"theme.variantColorResolver"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/core/button",children:"Button"}),", ",(0,t.jsx)(n.a,{href:"/core/badge",children:"Badge"}),", ",(0,t.jsx)(n.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,t.jsx)(n.a,{href:"/core/theme-icon",children:"ThemeIcon"})," and other\ncomponents support custom variants with ",(0,t.jsx)(n.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"}),"\n– it supports both changing colors of existing variants and adding new variants."]}),"\n",(0,t.jsx)(r,{data:m.D}),"\n",(0,t.jsx)(n.h2,{id:"rem-units-scaling",children:"rem units scaling"}),"\n",(0,t.jsxs)(n.p,{children:["It is now possible to scale ",(0,t.jsx)(n.a,{href:"/styles/rem#rem-units-scaling",children:"rem"})," units. It is useful when you want to change\nfont-size of ",(0,t.jsx)(n.code,{children:"html"}),"/",(0,t.jsx)(n.code,{children:":root"})," element and preserve Mantine components sizes. For example, if you want to set ",(0,t.jsx)(n.code,{children:"html"})," font-size to ",(0,t.jsx)(n.code,{children:"10px"})," and scale Mantine components accordingly, you need\nto set ",(0,t.jsx)(n.code,{children:"scale"})," to ",(0,t.jsx)(n.code,{children:"1 / (10 / 16)"})," (16 – default font-size) = ",(0,t.jsx)(n.code,{children:"1 / 0.625"})," = ",(0,t.jsx)(n.code,{children:"1.6"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:":root {\n  font-size: 10px;\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider, createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  scale: 1.6,\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"color-prop-improvements",children:"color prop improvements"}),"\n",(0,t.jsxs)(n.p,{children:["All components that support ",(0,t.jsx)(n.code,{children:"color"})," prop now support the following color values:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Key of ",(0,t.jsx)(n.code,{children:"theme.colors"}),", for example, ",(0,t.jsx)(n.code,{children:"blue"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"theme.colors"})," index reference, for example, ",(0,t.jsx)(n.code,{children:"blue.5"})]}),"\n",(0,t.jsxs)(n.li,{children:["Any valid CSS color value, for example, ",(0,t.jsx)(n.code,{children:"#fff"}),", ",(0,t.jsx)(n.code,{children:"rgba(0, 0, 0, 0.5)"}),", ",(0,t.jsx)(n.code,{children:"hsl(0, 0%, 100%)"})]}),"\n"]}),"\n",(0,t.jsx)(r,{data:u.m}),"\n",(0,t.jsx)(n.h2,{id:"components-classes",children:"Components classes"}),"\n",(0,t.jsxs)(n.p,{children:["Classes of each component are now available in ",(0,t.jsx)(n.code,{children:"Component.classes"})," object. For example, you can\nfind ",(0,t.jsx)(n.a,{href:"/core/button",children:"Button"})," classes in ",(0,t.jsx)(n.code,{children:"Button.classes"}),":"]}),"\n",(0,t.jsx)(s,{head:["Key","Class"],data:Object.keys(l.z.classes).map(e=>[e,l.z.classes[e]])}),"\n",(0,t.jsx)(n.p,{children:"You can use these classes to create components with the same styles as Mantine components:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\nfunction Demo() {\n  return <button type=\"button\" className={Button.classes.root} />;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"theme-object-changes",children:"Theme object changes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"theme.lineHeight"})," is now ",(0,t.jsx)(n.code,{children:"theme.lineHeights"})," – it is now possible to specify multiple line heights. ",(0,t.jsx)(n.code,{children:"theme.lineHeights"})," values are used in ",(0,t.jsx)(n.a,{href:"/core/text",children:"Text"})," component."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"theme.colorScheme"})," is no longer available, use ",(0,t.jsx)(n.a,{href:"/theming/color-schemes#use-mantine-color-scheme-hook",children:"useMantineColorScheme"})," to get color scheme value"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"theme.dir"})," is no longer needed, direction is now managed by ",(0,t.jsx)(n.a,{href:"/styles/rtl",children:"DirectionProvider"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"theme.loader"})," was removed, you can now configure default loader with ",(0,t.jsx)(n.a,{href:"/theming/default-props",children:"default props"})," of ",(0,t.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"theme.transitionTimingFunction"})," was removed"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"theme.focusRingStyles"})," was replaced with ",(0,t.jsx)(n.code,{children:"theme.focusClassName"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"theme.activeStyles"})," was replaced with ",(0,t.jsx)(n.code,{children:"theme.activeClassName"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"theme.globalStyles"})," was removed"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"theme.fn"})," functions were removed, some of the functions are available as ",(0,t.jsx)(n.a,{href:"/styles/color-functions",children:"standalone utilities"})]}),"\n",(0,t.jsxs)(n.li,{children:["New ",(0,t.jsx)(n.a,{href:"/styles/rem#rem-units-scaling",children:"theme.scale"})," property controls rem units scaling"]}),"\n",(0,t.jsxs)(n.li,{children:["New ",(0,t.jsx)(n.code,{children:"theme.fontSmoothing"})," property determines whether font smoothing styles should be applied to the body element"]}),"\n",(0,t.jsxs)(n.li,{children:["New ",(0,t.jsx)(n.a,{href:"/theming/colors#colors-variant-resolver",children:"theme.variantColorResolver"})," property allows to customize component colors per variant"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"colors-generator",children:"Colors generator"}),"\n",(0,t.jsxs)(n.p,{children:["New ",(0,t.jsx)(n.a,{href:"/theming/colors#colors-generation",children:"@mantine/colors-generator"})," package is now available to generate\ncolor palettes based on single color value. It is also available as ",(0,t.jsx)(n.a,{href:"/colors-generator/",children:"online tool"}),".\nNote that it is usually better to generate colors in advance to avoid contrast issues."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { generateColors } from '@mantine/colors-generator';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        colors: {\n          'pale-blue': generateColors('#375EAC'),\n        },\n      }}\n    >\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"new-setup-for-rtl",children:"New setup for RTL"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@mantine/core"})," package now exports ",(0,t.jsx)(n.a,{href:"/styles/rtl",children:"DirectionProvider"})," component which should be used to configure direction of the application.\n",(0,t.jsx)(n.code,{children:"useDirection"})," hook can be used to toggle direction. All components now include RTL styles by default, it is no\nlonger required to setup additional plugins. See ",(0,t.jsx)(n.a,{href:"/styles/rtl",children:"RTL documentation"})," to learn more."]}),"\n",(0,t.jsx)(n.h2,{id:"react-18-only",children:"React 18+ only"}),"\n",(0,t.jsxs)(n.p,{children:["Starting from version 7.0 Mantine no longer supports older React versions. Minimum supported version is now React 18.\nIt is required because Mantine components now use ",(0,t.jsx)(n.a,{href:"https://react.dev/reference/react/useId",children:"useId"})," and ",(0,t.jsx)(n.a,{href:"https://react.dev/reference/react/useSyncExternalStore",children:"useSyncExternalStore"}),"\nhooks which are available only in React 18."]}),"\n",(0,t.jsx)(n.h2,{id:"loader-changes",children:"Loader changes"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component is now built with CSS only. This change improves performance and reduces\nHTML output of the component."]}),"\n",(0,t.jsx)(r,{data:x.g}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/theming/theme-object",children:"Theme"})," object no longer supports ",(0,t.jsx)(n.code,{children:"theme.loader"})," prop –\nit is also now possible to add custom loaders on ",(0,t.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," with ",(0,t.jsx)(n.a,{href:"/theming/default-props",children:"default prop"}),".\nSpecified ",(0,t.jsx)(n.a,{href:"/core/loader",children:"Loader"})," will be used in all components that use it under the hood (",(0,t.jsx)(n.a,{href:"/core/loading-overlay",children:"LoadingOverlay"}),", ",(0,t.jsx)(n.a,{href:"/core/button",children:"Button"}),", ",(0,t.jsx)(n.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,t.jsx)(n.a,{href:"/core/stepper",children:"Stepper"}),", etc.)."]}),"\n",(0,t.jsx)(r,{data:f.w}),"\n",(0,t.jsx)(n.h2,{id:"table-changes",children:"Table changes"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/core/table",children:"Table"})," component changes:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," support"]}),"\n",(0,t.jsxs)(n.li,{children:["It is now required to use compound components instead of elements: ",(0,t.jsx)(n.code,{children:"Table.Tr"}),", ",(0,t.jsx)(n.code,{children:"Table.Td"}),", etc."]}),"\n",(0,t.jsx)(n.li,{children:"It is now easier to override styles – all styles are added with classes instead of deeply nested selectors on root element"}),"\n",(0,t.jsxs)(n.li,{children:["New props: ",(0,t.jsx)(n.code,{children:"borderColor"}),", ",(0,t.jsx)(n.code,{children:"withRowBorders"}),", ",(0,t.jsx)(n.code,{children:"stripedColor"}),", ",(0,t.jsx)(n.code,{children:"highlightOnHoverColor"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"withBorder"})," prop was renamed to ",(0,t.jsx)(n.code,{children:"withTableBorder"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fontSize"})," prop was removed, use ",(0,t.jsx)(n.code,{children:"fz"})," ",(0,t.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})," instead"]}),"\n"]}),"\n",(0,t.jsx)(r,{data:j.j}),"\n",(0,t.jsx)(n.h2,{id:"group-changes",children:"Group changes"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/core/group",children:"Group"})," component changes:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"position"})," prop was renamed to ",(0,t.jsx)(n.code,{children:"justify"})," – it now supports all ",(0,t.jsx)(n.code,{children:"justify-content"})," values"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"noWrap"})," prop was replaced with ",(0,t.jsx)(n.code,{children:'wrap="nowrap"'}),", ",(0,t.jsx)(n.code,{children:"wrap"})," prop now supports all ",(0,t.jsx)(n.code,{children:"flex-wrap"})," values"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"spacing"})," prop was replaced with ",(0,t.jsx)(n.code,{children:"gap"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Group"})," now supports new ",(0,t.jsx)(n.code,{children:"preventGrowOverflow"})," prop which allows to customize how group items will behave when they grow larger than their dedicated space"]}),"\n"]}),"\n",(0,t.jsx)(r,{data:g.j}),"\n",(0,t.jsx)(n.h2,{id:"tabs-changes",children:"Tabs changes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Styles API selector ",(0,t.jsx)(n.code,{children:"tabsList"})," renamed to ",(0,t.jsx)(n.code,{children:"list"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"TabProps"})," type was renamed to ",(0,t.jsx)(n.code,{children:"TabsTabProps"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onTabChange"})," prop was renamed to ",(0,t.jsx)(n.code,{children:"onChange"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Tabs.List"})," ",(0,t.jsx)(n.code,{children:"position"})," prop was renamed to ",(0,t.jsx)(n.code,{children:"justify"}),", it now supports all ",(0,t.jsx)(n.code,{children:"justify-content"})," values"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"button-changes",children:"Button changes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"compact"})," prop was removed, use ",(0,t.jsx)(n.code,{children:'size="compact-XXX"'})," instead"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"leftIcon"})," and ",(0,t.jsx)(n.code,{children:"rightIcon"})," props were renamed to ",(0,t.jsx)(n.code,{children:"leftSection"})," and ",(0,t.jsx)(n.code,{children:"rightSection"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"uppercase"})," prop was removed, use ",(0,t.jsx)(n.code,{children:"tt"})," ",(0,t.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})," instead"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"loaderPosition"})," prop was removed, ",(0,t.jsx)(n.a,{href:"/core/loader",children:"Loader"})," is now always rendered on the center to prevent layout shifts"]}),"\n",(0,t.jsxs)(n.li,{children:["Styles API selectors were changed, see ",(0,t.jsx)(n.a,{href:"/core/button?t=styles-api",children:"Button Styles API"})," documentation for more details"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"mantineprism-deprecation",children:"@mantine/prism deprecation"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@mantine/prism"})," package was deprecated in favor of ",(0,t.jsx)(n.code,{children:"@mantine/code-highlight"})," package. ",(0,t.jsx)(n.a,{href:"/others/code-highlight",children:"New package"})," uses ",(0,t.jsx)(n.a,{href:"https://highlightjs.org/",children:"highlight.js"})," instead of ",(0,t.jsx)(n.a,{href:"https://prismjs.com/",children:"Prism"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"fieldset-component",children:"Fieldset component"}),"\n",(0,t.jsxs)(n.p,{children:["New ",(0,t.jsx)(n.a,{href:"/core/fieldset",children:"Fieldset"})," component:"]}),"\n",(0,t.jsx)(r,{data:y.j}),"\n",(0,t.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["New ",(0,t.jsx)(n.a,{href:"/core/visually-hidden",children:"VisuallyHidden"})," component"]}),"\n",(0,t.jsxs)(n.li,{children:["New ",(0,t.jsx)(n.a,{href:"/core/action-icon#actionicongroup",children:"ActionIcon.Group"})," component"]}),"\n",(0,t.jsx)(n.li,{children:"All transitions are now disabled during color scheme change"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"theme.respectReducedMotion"})," is now set to ",(0,t.jsx)(n.code,{children:"false"})," by default – it caused a lot of confusion for users who did not know about it"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/others/notifications",children:"Notifications system"})," now exports ",(0,t.jsx)(n.code,{children:"notifications.updateState"})," function to update notifications state with a given callback"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/blockquote",children:"Blockquote"})," components has new design"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/breadcrumbs",children:"Breadcrumbs"})," component now supports ",(0,t.jsx)(n.code,{children:"separatorMargin"})," prop"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"})," component now supports ",(0,t.jsx)(n.code,{children:"mainAxis"})," and ",(0,t.jsx)(n.code,{children:"crossAxis"})," offset configuration"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/slider",children:"Slider and RangeSlider"})," components ",(0,t.jsx)(n.code,{children:"radius"})," prop now affects thumb as well as track"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/native-select/",children:"NativeSelect"})," component now supports setting options as ",(0,t.jsx)(n.code,{children:"children"})," and options groups"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/anchor",children:"Anchor"})," component now supports ",(0,t.jsx)(n.code,{children:"underline"})," prop which lets you configure how link will be underlined: ",(0,t.jsx)(n.code,{children:"hover"})," (default), ",(0,t.jsx)(n.code,{children:"always"})," or ",(0,t.jsx)(n.code,{children:"never"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/affix",children:"Affix"})," component no longer supports ",(0,t.jsx)(n.code,{children:"target"})," prop, use ",(0,t.jsx)(n.code,{children:"portalProps"})," instead"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/container",children:"Container"})," component no longer supports ",(0,t.jsx)(n.code,{children:"sizes"})," prop, use ",(0,t.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"})," to customize sizes on ",(0,t.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," instead"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"useComponentDefaultProps"})," hook was renamed to ",(0,t.jsx)(n.a,{href:"theming/default-props#useprops-hook",children:"useProps"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"withinPortal"})," prop is now true by default in all overlay components (",(0,t.jsx)(n.a,{href:"/core/popover",children:"Popover"}),", ",(0,t.jsx)(n.a,{href:"/core/hover-card",children:"HoverCard"}),", ",(0,t.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"}),", etc.)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"AlphaSlider"})," and ",(0,t.jsx)(n.code,{children:"HueSlider"})," components are no longer available, they can be used only as a part of ",(0,t.jsx)(n.a,{href:"/core/color-picker",children:"ColorPicker"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/text",children:"Text"})," default root element is now ",(0,t.jsx)(n.code,{children:"<p />"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/title",children:"Title"})," no longer supports all ",(0,t.jsx)(n.a,{href:"/core/text",children:"Text"})," props, only ",(0,t.jsx)(n.a,{href:"/styles/style-props",children:"style props"})," are available"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"MediaQuery"})," component was removed – use ",(0,t.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," to apply responsive styles"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/highlight",children:"Highlight"})," component prop ",(0,t.jsx)(n.code,{children:"highlightColor"})," was renamed to ",(0,t.jsx)(n.code,{children:"color"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip and Tooltip.Floating"})," components no longer support ",(0,t.jsx)(n.code,{children:"width"})," prop, use ",(0,t.jsx)(n.code,{children:"w"})," ",(0,t.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})," instead"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/stack",children:"Stack"})," component ",(0,t.jsx)(n.code,{children:"spacing"})," prop was renamed to ",(0,t.jsx)(n.code,{children:"gap"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/input",children:"Input"})," and other ",(0,t.jsx)(n.code,{children:"Input"})," based components ",(0,t.jsx)(n.code,{children:"icon"})," prop was renamed to ",(0,t.jsx)(n.code,{children:"leftSection"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component ",(0,t.jsx)(n.code,{children:"variant"})," prop was renamed to ",(0,t.jsx)(n.code,{children:"type"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@mantine/core"})," package no longer depends on ",(0,t.jsx)(n.a,{href:"https://www.radix-ui.com/docs/primitives/components/scroll-area#scroll-area",children:"Radix UI ScrollArea"}),", ",(0,t.jsx)(n.a,{href:"/core/scroll-area",children:"ScrollArea"})," component is now a native Mantine component – it reduces bundle size, allows to set CSP for styles and improves performance (all styles are now applied with classes instead of inline ",(0,t.jsx)(n.code,{children:"<style />"})," tags)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/overlay",children:"Overlay"})," ",(0,t.jsx)(n.code,{children:"opacity"})," prop was renamed to ",(0,t.jsx)(n.code,{children:"backgroundOpacity"})," to avoid collision with ",(0,t.jsx)(n.code,{children:"opacity"})," ",(0,t.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/badge",children:"Badge"})," Styles API selectors were changed, see ",(0,t.jsx)(n.a,{href:"/core/badge?t=styles-api",children:"Badge Styles API"})," documentation for more details"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/slider",children:"Slider"})," Styles API selectors were changed, see ",(0,t.jsx)(n.a,{href:"/core/slider?t=styles-api",children:"Slider Styles API"})," documentation for more details"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/text",children:"Text"})," component no longer supports ",(0,t.jsx)(n.code,{children:"underline"}),", ",(0,t.jsx)(n.code,{children:"color"}),", ",(0,t.jsx)(n.code,{children:"strikethrough"}),", ",(0,t.jsx)(n.code,{children:"italic"}),", ",(0,t.jsx)(n.code,{children:"transform"}),", ",(0,t.jsx)(n.code,{children:"align"})," and ",(0,t.jsx)(n.code,{children:"weight"})," prop – use ",(0,t.jsx)(n.a,{href:"/styles/style-props",children:"style props"})," instead"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/portal",children:"Portal"})," component ",(0,t.jsx)(n.code,{children:"innerRef"})," prop was renamed to ",(0,t.jsx)(n.code,{children:"ref"})]}),"\n"]})]})}function w(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(v,Object.assign({},e,{children:(0,t.jsx)(b,e)}))}},31409:function(e,n,r){"use strict";r.d(n,{p:function(){return v}});var t=r(67294),o={root:"mantine-aYUA2uh","root--default":"mantine-i9y-4gb","root--filled":"mantine-WcH2V6P","root--unstyled":"mantine-N3Q57Rh",legend:"mantine-CEzegbW","legend--unstyled":"mantine-9sufIFG"},s=r(75144),i=r(35577),l=r(89123),a=r(94873),c=r(95553),d=r(71350),h=Object.defineProperty,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,x=(e,n,r)=>n in e?h(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,f=(e,n)=>{for(var r in n||(n={}))m.call(n,r)&&x(e,r,n[r]);if(p)for(var r of p(n))u.call(n,r)&&x(e,r,n[r]);return e},j=(e,n)=>{var r={};for(var t in e)m.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&p)for(var t of p(e))0>n.indexOf(t)&&u.call(e,t)&&(r[t]=e[t]);return r};let g={variant:"default"},y=(0,c.Z)((e,{radius:n})=>({root:{"--fieldset-radius":(0,d.H5)(n)}})),v=(0,s.d)((e,n)=>{let r=(0,i.w)("Fieldset",g,e),{classNames:s,className:c,style:d,styles:h,unstyled:p,vars:m,legend:u,variant:x,children:v}=r,b=j(r,["classNames","className","style","styles","unstyled","vars","legend","variant","children"]),w=(0,l.y)({name:"Fieldset",classes:o,props:r,className:c,style:d,classNames:s,styles:h,unstyled:p,vars:m,varsResolver:y});return t.createElement(a.x,f(f({component:"fieldset",ref:n,variant:x},w("root",{variant:x})),b),u&&t.createElement("legend",f({},w("legend",{variant:x})),u),v)});v.classes=o,v.displayName="@mantine/core/Fieldset"},8162:function(e,n,r){"use strict";r.d(n,{j:function(){return m}});var t=r(67294),o=r(31409),s=r(31577),i=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,r)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,h=(e,n)=>{for(var r in n||(n={}))a.call(n,r)&&d(e,r,n[r]);if(l)for(var r of l(n))c.call(n,r)&&d(e,r,n[r]);return e};let p=`
import { Fieldset } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information"{{props}}>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />
    </Fieldset>
  );
}
`,m={type:"configurator",component:function(e){return t.createElement(o.p,h({legend:"Personal information"},e),t.createElement(s.o,{label:"Your name",placeholder:"Your name"}),t.createElement(s.o,{label:"Email",placeholder:"Email",mt:"md"}))},code:p,maxWidth:500,centered:!0,controls:[{type:"segmented",prop:"variant",initialValue:"default",libraryValue:"default",data:["default","filled","unstyled"]},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]}},71193:function(e,n,r){"use strict";r.d(n,{j:function(){return m}});var t=r(67294),o=r(74378),s=r(43406),i=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,r)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,h=(e,n)=>{for(var r in n||(n={}))a.call(n,r)&&d(e,r,n[r]);if(l)for(var r of l(n))c.call(n,r)&&d(e,r,n[r]);return e};let p=`
import { Group, Button } from '@mantine/core';

function Demo() {
  return (
    <Group{{props}}>
      <Button variant="default">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
    </Group>
  );
}
`,m={type:"configurator",component:function(e){return t.createElement(o.Z,h({},e),t.createElement(s.z,{variant:"default"},"First"),t.createElement(s.z,{variant:"default"},"Second"),t.createElement(s.z,{variant:"default"},"Third"))},code:p,controls:[{type:"select",prop:"justify",data:["flex-start","center","space-between","flex-end"],initialValue:"flex-start",libraryValue:"flex-start"},{type:"size",prop:"gap",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"grow",initialValue:!1,libraryValue:!1}]}},82236:function(e,n,r){"use strict";r.d(n,{g:function(){return s}});var t=r(99146);let o=`
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`,s={type:"configurator",component:t.a,code:o,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"segmented",prop:"type",data:["oval","bars","dots"],initialValue:"oval",libraryValue:"oval"}]}},30527:function(e,n,r){"use strict";r.d(n,{w:function(){return B}});var t=r(67294),o=r(49441),s=r(99146),i=r(38944),l=r(94873),a={loader:"mantine-P161cRp","loader-animation":"mantine-YhQwUWj"},c=Object.defineProperty,d=Object.defineProperties,h=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,x=(e,n,r)=>n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,f=(e,n)=>{for(var r in n||(n={}))m.call(n,r)&&x(e,r,n[r]);if(p)for(var r of p(n))u.call(n,r)&&x(e,r,n[r]);return e},j=(e,n)=>d(e,h(n)),g=(e,n)=>{var r={};for(var t in e)m.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&p)for(var t of p(e))0>n.indexOf(t)&&u.call(e,t)&&(r[t]=e[t]);return r};let y=(0,t.forwardRef)((e,n)=>{var{className:r}=e,o=g(e,["className"]);return t.createElement(l.x,j(f({component:"span",className:(0,i.Z)(a.loader,r)},o),{ref:n}))}),v=`
import { forwardRef } from 'react';
import cx from 'clsx';
import { Box, MantineLoaderComponent } from '@mantine/core';
import classes from './CssLoader.module.css';

export const CssLoader: MantineLoaderComponent = forwardRef(({ className, ...others }, ref) => (
  <Box component="span" className={cx(classes.loader, className)} {...others} ref={ref} />
));
`,b=`
@keyframes loader-animation {
  0% {
    transform: rotateY(0deg);
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }

  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }

  100% {
    transform: rotateY(3600deg);
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
}

.loader {
  display: inline-block;
  width: var(--loader-size);
  height: var(--loader-size);
  border-radius: var(--loader-size);
  background: var(--loader-color);
  animation: loader-animation 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
`;var w=Object.defineProperty,T=Object.defineProperties,S=Object.getOwnPropertyDescriptors,z=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,k=(e,n,r)=>n in e?w(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,M=(e,n)=>{for(var r in n||(n={}))C.call(n,r)&&k(e,r,n[r]);if(z)for(var r of z(n))E.call(n,r)&&k(e,r,n[r]);return e},P=(e,n)=>T(e,S(n));let I=`
import { MantineProvider, Loader } from '@mantine/core';
import { CssLoader } from './CssLoader';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Loader: Loader.extend({
            defaultProps: {
              loaders: { ...Loader.defaultLoaders, custom: CssLoader },
              type: 'custom',
            },
          }),
        },
      }}
    >
      <Loader />
    </MantineProvider>
  );
}
`,B={type:"code",component:function(){return t.createElement(o.M2,{theme:{components:{Loader:s.a.extend({defaultProps:{loaders:P(M({},s.a.defaultLoaders),{custom:y}),type:"custom"}})}}},t.createElement(s.a,null))},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:I},{fileName:"CssLoader.tsx",language:"tsx",code:v},{fileName:"CssLoader.module.css",language:"css",code:b}]}},60261:function(e,n,r){"use strict";r.d(n,{j:function(){return l}});var t=r(67294),o=r(69713),s=r(19144);let i=`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`,l={type:"code",code:i,component:function(){let e=s.R.map(e=>t.createElement(o.i.Tr,{key:e.name},t.createElement(o.i.Td,null,e.position),t.createElement(o.i.Td,null,e.name),t.createElement(o.i.Td,null,e.symbol),t.createElement(o.i.Td,null,e.mass)));return t.createElement(o.i,null,t.createElement(o.i.Thead,null,t.createElement(o.i.Tr,null,t.createElement(o.i.Th,null,"Element position"),t.createElement(o.i.Th,null,"Element name"),t.createElement(o.i.Th,null,"Symbol"),t.createElement(o.i.Th,null,"Atomic mass"))),t.createElement(o.i.Tbody,null,e))}}},19144:function(e,n,r){"use strict";r.d(n,{R:function(){return t}});let t=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}]},64465:function(e,n,r){"use strict";r.d(n,{B:function(){return p}});var t=r(67294),o=r(38944),s=r(39242),i=r(31577),l=r(49441),a={labelRequired:"mantine-iWywIRs",inputError:"mantine-Nxx6hw2"};let c=`
import cx from 'clsx';
import { MantineProvider, createTheme, TextInput } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    TextInput: TextInput.extend({
      classNames: (_theme, props) => ({
        label: cx({ [classes.labelRequired]: props.required }),
        input: cx({ [classes.inputError]: props.error }),
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput required label="Required input" placeholder="Required input" />
      <TextInput error label="Input with error" placeholder="Input with error" mt="md" />
    </MantineProvider>
  );
}
`,d=`
.labelRequired {
  color: var(--mantine-color-red-filled);
}

.inputError {
  background-color: var(--mantine-color-red-light);
}
`,h=(0,s.j)({components:{TextInput:i.o.extend({classNames:(e,n)=>({label:(0,o.Z)({[a.labelRequired]:n.required}),input:(0,o.Z)({[a.inputError]:n.error})})})}}),p={type:"code",component:function(){return t.createElement(l.M2,{theme:h},t.createElement(i.o,{required:!0,label:"Required input",placeholder:"Required input"}),t.createElement(i.o,{error:!0,label:"Input with error",placeholder:"Input with error",mt:"md"}))},code:[{fileName:"Demo.tsx",code:c,language:"tsx"},{fileName:"Demo.module.css",code:d,language:"css"}]}},39442:function(e,n,r){"use strict";r.d(n,{j:function(){return a}});var t=r(67294),o=r(51499),s={input:"mantine-d-R5lyp"};let i=`
import { Input, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

// It is better to add new variants in theme.components
// This way you will be able to use them in anywhere in the app
const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  }
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Input variant="underline" placeholder="Underline input" />
      <Input variant="filled" placeholder="Filled input" mt="md" />
    </MantineProvider>
  );
}
`,l=`
.input {
  &[data-variant='underline'] {
    border-bottom: rem(2px) solid;
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;

    @mixin light {
      border-color: var(--mantine-color-gray-3);
    }

    @mixin dark {
      border-color: var(--mantine-color-dark-3);
    }

    &:focus {
      border-color: var(--mantine-color-blue-filled);
    }
  }
}
`,a={type:"code",component:function(){return t.createElement(t.Fragment,null,t.createElement(o.I,{classNames:s,variant:"underline",placeholder:"Underline input"}),t.createElement(o.I,{classNames:s,variant:"filled",placeholder:"Filled input",mt:"md"}))},maxWidth:360,centered:!0,code:[{fileName:"Demo.tsx",code:i,language:"tsx"},{fileName:"Demo.module.css",code:l,language:"css"}]}},72423:function(e,n,r){"use strict";r.d(n,{R:function(){return d}});var t=r(67294),o=r(39242),s=r(51499),i=r(49441);let l=`
import { Input, createTheme, MantineProvider } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Input placeholder="Size XXL" size="xxl" />
      <Input placeholder="Size XXS" size="xxs" mt="md" />
    </MantineProvider>
  );
}
`,a=`
.wrapper {
  &[data-size='xxl'] {
    & .input {
      padding-left: rem(28px);
      padding-right: rem(28px);
      height: rem(68px);
      font-size: rem(28px);
    }
  }

  &[data-size='xxs'] {
    & .input {
      padding-left: rem(10px);
      padding-right: rem(10px);
      height: rem(28px);
      font-size: rem(10px);
    }
  }
}
`,c=(0,o.j)({components:{Input:s.I.extend({classNames:{wrapper:"mantine-MLApsb3",input:"mantine-Q3v0IV0"}})}}),d={type:"code",component:function(){return t.createElement(i.M2,{theme:c},t.createElement(s.I,{placeholder:"Size XXL",size:"xxl"}),t.createElement(s.I,{placeholder:"Size XXS",size:"xxs",mt:"md"}))},maxWidth:360,centered:!0,code:[{language:"tsx",code:l,fileName:"Demo.tsx"},{language:"css",code:a,fileName:"Demo.module.css"}]}},67977:function(e,n,r){"use strict";r.d(n,{g:function(){return d}});var t=r(67294),o=r(46393),s=r(43406),i=r(74378);let l=`
import { Button, rem, PartialVarsResolver, ButtonFactory, Group } from '@mantine/core';

const varsResolver: PartialVarsResolver<ButtonFactory> = (theme, props) => {
  if (props.size === 'xxl') {
    return {
      root: {
        '--button-height': rem(60),
        '--button-padding-x': rem(30),
        '--button-fz': rem(24),
      },
    };
  }

  if (props.size === 'xxs') {
    return {
      root: {
        '--button-height': rem(24),
        '--button-padding-x': rem(10),
        '--button-fz': rem(10),
      },
    };
  }

  return { root: {} };
};

function Demo() {
  return (
    <Group>
      <Button vars={varsResolver} size="xxl">
        XXL Button
      </Button>
      <Button vars={varsResolver} size="xxs">
        XXS Button
      </Button>
    </Group>
  );
}
`,a=`
import { Button, rem, Group, MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  components: {
    Button: Button.extend({
      vars: (theme, props) => {
        if (props.size === 'xxl') {
          return {
            root: {
              '--button-height': rem(60),
              '--button-padding-x': rem(30),
              '--button-fz': rem(24),
            },
          };
        }

        if (props.size === 'xxs') {
          return {
            root: {
              '--button-height': rem(24),
              '--button-padding-x': rem(10),
              '--button-fz': rem(10),
            },
          };
        }

        return { root: {} };
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button size="xxl">XXL Button</Button>
        <Button size="xxs">XXS Button</Button>
      </Group>
    </MantineProvider>
  );
}
`,c=(e,n)=>"xxl"===n.size?{root:{"--button-height":(0,o.h)(60),"--button-padding-x":(0,o.h)(30),"--button-fz":(0,o.h)(24)}}:"xxs"===n.size?{root:{"--button-height":(0,o.h)(24),"--button-padding-x":(0,o.h)(10),"--button-fz":(0,o.h)(10)}}:{root:{}};s.z.extend({vars:(e,n)=>"xxl"===n.size?{root:{"--button-height":(0,o.h)(60),"--button-padding-x":(0,o.h)(30),"--button-fz":(0,o.h)(24)}}:"xxs"===n.size?{root:{"--button-height":(0,o.h)(24),"--button-padding-x":(0,o.h)(10),"--button-fz":(0,o.h)(10)}}:{root:{}}});let d={type:"code",component:function(){return t.createElement(i.Z,null,t.createElement(s.z,{vars:c,size:"xxl"},"XXL Button"),t.createElement(s.z,{vars:c,size:"xxs"},"XXS Button"))},centered:!0,code:[{code:a,language:"tsx",fileName:"MantineProvider.tsx"},{code:l,language:"tsx",fileName:"Inline.tsx"}]}},75646:function(e,n,r){"use strict";r.d(n,{m:function(){return a}});var t=r(67294),o=r(77048),s=r(74378),i=r(43406);let l=`
import { Group, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm" mb={5} fw={500}>
        Filled variant
      </Text>
      <Group>
        <Button color="cyan">Theme color</Button>
        <Button color="#1D72FE">Hex color</Button>
      </Group>

      <Text size="sm" mb={5} mt="md" fw={500}>
        Light variant
      </Text>
      <Group>
        <Button variant="light" color="cyan">
          Theme color
        </Button>
        <Button variant="light" color="#1D72FE">
          Hex color
        </Button>
      </Group>

      <Text size="sm" mb={5} mt="md" fw={500}>
        Outline variant
      </Text>
      <Group>
        <Button variant="outline" color="cyan">
          Theme color
        </Button>
        <Button variant="outline" color="#1D72FE">
          Hex color
        </Button>
      </Group>
    </>
  );
}

`,a={type:"code",component:function(){return t.createElement(t.Fragment,null,t.createElement(o.x,{size:"sm",mb:5,fw:500},"Filled variant"),t.createElement(s.Z,null,t.createElement(i.z,{color:"cyan"},"Theme color"),t.createElement(i.z,{color:"#1D72FE"},"Hex color")),t.createElement(o.x,{size:"sm",mb:5,mt:"md",fw:500},"Light variant"),t.createElement(s.Z,null,t.createElement(i.z,{variant:"light",color:"cyan"},"Theme color"),t.createElement(i.z,{variant:"light",color:"#1D72FE"},"Hex color")),t.createElement(o.x,{size:"sm",mb:5,mt:"md",fw:500},"Outline variant"),t.createElement(s.Z,null,t.createElement(i.z,{variant:"outline",color:"cyan"},"Theme color"),t.createElement(i.z,{variant:"outline",color:"#1D72FE"},"Hex color")))},defaultExpanded:!1,code:l}},76382:function(e,n,r){"use strict";r.d(n,{U:function(){return a}});var t=r(67294),o=r(18297),s=r(74378),i=r(43406);let l=`
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
`,a={type:"code",component:function(){let{setColorScheme:e,clearColorScheme:n}=(0,o.X)();return t.createElement(s.Z,null,t.createElement(i.z,{onClick:()=>e("light")},"Light"),t.createElement(i.z,{onClick:()=>e("dark")},"Dark"),t.createElement(i.z,{onClick:()=>e("auto")},"Auto"),t.createElement(i.z,{onClick:n},"Clear"))},centered:!0,code:l}},10460:function(e,n,r){"use strict";r.d(n,{D:function(){return T}});var t=r(67294),o=r(28274),s=r(31254),i=r(26595),l=r(46393),a=r(8781),c=r(49441),d=r(74378),h=r(43406),p=Object.defineProperty,m=Object.defineProperties,u=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,g=(e,n,r)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,y=(e,n)=>{for(var r in n||(n={}))f.call(n,r)&&g(e,r,n[r]);if(x)for(var r of x(n))j.call(n,r)&&g(e,r,n[r]);return e},v=(e,n)=>m(e,u(n));let b=`
import {
  Button,
  Group,
  MantineProvider,
  defaultVariantColorsResolver,
  VariantColorsResolver,
  parseThemeColor,
  rem,
  rgba,
  darken,
} from '@mantine/core';

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  // Override some properties for variant
  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return { ...defaultResolvedColors, color: 'var(--mantine-color-black)' };
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: \`\${rem(1)} solid \${parsedColor.value}\`,
      color: darken(parsedColor.value, 0.1),
    };
  }

  // Add new variants support
  if (input.variant === 'danger') {
    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};

function Demo() {
  return (
    <MantineProvider theme={{ variantColorResolver }}>
      <Group>
        <Button color="lime.4" variant="filled">
          Lime filled button
        </Button>

        <Button color="orange" variant="light">
          Orange light button
        </Button>

        <Button variant="danger">Danger button</Button>
      </Group>
    </MantineProvider>
  );
}
`,w=e=>{let n=(0,o.B)(e),r=(0,s.E)({color:e.color||e.theme.primaryColor,theme:e.theme});return r.isThemeColor&&"lime"===r.color&&"filled"===e.variant?v(y({},n),{color:"var(--mantine-color-black)"}):"light"===e.variant?{background:(0,i.m)(r.value,.1),hover:(0,i.m)(r.value,.15),border:`${(0,l.h)(1)} solid ${r.value}`,color:(0,a._)(r.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:n},T={type:"code",component:function(){return t.createElement(c.M2,{theme:{variantColorResolver:w}},t.createElement(d.Z,null,t.createElement(h.z,{color:"lime.4",variant:"filled"},"Lime filled button"),t.createElement(h.z,{color:"orange",variant:"light"},"Orange light button"),t.createElement(h.z,{variant:"danger"},"Danger button")))},centered:!0,code:b}}},function(e){e.O(0,[8969,9341,4831,9774,2888,179],function(){return e(e.s=84744)}),_N_E=e.O()}]);