(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[831],{81858:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/affix",function(){return o(18583)}])},18583:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return L}});var n=o(85893),r=o(11151),i=o(34940),l=o(25263),s=o(67294),a=(0,o(54764).Z)("arrow-up","IconArrowUp",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 11l-6 -6",key:"svg-1"}],["path",{d:"M6 11l6 -6",key:"svg-2"}]]),c=o(99440);function f(){return"undefined"!=typeof window?{x:window.pageXOffset,y:window.pageYOffset}:{x:0,y:0}}function u({x:e,y:t}){if("undefined"!=typeof window){let o={behavior:"smooth"};"number"==typeof e&&(o.left=e),"number"==typeof t&&(o.top=t),window.scrollTo(o)}}var d=o(77048),p={root:"mantine-gChJ7hu"},m=o(2303),h=o(13279),x=o(75144),w=o(35577),y=o(89123),b=o(94873),v=o(95553),g=o(46393),E=Object.defineProperty,j=Object.defineProperties,O=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,P=(e,t,o)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,S=(e,t)=>{for(var o in t||(t={}))_.call(t,o)&&P(e,o,t[o]);if(A)for(var o of A(t))k.call(t,o)&&P(e,o,t[o]);return e},T=(e,t)=>j(e,O(t)),N=(e,t)=>{var o={};for(var n in e)_.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&A)for(var n of A(e))0>t.indexOf(n)&&k.call(e,n)&&(o[n]=e[n]);return o};let I={position:{bottom:0,right:0},zIndex:(0,h.w)("modal"),withinPortal:!0},z=(0,v.Z)((e,{zIndex:t,position:o})=>({root:{"--affix-z-index":null==t?void 0:t.toString(),"--affix-top":(0,g.h)(null==o?void 0:o.top),"--affix-left":(0,g.h)(null==o?void 0:o.left),"--affix-bottom":(0,g.h)(null==o?void 0:o.bottom),"--affix-right":(0,g.h)(null==o?void 0:o.right)}})),C=(0,x.d)((e,t)=>{let o=(0,w.w)("Affix",I,e),{classNames:n,className:r,style:i,styles:l,unstyled:a,vars:c,portalProps:f,zIndex:u,withinPortal:d}=o,h=N(o,["classNames","className","style","styles","unstyled","vars","portalProps","zIndex","withinPortal"]),x=(0,y.y)({name:"Affix",classes:p,props:o,className:r,style:i,classNames:n,styles:l,unstyled:a,vars:c,varsResolver:z});return s.createElement(m.q,T(S({},f),{withinPortal:d}),s.createElement(b.x,S(S({ref:t},x("root")),h)))});C.displayName="@mantine/core/Affix";var U=o(45493),B=o(43406);let D=`
import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Text, Transition, rem } from '@mantine/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Text ta="center">Affix is located at the bottom of the screen, scroll to see it</Text>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={<IconArrowUp style={{ width: rem(16), height: rem(16) }} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
`,M={type:"code",code:D,component:function(){let[e,t]=function(){let[e,t]=(0,s.useState)({x:0,y:0});return(0,c.s)("scroll",()=>t(f())),(0,c.s)("resize",()=>t(f())),(0,s.useEffect)(()=>{t(f())},[]),[e,u]}();return s.createElement(s.Fragment,null,s.createElement(d.x,{ta:"center"},"Affix is located at the bottom of the screen, scroll to see it"),s.createElement(C,{position:{bottom:20,right:20}},s.createElement(U.u,{transition:"slide-up",mounted:e.y>0},e=>s.createElement(B.z,{leftSection:s.createElement(a,{style:{width:(0,g.h)(16),height:(0,g.h)(16)}}),style:e,onClick:()=>t({y:0})},"Scroll to top"))))}},X=(0,i.A)(l.us.Affix);function F(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,r.ah)(),e.components),{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Affix"})," renders a div element with a fixed position inside the ",(0,n.jsx)(t.a,{href:"/core/portal",children:"Portal"})," component.\nUse it to display elements fixed at any position on the screen, for example, scroll to top button:"]}),"\n",(0,n.jsx)(o,{data:M})]})}var L=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(X,Object.assign({},e,{children:(0,n.jsx)(F,e)}))}},99440:function(e,t,o){"use strict";o.d(t,{s:function(){return r}});var n=o(67294);function r(e,t,o){(0,n.useEffect)(()=>(window.addEventListener(e,t,o),()=>window.removeEventListener(e,t,o)),[e,t])}}},function(e){e.O(0,[5664,9341,4940,9774,2888,179],function(){return e(e.s=81858)}),_N_E=e.O()}]);