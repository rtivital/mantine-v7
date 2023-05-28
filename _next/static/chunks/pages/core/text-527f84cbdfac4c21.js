(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7014],{23038:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/text",function(){return n(11415)}])},11415:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var i=n(85893),r=n(11151),a=n(34940),o=n(25263),s=n(67294),l=n(77048);let c=`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="xs">Extra small text</Text>
      <Text size="sm">Small text</Text>
      <Text size="md">Default text</Text>
      <Text size="lg">Large text</Text>
      <Text size="xl">Extra large text</Text>
      <Text fw={500}>Semibold</Text>
      <Text fw={700}>Bold</Text>
      <Text fs="italic">Italic</Text>
      <Text td="underline">Underlined</Text>
      <Text td="line-through">Strikethrough</Text>
      <Text c="dimmed">Dimmed text</Text>
      <Text c="blue">Blue text</Text>
      <Text c="teal.4">Teal 4 text</Text>
      <Text tt="uppercase">Uppercase</Text>
      <Text tt="capitalize">capitalized text</Text>
      <Text ta="center">Aligned to center</Text>
      <Text ta="right">Aligned to right</Text>
    </>
  );
}
`,m={type:"code",code:c,component:function(){return s.createElement(s.Fragment,null,s.createElement(l.x,{size:"xs"},"Extra small text"),s.createElement(l.x,{size:"sm"},"Small text"),s.createElement(l.x,{size:"md"},"Default text"),s.createElement(l.x,{size:"lg"},"Large text"),s.createElement(l.x,{size:"xl"},"Extra large text"),s.createElement(l.x,{fw:500},"Semibold"),s.createElement(l.x,{fw:700},"Bold"),s.createElement(l.x,{fs:"italic"},"Italic"),s.createElement(l.x,{td:"underline"},"Underlined"),s.createElement(l.x,{td:"line-through"},"Strikethrough"),s.createElement(l.x,{c:"dimmed"},"Dimmed text"),s.createElement(l.x,{c:"blue"},"Blue text"),s.createElement(l.x,{c:"teal.4"},"Teal 4 text"),s.createElement(l.x,{tt:"uppercase"},"Uppercase"),s.createElement(l.x,{tt:"capitalize"},"capitalized text"),s.createElement(l.x,{ta:"center"},"Aligned to center"),s.createElement(l.x,{ta:"right"},"Aligned to right"))}};var p=n(55127);let u=e=>`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text
      size="xl"
      fw={900}
      variant="gradient"
      gradient={{ from: '${e.gradientFrom}', to: '${e.gradientTo}', deg: ${e.gradientDegree} }}
    >
      Gradient Text
    </Text>
  );
}
`,d={type:"configurator",component:function(e){return s.createElement(l.x,{size:"xl",fw:900,variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree}},"Gradient Text")},code:u,centered:!0,controls:p.P};var x=n(94873);let h=`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Box w={300}>
      <Text{{props}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
        necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
        perspiciatis excepturi iste sint itaque sunt laborum. Nihil?
      </Text>
    </Box>
  );
}
`,g={type:"configurator",component:function(e){return s.createElement(x.x,{w:300},s.createElement(l.x,Object.assign({},e),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?"))},code:h,centered:!0,controls:[{type:"segmented",prop:"truncate",data:["start","end"],initialValue:"end",libraryValue:null}]},T=`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text{{props}}>
      {/* Text content */}
    </Text>
  );
}
`,f={type:"configurator",component:function(e){return s.createElement(x.x,{maw:400,mx:"auto"},s.createElement(l.x,Object.assign({},e),"From Bulbapedia: Bulbasaur is a small, quadrupedal Pok\xe9mon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within."))},code:T,controls:[{prop:"size",type:"size",libraryValue:"md",initialValue:"md"},{prop:"lineClamp",type:"number",initialValue:4,libraryValue:null,min:1,max:10,step:1}]};var y=n(12705);let b=`
import { TypographyStylesProvider, Text } from '@mantine/core';

function Demo() {
  return (
    <Text lineClamp={3} component="div">
      <TypographyStylesProvider>
        <h3>Line clamp with TypographyStylesProvider</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed
          corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis
          non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum
          veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae
          perspiciatis.
        </p>
      </TypographyStylesProvider>
    </Text>
  );
}
`,w={type:"code",code:b,component:function(){return s.createElement(l.x,{lineClamp:3,component:"div"},s.createElement(y.l,null,s.createElement("h3",{style:{marginTop:0}},"Line clamp with TypographyStylesProvider"),s.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae perspiciatis.")))}};var E=n(73459);let j=`
import { Text, Title } from '@mantine/core';

function Demo() {
  return <Title order={3}>Title in which you want to <Text span c="blue" inherit>highlight</Text> something</Title>;
}
`,v={type:"code",component:function(){return s.createElement(E.D,{order:3},"Title in which you want to"," ",s.createElement(l.x,{span:!0,c:"blue",inherit:!0},"highlight")," ","something")},code:j},_=(0,a.A)(o.us.Text);function S(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,r.ah)(),e.components),{Demo:n,Gradient:a,Polymorphic:o}=t;return n||P("Demo",!0),a||P("Gradient",!0),o||P("Polymorphic",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n,{data:m}),"\n",(0,i.jsx)(a,{component:"Text"}),"\n",(0,i.jsx)(n,{data:d}),"\n",(0,i.jsx)(t.h2,{id:"truncate",children:"Truncate"}),"\n",(0,i.jsxs)(t.p,{children:["Set ",(0,i.jsx)(t.code,{children:"truncate"})," prop to add ",(0,i.jsx)(t.code,{children:"text-overflow: ellipsis"})," styles:"]}),"\n",(0,i.jsx)(n,{data:g}),"\n",(0,i.jsx)(t.h2,{id:"line-clamp",children:"Line clamp"}),"\n",(0,i.jsxs)(t.p,{children:["Specify maximum number of lines with ",(0,i.jsx)(t.code,{children:"lineClamp"})," prop. This option uses ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp",children:"-webkit-line-clamp"}),"\nCSS property (",(0,i.jsx)(t.a,{href:"https://caniuse.com/css-line-clamp",children:"caniuse"}),"). Note that ",(0,i.jsx)(t.code,{children:"padding-bottom"})," cannot be set on text element:"]}),"\n",(0,i.jsx)(n,{data:f}),"\n",(0,i.jsxs)(t.p,{children:["Line clamp can also be used with any children (not only strings), for example with ",(0,i.jsx)(t.a,{href:"/core/typography-styles-provider/",children:"TypographyStylesProvider"}),":"]}),"\n",(0,i.jsx)(n,{data:w}),"\n",(0,i.jsx)(t.h2,{id:"inherit-styles",children:"Inherit styles"}),"\n",(0,i.jsxs)(t.p,{children:["Text always applies font-size, font-family and line-height styles,\nbut in some cases this is not a desired behavior. To force Text to inherit parent\nstyles set ",(0,i.jsx)(t.code,{children:"inherit"})," prop. For example, highlight part of ",(0,i.jsx)(t.a,{href:"/core/title/",children:"Title"}),":"]}),"\n",(0,i.jsx)(n,{data:v}),"\n",(0,i.jsx)(o,{defaultElement:"p",changeToElement:"a",component:"Text"}),"\n",(0,i.jsx)(t.h2,{id:"span-prop",children:"span prop"}),"\n",(0,i.jsxs)(t.p,{children:["Use ",(0,i.jsx)(t.code,{children:"span"})," prop as a shorthand for ",(0,i.jsx)(t.code,{children:'component="span"'}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import { Text } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <Text span>Same as below</Text>\n      <Text component=\"span\">Same as above</Text>\n    </>\n  );\n}\n"})})]})}var z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(_,Object.assign({},e,{children:(0,i.jsx)(S,e)}))};function P(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},12705:function(e,t,n){"use strict";n.d(t,{l:function(){return p}});var i=n(59312),r=n(67294),a={root:"mantine-yPad50m"},o=n(75144),s=n(35577),l=n(89123),c=n(94873);let m={},p=(0,o.d)((e,t)=>{let n=(0,s.w)("TypographyStylesProvider",m,e),{classNames:o,className:p,style:u,styles:d,unstyled:x}=n,h=(0,i._T)(n,["classNames","className","style","styles","unstyled"]),g=(0,l.y)({name:"TypographyStylesProvider",classes:a,props:n,className:p,style:u,classNames:o,styles:d,unstyled:x});return r.createElement(c.x,Object.assign({ref:t},g("root"),h))});p.displayName="@mantine/core/TypographyStylesProvider"},55127:function(e,t,n){"use strict";n.d(t,{P:function(){return i}});let i=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=23038)}),_N_E=e.O()}]);