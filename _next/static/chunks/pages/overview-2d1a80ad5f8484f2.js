(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1709],{92414:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/overview",function(){return t(12983)}])},89545:function(e,n,t){"use strict";t.d(n,{I:function(){return d},a:function(){return p}});var o=t(85893);t(67294);var s=t(49441),r=t(87578),a=t(94873),l=t(77048),i=t(89070),c=t.n(i);function d(e){let{group:n}=e,t=(0,s.rZ)(),i=t.colors[n].map((e,t)=>(0,o.jsxs)("div",{className:c().color,children:[(0,o.jsx)(r.b,{color:e,radius:"md",className:c().swatch}),(0,o.jsxs)(a.x,{mt:7,children:[(0,o.jsxs)(l.x,{size:"xs",className:c().colorName,children:[n," ",t]}),(0,o.jsx)(l.x,{color:"dimmed",size:"xs",tt:"uppercase",mt:2,fz:10,children:e})]})]},e));return(0,o.jsx)("div",{className:c().wrapper,children:(0,o.jsx)("div",{className:c().group,children:i})})}var h=t(5037),m=t(10157),u=t.n(m);function p(){let e=Object.keys(h.t.colors).map(e=>(0,o.jsx)(d,{group:e},e));return(0,o.jsx)("div",{className:u().root,children:e})}},12983:function(e,n,t){"use strict";t.r(n);var o=t(85893),s=t(11151),r=t(34940),a=t(25263),l=t(67977),i=t(55847),c=t(74445),d=t(60045),h=t(26107),m=t(73102),u=t(89545);let p=(0,r.A)(a.us.Overview);function x(e){let n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li"},(0,s.ah)(),e.components),{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"api-overview",children:"API overview"}),"\n",(0,o.jsxs)(n.p,{children:["This guide will help you get familiar with core Mantine concepts.\nPlease read this guide, ",(0,o.jsx)(n.a,{href:"/theming/theme-object/",children:"theming"})," and ",(0,o.jsx)(n.a,{href:"/styles/css-modules/",children:"styles"})," sections before starting development\nto learn about all available theming and styling features."]}),"\n",(0,o.jsx)(n.h2,{id:"mantineprovider",children:"MantineProvider"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," provides context for all Mantine components, it is required\nto be rendered at the root of your application. It adds ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," context\n",(0,o.jsx)(n.a,{href:"/styles/css-variables",children:"CSS variables"})," and ",(0,o.jsx)(n.a,{href:"/theming/color-schemes/",children:"color scheme management"})," to your application."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"theme-object",children:"Theme object"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"Theme object"})," stores design tokens, components default props, context styles\nand other data that can be accessed by any Mantine component. Most of the ",(0,o.jsx)(n.code,{children:"theme"})," values are exposed as\n",(0,o.jsx)(n.a,{href:"/styles/css-variables",children:"CSS variables"})," and can be accessed both in JavaScript and CSS."]}),"\n",(0,o.jsxs)(n.p,{children:["Configure ",(0,o.jsx)(n.code,{children:"theme"})," with ",(0,o.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider, createTheme, Button } from '@mantine/core';\n\n// Your theme configuration is merged with default theme\nconst theme = createTheme({\n  fontFamily: 'Montserrat, sans-serif',\n  defaultRadius: 'md',\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Access theme values in styles:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:".demo {\n  background: var(--mantine-color-red-1);\n  color: var(--mantine-color-red-9);\n  font-family: var(--mantine-font-family);\n  border-radius: var(--mantine-radius-md);\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Access theme values in JavaScript:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useMantineTheme, lighten } from '@mantine/core';\n\nfunction Demo() {\n  const theme = useMantineTheme();\n\n  const style = {\n    // You can use CSS variables in inline styles\n    background: 'var(--mantine-color-red-9)',\n\n    // Or use values from theme object if you need to modify them\n    color: lighten(theme.colors.red[9], 0.2),\n  };\n\n  return <div style={style} />;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"colors",children:"Colors"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/theming/colors",children:"Colors"})," are stored in ",(0,o.jsx)(n.code,{children:"theme.colors"})," object and are exposed as ",(0,o.jsx)(n.a,{href:"/styles/css-variables",children:"CSS variables"}),".\nEach color must have at least 10 shades. You can generate new colors based on single color value\nwith ",(0,o.jsx)(n.a,{href:"/colors-generator",children:"colors generator"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Colors are numbered from 0 to 9 where 0 is the lightest and 9 is the darkest color. Example of ",(0,o.jsx)(n.code,{children:"blue"}),"\ncolor from default theme:"]}),"\n",(0,o.jsx)(u.I,{group:"blue"}),"\n",(0,o.jsxs)(n.p,{children:["To access colors in styles use ",(0,o.jsx)(n.a,{href:"/styles/css-variables",children:"CSS variables"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:".demo {\n  background: var(--mantine-color-blue-9);\n  color: var(--mantine-color-blue-0);\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"css-modules",children:"CSS modules"}),"\n",(0,o.jsxs)(n.p,{children:["All Mantine components use ",(0,o.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," for styling.\nIt is recommended to use ",(0,o.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," in your project as well, but it is not required –\nMantine components are fully compatible with any third-party styling solution and native CSS."]}),"\n",(0,o.jsxs)(n.p,{children:["CSS modules are available in most modern frameworks out of the box. To use them, create a file with ",(0,o.jsx)(n.code,{children:".module.css"})," extension:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:"/* Button.module.css */\n\n.button {\n  color: red;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"And then import it in your component:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import classes from './Button.module.css';\n\nfunction Demo() {\n  return (\n    <button className={classes.button} type=\"button\">\n      Button\n    </button>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"postcss-preset",children:"PostCSS preset"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"})," provides several CSS functions and mixins to help you write styles.\nIt is not required to use it but highly recommended. All demos that feature styles\nassume that you have this preset installed."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"})," allows you to use functions and mixins in ",(0,o.jsx)(n.code,{children:".css"})," files:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scss",children:".demo {\n  padding: rem(20px); /* Convert px to rem */\n\n  /* Convert px to em (for media queries) */\n  @media (max-width: em(500px)) {\n  }\n\n  /* light and dark mixins to apply styles based on Mantine color scheme */\n  @mixin light {\n    background-color: var(--mantine-color-white);\n  }\n\n  @mixin dark {\n    background-color: var(--mantine-color-black);\n  }\n\n  /* light-dark function as an inline shortcut for light and dark mixins */\n  background: light-dark(var(--mantine-color-white), var(--mantine-color-black));\n\n  /* rtl mixin to apply styles for right-to-left direction */\n  padding-left: 1rem;\n  @mixin rtl {\n    padding-left: 0;\n    padding-right: 1rem;\n  }\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"css-variables",children:"CSS variables"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"Theme"})," values are converted to ",(0,o.jsx)(n.a,{href:"/styles/css-variables",children:"CSS variables"})," and are available to\nuse in your styles. All Mantine CSS variables are prefixed with ",(0,o.jsx)(n.code,{children:"--mantine-"}),", for example:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.fontFamily"})," → ",(0,o.jsx)(n.code,{children:"--mantine-font-family"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.colors.blue[9]"})," → ",(0,o.jsx)(n.code,{children:"--mantine-color-blue-9"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.spacing.xl"})," → ",(0,o.jsx)(n.code,{children:"--mantine-spacing-xl"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Most of Mantine components have associated ",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"})," that can be\ncustomized in ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," or inline with ",(0,o.jsx)(n.code,{children:"vars"})," prop. Example of customizing\n",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"})," CSS variables to add new ",(0,o.jsx)(n.code,{children:"xxl"})," and ",(0,o.jsx)(n.code,{children:"xxs"})," sizes:"]}),"\n",(0,o.jsx)(t,{data:l.g}),"\n",(0,o.jsx)(n.h2,{id:"styles-api",children:"Styles API"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," is a set of props and techniques that allows you to customize styles of any element\ninside Mantine component inline or with ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme object"}),". All Mantine components that\nhave styles support ",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Every Mantine component has a set of elements names that can be used to\napply styles to inner elements inside the component.\nExample of ",(0,o.jsx)(n.a,{href:"/core/text-input",children:"TextInput"})," component selectors:"]}),"\n",(0,o.jsx)(m.VX,{data:h.G,component:"Button",withTableBorder:!1}),"\n",(0,o.jsxs)(n.p,{children:["These selectors can be used to apply styles to inner elements with ",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"classNames or styles"})," props:"]}),"\n",(0,o.jsx)(t,{data:i.A}),"\n",(0,o.jsx)(n.h2,{id:"color-scheme",children:"Color scheme"}),"\n",(0,o.jsxs)(n.p,{children:["All Mantine components support ",(0,o.jsx)(n.code,{children:"light"}),", ",(0,o.jsx)(n.code,{children:"dark"})," and ",(0,o.jsx)(n.code,{children:"auto"})," ",(0,o.jsx)(n.a,{href:"/theming/color-schemes",children:"color schemes"}),". By default,\ncolor scheme is ",(0,o.jsx)(n.code,{children:"auto"})," (same as user system preferences), it can be changed by user and will be persisted in ",(0,o.jsx)(n.code,{children:"localStorage"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["You can use configure default color scheme on ",(0,o.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider defaultColorScheme=\"dark\">\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["And use ",(0,o.jsx)(n.a,{href:"/theming/color-schemes",children:"useMantineColorScheme hook"})," to create color scheme toggle control:"]}),"\n",(0,o.jsx)(t,{data:c.k}),"\n",(0,o.jsx)(n.h2,{id:"unstyled-components",children:"Unstyled components"}),"\n",(0,o.jsxs)(n.p,{children:["You can use Mantine as a ",(0,o.jsx)(n.a,{href:"/styles/unstyled",children:"headless UI library"}),". To do that simply do not import ",(0,o.jsx)(n.code,{children:"@mantine/*/styles.css"}),"\nin your application. Then you will be able to apply styles to Mantine components using ",(0,o.jsx)(n.a,{href:"/styles/styles-api/",children:"Styles API"}),"\nwith a styling solution of your choice."]}),"\n",(0,o.jsxs)(n.p,{children:["All components also support ",(0,o.jsx)(n.a,{href:"/styles/unstyled",children:"unstyled prop"}),"\nthat removes all library styles from component:"]}),"\n",(0,o.jsx)(t,{data:d.W})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(p,Object.assign({},e,{children:(0,o.jsx)(x,e)}))}},89070:function(e){e.exports={wrapper:"ColorsGroup_wrapper__CL3j0",color:"ColorsGroup_color__h_UQT",swatch:"ColorsGroup_swatch__TKQN5",title:"ColorsGroup_title___FhcQ",group:"ColorsGroup_group__XrmQh",colorName:"ColorsGroup_colorName__iVJUN"}},10157:function(e){e.exports={root:"ThemeColors_root__YibUj"}},55847:function(e,n,t){"use strict";t.d(n,{A:function(){return i}});var o=t(67294),s=t(31577),r={root:"mantine-99bACAg",input:"mantine-XR1RJA6",label:"mantine-agUl3KK"};let a=`
import { useState } from 'react';
import { TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const floating = focused || value.length > 0 || undefined;

  return (
    <TextInput
      label="Floating label input"
      labelProps={{ 'data-floating': floating }}
      classNames={{
        root: classes.root,
        input: classes.input,
        label: classes.label,
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}
`,l=`
.root {
  position: relative;
  margin-top: rem(5px);
}

.input {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom-width: rem(2px);
  border-radius: 0;
  padding-left: 0;
  background-color: var(--mantine-color-body);
}

.label {
  position: absolute;
  z-index: 1;
  pointer-events: none;
  top: rem(7px);
  color: var(--mantine-color-placeholder);
  font-weight: 400;
  font-size: var(--mantine-font-size-sm);
  transition: color 100ms ease, transform 100ms ease, font-size 100ms ease;

  &[data-floating] {
    transform: translateY(rem(-20px));
    font-size: var(--mantine-font-size-xs);
    color: var(--mantine-color-text);
  }
}
`,i={type:"code",component:function(){let[e,n]=(0,o.useState)(""),[t,a]=(0,o.useState)(!1),l=t||e.length>0||void 0;return o.createElement(s.o,{label:"Floating label input",labelProps:{"data-floating":l},classNames:{root:r.root,input:r.input,label:r.label},onFocus:()=>a(!0),onBlur:()=>a(!1),value:e,onChange:e=>n(e.currentTarget.value)})},maxWidth:360,centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:a},{fileName:"Demo.module.css",language:"css",code:l}]}},60045:function(e,n,t){"use strict";t.d(n,{W:function(){return a}});var o=t(67294),s=t(11211);let r=`
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" unstyled>
      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="chat">Chat panel</Tabs.Panel>
      <Tabs.Panel value="gallery">Gallery panel</Tabs.Panel>
      <Tabs.Panel value="account">Account panel</Tabs.Panel>
    </Tabs>
  );
}
`,a={type:"code",component:function(){return o.createElement(s.m,{defaultValue:"chat",unstyled:!0},o.createElement(s.m.List,null,o.createElement(s.m.Tab,{value:"chat"},"Chat"),o.createElement(s.m.Tab,{value:"gallery"},"Gallery"),o.createElement(s.m.Tab,{value:"account"},"Account")),o.createElement(s.m.Panel,{value:"chat"},"Chat panel"),o.createElement(s.m.Panel,{value:"gallery"},"Gallery panel"),o.createElement(s.m.Panel,{value:"account"},"Account panel"))},code:r}},67977:function(e,n,t){"use strict";t.d(n,{g:function(){return d}});var o=t(67294),s=t(46393),r=t(43406),a=t(74378);let l=`
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
`,i=`
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
`,c=(e,n)=>"xxl"===n.size?{root:{"--button-height":(0,s.h)(60),"--button-padding-x":(0,s.h)(30),"--button-fz":(0,s.h)(24)}}:"xxs"===n.size?{root:{"--button-height":(0,s.h)(24),"--button-padding-x":(0,s.h)(10),"--button-fz":(0,s.h)(10)}}:{root:{}};r.z.extend({vars:(e,n)=>"xxl"===n.size?{root:{"--button-height":(0,s.h)(60),"--button-padding-x":(0,s.h)(30),"--button-fz":(0,s.h)(24)}}:"xxs"===n.size?{root:{"--button-height":(0,s.h)(24),"--button-padding-x":(0,s.h)(10),"--button-fz":(0,s.h)(10)}}:{root:{}}});let d={type:"code",component:function(){return o.createElement(a.Z,null,o.createElement(r.z,{vars:c,size:"xxl"},"XXL Button"),o.createElement(r.z,{vars:c,size:"xxs"},"XXS Button"))},centered:!0,code:[{code:i,language:"tsx",fileName:"MantineProvider.tsx"},{code:l,language:"tsx",fileName:"Inline.tsx"}]}},74445:function(e,n,t){"use strict";t.d(n,{k:function(){return u}});var o=t(67294),s=t(38944),r=t(61736),a=t(11541),l=t(18297),i=t(86186),c=t(80194),d={icon:"mantine-dRAgl7-",dark:"mantine-8SeTy2A",light:"mantine-Fq-223G"};let h=`
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
`,u={type:"code",component:function(){let{setColorScheme:e}=(0,l.X)(),n=(0,i.l)("light",{getInitialValueInEffect:!0});return o.createElement(c.A,{onClick:()=>e("light"===n?"dark":"light"),variant:"default",size:"xl","aria-label":"Toggle color scheme"},o.createElement(r.Z,{className:(0,s.Z)(d.icon,d.light),stroke:1.5}),o.createElement(a.Z,{className:(0,s.Z)(d.icon,d.dark),stroke:1.5}))},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:h},{fileName:"Demo.module.css",language:"css",code:m}]}}},function(e){e.O(0,[4878,9341,4940,9774,2888,179],function(){return e(e.s=92414)}),_N_E=e.O()}]);