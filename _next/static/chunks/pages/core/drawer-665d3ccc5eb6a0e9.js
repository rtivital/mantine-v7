(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6334],{52200:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/drawer",function(){return t(90821)}])},90821:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return S}});var o=t(85893),r=t(11151),l=t(34940),c=t(61240),s=t(67294),i=t(50006),a=t(55899),d=t(78901),u=t(20574);let h=`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}
`,p={type:"code",code:h,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1);return s.createElement(s.Fragment,null,s.createElement(i.d,{opened:e,onClose:t,title:"Authentication"},s.createElement(u._,{noShadow:!0,noPadding:!0})),s.createElement(a.z,{onClick:n},"Open Drawer"))}};var m=t(74378);let w={type:"code",component:function(){let[e,n]=(0,s.useState)(!1),[t,o]=(0,s.useState)("top"),r=e=>{o(e),n(!0)};return s.createElement(s.Fragment,null,s.createElement(i.d,{opened:e,onClose:()=>n(!1),padding:"md",position:t,withCloseButton:!1},"Press escape to close the drawer"),s.createElement(m.Z,{justify:"center"},s.createElement(a.z,{variant:"outline",onClick:()=>r("left")},"Left"),s.createElement(a.z,{variant:"outline",onClick:()=>r("right")},"Right"),s.createElement(a.z,{variant:"outline",onClick:()=>r("top")},"Top"),s.createElement(a.z,{variant:"outline",onClick:()=>r("bottom")},"Bottom")))}},x=`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
`,f={type:"code",code:x,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1);return s.createElement(s.Fragment,null,s.createElement(i.d,{opened:e,onClose:t,title:"Authentication",overlayProps:{backgroundOpacity:.5,blur:4}},s.createElement(u._,{noShadow:!0,noPadding:!0})),s.createElement(a.z,{onClick:n},"Open drawer"))}},j={type:"code",component:function(){let[e,n]=(0,s.useState)(!1),[t,o]=(0,s.useState)("top"),r=e=>{o(e),n(!0)},l=["xs","sm","md","lg","xl","100%","40rem","25%"].map(e=>s.createElement(a.z,{variant:"outline",onClick:()=>r(e),key:e},e));return s.createElement(s.Fragment,null,s.createElement(i.d,{opened:e,onClose:()=>n(!1),padding:"md",size:t,withCloseButton:!1},"Press escape to close the drawer"),s.createElement(m.Z,{justify:"center"},l))}},D=`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} withCloseButton={false}>
        Drawer without header, press escape or click on overlay to close
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}

`,y={type:"code",code:D,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1);return s.createElement(s.Fragment,null,s.createElement(i.d,{opened:e,onClose:t,withCloseButton:!1},"Drawer without header, press escape or click on overlay to close"),s.createElement(a.z,{onClick:n},"Open drawer"))}},C=`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Drawer with scroll</p>);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Header is sticky">
        {content}
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
`,g={type:"code",code:C,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1),o=Array(100).fill(0).map((e,n)=>s.createElement("p",{key:n},"Drawer with scroll"));return s.createElement(s.Fragment,null,s.createElement(i.d,{opened:e,onClose:t,title:"Header is sticky"},o),s.createElement(a.z,{onClick:n},"Open drawer"))}};var k=t(45906);let E=`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, ScrollArea } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Drawer with scroll</p>);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Header is sticky"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
`,b={type:"code",code:E,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1),o=Array(100).fill(0).map((e,n)=>s.createElement("p",{key:n},"Drawer with scroll"));return s.createElement(s.Fragment,null,s.createElement(i.d,{opened:e,onClose:t,title:"Header is sticky",scrollAreaComponent:k.x.Autosize},o),s.createElement(a.z,{onClick:n},"Open drawer"))}},v=`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        transitionProps={{ transition: 'rotate-left', duration: 150, timingFunction: 'linear' }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}

`,B={type:"code",code:v,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1);return s.createElement(s.Fragment,null,s.createElement(i.d,{opened:e,onClose:t,title:"Authentication",transitionProps:{transition:"rotate-left",duration:150,timingFunction:"linear"}},s.createElement(u._,{noShadow:!0,noPadding:!0})),s.createElement(a.z,{onClick:n},"Open Drawer"))}};var O=t(31577);let z=`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, TextInput } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Focus demo">
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
`,A={type:"code",code:z,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1);return s.createElement(s.Fragment,null,s.createElement(i.d,{opened:e,onClose:t,title:"Focus demo"},s.createElement(O.o,{label:"First input",placeholder:"First input"}),s.createElement(O.o,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})),s.createElement(a.z,{onClick:n},"Open drawer"))}},F=`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root opened={opened} onClose={close}>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Drawer title</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>Drawer content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
`,T={type:"code",code:F,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1);return s.createElement(s.Fragment,null,s.createElement(i.d.Root,{opened:e,onClose:t},s.createElement(i.d.Overlay,null),s.createElement(i.d.Content,null,s.createElement(i.d.Header,null,s.createElement(i.d.Title,null,"Drawer title"),s.createElement(i.d.CloseButton,null)),s.createElement(i.d.Body,null,"Drawer content"))),s.createElement(a.z,{onClick:n},"Open drawer"))}},_=(0,l.A)(c.us.Drawer);function P(e){let n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li"},(0,r.ah)(),e.components),{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:p}),"\n",(0,o.jsx)(n.h2,{id:"position",children:"Position"}),"\n",(0,o.jsxs)(n.p,{children:["Drawer can be placed on ",(0,o.jsx)(n.code,{children:"left"})," (default), ",(0,o.jsx)(n.code,{children:"top"}),", ",(0,o.jsx)(n.code,{children:"right"})," and ",(0,o.jsx)(n.code,{children:"bottom"}),". Control drawer position with ",(0,o.jsx)(n.code,{children:"position"})," prop,\nfor example ",(0,o.jsx)(n.code,{children:'<Drawer position="top" />'}),"."]}),"\n",(0,o.jsx)(t,{data:w}),"\n",(0,o.jsx)(n.h2,{id:"customize-overlay",children:"Customize overlay"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Drawer"})," uses ",(0,o.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"})," component, you can set any props that ",(0,o.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"}),"\nsupports with ",(0,o.jsx)(n.code,{children:"overlayProps"}),":"]}),"\n",(0,o.jsx)(t,{data:f}),"\n",(0,o.jsx)(n.h2,{id:"sizes",children:"Sizes"}),"\n",(0,o.jsxs)(n.p,{children:["You can change drawer width/height (depends on ",(0,o.jsx)(n.code,{children:"position"}),") by setting ",(0,o.jsx)(n.code,{children:"size"})," prop to predefined size or any valid width,\nfor example, ",(0,o.jsx)(n.code,{children:'size="55%"'})," or ",(0,o.jsx)(n.code,{children:"size={200}"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { Drawer } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Drawer position="right" size="xl" opened onClose={() => {}}>\n      {/* Drawer content */}\n    </Drawer>\n  );\n}\n'})}),"\n",(0,o.jsx)(t,{data:j}),"\n",(0,o.jsx)(n.h2,{id:"remove-header",children:"Remove header"}),"\n",(0,o.jsxs)(n.p,{children:["To remove header set ",(0,o.jsx)(n.code,{children:"withCloseButton={false}"})]}),"\n",(0,o.jsx)(t,{data:y}),"\n",(0,o.jsx)(n.h2,{id:"drawer-with-scroll",children:"Drawer with scroll"}),"\n",(0,o.jsx)(t,{data:g}),"\n",(0,o.jsx)(n.h2,{id:"usage-with-scrollarea",children:"Usage with ScrollArea"}),"\n",(0,o.jsx)(t,{data:b}),"\n",(0,o.jsx)(n.h2,{id:"change-transition",children:"Change transition"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Drawer"})," is built with ",(0,o.jsx)(n.a,{href:"/core/transition/",children:"Transition"})," component. Use ",(0,o.jsx)(n.code,{children:"transitionProps"}),"\nprop to customize any ",(0,o.jsx)(n.a,{href:"/core/transition/",children:"Transition"})," properties:"]}),"\n",(0,o.jsx)(t,{data:B}),"\n",(0,o.jsx)(n.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Drawer"})," uses ",(0,o.jsx)(n.a,{href:"/core/focus-trap/",children:"FocusTrap"})," to trap focus. Add ",(0,o.jsx)(n.code,{children:"data-autofocus"}),"\nattribute to the element that should receive initial focus."]}),"\n",(0,o.jsx)(t,{data:A}),"\n",(0,o.jsx)(n.h2,{id:"control-behavior",children:"Control behavior"}),"\n",(0,o.jsxs)(n.p,{children:["The following props can be used to control ",(0,o.jsx)(n.code,{children:"Drawer"})," behavior.\nIn most cases it is not recommended to turn these features off –\nit will make the component less accessible."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"trapFocus"})," – determines whether focus should be trapped inside drawer"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"closeOnEscape"})," – determines whether the drawer should be closed when ",(0,o.jsx)(n.code,{children:"Escape"})," key is pressed"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"closeOnClickOutside"})," – determines whether the drawer should be closed when user clicks on the overlay"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"returnFocus"})," – determines whether focus should be returned to the element that was focused before the drawer was opened"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,o.jsxs)(n.p,{children:["You can use the following compound components to have full control over the ",(0,o.jsx)(n.code,{children:"Drawer"})," rendering:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Drawer.Root"})," – context provider"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Drawer.Overlay"})," – render ",(0,o.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Drawer.Content"})," – main drawer element, should include all drawer content"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Drawer.Header"})," – sticky header, usually contains ",(0,o.jsx)(n.code,{children:"Drawer.Title"})," and ",(0,o.jsx)(n.code,{children:"Drawer.CloseButton"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Drawer.Title"})," – ",(0,o.jsx)(n.code,{children:"h2"})," element, ",(0,o.jsx)(n.code,{children:"aria-labelledby"})," of ",(0,o.jsx)(n.code,{children:"Drawer.Content"})," is pointing to this element, usually is rendered inside ",(0,o.jsx)(n.code,{children:"Drawer.Header"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Drawer.CloseButton"})," – close button, usually rendered inside ",(0,o.jsx)(n.code,{children:"Drawer.Header"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Drawer.Body"})," – a place for main content, ",(0,o.jsx)(n.code,{children:"aria-describedby"})," of ",(0,o.jsx)(n.code,{children:"Drawer.Content"})," is pointing to this element"]}),"\n"]}),"\n",(0,o.jsx)(t,{data:T}),"\n",(0,o.jsx)(n.h2,{id:"fixed-elements-offset",children:"Fixed elements offset"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Drawer"})," component uses ",(0,o.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. To properly size these ",(0,o.jsx)(n.code,{children:"elements"})," add a ",(0,o.jsx)(n.code,{children:"className"})," to them (",(0,o.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll#positionfixed-elements",children:"documentation"}),"):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { RemoveScroll } from \'@mantine/core\';\n\n// to make "width: 100%"\n<div className={RemoveScroll.classNames.fullWidth} />\n\n// to make "right: 0"\n<div className={RemoveScroll.classNames.zeroRight} />\n'})}),"\n",(0,o.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Drawer"})," component follows ",(0,o.jsx)(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:"title"})," props to make component accessible, will add ",(0,o.jsx)(n.code,{children:"aria-labelledby"})," to the content element:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Drawer } from '@mantine/core';\n\nfunction Demo() {\n  return <Drawer title=\"Drawer label\" opened onClose={() => {}} />;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To set close button ",(0,o.jsx)(n.code,{children:"aria-label"})," use ",(0,o.jsx)(n.code,{children:"closeButtonProps"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Drawer } from '@mantine/core';\n\nfunction Demo() {\n  return <Drawer closeButtonProps={{ 'aria-label': 'Close modal' }} opened onClose={() => {}} />;\n}\n"})})]})}var S=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(_,Object.assign({},e,{children:(0,o.jsx)(P,e)}))}}},function(e){e.O(0,[4940,1757,7252,6,9774,2888,179],function(){return e(e.s=52200)}),_N_E=e.O()}]);