(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{95670:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/segmented-control",function(){return t(89463)}])},89463:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var l=t(85893),a=t(11151),r=t(34940),o=t(25263),i=t(67294),c=t(69283);let d=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
`,s={type:"configurator",component:function(e){return i.createElement(c.s,Object.assign({data:["React","Angular","Vue"]},e))},code:d,controls:[{prop:"orientation",type:"segmented",initialValue:"horizontal",libraryValue:"horizontal",data:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]},{prop:"fullWidth",type:"boolean",initialValue:!1,libraryValue:!1},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]};var u=t(25943),m=t(77048);let h=`
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
`,p={type:"code",component:function(){return i.createElement(u.K,{align:"center"},i.createElement("div",null,i.createElement(m.x,{size:"sm",fw:500,mb:3},"Disabled control"),i.createElement(c.s,{disabled:!0,data:[{value:"preview",label:"Preview"},{value:"code",label:"Code"},{value:"export",label:"Export"}]})),i.createElement("div",null,i.createElement(m.x,{size:"sm",fw:500,mb:3},"Disabled option"),i.createElement(c.s,{data:[{value:"preview",label:"Preview",disabled:!0},{value:"code",label:"Code"},{value:"export",label:"Export"}]})))},code:h};var x=t(54764),g=(0,x.Z)("eye","IconEye",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",key:"svg-1"}]]),b=(0,x.Z)("code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]]),v=t(31550),y=t(56903),f=t(46393),j=t(94873);let E=`
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
`,C={type:"code",component:function(){return i.createElement(c.s,{data:[{value:"preview",label:i.createElement(y.M,null,i.createElement(g,{style:{width:(0,f.h)(16),height:(0,f.h)(16)}}),i.createElement(j.x,{ml:10},"Preview"))},{value:"code",label:i.createElement(y.M,null,i.createElement(b,{style:{width:(0,f.h)(16),height:(0,f.h)(16)}}),i.createElement(j.x,{ml:10},"Code"))},{value:"export",label:i.createElement(y.M,null,i.createElement(v.Z,{style:{width:(0,f.h)(16),height:(0,f.h)(16)}}),i.createElement(j.x,{ml:10},"Export"))}]})},centered:!0,code:E},w=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue', 'Svelte']} />;
}
`,S={type:"configurator",component:function(e){return i.createElement(c.s,Object.assign({data:["React","Angular","Vue","Svelte"]},e))},code:w,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:null}]},V=`
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
`,k={type:"code",code:V,centered:!0,component:function(){return i.createElement(i.Fragment,null,i.createElement(m.x,{size:"sm",fw:500,mt:3},"No transitions"),i.createElement(c.s,{data:["React","Angular","Vue","Svelte"],transitionDuration:0}),i.createElement(m.x,{size:"sm",fw:500,mt:"md"},"500ms linear transition"),i.createElement(c.s,{data:["React","Angular","Vue","Svelte"],transitionDuration:500,transitionTimingFunction:"linear"}))}},A=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl readOnly defaultValue="Angular" data={['React', 'Angular', 'Vue']} />;
}
`,D={type:"code",component:function(){return i.createElement(c.s,{readOnly:!0,defaultValue:"Angular",data:["React","Angular","Vue"]})},centered:!0,code:A};var O=t(2444);let R=`
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
`,I={type:"styles-api",data:O.o,component:function(e){return i.createElement(c.s,Object.assign({data:["React","Angular","Vue"]},e))},code:R,centered:!0};var T=t(30403);let z=`
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
`,P={type:"code",component:function(){let e={style:{width:(0,f.h)(20),height:(0,f.h)(20),display:"block"},stroke:1.5};return i.createElement(c.s,{data:[{value:"preview",label:i.createElement(i.Fragment,null,i.createElement(g,Object.assign({},e)),i.createElement(T.T,null,"Preview"))},{value:"code",label:i.createElement(i.Fragment,null,i.createElement(b,Object.assign({},e)),i.createElement(T.T,null,"Code"))},{value:"export",label:i.createElement(i.Fragment,null,i.createElement(v.Z,Object.assign({},e)),i.createElement(T.T,null,"Export"))}]})},centered:!0,code:z},_=(0,r.A)(o.us.SegmentedControl);function M(e){let n=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p",ol:"ol",li:"li",ul:"ul",a:"a"},(0,a.ah)(),e.components),{Demo:t,StylesApiSelectors:r}=n;return t||F("Demo",!0),r||F("StylesApiSelectors",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(t,{data:s}),"\n",(0,l.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { SegmentedControl } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('react');\n\n  return (\n    <SegmentedControl\n      value={value}\n      onChange={setValue}\n      data={[\n        { label: 'React', value: 'react' },\n        { label: 'Angular', value: 'ng' },\n        { label: 'Vue', value: 'vue' },\n        { label: 'Svelte', value: 'svelte' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"data-prop",children:"Data prop"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"SegmentedControl"})," support two different data formats:"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["An array of strings – used when ",(0,l.jsx)(n.code,{children:"value"})," and ",(0,l.jsx)(n.code,{children:"label"})," are the same"]}),"\n",(0,l.jsxs)(n.li,{children:["An array of objects – used when ",(0,l.jsx)(n.code,{children:"value"})," and ",(0,l.jsx)(n.code,{children:"label"})," are different"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"import { SegmentedControl } from '@mantine/core';\n\nfunction ArrayOfStrings() {\n  return <SegmentedControl data={['React', 'Angular', 'Svelte', 'Vue']} />;\n}\n\nfunction ArrayOfObjects() {\n  return (\n    <SegmentedControl\n      data={[\n        { value: 'React', label: 'React' },\n        { value: 'Angular', label: 'Angular' },\n        { value: 'Svelte', label: 'Svelte' },\n        { value: 'Vue', label: 'Vue' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"disabled",children:"Disabled"}),"\n",(0,l.jsxs)(n.p,{children:["To disable ",(0,l.jsx)(n.code,{children:"SegmentedControl"})," item, use array of objects ",(0,l.jsx)(n.code,{children:"data"})," format and set ",(0,l.jsx)(n.code,{children:"disabled: true"}),"\non the item that you want to disable. To disable the entire component, use ",(0,l.jsx)(n.code,{children:"disabled"})," prop."]}),"\n",(0,l.jsx)(t,{data:p}),"\n",(0,l.jsx)(n.h2,{id:"react-node-as-label",children:"React node as label"}),"\n",(0,l.jsx)(n.p,{children:"You can use any React node as label:"}),"\n",(0,l.jsx)(t,{data:C}),"\n",(0,l.jsx)(n.h2,{id:"color",children:"Color"}),"\n",(0,l.jsxs)(n.p,{children:["By default, ",(0,l.jsx)(n.code,{children:"SegmentedControl"})," uses ",(0,l.jsx)(n.code,{children:"theme.white"})," with shadow in light color scheme and ",(0,l.jsx)(n.code,{children:"var(--mantine-color-dark-6)"})," background color for indicator.\nSet ",(0,l.jsx)(n.code,{children:"color"})," prop to change indicator ",(0,l.jsx)(n.code,{children:"background-color"}),":"]}),"\n",(0,l.jsx)(t,{data:S}),"\n",(0,l.jsx)(n.h2,{id:"transitions",children:"Transitions"}),"\n",(0,l.jsx)(n.p,{children:"Change transition properties with:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"transitionDuration"})," – all transitions duration in ms, ",(0,l.jsx)(n.code,{children:"200"})," by default"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"transitionTimingFunction"})," – all transitions timing function, ",(0,l.jsx)(n.code,{children:"ease"})," by default"]}),"\n"]}),"\n",(0,l.jsx)(t,{data:k}),"\n",(0,l.jsx)(n.h2,{id:"readonly",children:"readOnly"}),"\n",(0,l.jsxs)(n.p,{children:["Set ",(0,l.jsx)(n.code,{children:"readOnly"})," prop to prevent value from being changed:"]}),"\n",(0,l.jsx)(t,{data:D}),"\n",(0,l.jsx)(r,{component:"SegmentedControl"}),"\n",(0,l.jsx)(t,{data:I}),"\n",(0,l.jsx)(n.h2,{id:"accessibility-and-usability",children:"Accessibility and usability"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"SegmentedControl"})," uses radio inputs under the hood, it is accessible by default with no extra steps required if you have text in labels.\nComponent support the same keyboard events as a regular radio group."]}),"\n",(0,l.jsxs)(n.p,{children:["In case you do not have text in labels (for example, when you want to use ",(0,l.jsx)(n.code,{children:"SegmentedControl"})," with icons only),\nuse ",(0,l.jsx)(n.a,{href:"/core/visually-hidden",children:"VisuallyHidden"})," to make component accessible:"]}),"\n",(0,l.jsx)(t,{data:P})]})}var N=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(_,Object.assign({},e,{children:(0,l.jsx)(M,e)}))};function F(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},31550:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var l=(0,t(54764).Z)("external-link","IconExternalLink",[["path",{d:"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6",key:"svg-0"}],["path",{d:"M11 13l9 -9",key:"svg-1"}],["path",{d:"M15 4h5v5",key:"svg-2"}]])},56903:function(e,n,t){"use strict";t.d(n,{M:function(){return h}});var l=t(59312),a=t(67294),r={root:"mantine-FiYZkHS"},o=t(70656),i=t(35577),c=t(89123),d=t(94873),s=t(95553);let u={},m=(0,s.Z)((e,{inline:n})=>({root:{"--center-display":n?"inline-flex":"flex"}})),h=(0,o.b)((e,n)=>{let t=(0,i.w)("Center",u,e),{classNames:o,className:s,style:h,styles:p,unstyled:x,vars:g}=t,b=(0,l._T)(t,["classNames","className","style","styles","unstyled","vars"]),v=(0,c.y)({name:"Center",props:t,classes:r,className:s,style:h,classNames:o,styles:p,unstyled:x,vars:g,varsResolver:m});return a.createElement(d.x,Object.assign({ref:n},v("root"),b))});h.displayName="@mantine/core/Center"}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=95670)}),_N_E=e.O()}]);