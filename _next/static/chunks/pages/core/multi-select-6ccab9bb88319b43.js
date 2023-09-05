(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9353],{33507:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},82843:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/multi-select",function(){return r(39925)}])},39925:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return eV}});var l=r(85893),a=r(11151),n=r(19905),o=r(9904),i=r(67294),c=r(87285);let s=`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`,d={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"]})},code:s,maxWidth:340,centered:!0},u=`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
    />
  );
}
`,p={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0})},code:u,maxWidth:340,centered:!0},h=`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
      nothingFoundMessage="Nothing found..."
    />
  );
}
`,m={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0,nothingFoundMessage:"Nothing found..."})},code:h,maxWidth:340,centered:!0};var b=Object.defineProperty,f=Object.defineProperties,v=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,S=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,j=(e,t)=>{for(var r in t||(t={}))y.call(t,r)&&S(e,r,t[r]);if(g)for(var r of g(t))x.call(t,r)&&S(e,r,t[r]);return e},M=(e,t)=>f(e,v(t));let w=`
import { MultiSelect } from '@mantine/core';


function Demo() {
  return (
    <MultiSelect
      {{props}}
      data={['React', 'Angular', 'Svelte', 'Vue']}
      dropdownOpened
      pb={150}
      label="Control check icon"
      placeholder="Pick value"
      defaultValue={["React"]}
    />
  );
}
`,k={type:"configurator",component:function(e){return i.createElement(c.N,M(j({},e),{data:["React","Angular","Svelte","Vue"],dropdownOpened:!0,pb:150,label:"Control check icon",placeholder:"Pick value",defaultValue:["React"]}))},code:w,centered:!0,maxWidth:340,controls:[{type:"boolean",prop:"withCheckIcon",initialValue:!0,libraryValue:!0},{type:"segmented",prop:"checkIconPosition",initialValue:"left",libraryValue:null,data:["left","right"]}]},V=`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Select up to 2 libraries"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      maxValues={2}
    />
  );
}
`,A={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Select up to 2 libraries",data:["React","Angular","Vue","Svelte"],maxValues:2})},code:V,maxWidth:340,centered:!0},P=`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      hidePickedOptions
    />
  );
}
`,O={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],hidePickedOptions:!0})},code:P,maxWidth:340,centered:!0},R=`
import { MultiSelect, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <MultiSelect
      label="What countries have you visited?"
      placeholder="Pick values"
      data={['Great Britain', 'Russian Federation', 'United States']}
      filter={optionsFilter}
      searchable
    />
  );
}
`,D=({options:e,search:t})=>{let r=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return r.every(e=>t.some(t=>t.includes(e)))})},E={type:"code",component:function(){return i.createElement(c.N,{label:"What countries have you visited?",placeholder:"Pick values",data:["Great Britain","Russian Federation","United States"],filter:D,searchable:!0})},code:R,maxWidth:340,centered:!0},I=`
import { MultiSelect, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['4 \u2013 React', '1 \u2013 Angular', '3 \u2013 Vue', '2 \u2013 Svelte']}
      filter={optionsFilter}
      searchable
    />
  );
}
`,W=({options:e,search:t})=>{let r=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return r.sort((e,t)=>e.label.localeCompare(t.label)),r},C={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Pick values",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:W,searchable:!0})},code:I,maxWidth:340,centered:!0},N=`
import { MultiSelect } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <MultiSelect
      label="100 000 options autocomplete"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
      searchable
    />
  );
}
`,Y=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),F={type:"code",component:function(){return i.createElement(c.N,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:Y,searchable:!0})},code:N,maxWidth:340,centered:!0},Z=`
import { MultiSelect } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <>
      <MultiSelect
        label="With scroll area (default)"
        placeholder="Pick value"
        data={data}
        maxDropdownHeight={200}
      />

      <MultiSelect
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
`,_=Array(100).fill(0).map((e,t)=>`Option ${t}`),L={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.N,{label:"With scroll area (default)",placeholder:"Pick value",data:_,maxDropdownHeight:200}),i.createElement(c.N,{label:"With native scroll",placeholder:"Pick value",data:_,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"}))},code:Z,maxWidth:340,centered:!0},z=`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Express', 'Django'] },
      ]}
    />
  );
}
`,B={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Pick value",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:z,maxWidth:340,centered:!0},T=`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
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
`,H={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Pick value",data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}]})},code:T,maxWidth:340,centered:!0};var U=r(51343),G=Object.defineProperty,$=Object.defineProperties,q=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,Q=(e,t,r)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ee=(e,t)=>{for(var r in t||(t={}))J.call(t,r)&&Q(e,r,t[r]);if(X)for(var r of X(t))K.call(t,r)&&Q(e,r,t[r]);return e},et=(e,t)=>$(e,q(t));let er=`
import { MultiSelect } from '@mantine/core';


function Demo() {
  return (
    <MultiSelect
      {{props}}
      placeholder="MultiSelect placeholder"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`,el={type:"configurator",component:function(e){return i.createElement(c.N,et(ee({},e),{placeholder:"MultiSelect placeholder",data:["React","Angular","Vue","Svelte"]}))},code:er,centered:!0,maxWidth:340,controls:U.pc},ea=`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      readOnly
    />
  );
}
`,en={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:ea,maxWidth:340,centered:!0},eo=`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      disabled
    />
  );
}
`,ei={type:"code",component:function(){return i.createElement(c.N,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:eo,maxWidth:340,centered:!0},ec=`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <MultiSelect
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <MultiSelect
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </>
  );
}
`,es={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.N,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),i.createElement(c.N,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]}))},maxWidth:340,centered:!0,code:ec};var ed=r(93693),eu=r(46393),ep=r(5295),eh=Object.defineProperty,em=Object.defineProperties,eb=Object.getOwnPropertyDescriptors,ef=Object.getOwnPropertySymbols,ev=Object.prototype.hasOwnProperty,eg=Object.prototype.propertyIsEnumerable,ey=(e,t,r)=>t in e?eh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ex=(e,t)=>{for(var r in t||(t={}))ev.call(t,r)&&ey(e,r,t[r]);if(ef)for(var r of ef(t))eg.call(t,r)&&ey(e,r,t[r]);return e},eS=(e,t)=>em(e,eb(t));let ej=`
import { IconAt } from '@tabler/icons-react';
import { MultiSelect, rem } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
     {{props}}
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="MultiSelect"
      description="Description"
      error="Error"
      placeholder="MultiSelect"
      defaultValue={['React', 'Angular']}
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Node', 'Django'] },
      ]}
    />
  );
}
`,eM={type:"styles-api",data:ep.L,component:function(e){return i.createElement(c.N,eS(ex({},e),{dropdownOpened:!0,leftSection:i.createElement(ed.Z,{style:{width:(0,eu.h)(18),height:(0,eu.h)(18)},stroke:1.5}),withAsterisk:!0,label:"MultiSelect",description:"Description",placeholder:"MultiSelect",defaultValue:["React","Angular"],data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]}))},code:ej,centered:!0,maxWidth:340},ew=(0,n.A)(o.us.MultiSelect);function ek(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,a.ah)(),e.components),{ComboboxDisclaimer:r,Demo:n,ComboboxData:o,ComboboxFiltering:i,ComboboxLargeData:c,ComboboxProps:s,InputFeatures:u,StylesApiSelectors:h,GetElementRef:b,InputAccessibility:f}=t;return o||eA("ComboboxData",!0),r||eA("ComboboxDisclaimer",!0),i||eA("ComboboxFiltering",!0),c||eA("ComboboxLargeData",!0),s||eA("ComboboxProps",!0),n||eA("Demo",!0),b||eA("GetElementRef",!0),f||eA("InputAccessibility",!0),u||eA("InputFeatures",!0),h||eA("StylesApiSelectors",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{component:"MultiSelect"}),"\n",(0,l.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"MultiSelect"})," provides a way to enter multiple values.\n",(0,l.jsx)(t.code,{children:"MultiSelect"})," is similar to ",(0,l.jsx)(t.a,{href:"/core/tags-input",children:"TagsInput"}),", but it does not allow entering custom values."]}),"\n",(0,l.jsx)(n,{data:d}),"\n",(0,l.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"MultiSelect"})," value must be an array of strings, other types are not supported.\n",(0,l.jsx)(t.code,{children:"onChange"})," function is called with an array of strings as a single argument."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { MultiSelect } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n  return <MultiSelect data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"searchable",children:"Searchable"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"searchable"})," prop to allow filtering options by user input:"]}),"\n",(0,l.jsx)(n,{data:p}),"\n",(0,l.jsx)(t.h2,{id:"nothing-found",children:"Nothing found"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"nothingFoundMessage"})," prop to display given message when no options match search query.\nIf ",(0,l.jsx)(t.code,{children:"nothingFoundMessage"})," is not set, ",(0,l.jsx)(t.code,{children:"MultiSelect"})," dropdown will be hidden when no options match search query.\nThe message is not displayed when trimmed search query is empty."]}),"\n",(0,l.jsx)(n,{data:m}),"\n",(0,l.jsx)(t.h2,{id:"checked-option-icon",children:"Checked option icon"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"checkIconPosition"})," prop to ",(0,l.jsx)(t.code,{children:"left"})," or ",(0,l.jsx)(t.code,{children:"right"})," to control position of check icon in active option.\nTo remove the check icon, set ",(0,l.jsx)(t.code,{children:"withCheckIcon={false}"}),"."]}),"\n",(0,l.jsx)(n,{data:k}),"\n",(0,l.jsx)(t.h2,{id:"max-selected-values",children:"Max selected values"}),"\n",(0,l.jsxs)(t.p,{children:["You can limit the number of selected values with ",(0,l.jsx)(t.code,{children:"maxValues"})," prop. This will not allow adding more values\nonce the limit is reached."]}),"\n",(0,l.jsx)(n,{data:A}),"\n",(0,l.jsx)(t.h2,{id:"hide-selected-options",children:"Hide selected options"}),"\n",(0,l.jsxs)(t.p,{children:["To remove selected options from the list of available options, set ",(0,l.jsx)(t.code,{children:"hidePickedOptions"})," prop:"]}),"\n",(0,l.jsx)(n,{data:O}),"\n",(0,l.jsx)(o,{component:"MultiSelect"}),"\n",(0,l.jsx)(i,{component:"MultiSelect"}),"\n",(0,l.jsx)(n,{data:E}),"\n",(0,l.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,l.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,l.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,l.jsx)(n,{data:C}),"\n",(0,l.jsx)(c,{component:"MultiSelect"}),"\n",(0,l.jsx)(n,{data:F}),"\n",(0,l.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,l.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,l.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,l.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,l.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,l.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,l.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,l.jsx)(n,{data:L}),"\n",(0,l.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,l.jsx)(n,{data:B}),"\n",(0,l.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,l.jsxs)(t.p,{children:["When option is disabled, it cannot be selected and is ignored in keyboard navigation.\nNote that user can still enter disabled option as a value. If you want to prohibit certain values,\nuse controlled component and filter them out in ",(0,l.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,l.jsx)(n,{data:H}),"\n",(0,l.jsx)(s,{component:"MultiSelect"}),"\n",(0,l.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,l.jsx)(u,{component:"MultiSelect",element:"input"}),"\n",(0,l.jsx)(n,{data:el}),"\n",(0,l.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,l.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,l.jsx)(t.code,{children:"MultiSelect"})," will not show suggestions and will not call ",(0,l.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,l.jsx)(n,{data:en}),"\n",(0,l.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,l.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,l.jsx)(t.code,{children:"MultiSelect"})," will not show suggestions."]}),"\n",(0,l.jsx)(n,{data:ei}),"\n",(0,l.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,l.jsx)(n,{data:es}),"\n",(0,l.jsx)(h,{component:"MultiSelect"}),"\n",(0,l.jsx)(n,{data:eM}),"\n",(0,l.jsx)(b,{component:"MultiSelect",refType:"input"}),"\n",(0,l.jsx)(f,{component:"MultiSelect"})]})}var eV=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(ew,Object.assign({},e,{children:(0,l.jsx)(ek,e)}))};function eA(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var l=(0,r(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},51343:function(e,t,r){"use strict";r.d(t,{Mt:function(){return l},nW:function(){return a},pc:function(){return n}});let l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],a=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[1300,178,4485,7285,9774,2888,179],function(){return e(e.s=82843)}),_N_E=e.O()}]);