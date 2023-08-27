(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9381],{29109:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/getting-started",function(){return n(44984)}])},44984:function(e,t,n){"use strict";n.r(t);var a=n(85893),r=n(11151),s=n(19905),o=n(9904),i=n(65120);let l=(0,s.A)(o.us.GettingStartedDates);function c(e){let t=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a"},(0,r.ah)(),e.components),{InstallScript:n,Demo:s}=t;return s||u("Demo",!0),n||u("InstallScript",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(n,{packages:"@mantine/dates dayjs"}),"\n",(0,a.jsx)(t.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import '@mantine/dates/styles.css';\n"})}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:["After installing ",(0,a.jsx)(t.code,{children:"@mantine/dates"})," package and importing styles, you can use all components from it:"]}),"\n",(0,a.jsx)(s,{data:i.j_}),"\n",(0,a.jsx)(t.h2,{id:"dayjs",children:"dayjs"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"@mantine/dates"})," components use ",(0,a.jsx)(t.a,{href:"https://day.js.org/",children:"dayjs"})," under the hood for date manipulations and formatting.\ndayjs is a required dependency – you cannot change it to another date library. If you want to use a different\ndate library in your application, you will need to install it separately."]}),"\n",(0,a.jsx)(t.h2,{id:"custom-parse-format",children:"Custom parse format"}),"\n",(0,a.jsxs)(t.p,{children:["Some components like ",(0,a.jsx)(t.a,{href:"/dates/date-input",children:"DateInput"})," require ",(0,a.jsx)(t.a,{href:"https://day.js.org/docs/en/plugin/custom-parse-format",children:"custom parse format"}),"\ndayjs plugin. You need to extend dayjs with this plugin before using components that require it. Note that\nit is usually done once in your application root file, so you don't need to do it every time you use component."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import dayjs from 'dayjs';\nimport customParseFormat from 'dayjs/plugin/customParseFormat';\n\ndayjs.extend(customParseFormat);\n"})})]})}function u(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(l,Object.assign({},e,{children:(0,a.jsx)(c,e)}))}},29463:function(e,t,n){"use strict";n.d(t,{M:function(){return j}});var a=n(67294),r=n(75144),s=n(35577),o=n(19732),i=n(18437),l=n(29743),c=Object.defineProperty,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&f(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&f(e,n,t[n]);return e},y=(e,t)=>{var n={};for(var a in e)d.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))0>t.indexOf(a)&&p.call(e,a)&&(n[a]=e[a]);return n};let h={type:"default",defaultLevel:"month",numberOfColumns:1},j=(0,r.d)((e,t)=>{let n=(0,s.w)("DatePicker",h,e),{classNames:r,styles:c,unstyled:u,vars:d,type:p,defaultValue:f,value:j,onChange:g,__staticSelector:v,getDayProps:b,allowSingleDateInRange:x,allowDeselect:_,onMouseLeave:D,numberOfColumns:O,hideOutsideDates:w,__onDayMouseEnter:P,__onDayClick:k}=n,N=y(n,["classNames","styles","unstyled","vars","type","defaultValue","value","onChange","__staticSelector","getDayProps","allowSingleDateInRange","allowDeselect","onMouseLeave","numberOfColumns","hideOutsideDates","__onDayMouseEnter","__onDayClick"]),{onDateChange:E,onRootMouseLeave:C,onHoveredDateChange:S,getControlProps:M}=(0,i.D)({type:p,level:"day",allowDeselect:_,allowSingleDateInRange:x,value:j,defaultValue:f,onChange:g,onMouseLeave:D}),{resolvedClassNames:I,resolvedStyles:F}=(0,o.h)({classNames:r,styles:c,props:n});return a.createElement(l.f,m({ref:t,minLevel:"month",classNames:I,styles:F,__staticSelector:v||"DatePicker",onMouseLeave:C,numberOfColumns:O,hideOutsideDates:null!=w?w:1!==O,__onDayMouseEnter:(e,t)=>{S(t),null==P||P(e,t)},__onDayClick:(e,t)=>{E(t),null==k||k(e,t)},getDayProps:e=>m(m({},M(e)),null==b?void 0:b(e))},N))});j.classes=l.f.classes,j.displayName="@mantine/dates/DatePicker"},95149:function(e,t,n){"use strict";n.d(t,{a:function(){return D}});var a=n(67294),r=n(75144),s=n(35577),o=n(19732),i=n(8695),l=n(12360),c=n(61154),u=n(29463),d=n(24227),p=Object.defineProperty,f=Object.defineProperties,m=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&g(e,n,t[n]);if(y)for(var n of y(t))j.call(t,n)&&g(e,n,t[n]);return e},b=(e,t)=>f(e,m(t)),x=(e,t)=>{var n={};for(var a in e)h.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&y)for(var a of y(e))0>t.indexOf(a)&&j.call(e,a)&&(n[a]=e[a]);return n};let _={type:"default",valueFormat:"MMMM D, YYYY",closeOnChange:!0,sortDates:!0,dropdownType:"popover",size:"sm"},D=(0,r.d)((e,t)=>{let n=(0,s.w)("DatePickerInput",_,e),{type:r,value:p,defaultValue:f,onChange:m,valueFormat:y,labelSeparator:h,locale:j,classNames:g,styles:D,unstyled:O,closeOnChange:w,size:P,variant:k,dropdownType:N,sortDates:E,minDate:C,maxDate:S,vars:M,defaultDate:I}=n,F=x(n,["type","value","defaultValue","onChange","valueFormat","labelSeparator","locale","classNames","styles","unstyled","closeOnChange","size","variant","dropdownType","sortDates","minDate","maxDate","vars","defaultDate"]),{resolvedClassNames:A,resolvedStyles:Y}=(0,o.h)({classNames:g,styles:D,props:n}),{calendarProps:q,others:L}=(0,i.M)(F),{_value:T,setValue:z,formattedValue:B,dropdownHandlers:V,dropdownOpened:X,onClear:G,shouldClear:R}=(0,l.u)({type:r,value:p,defaultValue:f,onChange:m,locale:j,format:y,labelSeparator:h,closeOnChange:w,sortDates:E}),U=Array.isArray(T)?T[0]||I:T||I;return a.createElement(c.i,b(v({formattedValue:B,dropdownOpened:X,dropdownHandlers:V,classNames:A,styles:Y,unstyled:O,ref:t,onClear:G,shouldClear:R,value:T,size:P,variant:k,dropdownType:N},L),{type:r,__staticSelector:"DatePickerInput"}),a.createElement(u.M,b(v({},q),{size:P,variant:k,type:r,value:T,defaultDate:U||(0,d.S)({maxDate:S,minDate:C}),onChange:z,locale:j,classNames:A,styles:Y,unstyled:O,__staticSelector:"DatePickerInput",__stopPropagation:"popover"===N,minDate:C,maxDate:S})))});D.classes=v(v({},c.i.classes),u.M.classes),D.displayName="@mantine/dates/DatePickerInput"},65120:function(e,t,n){"use strict";n.d(t,{$S:function(){return d},gB:function(){return l},j_:function(){return s},m6:function(){return o},oC:function(){return c},qv:function(){return u},w6:function(){return i}});var a=n(95149),r=n(90474);let{usage:s,multiple:o,range:i,configurator:l,modal:c,icon:u,clearable:d}=(0,r.B)(a.a)}},function(e){e.O(0,[3186,178,3773,7720,9774,2888,179],function(){return e(e.s=29109)}),_N_E=e.O()}]);