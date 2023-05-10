(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2909],{73456:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/switch",function(){return r(48974)}])},48974:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return F}});var n=r(85893),o=r(11151),l=r(34940),i=r(25263),a=r(50282);let c=`
import { Switch } from '@mantine/core';

function Demo() {
  return (
    <Switch
      {{props}}
    />
  );
}
`,s={type:"configurator",component:a.r,code:c,controls:[{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I agree to sell my privacy",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1}]};var u=r(67294),h=r(74378);let m=`
import { Switch } from '@mantine/core';

function Demo() {
  return <Switch onLabel="ON" offLabel="OFF" />;
}
`,p={type:"code",component:function(){return u.createElement(h.Z,{justify:"center"},u.createElement(a.r,{size:"xs",onLabel:"ON",offLabel:"OFF"}),u.createElement(a.r,{size:"sm",onLabel:"ON",offLabel:"OFF"}),u.createElement(a.r,{size:"md",onLabel:"ON",offLabel:"OFF"}),u.createElement(a.r,{size:"lg",onLabel:"ON",offLabel:"OFF"}),u.createElement(a.r,{size:"xl",onLabel:"ON",offLabel:"OFF"}))},code:m};var d=r(49441),b=r(61736),f=r(54764),y=(0,f.Z)("moon-stars","IconMoonStars",[["path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",key:"svg-0"}],["path",{d:"M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2",key:"svg-1"}],["path",{d:"M19 11h2m-1 -1v2",key:"svg-2"}]]);let g=`
import { Switch, useMantineTheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

function Demo() {
  const theme = useMantineTheme();

  const sunIcon = (
    <IconSun
      style={{ width: '1rem', height: '1rem' }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: '1rem', height: '1rem' }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return <Switch size="md" color="dark.4" onLabel={sunIcon} offLabel={moonIcon} />;
}
`,w={type:"code",component:function(){let e=(0,d.rZ)(),t=u.createElement(b.Z,{style:{width:"1rem",height:"1rem"},stroke:2.5,color:e.colors.yellow[4]}),r=u.createElement(y,{style:{width:"1rem",height:"1rem"},stroke:2.5,color:e.colors.blue[6]});return u.createElement(a.r,{size:"md",color:"dark.4",onLabel:t,offLabel:r})},centered:!0,code:g};var v=r(16659),S=(0,f.Z)("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]);let k=`
import { useState } from 'react';
import { Switch, Group, useMantineTheme } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

function Demo() {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);
  return (
    <Group position="center">
      <Switch
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        color="teal"
        size="md"
        label="Switch with thumb icon"
        thumbIcon={
          checked ? (
            <IconCheck style={{ width: '0.8rem', height: '0.8rem' }} color={theme.colors.teal[6]} stroke={3} />
          ) : (
            <IconX style={{ width: '0.8rem', height: '0.8rem' }} color={theme.colors.red[6]} stroke={3} />
          )
        }
      />
    </Group>
  );
}
`,x={type:"code",component:function(){let e=(0,d.rZ)(),[t,r]=(0,u.useState)(!1);return u.createElement(h.Z,{justify:"center"},u.createElement(a.r,{checked:t,onChange:e=>r(e.currentTarget.checked),color:"teal",size:"md",label:"Switch with thumb icon",thumbIcon:t?u.createElement(v.Z,{style:{width:"0.8rem",height:"0.8rem"},color:e.colors.teal[6],stroke:3}):u.createElement(S,{style:{width:"0.8rem",height:"0.8rem"},color:e.colors.red[6],stroke:3})}))},code:k};var j=Object.defineProperty,V=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,O=(e,t,r)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,L=(e,t)=>{for(var r in t||(t={}))E.call(t,r)&&O(e,r,t[r]);if(V)for(var r of V(t))I.call(t,r)&&O(e,r,t[r]);return e};let C=`
import { Switch } from '@mantine/core';

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
`,N={type:"configurator",component:function(e){return u.createElement(a.r.Group,L({defaultValue:["react"]},e),u.createElement(h.Z,{mt:"xs"},u.createElement(a.r,{value:"react",label:"React"}),u.createElement(a.r,{value:"svelte",label:"Svelte"}),u.createElement(a.r,{value:"ng",label:"Angular"}),u.createElement(a.r,{value:"vue",label:"Vue"})))},code:C,controls:[{prop:"label",type:"string",initialValue:"Select your favorite framework/library",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]},M=(0,l.A)(i.us.Switch);function z(e){let t=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p"},(0,o.ah)(),e.components),{Demo:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r,{data:s}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Switch } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return <Switch checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"inner-labels",children:"Inner Labels"}),"\n",(0,n.jsx)(r,{data:p}),"\n",(0,n.jsx)(t.h2,{id:"icon-labels",children:"Icon labels"}),"\n",(0,n.jsx)(r,{data:w}),"\n",(0,n.jsx)(t.h2,{id:"thumb-icon",children:"Thumb icon"}),"\n",(0,n.jsx)(r,{data:x}),"\n",(0,n.jsx)(t.h2,{id:"switchgroup",children:"Switch.Group"}),"\n",(0,n.jsx)(r,{data:N}),"\n",(0,n.jsx)(t.h2,{id:"controlled-switchgroup",children:"Controlled Switch.Group"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Switch } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Switch.Group value={value} onChange={setValue}>\n      <Switch value="react" label="React" />\n      <Switch value="svelte" label="Svelte" />\n    </Switch.Group>\n  );\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"get-input-ref",children:"Get input ref"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useRef } from 'react';\nimport { Switch } from '@mantine/core';\n\nfunction Demo() {\n  const ref = useRef<HTMLInputElement>(null);\n  return <Switch ref={ref} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(t.p,{children:["Switch is a regular input with checkbox type. Provide ",(0,n.jsx)(t.code,{children:"aria-label"})," if Switch is used without ",(0,n.jsx)(t.code,{children:"label"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'<Switch /> // -> not ok, input is not labeled\n<Switch label="I agree to everything" /> // -> ok, input and label is connected\n<Switch aria-label="I agree to everything" /> // -> ok, label is not visible but will be announced by screen reader\n'})})]})}var F=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(M,Object.assign({},e,{children:(0,n.jsx)(z,e)}))}},16659:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(54764).Z)("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]])}},function(e){e.O(0,[4878,9341,4940,9774,2888,179],function(){return e(e.s=73456)}),_N_E=e.O()}]);