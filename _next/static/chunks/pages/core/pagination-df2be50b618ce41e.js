(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5028],{12442:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/pagination",function(){return n(41298)}])},41298:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var o=n(85893),r=n(11151),a=n(19905),i=n(9904),c=n(67294),l=n(47567),s=Object.defineProperty,p=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))u.call(t,n)&&d(e,n,t[n]);return e};let h=`
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`,f={type:"configurator",component:function(e){return c.createElement(l.t,m({total:10},e))},code:h,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"withControls",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withEdges",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1}]};var x=n(25890),P=n(39815),y=n(12268),j=Object.defineProperty,v=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,w=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&w(e,n,t[n]);if(v)for(var n of v(t))I.call(t,n)&&w(e,n,t[n]);return e};let k=`
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`,M={type:"styles-api",data:y.E,component:function(e){return c.createElement(l.t,E({total:10},e))},code:k,centered:!0};var R=n(74378);let A=`
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
`,O={type:"code",component:function(){return c.createElement(l.t.Root,{total:10},c.createElement(R.Z,{gap:5,justify:"center"},c.createElement(l.t.First,null),c.createElement(l.t.Previous,null),c.createElement(l.t.Items,null),c.createElement(l.t.Next,null),c.createElement(l.t.Last,null)))},code:A},C=`
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

`,L={type:"code",component:function(){return c.createElement(c.Fragment,null,c.createElement(l.t,{total:10,withEdges:!0,getItemProps:e=>({component:"a",href:`#page-${e}`}),getControlProps:e=>"first"===e?{component:"a",href:"#page-0"}:"last"===e?{component:"a",href:"#page-10"}:"next"===e?{component:"a",href:"#page-2"}:"previous"===e?{component:"a",href:"#page-1"}:{}}),c.createElement(l.t.Root,{total:10,getItemProps:e=>({component:"a",href:`#page-${e}`})},c.createElement(R.Z,{gap:7,mt:"xl"},c.createElement(l.t.First,{component:"a",href:"#page-0"}),c.createElement(l.t.Previous,{component:"a",href:"#page-1"}),c.createElement(l.t.Items,null),c.createElement(l.t.Next,{component:"a",href:"#page-2"}),c.createElement(l.t.Last,{component:"a",href:"#page-10"}))))},code:C};var Z=n(4687),G=n(87393),N=n(54764),_=(0,N.Z)("arrow-bar-to-left","IconArrowBarToLeft",[["path",{d:"M10 12l10 0",key:"svg-0"}],["path",{d:"M10 12l4 4",key:"svg-1"}],["path",{d:"M10 12l4 -4",key:"svg-2"}],["path",{d:"M4 4l0 16",key:"svg-3"}]]),V=(0,N.Z)("arrow-bar-to-right","IconArrowBarToRight",[["path",{d:"M14 12l-10 0",key:"svg-0"}],["path",{d:"M14 12l-4 4",key:"svg-1"}],["path",{d:"M14 12l-4 -4",key:"svg-2"}],["path",{d:"M20 4l0 16",key:"svg-3"}]]),T=(0,N.Z)("grip-horizontal","IconGripHorizontal",[["path",{d:"M5 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M5 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M12 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}],["path",{d:"M19 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-4"}],["path",{d:"M19 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-5"}]]);let F=`
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
`,B={type:"code",component:function(){return c.createElement(c.Fragment,null,c.createElement(l.t,{total:10,withEdges:!0,nextIcon:Z.Z,previousIcon:G.Z,firstIcon:_,lastIcon:V,dotsIcon:T}),c.createElement(l.t.Root,{total:10},c.createElement(R.Z,{gap:7,mt:"xl"},c.createElement(l.t.First,{icon:_}),c.createElement(l.t.Previous,{icon:G.Z}),c.createElement(l.t.Items,{dotsIcon:T}),c.createElement(l.t.Next,{icon:Z.Z}),c.createElement(l.t.Last,{icon:V}))))},code:F},z=(0,a.A)(i.us.Pagination);function D(e){let t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,r.ah)(),e.components),{Demo:n,StylesApiSelectors:a}=t;return n||H("Demo",!0),a||H("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n,{data:f}),"\n",(0,o.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsxs)(t.p,{children:["To control component state provide ",(0,o.jsx)(t.code,{children:"value"})," and ",(0,o.jsx)(t.code,{children:"onChange"})," props:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Pagination } from '@mantine/core';\n\nfunction Demo() {\n  const [activePage, setPage] = useState(1);\n  return <Pagination value={activePage} onChange={setPage} total={10} />;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"siblings",children:"Siblings"}),"\n",(0,o.jsxs)(t.p,{children:["Control number of active item siblings with ",(0,o.jsx)(t.code,{children:"siblings"})," prop:"]}),"\n",(0,o.jsx)(n,{data:x.d}),"\n",(0,o.jsx)(t.h2,{id:"boundaries",children:"Boundaries"}),"\n",(0,o.jsxs)(t.p,{children:["Control number of items displayed after previous and before next buttons with ",(0,o.jsx)(t.code,{children:"boundaries"})," prop:"]}),"\n",(0,o.jsx)(n,{data:P._}),"\n",(0,o.jsx)(a,{component:"Pagination"}),"\n",(0,o.jsx)(n,{data:M}),"\n",(0,o.jsx)(t.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,o.jsxs)(t.p,{children:["You can use the following compound components to have full control over the ",(0,o.jsx)(t.code,{children:"Modal"})," rendering:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Pagination.Root"})," – context provider"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Pagination.Items"})," – items list"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Pagination.Next"})," – next control"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Pagination.Previous"})," – previous control"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Pagination.First"})," – first control"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Pagination.Last"})," – last control"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:O}),"\n",(0,o.jsx)(t.h2,{id:"controls-as-links",children:"Controls as links"}),"\n",(0,o.jsx)(n,{data:L}),"\n",(0,o.jsx)(t.h2,{id:"change-icons",children:"Change icons"}),"\n",(0,o.jsx)(n,{data:B}),"\n",(0,o.jsx)(t.h2,{id:"use-pagination-hook",children:"use-pagination hook"}),"\n",(0,o.jsxs)(t.p,{children:["If you need more flexibility ",(0,o.jsx)(t.code,{children:"@mantine/hooks"})," package exports ",(0,o.jsx)(t.a,{href:"/hooks/use-pagination/",children:"use-pagination"})," hook,\nyou can use it to create custom pagination components."]})]})}var S=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(z,Object.assign({},e,{children:(0,o.jsx)(D,e)}))};function H(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87393:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},4687:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},function(e){e.O(0,[9905,493,9774,2888,179],function(){return e(e.s=12442)}),_N_E=e.O()}]);