(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5089],{33507:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},36307:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/select",function(){return r(27745)}])},27745:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ew}});var n=r(85893),o=r(11151),a=r(19905),l=r(9904),i=r(67294),c=r(92079);let s=`
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
`,d={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"]})},code:s,maxWidth:340,centered:!0},u=`
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
`,p={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0})},code:u,maxWidth:340,centered:!0},h=`
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
`,m={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0,nothingFoundMessage:"Nothing found..."})},code:h,maxWidth:340,centered:!0};var f=Object.defineProperty,b=Object.defineProperties,y=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,w=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&x(e,r,t[r]);if(g)for(var r of g(t))S.call(t,r)&&x(e,r,t[r]);return e},j=(e,t)=>b(e,y(t));let k=`
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
`,O={type:"configurator",component:function(e){return i.createElement(c.P,j(w({},e),{data:["React","Angular","Svelte","Vue"],dropdownOpened:!0,pb:150,label:"Control check icon",placeholder:"Pick value",defaultValue:"React"}))},code:k,centered:!0,maxWidth:340,controls:[{type:"boolean",prop:"withCheckIcon",initialValue:!0,libraryValue:!0},{type:"segmented",prop:"checkIconPosition",initialValue:"left",libraryValue:null,data:["left","right"]}]},P=`
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
`,V=({options:e,search:t})=>{let r=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return r.every(e=>t.some(t=>t.includes(e)))})},E={type:"code",component:function(){return i.createElement(c.P,{label:"Your country",placeholder:"Pick value",data:["Great Britain","Russian Federation","United States"],filter:V,searchable:!0})},code:P,maxWidth:340,centered:!0},A=`
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
      nothingFoundMessage="Nothing found..."
      searchable
    />
  );
}
`,D=({options:e,search:t})=>{let r=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return r.sort((e,t)=>e.label.localeCompare(t.label)),r},C={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:D,nothingFoundMessage:"Nothing found...",searchable:!0})},code:A,maxWidth:340,centered:!0},I=`
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
`,M=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),R={type:"code",component:function(){return i.createElement(c.P,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:M,searchable:!0})},code:I,maxWidth:340,centered:!0},F=`
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
`,W=Array(100).fill(0).map((e,t)=>`Option ${t}`),Y={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.P,{label:"With scroll area (default)",placeholder:"Pick value",data:W,maxDropdownHeight:200}),i.createElement(c.P,{label:"With native scroll",placeholder:"Pick value",data:W,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"}))},code:F,maxWidth:340,centered:!0},N=`
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
`,Z={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:N,maxWidth:340,centered:!0},_=`
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
`,z={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}]})},code:_,maxWidth:340,centered:!0};var L=r(51343),B=Object.defineProperty,T=Object.defineProperties,H=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,q=(e,t,r)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,X=(e,t)=>{for(var r in t||(t={}))$.call(t,r)&&q(e,r,t[r]);if(U)for(var r of U(t))G.call(t,r)&&q(e,r,t[r]);return e},K=(e,t)=>T(e,H(t));let J=`
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
`,Q={type:"configurator",component:function(e){return i.createElement(c.P,K(X({},e),{placeholder:"Select placeholder",data:["React","Angular","Vue","Svelte"]}))},code:J,centered:!0,maxWidth:340,controls:L.pc},ee=`
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
`,et={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:ee,maxWidth:340,centered:!0},er=`
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
`,en={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:er,maxWidth:340,centered:!0},eo=`
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
`,ea={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.P,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),i.createElement(c.P,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]}))},maxWidth:340,centered:!0,code:eo};var el=r(93693),ei=r(46393),ec=r(85742),es=Object.defineProperty,ed=Object.defineProperties,eu=Object.getOwnPropertyDescriptors,ep=Object.getOwnPropertySymbols,eh=Object.prototype.hasOwnProperty,em=Object.prototype.propertyIsEnumerable,ef=(e,t,r)=>t in e?es(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eb=(e,t)=>{for(var r in t||(t={}))eh.call(t,r)&&ef(e,r,t[r]);if(ep)for(var r of ep(t))em.call(t,r)&&ef(e,r,t[r]);return e},ey=(e,t)=>ed(e,eu(t));let eg=`
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
`,ev={type:"styles-api",data:ec.i,component:function(e){return i.createElement(c.P,ey(eb({},e),{dropdownOpened:!0,leftSection:i.createElement(el.Z,{style:{width:(0,ei.h)(18),height:(0,ei.h)(18)},stroke:1.5}),withAsterisk:!0,label:"Select",description:"Description",placeholder:"Select",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]}))},code:eg,centered:!0,maxWidth:340},eS=(0,a.A)(l.us.Select);function ex(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,o.ah)(),e.components),{ComboboxDisclaimer:r,Demo:a,ComboboxData:l,ComboboxFiltering:i,ComboboxLargeData:c,ComboboxProps:s,InputFeatures:u,StylesApiSelectors:h,GetElementRef:f,InputAccessibility:b}=t;return l||ej("ComboboxData",!0),r||ej("ComboboxDisclaimer",!0),i||ej("ComboboxFiltering",!0),c||ej("ComboboxLargeData",!0),s||ej("ComboboxProps",!0),a||ej("Demo",!0),f||ej("GetElementRef",!0),b||ej("InputAccessibility",!0),u||ej("InputFeatures",!0),h||ej("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{component:"Select"}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Select"})," allows capturing user input based on suggestions from the list.\nUnlike ",(0,n.jsx)(t.a,{href:"/components/autocomplete/",children:"Autocomplete"}),", ",(0,n.jsx)(t.code,{children:"Select"})," does not allow entering custom values."]}),"\n",(0,n.jsx)(a,{data:d}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Select"})," value must be a string, other types are not supported.\n",(0,n.jsx)(t.code,{children:"onChange"})," function is called with a string value as a single argument."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Select } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <Select data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"searchable",children:"Searchable"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"searchable"})," prop to allow filtering options by user input:"]}),"\n",(0,n.jsx)(a,{data:p}),"\n",(0,n.jsx)(t.h2,{id:"nothing-found",children:"Nothing found"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"nothingFoundMessage"})," prop to display given message when no options match search query.\nIf ",(0,n.jsx)(t.code,{children:"nothingFoundMessage"})," is not set, ",(0,n.jsx)(t.code,{children:"Select"})," dropdown will be hidden when no options match search query.\nThe message is not displayed when trimmed search query is empty."]}),"\n",(0,n.jsx)(a,{data:m}),"\n",(0,n.jsx)(t.h2,{id:"checked-option-icon",children:"Checked option icon"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"checkIconPosition"})," prop to ",(0,n.jsx)(t.code,{children:"left"})," or ",(0,n.jsx)(t.code,{children:"right"})," to control position of check icon in active option.\nTo remove the check icon, set ",(0,n.jsx)(t.code,{children:"withCheckIcon={false}"}),"."]}),"\n",(0,n.jsx)(a,{data:O}),"\n",(0,n.jsx)(l,{component:"Select"}),"\n",(0,n.jsx)(i,{component:"Select"}),"\n",(0,n.jsx)(a,{data:E}),"\n",(0,n.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,n.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,n.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,n.jsx)(a,{data:C}),"\n",(0,n.jsx)(c,{component:"Select"}),"\n",(0,n.jsx)(a,{data:R}),"\n",(0,n.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,n.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,n.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,n.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,n.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,n.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,n.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,n.jsx)(a,{data:Y}),"\n",(0,n.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,n.jsx)(a,{data:Z}),"\n",(0,n.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,n.jsx)(t.p,{children:"When option is disabled, it cannot be selected and is ignored in keyboard navigation."}),"\n",(0,n.jsx)(a,{data:z}),"\n",(0,n.jsx)(s,{component:"Select"}),"\n",(0,n.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,n.jsx)(u,{component:"Select",element:"input"}),"\n",(0,n.jsx)(a,{data:Q}),"\n",(0,n.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,n.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,n.jsx)(t.code,{children:"Select"})," will not show suggestions and will not call ",(0,n.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,n.jsx)(a,{data:et}),"\n",(0,n.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,n.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,n.jsx)(t.code,{children:"Select"})," will not show suggestions."]}),"\n",(0,n.jsx)(a,{data:en}),"\n",(0,n.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,n.jsx)(a,{data:ea}),"\n",(0,n.jsx)(h,{component:"Select"}),"\n",(0,n.jsx)(a,{data:ev}),"\n",(0,n.jsx)(f,{component:"Select",refType:"input"}),"\n",(0,n.jsx)(b,{component:"Select"})]})}var ew=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(eS,Object.assign({},e,{children:(0,n.jsx)(ex,e)}))};function ej(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},19225:function(e,t,r){"use strict";r.d(t,{r:function(){return u}});var n=r(67294),o=r(45906),a=r(64485),l=r(85402),i=r(23803),c=r(17723);function s(e,t){return Array.isArray(e)?e.includes(t):e===t}function d({data:e,withCheckIcon:t,value:r,checkIconPosition:o}){if(!(0,l.f)(e)){let l=t&&s(r,e.value)&&n.createElement(c.n,{className:i.Z.optionsDropdownCheckIcon});return n.createElement(a.h.Option,{value:e.value,disabled:e.disabled,className:i.Z.optionsDropdownOption,"data-reverse":"right"===o||void 0,"data-checked":s(r,e.value)||void 0},"left"===o&&l,e.label,"right"===o&&l)}let u=e.items.map(e=>n.createElement(d,{data:e,key:e.value}));return n.createElement(a.h.Group,{label:e.group},u)}function u({data:e,hidden:t,hiddenWhenEmpty:r,filter:c,search:s,limit:u,maxDropdownHeight:p,withScrollArea:h=!0,filterOptions:m=!0,withCheckIcon:f=!1,value:b,checkIconPosition:y,nothingFoundMessage:g}){!function e(t,r=new Set){if(Array.isArray(t))for(let n of t)if((0,l.f)(n))e(n.items,r);else{if(void 0===n.value)throw Error("[@mantine/core] Each option must have value property");if("string"!=typeof n.value)throw Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof n.value}`);if(r.has(n.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${n.value}" was provided more than once`);r.add(n.value)}}(e);let v="string"==typeof s?(c||function e({options:t,search:r,limit:n}){let o=r.trim().toLowerCase(),a=[];for(let i=0;i<t.length;i+=1){let c=t[i];if(a.length===n)break;(0,l.f)(c)&&a.push({group:c.group,items:e({options:c.items,search:r,limit:n-a.length})}),!(0,l.f)(c)&&c.label.toLowerCase().includes(o)&&a.push(c)}return a})({options:e,search:m?s:"",limit:null!=u?u:1/0}):e,S=function(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}(v),x=v.map(e=>n.createElement(d,{data:e,key:(0,l.f)(e)?e.group:e.value,withCheckIcon:f,value:b,checkIconPosition:y}));return n.createElement(a.h.Dropdown,{hidden:t||r&&S},n.createElement(a.h.Options,null,h?n.createElement(o.x.Autosize,{mah:null!=p?p:220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y",className:i.Z.optionsDropdownScrollArea},x):x,S&&g&&n.createElement(a.h.Empty,null,g)))}},85402:function(e,t,r){"use strict";function n(e){return"group"in e}r.d(t,{f:function(){return n}})},43154:function(e,t,r){"use strict";r.d(t,{g:function(){return function e(t){return t.reduce((t,r)=>"group"in r?c(c({},t),e(r.items)):(t[r.value]=r,t),{})}}});var n=Object.defineProperty,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&i(e,r,t[r]);if(o)for(var r of o(t))l.call(t,r)&&i(e,r,t[r]);return e}},92079:function(e,t,r){"use strict";r.d(t,{P:function(){return O}});var n=r(67294),o=r(35179),a=r(98008),l=r(43154),i=r(14437),c=r(64485),s=r(95879),d=r(19225),u=r(75144),p=r(35577),h=r(19732),m=Object.defineProperty,f=Object.defineProperties,b=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,S=(e,t,r)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&S(e,r,t[r]);if(y)for(var r of y(t))v.call(t,r)&&S(e,r,t[r]);return e},w=(e,t)=>f(e,b(t)),j=(e,t)=>{var r={};for(var n in e)g.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&y)for(var n of y(e))0>t.indexOf(n)&&v.call(e,n)&&(r[n]=e[n]);return r};let k={searchable:!1,withCheckIcon:!0,checkIconPosition:"left"},O=(0,u.d)((e,t)=>{let r=(0,p.w)("Select",k,e),{classNames:u,styles:m,unstyled:f,vars:b,dropdownOpened:y,defaultDropdownOpened:g,onDropdownClose:v,onDropdownOpen:S,onFocus:O,onBlur:P,onClick:V,onChange:E,data:A,value:D,defaultValue:C,selectFirstOptionOnChange:I,onOptionSubmit:M,comboboxProps:R,readOnly:F,disabled:W,filter:Y,limit:N,withScrollArea:Z,maxDropdownHeight:_,size:z,searchable:L,rightSection:B,checkIconPosition:T,withCheckIcon:H,nothingFoundMessage:U,name:$,form:G}=r,q=j(r,["classNames","styles","unstyled","vars","dropdownOpened","defaultDropdownOpened","onDropdownClose","onDropdownOpen","onFocus","onBlur","onClick","onChange","data","value","defaultValue","selectFirstOptionOnChange","onOptionSubmit","comboboxProps","readOnly","disabled","filter","limit","withScrollArea","maxDropdownHeight","size","searchable","rightSection","checkIconPosition","withCheckIcon","nothingFoundMessage","name","form"]),X=(0,a.R)(A),K=(0,l.g)(X),[J,Q]=(0,o.C)({value:D,defaultValue:C,finalValue:null,onChange:E}),ee=J?K[J]:void 0,[et,er]=(0,n.useState)(ee?ee.label:""),en=(0,i.K)({opened:y,defaultOpened:g,onDropdownOpen:S,onDropdownClose:()=>{null==v||v(),en.resetSelectedOption()}}),{resolvedClassNames:eo,resolvedStyles:ea}=(0,h.h)({props:r,styles:m,classNames:u});return(0,n.useEffect)(()=>{I&&en.selectFirstOption()},[I,J]),(0,n.useEffect)(()=>{null===D&&er(""),"string"==typeof D&&K[D]&&er(K[D].label)},[D]),n.createElement(n.Fragment,null,n.createElement(c.h,x({store:en,__staticSelector:"Select",classNames:eo,styles:ea,unstyled:f,readOnly:F,onOptionSubmit:e=>{null==M||M(e);let t=K[e].value===J?null:K[e].value;Q(t),er(t?K[e].label:""),en.closeDropdown()},size:z},R),n.createElement(c.h.Target,{targetType:L?"input":"button"},n.createElement(s.M,w(x({ref:t,rightSection:B||n.createElement(c.h.Chevron,{size:z})},q),{size:z,__staticSelector:"Select",disabled:W,readOnly:F||!L,value:et,onChange:e=>{er(e.currentTarget.value),en.openDropdown(),I&&en.selectFirstOption()},onFocus:e=>{L&&en.openDropdown(),null==O||O(e)},onBlur:e=>{L&&en.closeDropdown(),er(J?K[J].label:""),null==P||P(e)},onClick:e=>{L?en.openDropdown():en.toggleDropdown(),null==V||V(e)},classNames:eo,styles:ea,unstyled:f,pointer:!L}))),n.createElement(d.r,{data:X,hidden:F||W,filter:Y,search:et,limit:N,hiddenWhenEmpty:!L||!U,withScrollArea:Z,maxDropdownHeight:_,filterOptions:L&&(null==ee?void 0:ee.label)!==et,value:J,checkIconPosition:T,withCheckIcon:H,nothingFoundMessage:U})),n.createElement("input",{type:"hidden",name:$,value:J||"",form:G,disabled:W}))});O.classes=x(x({},s.M.classes),c.h.classes),O.displayName="@mantine/core/Select"},51343:function(e,t,r){"use strict";r.d(t,{Mt:function(){return n},nW:function(){return o},pc:function(){return a}});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],o=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],a=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[3186,178,4485,9774,2888,179],function(){return e(e.s=36307)}),_N_E=e.O()}]);