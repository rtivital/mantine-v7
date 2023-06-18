(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2275],{59331:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/transition",function(){return n(86898)}])},86898:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var o=n(85893),r=n(11151),i=n(34940),s=n(25263),a=n(88826),c=n(67294),l=n(92612),d=n(94873),u=n(43406),p=n(45493),m=n(54777),f=Object.defineProperty,h=Object.defineProperties,y=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t)=>{for(var n in t||(t={}))x.call(t,n)&&b(e,n,t[n]);if(j)for(var n of j(t))O.call(t,n)&&b(e,n,t[n]);return e},g=(e,t)=>h(e,y(t));let k=`
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
}`,E={in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},P={type:"code",code:k,component:function(){let[e,t]=(0,c.useState)(!1),n=(0,l.O)(()=>t(!1));return c.createElement(d.x,{maw:200,pos:"relative",style:{display:"flex",justifyContent:"center",margin:"auto"}},c.createElement(u.z,{onClick:()=>t(!0)},"Open dropdown"),c.createElement(p.u,{mounted:e,transition:E,duration:200,timingFunction:"ease",keepMounted:!0},e=>c.createElement(m.X,{shadow:"md",p:"xl",h:120,pos:"absolute",top:0,left:0,right:0,ref:n,style:g(w({},e),{zIndex:1})},"Dropdown")))}},v=(0,i.A)(s.us.Transition);function _(e){let t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,r.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"premade-transitions",children:"Premade transitions"}),"\n",(0,o.jsx)(t.p,{children:"Mantine includes several premade transitions:"}),"\n",(0,o.jsx)(n,{data:a.p}),"\n",(0,o.jsxs)(t.p,{children:["To use one of them set ",(0,o.jsx)(t.code,{children:"transition"})," property to one of these values:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'import { Transition } from \'@mantine/core\';\n\nfunction Demo({ opened }: { opened: boolean }) {\n  return (\n    <Transition mounted={opened} transition="fade" duration={400} timingFunction="ease">\n      {(styles) => <div style={styles}>Your modal</div>}\n    </Transition>\n  );\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"custom-transitions",children:"Custom transitions"}),"\n",(0,o.jsxs)(t.p,{children:["You can create your own transition. ",(0,o.jsx)(t.code,{children:"transition"})," is an object with 4 properties:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"in"})," – styles for mounted state"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"out"})," – styles for unmounted state"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"common"})," (optional) – styles for both mounted and unmounted states"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"transitionProperty"})," – properties which participate in transition"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:P})]})}var C=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(v,Object.assign({},e,{children:(0,o.jsx)(_,e)}))}},88826:function(e,t,n){"use strict";n.d(t,{p:function(){return l}});var o=n(67294),r=n(40342),i=n(43245),s=n(41283),a=n(23733),c=n(74378);let l={type:"code",component:function(){let e=(0,r.X)(i.p).map(e=>o.createElement(s.u,{key:e,label:e,transitionProps:{transition:e,duration:300}},o.createElement(a.C,{variant:"light"},e)));return o.createElement(c.Z,{justify:"center",style:{cursor:"default"}},e)}}}},function(e){e.O(0,[7914,4831,5309,9774,2888,179],function(){return e(e.s=59331)}),_N_E=e.O()}]);