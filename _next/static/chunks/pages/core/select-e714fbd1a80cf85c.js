(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5089],{36307:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/select",function(){return r(2164)}])},2164:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return eT}});var o=r(85893),l=r(11151),n=r(34940),a=r(34200),i=r(67294),c=r(35179),s=r(98008),d=r(43154),u=r(14437),p=r(64485),h=r(39213),m=r(19225),b=r(75144),f=r(35577),y=r(19732),g=Object.defineProperty,v=Object.defineProperties,x=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,O=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,V=(e,t)=>{for(var r in t||(t={}))j.call(t,r)&&O(e,r,t[r]);if(S)for(var r of S(t))w.call(t,r)&&O(e,r,t[r]);return e},k=(e,t)=>v(e,x(t)),P=(e,t)=>{var r={};for(var o in e)j.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&S)for(var o of S(e))0>t.indexOf(o)&&w.call(e,o)&&(r[o]=e[o]);return r};let A={searchable:!1,withCheckIcon:!0,checkIconPosition:"left"},D=(0,b.d)((e,t)=>{let r=(0,f.w)("Select",A,e),{classNames:o,styles:l,unstyled:n,vars:a,dropdownOpened:b,defaultDropdownOpened:g,onDropdownClose:v,onDropdownOpen:x,onFocus:S,onBlur:j,onClick:w,onChange:O,data:D,value:E,defaultValue:C,selectFirstOptionOnChange:R,onOptionSubmit:I,comboboxProps:W,readOnly:F,disabled:Y,filter:_,limit:N,withScrollArea:B,maxDropdownHeight:z,size:M,searchable:L,rightSection:T,checkIconPosition:H,withCheckIcon:U,nothingFoundMessage:G}=r,$=P(r,["classNames","styles","unstyled","vars","dropdownOpened","defaultDropdownOpened","onDropdownClose","onDropdownOpen","onFocus","onBlur","onClick","onChange","data","value","defaultValue","selectFirstOptionOnChange","onOptionSubmit","comboboxProps","readOnly","disabled","filter","limit","withScrollArea","maxDropdownHeight","size","searchable","rightSection","checkIconPosition","withCheckIcon","nothingFoundMessage"]),q=(0,s.R)(D),Z=(0,d.g)(q),[X,K]=(0,c.C)({value:E,defaultValue:C,finalValue:null,onChange:O}),J=X?Z[X]:void 0,[Q,ee]=(0,i.useState)(J?J.label:""),et=(0,u.K)({opened:b,defaultOpened:g,onDropdownOpen:x,onDropdownClose:()=>{null==v||v(),et.resetSelectedOption()}}),{resolvedClassNames:er,resolvedStyles:eo}=(0,y.h)({props:r,styles:l,classNames:o});return(0,i.useEffect)(()=>{R&&et.selectFirstOption()},[R,X]),(0,i.useEffect)(()=>{null===E&&ee(""),"string"==typeof E&&Z[E]&&ee(Z[E].label)},[E]),i.createElement(p.h,V({store:et,__staticSelector:"Select",classNames:er,styles:eo,unstyled:n,onOptionSubmit:e=>{null==I||I(e);let t=Z[e].value===X?null:Z[e].value;K(t),ee(t?Z[e].label:""),et.closeDropdown()},size:M},W),i.createElement(p.h.Target,{targetType:L?"input":"button"},i.createElement(h.M,k(V({ref:t,rightSection:T||i.createElement(p.h.Chevron,{size:M})},$),{size:M,__staticSelector:"Select",disabled:Y,readOnly:F||!L,value:Q,onChange:e=>{ee(e.currentTarget.value),et.openDropdown(),R&&et.selectFirstOption()},onFocus:e=>{L&&et.openDropdown(),null==S||S(e)},onBlur:e=>{L&&et.closeDropdown(),ee(X?Z[X].label:""),null==j||j(e)},onClick:e=>{L?et.openDropdown():et.toggleDropdown(),null==w||w(e)},classNames:er,styles:eo,unstyled:n,pointer:!L}))),i.createElement(m.r,{data:q,hidden:F||Y,filter:_,search:Q,limit:N,hiddenWhenEmpty:!L&&!!G&&0!==Q.trim().length,withScrollArea:B,maxDropdownHeight:z,filterOptions:L&&(null==J?void 0:J.label)!==Q,value:X,checkIconPosition:H,withCheckIcon:U,nothingFoundMessage:G}))});D.classes=V(V({},h.M.classes),p.h.classes),D.displayName="@mantine/core/Select";let E=`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`,C={type:"code",component:function(){return i.createElement(D,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"]})},code:E,maxWidth:340,centered:!0},R=`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
    />
  );
}
`,I={type:"code",component:function(){return i.createElement(D,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0})},code:R,maxWidth:340,centered:!0},W=`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
      nothingFoundMessage="Nothing found..."
    />
  );
}
`,F={type:"code",component:function(){return i.createElement(D,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0,nothingFoundMessage:"Nothing found..."})},code:W,maxWidth:340,centered:!0};var Y=Object.defineProperty,_=Object.defineProperties,N=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,L=(e,t,r)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,T=(e,t)=>{for(var r in t||(t={}))z.call(t,r)&&L(e,r,t[r]);if(B)for(var r of B(t))M.call(t,r)&&L(e,r,t[r]);return e},H=(e,t)=>_(e,N(t));let U=`
import { Select } from '@mantine/core';


function Demo() {
  return (
    <Select
      {{props}}
      data={['React', 'Angular', 'Svelte', 'Vue']}
      dropdownOpened
      pb={150}
      label="Control check icon"
      placeholder="Pick value"
      defaultValue="React"
    />
  );
}
`,G={type:"configurator",component:function(e){return i.createElement(D,H(T({},e),{data:["React","Angular","Svelte","Vue"],dropdownOpened:!0,pb:150,label:"Control check icon",placeholder:"Pick value",defaultValue:"React"}))},code:U,centered:!0,maxWidth:340,controls:[{type:"boolean",prop:"withCheckIcon",initialValue:!0,libraryValue:!0},{type:"segmented",prop:"checkIconPosition",initialValue:"left",libraryValue:null,data:["left","right"]}]},$=`
import { Select, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <Select
      label="Your country"
      placeholder="Pick value"
      data={['Great Britain', 'Russian Federation', 'United States']}
      filter={optionsFilter}
      searchable
    />
  );
}
`,q=({options:e,search:t})=>{let r=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return r.every(e=>t.some(t=>t.includes(e)))})},Z={type:"code",component:function(){return i.createElement(D,{label:"Your country",placeholder:"Pick value",data:["Great Britain","Russian Federation","United States"],filter:q,searchable:!0})},code:$,maxWidth:340,centered:!0},X=`
import { Select, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['4 \u2013 React', '1 \u2013 Angular', '3 \u2013 Vue', '2 \u2013 Svelte']}
      filter={optionsFilter}
      searchable
    />
  );
}
`,K=({options:e,search:t})=>{let r=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return r.sort((e,t)=>e.label.localeCompare(t.label)),r},J={type:"code",component:function(){return i.createElement(D,{label:"Your favorite library",placeholder:"Pick value",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:K,searchable:!0})},code:X,maxWidth:340,centered:!0},Q=`
import { Select } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <Select
      label="100 000 options autocomplete"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
      searchable
    />
  );
}
`,ee=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),et={type:"code",component:function(){return i.createElement(D,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:ee,searchable:!0})},code:Q,maxWidth:340,centered:!0},er=`
import { Select } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <>
      <Select
        label="With scroll area (default)"
        placeholder="Pick value"
        data={data}
        maxDropdownHeight={200}
      />

      <Select
        label="With native scroll"
        placeholder="Pick value"
        data={data}
        withScrollArea={false}
        styles={{ dropdown: { maxHeight: 200, overflowY: 'auto' } }}
        mt="md"
      />
    </>
  );
}
`,eo=Array(100).fill(0).map((e,t)=>`Option ${t}`),el={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(D,{label:"With scroll area (default)",placeholder:"Pick value",data:eo,maxDropdownHeight:200}),i.createElement(D,{label:"With native scroll",placeholder:"Pick value",data:eo,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"}))},code:er,maxWidth:340,centered:!0},en=`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Express', 'Django'] },
      ]}
    />
  );
}
`,ea={type:"code",component:function(){return i.createElement(D,{label:"Your favorite library",placeholder:"Pick value",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:en,maxWidth:340,centered:!0},ei=`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
    />
  );
}
`,ec={type:"code",component:function(){return i.createElement(D,{label:"Your favorite library",placeholder:"Pick value",data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}]})},code:ei,maxWidth:340,centered:!0};var es=r(51343),ed=Object.defineProperty,eu=Object.defineProperties,ep=Object.getOwnPropertyDescriptors,eh=Object.getOwnPropertySymbols,em=Object.prototype.hasOwnProperty,eb=Object.prototype.propertyIsEnumerable,ef=(e,t,r)=>t in e?ed(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ey=(e,t)=>{for(var r in t||(t={}))em.call(t,r)&&ef(e,r,t[r]);if(eh)for(var r of eh(t))eb.call(t,r)&&ef(e,r,t[r]);return e},eg=(e,t)=>eu(e,ep(t));let ev=`
import { Select } from '@mantine/core';


function Demo() {
  return (
    <Select
      {{props}}
      placeholder="Select placeholder"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`,ex={type:"configurator",component:function(e){return i.createElement(D,eg(ey({},e),{placeholder:"Select placeholder",data:["React","Angular","Vue","Svelte"]}))},code:ev,centered:!0,maxWidth:340,controls:es.pc},eS=`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      readOnly
    />
  );
}
`,ej={type:"code",component:function(){return i.createElement(D,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:eS,maxWidth:340,centered:!0},ew=`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      disabled
    />
  );
}
`,eO={type:"code",component:function(){return i.createElement(D,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:ew,maxWidth:340,centered:!0},eV=`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <>
      <Select
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <Select
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </>
  );
}
`,ek={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(D,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),i.createElement(D,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]}))},maxWidth:340,centered:!0,code:eV};var eP=r(93693),eA=r(46393),eD=r(85742),eE=Object.defineProperty,eC=Object.defineProperties,eR=Object.getOwnPropertyDescriptors,eI=Object.getOwnPropertySymbols,eW=Object.prototype.hasOwnProperty,eF=Object.prototype.propertyIsEnumerable,eY=(e,t,r)=>t in e?eE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,e_=(e,t)=>{for(var r in t||(t={}))eW.call(t,r)&&eY(e,r,t[r]);if(eI)for(var r of eI(t))eF.call(t,r)&&eY(e,r,t[r]);return e},eN=(e,t)=>eC(e,eR(t));let eB=`
import { IconAt } from '@tabler/icons-react';
import { Select, rem } from '@mantine/core';

function Demo() {
  return (
    <Select
     {{props}}
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="Select"
      description="Description"
      error="Error"
      placeholder="Select"
      data={['React', 'Angular']}
    />
  );
}
`,ez={type:"styles-api",data:eD.i,component:function(e){return i.createElement(D,eN(e_({},e),{dropdownOpened:!0,leftSection:i.createElement(eP.Z,{style:{width:(0,eA.h)(18),height:(0,eA.h)(18)},stroke:1.5}),withAsterisk:!0,label:"Select",description:"Description",placeholder:"Select",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]}))},code:eB,centered:!0,maxWidth:340},eM=(0,n.A)(a.us.Select);function eL(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,l.ah)(),e.components),{ComboboxDisclaimer:r,Demo:n,ComboboxData:a,ComboboxFiltering:i,ComboboxLargeData:c,ComboboxProps:s,InputFeatures:d,StylesApiSelectors:u,GetElementRef:p,InputAccessibility:h}=t;return a||eH("ComboboxData",!0),r||eH("ComboboxDisclaimer",!0),i||eH("ComboboxFiltering",!0),c||eH("ComboboxLargeData",!0),s||eH("ComboboxProps",!0),n||eH("Demo",!0),p||eH("GetElementRef",!0),h||eH("InputAccessibility",!0),d||eH("InputFeatures",!0),u||eH("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{component:"Select"}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Select"})," allows capturing user input based on suggestions from the list.\nUnlike ",(0,o.jsx)(t.a,{href:"/components/autocomplete/",children:"Autocomplete"}),", ",(0,o.jsx)(t.code,{children:"Select"})," does not allow entering custom values."]}),"\n",(0,o.jsx)(n,{data:C}),"\n",(0,o.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Select"})," value must be a string, other types are not supported.\n",(0,o.jsx)(t.code,{children:"onChange"})," function is called with a string value as a single argument."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Select } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <Select data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"searchable",children:"Searchable"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"searchable"})," prop to allow filtering options by user input:"]}),"\n",(0,o.jsx)(n,{data:I}),"\n",(0,o.jsx)(t.h2,{id:"nothing-found",children:"Nothing found"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"nothingFoundMessage"})," prop to display given message when no options match search query.\nIf ",(0,o.jsx)(t.code,{children:"nothingFoundMessage"})," is not set, ",(0,o.jsx)(t.code,{children:"Select"})," dropdown will be hidden when no options match search query.\nThe message is not displayed when trimmed search query is empty."]}),"\n",(0,o.jsx)(n,{data:F}),"\n",(0,o.jsx)(t.h2,{id:"checked-option-icon",children:"Checked option icon"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"checkIconPosition"})," prop to ",(0,o.jsx)(t.code,{children:"left"})," or ",(0,o.jsx)(t.code,{children:"right"})," to control position of check icon in active option.\nTo remove the check icon, set ",(0,o.jsx)(t.code,{children:"withCheckIcon={false}"}),"."]}),"\n",(0,o.jsx)(n,{data:G}),"\n",(0,o.jsx)(a,{component:"Select"}),"\n",(0,o.jsx)(i,{component:"Select"}),"\n",(0,o.jsx)(n,{data:Z}),"\n",(0,o.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,o.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,o.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,o.jsx)(n,{data:J}),"\n",(0,o.jsx)(c,{component:"Select"}),"\n",(0,o.jsx)(n,{data:et}),"\n",(0,o.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,o.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,o.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,o.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,o.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,o.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,o.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,o.jsx)(n,{data:el}),"\n",(0,o.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,o.jsx)(n,{data:ea}),"\n",(0,o.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,o.jsx)(t.p,{children:"When option is disabled, it cannot be selected and is ignored in keyboard navigation."}),"\n",(0,o.jsx)(n,{data:ec}),"\n",(0,o.jsx)(s,{component:"Select"}),"\n",(0,o.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,o.jsx)(d,{component:"Select",element:"input"}),"\n",(0,o.jsx)(n,{data:ex}),"\n",(0,o.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,o.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,o.jsx)(t.code,{children:"Select"})," will not show suggestions and will not call ",(0,o.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,o.jsx)(n,{data:ej}),"\n",(0,o.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,o.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,o.jsx)(t.code,{children:"Select"})," will not show suggestions."]}),"\n",(0,o.jsx)(n,{data:eO}),"\n",(0,o.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,o.jsx)(n,{data:ek}),"\n",(0,o.jsx)(u,{component:"Select"}),"\n",(0,o.jsx)(n,{data:ez}),"\n",(0,o.jsx)(p,{component:"Select",refType:"input"}),"\n",(0,o.jsx)(h,{component:"Select"})]})}var eT=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(eM,Object.assign({},e,{children:(0,o.jsx)(eL,e)}))};function eH(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},51343:function(e,t,r){"use strict";r.d(t,{Mt:function(){return o},nW:function(){return l},pc:function(){return n}});let o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],l=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[2411,7437,4485,4259,9774,2888,179],function(){return e(e.s=36307)}),_N_E=e.O()}]);