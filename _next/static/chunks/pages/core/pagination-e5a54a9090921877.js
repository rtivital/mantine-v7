(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5028],{12442:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/pagination",function(){return t(52034)}])},52034:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return z}});var o=t(85893),r=t(11151),a=t(34940),i=t(34200),c=t(67294),l=t(97470),s=Object.defineProperty,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,n,t)=>n in e?s(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))u.call(n,t)&&g(e,t,n[t]);if(p)for(var t of p(n))m.call(n,t)&&g(e,t,n[t]);return e};let h=`
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`,f={type:"configurator",component:function(e){return c.createElement(l.t,d({total:10},e))},code:h,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"withControls",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withEdges",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1}]};var x=t(25890),P=t(39815),j=t(12268),b=Object.defineProperty,E=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,w=(e,n,t)=>n in e?b(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,v=(e,n)=>{for(var t in n||(n={}))y.call(n,t)&&w(e,t,n[t]);if(E)for(var t of E(n))I.call(n,t)&&w(e,t,n[t]);return e};let R=`
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`,O={type:"styles-api",data:j.E,component:function(e){return c.createElement(l.t,v({total:10},e))},code:R,centered:!0};var C=t(74378);let A=`
import { Group, Pagination } from '@mantine/core';

function Demo() {
  return (
    <Pagination.Root total={10}>
      <Group gap={5} justify="center">
        <Pagination.First />
        <Pagination.Previous />
        <Pagination.Items />
        <Pagination.Next />
        <Pagination.Last />
      </Group>
    </Pagination.Root>
  );
}
`,k={type:"code",component:function(){return c.createElement(l.t.Root,{total:10},c.createElement(C.Z,{gap:5,justify:"center"},c.createElement(l.t.First,null),c.createElement(l.t.Previous,null),c.createElement(l.t.Items,null),c.createElement(l.t.Next,null),c.createElement(l.t.Last,null)))},code:A},L=`
import { Group, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Regular pagination */}
      <Pagination
        total={10}
        withEdges
        getItemProps={(page) => ({
          component: 'a',
          href: \`#page-\${page}\`,
        })}
        getControlProps={(control) => {
          if (control === 'first') {
            return { component: 'a', href: '#page-0' };
          }

          if (control === 'last') {
            return { component: 'a', href: '#page-10' };
          }

          if (control === 'next') {
            return { component: 'a', href: '#page-2' };
          }

          if (control === 'previous') {
            return { component: 'a', href: '#page-1' };
          }

          return {};
        }}
      />

      {/* Compound pagination */}
      <Pagination.Root
        total={10}
        getItemProps={(page) => ({
          component: 'a',
          href: \`#page-\${page}\`,
        })}
      >
        <Group gap={7} mt="xl">
          <Pagination.First component="a" href="#page-0" />
          <Pagination.Previous component="a" href="#page-1" />
          <Pagination.Items />
          <Pagination.Next component="a" href="#page-2" />
          <Pagination.Last component="a" href="#page-10" />
        </Group>
      </Pagination.Root>
    </>
  );
}

`,N={type:"code",component:function(){return c.createElement(c.Fragment,null,c.createElement(l.t,{total:10,withEdges:!0,getItemProps:e=>({component:"a",href:`#page-${e}`}),getControlProps:e=>"first"===e?{component:"a",href:"#page-0"}:"last"===e?{component:"a",href:"#page-10"}:"next"===e?{component:"a",href:"#page-2"}:"previous"===e?{component:"a",href:"#page-1"}:{}}),c.createElement(l.t.Root,{total:10,getItemProps:e=>({component:"a",href:`#page-${e}`})},c.createElement(C.Z,{gap:7,mt:"xl"},c.createElement(l.t.First,{component:"a",href:"#page-0"}),c.createElement(l.t.Previous,{component:"a",href:"#page-1"}),c.createElement(l.t.Items,null),c.createElement(l.t.Next,{component:"a",href:"#page-2"}),c.createElement(l.t.Last,{component:"a",href:"#page-10"}))))},code:L};var Z=t(4687),_=t(87393),G=t(43789),V=t(30923),F=t(39555);let T=`
import { Group, Pagination } from '@mantine/core';
import {
  IconArrowBarToRight,
  IconArrowBarToLeft,
  IconArrowLeft,
  IconArrowRight,
  IconGripHorizontal,
} from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* Regular pagination */}
      <Pagination
        total={10}
        position="center"
        withEdges
        nextIcon={IconArrowRight}
        previousIcon={IconArrowLeft}
        firstIcon={IconArrowBarToLeft}
        lastIcon={IconArrowBarToRight}
        dotsIcon={IconGripHorizontal}
      />

      {/* Compound pagination */}
      <Pagination.Root total={10}>
        <Group gap={7} mt="xl">
          <Pagination.First icon={IconArrowBarToLeft} />
          <Pagination.Previous icon={IconArrowLeft} />
          <Pagination.Items dotsIcon={IconGripHorizontal} />
          <Pagination.Next icon={IconArrowRight} />
          <Pagination.Last icon={IconArrowBarToRight} />
        </Group>
      </Pagination.Root>
    </>
  );
}
`,B={type:"code",component:function(){return c.createElement(c.Fragment,null,c.createElement(l.t,{total:10,withEdges:!0,nextIcon:Z.Z,previousIcon:_.Z,firstIcon:G.Z,lastIcon:V.Z,dotsIcon:F.Z}),c.createElement(l.t.Root,{total:10},c.createElement(C.Z,{gap:7,mt:"xl"},c.createElement(l.t.First,{icon:G.Z}),c.createElement(l.t.Previous,{icon:_.Z}),c.createElement(l.t.Items,{dotsIcon:F.Z}),c.createElement(l.t.Next,{icon:Z.Z}),c.createElement(l.t.Last,{icon:V.Z}))))},code:T},D=(0,a.A)(i.us.Pagination);function S(e){let n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,r.ah)(),e.components),{Demo:t,StylesApiSelectors:a}=n;return t||$("Demo",!0),a||$("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:f}),"\n",(0,o.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsxs)(n.p,{children:["To control component state provide ",(0,o.jsx)(n.code,{children:"value"})," and ",(0,o.jsx)(n.code,{children:"onChange"})," props:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Pagination } from '@mantine/core';\n\nfunction Demo() {\n  const [activePage, setPage] = useState(1);\n  return <Pagination value={activePage} onChange={setPage} total={10} />;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"siblings",children:"Siblings"}),"\n",(0,o.jsxs)(n.p,{children:["Control number of active item siblings with ",(0,o.jsx)(n.code,{children:"siblings"})," prop:"]}),"\n",(0,o.jsx)(t,{data:x.d}),"\n",(0,o.jsx)(n.h2,{id:"boundaries",children:"Boundaries"}),"\n",(0,o.jsxs)(n.p,{children:["Control number of items displayed after previous and before next buttons with ",(0,o.jsx)(n.code,{children:"boundaries"})," prop:"]}),"\n",(0,o.jsx)(t,{data:P._}),"\n",(0,o.jsx)(a,{component:"Pagination"}),"\n",(0,o.jsx)(t,{data:O}),"\n",(0,o.jsx)(n.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,o.jsxs)(n.p,{children:["You can use the following compound components to have full control over the ",(0,o.jsx)(n.code,{children:"Modal"})," rendering:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.Root"})," – context provider"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.Items"})," – items list"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.Next"})," – next control"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.Previous"})," – previous control"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.First"})," – first control"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pagination.Last"})," – last control"]}),"\n"]}),"\n",(0,o.jsx)(t,{data:k}),"\n",(0,o.jsx)(n.h2,{id:"controls-as-links",children:"Controls as links"}),"\n",(0,o.jsx)(t,{data:N}),"\n",(0,o.jsx)(n.h2,{id:"change-icons",children:"Change icons"}),"\n",(0,o.jsx)(t,{data:B}),"\n",(0,o.jsx)(n.h2,{id:"use-pagination-hook",children:"use-pagination hook"}),"\n",(0,o.jsxs)(n.p,{children:["If you need more flexibility ",(0,o.jsx)(n.code,{children:"@mantine/hooks"})," package exports ",(0,o.jsx)(n.a,{href:"/hooks/use-pagination/",children:"use-pagination"})," hook,\nyou can use it to create custom pagination components."]})]})}var z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(D,Object.assign({},e,{children:(0,o.jsx)(S,e)}))};function $(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[3857,2411,7437,5320,9774,2888,179],function(){return e(e.s=12442)}),_N_E=e.O()}]);