(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7025],{46766:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/calendar",function(){return a(49754)}])},49754:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return w}});var n=a(85893),r=a(11151),o=a(19905),i=a(9904),d=a(67294),s=a(29743);let c=`
import { Calendar } from '@mantine/dates';

function Demo() {
  return <Calendar />;
}
`,l={type:"code",centered:!0,component:function(){return d.createElement(s.f,null)},code:c};var u=a(27693),p=a.n(u);let f=`
import dayjs from 'dayjs';
import { useState } from 'react';
import { Calendar } from '@mantine/dates';

function Demo() {
  const [selected, setSelected] = useState<Date[]>([]);
  const handleSelect = (date: Date) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, 'date'));
    if (isSelected) {
      setSelected((current) => current.filter((d) => !dayjs(d).isSame(date, 'date')));
    } else if (selected.length < 3) {
      setSelected((current) => [...current, date]);
    }
  };

  return (
    <Calendar
      getDayProps={(date) => ({
        selected: selected.some((s) => dayjs(date).isSame(s, 'date')),
        onClick: () => handleSelect(date),
      })}
    />
  );
}
`,m={type:"code",centered:!0,component:function(){let[e,t]=(0,d.useState)([]),a=a=>{let n=e.some(e=>p()(a).isSame(e,"date"));n?t(e=>e.filter(e=>!p()(e).isSame(a,"date"))):e.length<3&&t(e=>[...e,a])};return d.createElement(s.f,{getDayProps:t=>({selected:e.some(e=>p()(t).isSame(e,"date")),onClick:()=>a(t)})})},code:f},h=`
import { useState } from 'react';
import { Calendar } from '@mantine/dates';
import dayjs from 'dayjs';

function getDay(date: Date) {
  const day = date.getDay();
  return day === 0 ? 6 : day - 1;
}

function startOfWeek(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - getDay(date) - 1);
}

function endOfWeek(date: Date) {
  return dayjs(new Date(date.getFullYear(), date.getMonth(), date.getDate() + (6 - getDay(date))))
    .endOf('date')
    .toDate();
}

function isInWeekRange(date: Date, value: Date | null) {
  return value
    ? dayjs(date).isBefore(endOfWeek(value)) && dayjs(date).isAfter(startOfWeek(value))
    : false;
}

function Demo() {
  const [hovered, setHovered] = useState<Date | null>(null);
  const [value, setValue] = useState<Date | null>(null);

  return (
    <Calendar
      withCellSpacing={false}
      getDayProps={(date) => {
        const isHovered = isInWeekRange(date, hovered);
        const isSelected = isInWeekRange(date, value);
        const isInRange = isHovered || isSelected;
        return {
          onMouseEnter: () => setHovered(date),
          onMouseLeave: () => setHovered(null),
          inRange: isInRange,
          firstInRange: isInRange && date.getDay() === 1,
          lastInRange: isInRange && date.getDay() === 0,
          selected: isSelected,
          onClick: () => setValue(date),
        };
      }}
    />
  );
}
`;function g(e){let t=e.getDay();return 0===t?6:t-1}function y(e,t){return!!t&&p()(e).isBefore(p()(new Date(t.getFullYear(),t.getMonth(),t.getDate()+(6-g(t)))).endOf("date").toDate())&&p()(e).isAfter(new Date(t.getFullYear(),t.getMonth(),t.getDate()-g(t)-1))}let D={type:"code",centered:!0,component:function(){let[e,t]=(0,d.useState)(null),[a,n]=(0,d.useState)(null);return d.createElement(s.f,{withCellSpacing:!1,getDayProps:r=>{let o=y(r,e),i=y(r,a),d=o||i;return{onMouseEnter:()=>t(r),onMouseLeave:()=>t(null),inRange:d,firstInRange:d&&1===r.getDay(),lastInRange:d&&0===r.getDay(),selected:i,onClick:()=>n(r)}}})},code:h};var j=a(99040);let v=`
import { Indicator } from '@mantine/core';
import { Calendar } from '@mantine/dates';

function Demo() {
  return (
    <Calendar
      static
      renderDay={(date) => {
        const day = date.getDate();
        return (
          <Indicator size={6} color="red" offset={-2} disabled={day !== 16}>
            <div>{day}</div>
          </Indicator>
        );
      }}
    />
  );
}
`,x={type:"code",centered:!0,component:function(){return d.createElement(s.f,{static:!0,renderDay:e=>{let t=e.getDate();return d.createElement(j.z,{size:6,color:"red",offset:-2,disabled:16!==t},d.createElement("div",null,t))}})},code:v},b=(0,o.A)(i.us.Calendar);function k(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,r.ah)(),e.components),{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"Calendar"})," component to create custom date pickers if ",(0,n.jsx)(t.a,{href:"/dates/date-picker/",children:"DatePicker"}),"\ncomponent does not meet your requirements. ",(0,n.jsx)(t.code,{children:"Calendar"})," supports all ",(0,n.jsx)(t.a,{href:"/dates/date-picker/",children:"DatePicker"}),"\nprops and some other props that are listed in props table – check it out to learn about all component features."]}),"\n",(0,n.jsxs)(t.p,{children:["By default, ",(0,n.jsx)(t.code,{children:"Calendar"})," works the same way as ",(0,n.jsx)(t.a,{href:"/dates/date-picker/",children:"DatePicker"})," component but does not\ninclude any logic of dates selection:"]}),"\n",(0,n.jsx)(a,{data:l}),"\n",(0,n.jsx)(t.h2,{id:"custom-date-pickers",children:"Custom date pickers"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"Calendar"})," as a base for custom date pickers. For example, you can create a date picker\nthat allows user to pick three or less dates:"]}),"\n",(0,n.jsx)(a,{data:m}),"\n",(0,n.jsx)(t.p,{children:"Another custom date picker example – week picker:"}),"\n",(0,n.jsx)(a,{data:D}),"\n",(0,n.jsx)(t.h2,{id:"static-prop",children:"Static prop"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"static"})," prop to display a calendar that user cannot interact with.\nIt is useful when you want to display data with in calendar view but do\nnot want it to be interactive."]}),"\n",(0,n.jsx)(a,{data:x})]})}var w=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(b,Object.assign({},e,{children:(0,n.jsx)(k,e)}))}},99040:function(e,t,a){"use strict";a.d(t,{z:function(){return S}});var n=a(67294),r=a(46393),o={root:"m-e5262200",indicator:"m-760d1fb1",processing:"m-885901b1"},i=a(75144),d=a(35577),s=a(25637),c=a(51227),l=a(95553),u=a(94975),p=a(71350),f=Object.defineProperty,m=Object.defineProperties,h=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,j=(e,t,a)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))y.call(t,a)&&j(e,a,t[a]);if(g)for(var a of g(t))D.call(t,a)&&j(e,a,t[a]);return e},x=(e,t)=>m(e,h(t)),b=(e,t)=>{var a={};for(var n in e)y.call(e,n)&&0>t.indexOf(n)&&(a[n]=e[n]);if(null!=e&&g)for(var n of g(e))0>t.indexOf(n)&&D.call(e,n)&&(a[n]=e[n]);return a};let k={position:"top-end",offset:0,inline:!1,withBorder:!1,disabled:!1,processing:!1,size:10},w=(0,l.Z)((e,{color:t,position:a,offset:n,size:o,radius:i,zIndex:d})=>({root:v({"--indicator-color":(0,u.p)(t,e),"--indicator-size":(0,r.h)(o),"--indicator-radius":void 0!==i?(0,p.H5)(i):void 0,"--indicator-z-index":null==d?void 0:d.toString()},function(e="top-end",t=0){let a={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},n=(0,r.h)(t),[o,i]=e.split("-");return"top"===o&&(a["--indicator-top"]=n,a["--indicator-translate-y"]="-50%"),"middle"===o&&(a["--indicator-top"]="50%",a["--indicator-translate-y"]="-50%"),"bottom"===o&&(a["--indicator-bottom"]=n,a["--indicator-translate-y"]="50%"),"start"===i&&(a["--indicator-left"]=n,a["--indicator-translate-x"]="-50%"),"center"===i&&(a["--indicator-left"]="50%",a["--indicator-translate-x"]="-50%"),"end"===i&&(a["--indicator-right"]=n,a["--indicator-translate-x"]="50%"),a}(a,n))})),S=(0,i.d)((e,t)=>{let a=(0,d.w)("Indicator",k,e),{classNames:r,className:i,style:l,styles:u,unstyled:p,vars:f,children:m,position:h,offset:g,inline:y,label:D,radius:j,color:S,withBorder:C,disabled:O,processing:I,zIndex:E}=a,P=b(a,["classNames","className","style","styles","unstyled","vars","children","position","offset","inline","label","radius","color","withBorder","disabled","processing","zIndex"]),R=(0,s.y)({name:"Indicator",classes:o,props:a,className:i,style:l,classNames:r,styles:u,unstyled:p,vars:f,varsResolver:w});return n.createElement(c.x,v(x(v({ref:t},R("root")),{mod:{inline:y}}),P),!O&&n.createElement(n.Fragment,null,n.createElement(c.x,v({mod:{"with-label":!!D,"with-border":C,processing:I}},R("indicator")),D)),m)});S.classes=o,S.displayName="@mantine/core/Indicator"}},function(e){e.O(0,[9905,59,9774,2888,179],function(){return e(e.s=46766)}),_N_E=e.O()}]);