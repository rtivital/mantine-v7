(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6959],{17471:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/popover",function(){return t(67663)}])},67663:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return k}});var n=t(85893),r=t(11151),i=t(34940),s=t(25263),a=t(67294),l=t(36802),d=t(43406),c=t(77048);let p=`
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,h={type:"code",code:p,centered:!0,component:function(){return a.createElement(l.J,{width:200,position:"bottom",withArrow:!0,shadow:"md"},a.createElement(l.J.Target,null,a.createElement(d.z,null,"Toggle popover")),a.createElement(l.J.Dropdown,null,a.createElement(c.x,{size:"sm"},"This is uncontrolled popover, it is opened when button is clicked")))}};var u=t(78901);let m=`
import { useDisclosure } from '@mantine/hooks';
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
      <Popover.Target>
        <Button onMouseEnter={open} onMouseLeave={close}>
          Hover to see popover
        </Button>
      </Popover.Target>
      <Popover.Dropdown sx={{ pointerEvents: 'none' }}>
        <Text size="sm">This popover is shown when user hovers the target element</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,w={type:"code",code:m,centered:!0,component:function(){let[e,{close:o,open:t}]=(0,u.q)(!1);return a.createElement(l.J,{width:200,position:"bottom",withArrow:!0,shadow:"md",opened:e},a.createElement(l.J.Target,null,a.createElement(d.z,{onMouseEnter:t,onMouseLeave:o},"Hover to see popover")),a.createElement(l.J.Dropdown,{style:{pointerEvents:"none"}},a.createElement(c.x,{size:"sm"},"This popover is shown when user hovers the target element")))}};var v=t(31577);let x=`
import { Popover, Button, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown sx={(theme) => ({ background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white })}>
        <TextInput label="Name" placeholder="Name" size="xs" />
        <TextInput label="Email" placeholder="john@doe.com" size="xs" mt="xs" />
      </Popover.Dropdown>
    </Popover>
  );
}
`,g={type:"code",code:x,centered:!0,component:function(){return a.createElement(l.J,{width:300,trapFocus:!0,position:"bottom",withArrow:!0,shadow:"md"},a.createElement(l.J.Target,null,a.createElement(d.z,null,"Toggle popover")),a.createElement(l.J.Dropdown,null,a.createElement(v.o,{label:"Name",placeholder:"Name",size:"xs"}),a.createElement(v.o,{label:"Email",placeholder:"john@doe.com",size:"xs",mt:"xs"})))}};var f=t(85880);let j=`
import { Popover, Mark, Text } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Stantler\u2019s magnificent antlers were traded at high prices as works of art. As a result, this
      Pok\xe9mon was hunted close to extinction by those who were after the priceless antlers.{' '}
      <Popover middlewares={{ flip: true, shift: true, inline: true }} position="top">
        <Popover.Target>
          <Mark>When visiting a junkyard</Mark>
        </Popover.Target>
        <Popover.Dropdown>Inline dropdown</Popover.Dropdown>
      </Popover>
      , you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh\u2019s
      feathers glow in seven colors depending on the angle at which they are struck by light. These
      feathers are said to bring happiness to the bearers. This Pok\xe9mon is said to live at the foot
      of a rainbow.
    </Text>
  );
}
`,P={type:"code",component:function(){return a.createElement(c.x,null,"Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pok\xe9mon was hunted close to extinction by those who were after the priceless antlers."," ",a.createElement(l.J,{middlewares:{flip:!0,shift:!0,inline:!0},position:"top"},a.createElement(l.J.Target,null,a.createElement(f.v,null,"When visiting a junkyard")),a.createElement(l.J.Dropdown,null,"Inline dropdown")),", you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pok\xe9mon is said to live at the foot of a rainbow.")},code:j},T=`
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width="target" position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button w={280}>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">
          This popover has same width as target, it is useful when you are building input dropdowns
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

`,b={type:"code",code:T,centered:!0,component:function(){return a.createElement(l.J,{width:"target",position:"bottom",withArrow:!0,shadow:"md"},a.createElement(l.J.Target,null,a.createElement(d.z,{w:280},"Toggle popover")),a.createElement(l.J.Dropdown,null,a.createElement(c.x,{size:"sm"},"This popover has same width as target, it is useful when you are building input dropdowns")))}},E=(0,i.A)(s.us.Popover);function y(e){let o=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",a:"a",ul:"ul",li:"li",h3:"h3"},(0,r.ah)(),e.components),{Demo:t,TargetComponent:i,KeyboardEventsTable:s}=o;return t||D("Demo",!0),s||D("KeyboardEventsTable",!0),i||D("TargetComponent",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t,{data:h}),"\n",(0,n.jsx)(o.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsxs)(o.p,{children:["You can control Popover state with ",(0,n.jsx)(o.code,{children:"opened"})," and ",(0,n.jsx)(o.code,{children:"onChange"})," props:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Popover, Button } from '@mantine/core';\n\nfunction Demo() {\n  const [opened, setOpened] = useState(false);\n  return (\n    <Popover opened={opened} onChange={setOpened}>\n      <Popover.Target>\n        <Button onClick={() => setOpened((o) => !o)}>Toggle popover</Button>\n      </Popover.Target>\n\n      <Popover.Dropdown>Dropdown</Popover.Dropdown>\n    </Popover>\n  );\n}\n"})}),"\n",(0,n.jsx)(o.p,{children:"Controlled example with mouse events:"}),"\n",(0,n.jsx)(t,{data:w,demoProps:{toggle:!1}}),"\n",(0,n.jsx)(o.h2,{id:"focus-trap",children:"Focus trap"}),"\n",(0,n.jsxs)(o.p,{children:["If you need to use any interactive elements within ",(0,n.jsx)(o.code,{children:"Popover"}),", set ",(0,n.jsx)(o.code,{children:"trapFocus"})," prop:"]}),"\n",(0,n.jsx)(t,{data:g}),"\n",(0,n.jsx)(o.h2,{id:"inline-elements",children:"Inline elements"}),"\n",(0,n.jsxs)(o.p,{children:["Enable ",(0,n.jsx)(o.code,{children:"inline"})," middleware to use ",(0,n.jsx)(o.code,{children:"Popover"})," with inline elements:"]}),"\n",(0,n.jsx)(t,{data:P}),"\n",(0,n.jsx)(o.h2,{id:"same-width",children:"Same width"}),"\n",(0,n.jsxs)(o.p,{children:["Set ",(0,n.jsx)(o.code,{children:'width="target"'})," prop to make Popover dropdown take the same width as target element:"]}),"\n",(0,n.jsx)(t,{data:b}),"\n",(0,n.jsx)(o.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,n.jsxs)(o.p,{children:["Popover uses ",(0,n.jsx)(o.a,{href:"/core/focus-trap/",children:"FocusTrap"})," component to manage focus.\nAdd ",(0,n.jsx)(o.code,{children:"data-autofocus"})," attribute to element that should receive initial focus:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"<Popover>\n  <input />\n  <input data-autofocus />\n  <input />\n</Popover>\n"})}),"\n",(0,n.jsx)(i,{component:"Popover"}),"\n",(0,n.jsx)(o.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(o.p,{children:["Popover follows ",(0,n.jsx)(o.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal",children:"WAI-ARIA recommendations"}),":"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Dropdown element has ",(0,n.jsx)(o.code,{children:'role="dialog"'})," and ",(0,n.jsx)(o.code,{children:'aria-labelledby="target-id"'})," attributes"]}),"\n",(0,n.jsxs)(o.li,{children:["Target element has ",(0,n.jsx)(o.code,{children:'aria-haspopup="dialog"'}),", ",(0,n.jsx)(o.code,{children:"aria-expanded"}),", ",(0,n.jsx)(o.code,{children:'aria-controls="dropdown-id"'})," attributes"]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"supported-target-elements",children:"Supported target elements"}),"\n",(0,n.jsxs)(o.p,{children:["Uncontrolled Popover will be accessible only when used with ",(0,n.jsx)(o.code,{children:"button"})," element or component that renders it (",(0,n.jsx)(o.a,{href:"/core/button/",children:"Button"}),", ",(0,n.jsx)(o.a,{href:"/core/action-icon/",children:"ActionIcon"}),", etc.).\nOther elements will not support ",(0,n.jsx)(o.code,{children:"Space"})," and ",(0,n.jsx)(o.code,{children:"Enter"})," key presses."]}),"\n",(0,n.jsx)(o.h3,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,n.jsx)(s,{data:[{key:"Escape",description:"Closes dropdown",condition:"Focus within dropdown"},{key:"Space/Enter",description:"Opens/closes dropdown",condition:"Focus on target element"}]})]})}var k=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(E,Object.assign({},e,{children:(0,n.jsx)(y,e)}))};function D(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[4878,9341,4940,9774,2888,179],function(){return e(e.s=17471)}),_N_E=e.O()}]);