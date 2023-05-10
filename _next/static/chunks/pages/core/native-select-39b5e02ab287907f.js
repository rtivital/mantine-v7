(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[585],{33181:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/native-select",function(){return t(46894)}])},46894:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return F}});var a=t(85893),r=t(11151),l=t(34940),i=t(25263),o=t(67294),s=t(94042),c=t(51343),d=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,b=(e,n,t)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,v=(e,n)=>{for(var t in n||(n={}))m.call(n,t)&&b(e,t,n[t]);if(h)for(var t of h(n))g.call(n,t)&&b(e,t,n[t]);return e},x=(e,n)=>u(e,p(n));let j=`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect{{props}} data={['React', 'Angular', 'Vue']} />;
}
`,f={type:"configurator",component:function(e){return o.createElement(s.p,x(v({},e),{data:["React","Angular","Vue"]}))},code:j,centered:!0,maxWidth:340,controls:c.pc},y=`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect
      data={[
        {
          group: 'Frontend libraries',
          items: [
            { label: 'React', value: 'react' },
            { label: 'Angular', value: 'angular' },
            { label: 'Vue', value: 'vue', disabled: true },
          ],
        },
        {
          group: 'Backend libraries',
          items: [
            { label: 'Express', value: 'express' },
            { label: 'Koa', value: 'koa' },
            { label: 'Django', value: 'django' },
          ],
        },
      ]}
    />
  );
}
`,V={type:"code",component:function(){return o.createElement(s.p,{data:[{group:"Frontend libraries",items:[{label:"React",value:"react"},{label:"Angular",value:"angular"},{label:"Vue",value:"vue",disabled:!0}]},{group:"Backend libraries",items:[{label:"Express",value:"express"},{label:"Koa",value:"koa"},{label:"Django",value:"django"}]}]})},maxWidth:340,centered:!0,code:y},E=`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect label="With children options">
      <optgroup label="Frontend libraries">
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue" disabled>
          Vue
        </option>
      </optgroup>

      <optgroup label="Backend libraries">
        <option value="express">Express</option>
        <option value="koa">Koa</option>
        <option value="django">Django</option>
      </optgroup>
    </NativeSelect>
  );
}
`,S={type:"code",component:function(){return o.createElement(s.p,{label:"With children options"},o.createElement("optgroup",{label:"Frontend libraries"},o.createElement("option",{value:"react"},"React"),o.createElement("option",{value:"angular"},"Angular"),o.createElement("option",{value:"vue",disabled:!0},"Vue")),o.createElement("optgroup",{label:"Backend libraries"},o.createElement("option",{value:"express"},"Express"),o.createElement("option",{value:"koa"},"Koa"),o.createElement("option",{value:"django"},"Django")))},maxWidth:340,centered:!0,code:E};var N=(0,t(54764).Z)("hash","IconHash",[["path",{d:"M5 9l14 0",key:"svg-0"}],["path",{d:"M5 15l14 0",key:"svg-1"}],["path",{d:"M11 4l-4 16",key:"svg-2"}],["path",{d:"M17 4l-4 16",key:"svg-3"}]]),w=t(62283);let A=`
import { NativeSelect } from '@mantine/core';
import { IconChevronDown, IconHash } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NativeSelect
        leftSection={<IconHash style={{ width: '1rem', height: '1rem' }} />}
        leftSectionPointerEvents="none"
        label="Left section"
        data={['React', 'Angular']}
      />

      <NativeSelect
        rightSection={<IconChevronDown style={{ width: '1rem', height: '1rem' }} />}
        label="Right section"
        data={['React', 'Angular']}
        mt="md"
      />
    </>
  );
}
`,R={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(s.p,{leftSection:o.createElement(N,{style:{width:"1rem",height:"1rem"}}),leftSectionPointerEvents:"none",label:"Left section",data:["React","Angular"]}),o.createElement(s.p,{rightSection:o.createElement(w.Z,{style:{width:"1rem",height:"1rem"}}),label:"Right section",data:["React","Angular"],mt:"md"}))},maxWidth:340,centered:!0,code:A},k=`
function Demo() {
  return <NativeSelect disabled data={['React', 'Angular']} label="Disabled NativeSelect" />;
}
`,D={type:"code",component:function(){return o.createElement(s.p,{disabled:!0,data:["React","Angular"],label:"Disabled NativeSelect"})},maxWidth:340,centered:!0,code:k},I=`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <NativeSelect error label="Boolean error" data={['React', 'Angular']} />
      <NativeSelect
        error="Error message"
        label="React node error"
        data={['React', 'Angular']}
        mt="md"
      />
    </>
  );
}
`,O={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(s.p,{error:!0,label:"Boolean error",data:["React","Angular"]}),o.createElement(s.p,{error:"Error message",label:"React node error",data:["React","Angular"],mt:"md"}))},maxWidth:340,centered:!0,code:I},_=(0,l.A)(i.us.NativeSelect);function W(e){let n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li",h3:"h3",ol:"ol"},(0,r.ah)(),e.components),{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"NativeSelect"})," component supports ",(0,a.jsx)(n.a,{href:"/core/input",children:"Input and Input.Wrapper"})," components features\nand all ",(0,a.jsx)(n.code,{children:"select"})," element props."]}),"\n",(0,a.jsx)(t,{data:f}),"\n",(0,a.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n\n  return (\n    <NativeSelect\n      value={value}\n      onChange={(event) => setValue(event.currentTarget.value)}\n      data={['React', 'Angular', 'Svelte', 'Vue']}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"adding-options",children:"Adding options"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"NativeSelect"})," allows to pass options in two ways:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"data"})," prop array"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"children"})," prop with ",(0,a.jsx)(n.code,{children:"option"})," components"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Note that if ",(0,a.jsx)(n.code,{children:"children"})," is used, ",(0,a.jsx)(n.code,{children:"data"})," will be ignored."]}),"\n",(0,a.jsx)(n.h3,{id:"data-prop",children:"data prop"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"data"})," prop accepts values in one of the following formats:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Array of strings:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"data={['React', 'Angular', 'Svelte', 'Vue']}\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["Array of objects with ",(0,a.jsx)(n.code,{children:"label"}),", ",(0,a.jsx)(n.code,{children:"value"})," and ",(0,a.jsx)(n.code,{children:"disabled"})," keys:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"data={[\n  { label: 'React', value: 'react' },\n  { label: 'Angular', value: 'angular' },\n  { label: 'Svelte', value: 'svelte', disabled: true },\n  { label: 'Vue', value: 'vue' },\n]}\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Array of grouped options (string format):"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"data={[\n  {\n    group: 'Frontend libraries',\n    items: ['React', 'Angular', 'Svelte', 'Vue'],\n  },\n  {\n    group: 'Backend libraries',\n    items: ['Express', 'Koa', 'Django'],\n  },\n]}\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Array of grouped options (object format):"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"data={[\n  {\n    group: 'Frontend libraries',\n    items: [\n      { label: 'React', value: 'react' },\n      { label: 'Angular', value: 'angular' },\n      { label: 'Vue', value: 'vue', disabled: true },\n    ],\n  },\n  {\n    group: 'Backend libraries',\n    items: [\n      { label: 'Express', value: 'express' },\n      { label: 'Koa', value: 'koa' },\n      { label: 'Django', value: 'django' },\n    ],\n  },\n]}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Example of ",(0,a.jsx)(n.code,{children:"data"})," prop with array of grouped options:"]}),"\n",(0,a.jsx)(t,{data:V}),"\n",(0,a.jsx)(n.h3,{id:"children-options",children:"children options"}),"\n",(0,a.jsxs)(n.p,{children:["To add options with ",(0,a.jsx)(n.code,{children:"children"})," prop, use ",(0,a.jsx)(n.code,{children:"option"})," elements to add options and ",(0,a.jsx)(n.code,{children:"optgroup"}),"\nelements to group them:"]}),"\n",(0,a.jsx)(t,{data:S}),"\n",(0,a.jsx)(n.h2,{id:"left-and-right-sections",children:"Left and right sections"}),"\n",(0,a.jsx)(t,{data:R}),"\n",(0,a.jsx)(n.h2,{id:"disabled",children:"disabled"}),"\n",(0,a.jsx)(t,{data:D}),"\n",(0,a.jsx)(n.h2,{id:"error",children:"error"}),"\n",(0,a.jsx)(t,{data:O})]})}var F=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(_,Object.assign({},e,{children:(0,a.jsx)(W,e)}))}},62283:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var a=(0,t(54764).Z)("chevron-down","IconChevronDown",[["path",{d:"M6 9l6 6l6 -6",key:"svg-0"}]])},51343:function(e,n,t){"use strict";t.d(n,{Mt:function(){return a},nW:function(){return r},pc:function(){return l}});let a=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],r=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"",libraryValue:null}]}},function(e){e.O(0,[4878,9341,4940,9774,2888,179],function(){return e(e.s=33181)}),_N_E=e.O()}]);