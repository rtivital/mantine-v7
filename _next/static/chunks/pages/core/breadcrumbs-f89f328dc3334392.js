(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1728],{79539:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/breadcrumbs",function(){return n(61710)}])},61710:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(85893),o=n(11151),s=n(34940),i=n(25263),c=n(67294),a=n(46342),u=n(26564);let d=`
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
`,m=[{title:"Mantine",href:"https://mantine.dev"},{title:"Mantine hooks",href:"#"},{title:"use-id",href:"#"}].map((e,t)=>c.createElement(a.e,{href:e.href,key:t},e.title)),l={type:"code",code:d,component:function(){return c.createElement(c.Fragment,null,c.createElement(u.O,null,m),c.createElement(u.O,{separator:"→",mt:"xs",classNames:{separator:"mantine-rotate-rtl"}},m))}},h=(0,s.A)(i.us.Breadcrumbs);function f(e){let t=Object.assign({h2:"h2",p:"p",code:"code"},(0,o.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Breadcrumbs"})," component accepts any number of React nodes as children\nand adds a given separator (defaults to ",(0,r.jsx)(t.code,{children:"/"}),") between them:"]}),"\n",(0,r.jsx)(n,{data:l})]})}var p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(h,Object.assign({},e,{children:(0,r.jsx)(f,e)}))}}},function(e){e.O(0,[2411,7437,3523,9774,2888,179],function(){return e(e.s=79539)}),_N_E=e.O()}]);