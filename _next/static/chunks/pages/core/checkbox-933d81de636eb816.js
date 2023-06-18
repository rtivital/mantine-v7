(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1639],{34840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/checkbox",function(){return n(10044)}])},10044:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ex}});var r=n(85893),a=n(11151),c=n(34940),o=n(25263),l=n(67294),i=n(56746),s=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(b)for(var n of b(t))h.call(t,n)&&m(e,n,t[n]);return e},f=(e,t)=>d(e,u(t));let x=`
import { Checkbox } from '@mantine/core';


function Demo() {
  return (
    <Checkbox
      defaultChecked
      {{props}}
    />
  );
}
`,y={type:"configurator",component:e=>l.createElement(i.X,f(k({},e),{defaultChecked:!0})),code:x,centered:!0,controls:[{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I agree to sell my privacy",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"indeterminate",type:"boolean",initialValue:!1,libraryValue:!1}]};var v=n(25943);let C=`
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
`,g={type:"code",component:function(){return l.createElement(v.K,null,l.createElement(i.X,{checked:!1,label:"Default checkbox"}),l.createElement(i.X,{checked:!1,indeterminate:!0,label:"Indeterminate checkbox"}),l.createElement(i.X,{checked:!0,indeterminate:!0,label:"Indeterminate checked checkbox"}),l.createElement(i.X,{checked:!0,label:"Checked checkbox"}),l.createElement(i.X,{disabled:!0,label:"Disabled checkbox"}),l.createElement(i.X,{disabled:!0,checked:!0,label:"Disabled checked checkbox"}),l.createElement(i.X,{disabled:!0,indeterminate:!0,label:"Disabled indeterminate checkbox"}))},code:C};var j=n(38233),O=n(86079),E=Object.defineProperty,V=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,I=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,S=(e,t)=>{for(var n in t||(t={}))w.call(t,n)&&I(e,n,t[n]);if(V)for(var n of V(t))P.call(t,n)&&I(e,n,t[n]);return e},X=(e,t)=>{var n={};for(var r in e)w.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&V)for(var r of V(e))0>t.indexOf(r)&&P.call(e,r)&&(n[r]=e[r]);return n};let R=`
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
`,D=e=>{var{indeterminate:t}=e,n=X(e,["indeterminate"]);return t?l.createElement(j.Z,S({},n)):l.createElement(O.Z,S({},n))},_={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(i.X,{icon:D,label:"Custom icon",defaultChecked:!0}),l.createElement(i.X,{icon:D,label:"Custom icon: indeterminate",indeterminate:!0,mt:"sm"}))},code:R};var G=n(41249),A=Object.defineProperty,N=Object.defineProperties,T=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,F=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Z=(e,t)=>{for(var n in t||(t={}))z.call(t,n)&&F(e,n,t[n]);if(L)for(var n of L(t))B.call(t,n)&&F(e,n,t[n]);return e},M=(e,t)=>N(e,T(t)),W=n(94873),K=Object.defineProperty,U=Object.defineProperties,q=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,Y=(e,t,n)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$=(e,t)=>{for(var n in t||(t={}))J.call(t,n)&&Y(e,n,t[n]);if(H)for(var n of H(t))Q.call(t,n)&&Y(e,n,t[n]);return e},ee=(e,t)=>U(e,q(t));let et=`
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
`,en=[{label:"Receive email notifications",checked:!1,key:(0,G.k)()},{label:"Receive sms notifications",checked:!1,key:(0,G.k)()},{label:"Receive push notifications",checked:!1,key:(0,G.k)()}],er={type:"code",code:et,component:function(){let[e,t]=function(e=[]){let[t,n]=(0,l.useState)(e),r=(...e)=>n(t=>[...t,...e]),a=(...e)=>n(t=>[...e,...t]),c=(e,...t)=>n(n=>[...n.slice(0,e),...t,...n.slice(e)]),o=e=>n(t=>t.map((t,n)=>e(t,n))),i=(...e)=>n(t=>t.filter((t,n)=>!e.includes(n))),s=()=>n(e=>{let t=[...e];return t.pop(),t}),d=()=>n(e=>{let t=[...e];return t.shift(),t}),u=({from:e,to:t})=>n(n=>{let r=[...n],a=n[e];return r.splice(e,1),r.splice(t,0,a),r}),b=(e,t)=>n(n=>{let r=[...n];return r[e]=t,r}),p=(e,t,r)=>n(n=>{let a=[...n];return a[e]=M(Z({},a[e]),{[t]:r}),a}),h=(e,t)=>n(n=>n.map((n,r)=>e(n,r)?t(n,r):n)),m=e=>{n(t=>t.filter(e))};return[t,{setState:n,append:r,prepend:a,insert:c,pop:s,shift:d,apply:o,applyWhere:h,remove:i,reorder:u,setItem:b,setItemProp:p,filter:m}]}(en),n=e.every(e=>e.checked),r=e.some(e=>e.checked)&&!n,a=e.map((e,n)=>l.createElement(i.X,{mt:"xs",ml:33,label:e.label,key:e.key,checked:e.checked,onChange:e=>t.setItemProp(n,"checked",e.currentTarget.checked)}));return l.createElement(W.x,{maw:400,mx:"auto"},l.createElement(i.X,{checked:n,indeterminate:r,label:"Receive all notifications",onChange:()=>t.setState(e=>e.map(e=>ee($({},e),{checked:!n})))}),a)}};var ea=n(46342);let ec=`
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
`,eo={type:"code",component:function(){return l.createElement(i.X,{label:l.createElement(l.Fragment,null,"I accept"," ",l.createElement(ea.e,{href:"https://mantine.dev",target:"_blank",inherit:!0},"terms and conditions"))})},code:ec};var el=n(74378),ei=Object.defineProperty,es=Object.getOwnPropertySymbols,ed=Object.prototype.hasOwnProperty,eu=Object.prototype.propertyIsEnumerable,eb=(e,t,n)=>t in e?ei(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ep=(e,t)=>{for(var n in t||(t={}))ed.call(t,n)&&eb(e,n,t[n]);if(es)for(var n of es(t))eu.call(t,n)&&eb(e,n,t[n]);return e};let eh=`
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
`,em={type:"configurator",component:function(e){return l.createElement(i.X.Group,ep({defaultValue:["react"]},e),l.createElement(el.Z,{mt:"xs"},l.createElement(i.X,{value:"react",label:"React"}),l.createElement(i.X,{value:"svelte",label:"Svelte"}),l.createElement(i.X,{value:"ng",label:"Angular"}),l.createElement(i.X,{value:"vue",label:"Vue"})))},code:eh,centered:!0,maxWidth:"100%",controls:[{prop:"label",type:"string",initialValue:"Select your favorite frameworks/libraries",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]},ek=(0,c.A)(o.us.Checkbox);function ef(e){let t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,a.ah)(),e.components),{Demo:n,GetElementRef:c}=t;return n||ey("Demo",!0),c||ey("GetElementRef",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:y}),"\n",(0,r.jsx)(t.h2,{id:"states",children:"States"}),"\n",(0,r.jsx)(n,{data:g}),"\n",(0,r.jsx)(t.h2,{id:"replace-icon",children:"Replace icon"}),"\n",(0,r.jsx)(n,{data:_}),"\n",(0,r.jsx)(t.h2,{id:"indeterminate-state",children:"Indeterminate state"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Checkbox"})," supports indeterminate state. When ",(0,r.jsx)(t.code,{children:"indeterminate"})," prop is true,\n",(0,r.jsx)(t.code,{children:"checked"})," prop is ignored:"]}),"\n",(0,r.jsx)(n,{data:er,demoProps:{toggle:!0}}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Checkbox } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Checkbox checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"label-with-link",children:"Label with link"}),"\n",(0,r.jsx)(n,{data:eo}),"\n",(0,r.jsx)(t.h2,{id:"checkboxgroup",children:"Checkbox.Group"}),"\n",(0,r.jsx)(n,{data:em}),"\n",(0,r.jsx)(t.h2,{id:"controlled-checkboxgroup",children:"Controlled Checkbox.Group"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Checkbox } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Checkbox.Group value={value} onChange={setValue}>\n      <Checkbox value="react" label="React" />\n      <Checkbox value="svelte" label="Svelte" />\n    </Checkbox.Group>\n  );\n}\n'})}),"\n",(0,r.jsx)(c,{component:"Checkbox",refType:"input"}),"\n",(0,r.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"aria-label"})," or ",(0,r.jsx)(t.code,{children:"label"})," prop to make checkbox accessible:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Checkbox } from \'@mantine/core\';\n\n// Not ok, input is not labeled\nfunction Bad() {\n  return <Checkbox />;\n}\n\n// Ok, input is labelled by aria-label\nfunction GoodAriaLabel() {\n  return <Checkbox aria-label="My checkbox" />;\n}\n\n// Ok, input is labelled by label element\nfunction GoodLabel() {\n  return <Checkbox label="My checkbox" />;\n}\n'})})]})}var ex=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(ek,Object.assign({},e,{children:(0,r.jsx)(ef,e)}))};function ey(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[6536,7914,4831,9774,2888,179],function(){return e(e.s=34840)}),_N_E=e.O()}]);