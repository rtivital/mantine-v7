(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1172],{47605:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/center",function(){return t(83671)}])},83671:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var r=t(85893),o=t(11151),i=t(34940),c=t(25263),l=t(67294),a=t(56903),s=t(94873);let m=`
import { Center, Box } from '@mantine/core';

function Demo() {
  return (
    <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
      <Box bg="var(--mantine-color-blue-light)">All elements inside Center are centered</Box>
    </Center>
  );
}
`,d={type:"code",code:m,component:function(){return l.createElement(a.M,{maw:400,h:100,bg:"var(--mantine-color-gray-light)"},l.createElement(s.x,{bg:"var(--mantine-color-blue-light)"},"All elements inside Center are centered"))}};var h=(0,t(54764).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]]),u=t(46342),f=t(46393);let p=`
import { Center, Anchor, Box, rem } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

function Demo() {
  return (
    <Anchor href="https://mantine.dev" target="_blank">
      <Center inline>
        <IconArrowLeft style={{ width: rem(12), height: rem(12) }} />
        <Box ml={5}>Back to Mantine website</Box>
      </Center>
    </Anchor>
  );
}
`,g={type:"code",code:p,component:function(){return l.createElement(u.e,{href:"https://mantine.dev",target:"_blank"},l.createElement(a.M,{inline:!0},l.createElement(h,{style:{width:(0,f.h)(12),height:(0,f.h)(12)},className:"mantine-rotate-rtl"}),l.createElement(s.x,{ml:5},"Back to Mantine website")))}},x=(0,i.A)(c.us.Center);function b(e){let n=Object.assign({h2:"h2",p:"p",code:"code"},(0,o.ah)(),e.components),{Demo:t,Polymorphic:i}=n;return t||y("Demo",!0),i||y("Polymorphic",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:d}),"\n",(0,r.jsx)(n.h2,{id:"inline",children:"Inline"}),"\n",(0,r.jsxs)(n.p,{children:["To use ",(0,r.jsx)(n.code,{children:"Center"})," with inline elements set ",(0,r.jsx)(n.code,{children:"inline"})," prop.\nFor example, you can center link icon and label:"]}),"\n",(0,r.jsx)(t,{data:g}),"\n",(0,r.jsx)(i,{defaultElement:"div",changeToElement:"button",component:"Center"})]})}var w=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(x,Object.assign({},e,{children:(0,r.jsx)(b,e)}))};function y(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},56903:function(e,n,t){"use strict";t.d(n,{M:function(){return u}});var r=t(59312),o=t(67294),i={root:"mantine-FiYZkHS"},c=t(70656),l=t(35577),a=t(89123),s=t(94873),m=t(95553);let d={},h=(0,m.Z)((e,{inline:n})=>({root:{"--center-display":n?"inline-flex":"flex"}})),u=(0,c.b)((e,n)=>{let t=(0,l.w)("Center",d,e),{classNames:c,className:m,style:u,styles:f,unstyled:p,vars:g}=t,x=(0,r._T)(t,["classNames","className","style","styles","unstyled","vars"]),b=(0,a.y)({name:"Center",props:t,classes:i,className:m,style:u,classNames:c,styles:f,unstyled:p,vars:g,varsResolver:h});return o.createElement(s.x,Object.assign({ref:n},b("root"),x))});u.displayName="@mantine/core/Center"}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=47605)}),_N_E=e.O()}]);