(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3544],{84744:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-0-0",function(){return o(63775)}])},63775:function(e,n,o){"use strict";o.r(n);var r=o(85893),t=o(11151),s=o(34940),l=o(25263),i=o(43406),a=o(76382),c=o(64465),d=o(67977),h=o(39442),p=o(72423),m=o(10460),u=o(75646),x=o(82236),f=o(30527),j=o(60261),b=o(71193),g=o(8162),y=o(74504),v=o(81347);let w=(0,s.A)(l.us.Changelog700);function T(e){let n=Object.assign({h2:"h2",p:"p",a:"a",code:"code",pre:"pre",ul:"ul",li:"li"},(0,t.ah)(),e.components),{Demo:o,DataTable:s}=n;return s||C("DataTable",!0),o||C("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"migration-to-native-css",children:"Migration to native CSS"}),"\n",(0,r.jsxs)(n.p,{children:["Mantine no longer depends on ",(0,r.jsx)(n.a,{href:"https://emotion.sh/",children:"Emotion"})," for styles generation. All ",(0,r.jsx)(n.code,{children:"@mantine/*"}),"\npackages are now shipped with native CSS files which can be imported from ",(0,r.jsx)(n.code,{children:"@mantine/{package}/styles.css"}),",\nfor example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import '@mantine/core/styles.css';\n"})}),"\n",(0,r.jsx)(n.p,{children:"This change improves performance, reduces bundle size of the library and allows using Mantine\nin environments where CSS-in-JS is not supported (or supported with limitations), for example,\nNext.js app directory."}),"\n",(0,r.jsx)(n.p,{children:"Notable breaking changes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"createStyles"})," function is no longer available, use ",(0,r.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," or any other styling solution of your choice instead"]}),"\n",(0,r.jsxs)(n.li,{children:["Components no longer support ",(0,r.jsx)(n.code,{children:"sx"})," prop. You can use ",(0,r.jsx)(n.code,{children:"className"})," or ",(0,r.jsx)(n.code,{children:"style"})," props instead."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"styles"})," prop no longer supports nested selectors"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["It is now recommended to use ",(0,r.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," to style Mantine components.\nTo update your project to ",(0,r.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"}),"\nfollow the ",(0,r.jsx)(n.a,{href:"/guides/6x-to-7x",children:"6.x → 7.x migration guide"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"vanilla-extract-integration",children:"Vanilla extract integration"}),"\n",(0,r.jsxs)(n.p,{children:["If you prefer CSS-in-JS syntax for styling, you can use ",(0,r.jsx)(n.a,{href:"/styles/vanilla-extract",children:"Vanilla extract"}),"\nas a TypeScript CSS preprocessor. You will be able to use most of Mantine styling features\nwith ",(0,r.jsx)(n.a,{href:"/styles/vanilla-extract",children:"Vanilla extract"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"system-color-scheme-support",children:"System color scheme support"}),"\n",(0,r.jsxs)(n.p,{children:["All components now support system color scheme – when ",(0,r.jsx)(n.code,{children:"colorScheme"})," value is ",(0,r.jsx)(n.code,{children:"auto"}),",\ncomponents will use ",(0,r.jsx)(n.code,{children:"prefers-color-scheme"})," media query to determine if user prefers light or dark color scheme."]}),"\n",(0,r.jsx)(n.h2,{id:"built-in-color-scheme-manager",children:"Built-in color scheme manager"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," now comes with built-in color scheme manager.\nIt is no longer required to use any other components to setup color scheme logic.\nColor scheme can be changed with ",(0,r.jsx)(n.a,{href:"/theming/color-schemes#use-mantine-color-scheme-hook",children:"useMantineColorScheme hook"}),":"]}),"\n",(0,r.jsx)(o,{data:a.U}),"\n",(0,r.jsx)(n.h2,{id:"css-modules-and-postcss-preset",children:"CSS modules and PostCSS preset"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," is now the recommended way to style Mantine components,\nalthough it is not required – you can choose any other styling solution of your choice."]}),"\n",(0,r.jsxs)(n.p,{children:["It is also recommended to use ",(0,r.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),". It includes\nmixins and functions to simplify styling of Mantine components. ",(0,r.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),"\nis included in all templates."]}),"\n",(0,r.jsx)(n.h2,{id:"global-styles",children:"Global styles"}),"\n",(0,r.jsxs)(n.p,{children:["Mantine no longer includes normalize.css. Instead, it uses a bare minimum set of ",(0,r.jsx)(n.a,{href:"/styles/global-styles",children:"global styles"}),".\nThese styles are part of the ",(0,r.jsx)(n.code,{children:"@mantine/core"})," package and are applied automatically when you import\n",(0,r.jsx)(n.code,{children:"@mantine/core/styles.css"})," in your application. Note that these styles cannot be decoupled from the\nrest of the library."]}),"\n",(0,r.jsx)(n.h2,{id:"mantine-as-a-headless-ui-library",children:"Mantine as a headless UI library"}),"\n",(0,r.jsxs)(n.p,{children:["You can now use Mantine as a ",(0,r.jsx)(n.a,{href:"/styles/unstyled",children:"headless"})," library. To do that, just do not import\n",(0,r.jsx)(n.code,{children:"@mantine/*/styles.css"})," in your application. Then you will be able to apply styles with\n",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"createtheme-function",children:"createTheme function"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"createTheme"})," function is a replacement for ",(0,r.jsx)(n.code,{children:"MantineThemeOverride"})," type. Use it to create a theme\noverride, it will give you autocomplete for all theme properties:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  fontFamily: 'sans-serif',\n  primaryColor: 'orange',\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"components-extend-functions",children:"Components extend functions"}),"\n",(0,r.jsxs)(n.p,{children:["All components now have static ",(0,r.jsx)(n.code,{children:"extend"})," function which allows getting autocomplete when customizing\n",(0,r.jsx)(n.a,{href:"/theming/default-props",children:"defaultProps"}),", ",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"classNames and styles"})," of the component\non ",(0,r.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { TextInput, MantineProvider, createTheme } from '@mantine/core';\nimport classes from './Demo.module.css';\n\nconst theme = createTheme({\n  components: {\n    TextInput: TextInput.extends({\n      styles: (theme, props) => ({\n        input: {\n          fontSize: props.size === 'compact' ? theme.fontSizes.sm : undefined,\n        }\n      })\n      classNames: {\n        root: classes.root,\n        input: classes.input,\n        label: classes.label,\n      },\n\n      defaultProps: {\n        size: 'compact',\n      },\n    }),\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"classnames-based-on-component-props",children:"classNames based on component props"}),"\n",(0,r.jsxs)(n.p,{children:["You can now get component props in ",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"classNames and styles"})," to conditionally apply styles.\nThis feature is a more powerful replacement for styles params."]}),"\n",(0,r.jsx)(o,{data:c.B}),"\n",(0,r.jsx)(n.h2,{id:"components-css-variables",children:"Components CSS variables"}),"\n",(0,r.jsxs)(n.p,{children:["You can now customize components ",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"})," to change component styles based on its props.\nFor example, it can be used to add new ",(0,r.jsx)(n.a,{href:"/styles/variants-sizes",children:"sizes"}),":"]}),"\n",(0,r.jsx)(o,{data:d.g}),"\n",(0,r.jsx)(n.h2,{id:"new-variants-system",children:"New variants system"}),"\n",(0,r.jsxs)(n.p,{children:["All components now have ",(0,r.jsx)(n.code,{children:"data-variant"})," attribute on the root element, even if component does not have any predefined variants.\nYou can use it to apply styles to all components of the same type on ",(0,r.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,r.jsx)(o,{data:h.j}),"\n",(0,r.jsx)(n.h2,{id:"new-sizes-system",children:"New sizes system"}),"\n",(0,r.jsx)(n.p,{children:"There are multiple way to customize component sizes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["With ",(0,r.jsx)(n.code,{children:"data-size"})," attribute"]}),"\n",(0,r.jsxs)(n.li,{children:["With component ",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"})]}),"\n",(0,r.jsxs)(n.li,{children:["With ",(0,r.jsx)(n.a,{href:"/styles/variants-sizes#sizes-with-static-css-variables",children:"static CSS variables"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Example of customizing ",(0,r.jsx)(n.a,{href:"/core/button",children:"Button"})," size with ",(0,r.jsx)(n.code,{children:"data-size"})," attribute:"]}),"\n",(0,r.jsx)(o,{data:p.R}),"\n",(0,r.jsx)(n.h2,{id:"themevariantcolorresolver",children:"theme.variantColorResolver"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/button",children:"Button"}),", ",(0,r.jsx)(n.a,{href:"/core/badge",children:"Badge"}),", ",(0,r.jsx)(n.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,r.jsx)(n.a,{href:"/core/theme-icon",children:"ThemeIcon"})," and other\ncomponents support custom variants with ",(0,r.jsx)(n.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"}),"\n– it supports both changing colors of existing variants and adding new variants."]}),"\n",(0,r.jsx)(o,{data:m.D}),"\n",(0,r.jsx)(n.h2,{id:"rem-units-scaling",children:"rem units scaling"}),"\n",(0,r.jsxs)(n.p,{children:["It is now possible to scale ",(0,r.jsx)(n.a,{href:"/styles/rem#rem-units-scaling",children:"rem"})," units. It is useful when you want to change\nfont-size of ",(0,r.jsx)(n.code,{children:"html"}),"/",(0,r.jsx)(n.code,{children:":root"})," element and preserve Mantine components sizes. For example, if you want to set ",(0,r.jsx)(n.code,{children:"html"})," font-size to ",(0,r.jsx)(n.code,{children:"10px"})," and scale Mantine components accordingly, you need\nto set ",(0,r.jsx)(n.code,{children:"scale"})," to ",(0,r.jsx)(n.code,{children:"1 / (10 / 16)"})," (16 – default font-size) = ",(0,r.jsx)(n.code,{children:"1 / 0.625"})," = ",(0,r.jsx)(n.code,{children:"1.6"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:":root {\n  font-size: 10px;\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider, createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  scale: 1.6,\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"color-prop-improvements",children:"color prop improvements"}),"\n",(0,r.jsxs)(n.p,{children:["All components that support ",(0,r.jsx)(n.code,{children:"color"})," prop now support the following color values:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Key of ",(0,r.jsx)(n.code,{children:"theme.colors"}),", for example, ",(0,r.jsx)(n.code,{children:"blue"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.colors"})," index reference, for example, ",(0,r.jsx)(n.code,{children:"blue.5"})]}),"\n",(0,r.jsxs)(n.li,{children:["Any valid CSS color value, for example, ",(0,r.jsx)(n.code,{children:"#fff"}),", ",(0,r.jsx)(n.code,{children:"rgba(0, 0, 0, 0.5)"}),", ",(0,r.jsx)(n.code,{children:"hsl(0, 0%, 100%)"})]}),"\n"]}),"\n",(0,r.jsx)(o,{data:u.m}),"\n",(0,r.jsx)(n.h2,{id:"components-classes",children:"Components classes"}),"\n",(0,r.jsxs)(n.p,{children:["Classes of each component are now available in ",(0,r.jsx)(n.code,{children:"Component.classes"})," object. For example, you can\nfind ",(0,r.jsx)(n.a,{href:"/core/button",children:"Button"})," classes in ",(0,r.jsx)(n.code,{children:"Button.classes"}),":"]}),"\n",(0,r.jsx)(s,{head:["Key","Class"],data:Object.keys(i.z.classes).map(e=>[e,i.z.classes[e]])}),"\n",(0,r.jsx)(n.p,{children:"You can use these classes to create components with the same styles as Mantine components:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\nfunction Demo() {\n  return <button type=\"button\" className={Button.classes.root} />;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"theme-object-changes",children:"Theme object changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.lineHeight"})," is now ",(0,r.jsx)(n.code,{children:"theme.lineHeights"})," – it is now possible to specify multiple line heights. ",(0,r.jsx)(n.code,{children:"theme.lineHeights"})," values are used in ",(0,r.jsx)(n.a,{href:"/core/text",children:"Text"})," component."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.colorScheme"})," is no longer available, use ",(0,r.jsx)(n.a,{href:"/theming/color-schemes#use-mantine-color-scheme-hook",children:"useMantineColorScheme"})," to get color scheme value"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.dir"})," is no longer needed, direction is now managed by ",(0,r.jsx)(n.a,{href:"/styles/rtl",children:"DirectionProvider"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.loader"})," was removed, you can now configure default loader with ",(0,r.jsx)(n.a,{href:"/theming/default-props",children:"default props"})," of ",(0,r.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.transitionTimingFunction"})," was removed"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.focusRingStyles"})," was replaced with ",(0,r.jsx)(n.code,{children:"theme.focusClassName"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.activeStyles"})," was replaced with ",(0,r.jsx)(n.code,{children:"theme.activeClassName"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.globalStyles"})," was removed"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.fn"})," functions were removed, some of the functions are available as ",(0,r.jsx)(n.a,{href:"/styles/color-functions",children:"standalone utilities"})]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.a,{href:"/styles/rem#rem-units-scaling",children:"theme.scale"})," property controls rem units scaling"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"theme.fontSmoothing"})," property determines whether font smoothing styles should be applied to the body element"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.a,{href:"/theming/colors#colors-variant-resolver",children:"theme.variantColorResolver"})," property allows to customize component colors per variant"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"colors-generator",children:"Colors generator"}),"\n",(0,r.jsxs)(n.p,{children:["New ",(0,r.jsx)(n.a,{href:"/theming/colors#colors-generation",children:"@mantine/colors-generator"})," package is now available to generate\ncolor palettes based on single color value. It is also available as ",(0,r.jsx)(n.a,{href:"/colors-generator/",children:"online tool"}),".\nNote that it is usually better to generate colors in advance to avoid contrast issues."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { generateColors } from '@mantine/colors-generator';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        colors: {\n          'pale-blue': generateColors('#375EAC'),\n        },\n      }}\n    >\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"new-setup-for-rtl",children:"New setup for RTL"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@mantine/core"})," package now exports ",(0,r.jsx)(n.a,{href:"/styles/rtl",children:"DirectionProvider"})," component which should be used to configure direction of the application.\n",(0,r.jsx)(n.code,{children:"useDirection"})," hook can be used to toggle direction. All components now include RTL styles by default, it is no\nlonger required to setup additional plugins. See ",(0,r.jsx)(n.a,{href:"/styles/rtl",children:"RTL documentation"})," to learn more."]}),"\n",(0,r.jsx)(n.h2,{id:"react-18-only",children:"React 18+ only"}),"\n",(0,r.jsxs)(n.p,{children:["Starting from version 7.0 Mantine no longer supports older React versions. Minimum supported version is now React 18.\nIt is required because Mantine components now use ",(0,r.jsx)(n.a,{href:"https://react.dev/reference/react/useId",children:"useId"})," and ",(0,r.jsx)(n.a,{href:"https://react.dev/reference/react/useSyncExternalStore",children:"useSyncExternalStore"}),"\nhooks which are available only in React 18."]}),"\n",(0,r.jsx)(n.h2,{id:"loader-changes",children:"Loader changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component is now built with CSS only. This change improves performance and reduces\nHTML output of the component."]}),"\n",(0,r.jsx)(o,{data:x.g}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/theming/theme-object",children:"Theme"})," object no longer supports ",(0,r.jsx)(n.code,{children:"theme.loader"})," prop –\nit is also now possible to add custom loaders on ",(0,r.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," with ",(0,r.jsx)(n.a,{href:"/theming/default-props",children:"default prop"}),".\nSpecified ",(0,r.jsx)(n.a,{href:"/core/loader",children:"Loader"})," will be used in all components that use it under the hood (",(0,r.jsx)(n.a,{href:"/core/loading-overlay",children:"LoadingOverlay"}),", ",(0,r.jsx)(n.a,{href:"/core/button",children:"Button"}),", ",(0,r.jsx)(n.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,r.jsx)(n.a,{href:"/core/stepper",children:"Stepper"}),", etc.)."]}),"\n",(0,r.jsx)(o,{data:f.w}),"\n",(0,r.jsx)(n.h2,{id:"table-changes",children:"Table changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/table",children:"Table"})," component changes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," support"]}),"\n",(0,r.jsxs)(n.li,{children:["It is now required to use compound components instead of elements: ",(0,r.jsx)(n.code,{children:"Table.Tr"}),", ",(0,r.jsx)(n.code,{children:"Table.Td"}),", etc."]}),"\n",(0,r.jsx)(n.li,{children:"It is now easier to override styles – all styles are added with classes instead of deeply nested selectors on root element"}),"\n",(0,r.jsxs)(n.li,{children:["New props: ",(0,r.jsx)(n.code,{children:"borderColor"}),", ",(0,r.jsx)(n.code,{children:"withRowBorders"}),", ",(0,r.jsx)(n.code,{children:"stripedColor"}),", ",(0,r.jsx)(n.code,{children:"highlightOnHoverColor"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"withBorder"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"withTableBorder"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fontSize"})," prop was removed, use ",(0,r.jsx)(n.code,{children:"fz"})," ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})," instead"]}),"\n"]}),"\n",(0,r.jsx)(o,{data:j.j}),"\n",(0,r.jsx)(n.h2,{id:"group-changes",children:"Group changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/group",children:"Group"})," component changes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"position"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"justify"})," – it now supports all ",(0,r.jsx)(n.code,{children:"justify-content"})," values"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"noWrap"})," prop was replaced with ",(0,r.jsx)(n.code,{children:'wrap="nowrap"'}),", ",(0,r.jsx)(n.code,{children:"wrap"})," prop now supports all ",(0,r.jsx)(n.code,{children:"flex-wrap"})," values"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"spacing"})," prop was replaced with ",(0,r.jsx)(n.code,{children:"gap"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Group"})," now supports new ",(0,r.jsx)(n.code,{children:"preventGrowOverflow"})," prop which allows to customize how group items will behave when they grow larger than their dedicated space"]}),"\n"]}),"\n",(0,r.jsx)(o,{data:b.j}),"\n",(0,r.jsx)(n.h2,{id:"tabs-changes",children:"Tabs changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Styles API selector ",(0,r.jsx)(n.code,{children:"tabsList"})," renamed to ",(0,r.jsx)(n.code,{children:"list"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"TabProps"})," type was renamed to ",(0,r.jsx)(n.code,{children:"TabsTabProps"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onTabChange"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"onChange"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Tabs.List"})," ",(0,r.jsx)(n.code,{children:"position"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"justify"}),", it now supports all ",(0,r.jsx)(n.code,{children:"justify-content"})," values"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"button-changes",children:"Button changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"compact"})," prop was removed, use ",(0,r.jsx)(n.code,{children:'size="compact-XXX"'})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"leftIcon"})," and ",(0,r.jsx)(n.code,{children:"rightIcon"})," props were renamed to ",(0,r.jsx)(n.code,{children:"leftSection"})," and ",(0,r.jsx)(n.code,{children:"rightSection"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"uppercase"})," prop was removed, use ",(0,r.jsx)(n.code,{children:"tt"})," ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"loaderPosition"})," prop was removed, ",(0,r.jsx)(n.a,{href:"/core/loader",children:"Loader"})," is now always rendered on the center to prevent layout shifts"]}),"\n",(0,r.jsxs)(n.li,{children:["Styles API selectors were changed, see ",(0,r.jsx)(n.a,{href:"/core/button?t=styles-api",children:"Button Styles API"})," documentation for more details"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"mantineprism-deprecation",children:"@mantine/prism deprecation"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@mantine/prism"})," package was deprecated in favor of ",(0,r.jsx)(n.code,{children:"@mantine/code-highlight"})," package. ",(0,r.jsx)(n.a,{href:"/others/code-highlight",children:"New package"})," uses ",(0,r.jsx)(n.a,{href:"https://highlightjs.org/",children:"highlight.js"})," instead of ",(0,r.jsx)(n.a,{href:"https://prismjs.com/",children:"Prism"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"fieldset-component",children:"Fieldset component"}),"\n",(0,r.jsxs)(n.p,{children:["New ",(0,r.jsx)(n.a,{href:"/core/fieldset",children:"Fieldset"})," component:"]}),"\n",(0,r.jsx)(o,{data:g.j}),"\n",(0,r.jsx)(n.h2,{id:"combobox-component",children:"Combobox component"}),"\n",(0,r.jsxs)(n.p,{children:["New ",(0,r.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," component allows building custom select, autocomplete, tags input, multiselect and other\nsimilar components. It is used as a base for updated ",(0,r.jsx)(n.a,{href:"/core/autocomplete",children:"Autocomplete"}),", ",(0,r.jsx)(n.a,{href:"/core/select",children:"Select"}),",\n",(0,r.jsx)(n.a,{href:"/core/tags-input",children:"TagsInput"})," and ",(0,r.jsx)(n.a,{href:"/core/multi-select",children:"MultiSelect"})," components."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," is very flexible and allows you to have full control over the component rendering and logic.\nAdvanced features that were previously implemented in ",(0,r.jsx)(n.a,{href:"/core/autocomplete",children:"Autocomplete"}),", ",(0,r.jsx)(n.a,{href:"/core/select",children:"Select"}),"\nand ",(0,r.jsx)(n.a,{href:"/core/multi-select",children:"MultiSelect"})," are now supposed to be implemented with ",(0,r.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," instead."]}),"\n",(0,r.jsxs)(n.p,{children:["You can find 50+ ",(0,r.jsx)(n.code,{children:"Combobox"})," examples on ",(0,r.jsx)(n.a,{href:"/combobox",children:"this page"})]}),"\n",(0,r.jsx)(o,{data:y.Y}),"\n",(0,r.jsx)(n.h2,{id:"tagsinput-component",children:"TagsInput component"}),"\n",(0,r.jsxs)(n.p,{children:["New ",(0,r.jsx)(n.a,{href:"/core/tags-input",children:"TagsInput"})," component based on ",(0,r.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," component.\nThe component is similar to ",(0,r.jsx)(n.a,{href:"/core/multi-select",children:"MultiSelect"})," but allows entering custom values."]}),"\n",(0,r.jsx)(o,{data:v.a}),"\n",(0,r.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.a,{href:"/core/visually-hidden",children:"VisuallyHidden"})," component"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.a,{href:"/core/action-icon#actionicongroup",children:"ActionIcon.Group"})," component"]}),"\n",(0,r.jsx)(n.li,{children:"All transitions are now disabled during color scheme change"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.respectReducedMotion"})," is now set to ",(0,r.jsx)(n.code,{children:"false"})," by default – it caused a lot of confusion for users who did not know about it"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/others/notifications",children:"Notifications system"})," now exports ",(0,r.jsx)(n.code,{children:"notifications.updateState"})," function to update notifications state with a given callback"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/blockquote",children:"Blockquote"})," components has new design"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/breadcrumbs",children:"Breadcrumbs"})," component now supports ",(0,r.jsx)(n.code,{children:"separatorMargin"})," prop"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"})," component now supports ",(0,r.jsx)(n.code,{children:"mainAxis"})," and ",(0,r.jsx)(n.code,{children:"crossAxis"})," offset configuration"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/slider",children:"Slider and RangeSlider"})," components ",(0,r.jsx)(n.code,{children:"radius"})," prop now affects thumb as well as track"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/native-select/",children:"NativeSelect"})," component now supports setting options as ",(0,r.jsx)(n.code,{children:"children"})," and options groups"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/anchor",children:"Anchor"})," component now supports ",(0,r.jsx)(n.code,{children:"underline"})," prop which lets you configure how link will be underlined: ",(0,r.jsx)(n.code,{children:"hover"})," (default), ",(0,r.jsx)(n.code,{children:"always"})," or ",(0,r.jsx)(n.code,{children:"never"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/affix",children:"Affix"})," component no longer supports ",(0,r.jsx)(n.code,{children:"target"})," prop, use ",(0,r.jsx)(n.code,{children:"portalProps"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/container",children:"Container"})," component no longer supports ",(0,r.jsx)(n.code,{children:"sizes"})," prop, use ",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"})," to customize sizes on ",(0,r.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"useComponentDefaultProps"})," hook was renamed to ",(0,r.jsx)(n.a,{href:"theming/default-props#useprops-hook",children:"useProps"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"withinPortal"})," prop is now true by default in all overlay components (",(0,r.jsx)(n.a,{href:"/core/popover",children:"Popover"}),", ",(0,r.jsx)(n.a,{href:"/core/hover-card",children:"HoverCard"}),", ",(0,r.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"}),", etc.)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AlphaSlider"})," and ",(0,r.jsx)(n.code,{children:"HueSlider"})," components are no longer available, they can be used only as a part of ",(0,r.jsx)(n.a,{href:"/core/color-picker",children:"ColorPicker"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/text",children:"Text"})," default root element is now ",(0,r.jsx)(n.code,{children:"<p />"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/title",children:"Title"})," no longer supports all ",(0,r.jsx)(n.a,{href:"/core/text",children:"Text"})," props, only ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style props"})," are available"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"MediaQuery"})," component was removed – use ",(0,r.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," to apply responsive styles"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/highlight",children:"Highlight"})," component prop ",(0,r.jsx)(n.code,{children:"highlightColor"})," was renamed to ",(0,r.jsx)(n.code,{children:"color"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip and Tooltip.Floating"})," components no longer support ",(0,r.jsx)(n.code,{children:"width"})," prop, use ",(0,r.jsx)(n.code,{children:"w"})," ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/stack",children:"Stack"})," component ",(0,r.jsx)(n.code,{children:"spacing"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"gap"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/input",children:"Input"})," and other ",(0,r.jsx)(n.code,{children:"Input"})," based components ",(0,r.jsx)(n.code,{children:"icon"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"leftSection"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component ",(0,r.jsx)(n.code,{children:"variant"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"type"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@mantine/core"})," package no longer depends on ",(0,r.jsx)(n.a,{href:"https://www.radix-ui.com/docs/primitives/components/scroll-area#scroll-area",children:"Radix UI ScrollArea"}),", ",(0,r.jsx)(n.a,{href:"/core/scroll-area",children:"ScrollArea"})," component is now a native Mantine component – it reduces bundle size, allows to set CSP for styles and improves performance (all styles are now applied with classes instead of inline ",(0,r.jsx)(n.code,{children:"<style />"})," tags)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/overlay",children:"Overlay"})," ",(0,r.jsx)(n.code,{children:"opacity"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"backgroundOpacity"})," to avoid collision with ",(0,r.jsx)(n.code,{children:"opacity"})," ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/badge",children:"Badge"})," Styles API selectors were changed, see ",(0,r.jsx)(n.a,{href:"/core/badge?t=styles-api",children:"Badge Styles API"})," documentation for more details"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/slider",children:"Slider"})," Styles API selectors were changed, see ",(0,r.jsx)(n.a,{href:"/core/slider?t=styles-api",children:"Slider Styles API"})," documentation for more details"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/text",children:"Text"})," component no longer supports ",(0,r.jsx)(n.code,{children:"underline"}),", ",(0,r.jsx)(n.code,{children:"color"}),", ",(0,r.jsx)(n.code,{children:"strikethrough"}),", ",(0,r.jsx)(n.code,{children:"italic"}),", ",(0,r.jsx)(n.code,{children:"transform"}),", ",(0,r.jsx)(n.code,{children:"align"})," and ",(0,r.jsx)(n.code,{children:"weight"})," prop – use ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style props"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/portal",children:"Portal"})," component ",(0,r.jsx)(n.code,{children:"innerRef"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"ref"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/scroll-area",children:"ScrollArea"})," now supports ",(0,r.jsx)(n.code,{children:"x"})," and ",(0,r.jsx)(n.code,{children:"y"})," values in ",(0,r.jsx)(n.code,{children:"offsetScrollbars"})," prop"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"TransferList"})," component is no longer available as a part of ",(0,r.jsx)(n.code,{children:"@mantine/core"})," package, instead you can implement it with ",(0,r.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," component (",(0,r.jsx)(n.a,{href:"/combobox?e=TransferList",children:"example"}),")"]}),"\n"]})]})}function C(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(w,Object.assign({},e,{children:(0,r.jsx)(T,e)}))}},31409:function(e,n,o){"use strict";o.d(n,{p:function(){return y}});var r=o(67294),t={root:"mantine-aYUA2uh","root--default":"mantine-i9y-4gb","root--filled":"mantine-WcH2V6P","root--unstyled":"mantine-N3Q57Rh",legend:"mantine-CEzegbW","legend--unstyled":"mantine-9sufIFG"},s=o(75144),l=o(35577),i=o(25637),a=o(94873),c=o(95553),d=o(71350),h=Object.defineProperty,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,x=(e,n,o)=>n in e?h(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,f=(e,n)=>{for(var o in n||(n={}))m.call(n,o)&&x(e,o,n[o]);if(p)for(var o of p(n))u.call(n,o)&&x(e,o,n[o]);return e},j=(e,n)=>{var o={};for(var r in e)m.call(e,r)&&0>n.indexOf(r)&&(o[r]=e[r]);if(null!=e&&p)for(var r of p(e))0>n.indexOf(r)&&u.call(e,r)&&(o[r]=e[r]);return o};let b={variant:"default"},g=(0,c.Z)((e,{radius:n})=>({root:{"--fieldset-radius":(0,d.H5)(n)}})),y=(0,s.d)((e,n)=>{let o=(0,l.w)("Fieldset",b,e),{classNames:s,className:c,style:d,styles:h,unstyled:p,vars:m,legend:u,variant:x,children:y}=o,v=j(o,["classNames","className","style","styles","unstyled","vars","legend","variant","children"]),w=(0,i.y)({name:"Fieldset",classes:t,props:o,className:c,style:d,classNames:s,styles:h,unstyled:p,vars:m,varsResolver:g});return r.createElement(a.x,f(f({component:"fieldset",ref:n,variant:x},w("root",{variant:x})),v),u&&r.createElement("legend",f({},w("legend",{variant:x})),u),y)});y.classes=t,y.displayName="@mantine/core/Fieldset"},74504:function(e,n,o){"use strict";o.d(n,{Y:function(){return d}});var r=o(67294),t=o(14437),s=o(54721),l=o(39213),i=o(18743);let a=`
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
`,c=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],d={type:"code",component:function(){let e=(0,t.K)({onDropdownClose:()=>e.resetSelectedOption()}),[n,o]=(0,r.useState)(null),a=c.map(e=>r.createElement(s.h.Option,{value:e,key:e},e));return r.createElement(s.h,{store:e,onOptionSubmit:n=>{o(n),e.closeDropdown()}},r.createElement(s.h.Target,null,r.createElement(l.M,{component:"button",pointer:!0,rightSection:r.createElement(s.h.Chevron,null),onClick:()=>e.toggleDropdown()},n||r.createElement(i.I.Placeholder,null,"Pick value"))),r.createElement(s.h.Dropdown,null,r.createElement(s.h.Options,null,a)))},maxWidth:340,centered:!0,defaultExpanded:!1,code:a}},8162:function(e,n,o){"use strict";o.d(n,{j:function(){return m}});var r=o(67294),t=o(31409),s=o(31577),l=Object.defineProperty,i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,o)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,h=(e,n)=>{for(var o in n||(n={}))a.call(n,o)&&d(e,o,n[o]);if(i)for(var o of i(n))c.call(n,o)&&d(e,o,n[o]);return e};let p=`
import { Fieldset } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information"{{props}}>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />
    </Fieldset>
  );
}
`,m={type:"configurator",component:function(e){return r.createElement(t.p,h({legend:"Personal information"},e),r.createElement(s.o,{label:"Your name",placeholder:"Your name"}),r.createElement(s.o,{label:"Email",placeholder:"Email",mt:"md"}))},code:p,maxWidth:500,centered:!0,controls:[{type:"segmented",prop:"variant",initialValue:"default",libraryValue:"default",data:["default","filled","unstyled"]},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]}},71193:function(e,n,o){"use strict";o.d(n,{j:function(){return m}});var r=o(67294),t=o(74378),s=o(43406),l=Object.defineProperty,i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,o)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,h=(e,n)=>{for(var o in n||(n={}))a.call(n,o)&&d(e,o,n[o]);if(i)for(var o of i(n))c.call(n,o)&&d(e,o,n[o]);return e};let p=`
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
`,m={type:"configurator",component:function(e){return r.createElement(t.Z,h({},e),r.createElement(s.z,{variant:"default"},"First"),r.createElement(s.z,{variant:"default"},"Second"),r.createElement(s.z,{variant:"default"},"Third"))},code:p,controls:[{type:"select",prop:"justify",data:["flex-start","center","space-between","flex-end"],initialValue:"flex-start",libraryValue:"flex-start"},{type:"size",prop:"gap",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"grow",initialValue:!1,libraryValue:!1}]}},82236:function(e,n,o){"use strict";o.d(n,{g:function(){return s}});var r=o(99146);let t=`
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`,s={type:"configurator",component:r.a,code:t,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"segmented",prop:"type",data:["oval","bars","dots"],initialValue:"oval",libraryValue:"oval"}]}},30527:function(e,n,o){"use strict";o.d(n,{w:function(){return k}});var r=o(67294),t=o(49441),s=o(99146),l=o(38944),i=o(94873),a={loader:"mantine-P161cRp","loader-animation":"mantine-YhQwUWj"},c=Object.defineProperty,d=Object.defineProperties,h=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,x=(e,n,o)=>n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,f=(e,n)=>{for(var o in n||(n={}))m.call(n,o)&&x(e,o,n[o]);if(p)for(var o of p(n))u.call(n,o)&&x(e,o,n[o]);return e},j=(e,n)=>d(e,h(n)),b=(e,n)=>{var o={};for(var r in e)m.call(e,r)&&0>n.indexOf(r)&&(o[r]=e[r]);if(null!=e&&p)for(var r of p(e))0>n.indexOf(r)&&u.call(e,r)&&(o[r]=e[r]);return o};let g=(0,r.forwardRef)((e,n)=>{var{className:o}=e,t=b(e,["className"]);return r.createElement(i.x,j(f({component:"span",className:(0,l.Z)(a.loader,o)},t),{ref:n}))}),y=`
import { forwardRef } from 'react';
import cx from 'clsx';
import { Box, MantineLoaderComponent } from '@mantine/core';
import classes from './CssLoader.module.css';

export const CssLoader: MantineLoaderComponent = forwardRef(({ className, ...others }, ref) => (
  <Box component="span" className={cx(classes.loader, className)} {...others} ref={ref} />
));
`,v=`
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
`;var w=Object.defineProperty,T=Object.defineProperties,C=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,P=(e,n,o)=>n in e?w(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,B=(e,n)=>{for(var o in n||(n={}))E.call(n,o)&&P(e,o,n[o]);if(S)for(var o of S(n))z.call(n,o)&&P(e,o,n[o]);return e},I=(e,n)=>T(e,C(n));let O=`
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
`,k={type:"code",component:function(){return r.createElement(t.M2,{theme:{components:{Loader:s.a.extend({defaultProps:{loaders:I(B({},s.a.defaultLoaders),{custom:g}),type:"custom"}})}}},r.createElement(s.a,null))},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:O},{fileName:"CssLoader.tsx",language:"tsx",code:y},{fileName:"CssLoader.module.css",language:"css",code:v}]}},60261:function(e,n,o){"use strict";o.d(n,{j:function(){return i}});var r=o(67294),t=o(69713),s=o(19144);let l=`
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
`,i={type:"code",code:l,component:function(){let e=s.R.map(e=>r.createElement(t.i.Tr,{key:e.name},r.createElement(t.i.Td,null,e.position),r.createElement(t.i.Td,null,e.name),r.createElement(t.i.Td,null,e.symbol),r.createElement(t.i.Td,null,e.mass)));return r.createElement(t.i,null,r.createElement(t.i.Thead,null,r.createElement(t.i.Tr,null,r.createElement(t.i.Th,null,"Element position"),r.createElement(t.i.Th,null,"Element name"),r.createElement(t.i.Th,null,"Symbol"),r.createElement(t.i.Th,null,"Atomic mass"))),r.createElement(t.i.Tbody,null,e))}}},19144:function(e,n,o){"use strict";o.d(n,{R:function(){return r}});let r=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}]},64465:function(e,n,o){"use strict";o.d(n,{B:function(){return p}});var r=o(67294),t=o(38944),s=o(39242),l=o(31577),i=o(49441),a={labelRequired:"mantine-iWywIRs",inputError:"mantine-Nxx6hw2"};let c=`
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
`,h=(0,s.j)({components:{TextInput:l.o.extend({classNames:(e,n)=>({label:(0,t.Z)({[a.labelRequired]:n.required}),input:(0,t.Z)({[a.inputError]:n.error})})})}}),p={type:"code",component:function(){return r.createElement(i.M2,{theme:h},r.createElement(l.o,{required:!0,label:"Required input",placeholder:"Required input"}),r.createElement(l.o,{error:!0,label:"Input with error",placeholder:"Input with error",mt:"md"}))},code:[{fileName:"Demo.tsx",code:c,language:"tsx"},{fileName:"Demo.module.css",code:d,language:"css"}]}},39442:function(e,n,o){"use strict";o.d(n,{j:function(){return a}});var r=o(67294),t=o(18743),s={input:"mantine-d-R5lyp"};let l=`
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
`,a={type:"code",component:function(){return r.createElement(r.Fragment,null,r.createElement(t.I,{classNames:s,variant:"underline",placeholder:"Underline input"}),r.createElement(t.I,{classNames:s,variant:"filled",placeholder:"Filled input",mt:"md"}))},maxWidth:360,centered:!0,code:[{fileName:"Demo.tsx",code:l,language:"tsx"},{fileName:"Demo.module.css",code:i,language:"css"}]}},72423:function(e,n,o){"use strict";o.d(n,{R:function(){return d}});var r=o(67294),t=o(39242),s=o(18743),l=o(49441);let i=`
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
`,c=(0,t.j)({components:{Input:s.I.extend({classNames:{wrapper:"mantine-MLApsb3",input:"mantine-Q3v0IV0"}})}}),d={type:"code",component:function(){return r.createElement(l.M2,{theme:c},r.createElement(s.I,{placeholder:"Size XXL",size:"xxl"}),r.createElement(s.I,{placeholder:"Size XXS",size:"xxs",mt:"md"}))},maxWidth:360,centered:!0,code:[{language:"tsx",code:i,fileName:"Demo.tsx"},{language:"css",code:a,fileName:"Demo.module.css"}]}},67977:function(e,n,o){"use strict";o.d(n,{g:function(){return d}});var r=o(67294),t=o(46393),s=o(43406),l=o(74378);let i=`
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
`,c=(e,n)=>"xxl"===n.size?{root:{"--button-height":(0,t.h)(60),"--button-padding-x":(0,t.h)(30),"--button-fz":(0,t.h)(24)}}:"xxs"===n.size?{root:{"--button-height":(0,t.h)(24),"--button-padding-x":(0,t.h)(10),"--button-fz":(0,t.h)(10)}}:{root:{}};s.z.extend({vars:(e,n)=>"xxl"===n.size?{root:{"--button-height":(0,t.h)(60),"--button-padding-x":(0,t.h)(30),"--button-fz":(0,t.h)(24)}}:"xxs"===n.size?{root:{"--button-height":(0,t.h)(24),"--button-padding-x":(0,t.h)(10),"--button-fz":(0,t.h)(10)}}:{root:{}}});let d={type:"code",component:function(){return r.createElement(l.Z,null,r.createElement(s.z,{vars:c,size:"xxl"},"XXL Button"),r.createElement(s.z,{vars:c,size:"xxs"},"XXS Button"))},centered:!0,code:[{code:a,language:"tsx",fileName:"MantineProvider.tsx"},{code:i,language:"tsx",fileName:"Inline.tsx"}]}},75646:function(e,n,o){"use strict";o.d(n,{m:function(){return a}});var r=o(67294),t=o(77048),s=o(74378),l=o(43406);let i=`
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

`,a={type:"code",component:function(){return r.createElement(r.Fragment,null,r.createElement(t.x,{size:"sm",mb:5,fw:500},"Filled variant"),r.createElement(s.Z,null,r.createElement(l.z,{color:"cyan"},"Theme color"),r.createElement(l.z,{color:"#1D72FE"},"Hex color")),r.createElement(t.x,{size:"sm",mb:5,mt:"md",fw:500},"Light variant"),r.createElement(s.Z,null,r.createElement(l.z,{variant:"light",color:"cyan"},"Theme color"),r.createElement(l.z,{variant:"light",color:"#1D72FE"},"Hex color")),r.createElement(t.x,{size:"sm",mb:5,mt:"md",fw:500},"Outline variant"),r.createElement(s.Z,null,r.createElement(l.z,{variant:"outline",color:"cyan"},"Theme color"),r.createElement(l.z,{variant:"outline",color:"#1D72FE"},"Hex color")))},defaultExpanded:!1,code:i}},76382:function(e,n,o){"use strict";o.d(n,{U:function(){return a}});var r=o(67294),t=o(18297),s=o(74378),l=o(43406);let i=`
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
`,a={type:"code",component:function(){let{setColorScheme:e,clearColorScheme:n}=(0,t.X)();return r.createElement(s.Z,null,r.createElement(l.z,{onClick:()=>e("light")},"Light"),r.createElement(l.z,{onClick:()=>e("dark")},"Dark"),r.createElement(l.z,{onClick:()=>e("auto")},"Auto"),r.createElement(l.z,{onClick:n},"Clear"))},centered:!0,code:i}},10460:function(e,n,o){"use strict";o.d(n,{D:function(){return T}});var r=o(67294),t=o(28274),s=o(31254),l=o(26595),i=o(46393),a=o(8781),c=o(49441),d=o(74378),h=o(43406),p=Object.defineProperty,m=Object.defineProperties,u=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,b=(e,n,o)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,g=(e,n)=>{for(var o in n||(n={}))f.call(n,o)&&b(e,o,n[o]);if(x)for(var o of x(n))j.call(n,o)&&b(e,o,n[o]);return e},y=(e,n)=>m(e,u(n));let v=`
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
`,w=e=>{let n=(0,t.B)(e),o=(0,s.E)({color:e.color||e.theme.primaryColor,theme:e.theme});return o.isThemeColor&&"lime"===o.color&&"filled"===e.variant?y(g({},n),{color:"var(--mantine-color-black)"}):"light"===e.variant?{background:(0,l.m)(o.value,.1),hover:(0,l.m)(o.value,.15),border:`${(0,i.h)(1)} solid ${o.value}`,color:(0,a._)(o.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:n},T={type:"code",component:function(){return r.createElement(c.M2,{theme:{variantColorResolver:w}},r.createElement(d.Z,null,r.createElement(h.z,{color:"lime.4",variant:"filled"},"Lime filled button"),r.createElement(h.z,{color:"orange",variant:"light"},"Orange light button"),r.createElement(h.z,{variant:"danger"},"Danger button")))},centered:!0,code:v}}},function(e){e.O(0,[2411,7437,4413,5117,9774,2888,179],function(){return e(e.s=84744)}),_N_E=e.O()}]);