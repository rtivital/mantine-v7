(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8588],{78200:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/modal",function(){return o(43789)}])},43789:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return Y}});var t=o(85893),l=o(11151),r=o(34940),a=o(61240),i=o(14874),s=o(67294),c=o(78901),d=o(31017),u=o(55899),m=o(20574);let p=`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open centered Modal</Button>
    </>
  );
}
`,h={type:"code",code:p,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1);return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:e,onClose:o,title:"Authentication",centered:!0},s.createElement(m._,{noPadding:!0,noShadow:!0})),s.createElement(u.z,{onClick:n},"Open centered Modal"))}},f=`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        Modal without header, press escape or click on overlay to close
      </Modal>

      <Button onClick={open}>Open Modal</Button>
    </>
  );
}

`,x={type:"code",code:f,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1);return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:e,onClose:o,withCloseButton:!1},"Modal without header, press escape or click on overlay to close"),s.createElement(u.z,{onClick:n},"Open Modal"))}};var j=o(74378);let M=["xs","sm","md","lg","xl","55rem","70%","100%"],y={type:"code",component:function(){let[e,n]=(0,s.useState)(!1),[o,t]=(0,s.useState)("md"),l=M.map(e=>s.createElement(u.z,{key:e,variant:"outline",onClick:()=>{t(e),n(!0)}},e));return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:e,onClose:()=>n(!1),title:"Introduce yourself!",size:o},s.createElement(m._,{noPadding:!0,noShadow:!0})),s.createElement(j.Z,{justify:"center"},l))}};var g=o(34525),b=o(23733),C=o(77048);let w=`
import { useDisclosure, useCounter } from '@mantine/hooks';
import { Modal, Button, Group, Text, Badge } from '@mantine/core';

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  const [count, { increment, decrement }] = useCounter(3, { min: 0 });

  const badges = Array(count)
    .fill(0)
    .map((_, index) => <Badge key={index}>Badge {index}</Badge>);

  return (
    <>
      <Modal opened={opened} onClose={close} size="auto" title="Modal size auto">
        <Text>Modal with size auto will fits its content</Text>

        <Group wrap="nowrap" mt="md">
          {badges}
        </Group>

        <Group mt="xl">
          <Button variant="outline" onClick={increment}>
            Add badge
          </Button>
          <Button variant="outline" onClick={decrement}>
            Remove badge
          </Button>
        </Group>
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`,v={type:"code",component:function(){let[e,{close:n,open:o}]=(0,c.q)(!1),[t,{increment:l,decrement:r}]=(0,g.C)(3,{min:0}),a=Array(t).fill(0).map((e,n)=>s.createElement(b.C,{key:n},"Badge ",n));return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:e,onClose:n,size:"auto",title:"Modal size auto"},s.createElement(C.x,null,"Modal with size auto will fits its content"),s.createElement(j.Z,{wrap:"nowrap",mt:"md"},a),s.createElement(j.Z,{mt:"xl"},s.createElement(u.z,{variant:"outline",onClick:l},"Add badge"),s.createElement(u.z,{variant:"outline",onClick:r},"Remove badge"))),s.createElement(u.z,{onClick:o},"Open modal"))},centered:!0,code:w},E=`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen
        radius={0}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open Modal</Button>
    </>
  );
}
`,k={type:"code",code:E,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1);return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:e,onClose:o,title:"This is a fullscreen modal",fullScreen:!0,radius:0,transitionProps:{transition:"fade",duration:200}},s.createElement(C.x,{mb:"xl"},"It takes the entire screen and does not not have overlay and border-radius, you can use it small screens to save up some space. It also has fade transition by default, but you can change that with transition prop. Now here is an authentication form used in previous examples to see the difference."),s.createElement(m._,{noPadding:!0,noShadow:!0})),s.createElement(u.z,{onClick:n},"Open Modal"))}};var O=o(18248),B=o(46393);let z=`
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: ${(0,B.em)(800)})');

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen={isMobile}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        The Modal will be full screen only on mobile
      </Modal>

      <Button onClick={open}>Open Modal</Button>
    </>
  );
}
`,D={type:"code",code:z,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1),t=(0,O.a)(`(max-width: ${(0,B.em)(800)})`);return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:e,onClose:o,title:"This is a fullscreen modal",fullScreen:t,transitionProps:{transition:"fade",duration:200}},"The Modal will be full screen only on mobile"),s.createElement(u.z,{onClick:n},"Open Modal"))}},T=`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`,S={type:"code",code:T,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1);return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:e,onClose:o,title:"Authentication",overlayProps:{backgroundOpacity:.55,blur:3}},s.createElement(m._,{noShadow:!0,noPadding:!0})),s.createElement(u.z,{onClick:n},"Open modal"))}},P=`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Header is sticky">
        {content}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`,A={type:"code",code:P,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1),t=Array(100).fill(0).map((e,n)=>s.createElement("p",{key:n},"Modal with scroll"));return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:e,onClose:o,title:"Header is sticky"},t),s.createElement(u.z,{onClick:n},"Open modal"))}};var F=o(45906);let N=`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, ScrollArea } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Header is sticky"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`,_={type:"code",code:N,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1),t=Array(100).fill(0).map((e,n)=>s.createElement("p",{key:n},"Modal with scroll"));return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:e,onClose:o,title:"Header is sticky",scrollAreaComponent:F.x.Autosize},t),s.createElement(u.z,{onClick:n},"Open modal"))}},I=`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" yOffset="1vh" xOffset={0}>
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`,R={type:"code",code:I,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1);return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:e,onClose:o,title:"Authentication",yOffset:"1vh",xOffset:0},s.createElement(m._,{noPadding:!0,noShadow:!0})),s.createElement(u.z,{onClick:n},"Open modal"))}},q=`
import { useState } from 'react';
import { Modal, Group, Button } from '@mantine/core';

function Demo() {
  const [noTransitionOpened, setNoTransitionOpened] = useState(false);
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);

  return (
    <>
      <Modal
        opened={slowTransitionOpened}
        onClose={() => setSlowTransitionOpened(false)}
        title="Please consider this"
        transitionProps={{ transition: 'rotate-left' }}
      >
        rotate-left transition
      </Modal>

      <Modal
        opened={noTransitionOpened}
        onClose={() => setNoTransitionOpened(false)}
        title="Please consider this"
        transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
      >
        fade transition 600ms linear transition
      </Modal>

      <Group justify="center">
        <Button onClick={() => setSlowTransitionOpened(true)} variant="default">
          Rotate left transition
        </Button>
        <Button onClick={() => setNoTransitionOpened(true)} variant="default">
          Fade transition
        </Button>
      </Group>
    </>
  );
}
`,H={type:"code",code:q,component:function(){let[e,n]=(0,s.useState)(!1),[o,t]=(0,s.useState)(!1);return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:o,onClose:()=>t(!1),title:"Please consider this",transitionProps:{transition:"rotate-left"}},"rotate-left transition"),s.createElement(d.u,{opened:e,onClose:()=>n(!1),title:"Please consider this",transitionProps:{transition:"fade",duration:600,timingFunction:"linear"}},"fade transition 600ms linear transition"),s.createElement(j.Z,{justify:"center"},s.createElement(u.z,{onClick:()=>t(!0),variant:"default"},"Rotate left transition"),s.createElement(u.z,{onClick:()=>n(!0),variant:"default"},"Fade transition")))}};var G=o(31577);let Z=`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`,U={type:"code",code:Z,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1);return s.createElement(s.Fragment,null,s.createElement(d.u,{opened:e,onClose:o,title:"Focus demo"},s.createElement(G.o,{label:"First input",placeholder:"First input"}),s.createElement(G.o,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})),s.createElement(u.z,{onClick:n},"Open modal"))}},W=`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal.Root opened={opened} onClose={close}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>Modal content</Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`,K={type:"code",code:W,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1);return s.createElement(s.Fragment,null,s.createElement(d.u.Root,{opened:e,onClose:o},s.createElement(d.u.Overlay,null),s.createElement(d.u.Content,null,s.createElement(d.u.Header,null,s.createElement(d.u.Title,null,"Modal title"),s.createElement(d.u.CloseButton,null)),s.createElement(d.u.Body,null,"Modal content"))),s.createElement(u.z,{onClick:n},"Open modal"))}},Q=(0,r.A)(a.us.Modal);function X(e){let n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",a:"a",ul:"ul",li:"li"},(0,l.ah)(),e.components),{Demo:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:i.j}),"\n",(0,t.jsx)(n.h2,{id:"center-modal-vertically",children:"Center modal vertically"}),"\n",(0,t.jsx)(o,{data:h}),"\n",(0,t.jsx)(n.h2,{id:"remove-header",children:"Remove header"}),"\n",(0,t.jsxs)(n.p,{children:["To remove header set ",(0,t.jsx)(n.code,{children:"withCloseButton={false}"}),":"]}),"\n",(0,t.jsx)(o,{data:x}),"\n",(0,t.jsx)(n.h2,{id:"change-size",children:"Change size"}),"\n",(0,t.jsxs)(n.p,{children:["You can change modal width by setting ",(0,t.jsx)(n.code,{children:"size"})," prop to predefined size or any valid width, for example, ",(0,t.jsx)(n.code,{children:"55%"})," or ",(0,t.jsx)(n.code,{children:"50rem"}),".\n",(0,t.jsx)(n.code,{children:"Modal"})," width cannot exceed ",(0,t.jsx)(n.code,{children:"100vw"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Modal } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <>\n      <Modal size="sm" />\n      <Modal size={320} />\n      <Modal size="55%" />\n      <Modal size="calc(100vw - 3rem)" />\n    </>\n  );\n}\n'})}),"\n",(0,t.jsx)(o,{data:y}),"\n",(0,t.jsx)(n.h2,{id:"size-auto",children:"Size auto"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Modal"})," with ",(0,t.jsx)(n.code,{children:'size="auto"'})," will have width to fit its content:"]}),"\n",(0,t.jsx)(o,{data:v}),"\n",(0,t.jsx)(n.h2,{id:"fullscreen",children:"Fullscreen"}),"\n",(0,t.jsxs)(n.p,{children:["Fullscreen modal will take the entire screen, it is usually better to change transition to ",(0,t.jsx)(n.code,{children:"fade"}),"\nwhen ",(0,t.jsx)(n.code,{children:"fullScreen"})," prop is set:"]}),"\n",(0,t.jsx)(o,{data:k}),"\n",(0,t.jsxs)(n.p,{children:["To switch Modal to fullscreen on devices with small screens only use ",(0,t.jsx)(n.a,{href:"/hooks/use-media-query/",children:"use-media-query"})," hook.\n",(0,t.jsx)(n.code,{children:"size"})," prop is ignored if ",(0,t.jsx)(n.code,{children:"fullScreen"})," prop is set:"]}),"\n",(0,t.jsx)(o,{data:D}),"\n",(0,t.jsx)(n.h2,{id:"customize-overlay",children:"Customize overlay"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Modal"})," uses ",(0,t.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"})," component, you can set any props that ",(0,t.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"}),"\nsupports with ",(0,t.jsx)(n.code,{children:"overlayProps"}),":"]}),"\n",(0,t.jsx)(o,{data:S}),"\n",(0,t.jsx)(n.h2,{id:"modal-with-scroll",children:"Modal with scroll"}),"\n",(0,t.jsx)(o,{data:A}),"\n",(0,t.jsx)(n.h2,{id:"usage-with-scrollarea",children:"Usage with ScrollArea"}),"\n",(0,t.jsx)(o,{data:_}),"\n",(0,t.jsx)(n.h2,{id:"change-offsets",children:"Change offsets"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"xOffset"}),"/",(0,t.jsx)(n.code,{children:"yOffset"})," to configure horizontal/vertical content offsets:"]}),"\n",(0,t.jsx)(o,{data:R}),"\n",(0,t.jsx)(n.h2,{id:"change-transitions",children:"Change transitions"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Modal"})," is built with ",(0,t.jsx)(n.a,{href:"/core/transition/",children:"Transition"})," component. Use ",(0,t.jsx)(n.code,{children:"transitionProps"}),"\nprop to customize any ",(0,t.jsx)(n.a,{href:"/core/transition/",children:"Transition"})," properties:"]}),"\n",(0,t.jsx)(o,{data:H}),"\n",(0,t.jsx)(n.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,t.jsxs)(n.p,{children:["Modal uses ",(0,t.jsx)(n.a,{href:"/core/focus-trap/",children:"FocusTrap"})," to trap focus. Add ",(0,t.jsx)(n.code,{children:"data-autofocus"}),"\nattribute to the element that should receive initial focus."]}),"\n",(0,t.jsx)(o,{data:U}),"\n",(0,t.jsx)(n.h2,{id:"control-behavior",children:"Control behavior"}),"\n",(0,t.jsxs)(n.p,{children:["The following props can be used to control ",(0,t.jsx)(n.code,{children:"Modal"})," behavior.\nIn most cases, it is not recommended to turn these features off –\nit will make the component less accessible."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"trapFocus"})," – determines whether focus should be trapped inside modal"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"closeOnEscape"})," – determines whether the modal should be closed when ",(0,t.jsx)(n.code,{children:"Escape"})," key is pressed"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"closeOnClickOutside"})," – determines whether the modal should be closed when user clicks on the overlay"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"returnFocus"})," – determines whether focus should be returned to the element that was focused before the modal was opened"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the following compound components to have full control over the ",(0,t.jsx)(n.code,{children:"Modal"})," rendering:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Root"})," – context provider"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Overlay"})," – render ",(0,t.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Content"})," – main modal element, should include all modal content"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Header"})," – sticky header, usually contains ",(0,t.jsx)(n.code,{children:"Modal.Title"})," and ",(0,t.jsx)(n.code,{children:"Modal.CloseButton"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Title"})," – ",(0,t.jsx)(n.code,{children:"h2"})," element, ",(0,t.jsx)(n.code,{children:"aria-labelledby"})," of ",(0,t.jsx)(n.code,{children:"Modal.Content"})," is pointing to this element, usually is rendered inside ",(0,t.jsx)(n.code,{children:"Modal.Header"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.CloseButton"})," – close button, usually rendered inside ",(0,t.jsx)(n.code,{children:"Modal.Header"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Body"})," – a place for main content, ",(0,t.jsx)(n.code,{children:"aria-describedby"})," of ",(0,t.jsx)(n.code,{children:"Modal.Content"})," is pointing to this element"]}),"\n"]}),"\n",(0,t.jsx)(o,{data:K}),"\n",(0,t.jsx)(n.h2,{id:"fixed-elements-offset",children:"Fixed elements offset"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Modal"})," component uses ",(0,t.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. To properly size these ",(0,t.jsx)(n.code,{children:"elements"})," add a ",(0,t.jsx)(n.code,{children:"className"})," to them (",(0,t.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll#positionfixed-elements",children:"documentation"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { RemoveScroll } from \'@mantine/core\';\n\n// to make "width: 100%"\n<div className={RemoveScroll.classNames.fullWidth} />\n\n// to make "right: 0"\n<div className={RemoveScroll.classNames.zeroRight} />\n'})}),"\n",(0,t.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Modal"})," component follows ",(0,t.jsx)(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"title"})," props to make component accessible, will add ",(0,t.jsx)(n.code,{children:"aria-labelledby"})," to the content element:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return <Modal title=\"Modal label\" opened onClose={() => {}} />;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To set close button ",(0,t.jsx)(n.code,{children:"aria-label"})," use ",(0,t.jsx)(n.code,{children:"closeButtonProps"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return <Modal closeButtonProps={{ 'aria-label': 'Close modal' }} opened onClose={() => {}} />;\n}\n"})})]})}var Y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(Q,Object.assign({},e,{children:(0,t.jsx)(X,e)}))}},23733:function(e,n,o){"use strict";o.d(n,{C:function(){return v}});var t=o(67294),l={root:"m-347db0ec","root--dot":"m-fbd81e3d",label:"m-5add502a",section:"m-91fdda9b"},r=o(70656),a=o(35577),i=o(25637),s=o(92259),c=o(95553),d=o(71350),u=o(94975),m=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,M=(e,n,o)=>n in e?m(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,y=(e,n)=>{for(var o in n||(n={}))x.call(n,o)&&M(e,o,n[o]);if(f)for(var o of f(n))j.call(n,o)&&M(e,o,n[o]);return e},g=(e,n)=>p(e,h(n)),b=(e,n)=>{var o={};for(var t in e)x.call(e,t)&&0>n.indexOf(t)&&(o[t]=e[t]);if(null!=e&&f)for(var t of f(e))0>n.indexOf(t)&&j.call(e,t)&&(o[t]=e[t]);return o};let C={size:"md",radius:"xl",variant:"filled"},w=(0,c.Z)((e,{radius:n,color:o,gradient:t,variant:l,size:r})=>{let a=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:t,variant:l});return{root:{"--badge-height":(0,d.ap)(r,"badge-height"),"--badge-padding-x":(0,d.ap)(r,"badge-padding-x"),"--badge-fz":(0,d.ap)(r,"badge-fz"),"--badge-radius":(0,d.H5)(n),"--badge-bg":a.background,"--badge-color":a.color,"--badge-bd":a.border,"--badge-dot-color":"dot"===l?(0,u.p)(o,e):void 0}}}),v=(0,r.b)((e,n)=>{let o=(0,a.w)("Badge",C,e),{classNames:r,className:c,style:d,styles:u,unstyled:m,vars:p,radius:h,color:f,gradient:x,leftSection:j,rightSection:M,children:v,variant:E,fullWidth:k}=o,O=b(o,["classNames","className","style","styles","unstyled","vars","radius","color","gradient","leftSection","rightSection","children","variant","fullWidth"]),B=(0,i.y)({name:"Badge",props:o,classes:l,className:c,style:d,classNames:r,styles:u,unstyled:m,vars:p,varsResolver:w});return t.createElement(s.x,y(g(y({variant:E,mod:{block:k}},B("root",{variant:E})),{ref:n}),O),j&&t.createElement("span",g(y({},B("section")),{"data-position":"left"}),j),t.createElement("span",y({},B("label")),v),M&&t.createElement("span",g(y({},B("section")),{"data-position":"right"}),M))});v.classes=l,v.displayName="@mantine/core/Badge"},14874:function(e,n,o){"use strict";o.d(n,{j:function(){return c}});var t=o(67294),l=o(31017),r=o(55899),a=o(78901),i=o(20574);let s=`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`,c={type:"code",code:s,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,a.q)(!1);return t.createElement(t.Fragment,null,t.createElement(l.u,{opened:e,onClose:o,title:"Authentication"},t.createElement(i._,{noShadow:!0,noPadding:!0})),t.createElement(r.z,{onClick:n},"Open modal"))}}},34525:function(e,n,o){"use strict";o.d(n,{C:function(){return m}});var t=o(67294),l=o(22188),r=Object.defineProperty,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,o)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,d=(e,n)=>{for(var o in n||(n={}))i.call(n,o)&&c(e,o,n[o]);if(a)for(var o of a(n))s.call(n,o)&&c(e,o,n[o]);return e};let u={min:-1/0,max:1/0};function m(e=0,n){let{min:o,max:r}=d(d({},u),n),[a,i]=(0,t.useState)((0,l.u)(e,o,r)),s=()=>i(e=>(0,l.u)(e+1,o,r)),c=()=>i(e=>(0,l.u)(e-1,o,r)),m=e=>i((0,l.u)(e,o,r)),p=()=>i((0,l.u)(e,o,r));return[a,{increment:s,decrement:c,set:m,reset:p}]}}},function(e){e.O(0,[4940,1757,7252,9774,2888,179],function(){return e(e.s=78200)}),_N_E=e.O()}]);