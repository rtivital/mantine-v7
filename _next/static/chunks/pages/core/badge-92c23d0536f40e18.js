(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5110],{18251:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/badge",function(){return n(6906)}])},6906:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(85893),o=n(11151),i=n(34940),a=n(25263),l=n(67294),c=n(23733),d=Object.defineProperty,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&g(e,n,t[n]);if(u)for(var n of u(t))s.call(t,n)&&g(e,n,t[n]);return e};let f=`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge{{props}}>Badge</Badge>;
}
`,h={type:"configurator",component:function(e){return l.createElement(c.C,m({},e),"Badge")},code:f,centered:!0,controls:[{prop:"variant",type:"select",initialValue:"filled",libraryValue:"filled",data:["filled","light","outline","dot","transparent","default","white"]},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"size",prop:"radius",initialValue:"xl",libraryValue:"xl"}]};var y=n(55127);let b=e=>`
import { Badge } from '@mantine/core';

function Demo() {
  return (
    <Badge
      size="xl"
      variant="gradient"
      gradient={{ from: '${e.gradientFrom}', to: '${e.gradientTo}', deg: ${e.gradientDegree} }}
    >
      Gradient badge
    </Badge>
  );
}
`,j={type:"configurator",component:function(e){return l.createElement(c.C,{size:"xl",variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree}},"Gradient badge")},code:b,centered:!0,controls:y.P};var B=n(46393),w=n(74378),_=n(93693);let x=`
import { Badge, Group, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt style={{ width: rem(12), height: rem(12) }} />;
  return (
    <Group>
      <Badge leftSection={icon}>With left section</Badge>
      <Badge rightSection={icon}>With right section</Badge>
    </Group>
  );
}
`,v={type:"code",component:function(){let e=l.createElement(_.Z,{style:{width:(0,B.h)(12),height:(0,B.h)(12)}});return l.createElement(w.Z,null,l.createElement(c.C,{leftSection:e},"With left section"),l.createElement(c.C,{rightSection:e},"With right section"))},centered:!0,code:x},E=`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}
`,O={type:"code",component:function(){return l.createElement(c.C,{fullWidth:!0},"Full width badge")},code:E};var V=n(76692),S=Object.defineProperty,P=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t)=>{for(var n in t||(t={}))D.call(t,n)&&C(e,n,t[n]);if(P)for(var n of P(t))k.call(t,n)&&C(e,n,t[n]);return e};let F=`
import { Badge, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt style={{ width: rem(12), height: rem(12) }} />;

  return (
    <Badge leftSection={icon} rightSection={icon}{{props}}>
      Badge component
    </Badge>
  );
}
`,I={type:"styles-api",data:V.o,component:function(e){let t=l.createElement(_.Z,{style:{width:(0,B.h)(12),height:(0,B.h)(12)}});return l.createElement(c.C,A({leftSection:t,rightSection:t},e),"Badge component")},centered:!0,code:F},W=(0,i.A)(a.us.Badge);function G(e){let t=Object.assign({h2:"h2",p:"p",code:"code"},(0,o.ah)(),e.components),{Demo:n,Gradient:i,StylesApiSelectors:a,Polymorphic:l}=t;return n||T("Demo",!0),i||T("Gradient",!0),l||T("Polymorphic",!0),a||T("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:h}),"\n",(0,r.jsx)(i,{component:"Badge"}),"\n",(0,r.jsx)(n,{data:j}),"\n",(0,r.jsx)(t.h2,{id:"left-and-right-sections",children:"Left and right sections"}),"\n",(0,r.jsx)(n,{data:v}),"\n",(0,r.jsx)(t.h2,{id:"full-width",children:"Full width"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"fullWidth"})," to make badge span full width of its parent element:"]}),"\n",(0,r.jsx)(n,{data:O}),"\n",(0,r.jsx)(a,{component:"Badge"}),"\n",(0,r.jsx)(n,{data:I}),"\n",(0,r.jsx)(l,{defaultElement:"div",changeToElement:"a",component:"Badge",withNext:!0})]})}var N=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(W,Object.assign({},e,{children:(0,r.jsx)(G,e)}))};function T(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},55127:function(e,t,n){"use strict";n.d(t,{P:function(){return r}});let r=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]}},function(e){e.O(0,[7914,4831,5309,9774,2888,179],function(){return e(e.s=18251)}),_N_E=e.O()}]);