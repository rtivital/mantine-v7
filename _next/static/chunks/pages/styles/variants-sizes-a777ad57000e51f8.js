(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6022],{5413:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/variants-sizes",function(){return n(83425)}])},83425:function(e,t,n){"use strict";n.r(t);var o=n(85893),r=n(11151),i=n(34940),a=n(25263),s=n(39442),l=n(10460),c=n(67977),d=n(72423),m=n(78708);let u=(0,i.A)(a.us.VariantsAndSizes);function h(e){let t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong",pre:"pre"},(0,r.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"variants-and-sizes",children:"Variants and sizes"}),"\n",(0,o.jsx)(t.h2,{id:"adding-custom-variants",children:"Adding custom variants"}),"\n",(0,o.jsxs)(t.p,{children:["Most of Mantine components support ",(0,o.jsx)(t.code,{children:"variant"})," prop, it can be used in CSS variables resolver,\nand it is also exposed as ",(0,o.jsx)(t.code,{children:'data-variant="{value}"'})," attribute on the root element of the component.\nThe easiest way to add custom variants is to add styles that use ",(0,o.jsx)(t.code,{children:'[data-variant="{value}"]'}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Example of adding a new variant to the ",(0,o.jsx)(t.a,{href:"/core/input",children:"Input"})," component:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"underline"})," variant styles are added"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"filled"})," variant is a default variant – you do not need to define any additional styles for it"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:s.j}),"\n",(0,o.jsxs)(t.p,{children:["Note that you can add custom variants to every Mantine component that supports ",(0,o.jsx)(t.a,{href:"/styles/api",children:"Styles API"}),"\neven if there are no variants defined on the library side."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Overriding existing variants styles"})}),"\n",(0,o.jsxs)(t.p,{children:["Apart from adding new variants, you can also override existing ones, for example, you can change the\n",(0,o.jsx)(t.code,{children:"filled"})," variant of the ",(0,o.jsx)(t.a,{href:"/core/input",children:"Input"})," component with ",(0,o.jsx)(t.code,{children:'.input[data-variant="filled"]'})," selector."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"variantcolorresolver",children:"variantColorResolver"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/core/button",children:"Button"}),", ",(0,o.jsx)(t.a,{href:"/core/badge",children:"Badge"}),", ",(0,o.jsx)(t.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,o.jsx)(t.a,{href:"/core/theme-icon",children:"ThemeIcon"})," and other\ncomponents support custom variants with ",(0,o.jsx)(t.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"}),"\n– it supports both changing colors and adding new variants. Note that ",(0,o.jsx)(t.code,{children:"theme.variantColorResolver"})," is\nresponsible only for colors, if you need to change other properties, use ",(0,o.jsx)(t.code,{children:"data-variant"})," attribute."]}),"\n",(0,o.jsx)(n,{data:l.D}),"\n",(0,o.jsx)(t.h2,{id:"sizes-with-components-css-variables",children:"Sizes with components CSS variables"}),"\n",(0,o.jsxs)(t.p,{children:["You can add custom sizes to any component that supports ",(0,o.jsx)(t.code,{children:"size"})," prop by providing a custom\nCSS variables resolver, usually it is done in ",(0,o.jsx)(t.code,{children:"theme.components"}),":"]}),"\n",(0,o.jsx)(n,{data:c.g}),"\n",(0,o.jsx)(t.h2,{id:"sizes-with-data-size-attribute",children:"Sizes with data-size attribute"}),"\n",(0,o.jsxs)(t.p,{children:["Every component that supports ",(0,o.jsx)(t.code,{children:"size"})," prop exposes it as ",(0,o.jsx)(t.code,{children:'data-size="{value}"'})," attribute on the root element.\nYou can use it to add custom sizes:"]}),"\n",(0,o.jsx)(n,{data:d.R}),"\n",(0,o.jsx)(t.h2,{id:"sizes-with-static-css-variables",children:"Sizes with static CSS variables"}),"\n",(0,o.jsxs)(t.p,{children:["Mantine components sizes are defined with CSS variables (usually on root element), for example,\n",(0,o.jsx)(t.a,{href:"/core/action-icon",children:"ActionIcon"})," component has the following CSS variables:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-css",children:".root {\n  --ai-size-xs: rem(18px);\n  --ai-size-sm: rem(22px);\n  --ai-size-md: rem(28px);\n  --ai-size-lg: rem(34px);\n  --ai-size-xl: rem(44px);\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You can override these values with ",(0,o.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"})," or add new sizes values:"]}),"\n",(0,o.jsx)(n,{data:m.h}),"\n",(0,o.jsxs)(t.p,{children:["Note that some components have more than one CSS variable for size, for example,\nthe ",(0,o.jsx)(t.a,{href:"/core/button",children:"Button"})," component has the following CSS variables:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-css",children:".root {\n  --button-height-xs: rem(30px);\n  --button-height-sm: rem(36px);\n  --button-height-md: rem(42px);\n  --button-height-lg: rem(50px);\n  --button-height-xl: rem(60px);\n\n  --button-height-compact-xs: rem(22px);\n  --button-height-compact-sm: rem(26px);\n  --button-height-compact-md: rem(30px);\n  --button-height-compact-lg: rem(34px);\n  --button-height-compact-xl: rem(40px);\n\n  --button-padding-x-xs: rem(14px);\n  --button-padding-x-sm: rem(18px);\n  --button-padding-x-md: rem(22px);\n  --button-padding-x-lg: rem(26px);\n  --button-padding-x-xl: rem(32px);\n\n  --button-padding-x-compact-xs: rem(7px);\n  --button-padding-x-compact-sm: rem(8px);\n  --button-padding-x-compact-md: rem(10px);\n  --button-padding-x-compact-lg: rem(12px);\n  --button-padding-x-compact-xl: rem(14px);\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Usually, it is more convenient to use ",(0,o.jsx)(t.code,{children:"data-size"})," attribute or ",(0,o.jsx)(t.code,{children:"vars"})," on ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"}),"\nto customize sizes in this case."]})]})}t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(u,Object.assign({},e,{children:(0,o.jsx)(h,e)}))}},1002:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])},78708:function(e,t,n){"use strict";n.d(t,{h:function(){return h}});var o=n(67294),r=n(39242),i=n(80194),a=n(49441),s=n(74378),l=n(46393),c=n(1002);let d=`
import { ActionIcon, createTheme, Group, MantineThemeProvider, rem } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Group justify="center">
        <ActionIcon size="xxs" aria-label="Custom xxs size">
          <IconHeart style={{ width: rem(10), height: rem(10) }} />
        </ActionIcon>

        <ActionIcon size="xxl" aria-label="Custom xxl size">
          <IconHeart style={{ width: rem(32), height: rem(32) }} />
        </ActionIcon>
      </Group>
    </MantineThemeProvider>
  );
}
`,m=`
.root {
  --ai-size-xxs: rem(16px);
  --ai-size-xxl: rem(50px);
}
`,u=(0,r.j)({components:{ActionIcon:i.A.extend({classNames:{root:"mantine-EQzkIkt"}})}}),h={type:"code",component:function(){return o.createElement(a.M2,{theme:u},o.createElement(s.Z,{justify:"center"},o.createElement(i.A,{size:"xxs","aria-label":"Custom xxs size"},o.createElement(c.Z,{style:{width:(0,l.h)(10),height:(0,l.h)(10)}})),o.createElement(i.A,{size:"xxl","aria-label":"Custom xxl size"},o.createElement(c.Z,{style:{width:(0,l.h)(32),height:(0,l.h)(32)}}))))},code:[{fileName:"Demo.module.css",code:m,language:"css"},{fileName:"Demo.tsx",code:d,language:"tsx"}]}},39442:function(e,t,n){"use strict";n.d(t,{j:function(){return l}});var o=n(67294),r=n(51499),i={input:"mantine-d-R5lyp"};let a=`
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
`,s=`
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
`,l={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(r.I,{classNames:i,variant:"underline",placeholder:"Underline input"}),o.createElement(r.I,{classNames:i,variant:"filled",placeholder:"Filled input",mt:"md"}))},maxWidth:360,centered:!0,code:[{fileName:"Demo.tsx",code:a,language:"tsx"},{fileName:"Demo.module.css",code:s,language:"css"}]}},72423:function(e,t,n){"use strict";n.d(t,{R:function(){return d}});var o=n(67294),r=n(39242),i=n(51499),a=n(49441);let s=`
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
`,l=`
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
`,c=(0,r.j)({components:{Input:i.I.extend({classNames:{wrapper:"mantine-MLApsb3",input:"mantine-Q3v0IV0"}})}}),d={type:"code",component:function(){return o.createElement(a.M2,{theme:c},o.createElement(i.I,{placeholder:"Size XXL",size:"xxl"}),o.createElement(i.I,{placeholder:"Size XXS",size:"xxs",mt:"md"}))},maxWidth:360,centered:!0,code:[{language:"tsx",code:s,fileName:"Demo.tsx"},{language:"css",code:l,fileName:"Demo.module.css"}]}},67977:function(e,t,n){"use strict";n.d(t,{g:function(){return d}});var o=n(67294),r=n(46393),i=n(43406),a=n(74378);let s=`
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
`,l=`
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
`,c=(e,t)=>"xxl"===t.size?{root:{"--button-height":(0,r.h)(60),"--button-padding-x":(0,r.h)(30),"--button-fz":(0,r.h)(24)}}:"xxs"===t.size?{root:{"--button-height":(0,r.h)(24),"--button-padding-x":(0,r.h)(10),"--button-fz":(0,r.h)(10)}}:{root:{}};i.z.extend({vars:(e,t)=>"xxl"===t.size?{root:{"--button-height":(0,r.h)(60),"--button-padding-x":(0,r.h)(30),"--button-fz":(0,r.h)(24)}}:"xxs"===t.size?{root:{"--button-height":(0,r.h)(24),"--button-padding-x":(0,r.h)(10),"--button-fz":(0,r.h)(10)}}:{root:{}}});let d={type:"code",component:function(){return o.createElement(a.Z,null,o.createElement(i.z,{vars:c,size:"xxl"},"XXL Button"),o.createElement(i.z,{vars:c,size:"xxs"},"XXS Button"))},centered:!0,code:[{code:l,language:"tsx",fileName:"MantineProvider.tsx"},{code:s,language:"tsx",fileName:"Inline.tsx"}]}},10460:function(e,t,n){"use strict";n.d(t,{D:function(){return p}});var o=n(67294),r=n(28274),i=n(31254),a=n(26595),s=n(46393),l=n(8781),c=n(49441),d=n(74378),m=n(43406);let u=`
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
`,h=e=>{let t=(0,r.B)(e),n=(0,i.E)({color:e.color||e.theme.primaryColor,theme:e.theme});return n.isThemeColor&&"lime"===n.color&&"filled"===e.variant?Object.assign(Object.assign({},t),{color:"var(--mantine-color-black)"}):"light"===e.variant?{background:(0,a.m)(n.value,.1),hover:(0,a.m)(n.value,.15),border:`${(0,s.h)(1)} solid ${n.value}`,color:(0,l._)(n.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:t},p={type:"code",component:function(){return o.createElement(c.M2,{theme:{variantColorResolver:h}},o.createElement(d.Z,null,o.createElement(m.z,{color:"lime.4",variant:"filled"},"Lime filled button"),o.createElement(m.z,{color:"orange",variant:"light"},"Orange light button"),o.createElement(m.z,{variant:"danger"},"Danger button")))},centered:!0,code:u}}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=5413)}),_N_E=e.O()}]);