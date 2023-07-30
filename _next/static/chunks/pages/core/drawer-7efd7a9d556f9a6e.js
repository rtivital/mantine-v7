(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6334],{12162:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},52200:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/drawer",function(){return t(90821)}])},90821:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var r=t(85893),o=t(11151),l=t(34940),s=t(34200),c=t(67294),i=t(50006),a=t(55899),d=t(78901),u=t(20574);let h=`
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
`,p={type:"code",code:h,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1);return c.createElement(c.Fragment,null,c.createElement(i.d,{opened:e,onClose:t,title:"Authentication"},c.createElement(u._,null)),c.createElement(a.z,{onClick:n},"Open Drawer"))}};var m=t(74378);let w={type:"code",component:function(){let[e,n]=(0,c.useState)(!1),[t,r]=(0,c.useState)("top"),o=e=>{r(e),n(!0)};return c.createElement(c.Fragment,null,c.createElement(i.d,{opened:e,onClose:()=>n(!1),padding:"md",position:t,withCloseButton:!1},"Press escape to close the drawer"),c.createElement(m.Z,{justify:"center"},c.createElement(a.z,{variant:"outline",onClick:()=>o("left")},"Left"),c.createElement(a.z,{variant:"outline",onClick:()=>o("right")},"Right"),c.createElement(a.z,{variant:"outline",onClick:()=>o("top")},"Top"),c.createElement(a.z,{variant:"outline",onClick:()=>o("bottom")},"Bottom")))}},x=`
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
`,f={type:"code",code:x,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1);return c.createElement(c.Fragment,null,c.createElement(i.d,{opened:e,onClose:t,title:"Authentication",overlayProps:{backgroundOpacity:.5,blur:4}},c.createElement(u._,null)),c.createElement(a.z,{onClick:n},"Open drawer"))}},j={type:"code",component:function(){let[e,n]=(0,c.useState)(!1),[t,r]=(0,c.useState)("top"),o=e=>{r(e),n(!0)},l=["xs","sm","md","lg","xl","100%","40rem","25%"].map(e=>c.createElement(a.z,{variant:"outline",onClick:()=>o(e),key:e},e));return c.createElement(c.Fragment,null,c.createElement(i.d,{opened:e,onClose:()=>n(!1),padding:"md",size:t,withCloseButton:!1},"Press escape to close the drawer"),c.createElement(m.Z,{justify:"center"},l))}},D=`
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

`,y={type:"code",code:D,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1);return c.createElement(c.Fragment,null,c.createElement(i.d,{opened:e,onClose:t,withCloseButton:!1},"Drawer without header, press escape or click on overlay to close"),c.createElement(a.z,{onClick:n},"Open drawer"))}},v=`
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
`,g={type:"code",code:v,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1),r=Array(100).fill(0).map((e,n)=>c.createElement("p",{key:n},"Drawer with scroll"));return c.createElement(c.Fragment,null,c.createElement(i.d,{opened:e,onClose:t,title:"Header is sticky"},r),c.createElement(a.z,{onClick:n},"Open drawer"))}};var k=t(45906);let C=`
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
`,E={type:"code",code:C,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1),r=Array(100).fill(0).map((e,n)=>c.createElement("p",{key:n},"Drawer with scroll"));return c.createElement(c.Fragment,null,c.createElement(i.d,{opened:e,onClose:t,title:"Header is sticky",scrollAreaComponent:k.x.Autosize},r),c.createElement(a.z,{onClick:n},"Open drawer"))}},b=`
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

`,B={type:"code",code:b,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1);return c.createElement(c.Fragment,null,c.createElement(i.d,{opened:e,onClose:t,title:"Authentication",transitionProps:{transition:"rotate-left",duration:150,timingFunction:"linear"}},c.createElement(u._,null)),c.createElement(a.z,{onClick:n},"Open Drawer"))}};var O=t(31577);let z=`
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
`,A={type:"code",code:z,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1);return c.createElement(c.Fragment,null,c.createElement(i.d,{opened:e,onClose:t,title:"Focus demo"},c.createElement(O.o,{label:"First input",placeholder:"First input"}),c.createElement(O.o,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})),c.createElement(a.z,{onClick:n},"Open drawer"))}},M=`
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
`,F={type:"code",code:M,centered:!0,component:function(){let[e,{open:n,close:t}]=(0,d.q)(!1);return c.createElement(c.Fragment,null,c.createElement(i.d.Root,{opened:e,onClose:t},c.createElement(i.d.Overlay,null),c.createElement(i.d.Content,null,c.createElement(i.d.Header,null,c.createElement(i.d.Title,null,"Drawer title"),c.createElement(i.d.CloseButton,null)),c.createElement(i.d.Body,null,"Drawer content"))),c.createElement(a.z,{onClick:n},"Open drawer"))}},I=(0,l.A)(s.us.Drawer);function T(e){let n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li"},(0,o.ah)(),e.components),{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:p}),"\n",(0,r.jsx)(n.h2,{id:"position",children:"Position"}),"\n",(0,r.jsxs)(n.p,{children:["Drawer can be placed on ",(0,r.jsx)(n.code,{children:"left"})," (default), ",(0,r.jsx)(n.code,{children:"top"}),", ",(0,r.jsx)(n.code,{children:"right"})," and ",(0,r.jsx)(n.code,{children:"bottom"}),". Control drawer position with ",(0,r.jsx)(n.code,{children:"position"})," prop,\nfor example ",(0,r.jsx)(n.code,{children:'<Drawer position="top" />'}),"."]}),"\n",(0,r.jsx)(t,{data:w}),"\n",(0,r.jsx)(n.h2,{id:"customize-overlay",children:"Customize overlay"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Drawer"})," uses ",(0,r.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"})," component, you can set any props that ",(0,r.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"}),"\nsupports with ",(0,r.jsx)(n.code,{children:"overlayProps"}),":"]}),"\n",(0,r.jsx)(t,{data:f}),"\n",(0,r.jsx)(n.h2,{id:"sizes",children:"Sizes"}),"\n",(0,r.jsxs)(n.p,{children:["You can change drawer width/height (depends on ",(0,r.jsx)(n.code,{children:"position"}),") by setting ",(0,r.jsx)(n.code,{children:"size"})," prop to predefined size or any valid width,\nfor example, ",(0,r.jsx)(n.code,{children:'size="55%"'})," or ",(0,r.jsx)(n.code,{children:"size={200}"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { Drawer } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Drawer position="right" size="xl" opened onClose={() => {}}>\n      {/* Drawer content */}\n    </Drawer>\n  );\n}\n'})}),"\n",(0,r.jsx)(t,{data:j}),"\n",(0,r.jsx)(n.h2,{id:"remove-header",children:"Remove header"}),"\n",(0,r.jsxs)(n.p,{children:["To remove header set ",(0,r.jsx)(n.code,{children:"withCloseButton={false}"})]}),"\n",(0,r.jsx)(t,{data:y}),"\n",(0,r.jsx)(n.h2,{id:"drawer-with-scroll",children:"Drawer with scroll"}),"\n",(0,r.jsx)(t,{data:g}),"\n",(0,r.jsx)(n.h2,{id:"usage-with-scrollarea",children:"Usage with ScrollArea"}),"\n",(0,r.jsx)(t,{data:E}),"\n",(0,r.jsx)(n.h2,{id:"change-transition",children:"Change transition"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Drawer"})," is built with ",(0,r.jsx)(n.a,{href:"/core/transition/",children:"Transition"})," component. Use ",(0,r.jsx)(n.code,{children:"transitionProps"}),"\nprop to customize any ",(0,r.jsx)(n.a,{href:"/core/transition/",children:"Transition"})," properties:"]}),"\n",(0,r.jsx)(t,{data:B}),"\n",(0,r.jsx)(n.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Drawer"})," uses ",(0,r.jsx)(n.a,{href:"/core/focus-trap/",children:"FocusTrap"})," to trap focus. Add ",(0,r.jsx)(n.code,{children:"data-autofocus"}),"\nattribute to the element that should receive initial focus."]}),"\n",(0,r.jsx)(t,{data:A}),"\n",(0,r.jsx)(n.h2,{id:"control-behavior",children:"Control behavior"}),"\n",(0,r.jsxs)(n.p,{children:["The following props can be used to control ",(0,r.jsx)(n.code,{children:"Drawer"})," behavior.\nIn most cases it is not recommended to turn these features off –\nit will make the component less accessible."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"trapFocus"})," – determines whether focus should be trapped inside drawer"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"closeOnEscape"})," – determines whether the drawer should be closed when ",(0,r.jsx)(n.code,{children:"Escape"})," key is pressed"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"closeOnClickOutside"})," – determines whether the drawer should be closed when user clicks on the overlay"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"returnFocus"})," – determines whether focus should be returned to the element that was focused before the drawer was opened"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the following compound components to have full control over the ",(0,r.jsx)(n.code,{children:"Drawer"})," rendering:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Drawer.Root"})," – context provider"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Drawer.Overlay"})," – render ",(0,r.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Drawer.Content"})," – main drawer element, should include all drawer content"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Drawer.Header"})," – sticky header, usually contains ",(0,r.jsx)(n.code,{children:"Drawer.Title"})," and ",(0,r.jsx)(n.code,{children:"Drawer.CloseButton"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Drawer.Title"})," – ",(0,r.jsx)(n.code,{children:"h2"})," element, ",(0,r.jsx)(n.code,{children:"aria-labelledby"})," of ",(0,r.jsx)(n.code,{children:"Drawer.Content"})," is pointing to this element, usually is rendered inside ",(0,r.jsx)(n.code,{children:"Drawer.Header"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Drawer.CloseButton"})," – close button, usually rendered inside ",(0,r.jsx)(n.code,{children:"Drawer.Header"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Drawer.Body"})," – a place for main content, ",(0,r.jsx)(n.code,{children:"aria-describedby"})," of ",(0,r.jsx)(n.code,{children:"Drawer.Content"})," is pointing to this element"]}),"\n"]}),"\n",(0,r.jsx)(t,{data:F}),"\n",(0,r.jsx)(n.h2,{id:"fixed-elements-offset",children:"Fixed elements offset"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Drawer"})," component uses ",(0,r.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. To properly size these ",(0,r.jsx)(n.code,{children:"elements"})," add a ",(0,r.jsx)(n.code,{children:"className"})," to them (",(0,r.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll#positionfixed-elements",children:"documentation"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { RemoveScroll } from \'@mantine/core\';\n\n// to make "width: 100%"\n<div className={RemoveScroll.classNames.fullWidth} />\n\n// to make "right: 0"\n<div className={RemoveScroll.classNames.zeroRight} />\n'})}),"\n",(0,r.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Drawer"})," component follows ",(0,r.jsx)(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,r.jsxs)(n.p,{children:["Set ",(0,r.jsx)(n.code,{children:"title"})," props to make component accessible, will add ",(0,r.jsx)(n.code,{children:"aria-labelledby"})," to the content element:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Drawer } from '@mantine/core';\n\nfunction Demo() {\n  return <Drawer title=\"Drawer label\" opened onClose={() => {}} />;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To set close button ",(0,r.jsx)(n.code,{children:"aria-label"})," use ",(0,r.jsx)(n.code,{children:"closeButtonProps"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Drawer } from '@mantine/core';\n\nfunction Demo() {\n  return <Drawer closeButtonProps={{ 'aria-label': 'Close modal' }} opened onClose={() => {}} />;\n}\n"})})]})}var _=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(I,Object.assign({},e,{children:(0,r.jsx)(T,e)}))}},20574:function(e,n,t){"use strict";t.d(n,{_:function(){return o}});var r=t(67294);function o(){return r.createElement("div",null,"Auth form")}}},function(e){e.O(0,[4940,4221,9774,2888,179],function(){return e(e.s=52200)}),_N_E=e.O()}]);