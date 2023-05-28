(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[451],{37189:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-swatch",function(){return t(48976)}])},48976:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return S}});var n=t(85893),r=t(11151),c=t(34940),a=t(25263),i=t(67294),l=t(74378),h=t(87578);let s=`
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
`,u={type:"code",component:function(){return i.createElement(l.Z,null,i.createElement(h.b,{color:"#009790"}),i.createElement(h.b,{color:"rgba(234, 22, 174, 0.5)"}),i.createElement(h.b,{color:"var(--mantine-color-orange-5)"}))},centered:!0,code:s},d=`
import { ColorSwatch } from '@mantine/core';

function Demo() {
  return <ColorSwatch color="rgba(255, 255, 255, 0.7)"{{props}} />;
}
`,m={type:"configurator",component:function(e){return i.createElement(h.b,Object.assign({color:"rgba(255, 255, 255, 0.7)"},e))},code:d,centered:!0,controls:[{type:"boolean",prop:"withShadow",initialValue:!0,libraryValue:!0}]};var p=t(17723),w=t(46393);let f=`
import { useState } from 'react';
import { ColorSwatch, CheckIcon, rem } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(true);

  return (
    <ColorSwatch
      component="button"
      color="var(--mantine-color-grape-6)"
      onClick={() => setChecked((c) => !c)}
      style={{ color: '#fff', cursor: 'pointer' }}
    >
      {checked && <CheckIcon style={{ width: rem(12), height: rem(12) }} />}
    </ColorSwatch>
  );
}
`,b={type:"code",code:f,centered:!0,component:function(){let[e,o]=(0,i.useState)(!0);return i.createElement(h.b,{component:"button",color:"var(--mantine-color-grape-6)",onClick:()=>o(e=>!e),c:"white",style:{cursor:"pointer"}},e&&i.createElement(p.n,{style:{width:(0,w.h)(12),height:(0,w.h)(12)}}))}},g=(0,c.A)(a.us.ColorSwatch);function C(e){let o=Object.assign({h2:"h2",p:"p",code:"code"},(0,r.ah)(),e.components),{Demo:t,Polymorphic:c}=o;return t||j("Demo",!0),c||j("Polymorphic",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t,{data:u}),"\n",(0,n.jsx)(o.h2,{id:"withshadow",children:"withShadow"}),"\n",(0,n.jsxs)(o.p,{children:["By default, ",(0,n.jsx)(o.code,{children:"ColorSwatch"})," has an inner box-shadow to make it more visible on light backgrounds,\nyou can disable it by setting ",(0,n.jsx)(o.code,{children:"withShadow={false}"})," prop:"]}),"\n",(0,n.jsx)(t,{data:m}),"\n",(0,n.jsx)(c,{defaultElement:"div",changeToElement:"a",component:"ColorSwatch",withNext:!0}),"\n",(0,n.jsx)(t,{data:b})]})}var S=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(g,Object.assign({},e,{children:(0,n.jsx)(C,e)}))};function j(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=37189)}),_N_E=e.O()}]);