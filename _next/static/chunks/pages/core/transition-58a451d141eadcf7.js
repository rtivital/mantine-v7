(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2275],{59331:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/transition",function(){return n(86898)}])},86898:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var o=n(85893),r=n(11151),i=n(34940),a=n(25263),s=n(88826),c=n(67294),l=n(92612),d=n(94873),u=n(43406),p=n(45493),m=n(54777);let f=`
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
}`,h={in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},g={type:"code",code:f,component:function(){let[e,t]=(0,c.useState)(!1),n=(0,l.O)(()=>t(!1));return c.createElement(d.x,{maw:200,pos:"relative",style:{display:"flex",justifyContent:"center",margin:"auto"}},c.createElement(u.z,{onClick:()=>t(!0)},"Open dropdown"),c.createElement(p.u,{mounted:e,transition:h,duration:200,timingFunction:"ease",keepMounted:!0},e=>c.createElement(m.X,{shadow:"md",p:"xl",h:120,pos:"absolute",top:0,left:0,right:0,ref:n,style:Object.assign(Object.assign({},e),{zIndex:1})},"Dropdown")))}},y=(0,i.A)(a.us.Transition);function b(e){let t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,r.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"premade-transitions",children:"Premade transitions"}),"\n",(0,o.jsx)(t.p,{children:"Mantine includes several premade transitions:"}),"\n",(0,o.jsx)(n,{data:s.p}),"\n",(0,o.jsxs)(t.p,{children:["To use one of them set ",(0,o.jsx)(t.code,{children:"transition"})," property to one of these values:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'import { Transition } from \'@mantine/core\';\n\nfunction Demo({ opened }: { opened: boolean }) {\n  return (\n    <Transition mounted={opened} transition="fade" duration={400} timingFunction="ease">\n      {(styles) => <div style={styles}>Your modal</div>}\n    </Transition>\n  );\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"custom-transitions",children:"Custom transitions"}),"\n",(0,o.jsxs)(t.p,{children:["You can create your own transition. ",(0,o.jsx)(t.code,{children:"transition"})," is an object with 4 properties:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"in"})," – styles for mounted state"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"out"})," – styles for unmounted state"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"common"})," (optional) – styles for both mounted and unmounted states"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"transitionProperty"})," – properties which participate in transition"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:g})]})}var x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(y,Object.assign({},e,{children:(0,o.jsx)(b,e)}))}},23733:function(e,t,n){"use strict";n.d(t,{C:function(){return h}});var o=n(59312),r=n(67294),i={root:"mantine-WM8AqtG","root--dot":"mantine-d3u1-wu",label:"mantine-LN56t-P",section:"mantine-cbpGUul"},a=n(70656),s=n(35577),c=n(89123),l=n(94873),d=n(95553),u=n(71350),p=n(94975);let m={size:"md",radius:"xl",variant:"filled"},f=(0,d.Z)((e,{radius:t,color:n,gradient:o,variant:r,size:i})=>{let a=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:o,variant:r});return{root:{"--badge-height":(0,u.ap)(i,"badge-height"),"--badge-padding-x":(0,u.ap)(i,"badge-padding-x"),"--badge-fz":(0,u.ap)(i,"badge-fz"),"--badge-radius":(0,u.H5)(t),"--badge-bg":a.background,"--badge-color":a.color,"--badge-bd":a.border,"--badge-dot-color":"dot"===r?(0,p.p)(n,e):void 0}}}),h=(0,a.b)((e,t)=>{let n=(0,s.w)("Badge",m,e),{classNames:a,className:d,style:u,styles:p,unstyled:h,vars:g,radius:y,color:b,gradient:x,leftSection:j,rightSection:v,children:w,variant:O,fullWidth:E}=n,k=(0,o._T)(n,["classNames","className","style","styles","unstyled","vars","radius","color","gradient","leftSection","rightSection","children","variant","fullWidth"]),P=(0,c.y)({name:"Badge",props:n,classes:i,className:d,style:u,classNames:a,styles:p,unstyled:h,vars:g,varsResolver:f});return r.createElement(l.x,Object.assign({variant:O,mod:{block:E}},P("root",{variant:O}),{ref:t},k),j&&r.createElement("span",Object.assign({},P("section"),{"data-position":"left"}),j),r.createElement("span",Object.assign({},P("label")),w),v&&r.createElement("span",Object.assign({},P("section"),{"data-position":"right"}),v))});h.displayName="@mantine/core/Badge"},54777:function(e,t,n){"use strict";n.d(t,{X:function(){return f}});var o=n(59312),r=n(67294),i={root:"mantine-lqpFSmK"},a=n(71350),s=n(70656),c=n(35577),l=n(89123),d=n(94873),u=n(95553);let p={},m=(0,u.Z)((e,{radius:t,shadow:n})=>({root:{"--paper-radius":(0,a.H5)(t),"--paper-shadow":(0,a.Xj)(n)}})),f=(0,s.b)((e,t)=>{let n=(0,c.w)("Paper",p,e),{classNames:a,className:s,style:u,styles:f,unstyled:h,withBorder:g,vars:y,radius:b,shadow:x,variant:j}=n,v=(0,o._T)(n,["classNames","className","style","styles","unstyled","withBorder","vars","radius","shadow","variant"]),w=(0,l.y)({name:"Paper",props:n,classes:i,className:s,style:u,classNames:a,styles:f,unstyled:h,vars:y,varsResolver:m});return r.createElement(d.x,Object.assign({ref:t,mod:{"data-with-border":g}},w("root"),{variant:j},v))});f.displayName="@mantine/core/Paper"},88826:function(e,t,n){"use strict";n.d(t,{p:function(){return l}});var o=n(67294),r=n(40342),i=n(43245),a=n(41283),s=n(23733),c=n(74378);let l={type:"code",component:function(){let e=(0,r.X)(i.p).map(e=>o.createElement(a.u,{key:e,label:e,transitionProps:{transition:e,duration:300}},o.createElement(s.C,{variant:"light"},e)));return o.createElement(c.Z,{justify:"center",style:{cursor:"default"}},e)}}}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=59331)}),_N_E=e.O()}]);