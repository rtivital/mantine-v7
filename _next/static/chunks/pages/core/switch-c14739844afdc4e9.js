(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2909],{73456:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/switch",function(){return r(31343)}])},31343:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return U}});var n=r(85893),o=r(11151),l=r(34940),i=r(25263),c=r(4741);let a=`
import { Switch } from '@mantine/core';


function Demo() {
  return (
    <Switch
      {{props}}
    />
  );
}
`,s={type:"configurator",component:c.r,code:a,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I agree to sell my privacy",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1}]};var u=r(67294),h=r(74378);let p=`
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
`,m={type:"code",component:function(){return u.createElement(h.Z,{justify:"center"},u.createElement(c.r,{size:"xs",onLabel:"ON",offLabel:"OFF"}),u.createElement(c.r,{size:"sm",onLabel:"ON",offLabel:"OFF"}),u.createElement(c.r,{size:"md",onLabel:"ON",offLabel:"OFF"}),u.createElement(c.r,{size:"lg",onLabel:"ON",offLabel:"OFF"}),u.createElement(c.r,{size:"xl",onLabel:"ON",offLabel:"OFF"}))},code:p};var d=r(49441),b=r(46393),f=r(61736),w=r(60617);let y=`
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
`,S={type:"code",component:function(){let e=(0,d.rZ)(),t=u.createElement(f.Z,{style:{width:(0,b.h)(16),height:(0,b.h)(16)},stroke:2.5,color:e.colors.yellow[4]}),r=u.createElement(w.Z,{style:{width:(0,b.h)(16),height:(0,b.h)(16)},stroke:2.5,color:e.colors.blue[6]});return u.createElement(c.r,{size:"md",color:"dark.4",onLabel:t,offLabel:r})},centered:!0,code:y};var g=r(16659),j=r(86171);let x=`
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
`,v={type:"code",component:function(){let e=(0,d.rZ)(),[t,r]=(0,u.useState)(!1);return u.createElement(c.r,{checked:t,onChange:e=>r(e.currentTarget.checked),color:"teal",size:"md",label:"Switch with thumb icon",thumbIcon:t?u.createElement(g.Z,{style:{width:(0,b.h)(12),height:(0,b.h)(12)},color:e.colors.teal[6],stroke:3}):u.createElement(j.Z,{style:{width:(0,b.h)(12),height:(0,b.h)(12)},color:e.colors.red[6],stroke:3})})},centered:!0,code:x};var O=Object.defineProperty,k=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,L=(e,t,r)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,I=(e,t)=>{for(var r in t||(t={}))V.call(t,r)&&L(e,r,t[r]);if(k)for(var r of k(t))E.call(t,r)&&L(e,r,t[r]);return e};let F=`
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
`,N={type:"configurator",component:function(e){return u.createElement(c.r.Group,I({defaultValue:["react"]},e),u.createElement(h.Z,{mt:"xs"},u.createElement(c.r,{value:"react",label:"React"}),u.createElement(c.r,{value:"svelte",label:"Svelte"}),u.createElement(c.r,{value:"ng",label:"Angular"}),u.createElement(c.r,{value:"vue",label:"Vue"})))},code:F,centered:!0,controls:[{prop:"label",type:"string",initialValue:"Select your favorite framework/library",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]};var z=r(64685),G=Object.defineProperty,C=Object.defineProperties,T=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,Z=(e,t,r)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,A=(e,t)=>{for(var r in t||(t={}))D.call(t,r)&&Z(e,r,t[r]);if(_)for(var r of _(t))P.call(t,r)&&Z(e,r,t[r]);return e},M=(e,t)=>C(e,T(t));let R=`
import { Switch } from '@mantine/core';

function Demo() {
  return <Switch{{props}} label="Switch component" description="Switch description" error="Switch error />;
}
`,X={type:"styles-api",data:z.T,component:function(e){return u.createElement(c.r,M(A({},e),{label:"Switch component",description:"Switch description",error:"Switch error"}))},centered:!0,code:R},B=(0,l.A)(i.us.Switch);function H(e){let t=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p"},(0,o.ah)(),e.components),{Demo:r,StylesApiSelectors:l}=t;return r||q("Demo",!0),l||q("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r,{data:s}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Switch } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return <Switch checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"inner-labels",children:"Inner Labels"}),"\n",(0,n.jsx)(r,{data:m}),"\n",(0,n.jsx)(t.h2,{id:"icon-labels",children:"Icon labels"}),"\n",(0,n.jsx)(r,{data:S}),"\n",(0,n.jsx)(t.h2,{id:"thumb-icon",children:"Thumb icon"}),"\n",(0,n.jsx)(r,{data:v}),"\n",(0,n.jsx)(t.h2,{id:"switchgroup",children:"Switch.Group"}),"\n",(0,n.jsx)(r,{data:N}),"\n",(0,n.jsx)(t.h2,{id:"controlled-switchgroup",children:"Controlled Switch.Group"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Switch } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Switch.Group value={value} onChange={setValue}>\n      <Switch value="react" label="React" />\n      <Switch value="svelte" label="Svelte" />\n    </Switch.Group>\n  );\n}\n'})}),"\n",(0,n.jsx)(l,{component:"Switch"}),"\n",(0,n.jsx)(r,{data:X}),"\n",(0,n.jsx)(t.h2,{id:"get-input-ref",children:"Get input ref"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useRef } from 'react';\nimport { Switch } from '@mantine/core';\n\nfunction Demo() {\n  const ref = useRef<HTMLInputElement>(null);\n  return <Switch ref={ref} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Switch"})," is a regular ",(0,n.jsx)(t.code,{children:'input[type="checkbox"]'}),". Set ",(0,n.jsx)(t.code,{children:"aria-label"})," if the ",(0,n.jsx)(t.code,{children:"Switch"})," is used without ",(0,n.jsx)(t.code,{children:"label"})," prop:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { Switch } from \'@mantine/core\';\n\n// -> not ok, input is not labeled\nfunction Bad() {\n  return <Switch />;\n}\n\n// -> ok, input has aria-label\nfunction Good() {\n  return <Switch aria-label="I agree to everything" />;\n}\n\n// -> ok, input has associated label\nfunction AlsoGood() {\n  return <Switch label="I agree to everything" />;\n}\n'})})]})}var U=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(B,Object.assign({},e,{children:(0,n.jsx)(H,e)}))};function q(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[6226,2411,7437,9774,2888,179],function(){return e(e.s=73456)}),_N_E=e.O()}]);