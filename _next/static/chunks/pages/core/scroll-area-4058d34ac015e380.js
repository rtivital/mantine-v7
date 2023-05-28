(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5282],{92874:function(e,o,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/scroll-area",function(){return r(5214)}])},5214:function(e,o,r){"use strict";r.r(o),r.d(o,{default:function(){return N}});var t=r(85893),n=r(11151),l=r(34940),a=r(25263),i=r(67294),s=r(94873),c=r(45906),u=r(77048);function d(){return i.createElement(i.Fragment,null,i.createElement(u.x,{size:"xl",fw:700},"Charizard (Pok\xe9mon)"),i.createElement(u.x,{color:"dimmed"},"Charizard description from Bulbapedia"),i.createElement(u.x,{size:"sm",mt:"md"},"Charizard is a draconic, bipedal Pok\xe9mon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the top of the third joint of each wing. A single wing-finger is visible through the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable flame."),i.createElement(u.x,{size:"sm",mt:"md"},"As Mega Charizard X, its body and legs are more physically fit, though its arms remain thin. Its skin turns black with a sky-blue underside and soles. Two spikes with blue tips curve upward from the front and back of each shoulder, while the tips of its horns sharpen, turn blue, and curve slightly upward. Its brow and claws are larger, and its eyes are now red. It has two small, fin-like spikes under each horn and two more down its lower neck. The finger disappears from the wing membrane, and the lower edges are divided into large, rounded points. The third joint of each wing-arm is adorned with a claw-like spike. Mega Charizard X breathes blue flames out the sides of its mouth, and the flame on its tail now burns blue. It is said that its new power turns it black and creates more intense flames."))}let m=`
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea h={250}{{props}}>
      {/* ... content */}
    </ScrollArea>
  );
}
`,h={type:"configurator",component:function(e){return i.createElement(s.x,{maw:400,mx:"auto"},i.createElement(c.x,Object.assign({h:250},e),i.createElement(d,null)))},code:m,controls:[{prop:"type",type:"select",data:[{value:"hover",label:"Hover"},{value:"auto",label:"Auto"},{value:"always",label:"Always"},{value:"scroll",label:"Scroll"},{value:"never",label:"Never"}],initialValue:"hover",libraryValue:"hover"},{prop:"offsetScrollbars",type:"boolean",libraryValue:!1,initialValue:!1},{prop:"scrollbarSize",type:"number",min:2,max:20,step:2,libraryValue:10,initialValue:10},{prop:"scrollHideDelay",type:"number",min:0,max:6e3,step:500,libraryValue:1e3,initialValue:1e3}]},p=`
import { ScrollArea, Box } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea w={300} h={200}>
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
`,b={type:"code",component:function(){return i.createElement(c.x,{w:300,h:200},i.createElement(s.x,{w:600},i.createElement(d,null)))},centered:!0,code:p};var x=r(25943),f=r(2857);let w=`
import { useState } from 'react';
import { Text, ScrollArea, Code, Box } from '@mantine/core';

function Demo() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

  return (
    <>
      <ScrollArea
        w={300}
        h={200}
        onScrollPositionChange={onScrollPositionChange}
      >
        <Box w={600}>
          {/* ... content */}
        </Box>
      </ScrollArea>

      <Text>
        Scroll position: <Code>{\`{ x: \${scrollPosition.x}, y: \${scrollPosition.y} }\`}</Code>
      </Text>
    </>
  );
}
`,g={type:"code",component:function(){let[e,o]=(0,i.useState)({x:0,y:0});return i.createElement(x.K,{align:"center"},i.createElement(c.x,{w:300,h:200,onScrollPositionChange:o},i.createElement(s.x,{w:600},i.createElement(d,null))),i.createElement(u.x,null,"Scroll position: ",i.createElement(f.E,null,`{ x: ${e.x}, y: ${e.y} }`)))},code:w};var v=r(74378),y=r(43406);let j=`
import { useRef } from 'react';
import { ScrollArea, Button, Stack, Group } from '@mantine/core';

function Demo() {
  const viewport = useRef<HTMLDivElement>(null);

  const scrollToBottom = () =>
    viewport.current!.scrollTo({ top: viewport.current!.scrollHeight, behavior: 'smooth' });

  const scrollToCenter = () =>
    viewport.current!.scrollTo({ top: viewport.current!.scrollHeight / 2, behavior: 'smooth' });

  const scrollToTop = () => viewport.current!.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Stack align="center">
      <ScrollArea w={300} h={200} viewportRef={viewport}>
        {/* ... content */}
      </ScrollArea>

      <Group justify="center">
        <Button onClick={scrollToBottom} variant="outline">
          Scroll to bottom
        </Button>
        <Button onClick={scrollToCenter} variant="outline">
          Scroll to center
        </Button>
        <Button onClick={scrollToTop} variant="outline">
          Scroll to top
        </Button>
      </Group>
    </Stack>
  );
}
`,S={type:"code",component:function(){let e=(0,i.useRef)(null),o=()=>e.current.scrollTo({top:e.current.scrollHeight,behavior:"smooth"}),r=()=>e.current.scrollTo({top:e.current.scrollHeight/2,behavior:"smooth"}),t=()=>e.current.scrollTo({top:0,behavior:"smooth"});return i.createElement(x.K,{align:"center"},i.createElement(c.x,{w:300,h:200,viewportRef:e},i.createElement(d,null)),i.createElement(v.Z,{justify:"center"},i.createElement(y.z,{onClick:o,variant:"outline"},"Scroll to bottom"),i.createElement(y.z,{onClick:r,variant:"outline"},"Scroll to center"),i.createElement(y.z,{onClick:t,variant:"outline"},"Scroll to top")))},code:j};var k={scrollbar:"mantine-rUYw6F-",thumb:"mantine-c1tUz1t",corner:"mantine-2RjwQm-"};let E=`
import { ScrollArea, Box } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ScrollArea w={300} h={200} type="always" offsetScrollbars classNames={classes}>
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
`,A=`
.scrollbar {
  &,
  &:hover {
    background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  }

  &[data-orientation='vertical'] .thumb {
    background-color: var(--mantine-color-red-6);
  }

  &[data-orientation='horizontal'] .thumb {
    background-color: var(--mantine-color-blue-6);
  }
}

.corner {
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  opacity: 1;
}
`,C={type:"code",component:function(){return i.createElement(c.x,{w:300,h:200,type:"always",offsetScrollbars:!0,classNames:k},i.createElement(s.x,{w:600},i.createElement(d,null)))},centered:!0,code:[{fileName:"Demo.tsx",code:E,language:"tsx"},{fileName:"Demo.module.css",code:A,language:"css"}]};var z=r(22188);let T={min:-1/0,max:1/0},B=`
import { useCounter } from '@mantine/hooks';
import { ScrollArea, Button, Group } from '@mantine/core';

const lorem =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!';

function Demo() {
  const [count, handlers] = useCounter(3, { min: 0, max: 10 });
  const content = Array(count)
    .fill(0)
    .map((_, index) => <p key={index}>{lorem}</p>);

  return (
    <>
      <ScrollArea.Autosize mah={300} maw={400} mx="auto">
        {content}
      </ScrollArea.Autosize>

      <Group justify="center" mt="md">
        <Button variant="outline" color="red" onClick={handlers.decrement}>
          Remove paragraph
        </Button>
        <Button variant="outline" onClick={handlers.increment}>
          Add paragraph
        </Button>
      </Group>
    </>
  );
}
`,D={type:"code",component:function(){let[e,o]=function(e=0,o){let{min:r,max:t}=Object.assign(Object.assign({},T),o),[n,l]=(0,i.useState)((0,z.u)(e,r,t)),a=()=>l(e=>(0,z.u)(e+1,r,t)),s=()=>l(e=>(0,z.u)(e-1,r,t)),c=e=>l((0,z.u)(e,r,t)),u=()=>l((0,z.u)(e,r,t));return[n,{increment:a,decrement:s,set:c,reset:u}]}(3,{min:0,max:10}),r=Array(e).fill(0).map((e,o)=>i.createElement("p",{key:o},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!"));return i.createElement(i.Fragment,null,i.createElement(c.x.Autosize,{mah:300,maw:400,mx:"auto"},r),i.createElement(v.Z,{justify:"center",mt:"md"},i.createElement(y.z,{variant:"outline",color:"red",onClick:o.decrement},"Remove paragraph"),i.createElement(y.z,{variant:"outline",onClick:o.increment},"Add paragraph")))},code:B},P=(0,l.A)(a.us.ScrollArea);function _(e){let o=Object.assign({h2:"h2",p:"p",code:"code",ul:"ul",li:"li"},(0,n.ah)(),e.components),{Demo:r}=o;return r||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"ScrollArea"})," component supports the following props:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"type"})," defines scrollbars behavior:","\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"hover"})," – scrollbars are visible on hover"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"scroll"})," – scrollbars are visible on scroll"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"auto"})," – similar to ",(0,t.jsx)(o.code,{children:"overflow: auto"})," – scrollbars are always visible when the content is overflowing"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"always"})," – same as ",(0,t.jsx)(o.code,{children:"auto"}),", but scrollbars are always visible regardless of whether the content is overflowing"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"never"})," – scrollbars are always hidden"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"offsetScrollbars"})," – offset scrollbars with padding"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"scrollbarSize"})," – scrollbar size, controls scrollbar and thumb width/height"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"scrollHideDelay"})," – delay in ms to hide scrollbars, applicable only when type is ",(0,t.jsx)(o.code,{children:"hover"})," or ",(0,t.jsx)(o.code,{children:"scroll"})]}),"\n"]}),"\n",(0,t.jsx)(r,{data:h}),"\n",(0,t.jsx)(o.h2,{id:"horizontal-scrollbars",children:"Horizontal scrollbars"}),"\n",(0,t.jsx)(r,{data:b}),"\n",(0,t.jsx)(o.h2,{id:"subscribe-to-scroll-position-changes",children:"Subscribe to scroll position changes"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"onScrollPositionChange"})," function to subscribe to scroll position changes,\nit will be called each time user scrolls with x and y coordinates:"]}),"\n",(0,t.jsx)(r,{data:g}),"\n",(0,t.jsx)(o.h2,{id:"scroll-to-position",children:"Scroll to position"}),"\n",(0,t.jsxs)(o.p,{children:["To programmatically scroll to any position,\nget viewport element ref with ",(0,t.jsx)(o.code,{children:"viewportRef"})," prop and call ",(0,t.jsx)(o.code,{children:"scrollTo"})," method:"]}),"\n",(0,t.jsx)(r,{data:S}),"\n",(0,t.jsx)(o.h2,{id:"styles-api",children:"Styles API"}),"\n",(0,t.jsx)(r,{data:C}),"\n",(0,t.jsx)(o.h2,{id:"scrollareaautosize",children:"ScrollArea.Autosize"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"ScrollArea.Autosize"})," component allows to create scrollable containers when given ",(0,t.jsx)(o.code,{children:"maxHeight"})," is reached:"]}),"\n",(0,t.jsx)(r,{data:D})]})}var N=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(P,Object.assign({},e,{children:(0,t.jsx)(_,e)}))}}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=92874)}),_N_E=e.O()}]);