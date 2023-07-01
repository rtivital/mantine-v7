(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5110],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},18251:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/badge",function(){return n(6906)}])},6906:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return W}});var r=n(85893),o=n(11151),a=n(34940),i=n(25263),c=n(67294),l=n(23733),d=Object.defineProperty,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&h(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&h(e,n,t[n]);return e};let f=`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge{{props}}>Badge</Badge>;
}
`,m={type:"configurator",component:function(e){return c.createElement(l.C,g({},e),"Badge")},code:f,centered:!0,controls:[{prop:"variant",type:"select",initialValue:"filled",libraryValue:"filled",data:["filled","light","outline","dot","transparent","default","white"]},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"size",prop:"radius",initialValue:"xl",libraryValue:"xl"}]};var y=n(55127);let v=e=>`
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
`,b={type:"configurator",component:function(e){return c.createElement(l.C,{size:"xl",variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree}},"Gradient badge")},code:v,centered:!0,controls:y.P};var k=n(46393),w=n(74378),M=n(93693);let j=`
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
`,B={type:"code",component:function(){let e=c.createElement(M.Z,{style:{width:(0,k.h)(12),height:(0,k.h)(12)}});return c.createElement(w.Z,null,c.createElement(l.C,{leftSection:e},"With left section"),c.createElement(l.C,{rightSection:e},"With right section"))},centered:!0,code:j},_=`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}
`,x={type:"code",component:function(){return c.createElement(l.C,{fullWidth:!0},"Full width badge")},code:_};var E=n(76692),Z=Object.defineProperty,O=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,V=(e,t,n)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,P=(e,t)=>{for(var n in t||(t={}))I.call(t,n)&&V(e,n,t[n]);if(O)for(var n of O(t))S.call(t,n)&&V(e,n,t[n]);return e};let A=`
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
`,C={type:"styles-api",data:E.o,component:function(e){let t=c.createElement(M.Z,{style:{width:(0,k.h)(12),height:(0,k.h)(12)}});return c.createElement(l.C,P({leftSection:t,rightSection:t},e),"Badge component")},centered:!0,code:A},D=(0,a.A)(i.us.Badge);function F(e){let t=Object.assign({h2:"h2",p:"p",code:"code"},(0,o.ah)(),e.components),{Demo:n,Gradient:a,StylesApiSelectors:i,Polymorphic:c}=t;return n||z("Demo",!0),a||z("Gradient",!0),c||z("Polymorphic",!0),i||z("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:m}),"\n",(0,r.jsx)(a,{component:"Badge"}),"\n",(0,r.jsx)(n,{data:b}),"\n",(0,r.jsx)(t.h2,{id:"left-and-right-sections",children:"Left and right sections"}),"\n",(0,r.jsx)(n,{data:B}),"\n",(0,r.jsx)(t.h2,{id:"full-width",children:"Full width"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"fullWidth"})," to make badge span full width of its parent element:"]}),"\n",(0,r.jsx)(n,{data:x}),"\n",(0,r.jsx)(i,{component:"Badge"}),"\n",(0,r.jsx)(n,{data:C}),"\n",(0,r.jsx)(c,{defaultElement:"div",changeToElement:"a",component:"Badge",withNext:!0})]})}var W=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(D,Object.assign({},e,{children:(0,r.jsx)(F,e)}))};function z(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},55127:function(e,t,n){"use strict";n.d(t,{P:function(){return r}});let r=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]}},function(e){e.O(0,[2411,7437,6679,9774,2888,179],function(){return e(e.s=18251)}),_N_E=e.O()}]);