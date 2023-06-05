(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7971],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var l=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var l=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var l=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var l=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var l=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var l=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},79153:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var l=(0,n(30853).Z)("search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var l=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},46995:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/table",function(){return n(79683)}])},79683:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});var l=n(85893),a=n(11151),o=n(34940),r=n(25263),i=n(60261),s=n(67294),m=n(69713),c=n(19144),T=Object.defineProperty,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&b(e,n,t[n]);if(p)for(var n of p(t))d.call(t,n)&&b(e,n,t[n]);return e};let y=`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,E={type:"configurator",component:function(e){return s.createElement(m.i,h({},e),s.createElement(m.i.Thead,null,s.createElement(m.i.Tr,null,s.createElement(m.i.Th,null,"Position"),s.createElement(m.i.Th,null,"Name"),s.createElement(m.i.Th,null,"Symbol"),s.createElement(m.i.Th,null,"Mass"))),s.createElement(m.i.Tbody,null,c.R.map(e=>s.createElement(m.i.Tr,{key:e.name},s.createElement(m.i.Td,null,e.position),s.createElement(m.i.Td,null,e.name),s.createElement(m.i.Td,null,e.symbol),s.createElement(m.i.Td,null,e.mass)))))},code:y,controls:[{prop:"horizontalSpacing",type:"size",libraryValue:"xs",initialValue:"xs"},{prop:"verticalSpacing",type:"size",initialValue:"xs",libraryValue:"xs"}]},f=`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  const ths = (
    <Table.Tr>
      <Table.Th>Element position</Table.Th>
      <Table.Th>Element name</Table.Th>
      <Table.Th>Symbol</Table.Th>
      <Table.Th>Atomic mass</Table.Th>
    </Table.Tr>
  );

  return (
    <Table captionSide="bottom">
      <Table.Caption>Some elements from periodic table</Table.Caption>
      <Table.Thead>{ths}</Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Tfoot>{ths}</Table.Tfoot>
    </Table>
  );
}
`,v={type:"code",code:f,component:function(){let e=c.R.map(e=>s.createElement(m.i.Tr,{key:e.name},s.createElement(m.i.Td,null,e.position),s.createElement(m.i.Td,null,e.name),s.createElement(m.i.Td,null,e.symbol),s.createElement(m.i.Td,null,e.mass))),t=s.createElement(m.i.Tr,null,s.createElement(m.i.Th,null,"Element position"),s.createElement(m.i.Th,null,"Element name"),s.createElement(m.i.Th,null,"Symbol"),s.createElement(m.i.Th,null,"Atomic mass"));return s.createElement(m.i,{captionSide:"bottom"},s.createElement(m.i.Caption,null,"Some elements from periodic table"),s.createElement(m.i.Thead,null,t),s.createElement(m.i.Tbody,null,e),s.createElement(m.i.Tfoot,null,t))}};var g=Object.defineProperty,k=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,M=(e,t,n)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t)=>{for(var n in t||(t={}))j.call(t,n)&&M(e,n,t[n]);if(k)for(var n of k(t))w.call(t,n)&&M(e,n,t[n]);return e};let S=`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,C={type:"configurator",component:function(e){return s.createElement(m.i,x({},e),s.createElement(m.i.Thead,null,s.createElement(m.i.Tr,null,s.createElement(m.i.Th,null,"Element position"),s.createElement(m.i.Th,null,"Element name"),s.createElement(m.i.Th,null,"Symbol"),s.createElement(m.i.Th,null,"Atomic mass"))),s.createElement(m.i.Tbody,null,c.R.map(e=>s.createElement(m.i.Tr,{key:e.name},s.createElement(m.i.Td,null,e.position),s.createElement(m.i.Td,null,e.name),s.createElement(m.i.Td,null,e.symbol),s.createElement(m.i.Td,null,e.mass)))))},code:S,controls:[{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"highlightOnHover",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withTableBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withColumnBorders",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withRowBorders",type:"boolean",initialValue:!0,libraryValue:!0}]},O=(0,o.A)(r.us.Table);function Z(e){let t=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},(0,a.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(t.p,{children:"Table data for all examples:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"const elements = [\n  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },\n  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },\n  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },\n  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },\n  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },\n];\n"})}),"\n",(0,l.jsx)(n,{data:i.j}),"\n",(0,l.jsx)(t.h2,{id:"spacing",children:"Spacing"}),"\n",(0,l.jsxs)(t.p,{children:["To control spacing use ",(0,l.jsx)(t.code,{children:"horizontalSpacing"})," and ",(0,l.jsx)(t.code,{children:"verticalSpacing"})," props. Both props support spacing from ",(0,l.jsx)(t.code,{children:"theme.spacing"})," and any valid CSS value to set cell padding:"]}),"\n",(0,l.jsx)(n,{data:E}),"\n",(0,l.jsx)(t.h2,{id:"caption-and-tfoot",children:"Caption and tfoot"}),"\n",(0,l.jsxs)(t.p,{children:["Table support tfoot and caption elements. Set ",(0,l.jsx)(t.code,{children:"captionSide"})," prop (top or bottom) to change caption position."]}),"\n",(0,l.jsx)(n,{data:v}),"\n",(0,l.jsx)(t.h2,{id:"striped-and-rows-hover",children:"Striped and rows hover"}),"\n",(0,l.jsx)(n,{data:C})]})}var V=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(O,Object.assign({},e,{children:(0,l.jsx)(Z,e)}))}},60261:function(e,t,n){"use strict";n.d(t,{j:function(){return i}});var l=n(67294),a=n(69713),o=n(19144);let r=`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`,i={type:"code",code:r,component:function(){let e=o.R.map(e=>l.createElement(a.i.Tr,{key:e.name},l.createElement(a.i.Td,null,e.position),l.createElement(a.i.Td,null,e.name),l.createElement(a.i.Td,null,e.symbol),l.createElement(a.i.Td,null,e.mass)));return l.createElement(a.i,null,l.createElement(a.i.Thead,null,l.createElement(a.i.Tr,null,l.createElement(a.i.Th,null,"Element position"),l.createElement(a.i.Th,null,"Element name"),l.createElement(a.i.Th,null,"Symbol"),l.createElement(a.i.Th,null,"Atomic mass"))),l.createElement(a.i.Tbody,null,e))}}},19144:function(e,t,n){"use strict";n.d(t,{R:function(){return l}});let l=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}]}},function(e){e.O(0,[8969,9341,4831,9774,2888,179],function(){return e(e.s=46995)}),_N_E=e.O()}]);