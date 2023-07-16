(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8632],{51328:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/styles-api",function(){return t(26262)}])},26262:function(e,n,t){"use strict";t.r(n);var o=t(85893),s=t(11151),r=t(34940),a=t(34200),i=t(55899),c=t(55847),l=t(67977),d=t(79724),u=t(64465),m=t(90792),p=t(88713);let h=(0,r.A)(a.us.StylesApi);function x(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",pre:"pre",blockquote:"blockquote",strong:"strong"},(0,s.ah)(),e.components),{Demo:t,DataTable:r}=n;return r||b("DataTable",!0),t||b("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"styles-api",children:"Styles API"}),"\n",(0,o.jsx)(n.h2,{id:"what-is-styles-api",children:"What is Styles API"}),"\n",(0,o.jsxs)(n.p,{children:["Styles API is a set of props and techniques that allows you to customize styles of any element\ninside Mantine component inline or with ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme object"}),". All Mantine components that\nhave styles support Styles API."]}),"\n",(0,o.jsx)(n.h2,{id:"styles-api-selectors",children:"Styles API selectors"}),"\n",(0,o.jsxs)(n.p,{children:["Every Mantine component that supports Styles API has a set of elements names that can be used to\napply styles to inner elements inside the component. For simplicity, these elements names are called\nselectors in Mantine documentation. You can find selectors information under ",(0,o.jsx)(n.code,{children:"Styles API"})," tab\nin component documentation."]}),"\n",(0,o.jsxs)(n.p,{children:["Example of ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"})," component selectors:"]}),"\n",(0,o.jsx)(p.VX,{data:m.B,component:"Button",withTableBorder:!1}),"\n",(0,o.jsxs)(n.p,{children:["You can use these selectors in ",(0,o.jsx)(n.code,{children:"classNames"})," and ",(0,o.jsx)(n.code,{children:"styles"})," both in component props and in ",(0,o.jsx)(n.code,{children:"theme.components"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Button, createTheme, MantineProvider } from '@mantine/core';\n\nfunction ClassNamesDemo() {\n  return (\n    <Button\n      classNames={{\n        root: 'my-root-class',\n        label: 'my-label-class',\n        inner: 'my-inner-class',\n      }}\n    >\n      Button\n    </Button>\n  );\n}\n\nfunction StylesDemo() {\n  return (\n    <Button\n      styles={{\n        root: { backgroundColor: 'red' },\n        label: { color: 'blue' },\n        inner: { fontSize: 20 },\n      }}\n    >\n      Button\n    </Button>\n  );\n}\n\nconst theme = createTheme({\n  components: {\n    Button: Button.extend({\n      classNames: {\n        root: 'my-root-class',\n        label: 'my-label-class',\n        inner: 'my-inner-class',\n      },\n      styles: {\n        root: { backgroundColor: 'red' },\n        label: { color: 'blue' },\n        inner: { fontSize: 20 },\n      },\n    }),\n  },\n});\n\nfunction ProviderDemo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Button>Button</Button>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"classnames-prop",children:"classNames prop"}),"\n",(0,o.jsxs)(n.p,{children:["With ",(0,o.jsx)(n.code,{children:"classNames"})," prop you can add classes to inner elements of Mantine components. It accepts\nobject with keys as element names and values as classes:"]}),"\n",(0,o.jsx)(t,{data:c.A}),"\n",(0,o.jsx)(n.h2,{id:"classnames-in-themecomponents",children:"classNames in theme.components"}),"\n",(0,o.jsxs)(n.p,{children:["You can also define classNames in ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme.components"})," to apply them to all\ncomponents of specific type:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { TextInput, MantineProvider, createTheme } from '@mantine/core';\n// Styles are the same as in previous example\nimport classes from './Demo.module.css';\n\nconst theme = createTheme({\n  components: {\n    TextInput: TextInput.extends({\n      classNames: {\n        root: classes.root,\n        input: classes.input,\n        label: classes.label,\n      },\n    }),\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"components-css-variables",children:"Components CSS variables"}),"\n",(0,o.jsxs)(n.p,{children:["Most of Mantine components use CSS variables to define colors, sizes, paddings and other\nproperties. You can override these values by with a custom CSS variables resolver function\nin ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme.components"})," or by passing it to ",(0,o.jsx)(n.code,{children:"vars"})," prop."]}),"\n",(0,o.jsxs)(n.p,{children:["You can find CSS variables information under ",(0,o.jsx)(n.code,{children:"Styles API"})," tab in component documentation.\nExample of ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"})," component CSS variables:"]}),"\n",(0,o.jsx)(p.$w,{data:m.B,withTableBorder:!1}),"\n",(0,o.jsxs)(n.p,{children:["Example of custom CSS variables resolver function used to add more sizes to ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"})," component:"]}),"\n",(0,o.jsx)(t,{data:l.g}),"\n",(0,o.jsx)(n.h2,{id:"styles-prop",children:"styles prop"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"styles"})," prop works the same way as ",(0,o.jsx)(n.code,{children:"classNames"}),", but applies inline styles. Note that inline\nstyles have higher specificity than classes, so you will not be able to override them with classes\nwithout using ",(0,o.jsx)(n.code,{children:"!important"}),". You cannot use pseudo-classes (for example, ",(0,o.jsx)(n.code,{children:":hover"}),", ",(0,o.jsx)(n.code,{children:":first-of-type"}),")\nand media queries inside ",(0,o.jsx)(n.code,{children:"styles"})," prop."]}),"\n",(0,o.jsx)(t,{data:d.W}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"styles prop usage"})}),"\n",(0,o.jsxs)(n.p,{children:["Some examples and demos in the documentation use ",(0,o.jsx)(n.code,{children:"styles"})," prop for convenience, but it is not\nrecommended to use ",(0,o.jsx)(n.code,{children:"styles"})," prop as the primary means of styling components, as ",(0,o.jsx)(n.code,{children:"classNames"}),"\nprop is more flexible and has ",(0,o.jsx)(n.a,{href:"/styles/styles-performance",children:"better performance"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"styles-api-based-on-component-props",children:"Styles API based on component props"}),"\n",(0,o.jsxs)(n.p,{children:["You can also pass a callback function to ",(0,o.jsx)(n.code,{children:"classNames"})," and ",(0,o.jsx)(n.code,{children:"styles"}),". This function will receive\n",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," as first argument and component props as second. It should return\nobject of classes (",(0,o.jsx)(n.code,{children:"classNames"}),") or styles (",(0,o.jsx)(n.code,{children:"styles"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:["You can use this feature to conditionally apply styles based on component props. For example,\nyou can change ",(0,o.jsx)(n.a,{href:"/core/text-input",children:"TextInput"})," label color if the input is required or change the input\nbackground color if input has error:"]}),"\n",(0,o.jsx)(t,{data:u.B}),"\n",(0,o.jsx)(n.h2,{id:"static-classes",children:"Static classes"}),"\n",(0,o.jsxs)(n.p,{children:["Every component that supports Styles API also includes static classes that can be used to style\ncomponent without using ",(0,o.jsx)(n.code,{children:"classNames"})," or ",(0,o.jsx)(n.code,{children:"styles"})," props. By default, static classes have\n",(0,o.jsx)(n.code,{children:".mantine-{ComponentName}-{selector}"})," format. For example, ",(0,o.jsx)(n.code,{children:"root"})," selector of ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"}),"\ncomponent will have ",(0,o.jsx)(n.code,{children:".mantine-Button-root"})," class."]}),"\n",(0,o.jsxs)(n.p,{children:["You can use static classes to style component with CSS or ",(0,o.jsx)(n.a,{href:"/styles/css-modules#styling-mantine-components-without-css-modules",children:"any other styling solution"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:".mantine-Button-root {\n  background-color: red;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Static classes prefix can be changed with ",(0,o.jsx)(n.code,{children:"classNamesPrefix"})," on ",(0,o.jsx)(n.a,{href:"/theming/mantine-provider#classnamesprefix",children:"MantineProvider"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"components-classes",children:"Components classes"}),"\n",(0,o.jsxs)(n.p,{children:["Classes of each component are available in ",(0,o.jsx)(n.code,{children:"Component.classes"})," object. For example, you can\nfind ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"})," classes in ",(0,o.jsx)(n.code,{children:"Button.classes"}),":"]}),"\n",(0,o.jsx)(r,{head:["Key","Class"],data:Object.keys(i.z.classes).map(e=>[e,i.z.classes[e]])}),"\n",(0,o.jsx)(n.p,{children:"You can use these classes to create components with the same styles as Mantine components:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\nfunction Demo() {\n  return <button type=\"button\" className={Button.classes.root} />;\n}\n"})})]})}function b(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(h,Object.assign({},e,{children:(0,o.jsx)(x,e)}))}},64465:function(e,n,t){"use strict";t.d(n,{B:function(){return m}});var o=t(67294),s=t(38944),r=t(39242),a=t(31577),i=t(49441),c={labelRequired:"m-686577e7",inputError:"m-933d67aa"};let l=`
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
`,u=(0,r.j)({components:{TextInput:a.o.extend({classNames:(e,n)=>({label:(0,s.Z)({[c.labelRequired]:n.required}),input:(0,s.Z)({[c.inputError]:n.error})})})}}),m={type:"code",component:function(){return o.createElement(i.M2,{theme:u},o.createElement(a.o,{required:!0,label:"Required input",placeholder:"Required input"}),o.createElement(a.o,{error:!0,label:"Input with error",placeholder:"Input with error",mt:"md"}))},code:[{fileName:"Demo.tsx",code:l,language:"tsx"},{fileName:"Demo.module.css",code:d,language:"css"}]}},79724:function(e,n,t){"use strict";t.d(n,{W:function(){return i}});var o=t(67294),s=t(55899),r=t(46393);let a=`
import { Button, rem } from '@mantine/core';

function Demo() {
  const gradient =
    'linear-gradient(45deg, var(--mantine-color-pink-filled) 0%, var(--mantine-color-orange-filled) 50%, var(--mantine-color-yellow-filled) 100%)';

  return (
    <Button
      radius="md"
      styles={{
        root: {
          padding: rem(2),
          border: 0,
          backgroundImage: gradient,
        },

        inner: {
          background: 'var(--mantine-color-body)',
          color: 'var(--mantine-color-text)',
          borderRadius: 'calc(var(--button-radius) - 2px)',
          paddingLeft: 'var(--mantine-spacing-md)',
          paddingRight: 'var(--mantine-spacing-md)',
        },

        label: {
          backgroundImage: gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
      }}
    >
      Gradient button
    </Button>
  );
}
`,i={type:"code",component:function(){let e="linear-gradient(45deg, var(--mantine-color-pink-filled) 0%, var(--mantine-color-orange-filled) 50%, var(--mantine-color-yellow-filled) 100%)";return o.createElement(s.z,{radius:"md",styles:{root:{padding:(0,r.h)(2),border:0,backgroundImage:e},inner:{background:"var(--mantine-color-body)",color:"var(--mantine-color-text)",borderRadius:"calc(var(--button-radius) - 2px)",paddingLeft:"var(--mantine-spacing-md)",paddingRight:"var(--mantine-spacing-md)"},label:{backgroundImage:e,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}},"Gradient button")},centered:!0,code:a}},67977:function(e,n,t){"use strict";t.d(n,{g:function(){return d}});var o=t(67294),s=t(46393),r=t(55899),a=t(74378);let i=`
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
`,c=`
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
`,l=(e,n)=>"xxl"===n.size?{root:{"--button-height":(0,s.h)(60),"--button-padding-x":(0,s.h)(30),"--button-fz":(0,s.h)(24)}}:"xxs"===n.size?{root:{"--button-height":(0,s.h)(24),"--button-padding-x":(0,s.h)(10),"--button-fz":(0,s.h)(10)}}:{root:{}};r.z.extend({vars:(e,n)=>"xxl"===n.size?{root:{"--button-height":(0,s.h)(60),"--button-padding-x":(0,s.h)(30),"--button-fz":(0,s.h)(24)}}:"xxs"===n.size?{root:{"--button-height":(0,s.h)(24),"--button-padding-x":(0,s.h)(10),"--button-fz":(0,s.h)(10)}}:{root:{}}});let d={type:"code",component:function(){return o.createElement(a.Z,null,o.createElement(r.z,{vars:l,size:"xxl"},"XXL Button"),o.createElement(r.z,{vars:l,size:"xxs"},"XXS Button"))},centered:!0,code:[{code:c,language:"tsx",fileName:"MantineProvider.tsx"},{code:i,language:"tsx",fileName:"Inline.tsx"}]}}},function(e){e.O(0,[2411,7437,9815,9774,2888,179],function(){return e(e.s=51328)}),_N_E=e.O()}]);