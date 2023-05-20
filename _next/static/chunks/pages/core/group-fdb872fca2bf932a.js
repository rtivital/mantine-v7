(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5402],{96890:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/group",function(){return n(25894)}])},25894:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(85893),o=n(11151),a=n(34940),i=n(25263),l=n(71193),c=n(67294),u=n(94873),d=n(77048),s=n(74378),p=n(43406);let h=`
import { Group, Button, Box, Text } from '@mantine/core';

function Demo() {
  return (
    <Box style={{ overflow: 'hidden' }}>
      <Box maw={500} p="md" mx="auto" bg="var(--mantine-color-blue-light)">
        <Text size="sm" mb={5}>
          preventGrowOverflow: true \u2013 each child width is always limited to 33% of parent width
          (since there are 3 children)
        </Text>

        <Group grow wrap="nowrap">
          <Button variant="default">First button</Button>
          <Button variant="default">Second button with large content</Button>
          <Button variant="default">Third button</Button>
        </Group>

        <Text size="sm" mb={5} mt="md">
          preventGrowOverflow: false \u2013 children will grow based on their content, they can take more
          than 33% of parent width
        </Text>

        <Group grow preventGrowOverflow={false} wrap="nowrap">
          <Button variant="default">First button</Button>
          <Button variant="default">Second button with large content</Button>
          <Button variant="default">Third button</Button>
        </Group>
      </Box>
    </Box>
  );
}
`,f={type:"code",component:function(){return c.createElement(u.x,{style:{overflow:"hidden"}},c.createElement(u.x,{maw:500,p:"md",mx:"auto",bg:"var(--mantine-color-blue-light)"},c.createElement(d.x,{size:"sm",mb:5},"preventGrowOverflow: true – each child width is always limited to 33% of parent width (since there are 3 children)"),c.createElement(s.Z,{grow:!0,wrap:"nowrap"},c.createElement(p.z,{variant:"default"},"First button"),c.createElement(p.z,{variant:"default"},"Second button with large content"),c.createElement(p.z,{variant:"default"},"Third button")),c.createElement(d.x,{size:"sm",mb:5,mt:"md"},"preventGrowOverflow: false – children will grow based on their content, they can take more than 33% of parent width"),c.createElement(s.Z,{grow:!0,preventGrowOverflow:!1,wrap:"nowrap"},c.createElement(p.z,{variant:"default"},"First button"),c.createElement(p.z,{variant:"default"},"Second button with large content"),c.createElement(p.z,{variant:"default"},"Third button"))))},code:h},m=(0,a.A)(i.us.Group);function w(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",strong:"strong",pre:"pre"},(0,o.ah)(),e.components),{Demo:n,FlexboxGapSupport:a}=t;return n||x("Demo",!0),a||x("FlexboxGapSupport",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Group"})," is a horizontal flex container. If you need a vertical flex container, use ",(0,r.jsx)(t.a,{href:"/core/stack",children:"Stack"}),"\ncomponent instead. If you need to have full control over flex container properties, use ",(0,r.jsx)(t.a,{href:"/core/flex",children:"Flex"})," component."]}),"\n",(0,r.jsx)(n,{data:l.j}),"\n",(0,r.jsx)(t.h2,{id:"preventgrowoverflow",children:"preventGrowOverflow"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"preventGrowOverflow"})," prop allows you to control how ",(0,r.jsx)(t.code,{children:"Group"})," children should behave when there is not enough\nspace to fit them all on one line. By default, children are not allowed to take more space than\n",(0,r.jsx)(t.code,{children:"(1 / children.length) * 100%"})," of parent width (",(0,r.jsx)(t.code,{children:"preventGrowOverflow"})," is set to ",(0,r.jsx)(t.code,{children:"true"}),"). To change\nthis behavior, set ",(0,r.jsx)(t.code,{children:"preventGrowOverflow"})," to ",(0,r.jsx)(t.code,{children:"false"})," and children will be allowed to grow and take\nas much space as they need."]}),"\n",(0,r.jsx)(n,{data:f}),"\n",(0,r.jsx)(t.h2,{id:"group-children",children:"Group children"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"!important"})," ",(0,r.jsx)(t.code,{children:"Group"})," works correctly only with React elements.\nStrings, numbers, fragments may have incorrect styles if ",(0,r.jsx)(t.code,{children:"grow"})," prop is set:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"// Invalid Group usage, do not do this\nimport { Group } from '@mantine/core';\n\nfunction InvalidDemo() {\n  return (\n    <Group grow>\n      First string\n      <>\n        <div>element inside fragment</div>\n        <div>another inside fragment</div>\n      </>\n      {20}\n    </Group>\n  );\n}\n"})}),"\n",(0,r.jsx)(a,{component:"Group"})]})}var v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(m,Object.assign({},e,{children:(0,r.jsx)(w,e)}))};function x(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},71193:function(e,t,n){"use strict";n.d(t,{j:function(){return h}});var r=n(67294),o=n(74378),a=n(43406),i=Object.defineProperty,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&d(e,n,t[n]);return e};let p=`
import { Group, Button } from '@mantine/core';

function Demo() {
  return (
    <Group{{props}}>
      <Button variant="default">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
    </Group>
  );
}
`,h={type:"configurator",component:function(e){return r.createElement(o.Z,s({},e),r.createElement(a.z,{variant:"default"},"First"),r.createElement(a.z,{variant:"default"},"Second"),r.createElement(a.z,{variant:"default"},"Third"))},code:p,controls:[{type:"select",prop:"justify",data:["flex-start","center","space-between","flex-end"],initialValue:"flex-start",libraryValue:"flex-start"},{type:"size",prop:"gap",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"grow",initialValue:!1,libraryValue:!1}]}}},function(e){e.O(0,[5664,9341,4940,9774,2888,179],function(){return e(e.s=96890)}),_N_E=e.O()}]);