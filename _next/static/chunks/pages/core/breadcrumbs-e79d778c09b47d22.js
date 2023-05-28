(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1728],{79539:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/breadcrumbs",function(){return r(61710)}])},61710:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(85893),a=r(11151),s=r(34940),c=r(25263),o=r(67294),i=r(46342),m=r(26564);let l=`
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
      <Breadcrumbs separator="→" mt="xs">{items}</Breadcrumbs>
    </>
  );
}
`,u=[{title:"Mantine",href:"https://mantine.dev"},{title:"Mantine hooks",href:"#"},{title:"use-id",href:"#"}].map((e,t)=>o.createElement(i.e,{href:e.href,key:t},e.title)),d={type:"code",code:l,component:function(){return o.createElement(o.Fragment,null,o.createElement(m.O,null,u),o.createElement(m.O,{separator:"→",mt:"xs",classNames:{separator:"mantine-rotate-rtl"}},u))}},h=(0,s.A)(c.us.Breadcrumbs);function p(e){let t=Object.assign({h2:"h2",p:"p",code:"code"},(0,a.ah)(),e.components),{Demo:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Breadcrumbs"})," component accepts any number of React nodes as children\nand adds a given separator (defaults to ",(0,n.jsx)(t.code,{children:"/"}),") between them:"]}),"\n",(0,n.jsx)(r,{data:d})]})}var f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(h,Object.assign({},e,{children:(0,n.jsx)(p,e)}))}},26564:function(e,t,r){"use strict";r.d(t,{O:function(){return f}});var n=r(59312),a=r(67294),s={root:"mantine-DpaSRWv",breadcrumb:"mantine-Xf5Xl8f",separator:"mantine-ixC9ZM7"},c=r(72521),o=r(75144),i=r(35577),m=r(89123),l=r(94873),u=r(95553),d=r(71350);let h={separator:"/",separatorMargin:"xs"},p=(0,u.Z)((e,{separatorMargin:t})=>({root:{"--bc-separator-margin":(0,d.bG)(t)}})),f=(0,o.d)((e,t)=>{let r=(0,i.w)("Breadcrumbs",h,e),{classNames:o,className:u,style:d,styles:f,unstyled:b,vars:g,children:x,separator:j,separatorMargin:y}=r,E=(0,n._T)(r,["classNames","className","style","styles","unstyled","vars","children","separator","separatorMargin"]),k=(0,m.y)({name:"Breadcrumbs",classes:s,props:r,className:u,style:d,classNames:o,styles:f,unstyled:b,vars:g,varsResolver:p}),v=a.Children.toArray(x).reduce((e,t,r,n)=>{var s;let o=(0,c.k)(t)?a.cloneElement(t,Object.assign(Object.assign({},k("breadcrumb",{className:null===(s=t.props)||void 0===s?void 0:s.className})),{key:r})):a.createElement("div",Object.assign({},k("breadcrumb"),{key:r}),t);return e.push(o),r!==n.length-1&&e.push(a.createElement(l.x,Object.assign({},k("separator"),{key:`separator-${r}`}),j)),e},[]);return a.createElement(l.x,Object.assign({ref:t},k("root"),E),v)});f.displayName="@mantine/core/Breadcrumbs"}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=79539)}),_N_E=e.O()}]);