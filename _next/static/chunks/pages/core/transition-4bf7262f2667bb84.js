(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2275],{59331:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/transition",function(){return n(86898)}])},86898:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(85893),o=n(11151),i=n(34940),a=n(25263),s=n(88826),l=n(67294),c=n(92612),d=n(94873),p=n(43406),u=n(45493),m=n(54777),f=Object.defineProperty,y=Object.defineProperties,b=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,O=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&O(e,n,t[n]);if(h)for(var n of h(t))j.call(t,n)&&O(e,n,t[n]);return e},w=(e,t)=>y(e,b(t));let v=`
import { useState } from 'react';
import { useClickOutside } from '@mantine/hooks';
import { Transition, Paper, Button, Box } from '@mantine/core';

const scaleY = {
  in: { opacity: 1, transform: 'scaleY(1)' },
  out: { opacity: 0, transform: 'scaleY(0)' },
  common: { transformOrigin: 'top' },
  transitionProperty: 'transform, opacity',
};

function Demo() {
  const [opened, setOpened] = useState(false);
  const clickOutsideRef = useClickOutside(() => setOpened(false));

  return (
    <Box
      maw={200}
      pos="relative"
      style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}
    >
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>
      <Transition
        mounted={opened}
        transition={scaleY}
        duration={200}
        timingFunction="ease"
        keepMounted
      >
        {(transitionStyle) => (
          <Paper
            shadow="md"
            p="xl"
            h={120}
            pos="absolute"
            top={0}
            left={0}
            right={0}
            ref={clickOutsideRef}
            style={{ ...transitionStyle, zIndex: 1 }}
          >
            Dropdown
          </Paper>
        )}
      </Transition>
    </Box>
  );
}`,P={in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},E={type:"code",code:v,component:function(){let[e,t]=(0,l.useState)(!1),n=(0,c.O)(()=>t(!1));return l.createElement(d.x,{maw:200,pos:"relative",style:{display:"flex",justifyContent:"center",margin:"auto"}},l.createElement(p.z,{onClick:()=>t(!0)},"Open dropdown"),l.createElement(u.u,{mounted:e,transition:P,duration:200,timingFunction:"ease",keepMounted:!0},e=>l.createElement(m.X,{shadow:"md",p:"xl",h:120,pos:"absolute",top:0,left:0,right:0,ref:n,style:w(x({},e),{zIndex:1})},"Dropdown")))}},k=(0,i.A)(a.us.Transition);function C(e){let t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,o.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"premade-transitions",children:"Premade transitions"}),"\n",(0,r.jsx)(t.p,{children:"Mantine includes several premade transitions:"}),"\n",(0,r.jsx)(n,{data:s.p}),"\n",(0,r.jsxs)(t.p,{children:["To use one of them set ",(0,r.jsx)(t.code,{children:"transition"})," property to one of these values:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Transition } from \'@mantine/core\';\n\nfunction Demo({ opened }: { opened: boolean }) {\n  return (\n    <Transition mounted={opened} transition="fade" duration={400} timingFunction="ease">\n      {(styles) => <div style={styles}>Your modal</div>}\n    </Transition>\n  );\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"custom-transitions",children:"Custom transitions"}),"\n",(0,r.jsxs)(t.p,{children:["You can create your own transition. ",(0,r.jsx)(t.code,{children:"transition"})," is an object with 4 properties:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"in"})," – styles for mounted state"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"out"})," – styles for unmounted state"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"common"})," (optional) – styles for both mounted and unmounted states"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"transitionProperty"})," – properties which participate in transition"]}),"\n"]}),"\n",(0,r.jsx)(n,{data:E})]})}var N=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(k,Object.assign({},e,{children:(0,r.jsx)(C,e)}))}},23733:function(e,t,n){"use strict";n.d(t,{C:function(){return P}});var r=n(67294),o={root:"mantine-WM8AqtG","root--dot":"mantine-d3u1-wu",label:"mantine-LN56t-P",section:"mantine-cbpGUul"},i=n(70656),a=n(35577),s=n(89123),l=n(94873),c=n(95553),d=n(71350),p=n(94975),u=Object.defineProperty,m=Object.defineProperties,f=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,j=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&g(e,n,t[n]);if(y)for(var n of y(t))h.call(t,n)&&g(e,n,t[n]);return e},O=(e,t)=>m(e,f(t)),x=(e,t)=>{var n={};for(var r in e)b.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&y)for(var r of y(e))0>t.indexOf(r)&&h.call(e,r)&&(n[r]=e[r]);return n};let w={size:"md",radius:"xl",variant:"filled"},v=(0,c.Z)((e,{radius:t,color:n,gradient:r,variant:o,size:i})=>{let a=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:r,variant:o});return{root:{"--badge-height":(0,d.ap)(i,"badge-height"),"--badge-padding-x":(0,d.ap)(i,"badge-padding-x"),"--badge-fz":(0,d.ap)(i,"badge-fz"),"--badge-radius":(0,d.H5)(t),"--badge-bg":a.background,"--badge-color":a.color,"--badge-bd":a.border,"--badge-dot-color":"dot"===o?(0,p.p)(n,e):void 0}}}),P=(0,i.b)((e,t)=>{let n=(0,a.w)("Badge",w,e),{classNames:i,className:c,style:d,styles:p,unstyled:u,vars:m,radius:f,color:y,gradient:b,leftSection:h,rightSection:g,children:P,variant:E,fullWidth:k}=n,C=x(n,["classNames","className","style","styles","unstyled","vars","radius","color","gradient","leftSection","rightSection","children","variant","fullWidth"]),N=(0,s.y)({name:"Badge",props:n,classes:o,className:c,style:d,classNames:i,styles:p,unstyled:u,vars:m,varsResolver:v});return r.createElement(l.x,j(O(j({variant:E,mod:{block:k}},N("root",{variant:E})),{ref:t}),C),h&&r.createElement("span",O(j({},N("section")),{"data-position":"left"}),h),r.createElement("span",j({},N("label")),P),g&&r.createElement("span",O(j({},N("section")),{"data-position":"right"}),g))});P.displayName="@mantine/core/Badge"},54777:function(e,t,n){"use strict";n.d(t,{X:function(){return v}});var r=n(67294),o={root:"mantine-lqpFSmK"},i=n(71350),a=n(70656),s=n(35577),l=n(89123),c=n(94873),d=n(95553),p=Object.defineProperty,u=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))y.call(t,n)&&h(e,n,t[n]);if(f)for(var n of f(t))b.call(t,n)&&h(e,n,t[n]);return e},j=(e,t)=>u(e,m(t)),O=(e,t)=>{var n={};for(var r in e)y.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))0>t.indexOf(r)&&b.call(e,r)&&(n[r]=e[r]);return n};let x={},w=(0,d.Z)((e,{radius:t,shadow:n})=>({root:{"--paper-radius":(0,i.H5)(t),"--paper-shadow":(0,i.Xj)(n)}})),v=(0,a.b)((e,t)=>{let n=(0,s.w)("Paper",x,e),{classNames:i,className:a,style:d,styles:p,unstyled:u,withBorder:m,vars:f,radius:y,shadow:b,variant:h}=n,v=O(n,["classNames","className","style","styles","unstyled","withBorder","vars","radius","shadow","variant"]),P=(0,l.y)({name:"Paper",props:n,classes:o,className:a,style:d,classNames:i,styles:p,unstyled:u,vars:f,varsResolver:w});return r.createElement(c.x,g(j(g({ref:t,mod:{"data-with-border":m}},P("root")),{variant:h}),v))});v.displayName="@mantine/core/Paper"},88826:function(e,t,n){"use strict";n.d(t,{p:function(){return c}});var r=n(67294),o=n(40342),i=n(43245),a=n(41283),s=n(23733),l=n(74378);let c={type:"code",component:function(){let e=(0,o.X)(i.p).map(e=>r.createElement(a.u,{key:e,label:e,transitionProps:{transition:e,duration:300}},r.createElement(s.C,{variant:"light"},e)));return r.createElement(l.Z,{justify:"center",style:{cursor:"default"}},e)}}}},function(e){e.O(0,[5664,9341,4940,9774,2888,179],function(){return e(e.s=59331)}),_N_E=e.O()}]);