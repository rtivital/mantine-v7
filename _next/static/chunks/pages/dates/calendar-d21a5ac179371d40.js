(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7025],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},46766:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/calendar",function(){return n(49754)}])},49754:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(85893),a=n(11151),i=n(19905),s=n(9904),o=n(67294),d=n(29743);let c=`
import { Calendar } from '@mantine/dates';

function Demo() {
  return <Calendar />;
}
`,u={type:"code",centered:!0,component:function(){return o.createElement(d.f,null)},code:c};var l=n(27693),h=n.n(l);let f=`
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
`,p={type:"code",centered:!0,component:function(){let[e,t]=(0,o.useState)([]),n=n=>{let r=e.some(e=>h()(n).isSame(e,"date"));r?t(e=>e.filter(e=>!h()(e).isSame(n,"date"))):e.length<3&&t(e=>[...e,n])};return o.createElement(d.f,{getDayProps:t=>({selected:e.some(e=>h()(t).isSame(e,"date")),onClick:()=>n(t)})})},code:f},y=`
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
`;function m(e){let t=e.getDay();return 0===t?6:t-1}function g(e,t){return!!t&&h()(e).isBefore(h()(new Date(t.getFullYear(),t.getMonth(),t.getDate()+(6-m(t)))).endOf("date").toDate())&&h()(e).isAfter(new Date(t.getFullYear(),t.getMonth(),t.getDate()-m(t)-1))}let v={type:"code",centered:!0,component:function(){let[e,t]=(0,o.useState)(null),[n,r]=(0,o.useState)(null);return o.createElement(d.f,{withCellSpacing:!1,getDayProps:a=>{let i=g(a,e),s=g(a,n),o=i||s;return{onMouseEnter:()=>t(a),onMouseLeave:()=>t(null),inRange:o,firstInRange:o&&1===a.getDay(),lastInRange:o&&0===a.getDay(),selected:s,onClick:()=>r(a)}}})},code:y};var D=n(99040);let $=`
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
`,M={type:"code",centered:!0,component:function(){return o.createElement(d.f,{static:!0,renderDay:e=>{let t=e.getDate();return o.createElement(D.z,{size:6,color:"red",offset:-2,disabled:16!==t},o.createElement("div",null,t))}})},code:$},k=(0,i.A)(s.us.Calendar);function S(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,a.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"Calendar"})," component to create custom date pickers if ",(0,r.jsx)(t.a,{href:"/dates/date-picker/",children:"DatePicker"}),"\ncomponent does not meet your requirements. ",(0,r.jsx)(t.code,{children:"Calendar"})," supports all ",(0,r.jsx)(t.a,{href:"/dates/date-picker/",children:"DatePicker"}),"\nprops and some other props that are listed in props table – check it out to learn about all component features."]}),"\n",(0,r.jsxs)(t.p,{children:["By default, ",(0,r.jsx)(t.code,{children:"Calendar"})," works the same way as ",(0,r.jsx)(t.a,{href:"/dates/date-picker/",children:"DatePicker"})," component but does not\ninclude any logic of dates selection:"]}),"\n",(0,r.jsx)(n,{data:u}),"\n",(0,r.jsx)(t.h2,{id:"custom-date-pickers",children:"Custom date pickers"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"Calendar"})," as a base for custom date pickers. For example, you can create a date picker\nthat allows user to pick three or less dates:"]}),"\n",(0,r.jsx)(n,{data:p}),"\n",(0,r.jsx)(t.p,{children:"Another custom date picker example – week picker:"}),"\n",(0,r.jsx)(n,{data:v}),"\n",(0,r.jsx)(t.h2,{id:"static-prop",children:"Static prop"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"static"})," prop to display a calendar that user cannot interact with.\nIt is useful when you want to display data with in calendar view but do\nnot want it to be interactive."]}),"\n",(0,r.jsx)(n,{data:M})]})}var w=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(k,Object.assign({},e,{children:(0,r.jsx)(S,e)}))}},27693:function(e){var t,n,r,a,i,s,o,d,c,u,l,h,f,p,y,m,g,v,D,$,M;e.exports=(t="millisecond",n="second",r="minute",a="hour",i="week",s="month",o="quarter",d="year",c="date",u="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},(y={})[p="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(e){return e instanceof $},g=function(e,t,n){var r;if(!e)return p;if("string"==typeof e)y[e]&&(r=e),t&&(y[e]=t,r=e);else{var a=e.name;y[a]=e,r=a}return!n&&r&&(p=r),r||!n&&p},v=function(e,t){if(m(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new $(n)},(D={s:f,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+f(Math.floor(n/60),2,"0")+":"+f(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,s),i=n-a<0,o=t.clone().add(r+(i?-1:1),s);return+(-(r+(n-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:s,y:d,w:i,d:"day",D:c,h:a,m:r,s:n,ms:t,Q:o})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=g,D.i=m,D.w=function(e,t){return v(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},M=($=function(){function e(e){this.$L=g(e.locale,null,!0),this.parse(e)}var f=e.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(l);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return D},f.isValid=function(){return this.$d.toString()!==u},f.isSame=function(e,t){var n=v(e);return this.startOf(t)<=n&&n<=this.endOf(t)},f.isAfter=function(e,t){return v(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<v(e)},f.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,t){var o=this,u=!!D.u(t)||t,l=D.p(e),h=function(e,t){var n=D.w(o.$u?Date.UTC(o.$y,t,e):new Date(o.$y,t,e),o);return u?n:n.endOf("day")},f=function(e,t){return D.w(o.toDate()[e].apply(o.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),o)},p=this.$W,y=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(l){case d:return u?h(1,0):h(31,11);case s:return u?h(1,y):h(0,y+1);case i:var v=this.$locale().weekStart||0,$=(p<v?p+7:p)-v;return h(u?m-$:m+(6-$),y);case"day":case c:return f(g+"Hours",0);case a:return f(g+"Minutes",1);case r:return f(g+"Seconds",2);case n:return f(g+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,i){var o,u=D.p(e),l="set"+(this.$u?"UTC":""),h=((o={}).day=l+"Date",o[c]=l+"Date",o[s]=l+"Month",o[d]=l+"FullYear",o[a]=l+"Hours",o[r]=l+"Minutes",o[n]=l+"Seconds",o[t]=l+"Milliseconds",o)[u],f="day"===u?this.$D+(i-this.$W):i;if(u===s||u===d){var p=this.clone().set(c,1);p.$d[h](f),p.init(),this.$d=p.set(c,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[D.p(e)]()},f.add=function(e,t){var o,c=this;e=Number(e);var u=D.p(t),l=function(t){var n=v(c);return D.w(n.date(n.date()+Math.round(t*e)),c)};if(u===s)return this.set(s,this.$M+e);if(u===d)return this.set(d,this.$y+e);if("day"===u)return l(1);if(u===i)return l(7);var h=((o={})[r]=6e4,o[a]=36e5,o[n]=1e3,o)[u]||1,f=this.$d.getTime()+e*h;return D.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this;if(!this.isValid())return u;var n=e||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),a=this.$locale(),i=this.$H,s=this.$m,o=this.$M,d=a.weekdays,c=a.months,l=function(e,r,a,i){return e&&(e[r]||e(t,n))||a[r].substr(0,i)},f=function(e){return D.s(i%12||12,e,"0")},p=a.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},y={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:l(a.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:l(a.weekdaysMin,this.$W,d,2),ddd:l(a.weekdaysShort,this.$W,d,3),dddd:d[this.$W],H:String(i),HH:D.s(i,2,"0"),h:f(1),hh:f(2),a:p(i,s,!0),A:p(i,s,!1),m:String(s),mm:D.s(s,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return n.replace(h,function(e,t){return t||y[e]||r.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(e,t,c){var u,l=D.p(t),h=v(e),f=(h.utcOffset()-this.utcOffset())*6e4,p=this-h,y=D.m(this,h);return y=((u={})[d]=y/12,u[s]=y,u[o]=y/3,u[i]=(p-f)/6048e5,u.day=(p-f)/864e5,u[a]=p/36e5,u[r]=p/6e4,u[n]=p/1e3,u)[l]||p,c?y:D.a(y)},f.daysInMonth=function(){return this.endOf(s).$D},f.$locale=function(){return y[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=g(e,t,!0);return r&&(n.$L=r),n},f.clone=function(){return D.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},e}()).prototype,v.prototype=M,[["$ms",t],["$s",n],["$m",r],["$H",a],["$W","day"],["$M",s],["$y",d],["$D",c]].forEach(function(e){M[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),v.extend=function(e,t){return e.$i||(e(t,$,v),e.$i=!0),v},v.locale=g,v.isDayjs=m,v.unix=function(e){return v(1e3*e)},v.en=y[p],v.Ls=y,v.p={},v)},99040:function(e,t,n){"use strict";n.d(t,{z:function(){return b}});var r=n(67294),a=n(46393),i={root:"m-e5262200",indicator:"m-760d1fb1",processing:"m-885901b1"},s=n(75144),o=n(35577),d=n(25637),c=n(51227),u=n(95553),l=n(94975),h=n(71350),f=Object.defineProperty,p=Object.defineProperties,y=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,D=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&D(e,n,t[n]);if(m)for(var n of m(t))v.call(t,n)&&D(e,n,t[n]);return e},M=(e,t)=>p(e,y(t)),k=(e,t)=>{var n={};for(var r in e)g.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))0>t.indexOf(r)&&v.call(e,r)&&(n[r]=e[r]);return n};let S={position:"top-end",offset:0,inline:!1,withBorder:!1,disabled:!1,processing:!1},w=(0,u.Z)((e,{color:t,position:n,offset:r,size:i,radius:s,zIndex:o})=>({root:$({"--indicator-color":t?(0,l.p)(t,e):void 0,"--indicator-size":(0,a.h)(i),"--indicator-radius":void 0===s?void 0:(0,h.H5)(s),"--indicator-z-index":null==o?void 0:o.toString()},function(e="top-end",t=0){let n={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},r=(0,a.h)(t),[i,s]=e.split("-");return"top"===i&&(n["--indicator-top"]=r,n["--indicator-translate-y"]="-50%"),"middle"===i&&(n["--indicator-top"]="50%",n["--indicator-translate-y"]="-50%"),"bottom"===i&&(n["--indicator-bottom"]=r,n["--indicator-translate-y"]="50%"),"start"===s&&(n["--indicator-left"]=r,n["--indicator-translate-x"]="-50%"),"center"===s&&(n["--indicator-left"]="50%",n["--indicator-translate-x"]="-50%"),"end"===s&&(n["--indicator-right"]=r,n["--indicator-translate-x"]="50%"),n}(n,r))})),b=(0,s.d)((e,t)=>{let n=(0,o.w)("Indicator",S,e),{classNames:a,className:s,style:u,styles:l,unstyled:h,vars:f,children:p,position:y,offset:m,inline:g,label:v,radius:D,color:b,withBorder:j,disabled:x,processing:O,zIndex:I}=n,_=k(n,["classNames","className","style","styles","unstyled","vars","children","position","offset","inline","label","radius","color","withBorder","disabled","processing","zIndex"]),C=(0,d.y)({name:"Indicator",classes:i,props:n,className:s,style:u,classNames:a,styles:l,unstyled:h,vars:f,varsResolver:w});return r.createElement(c.x,$(M($({ref:t},C("root")),{mod:{inline:g}}),_),!x&&r.createElement(r.Fragment,null,r.createElement(c.x,$({mod:{"with-label":!!v,"with-border":j,processing:O}},C("indicator")),v)),p)});b.classes=i,b.displayName="@mantine/core/Indicator"}},function(e){e.O(0,[1300,178,3773,9774,2888,179],function(){return e(e.s=46766)}),_N_E=e.O()}]);