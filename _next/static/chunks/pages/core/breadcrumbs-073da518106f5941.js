(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1728],{79539:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/breadcrumbs",function(){return t(8427)}])},8427:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return h}});var n=t(85893),a=t(11151),o=t(34940),s=t(25263),c=t(67294),i=t(46342),l=t(26564);let u=`
import { Breadcrumbs, Anchor } from '@mantine/core';

const items = [
  { title: 'Mantine', href: '#' },
  { title: 'Mantine hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Demo() {
  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator="\u2192" mt="xs">{items}</Breadcrumbs>
    </>
  );
}
`,m=[{title:"Mantine",href:"https://mantine.dev"},{title:"Mantine hooks",href:"#"},{title:"use-id",href:"#"}].map((e,r)=>c.createElement(i.e,{href:e.href,key:r},e.title)),d={type:"code",code:u,component:function(){return c.createElement(c.Fragment,null,c.createElement(l.O,null,m),c.createElement(l.O,{separator:"→",mt:"xs",classNames:{separator:"mantine-rotate-rtl"}},m))}},p=(0,o.A)(s.us.Breadcrumbs);function f(e){let r=Object.assign({h2:"h2",p:"p",code:"code"},(0,a.ah)(),e.components),{Demo:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Breadcrumbs"})," component accepts any react nodes as children\nand adds given separator (defaults to ",(0,n.jsx)(r.code,{children:"/"}),") between them:"]}),"\n",(0,n.jsx)(t,{data:d})]})}var h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(p,Object.assign({},e,{children:(0,n.jsx)(f,e)}))}},26564:function(e,r,t){"use strict";t.d(r,{O:function(){return k}});var n=t(67294),a={root:"mantine-DpaSRWv",breadcrumb:"mantine-Xf5Xl8f",separator:"mantine-ixC9ZM7"},o=t(72521),s=t(71350),c=t(75144),i=t(35577),l=t(89123),u=t(94873),m=t(95553),d=Object.defineProperty,p=Object.defineProperties,f=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,x=(e,r,t)=>r in e?d(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,O=(e,r)=>{for(var t in r||(r={}))b.call(r,t)&&x(e,t,r[t]);if(h)for(var t of h(r))y.call(r,t)&&x(e,t,r[t]);return e},j=(e,r)=>p(e,f(r)),v=(e,r)=>{var t={};for(var n in e)b.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&h)for(var n of h(e))0>r.indexOf(n)&&y.call(e,n)&&(t[n]=e[n]);return t};let g={separator:"/",separatorMargin:"xs"},E=(0,m.Z)((e,{separatorMargin:r})=>({root:{"--bc-separator-margin":(0,s.bG)(r)}})),k=(0,c.d)((e,r)=>{let t=(0,i.w)("Breadcrumbs",g,e),{classNames:s,className:c,style:m,styles:d,unstyled:p,vars:f,children:h,separator:b,separatorMargin:y}=t,x=v(t,["classNames","className","style","styles","unstyled","vars","children","separator","separatorMargin"]),k=(0,l.y)({name:"Breadcrumbs",classes:a,props:t,className:c,style:m,classNames:s,styles:d,unstyled:p,vars:f,varsResolver:E}),w=n.Children.toArray(h).reduce((e,r,t,a)=>{var s;let c=(0,o.k)(r)?n.cloneElement(r,j(O({},k("breadcrumb",{className:null==(s=r.props)?void 0:s.className})),{key:t})):n.createElement("div",j(O({},k("breadcrumb")),{key:t}),r);return e.push(c),t!==a.length-1&&e.push(n.createElement(u.x,j(O({},k("separator")),{key:`separator-${t}`}),b)),e},[]);return n.createElement(u.x,O(O({ref:r},k("root")),x),w)});k.displayName="@mantine/core/Breadcrumbs"}},function(e){e.O(0,[4878,9341,4940,9774,2888,179],function(){return e(e.s=79539)}),_N_E=e.O()}]);