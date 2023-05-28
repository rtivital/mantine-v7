(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5110],{18251:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/badge",function(){return n(6906)}])},6906:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});var r=n(85893),a=n(11151),i=n(34940),o=n(25263),l=n(67294),d=n(23733);let c=`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge{{props}}>Badge</Badge>;
}
`,s={type:"configurator",component:function(e){return l.createElement(d.C,Object.assign({},e),"Badge")},code:c,centered:!0,controls:[{prop:"variant",type:"select",initialValue:"filled",libraryValue:"filled",data:["filled","light","outline","dot","transparent","default","white"]},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"size",prop:"radius",initialValue:"xl",libraryValue:"xl"}]};var g=n(55127);let u=e=>`
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
`,m={type:"configurator",component:function(e){return l.createElement(d.C,{size:"xl",variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree}},"Gradient badge")},code:u,centered:!0,controls:g.P};var p=n(46393),h=n(74378),f=n(93693);let b=`
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
`,y={type:"code",component:function(){let e=l.createElement(f.Z,{style:{width:(0,p.h)(12),height:(0,p.h)(12)}});return l.createElement(h.Z,null,l.createElement(d.C,{leftSection:e},"With left section"),l.createElement(d.C,{rightSection:e},"With right section"))},centered:!0,code:b},B=`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}
`,x={type:"code",component:function(){return l.createElement(d.C,{fullWidth:!0},"Full width badge")},code:B};var j=n(76692);let v=`
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
`,_={type:"styles-api",data:j.o,component:function(e){let t=l.createElement(f.Z,{style:{width:(0,p.h)(12),height:(0,p.h)(12)}});return l.createElement(d.C,Object.assign({leftSection:t,rightSection:t},e),"Badge component")},centered:!0,code:v},E=(0,i.A)(o.us.Badge);function w(e){let t=Object.assign({h2:"h2",p:"p",code:"code"},(0,a.ah)(),e.components),{Demo:n,Gradient:i,StylesApiSelectors:o,Polymorphic:l}=t;return n||S("Demo",!0),i||S("Gradient",!0),l||S("Polymorphic",!0),o||S("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:s}),"\n",(0,r.jsx)(i,{component:"Badge"}),"\n",(0,r.jsx)(n,{data:m}),"\n",(0,r.jsx)(t.h2,{id:"left-and-right-sections",children:"Left and right sections"}),"\n",(0,r.jsx)(n,{data:y}),"\n",(0,r.jsx)(t.h2,{id:"full-width",children:"Full width"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"fullWidth"})," to make badge span full width of its parent element:"]}),"\n",(0,r.jsx)(n,{data:x}),"\n",(0,r.jsx)(o,{component:"Badge"}),"\n",(0,r.jsx)(n,{data:_}),"\n",(0,r.jsx)(l,{defaultElement:"div",changeToElement:"a",component:"Badge",withNext:!0})]})}var V=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(E,Object.assign({},e,{children:(0,r.jsx)(w,e)}))};function S(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},23733:function(e,t,n){"use strict";n.d(t,{C:function(){return h}});var r=n(59312),a=n(67294),i={root:"mantine-WM8AqtG","root--dot":"mantine-d3u1-wu",label:"mantine-LN56t-P",section:"mantine-cbpGUul"},o=n(70656),l=n(35577),d=n(89123),c=n(94873),s=n(95553),g=n(71350),u=n(94975);let m={size:"md",radius:"xl",variant:"filled"},p=(0,s.Z)((e,{radius:t,color:n,gradient:r,variant:a,size:i})=>{let o=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:r,variant:a});return{root:{"--badge-height":(0,g.ap)(i,"badge-height"),"--badge-padding-x":(0,g.ap)(i,"badge-padding-x"),"--badge-fz":(0,g.ap)(i,"badge-fz"),"--badge-radius":(0,g.H5)(t),"--badge-bg":o.background,"--badge-color":o.color,"--badge-bd":o.border,"--badge-dot-color":"dot"===a?(0,u.p)(n,e):void 0}}}),h=(0,o.b)((e,t)=>{let n=(0,l.w)("Badge",m,e),{classNames:o,className:s,style:g,styles:u,unstyled:h,vars:f,radius:b,color:y,gradient:B,leftSection:x,rightSection:j,children:v,variant:_,fullWidth:E}=n,w=(0,r._T)(n,["classNames","className","style","styles","unstyled","vars","radius","color","gradient","leftSection","rightSection","children","variant","fullWidth"]),V=(0,d.y)({name:"Badge",props:n,classes:i,className:s,style:g,classNames:o,styles:u,unstyled:h,vars:f,varsResolver:p});return a.createElement(c.x,Object.assign({variant:_,mod:{block:E}},V("root",{variant:_}),{ref:t},w),x&&a.createElement("span",Object.assign({},V("section"),{"data-position":"left"}),x),a.createElement("span",Object.assign({},V("label")),v),j&&a.createElement("span",Object.assign({},V("section"),{"data-position":"right"}),j))});h.displayName="@mantine/core/Badge"},55127:function(e,t,n){"use strict";n.d(t,{P:function(){return r}});let r=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=18251)}),_N_E=e.O()}]);