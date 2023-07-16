(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3478],{82769:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/autocomplete",function(){return o(37170)}])},37170:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return eE}});var r=o(85893),n=o(11151),l=o(34940),a=o(34200),i=o(67294),c=o(35179),s=o(98008),p=o(43154),u=o(14437),d=o(19732),m=o(64485),h=o(39213),b=o(19225),f=o(75144),y=o(35577),g=Object.defineProperty,v=Object.defineProperties,x=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,O=(e,t,o)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,V=(e,t)=>{for(var o in t||(t={}))j.call(t,o)&&O(e,o,t[o]);if(A)for(var o of A(t))w.call(t,o)&&O(e,o,t[o]);return e},S=(e,t)=>v(e,x(t)),D=(e,t)=>{var o={};for(var r in e)j.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&A)for(var r of A(e))0>t.indexOf(r)&&w.call(e,r)&&(o[r]=e[r]);return o};let E={},P=(0,f.d)((e,t)=>{let o=(0,y.w)("Autocomplete",E,e),{classNames:r,styles:n,unstyled:l,vars:a,dropdownOpened:f,defaultDropdownOpened:g,onDropdownClose:v,onDropdownOpen:x,onFocus:A,onBlur:j,onClick:w,onChange:O,data:P,value:k,defaultValue:C,selectFirstOptionOnChange:W,onOptionSubmit:R,comboboxProps:F,readOnly:I,disabled:_,filter:Y,limit:B,withScrollArea:z,maxDropdownHeight:N,size:L}=o,H=D(o,["classNames","styles","unstyled","vars","dropdownOpened","defaultDropdownOpened","onDropdownClose","onDropdownOpen","onFocus","onBlur","onClick","onChange","data","value","defaultValue","selectFirstOptionOnChange","onOptionSubmit","comboboxProps","readOnly","disabled","filter","limit","withScrollArea","maxDropdownHeight","size"]),M=(0,s.R)(P),T=(0,p.g)(M),[U,G]=(0,c.C)({value:k,defaultValue:C,finalValue:"",onChange:O}),$=(0,u.K)({opened:f,defaultOpened:g,onDropdownOpen:x,onDropdownClose:()=>{null==v||v(),$.resetSelectedOption()}}),{resolvedClassNames:Z,resolvedStyles:X}=(0,d.h)({props:o,styles:n,classNames:r});return(0,i.useEffect)(()=>{W&&$.selectFirstOption()},[W,U]),i.createElement(m.h,V({store:$,__staticSelector:"Autocomplete",classNames:Z,styles:X,unstyled:l,onOptionSubmit:e=>{null==R||R(e),G(T[e].label),$.closeDropdown()},size:L},F),i.createElement(m.h.Target,null,i.createElement(h.M,S(V({ref:t},H),{size:L,__staticSelector:"Autocomplete",disabled:_,readOnly:I,value:U,onChange:e=>{G(e.currentTarget.value),$.openDropdown(),W&&$.selectFirstOption()},onFocus:e=>{$.openDropdown(),null==A||A(e)},onBlur:e=>{$.closeDropdown(),null==j||j(e)},onClick:e=>{$.openDropdown(),null==w||w(e)},classNames:Z,styles:X,unstyled:l}))),i.createElement(b.r,{data:M,hidden:I||_,filter:Y,search:U,limit:B,hiddenWhenEmpty:!0,withScrollArea:z,maxDropdownHeight:N}))});P.classes=V(V({},h.M.classes),m.h.classes),P.displayName="@mantine/core/Autocomplete";let k=`
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`,C={type:"code",component:function(){return i.createElement(P,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"]})},code:k,maxWidth:340,centered:!0},W=`
import { Autocomplete, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <Autocomplete
      label="Your country"
      placeholder="Pick value or enter anything"
      data={['Great Britain', 'Russian Federation', 'United States']}
      filter={optionsFilter}
    />
  );
}
`,R=({options:e,search:t})=>{let o=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return o.every(e=>t.some(t=>t.includes(e)))})},F={type:"code",component:function(){return i.createElement(P,{label:"Your country",placeholder:"Pick value or enter anything",data:["Great Britain","Russian Federation","United States"],filter:R})},code:W,maxWidth:340,centered:!0},I=`
import { Autocomplete, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['4 \u2013 React', '1 \u2013 Angular', '3 \u2013 Vue', '2 \u2013 Svelte']}
      filter={optionsFilter}
    />
  );
}
`,_=({options:e,search:t})=>{let o=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return o.sort((e,t)=>e.label.localeCompare(t.label)),o},Y={type:"code",component:function(){return i.createElement(P,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:_})},code:I,maxWidth:340,centered:!0},B=`
import { Autocomplete } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <Autocomplete
      label="100 000 options autocomplete"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
    />
  );
}
`,z=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),N={type:"code",component:function(){return i.createElement(P,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:z})},code:B,maxWidth:340,centered:!0},L=`
import { Autocomplete } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <>
      <Autocomplete
        label="With scroll area (default)"
        placeholder="Pick value or enter anything"
        data={data}
        maxDropdownHeight={200}
      />

      <Autocomplete
        label="With native scroll"
        placeholder="Pick value or enter anything"
        data={data}
        withScrollArea={false}
        styles={{ dropdown: { maxHeight: 200, overflowY: 'auto' } }}
        mt="md"
      />
    </>
  );
}
`,H=Array(100).fill(0).map((e,t)=>`Option ${t}`),M={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(P,{label:"With scroll area (default)",placeholder:"Pick value or enter anything",data:H,maxDropdownHeight:200}),i.createElement(P,{label:"With native scroll",placeholder:"Pick value or enter anything",data:H,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"}))},code:L,maxWidth:340,centered:!0},T=`
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Express', 'Django'] },
      ]}
    />
  );
}
`,U={type:"code",component:function(){return i.createElement(P,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:T,maxWidth:340,centered:!0},G=`
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
    />
  );
}
`,$={type:"code",component:function(){return i.createElement(P,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}]})},code:G,maxWidth:340,centered:!0};var Z=o(51343),X=Object.defineProperty,K=Object.defineProperties,q=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,et=(e,t,o)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,eo=(e,t)=>{for(var o in t||(t={}))Q.call(t,o)&&et(e,o,t[o]);if(J)for(var o of J(t))ee.call(t,o)&&et(e,o,t[o]);return e},er=(e,t)=>K(e,q(t));let en=`
import { Autocomplete } from '@mantine/core';


function Demo() {
  return (
    <Autocomplete
      {{props}}
      placeholder="Autocomplete placeholder"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`,el={type:"configurator",component:function(e){return i.createElement(P,er(eo({},e),{placeholder:"Autocomplete placeholder",data:["React","Angular","Vue","Svelte"]}))},code:en,centered:!0,maxWidth:340,controls:Z.pc},ea=`
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      readOnly
    />
  );
}
`,ei={type:"code",component:function(){return i.createElement(P,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:ea,maxWidth:340,centered:!0},ec=`
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      disabled
    />
  );
}
`,es={type:"code",component:function(){return i.createElement(P,{label:"Your favorite library",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:ec,maxWidth:340,centered:!0},ep=`
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <>
      <Autocomplete
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <Autocomplete
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </>
  );
}
`,eu={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(P,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),i.createElement(P,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]}))},maxWidth:340,centered:!0,code:ep};var ed=o(93693),em=o(46393),eh=o(68979),eb=Object.defineProperty,ef=Object.defineProperties,ey=Object.getOwnPropertyDescriptors,eg=Object.getOwnPropertySymbols,ev=Object.prototype.hasOwnProperty,ex=Object.prototype.propertyIsEnumerable,eA=(e,t,o)=>t in e?eb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,ej=(e,t)=>{for(var o in t||(t={}))ev.call(t,o)&&eA(e,o,t[o]);if(eg)for(var o of eg(t))ex.call(t,o)&&eA(e,o,t[o]);return e},ew=(e,t)=>ef(e,ey(t));let eO=`
import { IconAt } from '@tabler/icons-react';
import { Autocomplete, rem } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
     {{props}}
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="Autocomplete"
      description="Description"
      error="Error"
      placeholder="Autocomplete"
      data={['React', 'Angular']}
    />
  );
}
`,eV={type:"styles-api",data:eh.I,component:function(e){return i.createElement(P,ew(ej({},e),{dropdownOpened:!0,leftSection:i.createElement(ed.Z,{style:{width:(0,em.h)(18),height:(0,em.h)(18)},stroke:1.5}),withAsterisk:!0,label:"Autocomplete",description:"Description",placeholder:"Autocomplete",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]}))},code:eO,centered:!0,maxWidth:340},eS=(0,l.A)(a.us.Autocomplete);function eD(e){let t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",a:"a"},(0,n.ah)(),e.components),{ComboboxDisclaimer:o,Demo:l,ComboboxData:a,ComboboxFiltering:i,ComboboxLargeData:c,ComboboxProps:s,InputFeatures:p,StylesApiSelectors:u,GetElementRef:d,InputAccessibility:m}=t;return a||eP("ComboboxData",!0),o||eP("ComboboxDisclaimer",!0),i||eP("ComboboxFiltering",!0),c||eP("ComboboxLargeData",!0),s||eP("ComboboxProps",!0),l||eP("Demo",!0),d||eP("GetElementRef",!0),m||eP("InputAccessibility",!0),p||eP("InputFeatures",!0),u||eP("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{component:"Autocomplete"}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Autocomplete"})," provides user a list of suggestions based on the input,\nhowever user is not limited to suggestions and can type anything."]}),"\n",(0,r.jsx)(l,{data:C}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Autocomplete"})," value must be a string, other types are not supported.\n",(0,r.jsx)(t.code,{children:"onChange"})," function is called with a string value as a single argument."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Autocomplete } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <Autocomplete data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,r.jsx)(a,{component:"Autocomplete"}),"\n",(0,r.jsx)(i,{component:"Autocomplete"}),"\n",(0,r.jsx)(l,{data:F}),"\n",(0,r.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,r.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,r.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,r.jsx)(l,{data:Y}),"\n",(0,r.jsx)(c,{component:"Autocomplete"}),"\n",(0,r.jsx)(l,{data:N}),"\n",(0,r.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,r.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,r.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,r.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,r.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,r.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,r.jsx)(l,{data:M}),"\n",(0,r.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,r.jsx)(l,{data:U}),"\n",(0,r.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,r.jsx)(t.p,{children:"When option is disabled, it cannot be selected and is ignored in keyboard navigation."}),"\n",(0,r.jsx)(l,{data:$}),"\n",(0,r.jsx)(s,{component:"Autocomplete"}),"\n",(0,r.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,r.jsx)(p,{component:"Autocomplete",element:"input"}),"\n",(0,r.jsx)(l,{data:el}),"\n",(0,r.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,r.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,r.jsx)(t.code,{children:"Autocomplete"})," will not show suggestions and will not call ",(0,r.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,r.jsx)(l,{data:ei}),"\n",(0,r.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,r.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,r.jsx)(t.code,{children:"Autocomplete"})," will not show suggestions."]}),"\n",(0,r.jsx)(l,{data:es}),"\n",(0,r.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,r.jsx)(l,{data:eu}),"\n",(0,r.jsx)(u,{component:"Autocomplete"}),"\n",(0,r.jsx)(l,{data:eV}),"\n",(0,r.jsx)(d,{component:"Autocomplete",refType:"input"}),"\n",(0,r.jsx)(m,{component:"Autocomplete"})]})}var eE=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(eS,Object.assign({},e,{children:(0,r.jsx)(eD,e)}))};function eP(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},51343:function(e,t,o){"use strict";o.d(t,{Mt:function(){return r},nW:function(){return n},pc:function(){return l}});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],n=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[2411,7437,4485,4259,9774,2888,179],function(){return e(e.s=82769)}),_N_E=e.O()}]);