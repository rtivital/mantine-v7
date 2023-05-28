(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8564],{62876:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/code",function(){return t(47403)}])},47403:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return x}});var n=t(85893),r=t(11151),c=t(34940),i=t(25263),d=t(67294),l=t(2857);let a=`
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
`,m={type:"code",code:a,component:function(){return d.createElement(l.E,null,"React.createElement()")}},u=`
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
}`,p={type:"code",code:u,component:function(){return d.createElement(l.E,{block:!0},s)}};var f=t(74378);let h=`
import { Code, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Code color="blue.9" c="white">
        React.createElement()
      </Code>
      <Code color="var(--mantine-color-blue-light)">React.createElement()</Code>
    </Group>
  );
}
`,C={type:"code",code:h,component:function(){return d.createElement(f.Z,{justify:"center"},d.createElement(l.E,{color:"blue.9",c:"white"},"React.createElement()"),d.createElement(l.E,{color:"var(--mantine-color-blue-light)"},"React.createElement()"))}},E=(0,c.A)(i.us.Code);function j(e){let o=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,r.ah)(),e.components),{Demo:t}=o;return t||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(o.p,{children:["By default, Code component renders inline ",(0,n.jsx)(o.code,{children:"code"})," html element:"]}),"\n",(0,n.jsx)(t,{data:m}),"\n",(0,n.jsx)(o.h2,{id:"block-code",children:"Block code"}),"\n",(0,n.jsxs)(o.p,{children:["To render code in ",(0,n.jsx)(o.code,{children:"pre"})," element pass ",(0,n.jsx)(o.code,{children:"block"})," prop to Code component:"]}),"\n",(0,n.jsx)(t,{data:p}),"\n",(0,n.jsx)(o.h2,{id:"custom-color",children:"Custom color"}),"\n",(0,n.jsxs)(o.p,{children:["By default, code color is gray, you can change it to any valid CSS color or to one\nof the ",(0,n.jsx)(o.a,{href:"/theming/colors",children:"theme.colors"}),":"]}),"\n",(0,n.jsx)(t,{data:C})]})}var x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(E,Object.assign({},e,{children:(0,n.jsx)(j,e)}))}}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=62876)}),_N_E=e.O()}]);