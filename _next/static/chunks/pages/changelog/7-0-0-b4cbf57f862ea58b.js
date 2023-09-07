(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3544],{84744:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-0-0",function(){return r(63775)}])},63775:function(e,n,r){"use strict";r.r(n);var o=r(85893),t=r(11151),s=r(19905),l=r(9904),i=r(55899),a=r(76382),c=r(64465),d=r(67977),h=r(39442),p=r(72423),m=r(10460),u=r(75646),x=r(92108),f=r(82236),j=r(30527),b=r(20199),g=r(60261),v=r(71193),y=r(13688),w=r(34926),S=r(55397),E=r(75788),C=r(29926),T=r(24644),P=r(8162),O=r(74504),I=r(81347),z=r(32562),N=r(93481);let B=(0,s.A)(l.us.Changelog700);function k(e){let n=Object.assign({h2:"h2",p:"p",a:"a",code:"code",pre:"pre",ul:"ul",li:"li"},(0,t.ah)(),e.components),{Demo:r,DataTable:s}=n;return s||D("DataTable",!0),r||D("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"migration-to-native-css",children:"Migration to native CSS"}),"\n",(0,o.jsxs)(n.p,{children:["Mantine no longer depends on ",(0,o.jsx)(n.a,{href:"https://emotion.sh/",children:"Emotion"})," for styles generation. All ",(0,o.jsx)(n.code,{children:"@mantine/*"}),"\npackages are now shipped with native CSS files which can be imported from ",(0,o.jsx)(n.code,{children:"@mantine/{package}/styles.css"}),",\nfor example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import '@mantine/core/styles.css';\n"})}),"\n",(0,o.jsx)(n.p,{children:"This change improves performance, reduces bundle size of the library and allows using Mantine\nin environments where CSS-in-JS is not supported (or supported with limitations), for example,\nNext.js app directory."}),"\n",(0,o.jsx)(n.p,{children:"Notable breaking changes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"createStyles"})," function is no longer available, use ",(0,o.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," or any other styling solution of your choice instead"]}),"\n",(0,o.jsxs)(n.li,{children:["Components no longer support ",(0,o.jsx)(n.code,{children:"sx"})," prop. You can use ",(0,o.jsx)(n.code,{children:"className"})," or ",(0,o.jsx)(n.code,{children:"style"})," props instead."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"styles"})," prop no longer supports nested selectors"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["It is now recommended to use ",(0,o.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," to style Mantine components.\nTo update your project to ",(0,o.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"}),"\nfollow the ",(0,o.jsx)(n.a,{href:"/guides/6x-to-7x",children:"6.x → 7.x migration guide"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"vanilla-extract-integration",children:"Vanilla extract integration"}),"\n",(0,o.jsxs)(n.p,{children:["If you prefer CSS-in-JS syntax for styling, you can use ",(0,o.jsx)(n.a,{href:"/styles/vanilla-extract",children:"Vanilla extract"}),"\nas a TypeScript CSS preprocessor. You will be able to use most of Mantine styling features\nwith ",(0,o.jsx)(n.a,{href:"/styles/vanilla-extract",children:"Vanilla extract"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"system-color-scheme-support",children:"System color scheme support"}),"\n",(0,o.jsxs)(n.p,{children:["All components now support system color scheme – when ",(0,o.jsx)(n.code,{children:"colorScheme"})," value is ",(0,o.jsx)(n.code,{children:"auto"}),",\ncomponents will use ",(0,o.jsx)(n.code,{children:"prefers-color-scheme"})," media query to determine if user prefers light or dark color scheme."]}),"\n",(0,o.jsx)(n.h2,{id:"built-in-color-scheme-manager",children:"Built-in color scheme manager"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," now comes with built-in color scheme manager.\nIt is no longer required to use any other components to setup color scheme logic.\nColor scheme can be changed with ",(0,o.jsx)(n.a,{href:"/theming/color-schemes#use-mantine-color-scheme-hook",children:"useMantineColorScheme hook"}),":"]}),"\n",(0,o.jsx)(r,{data:a.U}),"\n",(0,o.jsx)(n.h2,{id:"css-modules-and-postcss-preset",children:"CSS modules and PostCSS preset"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," is now the recommended way to style Mantine components,\nalthough it is not required – you can choose any other styling solution of your choice."]}),"\n",(0,o.jsxs)(n.p,{children:["It is also recommended to use ",(0,o.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),". It includes\nmixins and functions to simplify styling of Mantine components. ",(0,o.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),"\nis included in all templates."]}),"\n",(0,o.jsx)(n.h2,{id:"global-styles",children:"Global styles"}),"\n",(0,o.jsxs)(n.p,{children:["Mantine no longer includes normalize.css. Instead, it uses a bare minimum set of ",(0,o.jsx)(n.a,{href:"/styles/global-styles",children:"global styles"}),".\nThese styles are part of the ",(0,o.jsx)(n.code,{children:"@mantine/core"})," package and are applied automatically when you import\n",(0,o.jsx)(n.code,{children:"@mantine/core/styles.css"})," in your application. Note that these styles cannot be decoupled from the\nrest of the library."]}),"\n",(0,o.jsx)(n.h2,{id:"mantine-as-a-headless-ui-library",children:"Mantine as a headless UI library"}),"\n",(0,o.jsxs)(n.p,{children:["You can now use Mantine as a ",(0,o.jsx)(n.a,{href:"/styles/unstyled",children:"headless"})," library. To do that, just do not import\n",(0,o.jsx)(n.code,{children:"@mantine/*/styles.css"})," in your application. Then you will be able to apply styles with\n",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"createtheme-function",children:"createTheme function"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"createTheme"})," function is a replacement for ",(0,o.jsx)(n.code,{children:"MantineThemeOverride"})," type. Use it to create a theme\noverride, it will give you autocomplete for all theme properties:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  fontFamily: 'sans-serif',\n  primaryColor: 'orange',\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"components-extend-functions",children:"Components extend functions"}),"\n",(0,o.jsxs)(n.p,{children:["All components now have static ",(0,o.jsx)(n.code,{children:"extend"})," function which allows getting autocomplete when customizing\n",(0,o.jsx)(n.a,{href:"/theming/default-props",children:"defaultProps"}),", ",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"classNames and styles"})," of the component\non ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { TextInput, MantineProvider, createTheme } from '@mantine/core';\nimport classes from './Demo.module.css';\n\nconst theme = createTheme({\n  components: {\n    TextInput: TextInput.extends({\n      styles: (theme, props) => ({\n        input: {\n          fontSize: props.size === 'compact' ? theme.fontSizes.sm : undefined,\n        }\n      })\n      classNames: {\n        root: classes.root,\n        input: classes.input,\n        label: classes.label,\n      },\n\n      defaultProps: {\n        size: 'compact',\n      },\n    }),\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"classnames-based-on-component-props",children:"classNames based on component props"}),"\n",(0,o.jsxs)(n.p,{children:["You can now get component props in ",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"classNames and styles"})," to conditionally apply styles.\nThis feature is a more powerful replacement for styles params."]}),"\n",(0,o.jsx)(r,{data:c.B}),"\n",(0,o.jsx)(n.h2,{id:"components-css-variables",children:"Components CSS variables"}),"\n",(0,o.jsxs)(n.p,{children:["You can now customize components ",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"})," to change component styles based on its props.\nFor example, it can be used to add new ",(0,o.jsx)(n.a,{href:"/styles/variants-sizes",children:"sizes"}),":"]}),"\n",(0,o.jsx)(r,{data:d.g}),"\n",(0,o.jsx)(n.h2,{id:"new-variants-system",children:"New variants system"}),"\n",(0,o.jsxs)(n.p,{children:["All components now have ",(0,o.jsx)(n.code,{children:"data-variant"})," attribute on the root element, even if component does not have any predefined variants.\nYou can use it to apply styles to all components of the same type on ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,o.jsx)(r,{data:h.j}),"\n",(0,o.jsx)(n.h2,{id:"new-sizes-system",children:"New sizes system"}),"\n",(0,o.jsx)(n.p,{children:"There are multiple way to customize component sizes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["With ",(0,o.jsx)(n.code,{children:"data-size"})," attribute"]}),"\n",(0,o.jsxs)(n.li,{children:["With component ",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"})]}),"\n",(0,o.jsxs)(n.li,{children:["With ",(0,o.jsx)(n.a,{href:"/styles/variants-sizes#sizes-with-static-css-variables",children:"static CSS variables"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Example of customizing ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"})," size with ",(0,o.jsx)(n.code,{children:"data-size"})," attribute:"]}),"\n",(0,o.jsx)(r,{data:p.R}),"\n",(0,o.jsx)(n.h2,{id:"themevariantcolorresolver",children:"theme.variantColorResolver"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/core/button",children:"Button"}),", ",(0,o.jsx)(n.a,{href:"/core/badge",children:"Badge"}),", ",(0,o.jsx)(n.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,o.jsx)(n.a,{href:"/core/theme-icon",children:"ThemeIcon"})," and other\ncomponents support custom variants with ",(0,o.jsx)(n.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"}),"\n– it supports both changing colors of existing variants and adding new variants."]}),"\n",(0,o.jsx)(r,{data:m.D}),"\n",(0,o.jsx)(n.h2,{id:"rem-units-scaling",children:"rem units scaling"}),"\n",(0,o.jsxs)(n.p,{children:["It is now possible to scale ",(0,o.jsx)(n.a,{href:"/styles/rem#rem-units-scaling",children:"rem"})," units. It is useful when you want to change\nfont-size of ",(0,o.jsx)(n.code,{children:"html"}),"/",(0,o.jsx)(n.code,{children:":root"})," element and preserve Mantine components sizes. For example, if you want to set ",(0,o.jsx)(n.code,{children:"html"})," font-size to ",(0,o.jsx)(n.code,{children:"10px"})," and scale Mantine components accordingly, you need\nto set ",(0,o.jsx)(n.code,{children:"scale"})," to ",(0,o.jsx)(n.code,{children:"1 / (10 / 16)"})," (16 – default font-size) = ",(0,o.jsx)(n.code,{children:"1 / 0.625"})," = ",(0,o.jsx)(n.code,{children:"1.6"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:":root {\n  font-size: 10px;\n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider, createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  scale: 1.6,\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"color-prop-improvements",children:"color prop improvements"}),"\n",(0,o.jsxs)(n.p,{children:["All components that support ",(0,o.jsx)(n.code,{children:"color"})," prop now support the following color values:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Key of ",(0,o.jsx)(n.code,{children:"theme.colors"}),", for example, ",(0,o.jsx)(n.code,{children:"blue"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.colors"})," index reference, for example, ",(0,o.jsx)(n.code,{children:"blue.5"})]}),"\n",(0,o.jsxs)(n.li,{children:["Any valid CSS color value, for example, ",(0,o.jsx)(n.code,{children:"#fff"}),", ",(0,o.jsx)(n.code,{children:"rgba(0, 0, 0, 0.5)"}),", ",(0,o.jsx)(n.code,{children:"hsl(0, 0%, 100%)"})]}),"\n"]}),"\n",(0,o.jsx)(r,{data:u.m}),"\n",(0,o.jsx)(n.h2,{id:"components-classes",children:"Components classes"}),"\n",(0,o.jsxs)(n.p,{children:["Classes of each component are now available in ",(0,o.jsx)(n.code,{children:"Component.classes"})," object. For example, you can\nfind ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"})," classes in ",(0,o.jsx)(n.code,{children:"Button.classes"}),":"]}),"\n",(0,o.jsx)(s,{head:["Key","Class"],data:Object.keys(i.z.classes).map(e=>[e,i.z.classes[e]])}),"\n",(0,o.jsx)(n.p,{children:"You can use these classes to create components with the same styles as Mantine components:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\nfunction Demo() {\n  return <button type=\"button\" className={Button.classes.root} />;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"theme-object-changes",children:"Theme object changes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.lineHeight"})," is now ",(0,o.jsx)(n.code,{children:"theme.lineHeights"})," – it is now possible to specify multiple line heights. ",(0,o.jsx)(n.code,{children:"theme.lineHeights"})," values are used in ",(0,o.jsx)(n.a,{href:"/core/text",children:"Text"})," component."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.colorScheme"})," is no longer available, use ",(0,o.jsx)(n.a,{href:"/theming/color-schemes#use-mantine-color-scheme-hook",children:"useMantineColorScheme"})," to get color scheme value"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.dir"})," is no longer needed, direction is now managed by ",(0,o.jsx)(n.a,{href:"/styles/rtl",children:"DirectionProvider"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.loader"})," was removed, you can now configure default loader with ",(0,o.jsx)(n.a,{href:"/theming/default-props",children:"default props"})," of ",(0,o.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.transitionTimingFunction"})," was removed"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.focusRingStyles"})," was replaced with ",(0,o.jsx)(n.code,{children:"theme.focusClassName"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.activeStyles"})," was replaced with ",(0,o.jsx)(n.code,{children:"theme.activeClassName"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.globalStyles"})," was removed"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.fn"})," functions were removed, some of the functions are available as ",(0,o.jsx)(n.a,{href:"/styles/color-functions",children:"standalone utilities"})]}),"\n",(0,o.jsxs)(n.li,{children:["New ",(0,o.jsx)(n.a,{href:"/styles/rem#rem-units-scaling",children:"theme.scale"})," property controls rem units scaling"]}),"\n",(0,o.jsxs)(n.li,{children:["New ",(0,o.jsx)(n.code,{children:"theme.fontSmoothing"})," property determines whether font smoothing styles should be applied to the body element"]}),"\n",(0,o.jsxs)(n.li,{children:["New ",(0,o.jsx)(n.a,{href:"/theming/colors#colors-variant-resolver",children:"theme.variantColorResolver"})," property allows to customize component colors per variant"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"colors-generator",children:"Colors generator"}),"\n",(0,o.jsxs)(n.p,{children:["New ",(0,o.jsx)(n.a,{href:"/theming/colors#colors-generation",children:"@mantine/colors-generator"})," package is now available to generate\ncolor palettes based on single color value. It is also available as ",(0,o.jsx)(n.a,{href:"/colors-generator/",children:"online tool"}),".\nNote that it is usually better to generate colors in advance to avoid contrast issues."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { generateColors } from '@mantine/colors-generator';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        colors: {\n          'pale-blue': generateColors('#375EAC'),\n        },\n      }}\n    >\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"new-setup-for-rtl",children:"New setup for RTL"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"@mantine/core"})," package now exports ",(0,o.jsx)(n.a,{href:"/styles/rtl",children:"DirectionProvider"})," component which should be used to configure direction of the application.\n",(0,o.jsx)(n.code,{children:"useDirection"})," hook can be used to toggle direction. All components now include RTL styles by default, it is no\nlonger required to setup additional plugins. See ",(0,o.jsx)(n.a,{href:"/styles/rtl",children:"RTL documentation"})," to learn more."]}),"\n",(0,o.jsx)(n.h2,{id:"react-18-only",children:"React 18+ only"}),"\n",(0,o.jsxs)(n.p,{children:["Starting from version 7.0 Mantine no longer supports older React versions. Minimum supported version is now React 18.\nIt is required because Mantine components now use ",(0,o.jsx)(n.a,{href:"https://react.dev/reference/react/useId",children:"useId"})," and ",(0,o.jsx)(n.a,{href:"https://react.dev/reference/react/useSyncExternalStore",children:"useSyncExternalStore"}),"\nhooks which are available only in React 18."]}),"\n",(0,o.jsx)(n.h2,{id:"left-and-right-section",children:"left and right section"}),"\n",(0,o.jsxs)(n.p,{children:["Components that previously had ",(0,o.jsx)(n.code,{children:"rightSection"})," and ",(0,o.jsx)(n.code,{children:"icon"})," props, now use ",(0,o.jsx)(n.code,{children:"leftSection"})," instead of ",(0,o.jsx)(n.code,{children:"icon"}),".\nExample of ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"})," sections:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { Button } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Button leftSection="left" rightSection="right">\n      Label\n    </Button>\n  );\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"numberinput-changes",children:"NumberInput changes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/core/number-input",children:"NumberInput"})," was migrated to ",(0,o.jsx)(n.a,{href:"https://s-yadav.github.io/react-number-format/",children:"react-number-format"}),".\nIt now supports more features and had improvements in cursor position management.\nDue to migration, some of the props were renamed – follow the ",(0,o.jsx)(n.a,{href:"/core/number-input",children:"documentation"})," to learn about the changes."]}),"\n",(0,o.jsx)(r,{data:x.C}),"\n",(0,o.jsx)(n.h2,{id:"loader-changes",children:"Loader changes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component is now built with CSS only. This change improves performance and reduces\nHTML output of the component."]}),"\n",(0,o.jsx)(r,{data:f.g}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"Theme"})," object no longer supports ",(0,o.jsx)(n.code,{children:"theme.loader"})," prop –\nit is also now possible to add custom loaders on ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," with ",(0,o.jsx)(n.a,{href:"/theming/default-props",children:"default prop"}),".\nSpecified ",(0,o.jsx)(n.a,{href:"/core/loader",children:"Loader"})," will be used in all components that use it under the hood (",(0,o.jsx)(n.a,{href:"/core/loading-overlay",children:"LoadingOverlay"}),", ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"}),", ",(0,o.jsx)(n.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,o.jsx)(n.a,{href:"/core/stepper",children:"Stepper"}),", etc.)."]}),"\n",(0,o.jsx)(r,{data:j.w}),"\n",(0,o.jsx)(n.h2,{id:"progress-changes",children:"Progress changes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/core/progress",children:"Progress"})," component now supports compound components pattern.\nAdvanced features that were previously implemented in ",(0,o.jsx)(n.a,{href:"/core/progress",children:"Progress"})," are now supposed to be implemented with\ncompound components instead."]}),"\n",(0,o.jsx)(r,{data:b.I}),"\n",(0,o.jsx)(n.h2,{id:"table-changes",children:"Table changes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/core/table",children:"Table"})," component changes:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," support"]}),"\n",(0,o.jsxs)(n.li,{children:["It is now required to use compound components instead of elements: ",(0,o.jsx)(n.code,{children:"Table.Tr"}),", ",(0,o.jsx)(n.code,{children:"Table.Td"}),", etc."]}),"\n",(0,o.jsx)(n.li,{children:"It is now easier to override styles – all styles are added with classes instead of deeply nested selectors on root element"}),"\n",(0,o.jsxs)(n.li,{children:["New props: ",(0,o.jsx)(n.code,{children:"borderColor"}),", ",(0,o.jsx)(n.code,{children:"withRowBorders"}),", ",(0,o.jsx)(n.code,{children:"stripedColor"}),", ",(0,o.jsx)(n.code,{children:"highlightOnHoverColor"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"withBorder"})," prop was renamed to ",(0,o.jsx)(n.code,{children:"withTableBorder"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"fontSize"})," prop was removed, use ",(0,o.jsx)(n.code,{children:"fz"})," ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})," instead"]}),"\n",(0,o.jsxs)(n.li,{children:["New ",(0,o.jsx)(n.code,{children:"Table.ScrollContainer"})," component to create scrollable table"]}),"\n"]}),"\n",(0,o.jsx)(r,{data:g.j}),"\n",(0,o.jsx)(n.h2,{id:"group-changes",children:"Group changes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/core/group",children:"Group"})," component changes:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"position"})," prop was renamed to ",(0,o.jsx)(n.code,{children:"justify"})," – it now supports all ",(0,o.jsx)(n.code,{children:"justify-content"})," values"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"noWrap"})," prop was replaced with ",(0,o.jsx)(n.code,{children:'wrap="nowrap"'}),", ",(0,o.jsx)(n.code,{children:"wrap"})," prop now supports all ",(0,o.jsx)(n.code,{children:"flex-wrap"})," values"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"spacing"})," prop was replaced with ",(0,o.jsx)(n.code,{children:"gap"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Group"})," now supports new ",(0,o.jsx)(n.code,{children:"preventGrowOverflow"})," prop which allows to customize how group items will behave when they grow larger than their dedicated space"]}),"\n"]}),"\n",(0,o.jsx)(r,{data:v.j}),"\n",(0,o.jsx)(n.h2,{id:"tabs-changes",children:"Tabs changes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Styles API selector ",(0,o.jsx)(n.code,{children:"tabsList"})," renamed to ",(0,o.jsx)(n.code,{children:"list"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"TabProps"})," type was renamed to ",(0,o.jsx)(n.code,{children:"TabsTabProps"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"onTabChange"})," prop was renamed to ",(0,o.jsx)(n.code,{children:"onChange"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Tabs.List"})," ",(0,o.jsx)(n.code,{children:"position"})," prop was renamed to ",(0,o.jsx)(n.code,{children:"justify"}),", it now supports all ",(0,o.jsx)(n.code,{children:"justify-content"})," values"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"button-changes",children:"Button changes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"compact"})," prop was removed, use ",(0,o.jsx)(n.code,{children:'size="compact-XXX"'})," instead"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"leftIcon"})," and ",(0,o.jsx)(n.code,{children:"rightIcon"})," props were renamed to ",(0,o.jsx)(n.code,{children:"leftSection"})," and ",(0,o.jsx)(n.code,{children:"rightSection"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"uppercase"})," prop was removed, use ",(0,o.jsx)(n.code,{children:"tt"})," ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})," instead"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"loaderPosition"})," prop was removed, ",(0,o.jsx)(n.a,{href:"/core/loader",children:"Loader"})," is now always rendered on the center to prevent layout shifts"]}),"\n",(0,o.jsxs)(n.li,{children:["Styles API selectors were changed, see ",(0,o.jsx)(n.a,{href:"/core/button?t=styles-api",children:"Button Styles API"})," documentation for more details"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"appshell-changes",children:"AppShell changes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/core/app-shell",children:"AppShell"})," component was completely rewritten, it now supports more features:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"AppShell"})," now uses compound components pattern: ",(0,o.jsx)(n.code,{children:"Navbar"}),", ",(0,o.jsx)(n.code,{children:"Aside"}),", ",(0,o.jsx)(n.code,{children:"Header"})," and ",(0,o.jsx)(n.code,{children:"Footer"})," are no longer exported from ",(0,o.jsx)(n.code,{children:"@mantine/core"})," package. Instead, use ",(0,o.jsx)(n.code,{children:"AppShell.Navbar"}),", ",(0,o.jsx)(n.code,{children:"AppShell.Aside"}),", etc."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"AppShell"})," now supports animations when navbar/aside are opened/closed"]}),"\n",(0,o.jsx)(n.li,{children:"Navbar/aside can now be collapsed on desktop – state is handled separately for mobile and desktop"}),"\n",(0,o.jsx)(n.li,{children:"Header/footer can now be collapsed the same way as navbar/aside. For example, header can be collapsed based on scroll position or direction."}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"AppShell"})," no longer supports ",(0,o.jsx)(n.code,{children:"fixed"})," prop – all components have ",(0,o.jsx)(n.code,{children:"position: fixed"})," styles, static positioning is no longer supported"]}),"\n",(0,o.jsxs)(n.li,{children:["The documentation was updated, it now includes ",(0,o.jsx)(n.a,{href:"/app-shell?e=BasicAppShell",children:"10+ examples on a separate page"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"simplegrid-changes",children:"SimpleGrid changes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/core/simple-grid",children:"SimpleGrid"})," now uses object format to define grid breakpoints and spacing,\nit works the same way as ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,o.jsx)(r,{data:y.j}),"\n",(0,o.jsx)(n.h2,{id:"grid-changes",children:"Grid changes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/core/grid",children:"Grid"})," now uses object format in ",(0,o.jsx)(n.code,{children:"gutter"}),", ",(0,o.jsx)(n.code,{children:"offset"}),", ",(0,o.jsx)(n.code,{children:"span"})," and order props,\nall props now work the same way as ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,o.jsx)(r,{data:w.j}),"\n",(0,o.jsx)(n.h2,{id:"image-changes",children:"Image changes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/core/image",children:"Image"})," component changes:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Image"})," component no longer includes ",(0,o.jsx)(n.code,{children:"figure"})," and other associated elements"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"caption"})," prop is no longer available"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"width"})," and ",(0,o.jsx)(n.code,{children:"height"})," props are replaced with ",(0,o.jsx)(n.code,{children:"w"})," and ",(0,o.jsx)(n.code,{children:"h"})," ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style props"})]}),"\n",(0,o.jsx)(n.li,{children:"Placeholder functionality was replaced with fallback image"}),"\n"]}),"\n",(0,o.jsx)(r,{data:S.t}),"\n",(0,o.jsx)(n.h2,{id:"spotlight-changes",children:"Spotlight changes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/others/spotlight",children:"Spotlight"})," changes:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The logic is no longer based on React context"}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"SpotlightProvider"})," was renamed to ",(0,o.jsx)(n.code,{children:"Spotlight"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"useSpotlight"})," hook was removed, use ",(0,o.jsx)(n.code,{children:"spotlight"})," object instead"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"actions"})," prop now uses different data format"]}),"\n",(0,o.jsx)(n.li,{children:"It is now possible to have multiple spotlights in the same app"}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Spotlight"})," component now uses compound components pattern for advanced customization"]}),"\n"]}),"\n",(0,o.jsx)(r,{data:E.I}),"\n",(0,o.jsx)(n.h2,{id:"carousel-changes",children:"Carousel changes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/others/carousel",children:"Carousel"})," now uses object format for responsive values in\n",(0,o.jsx)(n.code,{children:"slideSize"})," and ",(0,o.jsx)(n.code,{children:"slideGap"})," props instead of ",(0,o.jsx)(n.code,{children:"breakpoints"})," prop:"]}),"\n",(0,o.jsx)(r,{data:C.A}),"\n",(0,o.jsx)(n.h2,{id:"mantineprism-deprecation",children:"@mantine/prism deprecation"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"@mantine/prism"})," package was deprecated in favor of ",(0,o.jsx)(n.code,{children:"@mantine/code-highlight"})," package. ",(0,o.jsx)(n.a,{href:"/others/code-highlight",children:"New package"})," uses ",(0,o.jsx)(n.a,{href:"https://highlightjs.org/",children:"highlight.js"})," instead of ",(0,o.jsx)(n.a,{href:"https://prismjs.com/",children:"Prism"}),"."]}),"\n",(0,o.jsx)(r,{data:T.H}),"\n",(0,o.jsx)(n.h2,{id:"fieldset-component",children:"Fieldset component"}),"\n",(0,o.jsxs)(n.p,{children:["New ",(0,o.jsx)(n.a,{href:"/core/fieldset",children:"Fieldset"})," component:"]}),"\n",(0,o.jsx)(r,{data:P.j}),"\n",(0,o.jsx)(n.h2,{id:"combobox-component",children:"Combobox component"}),"\n",(0,o.jsxs)(n.p,{children:["New ",(0,o.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," component allows building custom select, autocomplete, tags input, multiselect and other\nsimilar components. It is used as a base for updated ",(0,o.jsx)(n.a,{href:"/core/autocomplete",children:"Autocomplete"}),", ",(0,o.jsx)(n.a,{href:"/core/select",children:"Select"}),",\n",(0,o.jsx)(n.a,{href:"/core/tags-input",children:"TagsInput"})," and ",(0,o.jsx)(n.a,{href:"/core/multi-select",children:"MultiSelect"})," components."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," is very flexible and allows you to have full control over the component rendering and logic.\nAdvanced features that were previously implemented in ",(0,o.jsx)(n.a,{href:"/core/autocomplete",children:"Autocomplete"}),", ",(0,o.jsx)(n.a,{href:"/core/select",children:"Select"}),"\nand ",(0,o.jsx)(n.a,{href:"/core/multi-select",children:"MultiSelect"})," are now supposed to be implemented with ",(0,o.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," instead."]}),"\n",(0,o.jsxs)(n.p,{children:["You can find 50+ ",(0,o.jsx)(n.code,{children:"Combobox"})," examples on ",(0,o.jsx)(n.a,{href:"/combobox",children:"this page"})]}),"\n",(0,o.jsx)(r,{data:O.Y}),"\n",(0,o.jsx)(n.h2,{id:"tagsinput-component",children:"TagsInput component"}),"\n",(0,o.jsxs)(n.p,{children:["New ",(0,o.jsx)(n.a,{href:"/core/tags-input",children:"TagsInput"})," component based on ",(0,o.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," component.\nThe component is similar to ",(0,o.jsx)(n.a,{href:"/core/multi-select",children:"MultiSelect"})," but allows entering custom values."]}),"\n",(0,o.jsx)(r,{data:I.a}),"\n",(0,o.jsx)(n.h2,{id:"witherrorstyles-prop",children:"withErrorStyles prop"}),"\n",(0,o.jsxs)(n.p,{children:["All inputs now support ",(0,o.jsx)(n.code,{children:"withErrorStyles"})," prop which allows removing error styles from the input.\nIt can be used to apply custom error styles without override or use other techniques to\nindicate error state. For example, it can be used to render icon in the right section:"]}),"\n",(0,o.jsx)(r,{data:z.v}),"\n",(0,o.jsx)(n.h2,{id:"hiddenfrom-and-visiblefrom-props",children:"hiddenFrom and visibleFrom props"}),"\n",(0,o.jsxs)(n.p,{children:["All Mantine components now support ",(0,o.jsx)(n.code,{children:"hiddenFrom"})," and ",(0,o.jsx)(n.code,{children:"visibleFrom"})," props.\nThese props accept breakpoint (",(0,o.jsx)(n.code,{children:"xs"}),", ",(0,o.jsx)(n.code,{children:"sm"}),", ",(0,o.jsx)(n.code,{children:"md"}),", ",(0,o.jsx)(n.code,{children:"lg"}),", ",(0,o.jsx)(n.code,{children:"xl"}),") and hide the component when\nviewport width is less than or greater than the specified breakpoint:"]}),"\n",(0,o.jsx)(r,{data:N.n}),"\n",(0,o.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["New ",(0,o.jsx)(n.a,{href:"/core/visually-hidden",children:"VisuallyHidden"})," component"]}),"\n",(0,o.jsxs)(n.li,{children:["New ",(0,o.jsx)(n.a,{href:"/core/action-icon#actionicongroup",children:"ActionIcon.Group"})," component"]}),"\n",(0,o.jsx)(n.li,{children:"All transitions are now disabled during color scheme change"}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.respectReducedMotion"})," is now set to ",(0,o.jsx)(n.code,{children:"false"})," by default – it caused a lot of confusion for users who did not know about it"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/others/notifications",children:"Notifications system"})," now exports ",(0,o.jsx)(n.code,{children:"notifications.updateState"})," function to update notifications state with a given callback"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/blockquote",children:"Blockquote"})," components has new design"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/breadcrumbs",children:"Breadcrumbs"})," component now supports ",(0,o.jsx)(n.code,{children:"separatorMargin"})," prop"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"})," component now supports ",(0,o.jsx)(n.code,{children:"mainAxis"})," and ",(0,o.jsx)(n.code,{children:"crossAxis"})," offset configuration"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/slider",children:"Slider and RangeSlider"})," components ",(0,o.jsx)(n.code,{children:"radius"})," prop now affects thumb as well as track"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/native-select/",children:"NativeSelect"})," component now supports setting options as ",(0,o.jsx)(n.code,{children:"children"})," and options groups"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/anchor",children:"Anchor"})," component now supports ",(0,o.jsx)(n.code,{children:"underline"})," prop which lets you configure how link will be underlined: ",(0,o.jsx)(n.code,{children:"hover"})," (default), ",(0,o.jsx)(n.code,{children:"always"})," or ",(0,o.jsx)(n.code,{children:"never"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/affix",children:"Affix"})," component no longer supports ",(0,o.jsx)(n.code,{children:"target"})," prop, use ",(0,o.jsx)(n.code,{children:"portalProps"})," instead"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/container",children:"Container"})," component no longer supports ",(0,o.jsx)(n.code,{children:"sizes"})," prop, use ",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"})," to customize sizes on ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," instead"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"useComponentDefaultProps"})," hook was renamed to ",(0,o.jsx)(n.a,{href:"/theming/default-props#useprops-hook",children:"useProps"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"withinPortal"})," prop is now true by default in all overlay components (",(0,o.jsx)(n.a,{href:"/core/popover",children:"Popover"}),", ",(0,o.jsx)(n.a,{href:"/core/hover-card",children:"HoverCard"}),", ",(0,o.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"}),", etc.)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"AlphaSlider"})," and ",(0,o.jsx)(n.code,{children:"HueSlider"})," components are no longer available, they can be used only as a part of ",(0,o.jsx)(n.a,{href:"/core/color-picker",children:"ColorPicker"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/text",children:"Text"})," default root element is now ",(0,o.jsx)(n.code,{children:"<p />"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/title",children:"Title"})," no longer supports all ",(0,o.jsx)(n.a,{href:"/core/text",children:"Text"})," props, only ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style props"})," are available"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"MediaQuery"})," component was removed – use ",(0,o.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," to apply responsive styles"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/highlight",children:"Highlight"})," component prop ",(0,o.jsx)(n.code,{children:"highlightColor"})," was renamed to ",(0,o.jsx)(n.code,{children:"color"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip and Tooltip.Floating"})," components no longer support ",(0,o.jsx)(n.code,{children:"width"})," prop, use ",(0,o.jsx)(n.code,{children:"w"})," ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})," instead"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/stack",children:"Stack"})," component ",(0,o.jsx)(n.code,{children:"spacing"})," prop was renamed to ",(0,o.jsx)(n.code,{children:"gap"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/input",children:"Input"})," and other ",(0,o.jsx)(n.code,{children:"Input"})," based components ",(0,o.jsx)(n.code,{children:"icon"})," prop was renamed to ",(0,o.jsx)(n.code,{children:"leftSection"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component ",(0,o.jsx)(n.code,{children:"variant"})," prop was renamed to ",(0,o.jsx)(n.code,{children:"type"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@mantine/core"})," package no longer depends on ",(0,o.jsx)(n.a,{href:"https://www.radix-ui.com/docs/primitives/components/scroll-area#scroll-area",children:"Radix UI ScrollArea"}),", ",(0,o.jsx)(n.a,{href:"/core/scroll-area",children:"ScrollArea"})," component is now a native Mantine component – it reduces bundle size, allows to set CSP for styles and improves performance (all styles are now applied with classes instead of inline ",(0,o.jsx)(n.code,{children:"<style />"})," tags)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/overlay",children:"Overlay"})," ",(0,o.jsx)(n.code,{children:"opacity"})," prop was renamed to ",(0,o.jsx)(n.code,{children:"backgroundOpacity"})," to avoid collision with ",(0,o.jsx)(n.code,{children:"opacity"})," ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/badge",children:"Badge"})," Styles API selectors were changed, see ",(0,o.jsx)(n.a,{href:"/core/badge?t=styles-api",children:"Badge Styles API"})," documentation for more details"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/slider",children:"Slider"})," Styles API selectors were changed, see ",(0,o.jsx)(n.a,{href:"/core/slider?t=styles-api",children:"Slider Styles API"})," documentation for more details"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/text",children:"Text"})," component no longer supports ",(0,o.jsx)(n.code,{children:"underline"}),", ",(0,o.jsx)(n.code,{children:"color"}),", ",(0,o.jsx)(n.code,{children:"strikethrough"}),", ",(0,o.jsx)(n.code,{children:"italic"}),", ",(0,o.jsx)(n.code,{children:"transform"}),", ",(0,o.jsx)(n.code,{children:"align"})," and ",(0,o.jsx)(n.code,{children:"weight"})," prop – use ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style props"})," instead"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/portal",children:"Portal"})," component ",(0,o.jsx)(n.code,{children:"innerRef"})," prop was renamed to ",(0,o.jsx)(n.code,{children:"ref"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/scroll-area",children:"ScrollArea"})," now supports ",(0,o.jsx)(n.code,{children:"x"})," and ",(0,o.jsx)(n.code,{children:"y"})," values in ",(0,o.jsx)(n.code,{children:"offsetScrollbars"})," prop"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"TransferList"})," component is no longer available as a part of ",(0,o.jsx)(n.code,{children:"@mantine/core"})," package, instead you can implement it with ",(0,o.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," component (",(0,o.jsx)(n.a,{href:"/combobox?e=TransferList",children:"example"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/chip",children:"Chip"})," component now supports custom check icon"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/password-input",children:"PasswordInput"})," no longer supports ",(0,o.jsx)(n.code,{children:"visibilityToggleLabel"})," and ",(0,o.jsx)(n.code,{children:"toggleTabIndex"})," props, use ",(0,o.jsx)(n.code,{children:"visibilityToggleButtonProps"})," prop instead"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/stepper",children:"Stepper"})," now longer supports ",(0,o.jsx)(n.code,{children:"breakpoint"})," prop, you can apply responsive styles with Styles API"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/color-input",children:"ColorInput"})," no longer supports ",(0,o.jsx)(n.code,{children:"dropdownZIndex"}),", ",(0,o.jsx)(n.code,{children:"transitionProps"}),", ",(0,o.jsx)(n.code,{children:"withinPortal"}),", ",(0,o.jsx)(n.code,{children:"portalProps"})," and ",(0,o.jsx)(n.code,{children:"shadow"})," props, you can now pass these props with ",(0,o.jsx)(n.code,{children:"popoverProps"})," prop"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/loading-overlay",children:"LoadingOverlay"})," props are now grouped by the component they are passed down to: ",(0,o.jsx)(n.code,{children:"overlayProps"}),", ",(0,o.jsx)(n.code,{children:"loaderProps"})," and ",(0,o.jsx)(n.code,{children:"transitionProps"})," now replace props that were previously passed to ",(0,o.jsx)(n.code,{children:"LoadingOverlay"})," directly"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/others/dropzone",children:"Dropzone"})," component no longer supports ",(0,o.jsx)(n.code,{children:"padding"})," prop, use ",(0,o.jsx)(n.code,{children:"p"})," style prop instead"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/dialog",children:"Dialog"})," component now supports all ",(0,o.jsx)(n.a,{href:"/core/paper",children:"Paper"})," and ",(0,o.jsx)(n.a,{href:"/core/affix",children:"Affix"})," props, ",(0,o.jsx)(n.code,{children:"transitionDuration"}),", ",(0,o.jsx)(n.code,{children:"transition"})," and other transition related props were replaced with ",(0,o.jsx)(n.code,{children:"transitionProps"})]}),"\n"]})]})}function D(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(B,Object.assign({},e,{children:(0,o.jsx)(k,e)}))}},19786:function(e,n,r){"use strict";r.d(n,{Z:function(){return o}});var o=(0,r(54764).Z)("exclamation-circle","IconExclamationCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 9v4",key:"svg-1"}],["path",{d:"M12 16v.01",key:"svg-2"}]])},31409:function(e,n,r){"use strict";r.d(n,{p:function(){return v}});var o=r(67294),t={root:"m-e9408a47","root--default":"m-84c9523a","root--filled":"m-ef274e49","root--unstyled":"m-eda993d3",legend:"m-90794832","legend--unstyled":"m-74ca27fe"},s=r(75144),l=r(35577),i=r(25637),a=r(51227),c=r(95553),d=r(71350),h=Object.defineProperty,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,x=(e,n,r)=>n in e?h(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,f=(e,n)=>{for(var r in n||(n={}))m.call(n,r)&&x(e,r,n[r]);if(p)for(var r of p(n))u.call(n,r)&&x(e,r,n[r]);return e},j=(e,n)=>{var r={};for(var o in e)m.call(e,o)&&0>n.indexOf(o)&&(r[o]=e[o]);if(null!=e&&p)for(var o of p(e))0>n.indexOf(o)&&u.call(e,o)&&(r[o]=e[o]);return r};let b={variant:"default"},g=(0,c.Z)((e,{radius:n})=>({root:{"--fieldset-radius":(0,d.H5)(n)}})),v=(0,s.d)((e,n)=>{let r=(0,l.w)("Fieldset",b,e),{classNames:s,className:c,style:d,styles:h,unstyled:p,vars:m,legend:u,variant:x,children:v}=r,y=j(r,["classNames","className","style","styles","unstyled","vars","legend","variant","children"]),w=(0,i.y)({name:"Fieldset",classes:t,props:r,className:c,style:d,classNames:s,styles:h,unstyled:p,vars:m,varsResolver:g});return o.createElement(a.x,f(f({component:"fieldset",ref:n,variant:x},w("root",{variant:x})),y),u&&o.createElement("legend",f({},w("legend",{variant:x})),u),v)});v.classes=t,v.displayName="@mantine/core/Fieldset"},68763:function(e,n,r){"use strict";r.d(n,{r:function(){return Z}});var o=r(67294),t=r(40624),s=r(16371);let[l,i]=(0,s.R)("Grid component was not found in tree");var a=r(80931),c=r(49441),d=r(56882),h=r(40342),p=r(89305),m=r(40128);let u=(e,n)=>"content"===e?"auto":"auto"===e?"0rem":e?`${100/(n/e)}%`:void 0,x=(e,n,r)=>r||"auto"===e||"content"===e?"unset":u(e,n),f=(e,n)=>{if(e)return"auto"===e||n?"1":void 0},j=(e,n)=>0===e?"0":e?`${100/(n/e)}%`:void 0;function b({span:e,order:n,offset:r,selector:t}){var s;let l=(0,c.rZ)(),b=i(),g=(0,a.v)(e),v=(0,d.L)({"--col-order":null==(s=(0,a.v)(n))?void 0:s.toString(),"--col-flex-grow":f(g,b.grow),"--col-flex-basis":u(g,b.columns),"--col-width":"content"===g?"auto":void 0,"--col-max-width":x(g,b.columns,b.grow),"--col-offset":j((0,a.v)(r),b.columns)}),y=(0,h.X)(l.breakpoints).reduce((o,t)=>{var s;return o[t]||(o[t]={}),"object"==typeof n&&void 0!==n[t]&&(o[t]["--col-order"]=null==(s=n[t])?void 0:s.toString()),"object"==typeof e&&void 0!==e[t]&&(o[t]["--col-flex-grow"]=f(e[t],b.grow),o[t]["--col-flex-basis"]=u(e[t],b.columns),o[t]["--col-width"]="content"===e[t]?"auto":void 0,o[t]["--col-max-width"]=x(e[t],b.columns,b.grow)),"object"==typeof r&&void 0!==r[t]&&(o[t]["--col-offset"]=j(r[t],b.columns)),o},{}),w=(0,p.I)((0,h.X)(y),l).filter(e=>(0,h.X)(y[e.value]).length>0),S=w.map(e=>({query:`(min-width: ${l.breakpoints[e.value]})`,styles:y[e.value]}));return o.createElement(m.f,{styles:v,media:S,selector:t})}var g={root:"m-410352e9",inner:"m-dee7bd2f",col:"m-96bdd299"},v=r(75144),y=r(35577),w=r(6937),S=r(51227),E=Object.defineProperty,C=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,O=(e,n,r)=>n in e?E(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,I=(e,n)=>{for(var r in n||(n={}))T.call(n,r)&&O(e,r,n[r]);if(C)for(var r of C(n))P.call(n,r)&&O(e,r,n[r]);return e},z=(e,n)=>{var r={};for(var o in e)T.call(e,o)&&0>n.indexOf(o)&&(r[o]=e[o]);if(null!=e&&C)for(var o of C(e))0>n.indexOf(o)&&P.call(e,o)&&(r[o]=e[o]);return r};let N={span:12},B=(0,v.d)((e,n)=>{let r=(0,y.w)("GridCol",N,e),{classNames:s,className:l,style:a,styles:c,vars:d,span:h,order:p,offset:m}=r,u=z(r,["classNames","className","style","styles","vars","span","order","offset"]),x=i(),f=(0,w.m)();return o.createElement(o.Fragment,null,o.createElement(b,{selector:`.${f}`,span:h,order:p,offset:m}),o.createElement(S.x,I(I({ref:n},x.getStyles("col",{className:(0,t.Z)(l,f),style:a,classNames:s,styles:c})),u)))});B.classes=g,B.displayName="@mantine/core/GridCol";var k=r(71350);function D({gutter:e,selector:n}){let r=(0,c.rZ)(),t=(0,d.L)({"--grid-gutter":(0,k.bG)((0,a.v)(e))}),s=(0,h.X)(r.breakpoints).reduce((n,r)=>(n[r]||(n[r]={}),"object"==typeof e&&void 0!==e[r]&&(n[r]["--grid-gutter"]=(0,k.bG)(e[r])),n),{}),l=(0,p.I)((0,h.X)(s),r).filter(e=>(0,h.X)(s[e.value]).length>0),i=l.map(e=>({query:`(min-width: ${r.breakpoints[e.value]})`,styles:s[e.value]}));return o.createElement(m.f,{styles:t,media:i,selector:n})}var M=r(25637),L=r(95553),A=Object.defineProperty,G=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,V=(e,n,r)=>n in e?A(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,X=(e,n)=>{for(var r in n||(n={}))R.call(n,r)&&V(e,r,n[r]);if(G)for(var r of G(n))F.call(n,r)&&V(e,r,n[r]);return e},q=(e,n)=>{var r={};for(var o in e)R.call(e,o)&&0>n.indexOf(o)&&(r[o]=e[o]);if(null!=e&&G)for(var o of G(e))0>n.indexOf(o)&&F.call(e,o)&&(r[o]=e[o]);return r};let Y={gutter:"md",grow:!1,columns:12},H=(0,L.Z)((e,{justify:n,align:r})=>({root:{"--grid-justify":n,"--grid-align":r}})),Z=(0,v.d)((e,n)=>{let r=(0,y.w)("Grid",Y,e),{classNames:t,className:s,style:i,styles:a,unstyled:c,vars:d,grow:h,gutter:p,columns:m,align:u,justify:x,children:f}=r,j=q(r,["classNames","className","style","styles","unstyled","vars","grow","gutter","columns","align","justify","children"]),b=(0,M.y)({name:"Grid",classes:g,props:r,className:s,style:i,classNames:t,styles:a,unstyled:c,vars:d,varsResolver:H}),v=(0,w.m)();return o.createElement(l,{value:{getStyles:b,grow:h,columns:m}},o.createElement(D,X({selector:`.${v}`},r)),o.createElement(S.x,X(X({ref:n},b("root",{className:v})),j),o.createElement("div",X({},b("inner")),f)))});Z.classes=g,Z.displayName="@mantine/core/Grid",Z.Col=B},55090:function(e,n,r){"use strict";r.d(n,{Y:function(){return G}});var o=r(67294),t=r(62740),s=r(35179),l=r(22188),i=r(382),a=Object.defineProperty,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(e,n,r)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,m=(e,n)=>{for(var r in n||(n={}))d.call(n,r)&&p(e,r,n[r]);if(c)for(var r of c(n))h.call(n,r)&&p(e,r,n[r]);return e},u=(e,n)=>{var r={};for(var o in e)d.call(e,o)&&0>n.indexOf(o)&&(r[o]=e[o]);if(null!=e&&c)for(var o of c(e))0>n.indexOf(o)&&h.call(e,o)&&(r[o]=e[o]);return r};function x(e){var{direction:n,style:r}=e,t=u(e,["direction","style"]);return o.createElement("svg",m({style:m({width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===n?"rotate(180deg)":void 0},r),viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),o.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var f={controls:"m-95e17d22",control:"m-80b4b171"},j=r(90395),b=r(95879),g=r(75144),v=r(35577),y=r(25637),w=r(19732),S=r(95553),E=r(71350),C=Object.defineProperty,T=Object.defineProperties,P=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,N=(e,n,r)=>n in e?C(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,B=(e,n)=>{for(var r in n||(n={}))I.call(n,r)&&N(e,r,n[r]);if(O)for(var r of O(n))z.call(n,r)&&N(e,r,n[r]);return e},k=(e,n)=>T(e,P(n)),D=(e,n)=>{var r={};for(var o in e)I.call(e,o)&&0>n.indexOf(o)&&(r[o]=e[o]);if(null!=e&&O)for(var o of O(e))0>n.indexOf(o)&&z.call(e,o)&&(r[o]=e[o]);return r};function M(e,n,r){return void 0===e||(void 0===n||e>=n)&&(void 0===r||e<=r)}let L={step:1,size:"sm",clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,startValue:0},A=(0,S.Z)((e,{size:n})=>({controls:{"--ni-chevron-size":(0,E.ap)(n,"ni-chevron-size")}})),G=(0,g.d)((e,n)=>{let r=(0,v.w)("NumberInput",L,e),{classNames:a,styles:c,unstyled:d,vars:h,onChange:p,onValueChange:m,value:u,defaultValue:g,max:S,min:E,step:C,hideControls:T,rightSection:P,isAllowed:O,clampBehavior:I,onBlur:z,allowDecimal:N,decimalScale:G,onKeyDown:R,handlersRef:F,startValue:V,disabled:X,rightSectionPointerEvents:q,allowNegative:Y,readOnly:H}=r,Z=D(r,["classNames","styles","unstyled","vars","onChange","onValueChange","value","defaultValue","max","min","step","hideControls","rightSection","isAllowed","clampBehavior","onBlur","allowDecimal","decimalScale","onKeyDown","handlersRef","startValue","disabled","rightSectionPointerEvents","allowNegative","readOnly"]),W=(0,y.y)({name:"NumberInput",classes:f,props:r,classNames:a,styles:c,unstyled:d,vars:h,varsResolver:A}),{resolvedClassNames:$,resolvedStyles:_}=(0,w.h)({classNames:a,styles:c,props:r}),[U,K]=(0,s.C)({value:u,defaultValue:g,onChange:p}),Q=(e,n)=>{var r;K("number"!=typeof(r=e.floatValue)||Number.isNaN(r)?e.value:e.floatValue),null==m||m(e,n)},J=()=>{"number"!=typeof U||Number.isNaN(U)?K(null!=E?E:(0,l.u)(V,E,S)):void 0!==S?K(U+C<=S?U+C:S):K(U+C)},ee=()=>{"number"!=typeof U||Number.isNaN(U)?K(null!=S?S:(0,l.u)(V,E,S)):K(function({value:e,min:n,step:r=1,allowNegative:o}){let t=e-r;return void 0!==n&&t<n?n:!o&&t<0&&void 0===n?e:t}({value:U,min:E,step:C,allowNegative:Y}))},en=e=>{null==R||R(e),H||("ArrowUp"===e.key&&(e.preventDefault(),J()),"ArrowDown"===e.key&&(e.preventDefault(),ee()))};(0,i.kR)(F,{increment:J,decrement:ee});let er=o.createElement("div",B({},W("controls")),o.createElement(j.k,k(B({},W("control")),{tabIndex:-1,"aria-hidden":!0,disabled:X||"number"==typeof U&&void 0!==S&&U>=S,mod:{direction:"up"},onPointerDown:J}),o.createElement(x,{direction:"up"})),o.createElement(j.k,k(B({},W("control")),{tabIndex:-1,"aria-hidden":!0,disabled:X||"number"==typeof U&&void 0!==E&&U<=E,mod:{direction:"down"},onPointerDown:ee}),o.createElement(x,{direction:"down"})));return o.createElement(b.M,k(B({component:t.h3},Z),{readOnly:H,disabled:X,value:U,getInputRef:n,onValueChange:Q,rightSection:T||H?P:P||er,classNames:$,styles:_,unstyled:d,__staticSelector:"NumberInput",decimalScale:N?G:0,onKeyDown:en,rightSectionPointerEvents:(null!=q?q:X)?"none":void 0,onBlur:e=>{null==z||z(e),"blur"===I&&"number"==typeof U&&K((0,l.u)(U,E,S))},isAllowed:e=>"strict"===I?O?O(e)&&M(e.floatValue,E,S):M(e.floatValue,E,S):!O||O(e)}))});G.classes=B(B({},b.M.classes),f),G.displayName="@mantine/core/NumberInput"},32887:function(e,n,r){"use strict";r.d(n,{M:function(){return I}});var o=r(67294),t=r(49441),s=r(56882),l=r(71350),i=r(80931),a=r(40342),c=r(89305),d=r(40128);function h({spacing:e,verticalSpacing:n,cols:r,selector:h}){var p;let m=(0,t.rZ)(),u=(0,s.L)({"--sg-spacing-x":(0,l.bG)((0,i.v)(e)),"--sg-spacing-y":(0,l.bG)((0,i.v)(n)),"--sg-cols":null==(p=(0,i.v)(r))?void 0:p.toString()}),x=(0,a.X)(m.breakpoints).reduce((o,t)=>(o[t]||(o[t]={}),"object"==typeof e&&void 0!==e[t]&&(o[t]["--sg-spacing-x"]=(0,l.bG)(e[t])),"object"==typeof n&&void 0!==n[t]&&(o[t]["--sg-spacing-y"]=(0,l.bG)(n[t])),"object"==typeof r&&void 0!==r[t]&&(o[t]["--sg-cols"]=r[t]),o),{}),f=(0,c.I)((0,a.X)(x),m).filter(e=>(0,a.X)(x[e.value]).length>0),j=f.map(e=>({query:`(min-width: ${m.breakpoints[e.value]})`,styles:x[e.value]}));return o.createElement(d.f,{styles:u,media:j,selector:h})}var p={root:"m-2415a157"},m=r(75144),u=r(35577),x=r(25637),f=r(6937),j=r(51227),b=Object.defineProperty,g=Object.defineProperties,v=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,E=(e,n,r)=>n in e?b(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,C=(e,n)=>{for(var r in n||(n={}))w.call(n,r)&&E(e,r,n[r]);if(y)for(var r of y(n))S.call(n,r)&&E(e,r,n[r]);return e},T=(e,n)=>g(e,v(n)),P=(e,n)=>{var r={};for(var o in e)w.call(e,o)&&0>n.indexOf(o)&&(r[o]=e[o]);if(null!=e&&y)for(var o of y(e))0>n.indexOf(o)&&S.call(e,o)&&(r[o]=e[o]);return r};let O={cols:1,spacing:"md",verticalSpacing:"md"},I=(0,m.d)((e,n)=>{let r=(0,u.w)("SimpleGrid",O,e),{classNames:t,className:s,style:l,styles:i,unstyled:a,vars:c,cols:d,verticalSpacing:m,spacing:b}=r,g=P(r,["classNames","className","style","styles","unstyled","vars","cols","verticalSpacing","spacing"]),v=(0,x.y)({name:"SimpleGrid",classes:p,props:r,className:s,style:l,classNames:t,styles:i,unstyled:a,vars:c}),y=(0,f.m)();return o.createElement(o.Fragment,null,o.createElement(h,T(C({},r),{selector:`.${y}`})),o.createElement(j.x,C(C({ref:n},v("root",{className:y})),g)))});I.classes=p,I.displayName="@mantine/core/SimpleGrid"},24644:function(e,n,r){"use strict";r.d(n,{H:function(){return h}});var o=r(67294),t=r(88269),s=r(34752),l=r(17192);let i=`
function Button() {
  return <button>Click me</button>;
}
`,a=`
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`,c=`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantine/ds';

const tsxCode = \`${i}\`;

const cssCode = \`${a}\`;

function getFileIcon(fileName: string) {
  if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) {
    return <TypeScriptIcon size={18} />;
  }

  if (fileName.endsWith('.css')) {
    return <CssIcon size={18} />;
  }

  return null;
}

function Demo() {
  return (
    <CodeHighlightTabs
      getFileIcon={getFileIcon}
      code={[
        {
          fileName: 'Button.tsx',
          code: tsxCode,
          language: 'tsx',
        },
        {
          fileName: 'Button.module.css',
          code: cssCode,
          language: 'scss',
        },
      ]}
    />
  );
}
`;function d(e){return e.endsWith(".ts")||e.endsWith(".tsx")?o.createElement(t.K,{size:18}):e.endsWith(".css")?o.createElement(s.L,{size:18}):null}let h={type:"code",component:function(){return o.createElement(l.Q,{getFileIcon:d,code:[{fileName:"Button.tsx",code:i,language:"tsx"},{fileName:"Button.module.css",code:a,language:"scss"}]})},code:c}},74504:function(e,n,r){"use strict";r.d(n,{Y:function(){return d}});var o=r(67294),t=r(14437),s=r(64485),l=r(95879),i=r(68267);let a=`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          pointer
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,c=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],d={type:"code",component:function(){let e=(0,t.K)({onDropdownClose:()=>e.resetSelectedOption()}),[n,r]=(0,o.useState)(null),a=c.map(e=>o.createElement(s.h.Option,{value:e,key:e},e));return o.createElement(s.h,{store:e,onOptionSubmit:n=>{r(n),e.closeDropdown()}},o.createElement(s.h.Target,null,o.createElement(l.M,{component:"button",pointer:!0,rightSection:o.createElement(s.h.Chevron,null),onClick:()=>e.toggleDropdown()},n||o.createElement(i.I.Placeholder,null,"Pick value"))),o.createElement(s.h.Dropdown,null,o.createElement(s.h.Options,null,a)))},maxWidth:340,centered:!0,defaultExpanded:!1,code:a}},8162:function(e,n,r){"use strict";r.d(n,{j:function(){return m}});var o=r(67294),t=r(31409),s=r(31577),l=Object.defineProperty,i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,r)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,h=(e,n)=>{for(var r in n||(n={}))a.call(n,r)&&d(e,r,n[r]);if(i)for(var r of i(n))c.call(n,r)&&d(e,r,n[r]);return e};let p=`
import { Fieldset } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information"{{props}}>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />
    </Fieldset>
  );
}
`,m={type:"configurator",component:function(e){return o.createElement(t.p,h({legend:"Personal information"},e),o.createElement(s.o,{label:"Your name",placeholder:"Your name"}),o.createElement(s.o,{label:"Email",placeholder:"Email",mt:"md"}))},code:p,maxWidth:500,centered:!0,controls:[{type:"segmented",prop:"variant",initialValue:"default",libraryValue:"default",data:["default","filled","unstyled"]},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]}},34926:function(e,n,r){"use strict";r.d(n,{j:function(){return i}});var o=r(67294),t=r(68763),s=r(90223);let l=`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>1</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
    </Grid>
  );
}
`,i={type:"code",code:l,component:function(){return o.createElement(t.r,null,o.createElement(s.Y,{span:{base:12,md:6,lg:3}},"1"),o.createElement(s.Y,{span:{base:12,md:6,lg:3}},"2"),o.createElement(s.Y,{span:{base:12,md:6,lg:3}},"3"),o.createElement(s.Y,{span:{base:12,md:6,lg:3}},"4"))}}},90223:function(e,n,r){"use strict";r.d(n,{Y:function(){return m}});var o=r(67294),t=r(68763),s={col:"m-548ba23a",label:"m-60a4592e"},l=Object.defineProperty,i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,r)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,h=(e,n)=>{for(var r in n||(n={}))a.call(n,r)&&d(e,r,n[r]);if(i)for(var r of i(n))c.call(n,r)&&d(e,r,n[r]);return e},p=(e,n)=>{var r={};for(var o in e)a.call(e,o)&&0>n.indexOf(o)&&(r[o]=e[o]);if(null!=e&&i)for(var o of i(e))0>n.indexOf(o)&&c.call(e,o)&&(r[o]=e[o]);return r};function m(e){var{children:n}=e,r=p(e,["children"]);return o.createElement(t.r.Col,h({},r),o.createElement("div",{className:s.col},o.createElement("div",{className:s.label},n)))}},71193:function(e,n,r){"use strict";r.d(n,{j:function(){return m}});var o=r(67294),t=r(74378),s=r(55899),l=Object.defineProperty,i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,r)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,h=(e,n)=>{for(var r in n||(n={}))a.call(n,r)&&d(e,r,n[r]);if(i)for(var r of i(n))c.call(n,r)&&d(e,r,n[r]);return e};let p=`
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
`,m={type:"configurator",component:function(e){return o.createElement(t.Z,h({},e),o.createElement(s.z,{variant:"default"},"First"),o.createElement(s.z,{variant:"default"},"Second"),o.createElement(s.z,{variant:"default"},"Third"))},code:p,controls:[{type:"select",prop:"justify",data:["flex-start","center","space-between","flex-end"],initialValue:"flex-start",libraryValue:"flex-start"},{type:"size",prop:"gap",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"grow",initialValue:!1,libraryValue:!1}]}},55397:function(e,n,r){"use strict";r.d(n,{t:function(){return l}});var o=r(67294),t=r(42249);let s=`
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src={null}
      h={200}
      fallbackSrc="https://placehold.co/600x400?text=Placeholder"
    />
  );
}
`,l={type:"code",component:function(){return o.createElement(t.E,{radius:"md",src:null,h:200,fallbackSrc:"https://placehold.co/600x400?text=Placeholder"})},code:s}},32562:function(e,n,r){"use strict";r.d(n,{v:function(){return a}});var o=r(67294),t=r(31577),s=r(46393),l=r(19786);let i=`
import { TextInput, rem } from '@mantine/core';
import { IconExclamationCircle } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <TextInput placeholder="Error as boolean" label="Error as boolean" error />
      <TextInput
        mt="md"
        placeholder="Error as react node"
        label="Error as react node"
        error="Something went wrong"
      />

      <TextInput
        mt="md"
        placeholder="Without error styles on input"
        label="Without error styles on input"
        error="Something went wrong"
        withErrorStyles={false}
        rightSectionPointerEvents="none"
        rightSection={
          <IconExclamationCircle
            style={{ width: rem(20), height: rem(20) }}
            color="var(--mantine-color-error)"
          />
        }
      />
    </>
  );
}
`,a={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(t.o,{placeholder:"Error as boolean",label:"Error as boolean",error:!0}),o.createElement(t.o,{mt:"md",placeholder:"Error as react node",label:"Error as react node",error:"Something went wrong"}),o.createElement(t.o,{mt:"md",placeholder:"Without error styles on input",label:"Without error styles on input",error:"Something went wrong",withErrorStyles:!1,rightSectionPointerEvents:"none",rightSection:o.createElement(l.Z,{style:{width:(0,s.h)(20),height:(0,s.h)(20)},color:"var(--mantine-color-error)"})}))},code:i,maxWidth:340,centered:!0}},82236:function(e,n,r){"use strict";r.d(n,{g:function(){return s}});var o=r(35552);let t=`
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`,s={type:"configurator",component:o.a,code:t,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"segmented",prop:"type",data:["oval","bars","dots"],initialValue:"oval",libraryValue:"oval"}]}},30527:function(e,n,r){"use strict";r.d(n,{w:function(){return B}});var o=r(67294),t=r(49441),s=r(35552),l=r(40624),i=r(51227),a={loader:"m-25f74dea","loader-animation":"m-739a6f61"},c=Object.defineProperty,d=Object.defineProperties,h=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,x=(e,n,r)=>n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,f=(e,n)=>{for(var r in n||(n={}))m.call(n,r)&&x(e,r,n[r]);if(p)for(var r of p(n))u.call(n,r)&&x(e,r,n[r]);return e},j=(e,n)=>d(e,h(n)),b=(e,n)=>{var r={};for(var o in e)m.call(e,o)&&0>n.indexOf(o)&&(r[o]=e[o]);if(null!=e&&p)for(var o of p(e))0>n.indexOf(o)&&u.call(e,o)&&(r[o]=e[o]);return r};let g=(0,o.forwardRef)((e,n)=>{var{className:r}=e,t=b(e,["className"]);return o.createElement(i.x,j(f({component:"span",className:(0,l.Z)(a.loader,r)},t),{ref:n}))}),v=`
import { forwardRef } from 'react';
import cx from 'clsx';
import { Box, MantineLoaderComponent } from '@mantine/core';
import classes from './CssLoader.module.css';

export const CssLoader: MantineLoaderComponent = forwardRef(({ className, ...others }, ref) => (
  <Box component="span" className={cx(classes.loader, className)} {...others} ref={ref} />
));
`,y=`
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
`;var w=Object.defineProperty,S=Object.defineProperties,E=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,O=(e,n,r)=>n in e?w(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,I=(e,n)=>{for(var r in n||(n={}))T.call(n,r)&&O(e,r,n[r]);if(C)for(var r of C(n))P.call(n,r)&&O(e,r,n[r]);return e},z=(e,n)=>S(e,E(n));let N=`
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
`,B={type:"code",component:function(){return o.createElement(t.M2,{theme:{components:{Loader:s.a.extend({defaultProps:{loaders:z(I({},s.a.defaultLoaders),{custom:g}),type:"custom"}})}}},o.createElement(s.a,null))},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:N},{fileName:"CssLoader.tsx",language:"tsx",code:v},{fileName:"CssLoader.module.css",language:"css",code:y}]}},92108:function(e,n,r){"use strict";r.d(n,{C:function(){return l}});var o=r(67294),t=r(55090);let s=`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="With prefix"
        placeholder="Dollars"
        prefix="$"
        defaultValue={100}
        mb="md"
      />
      <NumberInput
        label="With suffix"
        placeholder="Percents"
        suffix="%"
        defaultValue={100}
        mt="md"
      />
    </>
  );
}
`,l={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(t.Y,{label:"With prefix",placeholder:"Dollars",prefix:"$",defaultValue:100,mb:"md"}),o.createElement(t.Y,{label:"With suffix",placeholder:"Percents",suffix:"%",defaultValue:100,mt:"md"}))},code:s,centered:!0,maxWidth:340}},20199:function(e,n,r){"use strict";r.d(n,{I:function(){return l}});var o=r(67294),t=r(69794);let s=`
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size="xl">
      <Progress.Section value={35} color="cyan">
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
      <Progress.Section value={28} color="pink">
        <Progress.Label>Photos</Progress.Label>
      </Progress.Section>
      <Progress.Section value={15} color="orange">
        <Progress.Label>Other</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}
`,l={type:"code",component:function(){return o.createElement(t.E.Root,{size:"xl"},o.createElement(t.E.Section,{value:35,color:"cyan"},o.createElement(t.E.Label,null,"Documents")),o.createElement(t.E.Section,{value:28,color:"pink"},o.createElement(t.E.Label,null,"Photos")),o.createElement(t.E.Section,{value:15,color:"orange"},o.createElement(t.E.Label,null,"Other")))},code:s}},13688:function(e,n,r){"use strict";r.d(n,{j:function(){return i}});var o=r(67294),t=r(32887),s=r(352);let l=`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 5 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
`,i={type:"code",component:function(){return o.createElement(t.M,{cols:{base:1,sm:2,lg:5},spacing:{base:10,sm:"xl"},verticalSpacing:{base:"md",sm:"xl"}},s.a)},code:l}},352:function(e,n,r){"use strict";r.d(n,{a:function(){return f}});var o=r(67294),t=r(40624),s=r(51227),l=r(77048),i={item:"m-a4dc100e",label:"m-f6c78959"},a=Object.defineProperty,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(e,n,r)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,m=(e,n)=>{for(var r in n||(n={}))d.call(n,r)&&p(e,r,n[r]);if(c)for(var r of c(n))h.call(n,r)&&p(e,r,n[r]);return e},u=(e,n)=>{var r={};for(var o in e)d.call(e,o)&&0>n.indexOf(o)&&(r[o]=e[o]);if(null!=e&&c)for(var o of c(e))0>n.indexOf(o)&&h.call(e,o)&&(r[o]=e[o]);return r};function x(e){var{className:n,children:r}=e,a=u(e,["className","children"]);return o.createElement(s.x,m({className:(0,t.Z)(i.item,n)},a),o.createElement(l.x,{className:i.label},r))}let f=[,,,,,].fill(0).map((e,n)=>o.createElement(x,{key:n},n+1))},60261:function(e,n,r){"use strict";r.d(n,{j:function(){return i}});var o=r(67294),t=r(44311),s=r(19144);let l=`
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
`,i={type:"code",code:l,component:function(){let e=s.R.map(e=>o.createElement(t.i.Tr,{key:e.name},o.createElement(t.i.Td,null,e.position),o.createElement(t.i.Td,null,e.name),o.createElement(t.i.Td,null,e.symbol),o.createElement(t.i.Td,null,e.mass)));return o.createElement(t.i,null,o.createElement(t.i.Thead,null,o.createElement(t.i.Tr,null,o.createElement(t.i.Th,null,"Element position"),o.createElement(t.i.Th,null,"Element name"),o.createElement(t.i.Th,null,"Symbol"),o.createElement(t.i.Th,null,"Atomic mass"))),o.createElement(t.i.Tbody,null,e))}}},19144:function(e,n,r){"use strict";r.d(n,{R:function(){return o}});let o=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}]},75788:function(e,n,r){"use strict";r.d(n,{I:function(){return d}});var o=r(67294),t=r(33346),s=r(2058),l=r(55899),i=r(27854);let a=`
import { useState } from 'react';
import { Spotlight, spotlight } from '@mantine/spotlight';
import { Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const data = ['Home', 'About us', 'Contacts', 'Blog', 'Careers', 'Terms of service'];

function Demo() {
  const [query, setQuery] = useState('');

  const items = data
    .filter((item) => item.toLowerCase().includes(query.toLowerCase().trim()))
    .map((item) => <Spotlight.Action key={item} label={item} />);

  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>

      <Spotlight.Root query={query} onQueryChange={setQuery}>
        <Spotlight.Search placeholder="Search..." leftSection={<IconSearch stroke={1.5} />} />
        <Spotlight.ActionsList>
          {items.length > 0 ? items : <Spotlight.Empty>Nothing found...</Spotlight.Empty>}
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </>
  );
}
`,c=["Home","About us","Contacts","Blog","Careers","Terms of service"],d={type:"code",component:function(){let[e,n]=(0,o.useMemo)(t.Gv,[]),[r,a]=(0,o.useState)(""),d=c.filter(e=>e.toLowerCase().includes(r.toLowerCase().trim())).map(e=>o.createElement(s.$.Action,{key:e,label:e}));return o.createElement(o.Fragment,null,o.createElement(l.z,{onClick:n.open},"Open spotlight"),o.createElement(s.$.Root,{store:e,query:r,onQueryChange:a,shortcut:null},o.createElement(s.$.Search,{placeholder:"Search...",leftSection:o.createElement(i.Z,{stroke:1.5})}),o.createElement(s.$.ActionsList,null,d.length>0?d:o.createElement(s.$.Empty,null,"Nothing found..."))))},code:a,centered:!0}},64465:function(e,n,r){"use strict";r.d(n,{B:function(){return p}});var o=r(67294),t=r(40624),s=r(39242),l=r(31577),i=r(49441),a={labelRequired:"m-686577e7",inputError:"m-933d67aa"};let c=`
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
`,h=(0,s.j)({components:{TextInput:l.o.extend({classNames:(e,n)=>({label:(0,t.Z)({[a.labelRequired]:n.required}),input:(0,t.Z)({[a.inputError]:n.error})})})}}),p={type:"code",component:function(){return o.createElement(i.M2,{theme:h},o.createElement(l.o,{required:!0,label:"Required input",placeholder:"Required input"}),o.createElement(l.o,{error:!0,label:"Input with error",placeholder:"Input with error",mt:"md"}))},code:[{fileName:"Demo.tsx",code:c,language:"tsx"},{fileName:"Demo.module.css",code:d,language:"css"}]}},39442:function(e,n,r){"use strict";r.d(n,{j:function(){return a}});var o=r(67294),t=r(68267),s={input:"m-93131372"};let l=`
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
`,i=`
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
`,a={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(t.I,{classNames:s,variant:"underline",placeholder:"Underline input"}),o.createElement(t.I,{classNames:s,variant:"filled",placeholder:"Filled input",mt:"md"}))},maxWidth:360,centered:!0,code:[{fileName:"Demo.tsx",code:l,language:"tsx"},{fileName:"Demo.module.css",code:i,language:"css"}]}},72423:function(e,n,r){"use strict";r.d(n,{R:function(){return d}});var o=r(67294),t=r(39242),s=r(68267),l=r(49441);let i=`
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
`,c=(0,t.j)({components:{Input:s.I.extend({classNames:{wrapper:"m-b4c95450",input:"m-2be5f2c7"}})}}),d={type:"code",component:function(){return o.createElement(l.M2,{theme:c},o.createElement(s.I,{placeholder:"Size XXL",size:"xxl"}),o.createElement(s.I,{placeholder:"Size XXS",size:"xxs",mt:"md"}))},maxWidth:360,centered:!0,code:[{language:"tsx",code:i,fileName:"Demo.tsx"},{language:"css",code:a,fileName:"Demo.module.css"}]}},93481:function(e,n,r){"use strict";r.d(n,{n:function(){return i}});var o=r(67294),t=r(74378),s=r(55899);let l=`
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Button hiddenFrom="sm" color="orange">
        Hidden from sm
      </Button>
      <Button visibleFrom="sm" color="cyan">
        Visible from sm
      </Button>
      <Button visibleFrom="md" color="pink">
        Visible from md
      </Button>
    </Group>
  );
}
`,i={type:"code",component:function(){return o.createElement(t.Z,{justify:"center"},o.createElement(s.z,{hiddenFrom:"sm",color:"orange"},"Hidden from sm"),o.createElement(s.z,{visibleFrom:"sm",color:"cyan"},"Visible from sm"),o.createElement(s.z,{visibleFrom:"md",color:"pink"},"Visible from md"))},code:l}},67977:function(e,n,r){"use strict";r.d(n,{g:function(){return d}});var o=r(67294),t=r(46393),s=r(55899),l=r(74378);let i=`
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
`,c=(e,n)=>"xxl"===n.size?{root:{"--button-height":(0,t.h)(60),"--button-padding-x":(0,t.h)(30),"--button-fz":(0,t.h)(24)}}:"xxs"===n.size?{root:{"--button-height":(0,t.h)(24),"--button-padding-x":(0,t.h)(10),"--button-fz":(0,t.h)(10)}}:{root:{}};s.z.extend({vars:(e,n)=>"xxl"===n.size?{root:{"--button-height":(0,t.h)(60),"--button-padding-x":(0,t.h)(30),"--button-fz":(0,t.h)(24)}}:"xxs"===n.size?{root:{"--button-height":(0,t.h)(24),"--button-padding-x":(0,t.h)(10),"--button-fz":(0,t.h)(10)}}:{root:{}}});let d={type:"code",component:function(){return o.createElement(l.Z,null,o.createElement(s.z,{vars:c,size:"xxl"},"XXL Button"),o.createElement(s.z,{vars:c,size:"xxs"},"XXS Button"))},centered:!0,code:[{code:a,language:"tsx",fileName:"MantineProvider.tsx"},{code:i,language:"tsx",fileName:"Inline.tsx"}]}},75646:function(e,n,r){"use strict";r.d(n,{m:function(){return a}});var o=r(67294),t=r(77048),s=r(74378),l=r(55899);let i=`
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

`,a={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(t.x,{size:"sm",mb:5,fw:500},"Filled variant"),o.createElement(s.Z,null,o.createElement(l.z,{color:"cyan"},"Theme color"),o.createElement(l.z,{color:"#1D72FE"},"Hex color")),o.createElement(t.x,{size:"sm",mb:5,mt:"md",fw:500},"Light variant"),o.createElement(s.Z,null,o.createElement(l.z,{variant:"light",color:"cyan"},"Theme color"),o.createElement(l.z,{variant:"light",color:"#1D72FE"},"Hex color")),o.createElement(t.x,{size:"sm",mb:5,mt:"md",fw:500},"Outline variant"),o.createElement(s.Z,null,o.createElement(l.z,{variant:"outline",color:"cyan"},"Theme color"),o.createElement(l.z,{variant:"outline",color:"#1D72FE"},"Hex color")))},defaultExpanded:!1,code:i}},76382:function(e,n,r){"use strict";r.d(n,{U:function(){return a}});var o=r(67294),t=r(18297),s=r(74378),l=r(55899);let i=`
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
`,a={type:"code",component:function(){let{setColorScheme:e,clearColorScheme:n}=(0,t.X)();return o.createElement(s.Z,null,o.createElement(l.z,{onClick:()=>e("light")},"Light"),o.createElement(l.z,{onClick:()=>e("dark")},"Dark"),o.createElement(l.z,{onClick:()=>e("auto")},"Auto"),o.createElement(l.z,{onClick:n},"Clear"))},centered:!0,code:i}},10460:function(e,n,r){"use strict";r.d(n,{D:function(){return S}});var o=r(67294),t=r(28274),s=r(31254),l=r(26595),i=r(46393),a=r(8781),c=r(49441),d=r(74378),h=r(55899),p=Object.defineProperty,m=Object.defineProperties,u=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,b=(e,n,r)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,g=(e,n)=>{for(var r in n||(n={}))f.call(n,r)&&b(e,r,n[r]);if(x)for(var r of x(n))j.call(n,r)&&b(e,r,n[r]);return e},v=(e,n)=>m(e,u(n));let y=`
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
`,w=e=>{let n=(0,t.B)(e),r=(0,s.E)({color:e.color||e.theme.primaryColor,theme:e.theme});return r.isThemeColor&&"lime"===r.color&&"filled"===e.variant?v(g({},n),{color:"var(--mantine-color-black)"}):"light"===e.variant?{background:(0,l.m)(r.value,.1),hover:(0,l.m)(r.value,.15),border:`${(0,i.h)(1)} solid ${r.value}`,color:(0,a._)(r.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:n},S={type:"code",component:function(){return o.createElement(c.M2,{theme:{variantColorResolver:w}},o.createElement(d.Z,null,o.createElement(h.z,{color:"lime.4",variant:"filled"},"Lime filled button"),o.createElement(h.z,{color:"orange",variant:"light"},"Orange light button"),o.createElement(h.z,{variant:"danger"},"Danger button")))},centered:!0,code:y}}},function(e){e.O(0,[4136,213,1300,178,4485,1347,9077,9774,2888,179],function(){return e(e.s=84744)}),_N_E=e.O()}]);