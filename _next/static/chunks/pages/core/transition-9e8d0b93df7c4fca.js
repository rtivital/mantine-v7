(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2275],{33507:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var o=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},59331:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/transition",function(){return n(86898)}])},86898:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Z}});var o=n(85893),r=n(11151),i=n(34940),s=n(34200),a=n(88826),c=n(67294),l=n(92612),d=n(13671),u=n(55899),p=n(45493),h=n(54777),f=Object.defineProperty,m=Object.defineProperties,y=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,j=(t,e,n)=>e in t?f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,x=(t,e)=>{for(var n in e||(e={}))g.call(e,n)&&j(t,n,e[n]);if(v)for(var n of v(e))k.call(e,n)&&j(t,n,e[n]);return t},M=(t,e)=>m(t,y(e));let w=`
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
}`,O={in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},b={type:"code",code:w,component:function(){let[t,e]=(0,c.useState)(!1),n=(0,l.O)(()=>e(!1));return c.createElement(d.x,{maw:200,pos:"relative",style:{display:"flex",justifyContent:"center",margin:"auto"}},c.createElement(u.z,{onClick:()=>e(!0)},"Open dropdown"),c.createElement(p.u,{mounted:t,transition:O,duration:200,timingFunction:"ease",keepMounted:!0},t=>c.createElement(h.X,{shadow:"md",p:"xl",h:120,pos:"absolute",top:0,left:0,right:0,ref:n,style:M(x({},t),{zIndex:1})},"Dropdown")))}},P=(0,i.A)(s.us.Transition);function E(t){let e=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,r.ah)(),t.components),{Demo:n}=e;return n||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"premade-transitions",children:"Premade transitions"}),"\n",(0,o.jsx)(e.p,{children:"Mantine includes several premade transitions:"}),"\n",(0,o.jsx)(n,{data:a.p}),"\n",(0,o.jsxs)(e.p,{children:["To use one of them set ",(0,o.jsx)(e.code,{children:"transition"})," property to one of these values:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:'import { Transition } from \'@mantine/core\';\n\nfunction Demo({ opened }: { opened: boolean }) {\n  return (\n    <Transition mounted={opened} transition="fade" duration={400} timingFunction="ease">\n      {(styles) => <div style={styles}>Your modal</div>}\n    </Transition>\n  );\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"custom-transitions",children:"Custom transitions"}),"\n",(0,o.jsxs)(e.p,{children:["You can create your own transition. ",(0,o.jsx)(e.code,{children:"transition"})," is an object with 4 properties:"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"in"})," – styles for mounted state"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"out"})," – styles for unmounted state"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"common"})," (optional) – styles for both mounted and unmounted states"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"transitionProperty"})," – properties which participate in transition"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:b})]})}var Z=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(P,Object.assign({},t,{children:(0,o.jsx)(E,t)}))}},88826:function(t,e,n){"use strict";n.d(e,{p:function(){return l}});var o=n(67294),r=n(40342),i=n(43245),s=n(41283),a=n(23733),c=n(74378);let l={type:"code",component:function(){let t=(0,r.X)(i.p).map(t=>o.createElement(s.u,{key:t,label:t,transitionProps:{transition:t,duration:300}},o.createElement(a.C,{variant:"light"},t)));return o.createElement(c.Z,{justify:"center",style:{cursor:"default"}},t)}}}},function(t){t.O(0,[2411,7437,6679,9774,2888,179],function(){return t(t.s=59331)}),_N_E=t.O()}]);