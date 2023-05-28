(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1583],{51198:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/divider",function(){return i(42747)}])},42747:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return S}});var n=i(85893),r=i(11151),l=i(34940),a=i(25263),o=i(67294),s=i(59312),c={root:"mantine-uP4C4WW",label:"mantine--fjjU6c"},m=i(75144),d=i(35577),x=i(89123),v=i(94873),u=i(95553),b=i(94975),h=i(71350);let E={size:"xs",orientation:"horizontal"},f=(0,u.Z)((e,{color:t,variant:i,size:n})=>({root:{"--divider-color":t?(0,b.p)(t,e):void 0,"--divider-border-style":i,"--divider-size":(0,h.ap)(n,"divider-size")}})),p=(0,m.d)((e,t)=>{let i=(0,d.w)("Divider",E,e),{classNames:n,className:r,style:l,styles:a,unstyled:m,vars:u,color:b,orientation:h,label:p,labelPosition:y}=i,D=(0,s._T)(i,["classNames","className","style","styles","unstyled","vars","color","orientation","label","labelPosition"]),z=(0,x.y)({name:"Divider",classes:c,props:i,className:r,style:l,classNames:n,styles:a,unstyled:m,vars:u,varsResolver:f});return o.createElement(v.x,Object.assign({ref:t,mod:{orientation:h,"with-label":!!p}},z("root"),D,{role:"separator"}),p&&o.createElement(v.x,Object.assign({component:"span",mod:{position:y}},z("label")),p))});p.displayName="@mantine/core/Divider";let y=`
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
`,D={type:"code",code:y,component:function(){return o.createElement(o.Fragment,null,o.createElement(p,{my:"sm"}),o.createElement(p,{my:"sm",variant:"dashed"}),o.createElement(p,{my:"sm",variant:"dotted"}))}};var z=i(27854),g=i(46342);let L=`
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
`,j={type:"code",code:L,component:function(){return o.createElement(o.Fragment,null,o.createElement(p,{my:"xs",label:"Label on the left",labelPosition:"left"}),o.createElement(p,{my:"xs",label:"Label in the center",labelPosition:"center"}),o.createElement(p,{my:"xs",label:"Label on the right",labelPosition:"right"}),o.createElement(p,{my:"xs",variant:"dashed",labelPosition:"center",label:o.createElement(o.Fragment,null,o.createElement(z.Z,{size:12}),o.createElement(v.x,{ml:5},"Search results"))}),o.createElement(p,{my:"xs",label:o.createElement(g.e,{href:"https://mantine.dev",target:"_blank",inherit:!0},"Link label")}))}},T=`
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
`,_={type:"code",code:T,component:function(){return o.createElement(o.Fragment,null,o.createElement(p,{my:"xs",size:"xs"}),o.createElement(p,{my:"xs",size:"sm"}),o.createElement(p,{my:"xs",size:"md"}),o.createElement(p,{my:"xs",size:"lg"}),o.createElement(p,{my:"xs",size:"xl"}),o.createElement(p,{my:"xs",size:10}))}};var P=i(74378),w=i(77048);let k=`
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
`,N={type:"code",code:k,component:function(){return o.createElement(P.Z,null,o.createElement(w.x,null,"Label"),o.createElement(p,{orientation:"vertical"}),o.createElement(w.x,null,"Label"),o.createElement(p,{size:"sm",orientation:"vertical"}),o.createElement(w.x,null,"Label"),o.createElement(p,{size:"md",orientation:"vertical"}),o.createElement(w.x,null,"Label"),o.createElement(p,{size:"lg",orientation:"vertical"}),o.createElement(w.x,null,"Label"),o.createElement(p,{size:"xl",orientation:"vertical"}),o.createElement(w.x,null,"Label"))}},O=(0,l.A)(a.us.Divider);function F(e){let t=Object.assign({h2:"h2"},(0,r.ah)(),e.components),{Demo:i}=t;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(i,{data:D}),"\n",(0,n.jsx)(t.h2,{id:"with-label",children:"With label"}),"\n",(0,n.jsx)(i,{data:j}),"\n",(0,n.jsx)(t.h2,{id:"sizes",children:"Sizes"}),"\n",(0,n.jsx)(i,{data:_}),"\n",(0,n.jsx)(t.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,n.jsx)(i,{data:N})]})}var S=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(O,Object.assign({},e,{children:(0,n.jsx)(F,e)}))}}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=51198)}),_N_E=e.O()}]);