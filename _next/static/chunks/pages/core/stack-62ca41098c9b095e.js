(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6514],{42051:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/stack",function(){return n(86727)}])},86727:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(85893),a=n(11151),l=n(34940),o=n(25263),i=n(67294),c=n(25943),u=n(43406),s=Object.defineProperty,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&b(e,n,t[n]);if(p)for(var n of p(t))f.call(t,n)&&b(e,n,t[n]);return e};let v=`
import { Stack, Button } from '@mantine/core';

function Demo() {
  return (
    <Stack
      h={300}
      bg="var(--mantine-color-blue-light)"
      {{props}}
    >
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
    </Stack>
  );
}
`,x={type:"configurator",component:function(e){return i.createElement(c.K,h({h:300,bg:"var(--mantine-color-blue-light)"},e),i.createElement(u.z,{variant:"outline"},"1"),i.createElement(u.z,{variant:"outline"},"2"),i.createElement(u.z,{variant:"outline"},"3"))},code:v,controls:[{prop:"align",type:"select",data:[{label:"stretch",value:"stretch"},{label:"center",value:"center"},{label:"flex-start",value:"flex-start"},{label:"flex-end",value:"flex-end"}],initialValue:"stretch",libraryValue:"stretch"},{prop:"justify",type:"select",data:[{label:"center",value:"center"},{label:"flex-start",value:"flex-start"},{label:"flex-end",value:"flex-end"},{label:"space-between",value:"space-between"},{label:"space-around",value:"space-around"}],initialValue:"center",libraryValue:"center"},{prop:"gap",type:"size",initialValue:"md",libraryValue:"md"}]},g=(0,l.A)(o.us.Stack);function m(e){let t=Object.assign({h2:"h2",p:"p",a:"a",code:"code"},(0,a.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:x}),"\n",(0,r.jsx)(t.h2,{id:"browser-support",children:"Browser support"}),"\n",(0,r.jsxs)(t.p,{children:["Stack uses ",(0,r.jsx)(t.a,{href:"https://caniuse.com/flexbox-gap",children:"flexbox gap"})," to add spacing between children.\nIn older browsers ",(0,r.jsx)(t.code,{children:"Stack"})," children will not have spacing. You can install PostCSS ",(0,r.jsx)(t.a,{href:"https://github.com/gavinmcfarland/flex-gap-polyfill",children:"flex-gap-polyfill"}),"\nto add support for older browsers."]})]})}var y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(g,Object.assign({},e,{children:(0,r.jsx)(m,e)}))}}},function(e){e.O(0,[4878,9341,4940,9774,2888,179],function(){return e(e.s=42051)}),_N_E=e.O()}]);