(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1583],{51198:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/divider",function(){return r(42747)}])},42747:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return X}});var i=r(85893),n=r(11151),l=r(34940),a=r(25263),o=r(67294),c={root:"mantine-uP4C4WW",label:"mantine--fjjU6c"},s=r(75144),m=r(35577),d=r(89123),b=r(94873),u=r(95553),v=r(94975),x=r(71350),h=Object.defineProperty,f=Object.defineProperties,p=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,z=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))y.call(t,r)&&z(e,r,t[r]);if(E)for(var r of E(t))D.call(t,r)&&z(e,r,t[r]);return e},j=(e,t)=>f(e,p(t)),L=(e,t)=>{var r={};for(var i in e)y.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&E)for(var i of E(e))0>t.indexOf(i)&&D.call(e,i)&&(r[i]=e[i]);return r};let P={size:"xs",orientation:"horizontal"},O=(0,u.Z)((e,{color:t,variant:r,size:i})=>({root:{"--divider-color":t?(0,v.p)(t,e):void 0,"--divider-border-style":r,"--divider-size":(0,x.ap)(i,"divider-size")}})),T=(0,s.d)((e,t)=>{let r=(0,m.w)("Divider",P,e),{classNames:i,className:n,style:l,styles:a,unstyled:s,vars:u,color:v,orientation:x,label:h,labelPosition:f}=r,p=L(r,["classNames","className","style","styles","unstyled","vars","color","orientation","label","labelPosition"]),E=(0,d.y)({name:"Divider",classes:c,props:r,className:n,style:l,classNames:i,styles:a,unstyled:s,vars:u,varsResolver:O});return o.createElement(b.x,j(g(g({ref:t,mod:{orientation:x,"with-label":!!h}},E("root")),p),{role:"separator"}),h&&o.createElement(b.x,g({component:"span",mod:{position:f}},E("label")),h))});T.displayName="@mantine/core/Divider";let w=`
import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}
`,_={type:"code",code:w,component:function(){return o.createElement(o.Fragment,null,o.createElement(T,{my:"sm"}),o.createElement(T,{my:"sm",variant:"dashed"}),o.createElement(T,{my:"sm",variant:"dotted"}))}};var k=r(27854),N=r(46342);let S=`
import { Divider, Box, Anchor } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Divider my="xs" label="Label on the left" labelPosition="left" />
      <Divider my="xs" label="Label in the center" labelPosition="center" />
      <Divider my="xs" label="Label on the right" labelPosition="right" />
      <Divider
        my="xs"
        variant="dashed"
        labelPosition="center"
        label={
          <>
            <IconSearch size={12} />
            <Box ml={5}>Search results</Box>
          </>
        }
      />
      <Divider
        my="xs"
        label={
          <Anchor href="https://mantine.dev" target="_blank" inherit>
            Link label
          </Anchor>
        }
      />
    </>
  );
}
`,F={type:"code",code:S,component:function(){return o.createElement(o.Fragment,null,o.createElement(T,{my:"xs",label:"Label on the left",labelPosition:"left"}),o.createElement(T,{my:"xs",label:"Label in the center",labelPosition:"center"}),o.createElement(T,{my:"xs",label:"Label on the right",labelPosition:"right"}),o.createElement(T,{my:"xs",variant:"dashed",labelPosition:"center",label:o.createElement(o.Fragment,null,o.createElement(k.Z,{size:12}),o.createElement(b.x,{ml:5},"Search results"))}),o.createElement(T,{my:"xs",label:o.createElement(N.e,{href:"https://mantine.dev",target:"_blank",inherit:!0},"Link label")}))}},A=`
import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider size="xs" />
      <Divider size="sm" />
      <Divider size="md" />
      <Divider size="lg" />
      <Divider size="xl" />
      <Divider size={10} />
    </>
  );
}
`,B={type:"code",code:A,component:function(){return o.createElement(o.Fragment,null,o.createElement(T,{my:"xs",size:"xs"}),o.createElement(T,{my:"xs",size:"sm"}),o.createElement(T,{my:"xs",size:"md"}),o.createElement(T,{my:"xs",size:"lg"}),o.createElement(T,{my:"xs",size:"xl"}),o.createElement(T,{my:"xs",size:10}))}};var C=r(74378),G=r(77048);let I=`
import { Divider, Group, Text } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Text>Label</Text>
      <Divider orientation="vertical" />
      <Text>Label</Text>
      <Divider size="sm" orientation="vertical" />
      <Text>Label</Text>
      <Divider size="md" orientation="vertical" />
      <Text>Label</Text>
      <Divider size="lg" orientation="vertical" />
      <Text>Label</Text>
      <Divider size="xl" orientation="vertical" />
      <Text>Label</Text>
    </Group>
  );
}
`,W={type:"code",code:I,component:function(){return o.createElement(C.Z,null,o.createElement(G.x,null,"Label"),o.createElement(T,{orientation:"vertical"}),o.createElement(G.x,null,"Label"),o.createElement(T,{size:"sm",orientation:"vertical"}),o.createElement(G.x,null,"Label"),o.createElement(T,{size:"md",orientation:"vertical"}),o.createElement(G.x,null,"Label"),o.createElement(T,{size:"lg",orientation:"vertical"}),o.createElement(G.x,null,"Label"),o.createElement(T,{size:"xl",orientation:"vertical"}),o.createElement(G.x,null,"Label"))}},Z=(0,l.A)(a.us.Divider);function U(e){let t=Object.assign({h2:"h2"},(0,n.ah)(),e.components),{Demo:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(r,{data:_}),"\n",(0,i.jsx)(t.h2,{id:"with-label",children:"With label"}),"\n",(0,i.jsx)(r,{data:F}),"\n",(0,i.jsx)(t.h2,{id:"sizes",children:"Sizes"}),"\n",(0,i.jsx)(r,{data:B}),"\n",(0,i.jsx)(t.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,i.jsx)(r,{data:W})]})}var X=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(Z,Object.assign({},e,{children:(0,i.jsx)(U,e)}))}}},function(e){e.O(0,[5664,9341,4940,9774,2888,179],function(){return e(e.s=51198)}),_N_E=e.O()}]);