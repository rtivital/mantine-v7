(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5110],{18251:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/badge",function(){return r(6906)}])},6906:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return I}});var n=r(85893),o=r(11151),a=r(34940),i=r(25263),l=r(67294),c=r(23733),d=Object.defineProperty,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&g(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&g(e,r,t[r]);return e};let f=`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge{{props}}>Badge</Badge>;
}
`,b={type:"configurator",component:function(e){return l.createElement(c.C,m({},e),"Badge")},code:f,centered:!0,controls:[{prop:"variant",type:"select",initialValue:"filled",libraryValue:"filled",data:["filled","light","outline","dot","transparent","default","white"]},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"size",prop:"radius",initialValue:"xl",libraryValue:"xl"}]};var h=r(55127);let y=e=>`
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
`,j={type:"configurator",component:function(e){return l.createElement(c.C,{size:"xl",variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree}},"Gradient badge")},code:y,centered:!0,controls:h.P};var v=r(46393),w=r(74378),x=r(93693);let B=`
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
`,O={type:"code",component:function(){let e=l.createElement(x.Z,{style:{width:(0,v.h)(12),height:(0,v.h)(12)}});return l.createElement(w.Z,null,l.createElement(c.C,{leftSection:e},"With left section"),l.createElement(c.C,{rightSection:e},"With right section"))},centered:!0,code:B},E=`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}
`,_={type:"code",component:function(){return l.createElement(c.C,{fullWidth:!0},"Full width badge")},code:E};var P=r(76692),S=Object.defineProperty,V=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,D=(e,t,r)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,N=(e,t)=>{for(var r in t||(t={}))C.call(t,r)&&D(e,r,t[r]);if(V)for(var r of V(t))k.call(t,r)&&D(e,r,t[r]);return e};let W=`
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
`,z={type:"styles-api",data:P.o,component:function(e){let t=l.createElement(x.Z,{style:{width:(0,v.h)(12),height:(0,v.h)(12)}});return l.createElement(c.C,N({leftSection:t,rightSection:t},e),"Badge component")},centered:!0,code:W},A=(0,a.A)(i.us.Badge);function G(e){let t=Object.assign({h2:"h2",p:"p",code:"code"},(0,o.ah)(),e.components),{Demo:r,Gradient:a,StylesApiSelectors:i,Polymorphic:l}=t;return r||F("Demo",!0),a||F("Gradient",!0),l||F("Polymorphic",!0),i||F("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r,{data:b}),"\n",(0,n.jsx)(a,{component:"Badge"}),"\n",(0,n.jsx)(r,{data:j}),"\n",(0,n.jsx)(t.h2,{id:"left-and-right-sections",children:"Left and right sections"}),"\n",(0,n.jsx)(r,{data:O}),"\n",(0,n.jsx)(t.h2,{id:"full-width",children:"Full width"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"fullWidth"})," to make badge span full width of its parent element:"]}),"\n",(0,n.jsx)(r,{data:_}),"\n",(0,n.jsx)(i,{component:"Badge"}),"\n",(0,n.jsx)(r,{data:z}),"\n",(0,n.jsx)(l,{defaultElement:"div",changeToElement:"a",component:"Badge",withNext:!0})]})}var I=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(A,Object.assign({},e,{children:(0,n.jsx)(G,e)}))};function F(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},23733:function(e,t,r){"use strict";r.d(t,{C:function(){return O}});var n=r(67294),o={root:"mantine-WM8AqtG","root--dot":"mantine-d3u1-wu",label:"mantine-LN56t-P",section:"mantine-cbpGUul"},a=r(70656),i=r(35577),l=r(89123),c=r(94873),d=r(95553),s=r(71350),u=r(94975),p=Object.defineProperty,g=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,j=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&y(e,r,t[r]);if(f)for(var r of f(t))h.call(t,r)&&y(e,r,t[r]);return e},v=(e,t)=>g(e,m(t)),w=(e,t)=>{var r={};for(var n in e)b.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&f)for(var n of f(e))0>t.indexOf(n)&&h.call(e,n)&&(r[n]=e[n]);return r};let x={size:"md",radius:"xl",variant:"filled"},B=(0,d.Z)((e,{radius:t,color:r,gradient:n,variant:o,size:a})=>{let i=e.variantColorResolver({color:r||e.primaryColor,theme:e,gradient:n,variant:o});return{root:{"--badge-height":(0,s.ap)(a,"badge-height"),"--badge-padding-x":(0,s.ap)(a,"badge-padding-x"),"--badge-fz":(0,s.ap)(a,"badge-fz"),"--badge-radius":(0,s.H5)(t),"--badge-bg":i.background,"--badge-color":i.color,"--badge-bd":i.border,"--badge-dot-color":"dot"===o?(0,u.p)(r,e):void 0}}}),O=(0,a.b)((e,t)=>{let r=(0,i.w)("Badge",x,e),{classNames:a,className:d,style:s,styles:u,unstyled:p,vars:g,radius:m,color:f,gradient:b,leftSection:h,rightSection:y,children:O,variant:E,fullWidth:_}=r,P=w(r,["classNames","className","style","styles","unstyled","vars","radius","color","gradient","leftSection","rightSection","children","variant","fullWidth"]),S=(0,l.y)({name:"Badge",props:r,classes:o,className:d,style:s,classNames:a,styles:u,unstyled:p,vars:g,varsResolver:B});return n.createElement(c.x,j(v(j({variant:E,mod:{block:_}},S("root",{variant:E})),{ref:t}),P),h&&n.createElement("span",v(j({},S("section")),{"data-position":"left"}),h),n.createElement("span",j({},S("label")),O),y&&n.createElement("span",v(j({},S("section")),{"data-position":"right"}),y))});O.displayName="@mantine/core/Badge"},55127:function(e,t,r){"use strict";r.d(t,{P:function(){return n}});let n=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]}},function(e){e.O(0,[5664,9341,4940,9774,2888,179],function(){return e(e.s=18251)}),_N_E=e.O()}]);