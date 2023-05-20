(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5454],{21918:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/highlight",function(){return i(54366)}])},54366:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return _}});var n=i(85893),h=i(11151),r=i(34940),o=i(25263),l=i(67294),a=i(58051),g=Object.defineProperty,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(t,e,i)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,u=(t,e)=>{for(var i in e||(e={}))s.call(e,i)&&p(t,i,e[i]);if(c)for(var i of c(e))d.call(e,i)&&p(t,i,e[i]);return t};let m=`
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight{{props}}>
      {{children}}
    </Highlight>
  );
}
`,f={type:"configurator",component:function(t){return l.createElement(a.y,u({maw:400,mx:"auto"},t))},code:m,centered:!0,maxWidth:"100%",controls:[{prop:"highlightColor",type:"color",initialValue:"yellow",libraryValue:"yellow"},{prop:"highlight",type:"string",initialValue:"this",libraryValue:null},{prop:"children",type:"string",initialValue:"Highlight This, definitely THIS and also this!",libraryValue:null}]},y=`
import { Highlight } from '@mantine/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
`,b={type:"code",code:y,component:function(){return l.createElement(a.y,{highlight:["this","that"]},"Highlight this and also that")}},x=`
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      ta="center"
      highlight={['highlighted', 'default']}
      highlightStyles={{
        backgroundImage:
          'linear-gradient(45deg, var(--mantine-color-cyan-5), var(--mantine-color-indigo-5))',
        fontWeight: 700,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      You can change styles of highlighted part if you do not like default styles
    </Highlight>
  );
}
`,j={type:"code",code:x,component:function(){return l.createElement(a.y,{ta:"center",highlight:["highlighted","default"],highlightStyles:{backgroundImage:"linear-gradient(45deg, var(--mantine-color-cyan-5), var(--mantine-color-indigo-5))",fontWeight:700,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}},"You can change styles of highlighted part if you do not like default styles")}},w=`
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://mantine.dev"
      target="_blank"
      highlight="mantine"
      fw={500}
      c="var(--mantine-color-anchor)"
    >
      Mantine website
    </Highlight>
  );
}

`,H={type:"code",code:w,centered:!0,component:function(){return l.createElement(a.y,{component:"a",href:"https://mantine.dev",target:"_blank",highlight:"mantine",fw:500,c:"var(--mantine-color-anchor)"},"Mantine website")}},k=(0,r.A)(o.us.Highlight);function v(t){let e=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,h.ah)(),t.components),{Demo:i}=e;return i||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(e.p,{children:"Use Highlight component to highlight a substring in a given string with a mark tag."}),"\n",(0,n.jsxs)(e.p,{children:["Pass the main string as children to Highlight component and string part that should be highlighted to ",(0,n.jsx)(e.code,{children:"highlight"})," prop.\nIf the main string does not include ",(0,n.jsx)(e.code,{children:"highlight"})," part, it will be ignored.\n",(0,n.jsx)(e.code,{children:"Highlight"})," ignores trailing whitespace and highlights all matched characters sequences."]}),"\n",(0,n.jsx)(i,{data:f}),"\n",(0,n.jsx)(e.h2,{id:"highlight-multiple-substrings",children:"Highlight multiple substrings"}),"\n",(0,n.jsx)(e.p,{children:"To highlight multiple substrings, provide an array of values:"}),"\n",(0,n.jsx)(i,{data:b}),"\n",(0,n.jsx)(e.h2,{id:"change-highlight-styles",children:"Change highlight styles"}),"\n",(0,n.jsxs)(e.p,{children:["Default ",(0,n.jsx)(e.a,{href:"/core/mark/",children:"Mark"})," styles can be overwritten with ",(0,n.jsx)(e.code,{children:"highlightStyles"})," prop, it accepts either a function with a subscription to theme\nor an object with styles:"]}),"\n",(0,n.jsx)(i,{data:j}),"\n",(0,n.jsx)(e.h2,{id:"text-props",children:"Text props"}),"\n",(0,n.jsxs)(e.p,{children:["Highlight is based on ",(0,n.jsx)(e.a,{href:"/core/text/",children:"Text"})," component, all its props are available:"]}),"\n",(0,n.jsx)(i,{data:H})]})}var _=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(k,Object.assign({},t,{children:(0,n.jsx)(v,t)}))}}},function(t){t.O(0,[5664,9341,4940,9774,2888,179],function(){return t(t.s=21918)}),_N_E=t.O()}]);