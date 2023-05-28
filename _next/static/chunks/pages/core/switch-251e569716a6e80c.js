(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2909],{73456:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/switch",function(){return n(22150)}])},22150:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var r=n(85893),o=n(11151),c=n(34940),i=n(25263),l=n(4741);let a=`
import { Switch } from '@mantine/core';


function Demo() {
  return (
    <Switch
      {{props}}
    />
  );
}
`,s={type:"configurator",component:l.r,code:a,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I agree to sell my privacy",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1}]};var h=n(67294),u=n(74378);let d=`
import { Switch, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Switch size="xs" onLabel="ON" offLabel="OFF" />
      <Switch size="sm" onLabel="ON" offLabel="OFF" />
      <Switch size="md" onLabel="ON" offLabel="OFF" />
      <Switch size="lg" onLabel="ON" offLabel="OFF" />
      <Switch size="xl" onLabel="ON" offLabel="OFF" />
    </Group>
  );
}
`,m={type:"code",component:function(){return h.createElement(u.Z,{justify:"center"},h.createElement(l.r,{size:"xs",onLabel:"ON",offLabel:"OFF"}),h.createElement(l.r,{size:"sm",onLabel:"ON",offLabel:"OFF"}),h.createElement(l.r,{size:"md",onLabel:"ON",offLabel:"OFF"}),h.createElement(l.r,{size:"lg",onLabel:"ON",offLabel:"OFF"}),h.createElement(l.r,{size:"xl",onLabel:"ON",offLabel:"OFF"}))},code:d};var p=n(49441),b=n(46393),f=n(61736),w=n(54764),g=(0,w.Z)("moon-stars","IconMoonStars",[["path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",key:"svg-0"}],["path",{d:"M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2",key:"svg-1"}],["path",{d:"M19 11h2m-1 -1v2",key:"svg-2"}]]);let S=`
import { Switch, useMantineTheme, rem } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

function Demo() {
  const theme = useMantineTheme();

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return <Switch size="md" color="dark.4" onLabel={sunIcon} offLabel={moonIcon} />;
}
`,y={type:"code",component:function(){let e=(0,p.rZ)(),t=h.createElement(f.Z,{style:{width:(0,b.h)(16),height:(0,b.h)(16)},stroke:2.5,color:e.colors.yellow[4]}),n=h.createElement(g,{style:{width:(0,b.h)(16),height:(0,b.h)(16)},stroke:2.5,color:e.colors.blue[6]});return h.createElement(l.r,{size:"md",color:"dark.4",onLabel:t,offLabel:n})},centered:!0,code:S};var x=n(16659),v=(0,w.Z)("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]);let k=`
import { useState } from 'react';
import { Switch, useMantineTheme, rem } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

function Demo() {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      color="teal"
      size="md"
      label="Switch with thumb icon"
      thumbIcon={
        checked ? (
          <IconCheck
            style={{ width: rem(12), height: rem(12) }}
            color={theme.colors.teal[6]}
            stroke={3}
          />
        ) : (
          <IconX
            style={{ width: rem(12), height: rem(12) }}
            color={theme.colors.red[6]}
            stroke={3}
          />
        )
      }
    />
  );
}
`,j={type:"code",component:function(){let e=(0,p.rZ)(),[t,n]=(0,h.useState)(!1);return h.createElement(l.r,{checked:t,onChange:e=>n(e.currentTarget.checked),color:"teal",size:"md",label:"Switch with thumb icon",thumbIcon:t?h.createElement(x.Z,{style:{width:(0,b.h)(12),height:(0,b.h)(12)},color:e.colors.teal[6],stroke:3}):h.createElement(v,{style:{width:(0,b.h)(12),height:(0,b.h)(12)},color:e.colors.red[6],stroke:3})})},centered:!0,code:k},V=`
import { Switch, Group } from '@mantine/core';

function Demo() {
  return (
    <Switch.Group
      defaultValue={['react']}
      {{props}}
    >
      <Group mt="xs">
        <Switch value="react" label="React" />
        <Switch value="svelte" label="Svelte" />
        <Switch value="ng" label="Angular" />
        <Switch value="vue" label="Vue" />
      </Group>
    </Switch.Group>
  );
}
`,E={type:"configurator",component:function(e){return h.createElement(l.r.Group,Object.assign({defaultValue:["react"]},e),h.createElement(u.Z,{mt:"xs"},h.createElement(l.r,{value:"react",label:"React"}),h.createElement(l.r,{value:"svelte",label:"Svelte"}),h.createElement(l.r,{value:"ng",label:"Angular"}),h.createElement(l.r,{value:"vue",label:"Vue"})))},code:V,centered:!0,controls:[{prop:"label",type:"string",initialValue:"Select your favorite framework/library",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]};var L=n(64685);let O=`
import { Switch } from '@mantine/core';

function Demo() {
  return <Switch{{props}} label="Switch component" description="Switch description" error="Switch error />;
}
`,I={type:"styles-api",data:L.T,component:function(e){return h.createElement(l.r,Object.assign({},e,{label:"Switch component",description:"Switch description",error:"Switch error"}))},centered:!0,code:O},F=(0,c.A)(i.us.Switch);function N(e){let t=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p"},(0,o.ah)(),e.components),{Demo:n,StylesApiSelectors:c}=t;return n||G("Demo",!0),c||G("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:s}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Switch } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return <Switch checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"inner-labels",children:"Inner Labels"}),"\n",(0,r.jsx)(n,{data:m}),"\n",(0,r.jsx)(t.h2,{id:"icon-labels",children:"Icon labels"}),"\n",(0,r.jsx)(n,{data:y}),"\n",(0,r.jsx)(t.h2,{id:"thumb-icon",children:"Thumb icon"}),"\n",(0,r.jsx)(n,{data:j}),"\n",(0,r.jsx)(t.h2,{id:"switchgroup",children:"Switch.Group"}),"\n",(0,r.jsx)(n,{data:E}),"\n",(0,r.jsx)(t.h2,{id:"controlled-switchgroup",children:"Controlled Switch.Group"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Switch } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Switch.Group value={value} onChange={setValue}>\n      <Switch value="react" label="React" />\n      <Switch value="svelte" label="Svelte" />\n    </Switch.Group>\n  );\n}\n'})}),"\n",(0,r.jsx)(c,{component:"Switch"}),"\n",(0,r.jsx)(n,{data:I}),"\n",(0,r.jsx)(t.h2,{id:"get-input-ref",children:"Get input ref"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useRef } from 'react';\nimport { Switch } from '@mantine/core';\n\nfunction Demo() {\n  const ref = useRef<HTMLInputElement>(null);\n  return <Switch ref={ref} />;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Switch"})," is a regular ",(0,r.jsx)(t.code,{children:'input[type="checkbox"]'}),". Set ",(0,r.jsx)(t.code,{children:"aria-label"})," if the ",(0,r.jsx)(t.code,{children:"Switch"})," is used without ",(0,r.jsx)(t.code,{children:"label"})," prop:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Switch } from \'@mantine/core\';\n\n// -> not ok, input is not labeled\nfunction Bad() {\n  return <Switch />;\n}\n\n// -> ok, input has aria-label\nfunction Good() {\n  return <Switch aria-label="I agree to everything" />;\n}\n\n// -> ok, input has associated label\nfunction AlsoGood() {\n  return <Switch label="I agree to everything" />;\n}\n'})})]})}var z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(F,Object.assign({},e,{children:(0,r.jsx)(N,e)}))};function G(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},16659:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]])}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=73456)}),_N_E=e.O()}]);