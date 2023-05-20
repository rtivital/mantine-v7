(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{95670:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/segmented-control",function(){return t(89463)}])},89463:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ec}});var r=t(85893),l=t(11151),a=t(34940),o=t(25263),i=t(67294),c=t(69283),d=Object.defineProperty,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,h=(e,n)=>{for(var t in n||(n={}))u.call(n,t)&&p(e,t,n[t]);if(s)for(var t of s(n))m.call(n,t)&&p(e,t,n[t]);return e};let b=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
`,y={type:"configurator",component:function(e){return i.createElement(c.s,h({data:["React","Angular","Vue"]},e))},code:b,controls:[{prop:"orientation",type:"segmented",initialValue:"horizontal",libraryValue:"horizontal",data:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]},{prop:"fullWidth",type:"boolean",initialValue:!1,libraryValue:!1},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]};var f=t(25943),g=t(77048);let x=`
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
`,v={type:"code",component:function(){return i.createElement(f.K,{align:"center"},i.createElement("div",null,i.createElement(g.x,{size:"sm",fw:500,mb:3},"Disabled control"),i.createElement(c.s,{disabled:!0,data:[{value:"preview",label:"Preview"},{value:"code",label:"Code"},{value:"export",label:"Export"}]})),i.createElement("div",null,i.createElement(g.x,{size:"sm",fw:500,mb:3},"Disabled option"),i.createElement(c.s,{data:[{value:"preview",label:"Preview",disabled:!0},{value:"code",label:"Code"},{value:"export",label:"Export"}]})))},code:x};var j=t(54764),E=(0,j.Z)("eye","IconEye",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",key:"svg-1"}]]),w=(0,j.Z)("code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]]),C=t(31550),S=t(56903),O=t(46393),V=t(94873);let k=`
import { Center, SegmentedControl, Box, rem } from '@mantine/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <Center>
              <IconEye style={{ width: rem(16), height: rem(16) }} />
              <Box ml={10}>Preview</Box>
            </Center>
          ),
        },
        {
          value: 'code',
          label: (
            <Center>
              <IconCode style={{ width: rem(16), height: rem(16) }} />
              <Box ml={10}>Code</Box>
            </Center>
          ),
        },
        {
          value: 'export',
          label: (
            <Center>
              <IconExternalLink style={{ width: rem(16), height: rem(16) }} />
              <Box ml={10}>Export</Box>
            </Center>
          ),
        },
      ]}
    />
  );
}
`,P={type:"code",component:function(){return i.createElement(c.s,{data:[{value:"preview",label:i.createElement(S.M,null,i.createElement(E,{style:{width:(0,O.h)(16),height:(0,O.h)(16)}}),i.createElement(V.x,{ml:10},"Preview"))},{value:"code",label:i.createElement(S.M,null,i.createElement(w,{style:{width:(0,O.h)(16),height:(0,O.h)(16)}}),i.createElement(V.x,{ml:10},"Code"))},{value:"export",label:i.createElement(S.M,null,i.createElement(C.Z,{style:{width:(0,O.h)(16),height:(0,O.h)(16)}}),i.createElement(V.x,{ml:10},"Export"))}]})},centered:!0,code:k};var A=Object.defineProperty,D=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,T=(e,n,t)=>n in e?A(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,z=(e,n)=>{for(var t in n||(n={}))I.call(n,t)&&T(e,t,n[t]);if(D)for(var t of D(n))R.call(n,t)&&T(e,t,n[t]);return e};let M=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue', 'Svelte']} />;
}
`,N={type:"configurator",component:function(e){return i.createElement(c.s,z({data:["React","Angular","Vue","Svelte"]},e))},code:M,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:null}]},_=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm" fw={500} mt={3}>
        No transitions
      </Text>
      <SegmentedControl data={['React', 'Angular', 'Vue', 'Svelte']} transitionDuration={0} />

      <Text size="sm" fw={500} mt="md">
        500ms linear transition
      </Text>
      <SegmentedControl
        data={['React', 'Angular', 'Vue', 'Svelte']}
        transitionDuration={500}
        transitionTimingFunction="linear"
      />
    </>
  );
}
`,F={type:"code",code:_,centered:!0,component:function(){return i.createElement(i.Fragment,null,i.createElement(g.x,{size:"sm",fw:500,mt:3},"No transitions"),i.createElement(c.s,{data:["React","Angular","Vue","Svelte"],transitionDuration:0}),i.createElement(g.x,{size:"sm",fw:500,mt:"md"},"500ms linear transition"),i.createElement(c.s,{data:["React","Angular","Vue","Svelte"],transitionDuration:500,transitionTimingFunction:"linear"}))}},H=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl readOnly defaultValue="Angular" data={['React', 'Angular', 'Vue']} />;
}
`,B={type:"code",component:function(){return i.createElement(c.s,{readOnly:!0,defaultValue:"Angular",data:["React","Angular","Vue"]})},centered:!0,code:H};var Z=t(2444),L=Object.defineProperty,X=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,K=(e,n,t)=>n in e?L(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,U=(e,n)=>{for(var t in n||(n={}))Y.call(n,t)&&K(e,t,n[t]);if(X)for(var t of X(n))q.call(n,t)&&K(e,t,n[t]);return e};let W=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
`,G={type:"styles-api",data:Z.o,component:function(e){return i.createElement(c.s,U({data:["React","Angular","Vue"]},e))},code:W,centered:!0};var J=t(30403),Q=Object.defineProperty,$=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,en=Object.prototype.propertyIsEnumerable,et=(e,n,t)=>n in e?Q(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,er=(e,n)=>{for(var t in n||(n={}))ee.call(n,t)&&et(e,t,n[t]);if($)for(var t of $(n))en.call(n,t)&&et(e,t,n[t]);return e};let el=`
import { SegmentedControl, VisuallyHidden, rem } from '@mantine/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

function Demo() {
  const iconProps = {
    style: { width: rem(20), height: rem(20), display: 'block' },
    stroke: 1.5,
  };

  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <>
              <IconEye {...iconProps} />
              <VisuallyHidden>Preview</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'code',
          label: (
            <>
              <IconCode {...iconProps} />
              <VisuallyHidden>Code</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'export',
          label: (
            <>
              <IconExternalLink {...iconProps} />
              <VisuallyHidden>Export</VisuallyHidden>
            </>
          ),
        },
      ]}
    />
  );
}
`,ea={type:"code",component:function(){let e={style:{width:(0,O.h)(20),height:(0,O.h)(20),display:"block"},stroke:1.5};return i.createElement(c.s,{data:[{value:"preview",label:i.createElement(i.Fragment,null,i.createElement(E,er({},e)),i.createElement(J.T,null,"Preview"))},{value:"code",label:i.createElement(i.Fragment,null,i.createElement(w,er({},e)),i.createElement(J.T,null,"Code"))},{value:"export",label:i.createElement(i.Fragment,null,i.createElement(C.Z,er({},e)),i.createElement(J.T,null,"Export"))}]})},centered:!0,code:el},eo=(0,a.A)(o.us.SegmentedControl);function ei(e){let n=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p",ol:"ol",li:"li",ul:"ul",a:"a"},(0,l.ah)(),e.components),{Demo:t,StylesApiSelectors:a}=n;return t||ed("Demo",!0),a||ed("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:y}),"\n",(0,r.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { SegmentedControl } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('react');\n\n  return (\n    <SegmentedControl\n      value={value}\n      onChange={setValue}\n      data={[\n        { label: 'React', value: 'react' },\n        { label: 'Angular', value: 'ng' },\n        { label: 'Vue', value: 'vue' },\n        { label: 'Svelte', value: 'svelte' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"data-prop",children:"Data prop"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"SegmentedControl"})," support two different data formats:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["An array of strings – used when ",(0,r.jsx)(n.code,{children:"value"})," and ",(0,r.jsx)(n.code,{children:"label"})," are the same"]}),"\n",(0,r.jsxs)(n.li,{children:["An array of objects – used when ",(0,r.jsx)(n.code,{children:"value"})," and ",(0,r.jsx)(n.code,{children:"label"})," are different"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { SegmentedControl } from '@mantine/core';\n\nfunction ArrayOfStrings() {\n  return <SegmentedControl data={['React', 'Angular', 'Svelte', 'Vue']} />;\n}\n\nfunction ArrayOfObjects() {\n  return (\n    <SegmentedControl\n      data={[\n        { value: 'React', label: 'React' },\n        { value: 'Angular', label: 'Angular' },\n        { value: 'Svelte', label: 'Svelte' },\n        { value: 'Vue', label: 'Vue' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"disabled",children:"Disabled"}),"\n",(0,r.jsxs)(n.p,{children:["To disable ",(0,r.jsx)(n.code,{children:"SegmentedControl"})," item, use array of objects ",(0,r.jsx)(n.code,{children:"data"})," format and set ",(0,r.jsx)(n.code,{children:"disabled: true"}),"\non the item that you want to disable. To disable the entire component, use ",(0,r.jsx)(n.code,{children:"disabled"})," prop."]}),"\n",(0,r.jsx)(t,{data:v}),"\n",(0,r.jsx)(n.h2,{id:"react-node-as-label",children:"React node as label"}),"\n",(0,r.jsx)(n.p,{children:"You can use any React node as label:"}),"\n",(0,r.jsx)(t,{data:P}),"\n",(0,r.jsx)(n.h2,{id:"color",children:"Color"}),"\n",(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.code,{children:"SegmentedControl"})," uses ",(0,r.jsx)(n.code,{children:"theme.white"})," with shadow in light color scheme and ",(0,r.jsx)(n.code,{children:"var(--mantine-color-dark-6)"})," background color for indicator.\nSet ",(0,r.jsx)(n.code,{children:"color"})," prop to change indicator ",(0,r.jsx)(n.code,{children:"background-color"}),":"]}),"\n",(0,r.jsx)(t,{data:N}),"\n",(0,r.jsx)(n.h2,{id:"transitions",children:"Transitions"}),"\n",(0,r.jsx)(n.p,{children:"Change transition properties with:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transitionDuration"})," – all transitions duration in ms, ",(0,r.jsx)(n.code,{children:"200"})," by default"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transitionTimingFunction"})," – all transitions timing function, ",(0,r.jsx)(n.code,{children:"ease"})," by default"]}),"\n"]}),"\n",(0,r.jsx)(t,{data:F}),"\n",(0,r.jsx)(n.h2,{id:"readonly",children:"readOnly"}),"\n",(0,r.jsxs)(n.p,{children:["Set ",(0,r.jsx)(n.code,{children:"readOnly"})," prop to prevent value from being changed:"]}),"\n",(0,r.jsx)(t,{data:B}),"\n",(0,r.jsx)(a,{component:"SegmentedControl"}),"\n",(0,r.jsx)(t,{data:G}),"\n",(0,r.jsx)(n.h2,{id:"accessibility-and-usability",children:"Accessibility and usability"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"SegmentedControl"})," uses radio inputs under the hood, it is accessible by default with no extra steps required if you have text in labels.\nComponent support the same keyboard events as a regular radio group."]}),"\n",(0,r.jsxs)(n.p,{children:["In case you do not have text in labels (for example, when you want to use ",(0,r.jsx)(n.code,{children:"SegmentedControl"})," with icons only),\nuse ",(0,r.jsx)(n.a,{href:"/core/visually-hidden",children:"VisuallyHidden"})," to make component accessible:"]}),"\n",(0,r.jsx)(t,{data:ea})]})}var ec=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(eo,Object.assign({},e,{children:(0,r.jsx)(ei,e)}))};function ed(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},31550:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(54764).Z)("external-link","IconExternalLink",[["path",{d:"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6",key:"svg-0"}],["path",{d:"M11 13l9 -9",key:"svg-1"}],["path",{d:"M15 4h5v5",key:"svg-2"}]])},56903:function(e,n,t){"use strict";t.d(n,{M:function(){return x}});var r=t(67294),l={root:"mantine-FiYZkHS"},a=t(70656),o=t(35577),i=t(89123),c=t(94873),d=t(95553),s=Object.defineProperty,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,n,t)=>n in e?s(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,b=(e,n)=>{for(var t in n||(n={}))m.call(n,t)&&h(e,t,n[t]);if(u)for(var t of u(n))p.call(n,t)&&h(e,t,n[t]);return e},y=(e,n)=>{var t={};for(var r in e)m.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&u)for(var r of u(e))0>n.indexOf(r)&&p.call(e,r)&&(t[r]=e[r]);return t};let f={},g=(0,d.Z)((e,{inline:n})=>({root:{"--center-display":n?"inline-flex":"flex"}})),x=(0,a.b)((e,n)=>{let t=(0,o.w)("Center",f,e),{classNames:a,className:d,style:s,styles:u,unstyled:m,vars:p}=t,h=y(t,["classNames","className","style","styles","unstyled","vars"]),x=(0,i.y)({name:"Center",props:t,classes:l,className:d,style:s,classNames:a,styles:u,unstyled:m,vars:p,varsResolver:g});return r.createElement(c.x,b(b({ref:n},x("root")),h))});x.displayName="@mantine/core/Center"}},function(e){e.O(0,[5664,9341,4940,9774,2888,179],function(){return e(e.s=95670)}),_N_E=e.O()}]);