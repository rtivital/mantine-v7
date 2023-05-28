(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2537],{19636:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/text-input",function(){return n(52896)}])},52896:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(85893),i=n(11151),l=n(34940),a=n(25263),o=n(67294),u=n(31577),p=n(51343);let c=`
import { TextInput } from '@mantine/core';


function Demo() {
  return (
    <TextInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,s={type:"configurator",component:function(e){return o.createElement(u.o,Object.assign({},e,{placeholder:"Input placeholder"}))},code:c,centered:!0,maxWidth:340,controls:p.pc};var d=n(46393),m=n(93693);let h=`
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
`,b={type:"code",component:function(){let e=o.createElement(m.Z,{style:{width:(0,d.h)(16),height:(0,d.h)(16)}});return o.createElement(o.Fragment,null,o.createElement(u.o,{leftSectionPointerEvents:"none",leftSection:e,label:"Your email",placeholder:"Your email"}),o.createElement(u.o,{mt:"md",rightSectionPointerEvents:"none",rightSection:e,label:"Your email",placeholder:"Your email"}))},maxWidth:340,centered:!0,code:h},f=`
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
`,y={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(u.o,{label:"Boolean error",placeholder:"Boolean error",error:!0}),o.createElement(u.o,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"}))},maxWidth:340,centered:!0,code:f},x=`
import { TextInput } from '@mantine/core';

function Demo() {
  return <TextInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`,V={type:"code",component:function(){return o.createElement(u.o,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:x},g=(0,l.A)(a.us.TextInput);function I(e){let t=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,i.ah)(),e.components),{InputFeatures:n,Demo:l,GetElementRef:a,InputAccessibility:o}=t;return l||E("Demo",!0),a||E("GetElementRef",!0),o||E("InputAccessibility",!0),n||E("InputFeatures",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{component:"TextInput",element:"input"}),"\n",(0,r.jsx)(l,{data:s}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { TextInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <TextInput value={value} onChange={(event) => setValue(event.currentTarget.value)} />;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"sections",children:"Sections"}),"\n",(0,r.jsx)(l,{data:b}),"\n",(0,r.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,r.jsx)(l,{data:y}),"\n",(0,r.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,r.jsx)(l,{data:V}),"\n",(0,r.jsx)(a,{component:"TextInput",refType:"input"}),"\n",(0,r.jsx)(o,{component:"TextInput"})]})}var v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(g,Object.assign({},e,{children:(0,r.jsx)(I,e)}))};function E(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},51343:function(e,t,n){"use strict";n.d(t,{Mt:function(){return r},nW:function(){return i},pc:function(){return l}});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],i=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=19636)}),_N_E=e.O()}]);