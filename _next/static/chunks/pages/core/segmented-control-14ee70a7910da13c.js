(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{95670:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/segmented-control",function(){return t(13748)}])},13748:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return G}});var r=t(85893),l=t(11151),a=t(34940),o=t(25263),i=t(67294),s=t(69283),c=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,n,t)=>n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,b=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&g(e,t,n[t]);if(m)for(var t of m(n))h.call(n,t)&&g(e,t,n[t]);return e},v=(e,n)=>d(e,u(n));let x=[{label:"React",value:"react"},{label:"Angular",value:"ng"},{label:"Vue",value:"vue"},{label:"Svelte",value:"svelte"}];function f(e){let[n,t]=(0,i.useState)("react");return i.createElement(s.s,v(b({},e),{data:x,value:n,onChange:t}))}let y=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <SegmentedControl
      data={[
        { label: 'React', value: 'react' },
        { label: 'Angular', value: 'ng' },
        { label: 'Vue', value: 'vue' },
        { label: 'Svelte', value: 'svelte' },
      ]}
    />
  );
}
`,j={type:"code",code:y,centered:!0,component:function(){return i.createElement(f,null)}};var E=t(25943),C=t(77048);let w=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Disabled control */}
      <SegmentedControl disabled={true} />

      {/* Disabled option */}
      <SegmentedControl
        data={[
          { value: 'preview', label: 'Preview', disabled: true },
          { value: 'code', label: 'Code' },
          { value: 'export', label: 'Export' },
        ]}
      />
    </>
  );
}
`,S={type:"code",component:function(){return i.createElement(E.K,{align:"center"},i.createElement("div",null,i.createElement(C.x,{size:"sm",fw:500,mb:3},"Disabled control"),i.createElement(s.s,{disabled:!0,data:[{value:"preview",label:"Preview"},{value:"code",label:"Code"},{value:"export",label:"Export"}]})),i.createElement("div",null,i.createElement(C.x,{size:"sm",fw:500,mb:3},"Disabled option"),i.createElement(s.s,{data:[{value:"preview",label:"Preview",disabled:!0},{value:"code",label:"Code"},{value:"export",label:"Export"}]})))},code:w};var k=t(54764),O=(0,k.Z)("eye","IconEye",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",key:"svg-1"}]]),D=(0,k.Z)("code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]]),z=(0,k.Z)("external-link","IconExternalLink",[["path",{d:"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6",key:"svg-0"}],["path",{d:"M11 13l9 -9",key:"svg-1"}],["path",{d:"M15 4h5v5",key:"svg-2"}]]),P=t(56903),V=t(94873);let A=`
import { Center, SegmentedControl, Box } from '@mantine/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <Center>
              <IconEye style={{ width: '1rem', height: '1rem' }} />
              <Box ml={10}>Preview</Box>
            </Center>
          ),
        },
        {
          value: 'code',
          label: (
            <Center>
              <IconCode style={{ width: '1rem', height: '1rem' }} />
              <Box ml={10}>Code</Box>
            </Center>
          ),
        },
        {
          value: 'export',
          label: (
            <Center>
              <IconExternalLink style={{ width: '1rem', height: '1rem' }} />
              <Box ml={10}>Export</Box>
            </Center>
          ),
        },
      ]}
    />
  );
}
`,N={type:"code",component:function(){return i.createElement(s.s,{data:[{value:"preview",label:i.createElement(P.M,null,i.createElement(O,{style:{width:"1rem",height:"1rem"}}),i.createElement(V.x,{ml:10},"Preview"))},{value:"code",label:i.createElement(P.M,null,i.createElement(D,{style:{width:"1rem",height:"1rem"}}),i.createElement(V.x,{ml:10},"Code"))},{value:"export",label:i.createElement(P.M,null,i.createElement(z,{style:{width:"1rem",height:"1rem"}}),i.createElement(V.x,{ml:10},"Export"))}]})},centered:!0,code:A};var R=Object.defineProperty,I=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,F=(e,n,t)=>n in e?R(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,B=(e,n)=>{for(var t in n||(n={}))M.call(n,t)&&F(e,t,n[t]);if(I)for(var t of I(n))_.call(n,t)&&F(e,t,n[t]);return e};let T=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} />;
}
`,Z={type:"configurator",component:function(e){return i.createElement(i.Fragment,null,i.createElement(f,B({},e)))},code:T,controls:[{prop:"fullWidth",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"orientation",type:"segmented",initialValue:"horizontal",libraryValue:"horizontal",data:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]}]},q={type:"code",component:function(){let e=["xs","sm","md","lg","xl"].map((e,n)=>i.createElement(V.x,{mt:0===n?void 0:15,key:e},i.createElement(s.s,{size:e,data:["React","Angular","Vue"]})));return i.createElement(i.Fragment,null,e)}},L={type:"code",component:function(){let e=["xs","sm","md","lg","xl"].map((e,n)=>i.createElement(V.x,{mt:0===n?void 0:"md",key:e},i.createElement(f,{size:"lg",radius:e})));return i.createElement(i.Fragment,null,e)}},W=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} />;
}
`,X={type:"configurator",component:f,code:W,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:null}]},Y=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* No transitions */}
      <SegmentedControl transitionDuration={0} />

      {/* 500ms linear transition */}
      <SegmentedControl
        transitionDuration={500}
        transitionTimingFunction="linear"
      />
    </>
  );
}

`,H={type:"code",code:Y,component:function(){return i.createElement(i.Fragment,null,i.createElement("div",null,i.createElement(C.x,{size:"sm",fw:500,mt:3},"No transitions"),i.createElement(f,{transitionDuration:0})),i.createElement("div",null,i.createElement(C.x,{size:"sm",fw:500,mt:"md"},"500ms linear transition"),i.createElement(f,{transitionDuration:500,transitionTimingFunction:"linear"})))}},K=(0,a.A)(o.us.SegmentedControl);function U(e){let n=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p",ol:"ol",li:"li",ul:"ul",strong:"strong"},(0,l.ah)(),e.components),{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:j}),"\n",(0,r.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { SegmentedControl } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('react');\n  return (\n    <SegmentedControl\n      value={value}\n      onChange={setValue}\n      data={[\n        { label: 'React', value: 'react' },\n        { label: 'Angular', value: 'ng' },\n        { label: 'Vue', value: 'vue' },\n        { label: 'Svelte', value: 'svelte' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"data-prop",children:"Data prop"}),"\n",(0,r.jsx)(n.p,{children:"SegmentedControl support two different data formats:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["An array of strings – use when you do not need to customize item component or display ",(0,r.jsx)(n.code,{children:"label"})," different than ",(0,r.jsx)(n.code,{children:"value"})]}),"\n",(0,r.jsxs)(n.li,{children:["An array of objects with required ",(0,r.jsx)(n.code,{children:"value"})," and ",(0,r.jsx)(n.code,{children:"label"})," properties and any other additional properties"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"// Data as an array of strings, will be mapped to\n// [\n//  { value: 'React', label: 'React' },\n//  { value: 'Angular', label: 'Angular' },\n//  { value: 'Svelte', label: 'Svelte' },\n//  { value: 'Vue', label: 'Vue' },\n// ]\n<SegmentedControl data={['React', 'Angular', 'Svelte', 'Vue']} />\n\n// Data as an array of objects:\n<SegmentedControl data={[\n  { value: 'React', label: 'React' },\n  { value: 'Angular', label: 'Angular' },\n  { value: 'Svelte', label: 'Svelte' },\n  { value: 'Vue', label: 'Vue' },\n]} />\n"})}),"\n",(0,r.jsx)(n.h2,{id:"disabled",children:"Disabled"}),"\n",(0,r.jsx)(t,{data:S}),"\n",(0,r.jsx)(n.h2,{id:"react-node-as-label",children:"React node as label"}),"\n",(0,r.jsx)(t,{data:N}),"\n",(0,r.jsx)(n.h2,{id:"full-width-and-orientation",children:"Full width and orientation"}),"\n",(0,r.jsxs)(n.p,{children:["By default, SegmentedControl will take only the amount of space that is required to render elements.\nSet ",(0,r.jsx)(n.code,{children:"fullWidth"})," prop to make it block and take 100% width of its container."]}),"\n",(0,r.jsx)(t,{data:Z}),"\n",(0,r.jsx)(n.h2,{id:"sizes",children:"Sizes"}),"\n",(0,r.jsx)(n.p,{children:"Component supports 5 sizes: xs, sm, md, lg, xl.\nSize controls font-size and padding properties."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'<SegmentedControl size="sm" />\n'})}),"\n",(0,r.jsx)(n.p,{children:"SegmentedControl sizes from xs to xl:"}),"\n",(0,r.jsx)(t,{data:q}),"\n",(0,r.jsx)(n.h2,{id:"radius",children:"Radius"}),"\n",(0,r.jsxs)(n.p,{children:["xs, sm, md, lg, xl radius values are defined in ",(0,r.jsx)(n.code,{children:"theme.radius"}),". Alternatively, you can use any CSS value to set border-radius:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"<SegmentedControl radius=\"lg\" /> // -> theme predefined large radius\n<SegmentedControl radius={16} /> // -> { borderRadius: '1rem' }\n<SegmentedControl radius={0} /> // -> { borderRadius: 0 }\n"})}),"\n",(0,r.jsx)(n.p,{children:"Default theme radius values from xs to xl with lg size:"}),"\n",(0,r.jsx)(t,{data:L}),"\n",(0,r.jsx)(n.h2,{id:"color",children:"Color"}),"\n",(0,r.jsxs)(n.p,{children:["By default, segmented control uses ",(0,r.jsx)(n.code,{children:"theme.white"})," with shadow in light color scheme and ",(0,r.jsx)(n.code,{children:"theme.colors.dark[6]"})," background color for active element.\nYou can choose any color defined in ",(0,r.jsx)(n.code,{children:"theme.colors"})," in case you need colored variant:"]}),"\n",(0,r.jsx)(t,{data:X}),"\n",(0,r.jsx)(n.h2,{id:"transitions",children:"Transitions"}),"\n",(0,r.jsx)(n.p,{children:"Change transition properties with:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"transitionDuration"})," – all transitions duration in ms (ignored if user prefers to reduce motion)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"transitionTimingFunction"})," – defaults to ",(0,r.jsx)(n.code,{children:"theme.transitionTimingFunction"})]}),"\n"]}),"\n",(0,r.jsx)(t,{data:H}),"\n",(0,r.jsx)(n.h2,{id:"accessibility-and-usability",children:"Accessibility and usability"}),"\n",(0,r.jsx)(n.p,{children:"SegmentedControl uses radio inputs under the hood, it is accessible by default with no extra steps required.\nComponent support the same keyboard events as a regular radio group."})]})}var G=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(K,Object.assign({},e,{children:(0,r.jsx)(U,e)}))}},56903:function(e,n,t){"use strict";t.d(n,{M:function(){return f}});var r=t(67294),l={root:"mantine-FiYZkHS"},a=t(70656),o=t(35577),i=t(89123),s=t(94873),c=t(95553),d=Object.defineProperty,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,n,t)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,g=(e,n)=>{for(var t in n||(n={}))m.call(n,t)&&h(e,t,n[t]);if(u)for(var t of u(n))p.call(n,t)&&h(e,t,n[t]);return e},b=(e,n)=>{var t={};for(var r in e)m.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&u)for(var r of u(e))0>n.indexOf(r)&&p.call(e,r)&&(t[r]=e[r]);return t};let v={},x=(0,c.Z)((e,{inline:n})=>({root:{"--center-display":n?"inline-flex":"flex"}})),f=(0,a.b)((e,n)=>{let t=(0,o.w)("Center",v,e),{classNames:a,className:c,style:d,styles:u,unstyled:m,vars:p}=t,h=b(t,["classNames","className","style","styles","unstyled","vars"]),f=(0,i.y)({name:"Center",props:t,classes:l,className:c,style:d,classNames:a,styles:u,unstyled:m,vars:p,varsResolver:x});return r.createElement(s.x,g(g({ref:n},f("root")),h))});f.displayName="@mantine/core/Center"}},function(e){e.O(0,[4878,9341,4940,9774,2888,179],function(){return e(e.s=95670)}),_N_E=e.O()}]);