(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4544],{12622:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/date-picker",function(){return n(1746)}])},1746:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Q}});var a=n(85893),r=n(11151),o=n(19905),l=n(9904),i=n(29463),s=n(33106);let{usage:d,multiple:c,deselect:u,range:m,singleRange:p,numberOfColumns:f,sizeConfigurator:h}=(0,s.$)(i.M);var y=n(67294);let D=`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <DatePicker defaultDate={new Date(2015, 1)} value={value} onChange={setValue} />;
}
`,g={type:"code",centered:!0,component:function(){let[e,t]=(0,y.useState)(null);return y.createElement(i.M,{defaultDate:new Date(2015,1),value:e,onChange:t})},code:D},x=`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

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
    <DatePicker
      date={date}
      onDateChange={setDate}
      type="range"
      value={value}
      onChange={handleChange}
    />
  );
}
`,j={type:"code",centered:!0,component:function(){let[e,t]=(0,y.useState)([null,null]),[n,a]=(0,y.useState)(new Date),r=e=>{null!==e[0]&&null===e[1]&&a(e=>new Date(e.getFullYear(),e.getMonth()+1)),t(e)};return y.createElement(i.M,{date:n,onDateChange:a,type:"range",value:e,onChange:r})},code:x};var v=n(74378);let b=`
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker defaultLevel="decade" />
      <DatePicker defaultLevel="year" />
    </Group>
  );
}
`,w={type:"code",component:function(){return y.createElement(v.Z,{justify:"center"},y.createElement(i.M,{defaultLevel:"decade"}),y.createElement(i.M,{defaultLevel:"year"}))},code:b},_=`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker hideOutsideDates />;
}
`,k={type:"code",centered:!0,component:function(){return y.createElement(i.M,{hideOutsideDates:!0})},code:_},P=`
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker firstDayOfWeek={0} />
      <DatePicker firstDayOfWeek={6} />
    </Group>
  );
}
`,S={type:"code",component:function(){return y.createElement(v.Z,{justify:"center"},y.createElement(i.M,{firstDayOfWeek:0}),y.createElement(i.M,{firstDayOfWeek:6}))},code:P},M=`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker hideWeekdays />;
}
`,C={type:"code",centered:!0,component:function(){return y.createElement(i.M,{hideWeekdays:!0})},code:M},Y=`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker weekendDays={[1, 2]} />;
}
`,L={type:"code",centered:!0,component:function(){return y.createElement(i.M,{weekendDays:[1,2]})},code:Y};var E=n(99040);let O=`
import { Indicator } from '@mantine/core';
import { DatePicker, DatePickerProps } from '@mantine/dates';

const dayRenderer: DatePickerProps['renderDay'] = (date) => {
  const day = date.getDate();
  return (
    <Indicator size={6} color="red" offset={-5} disabled={day !== 16}>
      <div>{day}</div>
    </Indicator>
  );
};

function Demo() {
  return <DatePicker renderDay={dayRenderer} />;
}

`,F=e=>{let t=e.getDate();return y.createElement(E.z,{size:6,color:"red",offset:-5,disabled:16!==t},y.createElement("div",null,t))},V={type:"code",centered:!0,component:function(){return y.createElement(i.M,{renderDay:F})},code:O},N=`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DatePicker
      value={value}
      onChange={setValue}
      defaultDate={new Date(2022, 1)}
      minDate={new Date(2022, 1, 10)}
      maxDate={new Date(2022, 1, 25)}
    />
  );
}
`,$={type:"code",centered:!0,component:function(){let[e,t]=(0,y.useState)(null);return y.createElement(i.M,{value:e,onChange:t,defaultDate:new Date(2022,1),minDate:new Date(2022,1,10),maxDate:new Date(2022,1,25)})},code:N},I=`
import { useState } from 'react';
import { DatePicker, DatePickerProps } from '@mantine/dates';

const getDayProps: DatePickerProps['getDayProps'] = (date) => {
  if (date.getDay() === 5 && date.getDate() === 13) {
    return {
      style: {
        backgroundColor: 'var(--mantine-color-red-filled)',
        color: 'var(--mantine-color-white)',
      },
    };
  }

  return {};
};

const getYearControlProps: DatePickerProps['getYearControlProps'] = (date) => {
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

const getMonthControlProps: DatePickerProps['getMonthControlProps'] = (date) => {
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
    <DatePicker
      value={value}
      onChange={setValue}
      defaultDate={new Date(2021, 7)}
      getDayProps={getDayProps}
      getYearControlProps={getYearControlProps}
      getMonthControlProps={getMonthControlProps}
    />
  );
}
`,z=e=>5===e.getDay()&&13===e.getDate()?{style:{backgroundColor:"var(--mantine-color-red-filled)",color:"var(--mantine-color-white)"}}:{},R=e=>e.getFullYear()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:e.getFullYear()===new Date().getFullYear()+1?{disabled:!0}:{},W=e=>1===e.getMonth()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:5===e.getMonth()?{disabled:!0}:{},T={type:"code",centered:!0,component:function(){let[e,t]=(0,y.useState)(null);return y.createElement(i.M,{value:e,onChange:t,defaultDate:new Date(2021,7),getDayProps:z,getYearControlProps:R,getMonthControlProps:W})},code:I},A=`
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker maxLevel="year" />
      <DatePicker maxLevel="month" />
    </Group>
  );
}
`,G={type:"code",component:function(){return y.createElement(v.Z,{justify:"center"},y.createElement(i.M,{maxLevel:"year"}),y.createElement(i.M,{maxLevel:"month"}))},code:A},H=`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker monthsListFormat="MM" yearsListFormat="YY" />;
}
`,U={type:"code",centered:!0,component:function(){return y.createElement(i.M,{monthsListFormat:"MM",yearsListFormat:"YY"})},code:H},B=`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DatePicker
      defaultLevel="decade"
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      monthLabelFormat="MM/YY"
      value={value}
      onChange={setValue}
    />
  );
}
`,Z={type:"code",centered:!0,component:function(){let[e,t]=(0,y.useState)(null);return y.createElement(i.M,{defaultLevel:"decade",decadeLabelFormat:"YY",yearLabelFormat:"YYYY [year]",monthLabelFormat:"MM/YY",value:e,onChange:t})},code:B};n(64381);let K=`
import 'dayjs/locale/ru';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker locale="ru" />;
}
`,X={type:"code",centered:!0,component:function(){return y.createElement(i.M,{locale:"ru"})},code:K},q=(0,o.A)(l.us.DatePicker);function J(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",h3:"h3",pre:"pre"},(0,r.ah)(),e.components),{Demo:n,KeyboardEventsTable:o}=t;return n||ee("Demo",!0),o||ee("KeyboardEventsTable",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n,{data:d}),"\n",(0,a.jsx)(t.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"allowDeselect"})," to allow user to deselect current selected date by clicking on it.\n",(0,a.jsx)(t.code,{children:"allowDeselect"})," is disregarded when ",(0,a.jsx)(t.code,{children:"type"})," prop is ",(0,a.jsx)(t.code,{children:"range"})," or ",(0,a.jsx)(t.code,{children:"multiple"}),". When date is\ndeselected ",(0,a.jsx)(t.code,{children:"onChange"})," is called with ",(0,a.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,a.jsx)(n,{data:u}),"\n",(0,a.jsx)(t.h2,{id:"multiple-dates",children:"Multiple dates"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:'type="multiple"'})," to allow user to pick multiple dates:"]}),"\n",(0,a.jsx)(n,{data:c}),"\n",(0,a.jsx)(t.h2,{id:"dates-range",children:"Dates range"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:'type="range"'})," to allow user to pick dates range:"]}),"\n",(0,a.jsx)(n,{data:m}),"\n",(0,a.jsx)(t.h2,{id:"single-date-in-range",children:"Single date in range"}),"\n",(0,a.jsxs)(t.p,{children:["By default, it is not allowed to select single date as range – when user clicks the same date second time it is deselected.\nTo change this behavior set ",(0,a.jsx)(t.code,{children:"allowSingleDateInRange"})," prop. ",(0,a.jsx)(t.code,{children:"allowSingleDateInRange"})," is ignored when\n",(0,a.jsx)(t.code,{children:"type"})," prop is not ",(0,a.jsx)(t.code,{children:"range"}),"."]}),"\n",(0,a.jsx)(n,{data:p}),"\n",(0,a.jsx)(t.h2,{id:"default-date",children:"Default date"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"defaultDate"})," prop to set date value that will be used to determine which year should be displayed initially.\nFor example to display ",(0,a.jsx)(t.code,{children:"2015 February"})," month set ",(0,a.jsx)(t.code,{children:"defaultDate={new Date(2015, 1)}"}),". If value is not specified,\nthen ",(0,a.jsx)(t.code,{children:"defaultDate"})," will use ",(0,a.jsx)(t.code,{children:"new Date()"}),". Day, minutes and seconds are ignored in provided date object, only year and month data is used –\nyou can specify any date value."]}),"\n",(0,a.jsxs)(t.p,{children:["Note that if you set ",(0,a.jsx)(t.code,{children:"date"})," prop, then ",(0,a.jsx)(t.code,{children:"defaultDate"})," value will be ignored."]}),"\n",(0,a.jsx)(n,{data:g}),"\n",(0,a.jsx)(t.h2,{id:"controlled-date",children:"Controlled date"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"date"}),", and ",(0,a.jsx)(t.code,{children:"onDateChange"})," props to make currently displayed month, year and decade controlled.\nBy doing so, you can customize date picking experience, for example, when user selects first date in range,\nyou can add one month to the current date value:"]}),"\n",(0,a.jsx)(n,{data:j}),"\n",(0,a.jsx)(t.h2,{id:"default-level",children:"Default level"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"defaultLevel"})," prop to configure initial level that will be displayed:"]}),"\n",(0,a.jsx)(n,{data:w}),"\n",(0,a.jsx)(t.h2,{id:"hide-outside-dates",children:"Hide outside dates"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"hideOutsideDates"})," prop to remove all dates that do not belong to the current month:"]}),"\n",(0,a.jsx)(n,{data:k}),"\n",(0,a.jsx)(t.h2,{id:"first-day-of-week",children:"First day of week"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"firstDayOfWeek"})," prop to configure first day of week. The prop accepts number from 0 to 6,\nwhere 0 is Sunday and 6 is Saturday. Default value is 1 – Monday. You can also configure this option\nfor all components with ",(0,a.jsx)(t.a,{href:"/dates/dates-provider/",children:"DatesProvider"}),"."]}),"\n",(0,a.jsx)(n,{data:S}),"\n",(0,a.jsx)(t.h2,{id:"hide-weekdays",children:"Hide weekdays"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"hideWeekdays"})," prop to hide weekdays names:"]}),"\n",(0,a.jsx)(n,{data:C}),"\n",(0,a.jsx)(t.h2,{id:"weekend-days",children:"Weekend days"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"weekendDays"})," prop to configure weekend days. The prop accepts an array of numbers from 0 to 6,\nwhere 0 is Sunday and 6 is Saturday. Default value is ",(0,a.jsx)(t.code,{children:"[0, 6]"})," – Saturday and Sunday. You can also configure this option\nfor all components with ",(0,a.jsx)(t.a,{href:"/dates/dates-provider/",children:"DatesProvider"}),"."]}),"\n",(0,a.jsx)(n,{data:L}),"\n",(0,a.jsx)(t.h2,{id:"render-day-function",children:"Render day function"}),"\n",(0,a.jsxs)(t.p,{children:["You can customize day rendering with ",(0,a.jsx)(t.code,{children:"renderDay"})," prop. For example, it can be used to add\n",(0,a.jsx)(t.a,{href:"/core/indicator/",children:"Indicator"})," to certain days."]}),"\n",(0,a.jsx)(n,{data:V}),"\n",(0,a.jsx)(t.h2,{id:"min-and-max-date",children:"Min and max date"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"minDate"})," and ",(0,a.jsx)(t.code,{children:"maxDate"})," props to define min and max dates. If previous/next page is not available\nthen corresponding control will be disabled."]}),"\n",(0,a.jsx)(n,{data:$}),"\n",(0,a.jsx)(t.h2,{id:"add-props-to-year-and-month-control",children:"Add props to year and month control"}),"\n",(0,a.jsxs)(t.p,{children:["You can add props to year, month and day controls with ",(0,a.jsx)(t.code,{children:"getYearControlProps"}),", ",(0,a.jsx)(t.code,{children:"getMonthControlProps"})," and ",(0,a.jsx)(t.code,{children:"getDayProps"})," functions. All functions accept date as single argument,\nprops returned from the function will be added to year/month/day control. For example, it can be used to disable specific\ncontrol or add styles:"]}),"\n",(0,a.jsx)(n,{data:T}),"\n",(0,a.jsx)(t.h2,{id:"number-of-columns",children:"Number of columns"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"numberOfColumns"})," prop to define number of pickers that will be rendered side by side:"]}),"\n",(0,a.jsx)(n,{data:f}),"\n",(0,a.jsx)(t.h2,{id:"max-level",children:"Max level"}),"\n",(0,a.jsx)(n,{data:G}),"\n",(0,a.jsx)(t.h2,{id:"size",children:"Size"}),"\n",(0,a.jsx)(n,{data:h}),"\n",(0,a.jsx)(t.h2,{id:"change-year-and-months-controls-format",children:"Change year and months controls format"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"yearsListFormat"})," and ",(0,a.jsx)(t.code,{children:"monthsListFormat"})," props to change ",(0,a.jsx)(t.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of year/month controls:"]}),"\n",(0,a.jsx)(n,{data:U}),"\n",(0,a.jsx)(t.h2,{id:"change-label-format",children:"Change label format"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"decadeLabelFormat"}),", ",(0,a.jsx)(t.code,{children:"yearLabelFormat"})," and ",(0,a.jsx)(t.code,{children:"monthLabelFormat"})," props to change ",(0,a.jsx)(t.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of decade/year label:"]}),"\n",(0,a.jsx)(n,{data:Z}),"\n",(0,a.jsx)(t.h2,{id:"localization",children:"Localization"}),"\n",(0,a.jsxs)(t.p,{children:["Usually it is better to specify ",(0,a.jsx)(t.code,{children:"@mantine/dates"})," package locale in ",(0,a.jsx)(t.a,{href:"/dates/dates-provider/",children:"DatesProvider"}),",\nbut you can also override locale per component:"]}),"\n",(0,a.jsx)(n,{data:X}),"\n",(0,a.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,a.jsx)(t.h3,{id:"aria-labels",children:"Aria labels"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"ariaLabels"})," prop to specify ",(0,a.jsx)(t.code,{children:"aria-label"})," attributes for next/previous controls:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { DatePicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <DatePicker\n      ariaLabels={{\n        nextDecade: 'Next decade',\n        previousDecade: 'Previous decade',\n        nextYear: 'Next year',\n        previousYear: 'Previous year',\n        nextMonth: 'Next month',\n        previousMonth: 'Previous month',\n        yearLevelControl: 'Change to decade view',\n        monthLevelControl: 'Change to year view',\n      }}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"yearmonth-control-aria-label",children:"Year/month control aria-label"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"getYearControlProps"}),"/",(0,a.jsx)(t.code,{children:"getMonthControlProps"}),"/",(0,a.jsx)(t.code,{children:"getDayProps"})," to customize ",(0,a.jsx)(t.code,{children:"aria-label"})," attribute:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { DatePicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <DatePicker\n      getDayProps={(date) => ({\n        'aria-label': `Select date ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,\n      })}\n      getYearControlProps={(date) => ({\n        'aria-label': `Select year ${date.getFullYear()}`,\n      })}\n      getMonthControlProps={(date) => ({\n        'aria-label': `Select month ${date.getFullYear()}/${date.getMonth()}`,\n      })}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,a.jsx)(t.p,{children:"Note that the following events will only trigger if focus is on date control."}),"\n",(0,a.jsx)(o,{data:[{key:"ArrowRight",description:"Focuses next non-disabled date"},{key:"ArrowLeft",description:"Focuses previous non-disabled date"},{key:"ArrowDown",description:"Focuses next non-disabled date in the same column"},{key:"ArrowUp",description:"Focuses previous non-disabled date in the same column"}]})]})}var Q=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(q,Object.assign({},e,{children:(0,a.jsx)(J,e)}))};function ee(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},64381:function(e,t,n){e.exports=function(e){"use strict";var t="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),n="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),a="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),r="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),o=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function l(e,t,n){var a,r;return"m"===n?t?"минута":"минуту":e+" "+(a=+e,r=({mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"})[n].split("_"),a%10==1&&a%100!=11?r[0]:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?r[1]:r[2])}var i=function(e,a){return o.test(a)?t[e.month()]:n[e.month()]};i.s=n,i.f=t;var s=function(e,t){return o.test(t)?a[e.month()]:r[e.month()]};s.s=r,s.f=a;var d={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:i,monthsShort:s,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:l,mm:l,h:"час",hh:l,d:"день",dd:l,M:"месяц",MM:l,y:"год",yy:l},ordinal:function(e){return e},meridiem:function(e){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(d,null,!0),d}(n(27693))},99040:function(e,t,n){"use strict";n.d(t,{z:function(){return k}});var a=n(67294),r=n(46393),o={root:"m-e5262200",indicator:"m-760d1fb1",processing:"m-885901b1"},l=n(75144),i=n(35577),s=n(25637),d=n(51227),c=n(95553),u=n(94975),m=n(71350),p=Object.defineProperty,f=Object.defineProperties,h=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,x=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,j=(e,t)=>{for(var n in t||(t={}))D.call(t,n)&&x(e,n,t[n]);if(y)for(var n of y(t))g.call(t,n)&&x(e,n,t[n]);return e},v=(e,t)=>f(e,h(t)),b=(e,t)=>{var n={};for(var a in e)D.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&y)for(var a of y(e))0>t.indexOf(a)&&g.call(e,a)&&(n[a]=e[a]);return n};let w={position:"top-end",offset:0,inline:!1,withBorder:!1,disabled:!1,processing:!1,size:10},_=(0,c.Z)((e,{color:t,position:n,offset:a,size:o,radius:l,zIndex:i})=>({root:j({"--indicator-color":(0,u.p)(t,e),"--indicator-size":(0,r.h)(o),"--indicator-radius":void 0!==l?(0,m.H5)(l):void 0,"--indicator-z-index":null==i?void 0:i.toString()},function(e="top-end",t=0){let n={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},a=(0,r.h)(t),[o,l]=e.split("-");return"top"===o&&(n["--indicator-top"]=a,n["--indicator-translate-y"]="-50%"),"middle"===o&&(n["--indicator-top"]="50%",n["--indicator-translate-y"]="-50%"),"bottom"===o&&(n["--indicator-bottom"]=a,n["--indicator-translate-y"]="50%"),"start"===l&&(n["--indicator-left"]=a,n["--indicator-translate-x"]="-50%"),"center"===l&&(n["--indicator-left"]="50%",n["--indicator-translate-x"]="-50%"),"end"===l&&(n["--indicator-right"]=a,n["--indicator-translate-x"]="50%"),n}(n,a))})),k=(0,l.d)((e,t)=>{let n=(0,i.w)("Indicator",w,e),{classNames:r,className:l,style:c,styles:u,unstyled:m,vars:p,children:f,position:h,offset:y,inline:D,label:g,radius:x,color:k,withBorder:P,disabled:S,processing:M,zIndex:C}=n,Y=b(n,["classNames","className","style","styles","unstyled","vars","children","position","offset","inline","label","radius","color","withBorder","disabled","processing","zIndex"]),L=(0,s.y)({name:"Indicator",classes:o,props:n,className:l,style:c,classNames:r,styles:u,unstyled:m,vars:p,varsResolver:_});return a.createElement(d.x,j(v(j({ref:t},L("root")),{mod:{inline:D}}),Y),!S&&a.createElement(a.Fragment,null,a.createElement(d.x,j({mod:{"with-label":!!g,"with-border":P,processing:M}},L("indicator")),g)),f)});k.classes=o,k.displayName="@mantine/core/Indicator"},29463:function(e,t,n){"use strict";n.d(t,{M:function(){return D}});var a=n(67294),r=n(75144),o=n(35577),l=n(19732),i=n(18437),s=n(29743),d=Object.defineProperty,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))m.call(t,n)&&p(e,n,t[n]);return e},h=(e,t)=>{var n={};for(var a in e)u.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))0>t.indexOf(a)&&m.call(e,a)&&(n[a]=e[a]);return n};let y={type:"default",defaultLevel:"month",numberOfColumns:1},D=(0,r.d)((e,t)=>{let n=(0,o.w)("DatePicker",y,e),{classNames:r,styles:d,unstyled:c,vars:u,type:m,defaultValue:p,value:D,onChange:g,__staticSelector:x,getDayProps:j,allowSingleDateInRange:v,allowDeselect:b,onMouseLeave:w,numberOfColumns:_,hideOutsideDates:k,__onDayMouseEnter:P,__onDayClick:S}=n,M=h(n,["classNames","styles","unstyled","vars","type","defaultValue","value","onChange","__staticSelector","getDayProps","allowSingleDateInRange","allowDeselect","onMouseLeave","numberOfColumns","hideOutsideDates","__onDayMouseEnter","__onDayClick"]),{onDateChange:C,onRootMouseLeave:Y,onHoveredDateChange:L,getControlProps:E}=(0,i.D)({type:m,level:"day",allowDeselect:b,allowSingleDateInRange:v,value:D,defaultValue:p,onChange:g,onMouseLeave:w}),{resolvedClassNames:O,resolvedStyles:F}=(0,l.h)({classNames:r,styles:d,props:n});return a.createElement(s.f,f({ref:t,minLevel:"month",classNames:O,styles:F,__staticSelector:x||"DatePicker",onMouseLeave:Y,numberOfColumns:_,hideOutsideDates:null!=k?k:1!==_,__onDayMouseEnter:(e,t)=>{L(t),null==P||P(e,t)},__onDayClick:(e,t)=>{C(t),null==S||S(e,t)},getDayProps:e=>f(f({},E(e)),null==j?void 0:j(e))},M))});D.classes=s.f.classes,D.displayName="@mantine/dates/DatePicker"},18437:function(e,t,n){"use strict";n.d(t,{D:function(){return s}});var a=n(27693),r=n.n(a),o=n(67294),l=n(50703);function i(e,t){let n=[...t].sort((e,t)=>e.getTime()-t.getTime());return r()(n[0]).startOf("day").subtract(1,"ms").isBefore(e)&&r()(n[1]).endOf("day").add(1,"ms").isAfter(e)}function s({type:e,level:t,value:n,defaultValue:a,onChange:s,allowSingleDateInRange:d,allowDeselect:c,onMouseLeave:u}){let[m,p]=(0,l.l)({type:e,value:n,defaultValue:a,onChange:s}),[f,h]=(0,o.useState)("range"===e&&m[0]&&!m[1]?m[0]:null),[y,D]=(0,o.useState)(null),g=n=>{if("range"===e){if(f instanceof Date&&!m[1]){if(r()(n).isSame(f,t)&&!d){h(null),D(null),p([null,null]);return}let e=[n,f];e.sort((e,t)=>e.getTime()-t.getTime()),p(e),D(null),h(null);return}if(m[0]&&!m[1]&&r()(n).isSame(m[0],t)&&!d){h(null),D(null),p([null,null]);return}p([n,null]),D(null),h(n);return}if("multiple"===e){m.some(e=>r()(e).isSame(n,t))?p(m.filter(e=>!r()(e).isSame(n,t))):p([...m,n]);return}m&&c&&r()(n).isSame(m,t)?p(null):p(n)},x=e=>f instanceof Date&&y instanceof Date?i(e,[y,f]):m[0]instanceof Date&&m[1]instanceof Date&&i(e,m),j=e=>m[0]instanceof Date&&!!r()(e).isSame(m[0],t)&&!(y&&r()(y).isBefore(m[0])),v=e=>m[1]instanceof Date?r()(e).isSame(m[1],t):m[0]instanceof Date&&!!y&&r()(y).isBefore(m[0])&&r()(e).isSame(m[0],t),b=n=>{if("range"===e)return{selected:m.some(e=>e&&r()(e).isSame(n,t)),inRange:x(n),firstInRange:j(n),lastInRange:v(n),"data-autofocus":!!m[0]&&r()(m[0]).isSame(n,t)||void 0};if("multiple"===e)return{selected:m.some(e=>e&&r()(e).isSame(n,t)),"data-autofocus":!!m[0]&&r()(m[0]).isSame(n,t)||void 0};let a=r()(m).isSame(n,t);return{selected:a,"data-autofocus":a||void 0}};return{onDateChange:g,onRootMouseLeave:"range"===e?e=>{null==u||u(e),D(null)}:u,onHoveredDateChange:"range"===e&&f?D:()=>{},getControlProps:b,_value:m,setValue:p}}},50703:function(e,t,n){"use strict";n.d(t,{l:function(){return l}});var a=n(35179),r=n(67294);let o=e=>"range"===e?[null,null]:"multiple"===e?[]:null;function l({type:e,value:t,defaultValue:n,onChange:l}){let i=(0,r.useRef)(e),[s,d]=(0,a.C)({value:t,defaultValue:n,onChange:l,finalValue:o(e)}),c=s;return i.current!==e&&(i.current=e,void 0===t&&d(c=void 0!==n?n:o(e))),[c,d]}},33106:function(e,t,n){"use strict";n.d(t,{$:function(){return g}});var a=n(67294);let r=e=>`
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
`,i=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <${e} value={value} onChange={setValue} />;
}
`,s=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <${e} type="range" allowSingleDateInRange value={value} onChange={setValue} />
  );
}
`;var d=n(77048);let c=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <${e} type="range" numberOfColumns={2} value={value} onChange={setValue} />
  );
}
`;var u=Object.defineProperty,m=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&h(e,n,t[n]);if(m)for(var n of m(t))f.call(t,n)&&h(e,n,t[n]);return e};let D=e=>`import { ${e} } from '@mantine/dates';

function Demo() {
  return <${e} defaultValue={new Date()}{{props}} />;
}
`;function g(e){return{usage:{type:"code",centered:!0,code:i(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)(null);return a.createElement(e,{value:t,onChange:n})}},range:{type:"code",centered:!0,code:l(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)([null,null]);return a.createElement(e,{type:"range",value:t,onChange:n})}},multiple:{type:"code",centered:!0,code:o(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)([]);return a.createElement(e,{type:"multiple",value:t,onChange:n})}},deselect:{type:"code",centered:!0,code:r(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)(null);return a.createElement(e,{allowDeselect:!0,value:t,onChange:n})}},singleRange:{type:"code",centered:!0,code:s(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)([null,null]);return a.createElement(e,{type:"range",allowSingleDateInRange:!0,value:t,onChange:n})}},numberOfColumns:{type:"code",centered:!0,code:c(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)([null,null]);return a.createElement(a.Fragment,null,a.createElement(e,{type:"range",numberOfColumns:2,value:t,onChange:n,visibleFrom:"sm"}),a.createElement(d.x,{ta:"center",hiddenFrom:"sm"},"Demo is not available on small screens. Make your screen larger to see the demo."))}},sizeConfigurator:{type:"configurator",centered:!0,code:D(e.displayName.replace("@mantine/dates/","")),controls:[{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"}],component:t=>a.createElement(e,y({defaultValue:new Date},t))}}}}},function(e){e.O(0,[9905,59,9774,2888,179],function(){return e(e.s=12622)}),_N_E=e.O()}]);