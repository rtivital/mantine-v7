(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[451],{37189:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-swatch",function(){return t(97205)}])},97205:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return C}});var n=t(85893),r=t(11151),c=t(34940),a=t(25263),l=t(67294),i=t(74378),h=t(87578);let s=`
import { ColorSwatch, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <ColorSwatch color="#009790" />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" />
      <ColorSwatch color="var(--mantine-color-orange-5)" />
    </Group>
  );
}
`,u={type:"code",component:function(){return l.createElement(i.Z,null,l.createElement(h.b,{color:"#009790"}),l.createElement(h.b,{color:"rgba(234, 22, 174, 0.5)"}),l.createElement(h.b,{color:"var(--mantine-color-orange-5)"}))},centered:!0,code:s};var p=t(17723);let m=`
import { useState } from 'react';
import { ColorSwatch, CheckIcon } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(true);

  return (
    <ColorSwatch
      component="button"
      color="var(--mantine-color-grape-6)"
      onClick={() => setChecked((c) => !c)}
      style={{ color: '#fff', cursor: 'pointer' }}
    >
      {checked && <CheckIcon style={{ width: '0.8rem', height: '0.8rem' }} />}
    </ColorSwatch>
  );
}
`,d={type:"code",code:m,centered:!0,component:function(){let[e,o]=(0,l.useState)(!0);return l.createElement(h.b,{component:"button",color:"var(--mantine-color-grape-6)",onClick:()=>o(e=>!e),c:"white",style:{cursor:"pointer"}},e&&l.createElement(p.n,{style:{width:"0.8rem",height:"0.8rem"}}))}},f=(0,c.A)(a.us.ColorSwatch);function w(e){let o=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,r.ah)(),e.components),{Demo:t}=o;return t||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t,{data:u}),"\n",(0,n.jsx)(o.h2,{id:"component-prop",children:"Component prop"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"ColorSwatch"})," is a ",(0,n.jsx)(o.a,{href:"/guides/polymorphic",children:"polymorphic"})," component, you can change root element\nwith ",(0,n.jsx)(o.code,{children:"component"})," prop:"]}),"\n",(0,n.jsx)(t,{data:d})]})}var C=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(f,Object.assign({},e,{children:(0,n.jsx)(w,e)}))}}},function(e){e.O(0,[4878,9341,4940,9774,2888,179],function(){return e(e.s=37189)}),_N_E=e.O()}]);