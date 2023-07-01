(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8588],{33507:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},78200:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/modal",function(){return t(52829)}])},52829:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Y}});var o=t(85893),l=t(11151),r=t(34940),s=t(25263),a=t(67294),i=t(31017),c=t(43406),d=t(78901),u=t(20574);let m=`
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
`,p={type:"code",code:m,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1);return a.createElement(a.Fragment,null,a.createElement(i.u,{opened:e,onClose:t,title:"Authentication"},a.createElement(u._,null)),a.createElement(c.z,{onClick:n},"Open modal"))}},h=`
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
`,f={type:"code",code:h,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1);return a.createElement(a.Fragment,null,a.createElement(i.u,{opened:e,onClose:t,title:"Authentication",centered:!0},a.createElement(u._,null)),a.createElement(c.z,{onClick:n},"Open centered Modal"))}},x=`
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

`,M={type:"code",code:x,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1);return a.createElement(a.Fragment,null,a.createElement(i.u,{opened:e,onClose:t,withCloseButton:!1},"Modal without header, press escape or click on overlay to close"),a.createElement(c.z,{onClick:n},"Open Modal"))}};var j=t(74378);let y=["xs","sm","md","lg","xl","55rem","70%","100%"],v={type:"code",component:function(){let[e,n]=(0,a.useState)(!1),[t,o]=(0,a.useState)("md"),l=y.map(e=>a.createElement(c.z,{key:e,variant:"outline",onClick:()=>{o(e),n(!0)}},e));return a.createElement(a.Fragment,null,a.createElement(i.u,{opened:e,onClose:()=>n(!1),title:"Introduce yourself!",size:t},a.createElement(u._,null)),a.createElement(j.Z,{justify:"center"},l))}};var k=t(34525),g=t(23733),C=t(77048);let w=`
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
`,E={type:"code",component:function(){let[e,{close:n,open:t}]=(0,d.q)(!1),[o,{increment:l,decrement:r}]=(0,k.C)(3,{min:0}),s=Array(o).fill(0).map((e,n)=>a.createElement(g.C,{key:n},"Badge ",n));return a.createElement(a.Fragment,null,a.createElement(i.u,{opened:e,onClose:n,size:"auto",title:"Modal size auto"},a.createElement(C.x,null,"Modal with size auto will fits its content"),a.createElement(j.Z,{wrap:"nowrap",mt:"md"},s),a.createElement(j.Z,{mt:"xl"},a.createElement(c.z,{variant:"outline",onClick:l},"Add badge"),a.createElement(c.z,{variant:"outline",onClick:r},"Remove badge"))),a.createElement(c.z,{onClick:t},"Open modal"))},centered:!0,code:w},b=`
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
`,B={type:"code",code:b,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1);return a.createElement(a.Fragment,null,a.createElement(i.u,{opened:e,onClose:t,title:"This is a fullscreen modal",fullScreen:!0,transitionProps:{transition:"fade",duration:200}},a.createElement(C.x,{mb:"xl"},"It takes the entire screen and does not not have overlay and border-radius, you can use it small screens to save up some space. It also has fade transition by default, but you can change that with transition prop. Now here is an authentication form used in previous examples to see the difference."),a.createElement(u._,null)),a.createElement(c.z,{onClick:n},"Open Modal"))}};var O=t(18248),z=t(46393);let D=`
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
`,T={type:"code",code:D,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1),o=(0,O.a)(`(max-width: ${(0,z.em)(800)})`);return a.createElement(a.Fragment,null,a.createElement(i.u,{opened:e,onClose:t,title:"This is a fullscreen modal",fullScreen:o,transitionProps:{transition:"fade",duration:200}},"The Modal will be full screen only on mobile"),a.createElement(c.z,{onClick:n},"Open Modal"))}},A=`
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
`,F={type:"code",code:A,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1);return a.createElement(a.Fragment,null,a.createElement(i.u,{opened:e,onClose:t,title:"Authentication",overlayProps:{backgroundOpacity:.55,blur:3}},a.createElement(u._,null)),a.createElement(c.z,{onClick:n},"Open modal"))}},S=`
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
`,I={type:"code",code:S,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1),o=Array(100).fill(0).map((e,n)=>a.createElement("p",{key:n},"Modal with scroll"));return a.createElement(a.Fragment,null,a.createElement(i.u,{opened:e,onClose:t,title:"Header is sticky"},o),a.createElement(c.z,{onClick:n},"Open modal"))}};var P=t(45906);let _=`
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
`,N={type:"code",code:_,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1),o=Array(100).fill(0).map((e,n)=>a.createElement("p",{key:n},"Modal with scroll"));return a.createElement(a.Fragment,null,a.createElement(i.u,{opened:e,onClose:t,title:"Header is sticky",scrollAreaComponent:P.x.Autosize},o),a.createElement(c.z,{onClick:n},"Open modal"))}},Z=`
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
`,R={type:"code",code:Z,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1);return a.createElement(a.Fragment,null,a.createElement(i.u,{opened:e,onClose:t,title:"Authentication",yOffset:"1vh",xOffset:0},a.createElement(u._,null)),a.createElement(c.z,{onClick:n},"Open modal"))}},q=`
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
`,H={type:"code",code:q,component:function(){let[e,n]=(0,a.useState)(!1),[t,o]=(0,a.useState)(!1);return a.createElement(a.Fragment,null,a.createElement(i.u,{opened:t,onClose:()=>o(!1),title:"Please consider this",transitionProps:{transition:"rotate-left"}},"rotate-left transition"),a.createElement(i.u,{opened:e,onClose:()=>n(!1),title:"Please consider this",transitionProps:{transition:"fade",duration:600,timingFunction:"linear"}},"fade transition 600ms linear transition"),a.createElement(j.Z,{justify:"center"},a.createElement(c.z,{onClick:()=>o(!0),variant:"default"},"Rotate left transition"),a.createElement(c.z,{onClick:()=>n(!0),variant:"default"},"Fade transition")))}};var G=t(31577);let U=`
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
`,L={type:"code",code:U,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1);return a.createElement(a.Fragment,null,a.createElement(i.u,{opened:e,onClose:t,title:"Focus demo"},a.createElement(G.o,{label:"First input",placeholder:"First input"}),a.createElement(G.o,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})),a.createElement(c.z,{onClick:n},"Open modal"))}},W=`
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
`,K={type:"code",code:W,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1);return a.createElement(a.Fragment,null,a.createElement(i.u.Root,{opened:e,onClose:t},a.createElement(i.u.Overlay,null),a.createElement(i.u.Content,null,a.createElement(i.u.Header,null,a.createElement(i.u.Title,null,"Modal title"),a.createElement(i.u.CloseButton,null)),a.createElement(i.u.Body,null,"Modal content"))),a.createElement(c.z,{onClick:n},"Open modal"))}},Q=(0,r.A)(s.us.Modal);function X(e){let n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",a:"a",ul:"ul",li:"li"},(0,l.ah)(),e.components),{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:p}),"\n",(0,o.jsx)(n.h2,{id:"center-modal-vertically",children:"Center modal vertically"}),"\n",(0,o.jsx)(t,{data:f}),"\n",(0,o.jsx)(n.h2,{id:"remove-header",children:"Remove header"}),"\n",(0,o.jsxs)(n.p,{children:["To remove header set ",(0,o.jsx)(n.code,{children:"withCloseButton={false}"}),":"]}),"\n",(0,o.jsx)(t,{data:M}),"\n",(0,o.jsx)(n.h2,{id:"change-size",children:"Change size"}),"\n",(0,o.jsxs)(n.p,{children:["You can change modal width by setting ",(0,o.jsx)(n.code,{children:"size"})," prop to predefined size or any valid width, for example, ",(0,o.jsx)(n.code,{children:"55%"})," or ",(0,o.jsx)(n.code,{children:"50rem"}),".\n",(0,o.jsx)(n.code,{children:"Modal"})," width cannot exceed ",(0,o.jsx)(n.code,{children:"100vw"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { Modal } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <>\n      <Modal size="sm" />\n      <Modal size={320} />\n      <Modal size="55%" />\n      <Modal size="calc(100vw - 3rem)" />\n    </>\n  );\n}\n'})}),"\n",(0,o.jsx)(t,{data:v}),"\n",(0,o.jsx)(n.h2,{id:"size-auto",children:"Size auto"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Modal"})," with ",(0,o.jsx)(n.code,{children:'size="auto"'})," will have width to fit its content:"]}),"\n",(0,o.jsx)(t,{data:E}),"\n",(0,o.jsx)(n.h2,{id:"fullscreen",children:"Fullscreen"}),"\n",(0,o.jsxs)(n.p,{children:["Fullscreen modal will take the entire screen, it is usually better to change transition to ",(0,o.jsx)(n.code,{children:"fade"}),"\nwhen ",(0,o.jsx)(n.code,{children:"fullScreen"})," prop is set:"]}),"\n",(0,o.jsx)(t,{data:B}),"\n",(0,o.jsxs)(n.p,{children:["To switch Modal to fullscreen on devices with small screens only use ",(0,o.jsx)(n.a,{href:"/hooks/use-media-query/",children:"use-media-query"})," hook.\n",(0,o.jsx)(n.code,{children:"size"})," prop is ignored if ",(0,o.jsx)(n.code,{children:"fullScreen"})," prop is set:"]}),"\n",(0,o.jsx)(t,{data:T}),"\n",(0,o.jsx)(n.h2,{id:"customize-overlay",children:"Customize overlay"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Modal"})," uses ",(0,o.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"})," component, you can set any props that ",(0,o.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"}),"\nsupports with ",(0,o.jsx)(n.code,{children:"overlayProps"}),":"]}),"\n",(0,o.jsx)(t,{data:F}),"\n",(0,o.jsx)(n.h2,{id:"modal-with-scroll",children:"Modal with scroll"}),"\n",(0,o.jsx)(t,{data:I}),"\n",(0,o.jsx)(n.h2,{id:"usage-with-scrollarea",children:"Usage with ScrollArea"}),"\n",(0,o.jsx)(t,{data:N}),"\n",(0,o.jsx)(n.h2,{id:"change-offsets",children:"Change offsets"}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"xOffset"}),"/",(0,o.jsx)(n.code,{children:"yOffset"})," to configure horizontal/vertical content offsets:"]}),"\n",(0,o.jsx)(t,{data:R}),"\n",(0,o.jsx)(n.h2,{id:"change-transitions",children:"Change transitions"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Modal"})," is built with ",(0,o.jsx)(n.a,{href:"/core/transition/",children:"Transition"})," component. Use ",(0,o.jsx)(n.code,{children:"transitionProps"}),"\nprop to customize any ",(0,o.jsx)(n.a,{href:"/core/transition/",children:"Transition"})," properties:"]}),"\n",(0,o.jsx)(t,{data:H}),"\n",(0,o.jsx)(n.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,o.jsxs)(n.p,{children:["Modal uses ",(0,o.jsx)(n.a,{href:"/core/focus-trap/",children:"FocusTrap"})," to trap focus. Add ",(0,o.jsx)(n.code,{children:"data-autofocus"}),"\nattribute to the element that should receive initial focus."]}),"\n",(0,o.jsx)(t,{data:L}),"\n",(0,o.jsx)(n.h2,{id:"control-behavior",children:"Control behavior"}),"\n",(0,o.jsxs)(n.p,{children:["The following props can be used to control ",(0,o.jsx)(n.code,{children:"Modal"})," behavior.\nIn most cases, it is not recommended to turn these features off –\nit will make the component less accessible."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"trapFocus"})," – determines whether focus should be trapped inside modal"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"closeOnEscape"})," – determines whether the modal should be closed when ",(0,o.jsx)(n.code,{children:"Escape"})," key is pressed"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"closeOnClickOutside"})," – determines whether the modal should be closed when user clicks on the overlay"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"returnFocus"})," – determines whether focus should be returned to the element that was focused before the modal was opened"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,o.jsxs)(n.p,{children:["You can use the following compound components to have full control over the ",(0,o.jsx)(n.code,{children:"Modal"})," rendering:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Modal.Root"})," – context provider"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Modal.Overlay"})," – render ",(0,o.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Modal.Content"})," – main modal element, should include all modal content"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Modal.Header"})," – sticky header, usually contains ",(0,o.jsx)(n.code,{children:"Modal.Title"})," and ",(0,o.jsx)(n.code,{children:"Modal.CloseButton"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Modal.Title"})," – ",(0,o.jsx)(n.code,{children:"h2"})," element, ",(0,o.jsx)(n.code,{children:"aria-labelledby"})," of ",(0,o.jsx)(n.code,{children:"Modal.Content"})," is pointing to this element, usually is rendered inside ",(0,o.jsx)(n.code,{children:"Modal.Header"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Modal.CloseButton"})," – close button, usually rendered inside ",(0,o.jsx)(n.code,{children:"Modal.Header"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Modal.Body"})," – a place for main content, ",(0,o.jsx)(n.code,{children:"aria-describedby"})," of ",(0,o.jsx)(n.code,{children:"Modal.Content"})," is pointing to this element"]}),"\n"]}),"\n",(0,o.jsx)(t,{data:K}),"\n",(0,o.jsx)(n.h2,{id:"fixed-elements-offset",children:"Fixed elements offset"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Modal"})," component uses ",(0,o.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. To properly size these ",(0,o.jsx)(n.code,{children:"elements"})," add a ",(0,o.jsx)(n.code,{children:"className"})," to them (",(0,o.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll#positionfixed-elements",children:"documentation"}),"):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { RemoveScroll } from \'@mantine/core\';\n\n// to make "width: 100%"\n<div className={RemoveScroll.classNames.fullWidth} />\n\n// to make "right: 0"\n<div className={RemoveScroll.classNames.zeroRight} />\n'})}),"\n",(0,o.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Modal"})," component follows ",(0,o.jsx)(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:"title"})," props to make component accessible, will add ",(0,o.jsx)(n.code,{children:"aria-labelledby"})," to the content element:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return <Modal title=\"Modal label\" opened onClose={() => {}} />;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To set close button ",(0,o.jsx)(n.code,{children:"aria-label"})," use ",(0,o.jsx)(n.code,{children:"closeButtonProps"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return <Modal closeButtonProps={{ 'aria-label': 'Close modal' }} opened onClose={() => {}} />;\n}\n"})})]})}var Y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(Q,Object.assign({},e,{children:(0,o.jsx)(X,e)}))}},20574:function(e,n,t){"use strict";t.d(n,{_:function(){return l}});var o=t(67294);function l(){return o.createElement("div",null,"Auth form")}},34525:function(e,n,t){"use strict";t.d(n,{C:function(){return m}});var o=t(67294),l=t(22188),r=Object.defineProperty,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))a.call(n,t)&&c(e,t,n[t]);if(s)for(var t of s(n))i.call(n,t)&&c(e,t,n[t]);return e};let u={min:-1/0,max:1/0};function m(e=0,n){let{min:t,max:r}=d(d({},u),n),[s,a]=(0,o.useState)((0,l.u)(e,t,r)),i=()=>a(e=>(0,l.u)(e+1,t,r)),c=()=>a(e=>(0,l.u)(e-1,t,r)),m=e=>a((0,l.u)(e,t,r)),p=()=>a((0,l.u)(e,t,r));return[s,{increment:i,decrement:c,set:m,reset:p}]}},78901:function(e,n,t){"use strict";t.d(n,{q:function(){return l}});var o=t(67294);function l(e=!1,n){let{onOpen:t,onClose:l}=n||{},[r,s]=(0,o.useState)(e),a=(0,o.useCallback)(()=>{s(e=>e||(null==t||t(),!0))},[t]),i=(0,o.useCallback)(()=>{s(e=>e?(null==l||l(),!1):e)},[l]),c=(0,o.useCallback)(()=>{r?i():a()},[i,a,r]);return[r,{open:a,close:i,toggle:c}]}}},function(e){e.O(0,[2411,7437,6679,9774,2888,179],function(){return e(e.s=78200)}),_N_E=e.O()}]);