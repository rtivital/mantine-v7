(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8136],{28146:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/focus-trap",function(){return n(33857)}])},33857:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var o=n(85893),i=n(11151),c=n(34940),r=n(25263),a=n(67294),s=n(78901),l=n(94873),u=n(43406),d=n(56245),p=n(31577);let h=`
import { useDisclosure } from '@mantine/hooks';
import { FocusTrap, TextInput, Button, Box } from '@mantine/core';

function Demo() {
  const [active, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Button onClick={toggle}>{active ? 'Deactivate' : 'Activate'} focus trap</Button>

      <FocusTrap active={active}>
        <div>
          <TextInput mt="sm" label="First input" placeholder="First input" />
          <TextInput mt="sm" label="Second input" placeholder="Second input" />
          <TextInput mt="sm" label="Third input" placeholder="Third input" />
        </div>
      </FocusTrap>
    </Box>
  );
}
`,m={type:"code",component:function(){let[e,{toggle:t}]=(0,s.q)(!1);return a.createElement(l.x,{maw:400,mx:"auto"},a.createElement(u.z,{onClick:t},e?"Deactivate":"Activate"," focus trap"),a.createElement(d.i,{active:e},a.createElement("div",null,a.createElement(p.o,{mt:"sm",label:"First input",placeholder:"First input"}),a.createElement(p.o,{mt:"sm",label:"Second input",placeholder:"Second input"}),a.createElement(p.o,{mt:"sm",label:"Third input",placeholder:"Third input"}))))},code:h},f=`
import { useDisclosure } from '@mantine/hooks';
import { FocusTrap, TextInput, Button, Box } from '@mantine/core';

function Demo() {
  const [active, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Button onClick={toggle}>{active ? 'Deactivate' : 'Activate'} focus trap</Button>

      <FocusTrap active={active}>
        <div>
          <TextInput mt="sm" label="First input" placeholder="First input" />
          <TextInput mt="sm" label="Second input" placeholder="Second input" data-autofocus />
          <TextInput mt="sm" label="Third input" placeholder="Third input" />
        </div>
      </FocusTrap>
    </Box>
  );
}
`,x={type:"code",component:function(){let[e,{toggle:t}]=(0,s.q)(!1);return a.createElement(l.x,{maw:400,mx:"auto"},a.createElement(u.z,{onClick:t},e?"Deactivate":"Activate"," focus trap"),a.createElement(d.i,{active:e},a.createElement("div",null,a.createElement(p.o,{mt:"sm",label:"First input",placeholder:"First input"}),a.createElement(p.o,{mt:"sm",label:"Second input",placeholder:"Second input","data-autofocus":!0}),a.createElement(p.o,{mt:"sm",label:"Third input",placeholder:"Third input"}))))},code:f},j=(0,c.A)(r.us.FocusTrap);function v(e){let t=Object.assign({h2:"h2",p:"p",a:"a",code:"code",ul:"ul",li:"li"},(0,i.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:["FocusTrap is a component implementation of ",(0,o.jsx)(t.a,{href:"/hooks/use-focus-trap/",children:"use-focus-trap"})," hook,\nit is used in all Mantine components that require focus trap (",(0,o.jsx)(t.a,{href:"/core/modal/",children:"Modal"}),", ",(0,o.jsx)(t.a,{href:"/dates/date-picker/",children:"DatePicker"}),", ",(0,o.jsx)(t.a,{href:"/core/popover/",children:"Popover"}),", etc.)."]}),"\n",(0,o.jsx)(n,{data:m}),"\n",(0,o.jsx)(t.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,o.jsxs)(t.p,{children:["To define the element that will receive initial focus set ",(0,o.jsx)(t.code,{children:"data-autofocus"})," attribute:"]}),"\n",(0,o.jsx)(n,{data:x}),"\n",(0,o.jsx)(t.h2,{id:"focus-trapping-logic",children:"Focus trapping logic"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Focus is trapped within child node if ",(0,o.jsx)(t.code,{children:"active"})," prop is ",(0,o.jsx)(t.code,{children:"true"})]}),"\n",(0,o.jsxs)(t.li,{children:["When FocusTrap component is mounted or when ",(0,o.jsx)(t.code,{children:"active"})," prop changes from ",(0,o.jsx)(t.code,{children:"false"})," to ",(0,o.jsx)(t.code,{children:"true"})," first element with ",(0,o.jsx)(t.code,{children:"data-autofocus"})," attribute is focused"]}),"\n",(0,o.jsxs)(t.li,{children:["If there are no elements with ",(0,o.jsx)(t.code,{children:"data-autofocus"})," attribute, then the first element that supports keyboard interaction is focused"]}),"\n",(0,o.jsxs)(t.li,{children:["If target element does not have focusable elements or does not support ",(0,o.jsx)(t.code,{children:"ref"}),", then focus trap will not work"]}),"\n",(0,o.jsx)(t.li,{children:"Trap stops working when element outside of child is focused"}),"\n"]})]})}var T=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(j,Object.assign({},e,{children:(0,o.jsx)(v,e)}))}}},function(e){e.O(0,[4878,9341,4940,9774,2888,179],function(){return e(e.s=28146)}),_N_E=e.O()}]);