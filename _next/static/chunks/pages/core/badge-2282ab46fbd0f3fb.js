(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5110],{33507:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},18251:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/badge",function(){return r(6906)}])},6906:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var n=r(85893),a=r(11151),o=r(19905),i=r(9904),l=r(67294),c=r(23733),d=Object.defineProperty,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&g(e,r,t[r]);if(s)for(var r of s(t))u.call(t,r)&&g(e,r,t[r]);return e};let f=`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge{{props}}>Badge</Badge>;
}
`,m={type:"configurator",component:function(e){return l.createElement(c.C,h({},e),"Badge")},code:f,centered:!0,controls:[{prop:"variant",type:"select",initialValue:"filled",libraryValue:"filled",data:["filled","light","outline","dot","transparent","default","white"]},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"size",prop:"radius",initialValue:"xl",libraryValue:"xl"}]};var y=r(55127);let v=e=>`
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
`,b={type:"configurator",component:function(e){return l.createElement(c.C,{size:"xl",variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree}},"Gradient badge")},code:v,centered:!0,controls:y.P};var k=r(46393),w=r(74378),j=r(93693);let x=`
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
`,M={type:"code",component:function(){let e=l.createElement(j.Z,{style:{width:(0,k.h)(12),height:(0,k.h)(12)}});return l.createElement(w.Z,null,l.createElement(c.C,{leftSection:e},"With left section"),l.createElement(c.C,{rightSection:e},"With right section"))},centered:!0,code:x},B=`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}
`,O={type:"code",component:function(){return l.createElement(c.C,{fullWidth:!0},"Full width badge")},code:B};var E=r(76692),_=Object.defineProperty,Z=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,I=(e,t,r)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,V=(e,t)=>{for(var r in t||(t={}))P.call(t,r)&&I(e,r,t[r]);if(Z)for(var r of Z(t))S.call(t,r)&&I(e,r,t[r]);return e};let C=`
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
`,D={type:"styles-api",data:E.o,component:function(e){let t=l.createElement(j.Z,{style:{width:(0,k.h)(12),height:(0,k.h)(12)}});return l.createElement(c.C,V({leftSection:t,rightSection:t},e),"Badge component")},centered:!0,code:C},z=(0,o.A)(i.us.Badge);function A(e){let t=Object.assign({h2:"h2",p:"p",code:"code"},(0,a.ah)(),e.components),{Demo:r,Gradient:o,StylesApiSelectors:i,Polymorphic:l}=t;return r||W("Demo",!0),o||W("Gradient",!0),l||W("Polymorphic",!0),i||W("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r,{data:m}),"\n",(0,n.jsx)(o,{component:"Badge"}),"\n",(0,n.jsx)(r,{data:b}),"\n",(0,n.jsx)(t.h2,{id:"left-and-right-sections",children:"Left and right sections"}),"\n",(0,n.jsx)(r,{data:M}),"\n",(0,n.jsx)(t.h2,{id:"full-width",children:"Full width"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"fullWidth"})," to make badge span full width of its parent element:"]}),"\n",(0,n.jsx)(r,{data:O}),"\n",(0,n.jsx)(i,{component:"Badge"}),"\n",(0,n.jsx)(r,{data:D}),"\n",(0,n.jsx)(l,{defaultElement:"div",changeToElement:"a",component:"Badge",withNext:!0})]})}var N=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(z,Object.assign({},e,{children:(0,n.jsx)(A,e)}))};function W(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},23733:function(e,t,r){"use strict";r.d(t,{C:function(){return M}});var n=r(67294),a={root:"m-347db0ec","root--dot":"m-fbd81e3d",label:"m-5add502a",section:"m-91fdda9b"},o=r(70656),i=r(35577),l=r(25637),c=r(51227),d=r(95553),s=r(71350),p=r(94975),u=Object.defineProperty,g=Object.defineProperties,h=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&v(e,r,t[r]);if(f)for(var r of f(t))y.call(t,r)&&v(e,r,t[r]);return e},k=(e,t)=>g(e,h(t)),w=(e,t)=>{var r={};for(var n in e)m.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&f)for(var n of f(e))0>t.indexOf(n)&&y.call(e,n)&&(r[n]=e[n]);return r};let j={size:"md",radius:"xl",variant:"filled"},x=(0,d.Z)((e,{radius:t,color:r,gradient:n,variant:a,size:o})=>{let i=e.variantColorResolver({color:r||e.primaryColor,theme:e,gradient:n,variant:a});return{root:{"--badge-height":(0,s.ap)(o,"badge-height"),"--badge-padding-x":(0,s.ap)(o,"badge-padding-x"),"--badge-fz":(0,s.ap)(o,"badge-fz"),"--badge-radius":(0,s.H5)(t),"--badge-bg":i.background,"--badge-color":i.color,"--badge-bd":i.border,"--badge-dot-color":"dot"===a?(0,p.p)(r,e):void 0}}}),M=(0,o.b)((e,t)=>{let r=(0,i.w)("Badge",j,e),{classNames:o,className:d,style:s,styles:p,unstyled:u,vars:g,radius:h,color:f,gradient:m,leftSection:y,rightSection:v,children:M,variant:B,fullWidth:O}=r,E=w(r,["classNames","className","style","styles","unstyled","vars","radius","color","gradient","leftSection","rightSection","children","variant","fullWidth"]),_=(0,l.y)({name:"Badge",props:r,classes:a,className:d,style:s,classNames:o,styles:p,unstyled:u,vars:g,varsResolver:x});return n.createElement(c.x,b(k(b({variant:B,mod:{block:O}},_("root",{variant:B})),{ref:t}),E),y&&n.createElement("span",k(b({},_("section")),{"data-position":"left"}),y),n.createElement("span",b({},_("label")),M),v&&n.createElement("span",k(b({},_("section")),{"data-position":"right"}),v))});M.classes=a,M.displayName="@mantine/core/Badge"},55127:function(e,t,r){"use strict";r.d(t,{P:function(){return n}});let n=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]}},function(e){e.O(0,[9905,9774,2888,179],function(){return e(e.s=18251)}),_N_E=e.O()}]);