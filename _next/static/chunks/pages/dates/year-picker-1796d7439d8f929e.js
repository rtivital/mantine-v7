(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7395],{91540:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/year-picker",function(){return n(23007)}])},23007:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var a=n(85893),r=n(11151),l=n(19905),o=n(9904),s=n(21484),i=n(33106);let{usage:c,multiple:u,deselect:d,range:m,singleRange:p,numberOfColumns:f,sizeConfigurator:h}=(0,i.$)(s.q);var g=n(67294);let y=`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker defaultDate={new Date(2040, 1)} value={value} onChange={setValue} />;
}
`,x={type:"code",centered:!0,component:function(){let[e,t]=(0,g.useState)(null);return g.createElement(s.q,{defaultDate:new Date(2040,1),value:e,onChange:t})},code:y},j=`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [date, setDate] = useState(new Date());

  const handleChange = (val: [Date | null, Date | null]) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => new Date(current.getFullYear() + 20, 1));
    }

    setValue(val);
  };

  return (
    <YearPicker
      date={date}
      onDateChange={setDate}
      type="range"
      value={value}
      onChange={handleChange}
    />
  );
}
`,D={type:"code",centered:!0,component:function(){let[e,t]=(0,g.useState)([null,null]),[n,a]=(0,g.useState)(new Date),r=e=>{null!==e[0]&&null===e[1]&&a(e=>new Date(e.getFullYear()+20,1)),t(e)};return g.createElement(s.q,{date:n,onDateChange:a,type:"range",value:e,onChange:r})},code:j},v=`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <YearPicker
      value={value}
      onChange={setValue}
      minDate={new Date(2021, 1)}
      maxDate={new Date(2028, 1)}
    />
  );
}
`,b={type:"code",centered:!0,component:function(){let[e,t]=(0,g.useState)(null);return g.createElement(s.q,{value:e,onChange:t,minDate:new Date(2021,1),maxDate:new Date(2028,1)})},code:v},S=`
import { useState } from 'react';
import { YearPicker, YearPickerProps } from '@mantine/dates';

const getYearControlProps: YearPickerProps['getYearControlProps'] = (date) => {
  if (date.getFullYear() === new Date().getFullYear()) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (date.getFullYear() === new Date().getFullYear() + 1) {
    return { disabled: true };
  }

  return {};
};

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker value={value} onChange={setValue} getYearControlProps={getYearControlProps} />;
}
`,w=e=>e.getFullYear()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:e.getFullYear()===new Date().getFullYear()+1?{disabled:!0}:{},Y={type:"code",centered:!0,component:function(){let[e,t]=(0,g.useState)(null);return g.createElement(s.q,{value:e,onChange:t,getYearControlProps:w})},code:S},C=`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker yearsListFormat="YY" value={value} onChange={setValue} />;
}
`,P={type:"code",centered:!0,component:function(){let[e,t]=(0,g.useState)(null);return g.createElement(s.q,{yearsListFormat:"YY",value:e,onChange:t})},code:C},k=`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker decadeLabelFormat="YY" value={value} onChange={setValue} />;
}
`,V={type:"code",centered:!0,component:function(){let[e,t]=(0,g.useState)(null);return g.createElement(s.q,{decadeLabelFormat:"YY",value:e,onChange:t})},code:k},E=(0,l.A)(o.us.YearPicker);function F(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",h3:"h3",pre:"pre"},(0,r.ah)(),e.components),{Demo:n,KeyboardEventsTable:l}=t;return n||N("Demo",!0),l||N("KeyboardEventsTable",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n,{data:c}),"\n",(0,a.jsx)(t.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"allowDeselect"})," to allow user to deselect current selected date by clicking on it.\n",(0,a.jsx)(t.code,{children:"allowDeselect"})," is disregarded when ",(0,a.jsx)(t.code,{children:"type"})," prop is ",(0,a.jsx)(t.code,{children:"range"})," or ",(0,a.jsx)(t.code,{children:"multiple"}),". When date is\ndeselected ",(0,a.jsx)(t.code,{children:"onChange"})," is called with ",(0,a.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,a.jsx)(n,{data:d}),"\n",(0,a.jsx)(t.h2,{id:"multiple-dates",children:"Multiple dates"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:'type="multiple"'})," to allow user to pick multiple dates:"]}),"\n",(0,a.jsx)(n,{data:u}),"\n",(0,a.jsx)(t.h2,{id:"dates-range",children:"Dates range"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:'type="range"'})," to allow user to pick dates range:"]}),"\n",(0,a.jsx)(n,{data:m}),"\n",(0,a.jsx)(t.h2,{id:"single-date-in-range",children:"Single date in range"}),"\n",(0,a.jsxs)(t.p,{children:["By default, it is not allowed to select single date as range – when user clicks the same date second time it is deselected.\nTo change this behavior set ",(0,a.jsx)(t.code,{children:"allowSingleDateInRange"})," prop. ",(0,a.jsx)(t.code,{children:"allowSingleDateInRange"})," is ignored when\n",(0,a.jsx)(t.code,{children:"type"})," prop is not ",(0,a.jsx)(t.code,{children:"range"}),"."]}),"\n",(0,a.jsx)(n,{data:p}),"\n",(0,a.jsx)(t.h2,{id:"default-date",children:"Default date"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"defaultDate"})," prop to set date value that will be used to determine which decade should be displayed initially.\nFor example to display ",(0,a.jsx)(t.code,{children:"2040 – 2049"})," decade set ",(0,a.jsx)(t.code,{children:"defaultDate={new Date(2040, 1)}"}),". If value is not specified,\nthen ",(0,a.jsx)(t.code,{children:"defaultDate"})," will use ",(0,a.jsx)(t.code,{children:"new Date()"}),". Month, day, minutes and seconds are ignored in provided date object, only year is used –\nyou can specify any date value."]}),"\n",(0,a.jsxs)(t.p,{children:["Note that if you set ",(0,a.jsx)(t.code,{children:"date"})," prop, then ",(0,a.jsx)(t.code,{children:"defaultDate"})," value will be ignored."]}),"\n",(0,a.jsx)(n,{data:x}),"\n",(0,a.jsx)(t.h2,{id:"controlled-date",children:"Controlled date"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"date"}),", and ",(0,a.jsx)(t.code,{children:"onDateChange"})," props to make currently displayed decade controlled.\nBy doing so, you can customize date picking experience, for example, when user selects first date in range,\nyou can add 20 years to current date value:"]}),"\n",(0,a.jsx)(n,{data:D}),"\n",(0,a.jsx)(t.h2,{id:"min-and-max-date",children:"Min and max date"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"minDate"})," and ",(0,a.jsx)(t.code,{children:"maxDate"})," props to define min and max dates. If previous/next page is not available\nthen corresponding control will be disabled."]}),"\n",(0,a.jsx)(n,{data:b}),"\n",(0,a.jsx)(t.h2,{id:"add-props-to-year-control",children:"Add props to year control"}),"\n",(0,a.jsxs)(t.p,{children:["You can add props to year controls with ",(0,a.jsx)(t.code,{children:"getYearControlProps"})," function. It accepts year date as single argument,\nprops returned from the function will be added to year control. For example, it can be used to disable specific\ncontrol or add styles:"]}),"\n",(0,a.jsx)(n,{data:Y}),"\n",(0,a.jsx)(t.h2,{id:"number-of-columns",children:"Number of columns"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"numberOfColumns"})," prop to define number of pickers that will be rendered side by side:"]}),"\n",(0,a.jsx)(n,{data:f}),"\n",(0,a.jsx)(t.h2,{id:"size",children:"Size"}),"\n",(0,a.jsx)(n,{data:h}),"\n",(0,a.jsx)(t.h2,{id:"change-year-controls-format",children:"Change year controls format"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"yearsListFormat"})," to change ",(0,a.jsx)(t.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of year control:"]}),"\n",(0,a.jsx)(n,{data:P}),"\n",(0,a.jsx)(t.h2,{id:"change-decade-label-format",children:"Change decade label format"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"decadeLabelFormat"})," to change ",(0,a.jsx)(t.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of decade label:"]}),"\n",(0,a.jsx)(n,{data:V}),"\n",(0,a.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,a.jsx)(t.h3,{id:"aria-labels",children:"Aria labels"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"ariaLabels"})," prop to specify ",(0,a.jsx)(t.code,{children:"aria-label"})," attributes for next/previous controls:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { YearPicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <YearPicker\n      ariaLabels={{\n        nextDecade: 'Next decade',\n        previousDecade: 'Previous decade',\n      }}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"year-control-aria-label",children:"Year control aria-label"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"getYearControlProps"})," to customize ",(0,a.jsx)(t.code,{children:"aria-label"})," attribute:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { YearPicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <YearPicker\n      getYearControlProps={(date) => ({\n        'aria-label': `Select year ${date.getFullYear()}`,\n      })}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,a.jsx)(t.p,{children:"Note that the following events will only trigger if focus is on year control."}),"\n",(0,a.jsx)(l,{data:[{key:"ArrowRight",description:"Focuses next non-disabled year"},{key:"ArrowLeft",description:"Focuses previous non-disabled year"},{key:"ArrowDown",description:"Focuses next non-disabled year in the same column"},{key:"ArrowUp",description:"Focuses previous non-disabled year in the same column"}]})]})}var O=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(E,Object.assign({},e,{children:(0,a.jsx)(F,e)}))};function N(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},21484:function(e,t,n){"use strict";n.d(t,{q:function(){return y}});var a=n(67294),r=n(75144),l=n(35577),o=n(19732),s=n(18437),i=n(29743),c=Object.defineProperty,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(u)for(var n of u(t))m.call(t,n)&&p(e,n,t[n]);return e},h=(e,t)=>{var n={};for(var a in e)d.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))0>t.indexOf(a)&&m.call(e,a)&&(n[a]=e[a]);return n};let g={type:"default"},y=(0,r.d)((e,t)=>{let n=(0,l.w)("YearPicker",g,e),{classNames:r,styles:c,unstyled:u,vars:d,type:m,defaultValue:p,value:y,onChange:x,__staticSelector:j,getYearControlProps:D,allowSingleDateInRange:v,allowDeselect:b,onMouseLeave:S,onYearSelect:w,__updateDateOnYearSelect:Y}=n,C=h(n,["classNames","styles","unstyled","vars","type","defaultValue","value","onChange","__staticSelector","getYearControlProps","allowSingleDateInRange","allowDeselect","onMouseLeave","onYearSelect","__updateDateOnYearSelect"]),{onDateChange:P,onRootMouseLeave:k,onHoveredDateChange:V,getControlProps:E}=(0,s.D)({type:m,level:"year",allowDeselect:b,allowSingleDateInRange:v,value:y,defaultValue:p,onChange:x,onMouseLeave:S}),{resolvedClassNames:F,resolvedStyles:O}=(0,o.h)({classNames:r,styles:c,props:n});return a.createElement(i.f,f({ref:t,minLevel:"decade",__updateDateOnYearSelect:null!=Y&&Y,__staticSelector:j||"YearPicker",onMouseLeave:k,onYearMouseEnter:(e,t)=>V(t),onYearSelect:e=>{P(e),null==w||w(e)},getYearControlProps:e=>f(f({},E(e)),null==D?void 0:D(e)),classNames:F,styles:O},C))});y.classes=i.f.classes,y.displayName="@mantine/dates/YearPicker"},18437:function(e,t,n){"use strict";n.d(t,{D:function(){return i}});var a=n(27693),r=n.n(a),l=n(67294),o=n(50703);function s(e,t){let n=[...t].sort((e,t)=>e.getTime()-t.getTime());return r()(n[0]).startOf("day").subtract(1,"ms").isBefore(e)&&r()(n[1]).endOf("day").add(1,"ms").isAfter(e)}function i({type:e,level:t,value:n,defaultValue:a,onChange:i,allowSingleDateInRange:c,allowDeselect:u,onMouseLeave:d}){let[m,p]=(0,o.l)({type:e,value:n,defaultValue:a,onChange:i}),[f,h]=(0,l.useState)("range"===e&&m[0]&&!m[1]?m[0]:null),[g,y]=(0,l.useState)(null),x=n=>{if("range"===e){if(f instanceof Date&&!m[1]){if(r()(n).isSame(f,t)&&!c){h(null),y(null),p([null,null]);return}let e=[n,f];e.sort((e,t)=>e.getTime()-t.getTime()),p(e),y(null),h(null);return}if(m[0]&&!m[1]&&r()(n).isSame(m[0],t)&&!c){h(null),y(null),p([null,null]);return}p([n,null]),y(null),h(n);return}if("multiple"===e){m.some(e=>r()(e).isSame(n,t))?p(m.filter(e=>!r()(e).isSame(n,t))):p([...m,n]);return}m&&u&&r()(n).isSame(m,t)?p(null):p(n)},j=e=>f instanceof Date&&g instanceof Date?s(e,[g,f]):m[0]instanceof Date&&m[1]instanceof Date&&s(e,m),D=e=>m[0]instanceof Date&&!!r()(e).isSame(m[0],t)&&!(g&&r()(g).isBefore(m[0])),v=e=>m[1]instanceof Date?r()(e).isSame(m[1],t):m[0]instanceof Date&&!!g&&r()(g).isBefore(m[0])&&r()(e).isSame(m[0],t),b=n=>{if("range"===e)return{selected:m.some(e=>e&&r()(e).isSame(n,t)),inRange:j(n),firstInRange:D(n),lastInRange:v(n),"data-autofocus":!!m[0]&&r()(m[0]).isSame(n,t)||void 0};if("multiple"===e)return{selected:m.some(e=>e&&r()(e).isSame(n,t)),"data-autofocus":!!m[0]&&r()(m[0]).isSame(n,t)||void 0};let a=r()(m).isSame(n,t);return{selected:a,"data-autofocus":a||void 0}};return{onDateChange:x,onRootMouseLeave:"range"===e?e=>{null==d||d(e),y(null)}:d,onHoveredDateChange:"range"===e&&f?y:()=>{},getControlProps:b,_value:m,setValue:p}}},50703:function(e,t,n){"use strict";n.d(t,{l:function(){return o}});var a=n(35179),r=n(67294);let l=e=>"range"===e?[null,null]:"multiple"===e?[]:null;function o({type:e,value:t,defaultValue:n,onChange:o}){let s=(0,r.useRef)(e),[i,c]=(0,a.C)({value:t,defaultValue:n,onChange:o,finalValue:l(e)}),u=i;return s.current!==e&&(s.current=e,void 0===t&&c(u=void 0!==n?n:l(e))),[u,c]}},33106:function(e,t,n){"use strict";n.d(t,{$:function(){return x}});var a=n(67294);let r=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <${e} allowDeselect value={value} onChange={setValue} />;
}
`,l=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return <${e} type="multiple" value={value} onChange={setValue} />;
}
`,o=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return <${e} type="range" value={value} onChange={setValue} />;
}
`,s=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <${e} value={value} onChange={setValue} />;
}
`,i=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <${e} type="range" allowSingleDateInRange value={value} onChange={setValue} />
  );
}
`;var c=n(77048);let u=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <${e} type="range" numberOfColumns={2} value={value} onChange={setValue} />
  );
}
`;var d=Object.defineProperty,m=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&h(e,n,t[n]);if(m)for(var n of m(t))f.call(t,n)&&h(e,n,t[n]);return e};let y=e=>`import { ${e} } from '@mantine/dates';

function Demo() {
  return <${e} defaultValue={new Date()}{{props}} />;
}
`;function x(e){return{usage:{type:"code",centered:!0,code:s(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)(null);return a.createElement(e,{value:t,onChange:n})}},range:{type:"code",centered:!0,code:o(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)([null,null]);return a.createElement(e,{type:"range",value:t,onChange:n})}},multiple:{type:"code",centered:!0,code:l(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)([]);return a.createElement(e,{type:"multiple",value:t,onChange:n})}},deselect:{type:"code",centered:!0,code:r(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)(null);return a.createElement(e,{allowDeselect:!0,value:t,onChange:n})}},singleRange:{type:"code",centered:!0,code:i(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)([null,null]);return a.createElement(e,{type:"range",allowSingleDateInRange:!0,value:t,onChange:n})}},numberOfColumns:{type:"code",centered:!0,code:u(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)([null,null]);return a.createElement(a.Fragment,null,a.createElement(e,{type:"range",numberOfColumns:2,value:t,onChange:n,visibleFrom:"sm"}),a.createElement(c.x,{ta:"center",hiddenFrom:"sm"},"Demo is not available on small screens. Make your screen larger to see the demo."))}},sizeConfigurator:{type:"configurator",centered:!0,code:y(e.displayName.replace("@mantine/dates/","")),controls:[{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"}],component:t=>a.createElement(e,g({defaultValue:new Date},t))}}}}},function(e){e.O(0,[9905,59,9774,2888,179],function(){return e(e.s=91540)}),_N_E=e.O()}]);