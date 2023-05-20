(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[451],{37189:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-swatch",function(){return t(48976)}])},48976:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return v}});var r=t(85893),n=t(11151),c=t(34940),a=t(25263),l=t(67294),i=t(74378),h=t(87578);let u=`
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
`,s={type:"code",component:function(){return l.createElement(i.Z,null,l.createElement(h.b,{color:"#009790"}),l.createElement(h.b,{color:"rgba(234, 22, 174, 0.5)"}),l.createElement(h.b,{color:"var(--mantine-color-orange-5)"}))},centered:!0,code:u};var p=Object.defineProperty,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,w=(e,o,t)=>o in e?p(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,b=(e,o)=>{for(var t in o||(o={}))m.call(o,t)&&w(e,t,o[t]);if(d)for(var t of d(o))f.call(o,t)&&w(e,t,o[t]);return e};let g=`
import { ColorSwatch } from '@mantine/core';

function Demo() {
  return <ColorSwatch color="rgba(255, 255, 255, 0.7)"{{props}} />;
}
`,y={type:"configurator",component:function(e){return l.createElement(h.b,b({color:"rgba(255, 255, 255, 0.7)"},e))},code:g,centered:!0,controls:[{type:"boolean",prop:"withShadow",initialValue:!0,libraryValue:!0}]};var C=t(17723),j=t(46393);let S=`
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
`,E={type:"code",code:S,centered:!0,component:function(){let[e,o]=(0,l.useState)(!0);return l.createElement(h.b,{component:"button",color:"var(--mantine-color-grape-6)",onClick:()=>o(e=>!e),c:"white",style:{cursor:"pointer"}},e&&l.createElement(C.n,{style:{width:(0,j.h)(12),height:(0,j.h)(12)}}))}},k=(0,c.A)(a.us.ColorSwatch);function x(e){let o=Object.assign({h2:"h2",p:"p",code:"code"},(0,n.ah)(),e.components),{Demo:t,Polymorphic:c}=o;return t||_("Demo",!0),c||_("Polymorphic",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:s}),"\n",(0,r.jsx)(o.h2,{id:"withshadow",children:"withShadow"}),"\n",(0,r.jsxs)(o.p,{children:["By default, ",(0,r.jsx)(o.code,{children:"ColorSwatch"})," has an inner box-shadow to make it more visible on light backgrounds,\nyou can disable it by setting ",(0,r.jsx)(o.code,{children:"withShadow={false}"})," prop:"]}),"\n",(0,r.jsx)(t,{data:y}),"\n",(0,r.jsx)(c,{defaultElement:"div",changeToElement:"a",component:"ColorSwatch",withNext:!0}),"\n",(0,r.jsx)(t,{data:E})]})}var v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(k,Object.assign({},e,{children:(0,r.jsx)(x,e)}))};function _(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[5664,9341,4940,9774,2888,179],function(){return e(e.s=37189)}),_N_E=e.O()}]);