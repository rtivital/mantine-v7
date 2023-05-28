(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1639],{34840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/checkbox",function(){return n(21446)}])},21446:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var a=n(85893),c=n(11151),l=n(34940),r=n(25263),i=n(67294),o=n(56746);let s=`
import { Checkbox } from '@mantine/core';


function Demo() {
  return (
    <Checkbox
      defaultChecked
      {{props}}
    />
  );
}
`,d={type:"configurator",component:e=>i.createElement(o.X,Object.assign({},e,{defaultChecked:!0})),code:s,centered:!0,controls:[{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I agree to sell my privacy",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"indeterminate",type:"boolean",initialValue:!1,libraryValue:!1}]};var h=n(25943);let u=`
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <>
      <Checkbox />
      <Checkbox indeterminate />
      <Checkbox checked indeterminate />
      <Checkbox checked />
      <Checkbox disabled />
      <Checkbox disabled checked />
      <Checkbox disabled indeterminate />
    </>
  );
}
`,m={type:"code",component:function(){return i.createElement(h.K,null,i.createElement(o.X,{checked:!1,label:"Default checkbox"}),i.createElement(o.X,{checked:!1,indeterminate:!0,label:"Indeterminate checkbox"}),i.createElement(o.X,{checked:!0,indeterminate:!0,label:"Indeterminate checked checkbox"}),i.createElement(o.X,{checked:!0,label:"Checked checkbox"}),i.createElement(o.X,{disabled:!0,label:"Disabled checkbox"}),i.createElement(o.X,{disabled:!0,checked:!0,label:"Disabled checked checkbox"}),i.createElement(o.X,{disabled:!0,indeterminate:!0,label:"Disabled indeterminate checkbox"}))},code:u};var b=n(59312),p=n(54764),k=(0,p.Z)("radioactive","IconRadioactive",[["path",{d:"M13.5 14.6l3 5.19a9 9 0 0 0 4.5 -7.79h-6a3 3 0 0 1 -1.5 2.6",key:"svg-0"}],["path",{d:"M13.5 9.4l3 -5.19a9 9 0 0 0 -9 0l3 5.19a3 3 0 0 1 3 0",key:"svg-1"}],["path",{d:"M10.5 14.6l-3 5.19a9 9 0 0 1 -4.5 -7.79h6a3 3 0 0 0 1.5 2.6",key:"svg-2"}]]),x=(0,p.Z)("biohazard","IconBiohazard",[["path",{d:"M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M11.939 14c0 .173 .048 .351 .056 .533l0 .217a4.75 4.75 0 0 1 -4.533 4.745l-.217 0m-4.75 -4.75a4.75 4.75 0 0 1 7.737 -3.693m6.513 8.443a4.75 4.75 0 0 1 -4.69 -5.503l-.06 0m1.764 -2.944a4.75 4.75 0 0 1 7.731 3.477l0 .217m-11.195 -3.813a4.75 4.75 0 0 1 -1.828 -7.624l.164 -.172m6.718 0a4.75 4.75 0 0 1 -1.665 7.798",key:"svg-1"}]]);let f=`
import { Checkbox, CheckboxProps } from '@mantine/core';
import { IconBiohazard, IconRadioactive } from '@tabler/icons-react';

const CheckboxIcon: CheckboxProps['icon'] = ({ indeterminate, ...others }) =>
  indeterminate ? <IconRadioactive {...others} /> : <IconBiohazard {...others} />;

function Demo() {
  return (
    <>
      <Checkbox icon={CheckboxIcon} label="Custom icon" defaultChecked />
      <Checkbox icon={CheckboxIcon} label="Custom icon: indeterminate" indeterminate mt="sm" />
    </>
  );
}
`,v=e=>{var{indeterminate:t}=e,n=(0,b._T)(e,["indeterminate"]);return t?i.createElement(k,Object.assign({},n)):i.createElement(x,Object.assign({},n))},C={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(o.X,{icon:v,label:"Custom icon",defaultChecked:!0}),i.createElement(o.X,{icon:v,label:"Custom icon: indeterminate",indeterminate:!0,mt:"sm"}))},code:f};var g=n(41249),y=n(94873);let j=`
import { useListState, randomId } from '@mantine/hooks';
import { Checkbox } from '@mantine/core';

const initialValues = [
  { label: 'Receive email notifications', checked: false, key: randomId() },
  { label: 'Receive sms notifications', checked: false, key: randomId() },
  { label: 'Receive push notifications', checked: false, key: randomId() },
];

export function IndeterminateCheckbox() {
  const [values, handlers] = useListState(initialValues);

  const allChecked = values.every((value) => value.checked);
  const indeterminate = values.some((value) => value.checked) && !allChecked;

  const items = values.map((value, index) => (
    <Checkbox
      mt="xs"
      ml={33}
      label={value.label}
      key={value.key}
      checked={value.checked}
      onChange={(event) => handlers.setItemProp(index, 'checked', event.currentTarget.checked)}
    />
  ));

  return (
    <>
      <Checkbox
        checked={allChecked}
        indeterminate={indeterminate}
        label="Receive all notifications"
        onChange={() =>
          handlers.setState((current) =>
            current.map((value) => ({ ...value, checked: !allChecked }))
          )
        }
      />
      {items}
    </>
  );
}
`,E=[{label:"Receive email notifications",checked:!1,key:(0,g.k)()},{label:"Receive sms notifications",checked:!1,key:(0,g.k)()},{label:"Receive push notifications",checked:!1,key:(0,g.k)()}],V={type:"code",code:j,component:function(){let[e,t]=function(e=[]){let[t,n]=(0,i.useState)(e),a=(...e)=>n(t=>[...t,...e]),c=(...e)=>n(t=>[...e,...t]),l=(e,...t)=>n(n=>[...n.slice(0,e),...t,...n.slice(e)]),r=e=>n(t=>t.map((t,n)=>e(t,n))),o=(...e)=>n(t=>t.filter((t,n)=>!e.includes(n))),s=()=>n(e=>{let t=[...e];return t.pop(),t}),d=()=>n(e=>{let t=[...e];return t.shift(),t}),h=({from:e,to:t})=>n(n=>{let a=[...n],c=n[e];return a.splice(e,1),a.splice(t,0,c),a}),u=(e,t)=>n(n=>{let a=[...n];return a[e]=t,a}),m=(e,t,a)=>n(n=>{let c=[...n];return c[e]=Object.assign(Object.assign({},c[e]),{[t]:a}),c}),b=(e,t)=>n(n=>n.map((n,a)=>e(n,a)?t(n,a):n)),p=e=>{n(t=>t.filter(e))};return[t,{setState:n,append:a,prepend:c,insert:l,pop:s,shift:d,apply:r,applyWhere:b,remove:o,reorder:h,setItem:u,setItemProp:m,filter:p}]}(E),n=e.every(e=>e.checked),a=e.some(e=>e.checked)&&!n,c=e.map((e,n)=>i.createElement(o.X,{mt:"xs",ml:33,label:e.label,key:e.key,checked:e.checked,onChange:e=>t.setItemProp(n,"checked",e.currentTarget.checked)}));return i.createElement(y.x,{maw:400,mx:"auto"},i.createElement(o.X,{checked:n,indeterminate:a,label:"Receive all notifications",onChange:()=>t.setState(e=>e.map(e=>Object.assign(Object.assign({},e),{checked:!n})))}),c)}};var I=n(46342);let X=`
import { Checkbox, Anchor } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{' '}
          <Anchor href="https://mantine.dev" target="_blank" inherit>
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}
`,R={type:"code",component:function(){return i.createElement(o.X,{label:i.createElement(i.Fragment,null,"I accept"," ",i.createElement(I.e,{href:"https://mantine.dev",target:"_blank",inherit:!0},"terms and conditions"))})},code:X};var S=n(74378);let _=`
import { Checkbox, Group } from '@mantine/core';


function Demo() {
  return (
    <Checkbox.Group
      defaultValue={['react']}
      {{props}}
    >
      <Group mt="xs">
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="ng" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Group>
    </Checkbox.Group>
  );
}
`,O={type:"configurator",component:function(e){return i.createElement(o.X.Group,Object.assign({defaultValue:["react"]},e),i.createElement(S.Z,{mt:"xs"},i.createElement(o.X,{value:"react",label:"React"}),i.createElement(o.X,{value:"svelte",label:"Svelte"}),i.createElement(o.X,{value:"ng",label:"Angular"}),i.createElement(o.X,{value:"vue",label:"Vue"})))},code:_,centered:!0,maxWidth:"100%",controls:[{prop:"label",type:"string",initialValue:"Select your favorite frameworks/libraries",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]},G=(0,l.A)(r.us.Checkbox);function w(e){let t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,c.ah)(),e.components),{Demo:n,GetElementRef:l}=t;return n||A("Demo",!0),l||A("GetElementRef",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n,{data:d}),"\n",(0,a.jsx)(t.h2,{id:"states",children:"States"}),"\n",(0,a.jsx)(n,{data:m}),"\n",(0,a.jsx)(t.h2,{id:"replace-icon",children:"Replace icon"}),"\n",(0,a.jsx)(n,{data:C}),"\n",(0,a.jsx)(t.h2,{id:"indeterminate-state",children:"Indeterminate state"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Checkbox"})," supports indeterminate state. When ",(0,a.jsx)(t.code,{children:"indeterminate"})," prop is true,\n",(0,a.jsx)(t.code,{children:"checked"})," prop is ignored:"]}),"\n",(0,a.jsx)(n,{data:V,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Checkbox } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Checkbox checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"label-with-link",children:"Label with link"}),"\n",(0,a.jsx)(n,{data:R}),"\n",(0,a.jsx)(t.h2,{id:"checkboxgroup",children:"Checkbox.Group"}),"\n",(0,a.jsx)(n,{data:O}),"\n",(0,a.jsx)(t.h2,{id:"controlled-checkboxgroup",children:"Controlled Checkbox.Group"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Checkbox } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Checkbox.Group value={value} onChange={setValue}>\n      <Checkbox value="react" label="React" />\n      <Checkbox value="svelte" label="Svelte" />\n    </Checkbox.Group>\n  );\n}\n'})}),"\n",(0,a.jsx)(l,{component:"Checkbox",refType:"input"}),"\n",(0,a.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"aria-label"})," or ",(0,a.jsx)(t.code,{children:"label"})," prop to make checkbox accessible:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:'import { Checkbox } from \'@mantine/core\';\n\n// Not ok, input is not labeled\nfunction Bad() {\n  return <Checkbox />;\n}\n\n// Ok, input is labelled by aria-label\nfunction GoodAriaLabel() {\n  return <Checkbox aria-label="My checkbox" />;\n}\n\n// Ok, input is labelled by label element\nfunction GoodLabel() {\n  return <Checkbox label="My checkbox" />;\n}\n'})})]})}var D=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(G,Object.assign({},e,{children:(0,a.jsx)(w,e)}))};function A(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=34840)}),_N_E=e.O()}]);