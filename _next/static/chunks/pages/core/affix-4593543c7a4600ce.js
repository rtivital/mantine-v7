(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[831],{81858:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/affix",function(){return o(18583)}])},18583:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return z}});var n=o(85893),i=o(11151),r=o(34940),l=o(25263),s=o(67294),a=(0,o(54764).Z)("arrow-up","IconArrowUp",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 11l-6 -6",key:"svg-1"}],["path",{d:"M6 11l6 -6",key:"svg-2"}]]),c=o(99440);function f(){return"undefined"!=typeof window?{x:window.pageXOffset,y:window.pageYOffset}:{x:0,y:0}}function d({x:t,y:e}){if("undefined"!=typeof window){let o={behavior:"smooth"};"number"==typeof t&&(o.left=t),"number"==typeof e&&(o.top=e),window.scrollTo(o)}}var u=o(77048),h=o(59312),p={root:"mantine-gChJ7hu"},m=o(2303),x=o(13279),w=o(75144),y=o(35577),g=o(89123),b=o(94873),v=o(95553),E=o(46393);let A={position:{bottom:0,right:0},zIndex:(0,x.w)("modal"),withinPortal:!0},j=(0,v.Z)((t,{zIndex:e,position:o})=>({root:{"--affix-z-index":null==e?void 0:e.toString(),"--affix-top":(0,E.h)(null==o?void 0:o.top),"--affix-left":(0,E.h)(null==o?void 0:o.left),"--affix-bottom":(0,E.h)(null==o?void 0:o.bottom),"--affix-right":(0,E.h)(null==o?void 0:o.right)}})),_=(0,w.d)((t,e)=>{let o=(0,y.w)("Affix",A,t),{classNames:n,className:i,style:r,styles:l,unstyled:a,vars:c,portalProps:f,zIndex:d,withinPortal:u}=o,x=(0,h._T)(o,["classNames","className","style","styles","unstyled","vars","portalProps","zIndex","withinPortal"]),w=(0,g.y)({name:"Affix",classes:p,props:o,className:i,style:r,classNames:n,styles:l,unstyled:a,vars:c,varsResolver:j});return s.createElement(m.q,Object.assign({},f,{withinPortal:u}),s.createElement(b.x,Object.assign({ref:e},w("root"),x)))});_.displayName="@mantine/core/Affix";var T=o(45493),k=o(43406);let S=`
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
`,N={type:"code",code:S,component:function(){let[t,e]=function(){let[t,e]=(0,s.useState)({x:0,y:0});return(0,c.s)("scroll",()=>e(f())),(0,c.s)("resize",()=>e(f())),(0,s.useEffect)(()=>{e(f())},[]),[t,d]}();return s.createElement(s.Fragment,null,s.createElement(u.x,{ta:"center"},"Affix is located at the bottom of the screen, scroll to see it"),s.createElement(_,{position:{bottom:20,right:20}},s.createElement(T.u,{transition:"slide-up",mounted:t.y>0},t=>s.createElement(k.z,{leftSection:s.createElement(a,{style:{width:(0,E.h)(16),height:(0,E.h)(16)}}),style:t,onClick:()=>e({y:0})},"Scroll to top"))))}},O=(0,r.A)(l.us.Affix);function P(t){let e=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,i.ah)(),t.components),{Demo:o}=e;return o||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"Affix"})," renders a div element with a fixed position inside the ",(0,n.jsx)(e.a,{href:"/core/portal",children:"Portal"})," component.\nUse it to display elements fixed at any position on the screen, for example, scroll to top button:"]}),"\n",(0,n.jsx)(o,{data:N})]})}var z=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(O,Object.assign({},t,{children:(0,n.jsx)(P,t)}))}}},function(t){t.O(0,[5664,9341,4831,9774,2888,179],function(){return t(t.s=81858)}),_N_E=t.O()}]);