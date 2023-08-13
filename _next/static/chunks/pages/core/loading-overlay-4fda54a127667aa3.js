(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9705],{59862:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/loading-overlay",function(){return t(11659)}])},11659:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return b}});var r=t(85893),n=t(11151),i=t(19905),l=t(9904),a=t(67294),s=t(51227),c=t(7264),d=t(74378),u=t(55899),p=t(78901),m=t(20574);let h=`
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);

  // Note that position: relative is required
  return (
    <>
      <Box pos="relative">
        <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
        {/* ...other content */}
      </Box>

      <Group position="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}`,v={centered:!0,maxWidth:400,dimmed:!0,type:"code",code:h,component:function(){let[e,{toggle:o}]=(0,p.q)(!1);return a.createElement(a.Fragment,null,a.createElement(s.x,{pos:"relative"},a.createElement(c.f,{visible:e,zIndex:1e3,overlayProps:{radius:"sm",blur:2}}),a.createElement(m._,{noSubmit:!0})),a.createElement(d.Z,{justify:"center",mt:"xl"},a.createElement(u.z,{onClick:o},"Toggle overlay")))}},g=`
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(true);

  // Note that position: relative is required
  return (
    <>
      <Box pos="relative">
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'pink', type: 'bars' }}
        />
        {/* ...other content */}
      </Box>

      <Group position="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}`,x={centered:!0,maxWidth:400,dimmed:!0,type:"code",code:g,component:function(){let[e,{toggle:o}]=(0,p.q)(!0);return a.createElement(a.Fragment,null,a.createElement(s.x,{pos:"relative"},a.createElement(c.f,{visible:e,zIndex:1e3,overlayProps:{radius:"sm",blur:2},loaderProps:{color:"pink",type:"bars"}}),a.createElement(m._,{noSubmit:!0})),a.createElement(d.Z,{justify:"center",mt:"xl"},a.createElement(u.z,{onClick:o},"Toggle overlay")))}},f=(0,i.A)(l.us.LoadingOverlay);function y(e){let o=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,n.ah)(),e.components),{Demo:t}=o;return t||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"LoadingOverlay"})," renders an overlay with a loader over the parent element with relative position.\nIt is usually used to indicate loading state of forms.\nNote that elements under overlay are still focusable with keyboard, remember to add additional logic to handle this case."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"LoadingOverlay"})," rendering is controlled by ",(0,r.jsx)(o.code,{children:"visible"})," prop:"]}),"\n",(0,r.jsx)(t,{data:v}),"\n",(0,r.jsx)(o.h2,{id:"loader-props",children:"Loader props"}),"\n",(0,r.jsxs)(o.p,{children:["You can pass props down to the ",(0,r.jsx)(o.a,{href:"/core/loader",children:"Loader"})," component with ",(0,r.jsx)(o.code,{children:"loaderProps"}),":"]}),"\n",(0,r.jsx)(t,{data:x})]})}var b=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(f,Object.assign({},e,{children:(0,r.jsx)(y,e)}))}}},function(e){e.O(0,[9905,1757,7252,9774,2888,179],function(){return e(e.s=59862)}),_N_E=e.O()}]);