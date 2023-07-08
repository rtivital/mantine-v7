(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8588],{78200:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/modal",function(){return o(52829)}])},52829:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return $}});var t=o(85893),l=o(11151),r=o(34940),a=o(25263),i=o(67294),s=o(31017),c=o(43406),d=o(78901),u=o(20574);let m=`
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
`,p={type:"code",code:m,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,d.q)(!1);return i.createElement(i.Fragment,null,i.createElement(s.u,{opened:e,onClose:o,title:"Authentication"},i.createElement(u._,null)),i.createElement(c.z,{onClick:n},"Open modal"))}},h=`
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
`,f={type:"code",code:h,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,d.q)(!1);return i.createElement(i.Fragment,null,i.createElement(s.u,{opened:e,onClose:o,title:"Authentication",centered:!0},i.createElement(u._,null)),i.createElement(c.z,{onClick:n},"Open centered Modal"))}},x=`
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

`,j={type:"code",code:x,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,d.q)(!1);return i.createElement(i.Fragment,null,i.createElement(s.u,{opened:e,onClose:o,withCloseButton:!1},"Modal without header, press escape or click on overlay to close"),i.createElement(c.z,{onClick:n},"Open Modal"))}};var M=o(74378);let y=["xs","sm","md","lg","xl","55rem","70%","100%"],C={type:"code",component:function(){let[e,n]=(0,i.useState)(!1),[o,t]=(0,i.useState)("md"),l=y.map(e=>i.createElement(c.z,{key:e,variant:"outline",onClick:()=>{t(e),n(!0)}},e));return i.createElement(i.Fragment,null,i.createElement(s.u,{opened:e,onClose:()=>n(!1),title:"Introduce yourself!",size:o},i.createElement(u._,null)),i.createElement(M.Z,{justify:"center"},l))}};var g=o(34525),b=o(23733),k=o(77048);let v=`
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
`,E={type:"code",component:function(){let[e,{close:n,open:o}]=(0,d.q)(!1),[t,{increment:l,decrement:r}]=(0,g.C)(3,{min:0}),a=Array(t).fill(0).map((e,n)=>i.createElement(b.C,{key:n},"Badge ",n));return i.createElement(i.Fragment,null,i.createElement(s.u,{opened:e,onClose:n,size:"auto",title:"Modal size auto"},i.createElement(k.x,null,"Modal with size auto will fits its content"),i.createElement(M.Z,{wrap:"nowrap",mt:"md"},a),i.createElement(M.Z,{mt:"xl"},i.createElement(c.z,{variant:"outline",onClick:l},"Add badge"),i.createElement(c.z,{variant:"outline",onClick:r},"Remove badge"))),i.createElement(c.z,{onClick:o},"Open modal"))},centered:!0,code:v},w=`
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
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open Modal</Button>
    </>
  );
}
`,B={type:"code",code:w,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,d.q)(!1);return i.createElement(i.Fragment,null,i.createElement(s.u,{opened:e,onClose:o,title:"This is a fullscreen modal",fullScreen:!0,transitionProps:{transition:"fade",duration:200}},i.createElement(k.x,{mb:"xl"},"It takes the entire screen and does not not have overlay and border-radius, you can use it small screens to save up some space. It also has fade transition by default, but you can change that with transition prop. Now here is an authentication form used in previous examples to see the difference."),i.createElement(u._,null)),i.createElement(c.z,{onClick:n},"Open Modal"))}};var O=o(18248),z=o(46393);let D=`
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: ${(0,z.em)(800)})');

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
`,T={type:"code",code:D,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,d.q)(!1),t=(0,O.a)(`(max-width: ${(0,z.em)(800)})`);return i.createElement(i.Fragment,null,i.createElement(s.u,{opened:e,onClose:o,title:"This is a fullscreen modal",fullScreen:t,transitionProps:{transition:"fade",duration:200}},"The Modal will be full screen only on mobile"),i.createElement(c.z,{onClick:n},"Open Modal"))}},A=`
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
`,F={type:"code",code:A,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,d.q)(!1);return i.createElement(i.Fragment,null,i.createElement(s.u,{opened:e,onClose:o,title:"Authentication",overlayProps:{backgroundOpacity:.55,blur:3}},i.createElement(u._,null)),i.createElement(c.z,{onClick:n},"Open modal"))}},S=`
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
`,P={type:"code",code:S,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,d.q)(!1),t=Array(100).fill(0).map((e,n)=>i.createElement("p",{key:n},"Modal with scroll"));return i.createElement(i.Fragment,null,i.createElement(s.u,{opened:e,onClose:o,title:"Header is sticky"},t),i.createElement(c.z,{onClick:n},"Open modal"))}};var N=o(45906);let _=`
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
`,I={type:"code",code:_,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,d.q)(!1),t=Array(100).fill(0).map((e,n)=>i.createElement("p",{key:n},"Modal with scroll"));return i.createElement(i.Fragment,null,i.createElement(s.u,{opened:e,onClose:o,title:"Header is sticky",scrollAreaComponent:N.x.Autosize},t),i.createElement(c.z,{onClick:n},"Open modal"))}},q=`
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
`,R={type:"code",code:q,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,d.q)(!1);return i.createElement(i.Fragment,null,i.createElement(s.u,{opened:e,onClose:o,title:"Authentication",yOffset:"1vh",xOffset:0},i.createElement(u._,null)),i.createElement(c.z,{onClick:n},"Open modal"))}},H=`
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
`,G={type:"code",code:H,component:function(){let[e,n]=(0,i.useState)(!1),[o,t]=(0,i.useState)(!1);return i.createElement(i.Fragment,null,i.createElement(s.u,{opened:o,onClose:()=>t(!1),title:"Please consider this",transitionProps:{transition:"rotate-left"}},"rotate-left transition"),i.createElement(s.u,{opened:e,onClose:()=>n(!1),title:"Please consider this",transitionProps:{transition:"fade",duration:600,timingFunction:"linear"}},"fade transition 600ms linear transition"),i.createElement(M.Z,{justify:"center"},i.createElement(c.z,{onClick:()=>t(!0),variant:"default"},"Rotate left transition"),i.createElement(c.z,{onClick:()=>n(!0),variant:"default"},"Fade transition")))}};var U=o(31577);let W=`
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
`,Z={type:"code",code:W,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,d.q)(!1);return i.createElement(i.Fragment,null,i.createElement(s.u,{opened:e,onClose:o,title:"Focus demo"},i.createElement(U.o,{label:"First input",placeholder:"First input"}),i.createElement(U.o,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})),i.createElement(c.z,{onClick:n},"Open modal"))}},K=`
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
`,Q={type:"code",code:K,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,d.q)(!1);return i.createElement(i.Fragment,null,i.createElement(s.u.Root,{opened:e,onClose:o},i.createElement(s.u.Overlay,null),i.createElement(s.u.Content,null,i.createElement(s.u.Header,null,i.createElement(s.u.Title,null,"Modal title"),i.createElement(s.u.CloseButton,null)),i.createElement(s.u.Body,null,"Modal content"))),i.createElement(c.z,{onClick:n},"Open modal"))}},X=(0,r.A)(a.us.Modal);function Y(e){let n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",a:"a",ul:"ul",li:"li"},(0,l.ah)(),e.components),{Demo:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:p}),"\n",(0,t.jsx)(n.h2,{id:"center-modal-vertically",children:"Center modal vertically"}),"\n",(0,t.jsx)(o,{data:f}),"\n",(0,t.jsx)(n.h2,{id:"remove-header",children:"Remove header"}),"\n",(0,t.jsxs)(n.p,{children:["To remove header set ",(0,t.jsx)(n.code,{children:"withCloseButton={false}"}),":"]}),"\n",(0,t.jsx)(o,{data:j}),"\n",(0,t.jsx)(n.h2,{id:"change-size",children:"Change size"}),"\n",(0,t.jsxs)(n.p,{children:["You can change modal width by setting ",(0,t.jsx)(n.code,{children:"size"})," prop to predefined size or any valid width, for example, ",(0,t.jsx)(n.code,{children:"55%"})," or ",(0,t.jsx)(n.code,{children:"50rem"}),".\n",(0,t.jsx)(n.code,{children:"Modal"})," width cannot exceed ",(0,t.jsx)(n.code,{children:"100vw"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Modal } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <>\n      <Modal size="sm" />\n      <Modal size={320} />\n      <Modal size="55%" />\n      <Modal size="calc(100vw - 3rem)" />\n    </>\n  );\n}\n'})}),"\n",(0,t.jsx)(o,{data:C}),"\n",(0,t.jsx)(n.h2,{id:"size-auto",children:"Size auto"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Modal"})," with ",(0,t.jsx)(n.code,{children:'size="auto"'})," will have width to fit its content:"]}),"\n",(0,t.jsx)(o,{data:E}),"\n",(0,t.jsx)(n.h2,{id:"fullscreen",children:"Fullscreen"}),"\n",(0,t.jsxs)(n.p,{children:["Fullscreen modal will take the entire screen, it is usually better to change transition to ",(0,t.jsx)(n.code,{children:"fade"}),"\nwhen ",(0,t.jsx)(n.code,{children:"fullScreen"})," prop is set:"]}),"\n",(0,t.jsx)(o,{data:B}),"\n",(0,t.jsxs)(n.p,{children:["To switch Modal to fullscreen on devices with small screens only use ",(0,t.jsx)(n.a,{href:"/hooks/use-media-query/",children:"use-media-query"})," hook.\n",(0,t.jsx)(n.code,{children:"size"})," prop is ignored if ",(0,t.jsx)(n.code,{children:"fullScreen"})," prop is set:"]}),"\n",(0,t.jsx)(o,{data:T}),"\n",(0,t.jsx)(n.h2,{id:"customize-overlay",children:"Customize overlay"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Modal"})," uses ",(0,t.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"})," component, you can set any props that ",(0,t.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"}),"\nsupports with ",(0,t.jsx)(n.code,{children:"overlayProps"}),":"]}),"\n",(0,t.jsx)(o,{data:F}),"\n",(0,t.jsx)(n.h2,{id:"modal-with-scroll",children:"Modal with scroll"}),"\n",(0,t.jsx)(o,{data:P}),"\n",(0,t.jsx)(n.h2,{id:"usage-with-scrollarea",children:"Usage with ScrollArea"}),"\n",(0,t.jsx)(o,{data:I}),"\n",(0,t.jsx)(n.h2,{id:"change-offsets",children:"Change offsets"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"xOffset"}),"/",(0,t.jsx)(n.code,{children:"yOffset"})," to configure horizontal/vertical content offsets:"]}),"\n",(0,t.jsx)(o,{data:R}),"\n",(0,t.jsx)(n.h2,{id:"change-transitions",children:"Change transitions"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Modal"})," is built with ",(0,t.jsx)(n.a,{href:"/core/transition/",children:"Transition"})," component. Use ",(0,t.jsx)(n.code,{children:"transitionProps"}),"\nprop to customize any ",(0,t.jsx)(n.a,{href:"/core/transition/",children:"Transition"})," properties:"]}),"\n",(0,t.jsx)(o,{data:G}),"\n",(0,t.jsx)(n.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,t.jsxs)(n.p,{children:["Modal uses ",(0,t.jsx)(n.a,{href:"/core/focus-trap/",children:"FocusTrap"})," to trap focus. Add ",(0,t.jsx)(n.code,{children:"data-autofocus"}),"\nattribute to the element that should receive initial focus."]}),"\n",(0,t.jsx)(o,{data:Z}),"\n",(0,t.jsx)(n.h2,{id:"control-behavior",children:"Control behavior"}),"\n",(0,t.jsxs)(n.p,{children:["The following props can be used to control ",(0,t.jsx)(n.code,{children:"Modal"})," behavior.\nIn most cases, it is not recommended to turn these features off –\nit will make the component less accessible."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"trapFocus"})," – determines whether focus should be trapped inside modal"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"closeOnEscape"})," – determines whether the modal should be closed when ",(0,t.jsx)(n.code,{children:"Escape"})," key is pressed"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"closeOnClickOutside"})," – determines whether the modal should be closed when user clicks on the overlay"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"returnFocus"})," – determines whether focus should be returned to the element that was focused before the modal was opened"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the following compound components to have full control over the ",(0,t.jsx)(n.code,{children:"Modal"})," rendering:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Root"})," – context provider"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Overlay"})," – render ",(0,t.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Content"})," – main modal element, should include all modal content"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Header"})," – sticky header, usually contains ",(0,t.jsx)(n.code,{children:"Modal.Title"})," and ",(0,t.jsx)(n.code,{children:"Modal.CloseButton"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Title"})," – ",(0,t.jsx)(n.code,{children:"h2"})," element, ",(0,t.jsx)(n.code,{children:"aria-labelledby"})," of ",(0,t.jsx)(n.code,{children:"Modal.Content"})," is pointing to this element, usually is rendered inside ",(0,t.jsx)(n.code,{children:"Modal.Header"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.CloseButton"})," – close button, usually rendered inside ",(0,t.jsx)(n.code,{children:"Modal.Header"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Modal.Body"})," – a place for main content, ",(0,t.jsx)(n.code,{children:"aria-describedby"})," of ",(0,t.jsx)(n.code,{children:"Modal.Content"})," is pointing to this element"]}),"\n"]}),"\n",(0,t.jsx)(o,{data:Q}),"\n",(0,t.jsx)(n.h2,{id:"fixed-elements-offset",children:"Fixed elements offset"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Modal"})," component uses ",(0,t.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. To properly size these ",(0,t.jsx)(n.code,{children:"elements"})," add a ",(0,t.jsx)(n.code,{children:"className"})," to them (",(0,t.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll#positionfixed-elements",children:"documentation"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { RemoveScroll } from \'@mantine/core\';\n\n// to make "width: 100%"\n<div className={RemoveScroll.classNames.fullWidth} />\n\n// to make "right: 0"\n<div className={RemoveScroll.classNames.zeroRight} />\n'})}),"\n",(0,t.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Modal"})," component follows ",(0,t.jsx)(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"title"})," props to make component accessible, will add ",(0,t.jsx)(n.code,{children:"aria-labelledby"})," to the content element:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return <Modal title=\"Modal label\" opened onClose={() => {}} />;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To set close button ",(0,t.jsx)(n.code,{children:"aria-label"})," use ",(0,t.jsx)(n.code,{children:"closeButtonProps"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return <Modal closeButtonProps={{ 'aria-label': 'Close modal' }} opened onClose={() => {}} />;\n}\n"})})]})}var $=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(X,Object.assign({},e,{children:(0,t.jsx)(Y,e)}))}},23733:function(e,n,o){"use strict";o.d(n,{C:function(){return v}});var t=o(67294),l={root:"mantine-WM8AqtG","root--dot":"mantine-d3u1-wu",label:"mantine-LN56t-P",section:"mantine-cbpGUul"},r=o(70656),a=o(35577),i=o(25637),s=o(94873),c=o(95553),d=o(71350),u=o(94975),m=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,M=(e,n,o)=>n in e?m(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,y=(e,n)=>{for(var o in n||(n={}))x.call(n,o)&&M(e,o,n[o]);if(f)for(var o of f(n))j.call(n,o)&&M(e,o,n[o]);return e},C=(e,n)=>p(e,h(n)),g=(e,n)=>{var o={};for(var t in e)x.call(e,t)&&0>n.indexOf(t)&&(o[t]=e[t]);if(null!=e&&f)for(var t of f(e))0>n.indexOf(t)&&j.call(e,t)&&(o[t]=e[t]);return o};let b={size:"md",radius:"xl",variant:"filled"},k=(0,c.Z)((e,{radius:n,color:o,gradient:t,variant:l,size:r})=>{let a=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:t,variant:l});return{root:{"--badge-height":(0,d.ap)(r,"badge-height"),"--badge-padding-x":(0,d.ap)(r,"badge-padding-x"),"--badge-fz":(0,d.ap)(r,"badge-fz"),"--badge-radius":(0,d.H5)(n),"--badge-bg":a.background,"--badge-color":a.color,"--badge-bd":a.border,"--badge-dot-color":"dot"===l?(0,u.p)(o,e):void 0}}}),v=(0,r.b)((e,n)=>{let o=(0,a.w)("Badge",b,e),{classNames:r,className:c,style:d,styles:u,unstyled:m,vars:p,radius:h,color:f,gradient:x,leftSection:j,rightSection:M,children:v,variant:E,fullWidth:w}=o,B=g(o,["classNames","className","style","styles","unstyled","vars","radius","color","gradient","leftSection","rightSection","children","variant","fullWidth"]),O=(0,i.y)({name:"Badge",props:o,classes:l,className:c,style:d,classNames:r,styles:u,unstyled:m,vars:p,varsResolver:k});return t.createElement(s.x,y(C(y({variant:E,mod:{block:w}},O("root",{variant:E})),{ref:n}),B),j&&t.createElement("span",C(y({},O("section")),{"data-position":"left"}),j),t.createElement("span",y({},O("label")),v),M&&t.createElement("span",C(y({},O("section")),{"data-position":"right"}),M))});v.classes=l,v.displayName="@mantine/core/Badge"},20574:function(e,n,o){"use strict";o.d(n,{_:function(){return l}});var t=o(67294);function l(){return t.createElement("div",null,"Auth form")}},78901:function(e,n,o){"use strict";o.d(n,{q:function(){return l}});var t=o(67294);function l(e=!1,n){let{onOpen:o,onClose:l}=n||{},[r,a]=(0,t.useState)(e),i=(0,t.useCallback)(()=>{a(e=>e||(null==o||o(),!0))},[o]),s=(0,t.useCallback)(()=>{a(e=>e?(null==l||l(),!1):e)},[l]),c=(0,t.useCallback)(()=>{r?s():i()},[s,i,r]);return[r,{open:i,close:s,toggle:c}]}}},function(e){e.O(0,[2411,7437,2062,9774,2888,179],function(){return e(e.s=78200)}),_N_E=e.O()}]);