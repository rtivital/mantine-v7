(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5089],{33507:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},36307:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/select",function(){return r(25821)}])},25821:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ek}});var n=r(85893),l=r(11151),a=r(19905),o=r(9904),i=r(67294),c=r(92079);let s=`
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
    <>
      <Select
        label="Option can NOT be deselected"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        allowDeselect={false}
      />

      <Select
        label="Option can be deselected"
        description="This is default behavior, click 'React' in the dropdown"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        allowDeselect
        mt="md"
      />
    </>
  );
}
`,p={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.P,{label:"Option can NOT be deselected",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:"React",allowDeselect:!1}),i.createElement(c.P,{label:"Option can be deselected",description:"This is default behavior, click 'React' in the dropdown",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:"React",allowDeselect:!0,mt:"md"}))},code:u,maxWidth:340,centered:!0},h=`
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
`,m={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0})},code:h,maxWidth:340,centered:!0},f=`
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
`,b={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0,nothingFoundMessage:"Nothing found..."})},code:f,maxWidth:340,centered:!0};var v=Object.defineProperty,g=Object.defineProperties,y=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,j=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))w.call(t,r)&&j(e,r,t[r]);if(S)for(var r of S(t))x.call(t,r)&&j(e,r,t[r]);return e},O=(e,t)=>g(e,y(t));let P=`
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
`,V={type:"configurator",component:function(e){return i.createElement(c.P,O(k({},e),{data:["React","Angular","Svelte","Vue"],dropdownOpened:!0,pb:150,label:"Control check icon",placeholder:"Pick value",defaultValue:"React"}))},code:P,centered:!0,maxWidth:340,controls:[{type:"boolean",prop:"withCheckIcon",initialValue:!0,libraryValue:!0},{type:"segmented",prop:"checkIconPosition",initialValue:"left",libraryValue:null,data:["left","right"]}]},E=`
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
`,D=({options:e,search:t})=>{let r=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return r.every(e=>t.some(t=>t.includes(e)))})},A={type:"code",component:function(){return i.createElement(c.P,{label:"Your country",placeholder:"Pick value",data:["Great Britain","Russian Federation","United States"],filter:D,searchable:!0})},code:E,maxWidth:340,centered:!0},C=`
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
`,R=({options:e,search:t})=>{let r=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return r.sort((e,t)=>e.label.localeCompare(t.label)),r},I={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:R,nothingFoundMessage:"Nothing found...",searchable:!0})},code:C,maxWidth:340,centered:!0},M=`
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
`,F=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),W={type:"code",component:function(){return i.createElement(c.P,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:F,searchable:!0})},code:M,maxWidth:340,centered:!0},N=`
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
`,Y=Array(100).fill(0).map((e,t)=>`Option ${t}`),Z={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.P,{label:"With scroll area (default)",placeholder:"Pick value",data:Y,maxDropdownHeight:200}),i.createElement(c.P,{label:"With native scroll",placeholder:"Pick value",data:Y,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"}))},code:N,maxWidth:340,centered:!0},_=`
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
`,z={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:_,maxWidth:340,centered:!0},B=`
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
`,L={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}]})},code:B,maxWidth:340,centered:!0};var T=r(51343),H=Object.defineProperty,U=Object.defineProperties,$=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,K=(e,t,r)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,J=(e,t)=>{for(var r in t||(t={}))q.call(t,r)&&K(e,r,t[r]);if(G)for(var r of G(t))X.call(t,r)&&K(e,r,t[r]);return e},Q=(e,t)=>U(e,$(t));let ee=`
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
`,et={type:"configurator",component:function(e){return i.createElement(c.P,Q(J({},e),{placeholder:"Select placeholder",data:["React","Angular","Vue","Svelte"]}))},code:ee,centered:!0,maxWidth:340,controls:T.pc},er=`
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
`,en={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:er,maxWidth:340,centered:!0},el=`
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
`,ea={type:"code",component:function(){return i.createElement(c.P,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:el,maxWidth:340,centered:!0},eo=`
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
`,ei={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.P,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),i.createElement(c.P,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]}))},maxWidth:340,centered:!0,code:eo};var ec=r(93693),es=r(46393),ed=r(85742),eu=Object.defineProperty,ep=Object.defineProperties,eh=Object.getOwnPropertyDescriptors,em=Object.getOwnPropertySymbols,ef=Object.prototype.hasOwnProperty,eb=Object.prototype.propertyIsEnumerable,ev=(e,t,r)=>t in e?eu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eg=(e,t)=>{for(var r in t||(t={}))ef.call(t,r)&&ev(e,r,t[r]);if(em)for(var r of em(t))eb.call(t,r)&&ev(e,r,t[r]);return e},ey=(e,t)=>ep(e,eh(t));let eS=`
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
`,ew={type:"styles-api",data:ed.i,component:function(e){return i.createElement(c.P,ey(eg({},e),{dropdownOpened:!0,leftSection:i.createElement(ec.Z,{style:{width:(0,es.h)(18),height:(0,es.h)(18)},stroke:1.5}),withAsterisk:!0,label:"Select",description:"Description",placeholder:"Select",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]}))},code:eS,centered:!0,maxWidth:340},ex=(0,a.A)(o.us.Select);function ej(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,l.ah)(),e.components),{ComboboxDisclaimer:r,Demo:a,ComboboxData:o,ComboboxFiltering:i,ComboboxLargeData:c,ComboboxProps:s,InputFeatures:u,StylesApiSelectors:h,GetElementRef:f,InputAccessibility:v}=t;return o||eO("ComboboxData",!0),r||eO("ComboboxDisclaimer",!0),i||eO("ComboboxFiltering",!0),c||eO("ComboboxLargeData",!0),s||eO("ComboboxProps",!0),a||eO("Demo",!0),f||eO("GetElementRef",!0),v||eO("InputAccessibility",!0),u||eO("InputFeatures",!0),h||eO("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{component:"Select"}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Select"})," allows capturing user input based on suggestions from the list.\nUnlike ",(0,n.jsx)(t.a,{href:"/core/autocomplete/",children:"Autocomplete"}),", ",(0,n.jsx)(t.code,{children:"Select"})," does not allow entering custom values."]}),"\n",(0,n.jsx)(a,{data:d}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Select"})," value must be a string, other types are not supported.\n",(0,n.jsx)(t.code,{children:"onChange"})," function is called with a string value as a single argument."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Select } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <Select data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"allowDeselect"})," prop determines whether the value should be deselected when user clicks on the selected option.\nBy default, ",(0,n.jsx)(t.code,{children:"allowDeselect"})," is ",(0,n.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,n.jsx)(a,{data:p}),"\n",(0,n.jsx)(t.h2,{id:"searchable",children:"Searchable"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"searchable"})," prop to allow filtering options by user input:"]}),"\n",(0,n.jsx)(a,{data:m}),"\n",(0,n.jsx)(t.h2,{id:"nothing-found",children:"Nothing found"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"nothingFoundMessage"})," prop to display given message when no options match search query.\nIf ",(0,n.jsx)(t.code,{children:"nothingFoundMessage"})," is not set, ",(0,n.jsx)(t.code,{children:"Select"})," dropdown will be hidden when no options match search query.\nThe message is not displayed when trimmed search query is empty."]}),"\n",(0,n.jsx)(a,{data:b}),"\n",(0,n.jsx)(t.h2,{id:"checked-option-icon",children:"Checked option icon"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"checkIconPosition"})," prop to ",(0,n.jsx)(t.code,{children:"left"})," or ",(0,n.jsx)(t.code,{children:"right"})," to control position of check icon in active option.\nTo remove the check icon, set ",(0,n.jsx)(t.code,{children:"withCheckIcon={false}"}),"."]}),"\n",(0,n.jsx)(a,{data:V}),"\n",(0,n.jsx)(o,{component:"Select"}),"\n",(0,n.jsx)(i,{component:"Select"}),"\n",(0,n.jsx)(a,{data:A}),"\n",(0,n.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,n.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,n.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,n.jsx)(a,{data:I}),"\n",(0,n.jsx)(c,{component:"Select"}),"\n",(0,n.jsx)(a,{data:W}),"\n",(0,n.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,n.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,n.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,n.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,n.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,n.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,n.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,n.jsx)(a,{data:Z}),"\n",(0,n.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,n.jsx)(a,{data:z}),"\n",(0,n.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,n.jsx)(t.p,{children:"When option is disabled, it cannot be selected and is ignored in keyboard navigation."}),"\n",(0,n.jsx)(a,{data:L}),"\n",(0,n.jsx)(s,{component:"Select"}),"\n",(0,n.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,n.jsx)(u,{component:"Select",element:"input"}),"\n",(0,n.jsx)(a,{data:et}),"\n",(0,n.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,n.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,n.jsx)(t.code,{children:"Select"})," will not show suggestions and will not call ",(0,n.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,n.jsx)(a,{data:en}),"\n",(0,n.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,n.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,n.jsx)(t.code,{children:"Select"})," will not show suggestions."]}),"\n",(0,n.jsx)(a,{data:ea}),"\n",(0,n.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,n.jsx)(a,{data:ei}),"\n",(0,n.jsx)(h,{component:"Select"}),"\n",(0,n.jsx)(a,{data:ew}),"\n",(0,n.jsx)(f,{component:"Select",refType:"input"}),"\n",(0,n.jsx)(v,{component:"Select"})]})}var ek=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(ex,Object.assign({},e,{children:(0,n.jsx)(ej,e)}))};function eO(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},19225:function(e,t,r){"use strict";r.d(t,{r:function(){return p}});var n=r(67294),l=r(40624),a=r(45906),o=r(64485),i=r(85402),c=r(23803),s=r(17723);function d(e,t){return Array.isArray(e)?e.includes(t):e===t}function u({data:e,withCheckIcon:t,value:r,checkIconPosition:a,unstyled:p}){if(!(0,i.f)(e)){let i=t&&d(r,e.value)&&n.createElement(s.n,{className:c.Z.optionsDropdownCheckIcon});return n.createElement(o.h.Option,{value:e.value,disabled:e.disabled,className:(0,l.Z)({[c.Z.optionsDropdownOption]:!p}),"data-reverse":"right"===a||void 0,"data-checked":d(r,e.value)||void 0},"left"===a&&i,e.label,"right"===a&&i)}let h=e.items.map(e=>n.createElement(u,{data:e,key:e.value,unstyled:p}));return n.createElement(o.h.Group,{label:e.group},h)}function p({data:e,hidden:t,hiddenWhenEmpty:r,filter:l,search:s,limit:d,maxDropdownHeight:p,withScrollArea:h=!0,filterOptions:m=!0,withCheckIcon:f=!1,value:b,checkIconPosition:v,nothingFoundMessage:g,unstyled:y}){!function e(t,r=new Set){if(Array.isArray(t))for(let n of t)if((0,i.f)(n))e(n.items,r);else{if(void 0===n.value)throw Error("[@mantine/core] Each option must have value property");if("string"!=typeof n.value)throw Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof n.value}`);if(r.has(n.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${n.value}" was provided more than once`);r.add(n.value)}}(e);let S="string"==typeof s?(l||function e({options:t,search:r,limit:n}){let l=r.trim().toLowerCase(),a=[];for(let o=0;o<t.length;o+=1){let c=t[o];if(a.length===n)break;(0,i.f)(c)&&a.push({group:c.group,items:e({options:c.items,search:r,limit:n-a.length})}),!(0,i.f)(c)&&c.label.toLowerCase().includes(l)&&a.push(c)}return a})({options:e,search:m?s:"",limit:null!=d?d:1/0}):e,w=function(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}(S),x=S.map(e=>n.createElement(u,{data:e,key:(0,i.f)(e)?e.group:e.value,withCheckIcon:f,value:b,checkIconPosition:v,unstyled:y}));return n.createElement(o.h.Dropdown,{hidden:t||r&&w},n.createElement(o.h.Options,null,h?n.createElement(a.x.Autosize,{mah:null!=p?p:220,type:"scroll",scrollbarSize:"var(--_combobox-padding)",offsetScrollbars:"y",className:c.Z.optionsDropdownScrollArea},x):x,w&&g&&n.createElement(o.h.Empty,null,g)))}},85402:function(e,t,r){"use strict";function n(e){return"group"in e}r.d(t,{f:function(){return n}})},43154:function(e,t,r){"use strict";r.d(t,{g:function(){return function e(t){return t.reduce((t,r)=>"group"in r?c(c({},t),e(r.items)):(t[r.value]=r,t),{})}}});var n=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&i(e,r,t[r]);if(l)for(var r of l(t))o.call(t,r)&&i(e,r,t[r]);return e}},92079:function(e,t,r){"use strict";r.d(t,{P:function(){return O}});var n=r(67294),l=r(35179),a=r(98008),o=r(43154),i=r(14437),c=r(64485),s=r(95879),d=r(19225),u=r(75144),p=r(35577),h=r(19732),m=Object.defineProperty,f=Object.defineProperties,b=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,S=(e,t,r)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,w=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&S(e,r,t[r]);if(v)for(var r of v(t))y.call(t,r)&&S(e,r,t[r]);return e},x=(e,t)=>f(e,b(t)),j=(e,t)=>{var r={};for(var n in e)g.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&v)for(var n of v(e))0>t.indexOf(n)&&y.call(e,n)&&(r[n]=e[n]);return r};let k={searchable:!1,withCheckIcon:!0,allowDeselect:!0,checkIconPosition:"left"},O=(0,u.d)((e,t)=>{let r=(0,p.w)("Select",k,e),{classNames:u,styles:m,unstyled:f,vars:b,dropdownOpened:v,defaultDropdownOpened:g,onDropdownClose:y,onDropdownOpen:S,onFocus:O,onBlur:P,onClick:V,onChange:E,data:D,value:A,defaultValue:C,selectFirstOptionOnChange:R,onOptionSubmit:I,comboboxProps:M,readOnly:F,disabled:W,filter:N,limit:Y,withScrollArea:Z,maxDropdownHeight:_,size:z,searchable:B,rightSection:L,checkIconPosition:T,withCheckIcon:H,nothingFoundMessage:U,name:$,form:G,searchValue:q,defaultSearchValue:X,onSearchChange:K,allowDeselect:J,error:Q,rightSectionPointerEvents:ee}=r,et=j(r,["classNames","styles","unstyled","vars","dropdownOpened","defaultDropdownOpened","onDropdownClose","onDropdownOpen","onFocus","onBlur","onClick","onChange","data","value","defaultValue","selectFirstOptionOnChange","onOptionSubmit","comboboxProps","readOnly","disabled","filter","limit","withScrollArea","maxDropdownHeight","size","searchable","rightSection","checkIconPosition","withCheckIcon","nothingFoundMessage","name","form","searchValue","defaultSearchValue","onSearchChange","allowDeselect","error","rightSectionPointerEvents"]),er=(0,a.R)(D),en=(0,o.g)(er),[el,ea]=(0,l.C)({value:A,defaultValue:C,finalValue:null,onChange:E}),eo=el?en[el]:void 0,[ei,ec]=(0,l.C)({value:q,defaultValue:X,finalValue:eo?eo.label:"",onChange:K}),es=(0,i.K)({opened:v,defaultOpened:g,onDropdownOpen:S,onDropdownClose:()=>{null==y||y(),es.resetSelectedOption()}}),{resolvedClassNames:ed,resolvedStyles:eu}=(0,h.h)({props:r,styles:m,classNames:u});return(0,n.useEffect)(()=>{R&&es.selectFirstOption()},[R,el]),(0,n.useEffect)(()=>{null===A&&ec(""),"string"==typeof A&&en[A]&&ec(en[A].label)},[A]),n.createElement(n.Fragment,null,n.createElement(c.h,w({store:es,__staticSelector:"Select",classNames:ed,styles:eu,unstyled:f,readOnly:F,onOptionSubmit:e=>{null==I||I(e);let t=J&&en[e].value===el?null:en[e].value;ea(t),ec(t?en[e].label:""),es.closeDropdown()},size:z},M),n.createElement(c.h.Target,{targetType:B?"input":"button"},n.createElement(s.M,x(w({ref:t,rightSection:L||n.createElement(c.h.Chevron,{size:z,error:Q,unstyled:f}),rightSectionPointerEvents:ee||"none"},et),{size:z,__staticSelector:"Select",disabled:W,readOnly:F||!B,value:ei,onChange:e=>{ec(e.currentTarget.value),es.openDropdown(),R&&es.selectFirstOption()},onFocus:e=>{B&&es.openDropdown(),null==O||O(e)},onBlur:e=>{B&&es.closeDropdown(),ec(el?en[el].label:""),null==P||P(e)},onClick:e=>{B?es.openDropdown():es.toggleDropdown(),null==V||V(e)},classNames:ed,styles:eu,unstyled:f,pointer:!B,error:Q}))),n.createElement(d.r,{data:er,hidden:F||W,filter:N,search:ei,limit:Y,hiddenWhenEmpty:!B||!U,withScrollArea:Z,maxDropdownHeight:_,filterOptions:B&&(null==eo?void 0:eo.label)!==ei,value:el,checkIconPosition:T,withCheckIcon:H,nothingFoundMessage:U,unstyled:f})),n.createElement("input",{type:"hidden",name:$,value:el||"",form:G,disabled:W}))});O.classes=w(w({},s.M.classes),c.h.classes),O.displayName="@mantine/core/Select"},51343:function(e,t,r){"use strict";r.d(t,{Mt:function(){return n},nW:function(){return l},pc:function(){return a}});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],l=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],a=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[1300,178,4485,9774,2888,179],function(){return e(e.s=36307)}),_N_E=e.O()}]);