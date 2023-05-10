(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8564],{62876:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/code",function(){return n(47403)}])},47403:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return x}});var t=n(85893),r=n(11151),c=n(34940),d=n(25263),i=n(67294),l=n(2857);let a=`
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
`,m={type:"code",code:a,component:function(){return i.createElement(l.E,null,"React.createElement()")}},u=`
import { Code } from '@mantine/core';

const codeForPreviousDemo = \`import React from 'react';
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}\`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}
`,s=`import React from 'react';
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`,p={type:"code",code:u,component:function(){return i.createElement(l.E,{block:!0},s)}};var h=n(74378);let f=`
import { Code, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Code color="blue.9" c="white">
        React.createElement()
      </Code>
      <Code color="var(--mantine-color-blue-light)">React.createElement()</Code>
    </Group>
  );
}
`,C={type:"code",code:f,component:function(){return i.createElement(h.Z,null,i.createElement(l.E,{color:"blue.9",c:"white"},"React.createElement()"),i.createElement(l.E,{color:"var(--mantine-color-blue-light)"},"React.createElement()"))}},E=(0,c.A)(d.us.Code);function j(e){let o=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,r.ah)(),e.components),{Demo:n}=o;return n||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:["By default, Code component renders inline ",(0,t.jsx)(o.code,{children:"code"})," html element:"]}),"\n",(0,t.jsx)(n,{data:m}),"\n",(0,t.jsx)(o.h2,{id:"block-code",children:"Block code"}),"\n",(0,t.jsxs)(o.p,{children:["To render code in ",(0,t.jsx)(o.code,{children:"pre"})," element pass ",(0,t.jsx)(o.code,{children:"block"})," prop to Code component:"]}),"\n",(0,t.jsx)(n,{data:p}),"\n",(0,t.jsx)(o.h2,{id:"custom-color",children:"Custom color"}),"\n",(0,t.jsxs)(o.p,{children:["By default, code has gray color, you can change it to any valid CSS color or to one\nof the ",(0,t.jsx)(o.a,{href:"/theming/colors",children:"theme.colors"}),":"]}),"\n",(0,t.jsx)(n,{data:C})]})}var x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(E,Object.assign({},e,{children:(0,t.jsx)(j,e)}))}}},function(e){e.O(0,[4878,9341,4940,9774,2888,179],function(){return e(e.s=62876)}),_N_E=e.O()}]);