(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6334],{33507:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},52200:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/drawer",function(){return r(90821)}])},90821:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Z}});var n=r(85893),o=r(11151),l=r(19905),a=r(9904),i=r(67294),s=r(50006),c=r(55899),d=r(78901),u=r(20574);let p=`
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
`,h={type:"code",code:p,centered:!0,component:function(){let[e,{open:t,close:r}]=(0,d.q)(!1);return i.createElement(i.Fragment,null,i.createElement(s.d,{opened:e,onClose:r,title:"Authentication"},i.createElement(u._,{noShadow:!0,noPadding:!0})),i.createElement(c.z,{onClick:t},"Open Drawer"))}};var m=r(74378);let f={type:"code",component:function(){let[e,t]=(0,i.useState)(!1),[r,n]=(0,i.useState)("top"),o=e=>{n(e),t(!0)};return i.createElement(i.Fragment,null,i.createElement(s.d,{opened:e,onClose:()=>t(!1),padding:"md",position:r,withCloseButton:!1},"Press escape to close the drawer"),i.createElement(m.Z,{justify:"center"},i.createElement(c.z,{variant:"outline",onClick:()=>o("left")},"Left"),i.createElement(c.z,{variant:"outline",onClick:()=>o("right")},"Right"),i.createElement(c.z,{variant:"outline",onClick:()=>o("top")},"Top"),i.createElement(c.z,{variant:"outline",onClick:()=>o("bottom")},"Bottom")))}},w=`
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
`,y={type:"code",code:w,centered:!0,component:function(){let[e,{open:t,close:r}]=(0,d.q)(!1);return i.createElement(i.Fragment,null,i.createElement(s.d,{opened:e,onClose:r,title:"Authentication",overlayProps:{backgroundOpacity:.5,blur:4}},i.createElement(u._,{noShadow:!0,noPadding:!0})),i.createElement(c.z,{onClick:t},"Open drawer"))}},v={type:"code",component:function(){let[e,t]=(0,i.useState)(!1),[r,n]=(0,i.useState)("top"),o=e=>{n(e),t(!0)},l=["xs","sm","md","lg","xl","100%","40rem","25%"].map(e=>i.createElement(c.z,{variant:"outline",onClick:()=>o(e),key:e},e));return i.createElement(i.Fragment,null,i.createElement(s.d,{opened:e,onClose:()=>t(!1),padding:"md",size:r,withCloseButton:!1},"Press escape to close the drawer"),i.createElement(m.Z,{justify:"center"},l))}},g=`
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

`,j={type:"code",code:g,centered:!0,component:function(){let[e,{open:t,close:r}]=(0,d.q)(!1);return i.createElement(i.Fragment,null,i.createElement(s.d,{opened:e,onClose:r,withCloseButton:!1},"Drawer without header, press escape or click on overlay to close"),i.createElement(c.z,{onClick:t},"Open drawer"))}},x=`
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
`,b={type:"code",code:x,centered:!0,component:function(){let[e,{open:t,close:r}]=(0,d.q)(!1),n=Array(100).fill(0).map((e,t)=>i.createElement("p",{key:t},"Drawer with scroll"));return i.createElement(i.Fragment,null,i.createElement(s.d,{opened:e,onClose:r,title:"Header is sticky"},n),i.createElement(c.z,{onClick:t},"Open drawer"))}};var D=r(45906);let C=`
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
`,k={type:"code",code:C,centered:!0,component:function(){let[e,{open:t,close:r}]=(0,d.q)(!1),n=Array(100).fill(0).map((e,t)=>i.createElement("p",{key:t},"Drawer with scroll"));return i.createElement(i.Fragment,null,i.createElement(s.d,{opened:e,onClose:r,title:"Header is sticky",scrollAreaComponent:D.x.Autosize},n),i.createElement(c.z,{onClick:t},"Open drawer"))}},E=`
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

`,O={type:"code",code:E,centered:!0,component:function(){let[e,{open:t,close:r}]=(0,d.q)(!1);return i.createElement(i.Fragment,null,i.createElement(s.d,{opened:e,onClose:r,title:"Authentication",transitionProps:{transition:"rotate-left",duration:150,timingFunction:"linear"}},i.createElement(u._,{noShadow:!0,noPadding:!0})),i.createElement(c.z,{onClick:t},"Open Drawer"))}};var P=r(31577);let S=`
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
`,z={type:"code",code:S,centered:!0,component:function(){let[e,{open:t,close:r}]=(0,d.q)(!1);return i.createElement(i.Fragment,null,i.createElement(s.d,{opened:e,onClose:r,title:"Focus demo"},i.createElement(P.o,{label:"First input",placeholder:"First input"}),i.createElement(P.o,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})),i.createElement(c.z,{onClick:t},"Open drawer"))}},I=`
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
`,B={type:"code",code:I,centered:!0,component:function(){let[e,{open:t,close:r}]=(0,d.q)(!1);return i.createElement(i.Fragment,null,i.createElement(s.d.Root,{opened:e,onClose:r},i.createElement(s.d.Overlay,null),i.createElement(s.d.Content,null,i.createElement(s.d.Header,null,i.createElement(s.d.Title,null,"Drawer title"),i.createElement(s.d.CloseButton,null)),i.createElement(s.d.Body,null,"Drawer content"))),i.createElement(c.z,{onClick:t},"Open drawer"))}},M=(0,l.A)(a.us.Drawer);function A(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li"},(0,o.ah)(),e.components),{Demo:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r,{data:h}),"\n",(0,n.jsx)(t.h2,{id:"position",children:"Position"}),"\n",(0,n.jsxs)(t.p,{children:["Drawer can be placed on ",(0,n.jsx)(t.code,{children:"left"})," (default), ",(0,n.jsx)(t.code,{children:"top"}),", ",(0,n.jsx)(t.code,{children:"right"})," and ",(0,n.jsx)(t.code,{children:"bottom"}),". Control drawer position with ",(0,n.jsx)(t.code,{children:"position"})," prop,\nfor example ",(0,n.jsx)(t.code,{children:'<Drawer position="top" />'}),"."]}),"\n",(0,n.jsx)(r,{data:f}),"\n",(0,n.jsx)(t.h2,{id:"customize-overlay",children:"Customize overlay"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Drawer"})," uses ",(0,n.jsx)(t.a,{href:"/core/overlay/",children:"Overlay"})," component, you can set any props that ",(0,n.jsx)(t.a,{href:"/core/overlay/",children:"Overlay"}),"\nsupports with ",(0,n.jsx)(t.code,{children:"overlayProps"}),":"]}),"\n",(0,n.jsx)(r,{data:y}),"\n",(0,n.jsx)(t.h2,{id:"sizes",children:"Sizes"}),"\n",(0,n.jsxs)(t.p,{children:["You can change drawer width/height (depends on ",(0,n.jsx)(t.code,{children:"position"}),") by setting ",(0,n.jsx)(t.code,{children:"size"})," prop to predefined size or any valid width,\nfor example, ",(0,n.jsx)(t.code,{children:'size="55%"'})," or ",(0,n.jsx)(t.code,{children:"size={200}"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { Drawer } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Drawer position="right" size="xl" opened onClose={() => {}}>\n      {/* Drawer content */}\n    </Drawer>\n  );\n}\n'})}),"\n",(0,n.jsx)(r,{data:v}),"\n",(0,n.jsx)(t.h2,{id:"remove-header",children:"Remove header"}),"\n",(0,n.jsxs)(t.p,{children:["To remove header set ",(0,n.jsx)(t.code,{children:"withCloseButton={false}"})]}),"\n",(0,n.jsx)(r,{data:j}),"\n",(0,n.jsx)(t.h2,{id:"drawer-with-scroll",children:"Drawer with scroll"}),"\n",(0,n.jsx)(r,{data:b}),"\n",(0,n.jsx)(t.h2,{id:"usage-with-scrollarea",children:"Usage with ScrollArea"}),"\n",(0,n.jsx)(r,{data:k}),"\n",(0,n.jsx)(t.h2,{id:"change-transition",children:"Change transition"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Drawer"})," is built with ",(0,n.jsx)(t.a,{href:"/core/transition/",children:"Transition"})," component. Use ",(0,n.jsx)(t.code,{children:"transitionProps"}),"\nprop to customize any ",(0,n.jsx)(t.a,{href:"/core/transition/",children:"Transition"})," properties:"]}),"\n",(0,n.jsx)(r,{data:O}),"\n",(0,n.jsx)(t.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Drawer"})," uses ",(0,n.jsx)(t.a,{href:"/core/focus-trap/",children:"FocusTrap"})," to trap focus. Add ",(0,n.jsx)(t.code,{children:"data-autofocus"}),"\nattribute to the element that should receive initial focus."]}),"\n",(0,n.jsx)(r,{data:z}),"\n",(0,n.jsx)(t.h2,{id:"control-behavior",children:"Control behavior"}),"\n",(0,n.jsxs)(t.p,{children:["The following props can be used to control ",(0,n.jsx)(t.code,{children:"Drawer"})," behavior.\nIn most cases it is not recommended to turn these features off –\nit will make the component less accessible."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"trapFocus"})," – determines whether focus should be trapped inside drawer"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"closeOnEscape"})," – determines whether the drawer should be closed when ",(0,n.jsx)(t.code,{children:"Escape"})," key is pressed"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"closeOnClickOutside"})," – determines whether the drawer should be closed when user clicks on the overlay"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"returnFocus"})," – determines whether focus should be returned to the element that was focused before the drawer was opened"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,n.jsxs)(t.p,{children:["You can use the following compound components to have full control over the ",(0,n.jsx)(t.code,{children:"Drawer"})," rendering:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Drawer.Root"})," – context provider"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Drawer.Overlay"})," – render ",(0,n.jsx)(t.a,{href:"/core/overlay/",children:"Overlay"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Drawer.Content"})," – main drawer element, should include all drawer content"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Drawer.Header"})," – sticky header, usually contains ",(0,n.jsx)(t.code,{children:"Drawer.Title"})," and ",(0,n.jsx)(t.code,{children:"Drawer.CloseButton"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Drawer.Title"})," – ",(0,n.jsx)(t.code,{children:"h2"})," element, ",(0,n.jsx)(t.code,{children:"aria-labelledby"})," of ",(0,n.jsx)(t.code,{children:"Drawer.Content"})," is pointing to this element, usually is rendered inside ",(0,n.jsx)(t.code,{children:"Drawer.Header"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Drawer.CloseButton"})," – close button, usually rendered inside ",(0,n.jsx)(t.code,{children:"Drawer.Header"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Drawer.Body"})," – a place for main content, ",(0,n.jsx)(t.code,{children:"aria-describedby"})," of ",(0,n.jsx)(t.code,{children:"Drawer.Content"})," is pointing to this element"]}),"\n"]}),"\n",(0,n.jsx)(r,{data:B}),"\n",(0,n.jsx)(t.h2,{id:"fixed-elements-offset",children:"Fixed elements offset"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Drawer"})," component uses ",(0,n.jsx)(t.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. To properly size these ",(0,n.jsx)(t.code,{children:"elements"})," add a ",(0,n.jsx)(t.code,{children:"className"})," to them (",(0,n.jsx)(t.a,{href:"https://github.com/theKashey/react-remove-scroll#positionfixed-elements",children:"documentation"}),"):"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { RemoveScroll } from \'@mantine/core\';\n\n// to make "width: 100%"\n<div className={RemoveScroll.classNames.fullWidth} />\n\n// to make "right: 0"\n<div className={RemoveScroll.classNames.zeroRight} />\n'})}),"\n",(0,n.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Drawer"})," component follows ",(0,n.jsx)(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"title"})," props to make component accessible, will add ",(0,n.jsx)(t.code,{children:"aria-labelledby"})," to the content element:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Drawer } from '@mantine/core';\n\nfunction Demo() {\n  return <Drawer title=\"Drawer label\" opened onClose={() => {}} />;\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["To set close button ",(0,n.jsx)(t.code,{children:"aria-label"})," use ",(0,n.jsx)(t.code,{children:"closeButtonProps"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Drawer } from '@mantine/core';\n\nfunction Demo() {\n  return <Drawer closeButtonProps={{ 'aria-label': 'Close modal' }} opened onClose={() => {}} />;\n}\n"})})]})}var Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(M,Object.assign({},e,{children:(0,n.jsx)(A,e)}))}},93693:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},38956:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(54764).Z)("lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]])},66471:function(e){"use strict";e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(o=n;0!=o--;)if(!e(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(l=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,l[o]))return!1;for(o=n;0!=o--;){var n,o,l,a=l[o];if(!e(t[a],r[a]))return!1}return!0}return t!=t&&r!=r}},7264:function(e,t,r){"use strict";r.d(t,{f:function(){return O}});var n=r(67294),o={root:"m-6e45937b",loader:"m-e8eb006c",overlay:"m-df587f17"},l=r(45493),a=r(35552),i=r(52569),s=r(75144),c=r(35577),d=r(49441),u=r(25637),p=r(51227),h=r(13279),m=r(95553),f=Object.defineProperty,w=Object.defineProperties,y=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&x(e,r,t[r]);if(v)for(var r of v(t))j.call(t,r)&&x(e,r,t[r]);return e},D=(e,t)=>w(e,y(t)),C=(e,t)=>{var r={};for(var n in e)g.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&v)for(var n of v(e))0>t.indexOf(n)&&j.call(e,n)&&(r[n]=e[n]);return r};let k={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,h.w)("overlay")},E=(0,m.Z)((e,{zIndex:t})=>({root:{"--lo-z-index":null==t?void 0:t.toString()}})),O=(0,s.d)((e,t)=>{let r=(0,c.w)("LoadingOverlay",k,e),{classNames:s,className:h,style:m,styles:f,unstyled:w,vars:y,transitionProps:v,loaderProps:g,overlayProps:j,visible:x,zIndex:O}=r,P=C(r,["classNames","className","style","styles","unstyled","vars","transitionProps","loaderProps","overlayProps","visible","zIndex"]),S=(0,d.rZ)(),z=(0,u.y)({name:"LoadingOverlay",classes:o,props:r,className:h,style:m,classNames:s,styles:f,unstyled:w,vars:y,varsResolver:E}),I=b(b({},k.overlayProps),j);return n.createElement(l.u,D(b({transition:"fade"},v),{mounted:!!x}),e=>n.createElement(p.x,b(D(b({},z("root",{style:e})),{ref:t}),P),n.createElement(a.a,b(D(b({},z("loader")),{unstyled:w}),g)),n.createElement(i.a,D(b(b({},I),z("overlay")),{"data-light":!0,unstyled:w,color:(null==j?void 0:j.color)||S.white})),n.createElement(i.a,D(b(b({},I),z("overlay")),{"data-dark":!0,unstyled:w,color:(null==j?void 0:j.color)||S.colors.dark[5]}))))});O.classes=o,O.displayName="@mantine/core/LoadingOverlay"},35535:function(e,t,r){"use strict";r.d(t,{W:function(){return I}});var n=r(67294),o=r(40624),l=r(32582),a=r(35179);let i=({reveal:e})=>n.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}},n.createElement("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}));var s={root:"m-f61ca620",input:"m-ccf8da4c",innerInput:"m-f2d85dd2",visibilityToggle:"m-b1072d44"},c=r(4277),d=r(68267),u=r(95879),p=r(75144),h=r(35577),m=r(25637),f=r(19732),w=r(91090),y=r(95553),v=r(71350),g=Object.defineProperty,j=Object.defineProperties,x=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,E=(e,t)=>{for(var r in t||(t={}))D.call(t,r)&&k(e,r,t[r]);if(b)for(var r of b(t))C.call(t,r)&&k(e,r,t[r]);return e},O=(e,t)=>j(e,x(t)),P=(e,t)=>{var r={};for(var n in e)D.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&b)for(var n of b(e))0>t.indexOf(n)&&C.call(e,n)&&(r[n]=e[n]);return r};let S={__staticSelector:"PasswordInput",visibilityToggleIcon:i,size:"sm"},z=(0,y.Z)((e,{size:t})=>({root:{"--psi-icon-size":(0,v.ap)(t,"psi-icon-size"),"--psi-button-size":(0,v.ap)(t,"psi-button-size")}})),I=(0,p.d)((e,t)=>{let r=(0,h.w)("PasswordInput",S,e),{classNames:i,className:u,style:p,styles:y,unstyled:v,vars:g,required:j,error:x,leftSection:b,disabled:D,id:C,variant:k,inputContainer:I,description:B,label:M,size:A,__staticSelector:Z,errorProps:_,descriptionProps:N,labelProps:F,withAsterisk:T,inputWrapperOrder:R,wrapperProps:L,radius:q,rightSection:H,rightSectionWidth:W,leftSectionWidth:V,visible:Y,defaultVisible:U,onVisibilityChange:X,visibilityToggleIcon:K,visibilityToggleButtonProps:G,rightSectionProps:J,leftSectionProps:Q,leftSectionPointerEvents:$}=r,ee=P(r,["classNames","className","style","styles","unstyled","vars","required","error","leftSection","disabled","id","variant","inputContainer","description","label","size","__staticSelector","errorProps","descriptionProps","labelProps","withAsterisk","inputWrapperOrder","wrapperProps","radius","rightSection","rightSectionWidth","leftSectionWidth","visible","defaultVisible","onVisibilityChange","visibilityToggleIcon","visibilityToggleButtonProps","rightSectionProps","leftSectionProps","leftSectionPointerEvents"]),et=(0,l.M)(C),[er,en]=(0,a.C)({value:Y,defaultValue:U,finalValue:!1,onChange:X}),eo=()=>en(!er),el=(0,m.y)({name:"PasswordInput",classes:s,props:r,className:u,style:p,classNames:i,styles:y,unstyled:v,vars:g,varsResolver:z}),{resolvedClassNames:ea,resolvedStyles:ei}=(0,f.h)({classNames:i,styles:y,props:r}),{styleProps:es,rest:ec}=(0,w.c)(ee),ed=n.createElement(c.A,O(E(O(E({},el("visibilityToggle")),{radius:q,"aria-hidden":!G}),G),{variant:"subtle",color:"gray",unstyled:v,onMouseDown:e=>{e.preventDefault(),eo()},onKeyDown:e=>{" "===e.key&&(e.preventDefault(),eo())}}),n.createElement(K,{reveal:er}));return n.createElement(d.I.Wrapper,E(E(E({required:j,id:et,label:M,error:x,description:B,size:A,classNames:ea,styles:ei,__staticSelector:Z,errorProps:_,descriptionProps:N,unstyled:v,withAsterisk:T,inputWrapperOrder:R,inputContainer:I,variant:k,labelProps:O(E({},F),{htmlFor:et})},el("root")),es),L),n.createElement(d.I,{component:"div",error:x,leftSection:b,size:A,classNames:O(E({},ea),{input:(0,o.Z)(s.input,ea.input)}),styles:ei,radius:q,disabled:D,__staticSelector:Z,rightSectionWidth:W,rightSection:null!=H?H:ed,variant:k,unstyled:v,leftSectionWidth:V,rightSectionPointerEvents:"all",rightSectionProps:J,leftSectionProps:Q,leftSectionPointerEvents:$},n.createElement("input",O(E(O(E({required:j,"data-invalid":!!x||void 0,"data-with-left-section":!!b||void 0},el("innerInput")),{disabled:D,id:et,ref:t}),ec),{autoComplete:ec.autoComplete||"off",type:er?"text":"password"}))))});I.classes=E(E({},u.M.classes),s),I.displayName="@mantine/core/PasswordInput"},20574:function(e,t,r){"use strict";r.d(t,{_:function(){return k}});var n=r(67294),o=r(61757),l=r(93693),a=r(38956),i=r(54777),s=r(7264),c=r(74378),d=r(31577),u=r(35535),p=r(56746),h=r(77048),m=r(46342),f=r(55899),w=Object.defineProperty,y=Object.defineProperties,v=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,D=(e,t)=>{for(var r in t||(t={}))j.call(t,r)&&b(e,r,t[r]);if(g)for(var r of g(t))x.call(t,r)&&b(e,r,t[r]);return e},C=(e,t)=>y(e,v(t));function k({noShadow:e,noPadding:t,noSubmit:r,style:w}){let[y,v]=(0,n.useState)("register"),[g,j]=(0,n.useState)(!1),[x,b]=(0,n.useState)(null),k=()=>{v(e=>"register"===e?"login":"register"),b(null)},E=(0,o.c)({initialValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:"",termsOfService:!0}}),O=()=>{j(!0),b(null),setTimeout(()=>{j(!1),b("register"===y?"User with this email already exists":"User with this email does not exist")},3e3)};return n.createElement(i.X,{p:t?0:"lg",shadow:e?"none":"sm",style:C(D({},w),{position:"relative",backgroundColor:"var(--mantine-color-body)"})},n.createElement("form",{onSubmit:E.onSubmit(O)},n.createElement(s.f,{visible:g}),"register"===y&&n.createElement(c.Z,{grow:!0},n.createElement(d.o,D({"data-autofocus":!0,required:!0,placeholder:"Your first name",label:"First name"},E.getInputProps("firstName"))),n.createElement(d.o,D({required:!0,placeholder:"Your last name",label:"Last name"},E.getInputProps("lastName")))),n.createElement(d.o,D({mt:"md",required:!0,placeholder:"Your email",label:"Email",leftSection:n.createElement(l.Z,{size:16,stroke:1.5})},E.getInputProps("email"))),n.createElement(u.W,D({mt:"md",required:!0,placeholder:"Password",label:"Password",leftSection:n.createElement(a.Z,{size:16,stroke:1.5})},E.getInputProps("password"))),"register"===y&&n.createElement(u.W,D({mt:"md",required:!0,label:"Confirm Password",placeholder:"Confirm password",leftSection:n.createElement(a.Z,{size:16,stroke:1.5})},E.getInputProps("confirmPassword"))),"register"===y&&n.createElement(p.X,D({mt:"xl",label:"I agree to sell my soul and privacy to this corporation"},E.getInputProps("termsOfService",{type:"checkbox"}))),x&&n.createElement(h.x,{c:"red",size:"sm",mt:"sm"},x),!r&&n.createElement(c.Z,{justify:"space-between",mt:"xl"},n.createElement(m.e,{component:"button",type:"button",c:"dimmed",onClick:k,size:"sm"},"register"===y?"Have an account? Login":"Don't have an account? Register"),n.createElement(f.z,{color:"blue",type:"submit"},"register"===y?"Register":"Login"))))}},28380:function(e,t,r){"use strict";function n(e,t,r){"object"==typeof r.value&&(r.value=o(r.value)),r.enumerable&&!r.get&&!r.set&&r.configurable&&r.writable&&"__proto__"!==t?e[t]=r.value:Object.defineProperty(e,t,r)}function o(e){if("object"!=typeof e)return e;var t,r,l,a=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?l=Object.create(e.__proto__||null):"[object Array]"===i?l=Array(e.length):"[object Set]"===i?(l=new Set,e.forEach(function(e){l.add(o(e))})):"[object Map]"===i?(l=new Map,e.forEach(function(e,t){l.set(o(t),o(e))})):"[object Date]"===i?l=new Date(+e):"[object RegExp]"===i?l=RegExp(e.source,e.flags):"[object DataView]"===i?l=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===i?l=e.slice(0):"Array]"===i.slice(-6)&&(l=new e.constructor(e)),l){for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n(l,r[a],Object.getOwnPropertyDescriptor(e,r[a]));for(a=0,r=Object.getOwnPropertyNames(e);a<r.length;a++)Object.hasOwnProperty.call(l,t=r[a])&&l[t]===e[t]||n(l,t,Object.getOwnPropertyDescriptor(e,t))}return l||e}r.d(t,{Y:function(){return o}})}},function(e){e.O(0,[1300,178,1757,2068,9774,2888,179],function(){return e(e.s=52200)}),_N_E=e.O()}]);