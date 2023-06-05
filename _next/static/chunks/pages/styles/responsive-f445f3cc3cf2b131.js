(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7316],{33507:function(e,n,s){"use strict";s.d(n,{Z:function(){return t}});var t=(0,s(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,n,s){"use strict";s.d(n,{Z:function(){return t}});var t=(0,s(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,s){"use strict";s.d(n,{Z:function(){return t}});var t=(0,s(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,s){"use strict";s.d(n,{Z:function(){return t}});var t=(0,s(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,s){"use strict";s.d(n,{Z:function(){return t}});var t=(0,s(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,s){"use strict";s.d(n,{Z:function(){return t}});var t=(0,s(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},79153:function(e,n,s){"use strict";s.d(n,{Z:function(){return t}});var t=(0,s(30853).Z)("search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]])},62640:function(e,n,s){"use strict";s.d(n,{Z:function(){return t}});var t=(0,s(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},76344:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/responsive",function(){return s(31890)}])},31890:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return D}});var t=s(85893),o=s(11151),i=s(34940),a=s(25263),r=s(5037),c=s(67294),d={demo:"mantine-yXMBj1Z"};let l=`
import classes from './Demo.module.css';

function Demo() {
  return <div className={classes.demo}>Demo</div>;
}
`,p=`
.demo {
  background-color: var(--mantine-color-blue-filled);
  color: var(--mantine-color-white);
  padding: var(--mantine-spacing-md);
  text-align: center;

  @media (min-width: em(750px)) {
    background-color: var(--mantine-color-red-filled);
  }
}
`,h={type:"code",component:function(){return c.createElement("div",{className:d.demo},"Demo")},code:[{fileName:"Demo.module.css",code:p,language:"css"},{fileName:"Demo.tsx",code:l,language:"tsx"}]};var m=s(31577),u={"input-mobile":"mantine-QbbTXV2","input-desktop":"mantine-SbIOWb4"};let v=`
import { TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <>
      <TextInput
        label="My input"
        placeholder="My input"
        size="xs"
        className={classes['input-mobile']}
      />
      <TextInput
        label="My input"
        placeholder="My input"
        size="xl"
        className={classes['input-desktop']}
      />
    </>
  );
}
`,f=`
.input-mobile {
  @media (min-width: em(750px)) {
    display: none;
  }
}

.input-desktop {
  display: none;

  @media (min-width: em(750px)) {
    display: block;
  }
}
`,y={type:"code",component:function(){return c.createElement(c.Fragment,null,c.createElement(m.o,{label:"My input",placeholder:"My input",size:"xs",className:u["input-mobile"]}),c.createElement(m.o,{label:"My input",placeholder:"My input",size:"xl",className:u["input-desktop"]}))},code:[{fileName:"Demo.tsx",code:v,language:"tsx"},{fileName:"Demo.module.css",code:f,language:"css"}]};var g=s(46393),x=s(41283),k=s(43406),b=s(18248);let j=`
import { Tooltip, Button, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function Demo() {
  const isMobile = useMediaQuery(\`(max-width: \${em(750)})\`);

  return (
    <Tooltip label={isMobile ? 'Mobile' : 'Desktop'}>
      <Button>Hover me</Button>
    </Tooltip>
  );
}
`,M={type:"code",component:function(){let e=(0,b.a)(`(max-width: ${(0,g.em)(750)})`);return c.createElement(x.u,{label:e?"Mobile":"Desktop"},c.createElement(k.z,null,"Hover me"))},code:j},w=(0,i.A)(a.us.ResponsiveStyles);function N(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",blockquote:"blockquote",strong:"strong"},(0,o.ah)(),e.components),{Demo:s,DataTable:i,InstallScript:a}=n;return i||I("DataTable",!0),s||I("Demo",!0),a||I("InstallScript",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"responsive-styles",children:"Responsive styles"}),"\n",(0,t.jsx)(n.h2,{id:"media-queries",children:"Media queries"}),"\n",(0,t.jsx)(s,{data:h}),"\n",(0,t.jsx)(n.h2,{id:"configure-breakpoints",children:"Configure breakpoints"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"theme.breakpoints"})," are used in all responsive Mantine components. Breakpoints are expected to be set in ",(0,t.jsx)(n.code,{children:"em"})," units.\nYou can configure these values with ",(0,t.jsx)(n.a,{href:"/theming/mantine-provider/",children:"MantineProvider"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider, createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  breakpoints: {\n    xs: '30em',\n    sm: '48em',\n    md: '64em',\n    lg: '74em',\n    xl: '90em',\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Default ",(0,t.jsx)(n.code,{children:"theme.breakpoints"})," values:"]}),"\n",(0,t.jsx)(i,{head:["Breakpoint","Viewport width"],data:Object.keys(r.t.breakpoints).map(e=>[e,"".concat(r.t.breakpoints[e])])}),"\n",(0,t.jsx)(n.h2,{id:"breakpoints-variables-in-css-modules",children:"Breakpoints variables in CSS modules"}),"\n",(0,t.jsxs)(n.p,{children:["It is not possible to use CSS variables inside media queries – these values cannot be dynamically\ngenerated by ",(0,t.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"}),". To use Mantine theme breakpoints\nin your ",(0,t.jsx)(n.code,{children:".css"})," files, you will need ",(0,t.jsx)(n.code,{children:"postcss-simple-vars"})," package:"]}),"\n",(0,t.jsx)(a,{dev:!0,packages:"postcss-simple-vars"}),"\n",(0,t.jsxs)(n.p,{children:["Add it to your ",(0,t.jsx)(n.a,{href:"/styles/postcss-preset",children:"PostCSS config"})," in ",(0,t.jsx)(n.code,{children:"postcss.config.js"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  plugins: {\n    'postcss-preset-mantine': {},\n    'postcss-simple-vars': {\n      variables: {\n        'mantine-breakpoint-xs': '36em',\n        'mantine-breakpoint-sm': '48em',\n        'mantine-breakpoint-md': '62em',\n        'mantine-breakpoint-lg': '75em',\n        'mantine-breakpoint-xl': '88em',\n      },\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then you will be able to access these variables in your ",(0,t.jsx)(n.code,{children:".css"})," files:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:".demo {\n  @media (max-width: $mantine-breakpoint-xs) {\n    background-color: red;\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Will be transformed to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:"@media (max-width: 36em) {\n  .demo {\n    background-color: red;\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Dynamic breakpoints are not supported"})}),"\n",(0,t.jsxs)(n.p,{children:["Values that are defined in ",(0,t.jsx)(n.code,{children:"postcss-simple-vars"})," config are static and\nare not connected to the ",(0,t.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," – if values change,\nyou will need to update them manually in both theme override and postcss config."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"component-size-based-on-media-query",children:"Component size based on media query"}),"\n",(0,t.jsxs)(n.p,{children:["Some components support ",(0,t.jsx)(n.code,{children:"size"})," prop, which changes various aspects of component appearance.\n",(0,t.jsx)(n.code,{children:"size"})," prop is not responsive – it is not possible to define different component sizes for different\nscreen sizes. Instead, you can render multiple components with different sizes and show/hide them\nbased on media query:"]}),"\n",(0,t.jsx)(s,{data:y}),"\n",(0,t.jsx)(n.h2,{id:"use-media-query-hook",children:"use-media-query hook"}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.a,{href:"/hooks/use-media-query/",children:"use-media-query hook"})," to change some of component props\nbased on media query. Note that this approach is not recommended for most of the cases if you have\nssr in your application (you use Next.js, Remix, Gatsby or any other framework that includes ssr)\nas it may cause hydration mismatch. If you do not have ssr in your application (for example, if you use Vite),\nthen you can safely use this hook to change props of components or conditionally render components\nbased on hook return value."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/hooks/use-media-query/",children:"use-media-query hook"})," can be safely used to change props of components that are not rendered\non server side (modals, tooltips, etc.). In the following example, it is safe to use ",(0,t.jsx)(n.code,{children:"useMediaQuery"})," hook to\nchange ",(0,t.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"})," props as it is not rendered on server side:"]}),"\n",(0,t.jsx)(s,{data:M})]})}var D=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(w,Object.assign({},e,{children:(0,t.jsx)(N,e)}))};function I(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[8969,9341,4831,9774,2888,179],function(){return e(e.s=76344)}),_N_E=e.O()}]);