(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6315],{86889:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/month-picker",function(){return n(97895)}])},97895:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var a=n(85893),r=n(11151),o=n(19905),l=n(9904),s=n(85981),i=n(33106);let{usage:c,multiple:d,deselect:u,range:m,singleRange:h,numberOfColumns:p,sizeConfigurator:f}=(0,i.$)(s.l);var g=n(67294);let y=`
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <MonthPicker defaultDate={new Date(2015, 1)} value={value} onChange={setValue} />;
}
`,x={type:"code",centered:!0,component:function(){let[e,t]=(0,g.useState)(null);return g.createElement(s.l,{defaultDate:new Date(2015,1),value:e,onChange:t})},code:y},j=`
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [date, setDate] = useState(new Date());

  const handleChange = (val: [Date | null, Date | null]) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => new Date(current.getFullYear() + 1, 1));
    }

    setValue(val);
  };

  return (
    <MonthPicker
      date={date}
      onDateChange={setDate}
      type="range"
      value={value}
      onChange={handleChange}
    />
  );
}

`,D={type:"code",centered:!0,component:function(){let[e,t]=(0,g.useState)([null,null]),[n,a]=(0,g.useState)(new Date),r=e=>{null!==e[0]&&null===e[1]&&a(e=>new Date(e.getFullYear()+1,1)),t(e)};return g.createElement(s.l,{date:n,onDateChange:a,type:"range",value:e,onChange:r})},code:j},v=`
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <MonthPicker
      value={value}
      onChange={setValue}
      defaultDate={new Date(2022, 1)}
      minDate={new Date(2022, 1, 1)}
      maxDate={new Date(2022, 8, 1)}
    />
  );
}
`,_={type:"code",centered:!0,component:function(){let[e,t]=(0,g.useState)(null);return g.createElement(s.l,{value:e,onChange:t,defaultDate:new Date(2022,1),minDate:new Date(2022,1,1),maxDate:new Date(2022,8,1)})},code:v},b=`
import { useState } from 'react';
import { MonthPicker, MonthPickerProps } from '@mantine/dates';

const getYearControlProps: MonthPickerProps['getYearControlProps'] = (date) => {
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

const getMonthControlProps: MonthPickerProps['getMonthControlProps'] = (date) => {
  if (date.getMonth() === 1) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (date.getMonth() === 5) {
    return { disabled: true };
  }

  return {};
};

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <MonthPicker
      value={value}
      onChange={setValue}
      getYearControlProps={getYearControlProps}
      getMonthControlProps={getMonthControlProps}
    />
  );
}
`,M=e=>e.getFullYear()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:e.getFullYear()===new Date().getFullYear()+1?{disabled:!0}:{},S=e=>1===e.getMonth()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:5===e.getMonth()?{disabled:!0}:{},w={type:"code",centered:!0,component:function(){let[e,t]=(0,g.useState)(null);return g.createElement(s.l,{value:e,onChange:t,getYearControlProps:M,getMonthControlProps:S})},code:b},C=`
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return <MonthPicker maxLevel="year" />;
}
`,P={type:"code",centered:!0,component:function(){return g.createElement(s.l,{maxLevel:"year"})},code:C},Y=`
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return <MonthPicker monthsListFormat="MM" yearsListFormat="YY" />;
}
`,k={type:"code",centered:!0,component:function(){return g.createElement(s.l,{monthsListFormat:"MM",yearsListFormat:"YY"})},code:Y},L=`
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <MonthPicker
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      value={value}
      onChange={setValue}
    />
  );
}
`,F={type:"code",centered:!0,component:function(){let[e,t]=(0,g.useState)(null);return g.createElement(s.l,{decadeLabelFormat:"YY",yearLabelFormat:"YYYY [year]",value:e,onChange:t})},code:L};n(64381);let E=`
import 'dayjs/locale/ru';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return <MonthPicker locale="ru" />;
}
`,V={type:"code",centered:!0,component:function(){return g.createElement(s.l,{locale:"ru"})},code:E},O=(0,o.A)(l.us.MonthPicker);function N(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",h3:"h3",pre:"pre"},(0,r.ah)(),e.components),{Demo:n,KeyboardEventsTable:o}=t;return n||R("Demo",!0),o||R("KeyboardEventsTable",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n,{data:c}),"\n",(0,a.jsx)(t.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"allowDeselect"})," to allow user to deselect current selected date by clicking on it.\n",(0,a.jsx)(t.code,{children:"allowDeselect"})," is disregarded when ",(0,a.jsx)(t.code,{children:"type"})," prop is ",(0,a.jsx)(t.code,{children:"range"})," or ",(0,a.jsx)(t.code,{children:"multiple"}),". When date is\ndeselected ",(0,a.jsx)(t.code,{children:"onChange"})," is called with ",(0,a.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,a.jsx)(n,{data:u}),"\n",(0,a.jsx)(t.h2,{id:"multiple-dates",children:"Multiple dates"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:'type="multiple"'})," to allow user to pick multiple dates:"]}),"\n",(0,a.jsx)(n,{data:d}),"\n",(0,a.jsx)(t.h2,{id:"dates-range",children:"Dates range"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:'type="range"'})," to allow user to pick dates range:"]}),"\n",(0,a.jsx)(n,{data:m}),"\n",(0,a.jsx)(t.h2,{id:"single-date-in-range",children:"Single date in range"}),"\n",(0,a.jsxs)(t.p,{children:["By default, it is not allowed to select single date as range – when user clicks the same date second time it is deselected.\nTo change this behavior set ",(0,a.jsx)(t.code,{children:"allowSingleDateInRange"})," prop. ",(0,a.jsx)(t.code,{children:"allowSingleDateInRange"})," is ignored when\n",(0,a.jsx)(t.code,{children:"type"})," prop is not ",(0,a.jsx)(t.code,{children:"range"}),"."]}),"\n",(0,a.jsx)(n,{data:h}),"\n",(0,a.jsx)(t.h2,{id:"default-date",children:"Default date"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"defaultDate"})," prop to set date value that will be used to determine which year should be displayed initially.\nFor example to display ",(0,a.jsx)(t.code,{children:"2015"})," year set ",(0,a.jsx)(t.code,{children:"defaultDate={new Date(2015, 1)}"}),". If value is not specified,\nthen ",(0,a.jsx)(t.code,{children:"defaultDate"})," will use ",(0,a.jsx)(t.code,{children:"new Date()"}),". Month, day, minutes and seconds are ignored in provided date object, only year is used –\nyou can specify any date value."]}),"\n",(0,a.jsxs)(t.p,{children:["Note that if you set ",(0,a.jsx)(t.code,{children:"date"})," prop, then ",(0,a.jsx)(t.code,{children:"defaultDate"})," value will be ignored."]}),"\n",(0,a.jsx)(n,{data:x}),"\n",(0,a.jsx)(t.h2,{id:"controlled-date",children:"Controlled date"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"date"}),", and ",(0,a.jsx)(t.code,{children:"onDateChange"})," props to make currently displayed year and decade controlled.\nBy doing so, you can customize date picking experience, for example, when user selects first date in range,\nyou can add one year to current date value:"]}),"\n",(0,a.jsx)(n,{data:D}),"\n",(0,a.jsx)(t.h2,{id:"min-and-max-date",children:"Min and max date"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"minDate"})," and ",(0,a.jsx)(t.code,{children:"maxDate"})," props to define min and max dates. If previous/next page is not available\nthen corresponding control will be disabled."]}),"\n",(0,a.jsx)(n,{data:_}),"\n",(0,a.jsx)(t.h2,{id:"add-props-to-year-and-month-control",children:"Add props to year and month control"}),"\n",(0,a.jsxs)(t.p,{children:["You can add props to year and month controls with ",(0,a.jsx)(t.code,{children:"getYearControlProps"})," and ",(0,a.jsx)(t.code,{children:"getMonthControlProps"})," functions. Both functions accept date as single argument,\nprops returned from the function will be added to year/month control. For example, it can be used to disable specific\ncontrol or add styles:"]}),"\n",(0,a.jsx)(n,{data:w}),"\n",(0,a.jsx)(t.h2,{id:"number-of-columns",children:"Number of columns"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"numberOfColumns"})," prop to define number of pickers that will be rendered side by side:"]}),"\n",(0,a.jsx)(n,{data:p}),"\n",(0,a.jsx)(t.h2,{id:"max-level",children:"Max level"}),"\n",(0,a.jsxs)(t.p,{children:["To disallow user going to the decade level set ",(0,a.jsx)(t.code,{children:'maxLevel="year"'}),":"]}),"\n",(0,a.jsx)(n,{data:P}),"\n",(0,a.jsx)(t.h2,{id:"size",children:"Size"}),"\n",(0,a.jsx)(n,{data:f}),"\n",(0,a.jsx)(t.h2,{id:"change-year-and-months-controls-format",children:"Change year and months controls format"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"yearsListFormat"})," and ",(0,a.jsx)(t.code,{children:"monthsListFormat"})," props to change ",(0,a.jsx)(t.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of year/month controls:"]}),"\n",(0,a.jsx)(n,{data:k}),"\n",(0,a.jsx)(t.h2,{id:"change-label-format",children:"Change label format"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"decadeLabelFormat"})," and ",(0,a.jsx)(t.code,{children:"yearLabelFormat"})," to change ",(0,a.jsx)(t.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of decade/year label:"]}),"\n",(0,a.jsx)(n,{data:F}),"\n",(0,a.jsx)(t.h2,{id:"localization",children:"Localization"}),"\n",(0,a.jsxs)(t.p,{children:["Usually it is better to specify ",(0,a.jsx)(t.code,{children:"@mantine/dates"})," package locale in ",(0,a.jsx)(t.a,{href:"/dates/dates-provider/",children:"DatesProvider"}),",\nbut you can also override locale per component:"]}),"\n",(0,a.jsx)(n,{data:V}),"\n",(0,a.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,a.jsx)(t.h3,{id:"aria-labels",children:"Aria labels"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"ariaLabels"})," prop to specify ",(0,a.jsx)(t.code,{children:"aria-label"})," attributes for next/previous controls:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { MonthPicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <MonthPicker\n      ariaLabels={{\n        nextDecade: 'Next decade',\n        previousDecade: 'Previous decade',\n        nextYear: 'Next year',\n        previousYear: 'Previous year',\n        yearLevelControl: 'Change to decade view',\n      }}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"yearmonth-control-aria-label",children:"Year/month control aria-label"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"getYearControlProps"}),"/",(0,a.jsx)(t.code,{children:"getMonthControlProps"})," to customize ",(0,a.jsx)(t.code,{children:"aria-label"})," attribute:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { MonthPicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <MonthPicker\n      getYearControlProps={(date) => ({\n        'aria-label': `Select year ${date.getFullYear()}`,\n      })}\n      getMonthControlProps={(date) => ({\n        'aria-label': `Select month ${date.getFullYear()}/${date.getMonth()}`,\n      })}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,a.jsx)(t.p,{children:"Note that the following events will only trigger if focus is on month control."}),"\n",(0,a.jsx)(o,{data:[{key:"ArrowRight",description:"Focuses next non-disabled month"},{key:"ArrowLeft",description:"Focuses previous non-disabled month"},{key:"ArrowDown",description:"Focuses next non-disabled month in the same column"},{key:"ArrowUp",description:"Focuses previous non-disabled month in the same column"}]})]})}var $=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(O,Object.assign({},e,{children:(0,a.jsx)(N,e)}))};function R(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},64381:function(e,t,n){e.exports=function(e){"use strict";var t="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),n="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),a="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),r="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),o=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function l(e,t,n){var a,r;return"m"===n?t?"минута":"минуту":e+" "+(a=+e,r=({mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"})[n].split("_"),a%10==1&&a%100!=11?r[0]:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?r[1]:r[2])}var s=function(e,a){return o.test(a)?t[e.month()]:n[e.month()]};s.s=n,s.f=t;var i=function(e,t){return o.test(t)?a[e.month()]:r[e.month()]};i.s=r,i.f=a;var c={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:s,monthsShort:i,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:l,mm:l,h:"час",hh:l,d:"день",dd:l,M:"месяц",MM:l,y:"год",yy:l},ordinal:function(e){return e},meridiem:function(e){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(c,null,!0),c}(n(27693))},85981:function(e,t,n){"use strict";n.d(t,{l:function(){return y}});var a=n(67294),r=n(75144),o=n(35577),l=n(19732),s=n(18437),i=n(29743),c=Object.defineProperty,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&h(e,n,t[n]);if(d)for(var n of d(t))m.call(t,n)&&h(e,n,t[n]);return e},f=(e,t)=>{var n={};for(var a in e)u.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&d)for(var a of d(e))0>t.indexOf(a)&&m.call(e,a)&&(n[a]=e[a]);return n};let g={type:"default"},y=(0,r.d)((e,t)=>{let n=(0,o.w)("MonthPicker",g,e),{classNames:r,styles:c,unstyled:d,vars:u,type:m,defaultValue:h,value:y,onChange:x,__staticSelector:j,getMonthControlProps:D,allowSingleDateInRange:v,allowDeselect:_,onMouseLeave:b,onMonthSelect:M,__updateDateOnMonthSelect:S}=n,w=f(n,["classNames","styles","unstyled","vars","type","defaultValue","value","onChange","__staticSelector","getMonthControlProps","allowSingleDateInRange","allowDeselect","onMouseLeave","onMonthSelect","__updateDateOnMonthSelect"]),{onDateChange:C,onRootMouseLeave:P,onHoveredDateChange:Y,getControlProps:k}=(0,s.D)({type:m,level:"month",allowDeselect:_,allowSingleDateInRange:v,value:y,defaultValue:h,onChange:x,onMouseLeave:b}),{resolvedClassNames:L,resolvedStyles:F}=(0,l.h)({classNames:r,styles:c,props:n});return a.createElement(i.f,p({ref:t,minLevel:"year",__updateDateOnMonthSelect:null!=S&&S,__staticSelector:j||"MonthPicker",onMouseLeave:P,onMonthMouseEnter:(e,t)=>Y(t),onMonthSelect:e=>{C(e),null==M||M(e)},getMonthControlProps:e=>p(p({},k(e)),null==D?void 0:D(e)),classNames:L,styles:F},w))});y.classes=i.f.classes,y.displayName="@mantine/dates/MonthPicker"},18437:function(e,t,n){"use strict";n.d(t,{D:function(){return i}});var a=n(27693),r=n.n(a),o=n(67294),l=n(50703);function s(e,t){let n=[...t].sort((e,t)=>e.getTime()-t.getTime());return r()(n[0]).startOf("day").subtract(1,"ms").isBefore(e)&&r()(n[1]).endOf("day").add(1,"ms").isAfter(e)}function i({type:e,level:t,value:n,defaultValue:a,onChange:i,allowSingleDateInRange:c,allowDeselect:d,onMouseLeave:u}){let[m,h]=(0,l.l)({type:e,value:n,defaultValue:a,onChange:i}),[p,f]=(0,o.useState)("range"===e&&m[0]&&!m[1]?m[0]:null),[g,y]=(0,o.useState)(null),x=n=>{if("range"===e){if(p instanceof Date&&!m[1]){if(r()(n).isSame(p,t)&&!c){f(null),y(null),h([null,null]);return}let e=[n,p];e.sort((e,t)=>e.getTime()-t.getTime()),h(e),y(null),f(null);return}if(m[0]&&!m[1]&&r()(n).isSame(m[0],t)&&!c){f(null),y(null),h([null,null]);return}h([n,null]),y(null),f(n);return}if("multiple"===e){m.some(e=>r()(e).isSame(n,t))?h(m.filter(e=>!r()(e).isSame(n,t))):h([...m,n]);return}m&&d&&r()(n).isSame(m,t)?h(null):h(n)},j=e=>p instanceof Date&&g instanceof Date?s(e,[g,p]):m[0]instanceof Date&&m[1]instanceof Date&&s(e,m),D=e=>m[0]instanceof Date&&!!r()(e).isSame(m[0],t)&&!(g&&r()(g).isBefore(m[0])),v=e=>m[1]instanceof Date?r()(e).isSame(m[1],t):m[0]instanceof Date&&!!g&&r()(g).isBefore(m[0])&&r()(e).isSame(m[0],t),_=n=>{if("range"===e)return{selected:m.some(e=>e&&r()(e).isSame(n,t)),inRange:j(n),firstInRange:D(n),lastInRange:v(n),"data-autofocus":!!m[0]&&r()(m[0]).isSame(n,t)||void 0};if("multiple"===e)return{selected:m.some(e=>e&&r()(e).isSame(n,t)),"data-autofocus":!!m[0]&&r()(m[0]).isSame(n,t)||void 0};let a=r()(m).isSame(n,t);return{selected:a,"data-autofocus":a||void 0}};return{onDateChange:x,onRootMouseLeave:"range"===e?e=>{null==u||u(e),y(null)}:u,onHoveredDateChange:"range"===e&&p?y:()=>{},getControlProps:_,_value:m,setValue:h}}},50703:function(e,t,n){"use strict";n.d(t,{l:function(){return l}});var a=n(35179),r=n(67294);let o=e=>"range"===e?[null,null]:"multiple"===e?[]:null;function l({type:e,value:t,defaultValue:n,onChange:l}){let s=(0,r.useRef)(e),[i,c]=(0,a.C)({value:t,defaultValue:n,onChange:l,finalValue:o(e)}),d=i;return s.current!==e&&(s.current=e,void 0===t&&c(d=void 0!==n?n:o(e))),[d,c]}},33106:function(e,t,n){"use strict";n.d(t,{$:function(){return x}});var a=n(67294);let r=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <${e} allowDeselect value={value} onChange={setValue} />;
}
`,o=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return <${e} type="multiple" value={value} onChange={setValue} />;
}
`,l=e=>`
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
`;var c=n(77048);let d=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <${e} type="range" numberOfColumns={2} value={value} onChange={setValue} />
  );
}
`;var u=Object.defineProperty,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))p.call(t,n)&&f(e,n,t[n]);return e};let y=e=>`import { ${e} } from '@mantine/dates';

function Demo() {
  return <${e} defaultValue={new Date()}{{props}} />;
}
`;function x(e){return{usage:{type:"code",centered:!0,code:s(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)(null);return a.createElement(e,{value:t,onChange:n})}},range:{type:"code",centered:!0,code:l(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)([null,null]);return a.createElement(e,{type:"range",value:t,onChange:n})}},multiple:{type:"code",centered:!0,code:o(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)([]);return a.createElement(e,{type:"multiple",value:t,onChange:n})}},deselect:{type:"code",centered:!0,code:r(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)(null);return a.createElement(e,{allowDeselect:!0,value:t,onChange:n})}},singleRange:{type:"code",centered:!0,code:i(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)([null,null]);return a.createElement(e,{type:"range",allowSingleDateInRange:!0,value:t,onChange:n})}},numberOfColumns:{type:"code",centered:!0,code:d(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)([null,null]);return a.createElement(a.Fragment,null,a.createElement(e,{type:"range",numberOfColumns:2,value:t,onChange:n,visibleFrom:"sm"}),a.createElement(c.x,{ta:"center",hiddenFrom:"sm"},"Demo is not available on small screens. Make your screen larger to see the demo."))}},sizeConfigurator:{type:"configurator",centered:!0,code:y(e.displayName.replace("@mantine/dates/","")),controls:[{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"}],component:t=>a.createElement(e,g({defaultValue:new Date},t))}}}}},function(e){e.O(0,[9905,59,9774,2888,179],function(){return e(e.s=86889)}),_N_E=e.O()}]);