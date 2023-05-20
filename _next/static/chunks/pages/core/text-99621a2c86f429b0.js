(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7014],{23038:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/text",function(){return n(11415)}])},11415:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(85893),i=n(11151),a=n(34940),o=n(25263),l=n(67294),s=n(77048);let c=`
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
`,p={type:"code",code:c,component:function(){return l.createElement(l.Fragment,null,l.createElement(s.x,{size:"xs"},"Extra small text"),l.createElement(s.x,{size:"sm"},"Small text"),l.createElement(s.x,{size:"md"},"Default text"),l.createElement(s.x,{size:"lg"},"Large text"),l.createElement(s.x,{size:"xl"},"Extra large text"),l.createElement(s.x,{fw:500},"Semibold"),l.createElement(s.x,{fw:700},"Bold"),l.createElement(s.x,{fs:"italic"},"Italic"),l.createElement(s.x,{td:"underline"},"Underlined"),l.createElement(s.x,{td:"line-through"},"Strikethrough"),l.createElement(s.x,{c:"dimmed"},"Dimmed text"),l.createElement(s.x,{c:"blue"},"Blue text"),l.createElement(s.x,{c:"teal.4"},"Teal 4 text"),l.createElement(s.x,{tt:"uppercase"},"Uppercase"),l.createElement(s.x,{tt:"capitalize"},"capitalized text"),l.createElement(s.x,{ta:"center"},"Aligned to center"),l.createElement(s.x,{ta:"right"},"Aligned to right"))}};var m=n(55127);let u=e=>`
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
`,d={type:"configurator",component:function(e){return l.createElement(s.x,{size:"xl",fw:900,variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree}},"Gradient Text")},code:u,centered:!0,controls:m.P};var x=n(94873),h=Object.defineProperty,f=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,T=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&T(e,n,t[n]);if(f)for(var n of f(t))y.call(t,n)&&T(e,n,t[n]);return e};let w=`
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
`,j={type:"configurator",component:function(e){return l.createElement(x.x,{w:300},l.createElement(s.x,b({},e),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?"))},code:w,centered:!0,controls:[{type:"segmented",prop:"truncate",data:["start","end"],initialValue:"end",libraryValue:null}]};var v=Object.defineProperty,E=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,O=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t)=>{for(var n in t||(t={}))P.call(t,n)&&O(e,n,t[n]);if(E)for(var n of E(t))S.call(t,n)&&O(e,n,t[n]);return e};let z=`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text{{props}}>
      {/* Text content */}
    </Text>
  );
}
`,q={type:"configurator",component:function(e){return l.createElement(x.x,{maw:400,mx:"auto"},l.createElement(s.x,_({},e),"From Bulbapedia: Bulbasaur is a small, quadrupedal Pok\xe9mon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within."))},code:z,controls:[{prop:"size",type:"size",libraryValue:"md",initialValue:"md"},{prop:"lineClamp",type:"number",initialValue:4,libraryValue:null,min:1,max:10,step:1}]};var k=n(12705);let D=`
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
`,N={type:"code",code:D,component:function(){return l.createElement(s.x,{lineClamp:3,component:"div"},l.createElement(k.l,null,l.createElement("h3",{style:{marginTop:0}},"Line clamp with TypographyStylesProvider"),l.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae perspiciatis.")))}};var V=n(73459);let L=`
import { Text, Title } from '@mantine/core';

function Demo() {
  return <Title order={3}>Title in which you want to <Text span c="blue" inherit>highlight</Text> something</Title>;
}
`,B={type:"code",component:function(){return l.createElement(V.D,{order:3},"Title in which you want to"," ",l.createElement(s.x,{span:!0,c:"blue",inherit:!0},"highlight")," ","something")},code:L},I=(0,a.A)(o.us.Text);function U(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,i.ah)(),e.components),{Demo:n,Gradient:a,Polymorphic:o}=t;return n||F("Demo",!0),a||F("Gradient",!0),o||F("Polymorphic",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:p}),"\n",(0,r.jsx)(a,{component:"Text"}),"\n",(0,r.jsx)(n,{data:d}),"\n",(0,r.jsx)(t.h2,{id:"truncate",children:"Truncate"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"truncate"})," prop to add ",(0,r.jsx)(t.code,{children:"text-overflow: ellipsis"})," styles:"]}),"\n",(0,r.jsx)(n,{data:j}),"\n",(0,r.jsx)(t.h2,{id:"line-clamp",children:"Line clamp"}),"\n",(0,r.jsxs)(t.p,{children:["Specify maximum number of lines with ",(0,r.jsx)(t.code,{children:"lineClamp"})," prop. This option uses ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp",children:"-webkit-line-clamp"}),"\nCSS property (",(0,r.jsx)(t.a,{href:"https://caniuse.com/css-line-clamp",children:"caniuse"}),"). Note that ",(0,r.jsx)(t.code,{children:"padding-bottom"})," cannot be set on text element:"]}),"\n",(0,r.jsx)(n,{data:q}),"\n",(0,r.jsxs)(t.p,{children:["Line clamp can also be used with any children (not only strings), for example with ",(0,r.jsx)(t.a,{href:"/core/typography-styles-provider/",children:"TypographyStylesProvider"}),":"]}),"\n",(0,r.jsx)(n,{data:N}),"\n",(0,r.jsx)(t.h2,{id:"inherit-styles",children:"Inherit styles"}),"\n",(0,r.jsxs)(t.p,{children:["Text always applies font-size, font-family and line-height styles,\nbut in some cases this is not a desired behavior. To force Text to inherit parent\nstyles set ",(0,r.jsx)(t.code,{children:"inherit"})," prop. For example, highlight part of ",(0,r.jsx)(t.a,{href:"/core/title/",children:"Title"}),":"]}),"\n",(0,r.jsx)(n,{data:B}),"\n",(0,r.jsx)(o,{defaultElement:"p",changeToElement:"a",component:"Text"}),"\n",(0,r.jsx)(t.h2,{id:"span-prop",children:"span prop"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"span"})," prop as a shorthand for ",(0,r.jsx)(t.code,{children:'component="span"'}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { Text } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <Text span>Same as below</Text>\n      <Text component=\"span\">Same as above</Text>\n    </>\n  );\n}\n"})})]})}var C=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(I,Object.assign({},e,{children:(0,r.jsx)(U,e)}))};function F(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},12705:function(e,t,n){"use strict";n.d(t,{l:function(){return g}});var r=n(67294),i={root:"mantine-yPad50m"},a=n(75144),o=n(35577),l=n(89123),s=n(94873),c=Object.defineProperty,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))u.call(t,n)&&d(e,n,t[n]);return e},h=(e,t)=>{var n={};for(var r in e)m.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))0>t.indexOf(r)&&u.call(e,r)&&(n[r]=e[r]);return n};let f={},g=(0,a.d)((e,t)=>{let n=(0,o.w)("TypographyStylesProvider",f,e),{classNames:a,className:c,style:p,styles:m,unstyled:u}=n,d=h(n,["classNames","className","style","styles","unstyled"]),g=(0,l.y)({name:"TypographyStylesProvider",classes:i,props:n,className:c,style:p,classNames:a,styles:m,unstyled:u});return r.createElement(s.x,x(x({ref:t},g("root")),d))});g.displayName="@mantine/core/TypographyStylesProvider"},55127:function(e,t,n){"use strict";n.d(t,{P:function(){return r}});let r=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]}},function(e){e.O(0,[5664,9341,4940,9774,2888,179],function(){return e(e.s=23038)}),_N_E=e.O()}]);