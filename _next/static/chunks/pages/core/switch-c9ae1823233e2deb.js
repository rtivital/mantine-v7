(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2909],{73456:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/switch",function(){return r(22150)}])},22150:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return q}});var n=r(85893),o=r(11151),l=r(34940),c=r(25263),i=r(50282);let a=`
import { Switch } from '@mantine/core';


function Demo() {
  return (
    <Switch
      {{props}}
    />
  );
}
`,s={type:"configurator",component:i.r,code:a,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I agree to sell my privacy",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1}]};var h=r(67294),u=r(74378);let p=`
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
`,m={type:"code",component:function(){return h.createElement(u.Z,{justify:"center"},h.createElement(i.r,{size:"xs",onLabel:"ON",offLabel:"OFF"}),h.createElement(i.r,{size:"sm",onLabel:"ON",offLabel:"OFF"}),h.createElement(i.r,{size:"md",onLabel:"ON",offLabel:"OFF"}),h.createElement(i.r,{size:"lg",onLabel:"ON",offLabel:"OFF"}),h.createElement(i.r,{size:"xl",onLabel:"ON",offLabel:"OFF"}))},code:p};var d=r(49441),b=r(46393),f=r(61736),w=r(54764),y=(0,w.Z)("moon-stars","IconMoonStars",[["path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",key:"svg-0"}],["path",{d:"M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2",key:"svg-1"}],["path",{d:"M19 11h2m-1 -1v2",key:"svg-2"}]]);let g=`
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
`,S={type:"code",component:function(){let e=(0,d.rZ)(),t=h.createElement(f.Z,{style:{width:(0,b.h)(16),height:(0,b.h)(16)},stroke:2.5,color:e.colors.yellow[4]}),r=h.createElement(y,{style:{width:(0,b.h)(16),height:(0,b.h)(16)},stroke:2.5,color:e.colors.blue[6]});return h.createElement(i.r,{size:"md",color:"dark.4",onLabel:t,offLabel:r})},centered:!0,code:g};var v=r(16659),j=(0,w.Z)("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]);let x=`
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
`,k={type:"code",component:function(){let e=(0,d.rZ)(),[t,r]=(0,h.useState)(!1);return h.createElement(i.r,{checked:t,onChange:e=>r(e.currentTarget.checked),color:"teal",size:"md",label:"Switch with thumb icon",thumbIcon:t?h.createElement(v.Z,{style:{width:(0,b.h)(12),height:(0,b.h)(12)},color:e.colors.teal[6],stroke:3}):h.createElement(j,{style:{width:(0,b.h)(12),height:(0,b.h)(12)},color:e.colors.red[6],stroke:3})})},centered:!0,code:x};var O=Object.defineProperty,V=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,I=(e,t,r)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,F=(e,t)=>{for(var r in t||(t={}))E.call(t,r)&&I(e,r,t[r]);if(V)for(var r of V(t))L.call(t,r)&&I(e,r,t[r]);return e};let N=`
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
`,z={type:"configurator",component:function(e){return h.createElement(i.r.Group,F({defaultValue:["react"]},e),h.createElement(u.Z,{mt:"xs"},h.createElement(i.r,{value:"react",label:"React"}),h.createElement(i.r,{value:"svelte",label:"Svelte"}),h.createElement(i.r,{value:"ng",label:"Angular"}),h.createElement(i.r,{value:"vue",label:"Vue"})))},code:N,centered:!0,controls:[{prop:"label",type:"string",initialValue:"Select your favorite framework/library",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]};var G=r(64685),C=Object.defineProperty,M=Object.defineProperties,T=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,Z=(e,t,r)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,A=(e,t)=>{for(var r in t||(t={}))D.call(t,r)&&Z(e,r,t[r]);if(_)for(var r of _(t))P.call(t,r)&&Z(e,r,t[r]);return e},R=(e,t)=>M(e,T(t));let X=`
import { Switch } from '@mantine/core';

function Demo() {
  return <Switch{{props}} label="Switch component" description="Switch description" error="Switch error />;
}
`,B={type:"styles-api",data:G.T,component:function(e){return h.createElement(i.r,R(A({},e),{label:"Switch component",description:"Switch description",error:"Switch error"}))},centered:!0,code:X},H=(0,l.A)(c.us.Switch);function U(e){let t=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p"},(0,o.ah)(),e.components),{Demo:r,StylesApiSelectors:l}=t;return r||J("Demo",!0),l||J("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r,{data:s}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Switch } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return <Switch checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"inner-labels",children:"Inner Labels"}),"\n",(0,n.jsx)(r,{data:m}),"\n",(0,n.jsx)(t.h2,{id:"icon-labels",children:"Icon labels"}),"\n",(0,n.jsx)(r,{data:S}),"\n",(0,n.jsx)(t.h2,{id:"thumb-icon",children:"Thumb icon"}),"\n",(0,n.jsx)(r,{data:k}),"\n",(0,n.jsx)(t.h2,{id:"switchgroup",children:"Switch.Group"}),"\n",(0,n.jsx)(r,{data:z}),"\n",(0,n.jsx)(t.h2,{id:"controlled-switchgroup",children:"Controlled Switch.Group"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Switch } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Switch.Group value={value} onChange={setValue}>\n      <Switch value="react" label="React" />\n      <Switch value="svelte" label="Svelte" />\n    </Switch.Group>\n  );\n}\n'})}),"\n",(0,n.jsx)(l,{component:"Switch"}),"\n",(0,n.jsx)(r,{data:B}),"\n",(0,n.jsx)(t.h2,{id:"get-input-ref",children:"Get input ref"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useRef } from 'react';\nimport { Switch } from '@mantine/core';\n\nfunction Demo() {\n  const ref = useRef<HTMLInputElement>(null);\n  return <Switch ref={ref} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Switch"})," is a regular ",(0,n.jsx)(t.code,{children:'input[type="checkbox"]'}),". Set ",(0,n.jsx)(t.code,{children:"aria-label"})," if the ",(0,n.jsx)(t.code,{children:"Switch"})," is used without ",(0,n.jsx)(t.code,{children:"label"})," prop:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { Switch } from \'@mantine/core\';\n\n// -> not ok, input is not labeled\nfunction Bad() {\n  return <Switch />;\n}\n\n// -> ok, input has aria-label\nfunction Good() {\n  return <Switch aria-label="I agree to everything" />;\n}\n\n// -> ok, input has associated label\nfunction AlsoGood() {\n  return <Switch label="I agree to everything" />;\n}\n'})})]})}var q=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(H,Object.assign({},e,{children:(0,n.jsx)(U,e)}))};function J(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},16659:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(54764).Z)("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]])}},function(e){e.O(0,[5664,9341,4940,9774,2888,179],function(){return e(e.s=73456)}),_N_E=e.O()}]);