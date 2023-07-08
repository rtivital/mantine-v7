(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2275],{59331:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/transition",function(){return t(86898)}])},86898:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return T}});var o=t(85893),r=t(11151),i=t(34940),s=t(25263),a=t(88826),c=t(67294),l=t(92612),d=t(94873),p=t(43406),u=t(45493),m=t(54777),f=Object.defineProperty,h=Object.defineProperties,y=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,b=(e,n,t)=>n in e?f(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,w=(e,n)=>{for(var t in n||(n={}))x.call(n,t)&&b(e,t,n[t]);if(j)for(var t of j(n))O.call(n,t)&&b(e,t,n[t]);return e},g=(e,n)=>h(e,y(n));let k=`
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
}`,P={in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},v={type:"code",code:k,component:function(){let[e,n]=(0,c.useState)(!1),t=(0,l.O)(()=>n(!1));return c.createElement(d.x,{maw:200,pos:"relative",style:{display:"flex",justifyContent:"center",margin:"auto"}},c.createElement(p.z,{onClick:()=>n(!0)},"Open dropdown"),c.createElement(u.u,{mounted:e,transition:P,duration:200,timingFunction:"ease",keepMounted:!0},e=>c.createElement(m.X,{shadow:"md",p:"xl",h:120,pos:"absolute",top:0,left:0,right:0,ref:t,style:g(w({},e),{zIndex:1})},"Dropdown")))}},E=(0,i.A)(s.us.Transition);function _(e){let n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,r.ah)(),e.components),{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"premade-transitions",children:"Premade transitions"}),"\n",(0,o.jsx)(n.p,{children:"Mantine includes several premade transitions:"}),"\n",(0,o.jsx)(t,{data:a.p}),"\n",(0,o.jsxs)(n.p,{children:["To use one of them set ",(0,o.jsx)(n.code,{children:"transition"})," property to one of these values:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { Transition } from \'@mantine/core\';\n\nfunction Demo({ opened }: { opened: boolean }) {\n  return (\n    <Transition mounted={opened} transition="fade" duration={400} timingFunction="ease">\n      {(styles) => <div style={styles}>Your modal</div>}\n    </Transition>\n  );\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"custom-transitions",children:"Custom transitions"}),"\n",(0,o.jsxs)(n.p,{children:["You can create your own transition. ",(0,o.jsx)(n.code,{children:"transition"})," is an object with 4 properties:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"in"})," – styles for mounted state"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"out"})," – styles for unmounted state"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"common"})," (optional) – styles for both mounted and unmounted states"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"transitionProperty"})," – properties which participate in transition"]}),"\n"]}),"\n",(0,o.jsx)(t,{data:v})]})}var T=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(E,Object.assign({},e,{children:(0,o.jsx)(_,e)}))}}},function(e){e.O(0,[2411,7437,9256,9774,2888,179],function(){return e(e.s=59331)}),_N_E=e.O()}]);