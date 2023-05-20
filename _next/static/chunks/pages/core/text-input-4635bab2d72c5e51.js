(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2537],{19636:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/text-input",function(){return r(52896)}])},52896:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return P}});var n=r(85893),i=r(11151),l=r(34940),o=r(25263),a=r(67294),u=r(31577),p=r(51343),c=Object.defineProperty,s=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&f(e,r,t[r]);if(m)for(var r of m(t))h.call(t,r)&&f(e,r,t[r]);return e},x=(e,t)=>s(e,d(t));let g=`
import { TextInput } from '@mantine/core';


function Demo() {
  return (
    <TextInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,V={type:"configurator",component:function(e){return a.createElement(u.o,x(y({},e),{placeholder:"Input placeholder"}))},code:g,centered:!0,maxWidth:340,controls:p.pc};var I=r(46393),j=r(93693);let v=`
import { TextInput, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  return (
    <>
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your email"
        placeholder="Your email"
      />
      <TextInput
        mt="md"
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your email"
        placeholder="Your email"
      />
    </>
  );
}
`,E={type:"code",component:function(){let e=a.createElement(j.Z,{style:{width:(0,I.h)(16),height:(0,I.h)(16)}});return a.createElement(a.Fragment,null,a.createElement(u.o,{leftSectionPointerEvents:"none",leftSection:e,label:"Your email",placeholder:"Your email"}),a.createElement(u.o,{mt:"md",rightSectionPointerEvents:"none",rightSection:e,label:"Your email",placeholder:"Your email"}))},maxWidth:340,centered:!0,code:v},T=`
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput label="Boolean error" placeholder="Boolean error" error />
      <TextInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
`,w={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(u.o,{label:"Boolean error",placeholder:"Boolean error",error:!0}),a.createElement(u.o,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"}))},maxWidth:340,centered:!0,code:T},O=`
import { TextInput } from '@mantine/core';

function Demo() {
  return <TextInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`,D={type:"code",component:function(){return a.createElement(u.o,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:O},S=(0,l.A)(o.us.TextInput);function _(e){let t=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,i.ah)(),e.components),{InputFeatures:r,Demo:l,GetElementRef:o,InputAccessibility:a}=t;return l||k("Demo",!0),o||k("GetElementRef",!0),a||k("InputAccessibility",!0),r||k("InputFeatures",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r,{component:"TextInput",element:"input"}),"\n",(0,n.jsx)(l,{data:V}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { TextInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <TextInput value={value} onChange={(event) => setValue(event.currentTarget.value)} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"sections",children:"Sections"}),"\n",(0,n.jsx)(l,{data:E}),"\n",(0,n.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,n.jsx)(l,{data:w}),"\n",(0,n.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,n.jsx)(l,{data:D}),"\n",(0,n.jsx)(o,{component:"TextInput",refType:"input"}),"\n",(0,n.jsx)(a,{component:"TextInput"})]})}var P=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(S,Object.assign({},e,{children:(0,n.jsx)(_,e)}))};function k(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},51343:function(e,t,r){"use strict";r.d(t,{Mt:function(){return n},nW:function(){return i},pc:function(){return l}});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],i=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[5664,9341,4940,9774,2888,179],function(){return e(e.s=19636)}),_N_E=e.O()}]);