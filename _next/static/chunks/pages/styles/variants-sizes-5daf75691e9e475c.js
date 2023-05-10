(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6022],{5413:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/variants-sizes",function(){return n(1154)}])},1154:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(85893),o=n(11151),a=n(34940),i=n(25263),s=n(67294),l=n(51499),d={input:"mantine-d-R5lyp"};let c=`
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
`,u=`
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
`,m={type:"code",component:function(){return s.createElement(s.Fragment,null,s.createElement(l.I,{classNames:d,variant:"underline",placeholder:"Underline input"}),s.createElement(l.I,{classNames:d,variant:"filled",placeholder:"Filled input",mt:"md"}))},maxWidth:360,centered:!0,code:[{fileName:"Demo.tsx",code:c,language:"tsx"},{fileName:"Demo.module.css",code:u,language:"css"}]};var p=n(10460),h=n(67977),v=n(39242),x=n(49441);let f=`
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
`,g=`
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
`,b=(0,v.j)({components:{Input:l.I.extend({classNames:{wrapper:"mantine-MLApsb3",input:"mantine-Q3v0IV0"}})}}),j={type:"code",component:function(){return s.createElement(x.M2,{theme:b},s.createElement(l.I,{placeholder:"Size XXL",size:"xxl"}),s.createElement(l.I,{placeholder:"Size XXS",size:"xxs",mt:"md"}))},maxWidth:360,centered:!0,code:[{language:"tsx",code:f,fileName:"Demo.tsx"},{language:"css",code:g,fileName:"Demo.module.css"}]},z=(0,a.A)(i.us.VariantsAndSizes);function y(e){let t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong"},(0,o.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"variants-and-sizes",children:"Variants and sizes"}),"\n",(0,r.jsx)(t.h2,{id:"adding-custom-variants",children:"Adding custom variants"}),"\n",(0,r.jsxs)(t.p,{children:["Most of Mantine components support ",(0,r.jsx)(t.code,{children:"variant"})," prop, it can be used in CSS variables resolver\nand it is also exposed as ",(0,r.jsx)(t.code,{children:'data-variant="{value}"'})," attribute on the root element of the component.\nThe easiest way to add custom variants is to add styles that use ",(0,r.jsx)(t.code,{children:'[data-variant="{value}"]'}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Example of adding new variant to ",(0,r.jsx)(t.a,{href:"/core/input",children:"Input"})," component:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"underline"})," variant styles are added"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"filled"})," variant is a default variant – you do not need to define any additional styles for it"]}),"\n"]}),"\n",(0,r.jsx)(n,{data:m}),"\n",(0,r.jsxs)(t.p,{children:["Note that you can add custom variants to every Mantine component that supports ",(0,r.jsx)(t.a,{href:"/styles/api",children:"Styles API"}),"\neven if there are no variants defined on the library side."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Overriding existing variants styles"})}),"\n",(0,r.jsxs)(t.p,{children:["Apart from adding new variants you can also override existing ones, for example you can change\n",(0,r.jsx)(t.code,{children:"filled"})," variant of ",(0,r.jsx)(t.a,{href:"/core/input",children:"Input"})," component with ",(0,r.jsx)(t.code,{children:'.input[data-variant="filled"]'})," selector."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"variantcolorresolver",children:"variantColorResolver"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/core/button",children:"Button"}),", ",(0,r.jsx)(t.a,{href:"/core/badge",children:"Badge"}),", ",(0,r.jsx)(t.a,{href:"/core/action-icon",children:"ActionIcon"})," and ",(0,r.jsx)(t.a,{href:"/core/theme-icon",children:"ThemeIcon"}),"\ncomponents support custom variants with ",(0,r.jsx)(t.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"}),"\n– it supports both changing colors and adding new variants. Note that ",(0,r.jsx)(t.code,{children:"theme.variantColorResolver"})," is\nresponsible only for colors, if you need to change other properties, use ",(0,r.jsx)(t.code,{children:"data-variant"})," attribute."]}),"\n",(0,r.jsx)(n,{data:p.D}),"\n",(0,r.jsx)(t.h2,{id:"sizes-with-components-css-variables",children:"Sizes with components CSS variables"}),"\n",(0,r.jsxs)(t.p,{children:["You can add custom sizes to any component that supports ",(0,r.jsx)(t.code,{children:"size"})," prop by providing a custom\nCSS variables resolver, usually it is done in ",(0,r.jsx)(t.code,{children:"theme.components"}),":"]}),"\n",(0,r.jsx)(n,{data:h.g}),"\n",(0,r.jsx)(t.h2,{id:"sizes-with-data-size-attribute",children:"Sizes with data-size attribute"}),"\n",(0,r.jsxs)(t.p,{children:["Every component that supports ",(0,r.jsx)(t.code,{children:"size"})," prop exposes it as ",(0,r.jsx)(t.code,{children:'data-size="{value}"'})," attribute on root element.\nYou can use it to add custom sizes:"]}),"\n",(0,r.jsx)(n,{data:j})]})}var C=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(z,Object.assign({},e,{children:(0,r.jsx)(y,e)}))}},39242:function(e,t,n){"use strict";function r(e){return e}n.d(t,{j:function(){return r}})},67977:function(e,t,n){"use strict";n.d(t,{g:function(){return c}});var r=n(67294),o=n(46393),a=n(43406),i=n(74378);let s=`
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
`,d=(e,t)=>"xxl"===t.size?{root:{"--button-height":(0,o.h)(60),"--button-padding-x":(0,o.h)(30),"--button-fz":(0,o.h)(24)}}:"xxs"===t.size?{root:{"--button-height":(0,o.h)(24),"--button-padding-x":(0,o.h)(10),"--button-fz":(0,o.h)(10)}}:{root:{}};a.z.extend({vars:(e,t)=>"xxl"===t.size?{root:{"--button-height":(0,o.h)(60),"--button-padding-x":(0,o.h)(30),"--button-fz":(0,o.h)(24)}}:"xxs"===t.size?{root:{"--button-height":(0,o.h)(24),"--button-padding-x":(0,o.h)(10),"--button-fz":(0,o.h)(10)}}:{root:{}}});let c={type:"code",component:function(){return r.createElement(i.Z,null,r.createElement(a.z,{vars:d,size:"xxl"},"XXL Button"),r.createElement(a.z,{vars:d,size:"xxs"},"XXS Button"))},centered:!0,code:[{code:l,language:"tsx",fileName:"MantineProvider.tsx"},{code:s,language:"tsx",fileName:"Inline.tsx"}]}},10460:function(e,t,n){"use strict";n.d(t,{D:function(){return C}});var r=n(67294),o=n(28274),a=n(31254),i=n(26595),s=n(46393),l=n(8781),d=n(49441),c=n(74378),u=n(43406),m=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))x.call(t,n)&&g(e,n,t[n]);if(v)for(var n of v(t))f.call(t,n)&&g(e,n,t[n]);return e},j=(e,t)=>p(e,h(t));let z=`
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
`,y=e=>{let t=(0,o.B)(e),n=(0,a.E)({color:e.color||e.theme.primaryColor,theme:e.theme});return n.isThemeColor&&"lime"===n.color&&"filled"===e.variant?j(b({},t),{color:"var(--mantine-color-black)"}):"light"===e.variant?{background:(0,i.m)(n.value,.1),hover:(0,i.m)(n.value,.15),border:`${(0,s.h)(1)} solid ${n.value}`,color:(0,l._)(n.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:t},C={type:"code",component:function(){return r.createElement(d.M2,{theme:{variantColorResolver:y}},r.createElement(c.Z,null,r.createElement(u.z,{color:"lime.4",variant:"filled"},"Lime filled button"),r.createElement(u.z,{color:"orange",variant:"light"},"Orange light button"),r.createElement(u.z,{variant:"danger"},"Danger button")))},centered:!0,code:z}}},function(e){e.O(0,[4878,9341,4940,9774,2888,179],function(){return e(e.s=5413)}),_N_E=e.O()}]);