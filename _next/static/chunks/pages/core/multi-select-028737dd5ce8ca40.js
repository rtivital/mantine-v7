(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9353],{82843:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/multi-select",function(){return l(52455)}])},52455:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return eJ}});var r=l(85893),a=l(11151),n=l(34940),o=l(34200),i=l(67294),c=l(35179),s=l(85402),u=l(98008),d=l(43154),p=l(14437),m=l(92292),h=l(64485),f=l(97382),b=l(19225),v=l(39213),y=l(75144),g=l(35577),x=l(91090),S=l(25637),j=l(19732),w=Object.defineProperty,O=Object.defineProperties,P=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,D=(e,t,l)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,E=(e,t)=>{for(var l in t||(t={}))M.call(t,l)&&D(e,l,t[l]);if(V)for(var l of V(t))k.call(t,l)&&D(e,l,t[l]);return e},A=(e,t)=>O(e,P(t)),C=(e,t)=>{var l={};for(var r in e)M.call(e,r)&&0>t.indexOf(r)&&(l[r]=e[r]);if(null!=e&&V)for(var r of V(e))0>t.indexOf(r)&&k.call(e,r)&&(l[r]=e[r]);return l};let I={maxValues:1/0,size:"sm",withCheckIcon:!0,checkIconPosition:"left"},R=(0,y.d)((e,t)=>{let l=(0,g.w)("MultiSelect",I,e),{classNames:r,className:a,style:n,styles:o,unstyled:v,vars:y,size:w,value:O,defaultValue:P,onChange:V,onKeyDown:M,variant:k,data:D,dropdownOpened:R,defaultDropdownOpened:W,onDropdownOpen:F,onDropdownClose:N,selectFirstOptionOnChange:z,onOptionSubmit:Y,comboboxProps:_,filter:B,limit:L,withScrollArea:H,maxDropdownHeight:T,searchValue:G,defaultSearchValue:$,onSearchChange:U,readOnly:Z,disabled:q,onFocus:K,onBlur:X,onPaste:J,radius:Q,rightSection:ee,rightSectionWidth:et,rightSectionPointerEvents:el,rightSectionProps:er,leftSection:ea,leftSectionWidth:en,leftSectionPointerEvents:eo,leftSectionProps:ei,inputContainer:ec,inputWrapperOrder:es,withAsterisk:eu,labelProps:ed,descriptionProps:ep,errorProps:em,wrapperProps:eh,description:ef,label:eb,error:ev,maxValues:ey,searchable:eg,nothingFoundMessage:ex,withCheckIcon:eS,checkIconPosition:ej,hidePickedOptions:ew,withErrorStyles:eO}=l,eP=C(l,["classNames","className","style","styles","unstyled","vars","size","value","defaultValue","onChange","onKeyDown","variant","data","dropdownOpened","defaultDropdownOpened","onDropdownOpen","onDropdownClose","selectFirstOptionOnChange","onOptionSubmit","comboboxProps","filter","limit","withScrollArea","maxDropdownHeight","searchValue","defaultSearchValue","onSearchChange","readOnly","disabled","onFocus","onBlur","onPaste","radius","rightSection","rightSectionWidth","rightSectionPointerEvents","rightSectionProps","leftSection","leftSectionWidth","leftSectionPointerEvents","leftSectionProps","inputContainer","inputWrapperOrder","withAsterisk","labelProps","descriptionProps","errorProps","wrapperProps","description","label","error","maxValues","searchable","nothingFoundMessage","withCheckIcon","checkIconPosition","hidePickedOptions","withErrorStyles"]),eV=(0,u.R)(D),eM=(0,d.g)(eV),ek=(0,p.K)({opened:R,defaultOpened:W,onDropdownOpen:F,onDropdownClose:()=>{null==N||N(),ek.resetSelectedOption()}}),{styleProps:eD,rest:eE}=(0,x.c)(eP),eA=C(eE,["type"]),[eC,eI]=(0,c.C)({value:O,defaultValue:P,finalValue:[],onChange:V}),[eR,eW]=(0,c.C)({value:G,defaultValue:$,finalValue:"",onChange:U}),eF=(0,S.y)({name:"MultiSelect",classes:{},props:l,classNames:r,styles:o,unstyled:v}),{resolvedClassNames:eN,resolvedStyles:ez}=(0,j.h)({props:l,styles:o,classNames:r}),eY=e=>{null==M||M(e),"Backspace"===e.key&&0===eR.length&&eC.length>0&&eI(eC.slice(0,eC.length-1))},e_=eC.map((e,t)=>i.createElement(m.D,E({key:`${e}-${t}`,withRemoveButton:!Z,onRemove:()=>eI(eC.filter(t=>e!==t))},eF("pill")),e));return i.createElement(h.h,E({store:ek,classNames:eN,styles:ez,unstyled:v,size:w,__staticSelector:"MultiSelect",onOptionSubmit:e=>{null==Y||Y(e),eW(""),ek.updateSelectedOptionIndex("selected"),eC.includes(eM[e].value)?eI(eC.filter(t=>t!==eM[e].value)):eC.length<ey&&eI([...eC,eM[e].value])}},_),i.createElement(h.h.DropdownTarget,null,i.createElement(f.d,A(E({},eD),{__staticSelector:"MultiSelect",classNames:eN,styles:ez,unstyled:v,size:w,className:a,style:n,variant:k,disabled:q,radius:Q,rightSection:ee,rightSectionWidth:et,rightSectionPointerEvents:el,rightSectionProps:er,leftSection:ea,leftSectionWidth:en,leftSectionPointerEvents:eo,leftSectionProps:ei,inputContainer:ec,inputWrapperOrder:es,withAsterisk:eu,labelProps:ed,descriptionProps:ep,errorProps:em,wrapperProps:eh,description:ef,label:eb,error:ev,multiline:!0,withErrorStyles:eO,__stylesApiProps:A(E({},l),{multiline:!0}),pointer:!eg,onClick:()=>eg?ek.openDropdown():ek.toggleDropdown()}),i.createElement(m.D.Group,E({disabled:q},eF("pillsList")),e_,i.createElement(h.h.EventsTarget,null,i.createElement(f.d.Field,A(E(A(E({},eA),{ref:t}),eF("inputField")),{unstyled:v,onFocus:e=>{null==K||K(e),eg&&ek.openDropdown()},onBlur:e=>{null==X||X(e),ek.closeDropdown(),eg&&ek.closeDropdown(),eW("")},onKeyDown:eY,value:eR,onChange:e=>{eW(e.currentTarget.value),eg&&ek.openDropdown()},disabled:q,readOnly:Z||!eg,pointer:!eg})))))),i.createElement(b.r,{data:ew?function({data:e,value:t}){let l=t.map(e=>e.trim().toLowerCase()),r=e.reduce((e,t)=>((0,s.f)(t)?e.push({group:t.group,items:t.items.filter(e=>-1===l.indexOf(e.label.toLowerCase().trim()))}):-1===l.indexOf(t.label.toLowerCase().trim())&&e.push(t),e),[]);return r}({data:eV,value:eC}):eV,hidden:Z||q,filter:B,search:eR,limit:L,hiddenWhenEmpty:ew||!ex||!eg&&0!==eR.trim().length,withScrollArea:H,maxDropdownHeight:T,filterOptions:eg,value:eC,checkIconPosition:ej,withCheckIcon:eS,nothingFoundMessage:ex}))});R.classes=E(E({},v.M.classes),h.h.classes),R.displayName="@mantine/core/MultiSelect";let W=`
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
`,F={type:"code",component:function(){return i.createElement(R,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"]})},code:W,maxWidth:340,centered:!0},N=`
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
`,z={type:"code",component:function(){return i.createElement(R,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0})},code:N,maxWidth:340,centered:!0},Y=`
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
`,_={type:"code",component:function(){return i.createElement(R,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0,nothingFoundMessage:"Nothing found..."})},code:Y,maxWidth:340,centered:!0};var B=Object.defineProperty,L=Object.defineProperties,H=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,U=(e,t,l)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,Z=(e,t)=>{for(var l in t||(t={}))G.call(t,l)&&U(e,l,t[l]);if(T)for(var l of T(t))$.call(t,l)&&U(e,l,t[l]);return e},q=(e,t)=>L(e,H(t));let K=`
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
`,X={type:"configurator",component:function(e){return i.createElement(R,q(Z({},e),{data:["React","Angular","Svelte","Vue"],dropdownOpened:!0,pb:150,label:"Control check icon",placeholder:"Pick value",defaultValue:["React"]}))},code:K,centered:!0,maxWidth:340,controls:[{type:"boolean",prop:"withCheckIcon",initialValue:!0,libraryValue:!0},{type:"segmented",prop:"checkIconPosition",initialValue:"left",libraryValue:null,data:["left","right"]}]},J=`
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
`,Q={type:"code",component:function(){return i.createElement(R,{label:"Your favorite libraries",placeholder:"Select up to 2 libraries",data:["React","Angular","Vue","Svelte"],maxValues:2})},code:J,maxWidth:340,centered:!0},ee=`
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
`,et={type:"code",component:function(){return i.createElement(R,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],hidePickedOptions:!0})},code:ee,maxWidth:340,centered:!0},el=`
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
`,er=({options:e,search:t})=>{let l=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return l.every(e=>t.some(t=>t.includes(e)))})},ea={type:"code",component:function(){return i.createElement(R,{label:"What countries have you visited?",placeholder:"Pick values",data:["Great Britain","Russian Federation","United States"],filter:er,searchable:!0})},code:el,maxWidth:340,centered:!0},en=`
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
`,eo=({options:e,search:t})=>{let l=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return l.sort((e,t)=>e.label.localeCompare(t.label)),l},ei={type:"code",component:function(){return i.createElement(R,{label:"Your favorite libraries",placeholder:"Pick values",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:eo,searchable:!0})},code:en,maxWidth:340,centered:!0},ec=`
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
`,es=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),eu={type:"code",component:function(){return i.createElement(R,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:es,searchable:!0})},code:ec,maxWidth:340,centered:!0},ed=`
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
`,ep=Array(100).fill(0).map((e,t)=>`Option ${t}`),em={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(R,{label:"With scroll area (default)",placeholder:"Pick value",data:ep,maxDropdownHeight:200}),i.createElement(R,{label:"With native scroll",placeholder:"Pick value",data:ep,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"}))},code:ed,maxWidth:340,centered:!0},eh=`
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
`,ef={type:"code",component:function(){return i.createElement(R,{label:"Your favorite libraries",placeholder:"Pick value",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:eh,maxWidth:340,centered:!0},eb=`
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
`,ev={type:"code",component:function(){return i.createElement(R,{label:"Your favorite libraries",placeholder:"Pick value",data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}]})},code:eb,maxWidth:340,centered:!0};var ey=l(51343),eg=Object.defineProperty,ex=Object.defineProperties,eS=Object.getOwnPropertyDescriptors,ej=Object.getOwnPropertySymbols,ew=Object.prototype.hasOwnProperty,eO=Object.prototype.propertyIsEnumerable,eP=(e,t,l)=>t in e?eg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,eV=(e,t)=>{for(var l in t||(t={}))ew.call(t,l)&&eP(e,l,t[l]);if(ej)for(var l of ej(t))eO.call(t,l)&&eP(e,l,t[l]);return e},eM=(e,t)=>ex(e,eS(t));let ek=`
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
`,eD={type:"configurator",component:function(e){return i.createElement(R,eM(eV({},e),{placeholder:"MultiSelect placeholder",data:["React","Angular","Vue","Svelte"]}))},code:ek,centered:!0,maxWidth:340,controls:ey.pc},eE=`
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
`,eA={type:"code",component:function(){return i.createElement(R,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:eE,maxWidth:340,centered:!0},eC=`
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
`,eI={type:"code",component:function(){return i.createElement(R,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:eC,maxWidth:340,centered:!0},eR=`
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
`,eW={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(R,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),i.createElement(R,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]}))},maxWidth:340,centered:!0,code:eR};var eF=l(93693),eN=l(46393),ez=l(5295),eY=Object.defineProperty,e_=Object.defineProperties,eB=Object.getOwnPropertyDescriptors,eL=Object.getOwnPropertySymbols,eH=Object.prototype.hasOwnProperty,eT=Object.prototype.propertyIsEnumerable,eG=(e,t,l)=>t in e?eY(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,e$=(e,t)=>{for(var l in t||(t={}))eH.call(t,l)&&eG(e,l,t[l]);if(eL)for(var l of eL(t))eT.call(t,l)&&eG(e,l,t[l]);return e},eU=(e,t)=>e_(e,eB(t));let eZ=`
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
      defaultValue={['First', 'Second']}
      data={['React', 'Angular']}
    />
  );
}
`,eq={type:"styles-api",data:ez.L,component:function(e){return i.createElement(R,eU(e$({},e),{dropdownOpened:!0,leftSection:i.createElement(eF.Z,{style:{width:(0,eN.h)(18),height:(0,eN.h)(18)},stroke:1.5}),withAsterisk:!0,label:"MultiSelect",description:"Description",placeholder:"MultiSelect",defaultValue:["First","Second"],data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]}))},code:eZ,centered:!0,maxWidth:340},eK=(0,n.A)(o.us.MultiSelect);function eX(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,a.ah)(),e.components),{ComboboxDisclaimer:l,Demo:n,ComboboxData:o,ComboboxFiltering:i,ComboboxLargeData:c,ComboboxProps:s,InputFeatures:u,StylesApiSelectors:d,GetElementRef:p,InputAccessibility:m}=t;return o||eQ("ComboboxData",!0),l||eQ("ComboboxDisclaimer",!0),i||eQ("ComboboxFiltering",!0),c||eQ("ComboboxLargeData",!0),s||eQ("ComboboxProps",!0),n||eQ("Demo",!0),p||eQ("GetElementRef",!0),m||eQ("InputAccessibility",!0),u||eQ("InputFeatures",!0),d||eQ("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{component:"MultiSelect"}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"MultiSelect"})," provides a way to enter multiple values.\n",(0,r.jsx)(t.code,{children:"MultiSelect"})," is similar to ",(0,r.jsx)(t.a,{href:"/core/tags-input",children:"MultiSelect"}),", but it does not allow entering custom values."]}),"\n",(0,r.jsx)(n,{data:F}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"MultiSelect"})," value must be an array of strings, other types are not supported.\n",(0,r.jsx)(t.code,{children:"onChange"})," function is called with an array of strings as a single argument."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { MultiSelect } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n  return <MultiSelect data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"searchable",children:"Searchable"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"searchable"})," prop to allow filtering options by user input:"]}),"\n",(0,r.jsx)(n,{data:z}),"\n",(0,r.jsx)(t.h2,{id:"nothing-found",children:"Nothing found"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"nothingFoundMessage"})," prop to display given message when no options match search query.\nIf ",(0,r.jsx)(t.code,{children:"nothingFoundMessage"})," is not set, ",(0,r.jsx)(t.code,{children:"MultiSelect"})," dropdown will be hidden when no options match search query.\nThe message is not displayed when trimmed search query is empty."]}),"\n",(0,r.jsx)(n,{data:_}),"\n",(0,r.jsx)(t.h2,{id:"checked-option-icon",children:"Checked option icon"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"checkIconPosition"})," prop to ",(0,r.jsx)(t.code,{children:"left"})," or ",(0,r.jsx)(t.code,{children:"right"})," to control position of check icon in active option.\nTo remove the check icon, set ",(0,r.jsx)(t.code,{children:"withCheckIcon={false}"}),"."]}),"\n",(0,r.jsx)(n,{data:X}),"\n",(0,r.jsx)(t.h2,{id:"max-selected-values",children:"Max selected values"}),"\n",(0,r.jsxs)(t.p,{children:["You can limit the number of selected values with ",(0,r.jsx)(t.code,{children:"maxValues"})," prop. This will not allow adding more values\nonce the limit is reached."]}),"\n",(0,r.jsx)(n,{data:Q}),"\n",(0,r.jsx)(t.h2,{id:"hide-selected-options",children:"Hide selected options"}),"\n",(0,r.jsxs)(t.p,{children:["To remove selected options from the list of available options, set ",(0,r.jsx)(t.code,{children:"hidePickedOptions"})," prop:"]}),"\n",(0,r.jsx)(n,{data:et}),"\n",(0,r.jsx)(o,{component:"MultiSelect"}),"\n",(0,r.jsx)(i,{component:"MultiSelect"}),"\n",(0,r.jsx)(n,{data:ea}),"\n",(0,r.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,r.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,r.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,r.jsx)(n,{data:ei}),"\n",(0,r.jsx)(c,{component:"MultiSelect"}),"\n",(0,r.jsx)(n,{data:eu}),"\n",(0,r.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,r.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,r.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,r.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,r.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,r.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,r.jsx)(n,{data:em}),"\n",(0,r.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,r.jsx)(n,{data:ef}),"\n",(0,r.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,r.jsxs)(t.p,{children:["When option is disabled, it cannot be selected and is ignored in keyboard navigation.\nNote that user can still enter disabled option as a value. If you want to prohibit certain values,\nuse controlled component and filter them out in ",(0,r.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,r.jsx)(n,{data:ev}),"\n",(0,r.jsx)(s,{component:"MultiSelect"}),"\n",(0,r.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,r.jsx)(u,{component:"MultiSelect",element:"input"}),"\n",(0,r.jsx)(n,{data:eD}),"\n",(0,r.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,r.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,r.jsx)(t.code,{children:"MultiSelect"})," will not show suggestions and will not call ",(0,r.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,r.jsx)(n,{data:eA}),"\n",(0,r.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,r.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,r.jsx)(t.code,{children:"MultiSelect"})," will not show suggestions."]}),"\n",(0,r.jsx)(n,{data:eI}),"\n",(0,r.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,r.jsx)(n,{data:eW}),"\n",(0,r.jsx)(d,{component:"MultiSelect"}),"\n",(0,r.jsx)(n,{data:eq}),"\n",(0,r.jsx)(p,{component:"MultiSelect",refType:"input"}),"\n",(0,r.jsx)(m,{component:"MultiSelect"})]})}var eJ=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(eK,Object.assign({},e,{children:(0,r.jsx)(eX,e)}))};function eQ(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});var r=(0,l(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},92292:function(e,t,l){"use strict";l.d(t,{D:function(){return z}});var r=l(67294),a=l(51428);let[n,o]=(0,a.V)();var i=l(76667),c={root:"m-7cda1cd6","root--default":"m-44da308b","root--contrast":"m-e3a01f8",label:"m-1e0e6180",remove:"m-ae386778",group:"m-1dcfd90b"},s=l(75144),u=l(35577),d=l(25637),p=l(13671),m=l(95553),h=l(71350),f=Object.defineProperty,b=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,g=(e,t,l)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,x=(e,t)=>{for(var l in t||(t={}))v.call(t,l)&&g(e,l,t[l]);if(b)for(var l of b(t))y.call(t,l)&&g(e,l,t[l]);return e},S=(e,t)=>{var l={};for(var r in e)v.call(e,r)&&0>t.indexOf(r)&&(l[r]=e[r]);if(null!=e&&b)for(var r of b(e))0>t.indexOf(r)&&y.call(e,r)&&(l[r]=e[r]);return l};let j={},w=(0,m.Z)((e,{gap:t},{size:l})=>({group:{"--pg-gap":void 0!==t?(0,h.ap)(t):(0,h.ap)(l,"pg-gap")}})),O=(0,s.d)((e,t)=>{let l=(0,u.w)("PillGroup",j,e),{classNames:a,className:o,style:s,styles:m,unstyled:h,vars:f,size:b,disabled:v}=l,y=S(l,["classNames","className","style","styles","unstyled","vars","size","disabled"]),g=(0,i.D)(),O=(null==g?void 0:g.size)||b||"sm",P=(0,d.y)({name:"PillGroup",classes:c,props:l,className:o,style:s,classNames:a,styles:m,unstyled:h,vars:f,varsResolver:w,stylesCtx:{size:O},rootSelector:"group"});return r.createElement(n,{value:{size:O,disabled:v}},r.createElement(p.x,x(x({ref:t,size:O},P("group")),y)))});O.classes=c,O.displayName="@mantine/core/PillGroup";var P=l(75675),V=Object.defineProperty,M=Object.defineProperties,k=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,C=(e,t,l)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,I=(e,t)=>{for(var l in t||(t={}))E.call(t,l)&&C(e,l,t[l]);if(D)for(var l of D(t))A.call(t,l)&&C(e,l,t[l]);return e},R=(e,t)=>M(e,k(t)),W=(e,t)=>{var l={};for(var r in e)E.call(e,r)&&0>t.indexOf(r)&&(l[r]=e[r]);if(null!=e&&D)for(var r of D(e))0>t.indexOf(r)&&A.call(e,r)&&(l[r]=e[r]);return l};let F={radius:"xl",variant:"default"},N=(0,m.Z)((e,{radius:t},{size:l})=>({root:{"--pill-fz":(0,h.ap)(l,"pill-fz"),"--pill-height":(0,h.ap)(l,"pill-height"),"--pill-radius":(0,h.H5)(t)}})),z=(0,s.d)((e,t)=>{let l=(0,u.w)("Pill",F,e),{classNames:a,className:n,style:s,styles:m,unstyled:h,vars:f,variant:b,children:v,withRemoveButton:y,onRemove:g,removeButtonProps:x,radius:S,size:j,disabled:w}=l,O=W(l,["classNames","className","style","styles","unstyled","vars","variant","children","withRemoveButton","onRemove","removeButtonProps","radius","size","disabled"]),V=o(),M=(0,i.D)(),k=j||(null==V?void 0:V.size)||"sm",D=(null==M?void 0:M.variant)==="filled"?"contrast":b||"default",E=(0,d.y)({name:"Pill",classes:c,props:l,className:n,style:s,classNames:a,styles:m,unstyled:h,vars:f,varsResolver:N,stylesCtx:{size:k}});return r.createElement(p.x,I(R(I({component:"span",ref:t,variant:D,size:k},E("root",{variant:D})),{mod:{"with-remove":y,disabled:w||(null==V?void 0:V.disabled)}}),O),r.createElement("span",I({},E("label")),v),y&&r.createElement(P.P,R(I(I({iconSize:"70%",variant:"transparent",radius:S,tabIndex:-1,"aria-hidden":!0},x),E("remove",{className:null==x?void 0:x.className,style:null==x?void 0:x.style})),{onMouseDown:e=>{var t;e.preventDefault(),e.stopPropagation(),null==(t=null==x?void 0:x.onMouseDown)||t.call(x,e)},onClick:e=>{var t;e.stopPropagation(),null==g||g(),null==(t=null==x?void 0:x.onClick)||t.call(x,e)}})))});z.classes=c,z.displayName="@mantine/core/Pill",z.Group=O},76667:function(e,t,l){"use strict";l.d(t,{D:function(){return n},H:function(){return a}});var r=l(51428);let[a,n]=(0,r.V)()},97382:function(e,t,l){"use strict";l.d(t,{d:function(){return F}});var r=l(67294),a=l(76667),n=l(382),o={field:"m-45c4369d"},i=l(41351),c=l(75144),s=l(35577),u=l(25637),d=l(13671),p=Object.defineProperty,m=Object.defineProperties,h=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,l)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,g=(e,t)=>{for(var l in t||(t={}))b.call(t,l)&&y(e,l,t[l]);if(f)for(var l of f(t))v.call(t,l)&&y(e,l,t[l]);return e},x=(e,t)=>m(e,h(t)),S=(e,t)=>{var l={};for(var r in e)b.call(e,r)&&0>t.indexOf(r)&&(l[r]=e[r]);if(null!=e&&f)for(var r of f(e))0>t.indexOf(r)&&v.call(e,r)&&(l[r]=e[r]);return l};let j={type:"visible"},w=(0,c.d)((e,t)=>{let l=(0,s.w)("PillsInputField",j,e),{classNames:c,className:p,style:m,styles:h,unstyled:f,vars:b,type:v,disabled:y,id:w,pointer:O}=l,P=S(l,["classNames","className","style","styles","unstyled","vars","type","disabled","id","pointer"]),V=(0,a.D)(),M=(0,i.D)(),k=(0,u.y)({name:"PillsInputField",classes:o,props:l,className:p,style:m,classNames:c,styles:h,unstyled:f,rootSelector:"field"}),D=y||(null==V?void 0:V.disabled);return r.createElement(d.x,x(g(g({component:"input",ref:(0,n.Yx)(t,null==V?void 0:V.fieldRef),"data-type":v,disabled:D,mod:{disabled:D,pointer:O}},k("field")),P),{id:(null==M?void 0:M.inputId)||w,"aria-invalid":null==V?void 0:V.hasError,"aria-describedby":null==M?void 0:M.describedBy}))});w.classes=o,w.displayName="@mantine/core/PillsInputField";var O=l(39213),P=Object.defineProperty,V=Object.defineProperties,M=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,A=(e,t,l)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,C=(e,t)=>{for(var l in t||(t={}))D.call(t,l)&&A(e,l,t[l]);if(k)for(var l of k(t))E.call(t,l)&&A(e,l,t[l]);return e},I=(e,t)=>V(e,M(t)),R=(e,t)=>{var l={};for(var r in e)D.call(e,r)&&0>t.indexOf(r)&&(l[r]=e[r]);if(null!=e&&k)for(var r of k(e))0>t.indexOf(r)&&E.call(e,r)&&(l[r]=e[r]);return l};let W={size:"sm"},F=(0,c.d)((e,t)=>{let l=(0,s.w)("PillsInput",W,e),{children:n,onMouseDown:o,onClick:i,size:c,disabled:u,__staticSelector:d,error:p,variant:m}=l,h=R(l,["children","onMouseDown","onClick","size","disabled","__staticSelector","error","variant"]),f=(0,r.useRef)();return r.createElement(a.H,{value:{fieldRef:f,size:c,disabled:u,hasError:!!p,variant:m}},r.createElement(O.M,I(C({size:c,error:p,variant:m,component:"div",ref:t,onMouseDown:e=>{var t;e.preventDefault(),null==o||o(e),null==(t=f.current)||t.focus()},onClick:e=>{var t;e.preventDefault(),null==i||i(e),null==(t=f.current)||t.focus()}},h),{multiline:!0,disabled:u,__staticSelector:d||"PillsInput",withAria:!1}),n))});F.displayName="@mantine/core/PillsInput",F.Field=w},51343:function(e,t,l){"use strict";l.d(t,{Mt:function(){return r},nW:function(){return a},pc:function(){return n}});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],a=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[2411,7437,4485,4259,9774,2888,179],function(){return e(e.s=82843)}),_N_E=e.O()}]);