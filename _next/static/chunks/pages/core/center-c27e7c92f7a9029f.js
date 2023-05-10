(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1172],{47605:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/center",function(){return t(83671)}])},83671:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var r=t(85893),o=t(11151),i=t(34940),l=t(25263),a=t(67294),c=t(56903),s=t(94873);let m=`
import { Center, Box } from '@mantine/core';

function Demo() {
  return (
    <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
      <Box bg="var(--mantine-color-blue-light)">All elements inside Center are centered</Box>
    </Center>
  );
}
`,u={type:"code",code:m,component:function(){return a.createElement(c.M,{maw:400,h:100,bg:"var(--mantine-color-gray-light)"},a.createElement(s.x,{bg:"var(--mantine-color-blue-light)"},"All elements inside Center are centered"))}};var d=(0,t(54764).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]]),f=t(46342);let h=`
import { Center, Anchor, Box } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

function Demo() {
  return (
    <Anchor href="https://mantine.dev" target="_blank">
      <Center inline>
        <IconArrowLeft style={{ width: '0.8rem', height: '0.8rem' }} />
        <Box ml={5}>Back to Mantine website</Box>
      </Center>
    </Anchor>
  );
}
`,p={type:"code",code:h,component:function(){return a.createElement(f.e,{href:"https://mantine.dev",target:"_blank"},a.createElement(c.M,{inline:!0},a.createElement(d,{style:{width:"0.8rem",height:"0.8rem"},className:"mantine-rotate-rtl"}),a.createElement(s.x,{ml:5},"Back to Mantine website")))}},b=(0,i.A)(l.us.Center);function g(e){let n=Object.assign({h2:"h2",p:"p",code:"code"},(0,o.ah)(),e.components),{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:u}),"\n",(0,r.jsx)(n.h2,{id:"inline",children:"Inline"}),"\n",(0,r.jsxs)(n.p,{children:["To use ",(0,r.jsx)(n.code,{children:"Center"})," with inline elements set ",(0,r.jsx)(n.code,{children:"inline"})," prop.\nFor example, you can center link icon and label:"]}),"\n",(0,r.jsx)(t,{data:p})]})}var x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(b,Object.assign({},e,{children:(0,r.jsx)(g,e)}))}},56903:function(e,n,t){"use strict";t.d(n,{M:function(){return y}});var r=t(67294),o={root:"mantine-FiYZkHS"},i=t(70656),l=t(35577),a=t(89123),c=t(94873),s=t(95553),m=Object.defineProperty,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(e,n,t)=>n in e?m(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&h(e,t,n[t]);if(u)for(var t of u(n))f.call(n,t)&&h(e,t,n[t]);return e},b=(e,n)=>{var t={};for(var r in e)d.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&u)for(var r of u(e))0>n.indexOf(r)&&f.call(e,r)&&(t[r]=e[r]);return t};let g={},x=(0,s.Z)((e,{inline:n})=>({root:{"--center-display":n?"inline-flex":"flex"}})),y=(0,i.b)((e,n)=>{let t=(0,l.w)("Center",g,e),{classNames:i,className:s,style:m,styles:u,unstyled:d,vars:f}=t,h=b(t,["classNames","className","style","styles","unstyled","vars"]),y=(0,a.y)({name:"Center",props:t,classes:o,className:s,style:m,classNames:i,styles:u,unstyled:d,vars:f,varsResolver:x});return r.createElement(c.x,p(p({ref:n},y("root")),h))});y.displayName="@mantine/core/Center"}},function(e){e.O(0,[4878,9341,4940,9774,2888,179],function(){return e(e.s=47605)}),_N_E=e.O()}]);