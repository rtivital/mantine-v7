(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8096],{92446:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/tooltip",function(){return o(78471)}])},78471:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return S}});var n=o(85893),i=o(11151),r=o(34940),l=o(25263),a=o(67294),s=o(41283),c=o(43406);let p=`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}
`,d={type:"code",component:function(){return a.createElement(s.u,{label:"Tooltip"},a.createElement(c.z,{variant:"outline"},"Button with tooltip"))},centered:!0,code:p},u=`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip"{{props}}>
      <Button variant="outline">
        With tooltip
      </Button>
    </Tooltip>
  );
}
`,h={type:"configurator",component:function(e){return a.createElement(s.u,Object.assign({label:"Tooltip"},e),a.createElement(c.z,{variant:"outline"},"With tooltip"))},code:u,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"}]};var m=o(44982);let f=`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip" opened{{props}}>
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}
`,b={type:"configurator",component:function(e){return a.createElement(s.u,Object.assign({label:"Tooltip",opened:!0},e),a.createElement(c.z,{variant:"outline"},"Button with tooltip"))},code:f,centered:!0,controls:[{type:"select",prop:"position",initialValue:"top",data:m.c,libraryValue:null},{type:"number",prop:"offset",initialValue:5,libraryValue:null,min:-50,max:50}]},x=e=>`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      position="${e.position}"
      opened
      label="Tooltip"
      offset={{ mainAxis: ${e.mainAxis}, crossAxis: ${e.crossAxis} }}
    >
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`,g={type:"configurator",component:function(e){return a.createElement(s.u,{position:e.position,opened:!0,label:"Tooltip",offset:{mainAxis:e.mainAxis,crossAxis:e.crossAxis}},a.createElement(c.z,null,"Button with tooltip"))},code:x,centered:!0,controls:[{type:"select",prop:"position",initialValue:"top",data:m.c,libraryValue:null},{type:"number",prop:"mainAxis",initialValue:5,libraryValue:null,min:-50,max:50},{type:"number",prop:"crossAxis",initialValue:0,libraryValue:null,min:-50,max:50}]},T=`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip{{props}} label="Tooltip" withArrow opened position="top-start">
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}
`,w={type:"configurator",component:function(e){return a.createElement(s.u,Object.assign({label:"Tooltip",withArrow:!0,opened:!0,position:"top-start"},e),a.createElement(c.z,{variant:"outline"},"Button with tooltip"))},code:T,centered:!0,controls:[{type:"segmented",prop:"arrowPosition",initialValue:"center",libraryValue:"center",data:["center","side"]},{type:"number",prop:"arrowOffset",initialValue:10,libraryValue:null,min:5,max:50},{type:"number",prop:"arrowSize",initialValue:4,libraryValue:null,min:2,max:8},{type:"number",prop:"arrowRadius",initialValue:0,libraryValue:0,min:0,max:10}]},j=`
import { useState } from 'react';
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(true);

  return (
    <Tooltip label="Ctrl + J" opened={opened}>
      <Button variant="outline" onClick={() => setOpened((o) => !o)}>
        Toggle color scheme
      </Button>
    </Tooltip>
  );
}`,y={type:"code",centered:!0,code:j,component:function(){let[e,t]=(0,a.useState)(!1);return a.createElement(s.u,{label:"Ctrl + J",opened:e},a.createElement(c.z,{variant:"outline",onClick:()=>t(e=>!e)},"Toggle color scheme"))}},v=`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      multiline
      w={220}
      withArrow
      transitionProps={{ duration: 200 }}
      label="Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
    >
      <Button variant="outline">Multiline tooltip</Button>
    </Tooltip>
  );
}
`,B={type:"code",code:v,centered:!0,component:function(){return a.createElement(s.u,{multiline:!0,w:220,withArrow:!0,transitionProps:{duration:200},label:"Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."},a.createElement(c.z,{variant:"outline"},"Multiline tooltip"))}};var E=o(77048),D=o(85880);let k=`
import { Tooltip, Mark, Text } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this
      Pok\xe9mon was hunted close to extinction by those who were after the priceless antlers.{' '}
      <Tooltip inline label="Inline tooltip">
        <Mark>When visiting a junkyard</Mark>
      </Tooltip>
      , you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s
      feathers glow in seven colors depending on the angle at which they are struck by light. These
      feathers are said to bring happiness to the bearers. This Pok\xe9mon is said to live at the foot
      of a rainbow.
    </Text>
  );
}
`,O={type:"code",component:function(){return a.createElement(E.x,null,"Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pok\xe9mon was hunted close to extinction by those who were after the priceless antlers."," ",a.createElement(s.u,{inline:!0,label:"Inline tooltip"},a.createElement(D.v,null,"When visiting a junkyard")),", you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pok\xe9mon is said to live at the foot of a rainbow.")},code:k};var A=o(88826),C=o(74378);let M=`
import { Button, Tooltip, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Tooltip label="Opened after 500ms" openDelay={500}>
        <Button variant="outline">Delay open - 500ms</Button>
      </Tooltip>
      <Tooltip label="Closes after 500ms" closeDelay={500}>
        <Button variant="outline">Delay close - 500ms</Button>
      </Tooltip>
    </Group>
  );
}
`,N={type:"code",code:M,component:function(){return a.createElement(C.Z,{justify:"center"},a.createElement(s.u,{label:"Opened after 500ms",openDelay:500},a.createElement(c.z,{variant:"outline"},"Delay open - 500ms")),a.createElement(s.u,{label:"Closes after 500ms",closeDelay:500},a.createElement(c.z,{variant:"outline"},"Delay close - 500ms")))}},P=`
import { Tooltip, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Group openDelay={500} closeDelay={100}>
      <Group justify="center">
        <Tooltip label="Tooltip 1">
          <Button variant="outline">Button 1</Button>
        </Tooltip>
        <Tooltip label="Tooltip 2">
          <Button variant="outline">Button 2</Button>
        </Tooltip>
        <Tooltip label="Tooltip 3">
          <Button variant="outline">Button 3</Button>
        </Tooltip>
      </Group>
    </Tooltip.Group>
  );
}
`,R={type:"code",component:function(){return a.createElement(s.u.Group,{openDelay:500,closeDelay:100},a.createElement(C.Z,{justify:"center"},a.createElement(s.u,{label:"Tooltip 1"},a.createElement(c.z,{variant:"outline"},"Button 1")),a.createElement(s.u,{label:"Tooltip 2"},a.createElement(c.z,{variant:"outline"},"Button 2")),a.createElement(s.u,{label:"Tooltip 3"},a.createElement(c.z,{variant:"outline"},"Button 3"))))},code:P};var V=o(94873);let _=`
import { Box, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Floating label="Floating tooltip">
      <Box p="xl" bg="var(--mantine-color-blue-light)" style={{ cursor: 'default' }}>
        Hover over the box to see tooltip
      </Box>
    </Tooltip.Floating>
  );
}
`,z={type:"code",component:function(){return a.createElement(s.u.Floating,{label:"Floating tooltip"},a.createElement(V.x,{p:"xl",bg:"var(--mantine-color-blue-light)",style:{cursor:"default"}},"Hover over the box to see tooltip"))},code:_,centered:!0},F=(0,r.A)(l.us.Tooltip);function G(e){let t=Object.assign({h2:"h2",p:"p",strong:"strong",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,i.ah)(),e.components),{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(o,{data:d}),"\n",(0,n.jsx)(t.h2,{id:"tooltip-children",children:"Tooltip children"}),"\n",(0,n.jsxs)(t.p,{children:["Tooltip requires an element or a component as a single child –\nstrings, fragments, numbers and multiple elements/components are not supported and ",(0,n.jsx)(t.strong,{children:"will throw error"}),".\nCustom components must provide a prop to get root element ref,\nall Mantine components support ref out of the box."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { Tooltip, Badge } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <>\n      <Tooltip label="OK">\n        <button>Native button – ok</button>\n      </Tooltip>\n\n      <Tooltip label="OK">\n        <Badge>Mantine component – ok</Badge>\n      </Tooltip>\n\n      <Tooltip label="Throws">Raw string, NOT OK – will throw error</Tooltip>\n\n      {/* Number, NOT OK – will throw error */}\n      <Tooltip label="Throws">{2}</Tooltip>\n\n      <Tooltip label="Throws">\n        <>Fragment, NOT OK, will throw error</>\n      </Tooltip>\n\n      <Tooltip label="Throws">\n        <div>More that one node</div>\n        <div>NOT OK, will throw error</div>\n      </Tooltip>\n    </>\n  );\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"required-ref-prop",children:"Required ref prop"}),"\n",(0,n.jsxs)(t.p,{children:["Custom components that are rendered inside ",(0,n.jsx)(t.code,{children:"Tooltip"})," are required to support ",(0,n.jsx)(t.code,{children:"ref"})," prop:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"// Example of code that WILL NOT WORK\nimport { Tooltip } from '@mantine/core';\n\nfunction MyComponent() {\n  return <div>My component</div>;\n}\n\n// This will not work – MyComponent does not support ref\nfunction Demo() {\n  return (\n    <Tooltip label=\"Does not work\">\n      <MyComponent />\n    </Tooltip>\n  );\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"forwardRef"})," function to forward ref to root element:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"// Example of code that will work\nimport { forwardRef } from 'react';\nimport { Tooltip } from '@mantine/core';\n\nconst MyComponent = forwardRef<HTMLDivElement>((props, ref) => (\n  <div ref={ref} {...props}>\n    My component\n  </div>\n));\n\n// Works correctly – ref is forwarded\nfunction Demo() {\n  return (\n    <Tooltip label=\"Works fine\">\n      <MyComponent />\n    </Tooltip>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"color",children:"Color"}),"\n",(0,n.jsx)(o,{data:h}),"\n",(0,n.jsx)(t.h2,{id:"offset",children:"Offset"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"offset"})," prop to a number to change tooltip position relative to the target element.\nThis way you can control tooltip offset on main axis only."]}),"\n",(0,n.jsx)(o,{data:b}),"\n",(0,n.jsxs)(t.p,{children:["To control offset on both axis, pass object with ",(0,n.jsx)(t.code,{children:"mainAxis"})," and ",(0,n.jsx)(t.code,{children:"crossAxis"})," properties:"]}),"\n",(0,n.jsx)(o,{data:g}),"\n",(0,n.jsx)(t.h2,{id:"arrow",children:"Arrow"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"withArrow"})," prop to add an arrow to the tooltip. Arrow is a ",(0,n.jsx)(t.code,{children:"div"})," element rotated with ",(0,n.jsx)(t.code,{children:"transform: rotate(45deg)"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"arrowPosition"})," prop determines how arrow is position relative to the target element when ",(0,n.jsx)(t.code,{children:"position"})," is set to ",(0,n.jsx)(t.code,{children:"*-start"})," and ",(0,n.jsx)(t.code,{children:"*-end"})," values on ",(0,n.jsx)(t.code,{children:"Popover"})," component.\nBy default, the value is ",(0,n.jsx)(t.code,{children:"center"})," – the arrow is positioned in the center of the target element if it is possible."]}),"\n",(0,n.jsxs)(t.p,{children:["If you change ",(0,n.jsx)(t.code,{children:"arrowPosition"})," to ",(0,n.jsx)(t.code,{children:"side"}),", then the arrow will be positioned on the side of the target element,\nand you will be able to control arrow offset with ",(0,n.jsx)(t.code,{children:"arrowOffset"})," prop. Note that when ",(0,n.jsx)(t.code,{children:"arrowPosition"})," is set to ",(0,n.jsx)(t.code,{children:"center"}),",\n",(0,n.jsx)(t.code,{children:"arrowOffset"})," prop is ignored."]}),"\n",(0,n.jsx)(o,{data:w}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(o,{data:y}),"\n",(0,n.jsx)(t.h2,{id:"change-events",children:"Change events"}),"\n",(0,n.jsxs)(t.p,{children:["Events that trigger tooltip can be changed with ",(0,n.jsx)(t.code,{children:"events"})," prop, it accepts an object\nwith the following properties that determine which events will trigger tooltip:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"hover"})," – mouse hover event, ",(0,n.jsx)(t.code,{children:"true"})," by default"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"focus"})," – focus/blur events excluding clicks on the target element, ",(0,n.jsx)(t.code,{children:"false"})," by default"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"touch"})," – events for touchscreen devices, ",(0,n.jsx)(t.code,{children:"false"})," by default"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Tooltip } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Tooltip label=\"Tooltip\" events={{ hover: true, focus: true, touch: false }}>\n      <button>target</button>\n    </Tooltip>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"multiline",children:"Multiline"}),"\n",(0,n.jsxs)(t.p,{children:["To enable multiline mode, set ",(0,n.jsx)(t.code,{children:"multiline"})," prop to enable line breaks and ",(0,n.jsx)(t.code,{children:"w"})," ",(0,n.jsx)(t.a,{href:"/styles/style-prop",children:"style prop"})," to set tooltip width:"]}),"\n",(0,n.jsx)(o,{data:B}),"\n",(0,n.jsx)(t.h2,{id:"inline",children:"Inline"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"inline"})," prop to use ",(0,n.jsx)(t.code,{children:"Tooltip"})," with inline elements:"]}),"\n",(0,n.jsx)(o,{data:O}),"\n",(0,n.jsx)(t.h2,{id:"change-transition",children:"Change transition"}),"\n",(0,n.jsxs)(t.p,{children:["Tooltip is built with ",(0,n.jsx)(t.a,{href:"/core/transition/",children:"Transition"})," component, it supports ",(0,n.jsx)(t.code,{children:"transitionProps"})," props:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Tooltip, Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Tooltip\n      label=\"Tooltip with custom transition\"\n      transitionProps={{ transition: 'skew-up', duration: 300 }}\n    >\n      <Button>Button with tooltip</Button>\n    </Tooltip>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"All available premade transitions:"}),"\n",(0,n.jsx)(o,{data:A.p}),"\n",(0,n.jsx)(t.h2,{id:"close-and-open-delay",children:"Close and open delay"}),"\n",(0,n.jsxs)(t.p,{children:["You can delay tooltip open/close events by setting ",(0,n.jsx)(t.code,{children:"openDelay"})," and ",(0,n.jsx)(t.code,{children:"closeDelay"})," props in ms:"]}),"\n",(0,n.jsx)(o,{data:N}),"\n",(0,n.jsx)(t.h2,{id:"tooltip-delay-group",children:"Tooltip delay group"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Tooltip.Group"})," component can be used to sync open and close delays for multiple tooltips:"]}),"\n",(0,n.jsx)(o,{data:R}),"\n",(0,n.jsx)(t.h2,{id:"floating-tooltip",children:"Floating tooltip"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Tooltip.Floating"})," component has the same API as Tooltip component but tooltip will follow mouse:"]}),"\n",(0,n.jsx)(o,{data:z}),"\n",(0,n.jsx)(t.h2,{id:"custom-components-with-tooltip",children:"Custom components with Tooltip"}),"\n",(0,n.jsxs)(t.p,{children:["If you want to build a component that can be used with Tooltip use\n",(0,n.jsx)(t.a,{href:"https://reactjs.org/docs/forwarding-refs.html",children:"forwardRef"})," or other prop that will allow to get root element ref.\nThis logic is applied to Tooltip and Tooltip.Floating components:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { forwardRef } from \'react\';\nimport { Tooltip } from \'@mantine/core\';\n\n// forwardRef function will allow to get root element ref\nconst MyBadge = forwardRef<HTMLDivElement, { color: string }>(({ color }, ref) => (\n  <div ref={ref} color={color}>\n    Badge\n  </div>\n));\n\n// other props can also be used\nfunction MyOtherBadge({\n  color,\n  innerRef,\n}: {\n  color: string;\n  innerRef?: React.ForwardedRef<HTMLDivElement>;\n}) {\n  return (\n    <div ref={innerRef} color={color}>\n      Badge\n    </div>\n  );\n}\n\nfunction Demo() {\n  return (\n    <>\n      <Tooltip label="Can be used as is">\n        <MyBadge color="red" />\n      </Tooltip>\n\n      <Tooltip label="refProp is required" refProp="innerRef">\n        <MyOtherBadge color="orange" />\n      </Tooltip>\n    </>\n  );\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(t.p,{children:["Tooltip follows ",(0,n.jsx)(t.a,{href:"https://www.w3.org/TR/wai-aria-practices/#tooltip",children:"WAI-ARIA recommendations"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Tooltip body has ",(0,n.jsx)(t.code,{children:'role="tooltip"'})," attribute"]}),"\n",(0,n.jsxs)(t.li,{children:["Target element has ",(0,n.jsx)(t.code,{children:"aria-describedby"})," attribute"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Tooltip.Floating"})," is ignored by screen readers"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["By default, Tooltip is not triggered by focus events and thus users who use a screen reader\nor navigate with keyboard will not be able to get tooltip content. Set ",(0,n.jsx)(t.code,{children:"events"})," prop to enable\nfocus/blur tooltip events:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Tooltip, Button } from '@mantine/core';\n\n// Tooltip will be visible for screen readers\nfunction Demo() {\n  return (\n    <Tooltip label=\"Tooltip\" events={{ hover: true, focus: true, touch: false }}>\n      <Button>Button with tooltip</Button>\n    </Tooltip>\n  );\n}\n"})})]})}var S=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(F,Object.assign({},e,{children:(0,n.jsx)(G,e)}))}},23733:function(e,t,o){"use strict";o.d(t,{C:function(){return f}});var n=o(59312),i=o(67294),r={root:"mantine-WM8AqtG","root--dot":"mantine-d3u1-wu",label:"mantine-LN56t-P",section:"mantine-cbpGUul"},l=o(70656),a=o(35577),s=o(89123),c=o(94873),p=o(95553),d=o(71350),u=o(94975);let h={size:"md",radius:"xl",variant:"filled"},m=(0,p.Z)((e,{radius:t,color:o,gradient:n,variant:i,size:r})=>{let l=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:n,variant:i});return{root:{"--badge-height":(0,d.ap)(r,"badge-height"),"--badge-padding-x":(0,d.ap)(r,"badge-padding-x"),"--badge-fz":(0,d.ap)(r,"badge-fz"),"--badge-radius":(0,d.H5)(t),"--badge-bg":l.background,"--badge-color":l.color,"--badge-bd":l.border,"--badge-dot-color":"dot"===i?(0,u.p)(o,e):void 0}}}),f=(0,l.b)((e,t)=>{let o=(0,a.w)("Badge",h,e),{classNames:l,className:p,style:d,styles:u,unstyled:f,vars:b,radius:x,color:g,gradient:T,leftSection:w,rightSection:j,children:y,variant:v,fullWidth:B}=o,E=(0,n._T)(o,["classNames","className","style","styles","unstyled","vars","radius","color","gradient","leftSection","rightSection","children","variant","fullWidth"]),D=(0,s.y)({name:"Badge",props:o,classes:r,className:p,style:d,classNames:l,styles:u,unstyled:f,vars:b,varsResolver:m});return i.createElement(c.x,Object.assign({variant:v,mod:{block:B}},D("root",{variant:v}),{ref:t},E),w&&i.createElement("span",Object.assign({},D("section"),{"data-position":"left"}),w),i.createElement("span",Object.assign({},D("label")),y),j&&i.createElement("span",Object.assign({},D("section"),{"data-position":"right"}),j))});f.displayName="@mantine/core/Badge"},88826:function(e,t,o){"use strict";o.d(t,{p:function(){return c}});var n=o(67294),i=o(40342),r=o(43245),l=o(41283),a=o(23733),s=o(74378);let c={type:"code",component:function(){let e=(0,i.X)(r.p).map(e=>n.createElement(l.u,{key:e,label:e,transitionProps:{transition:e,duration:300}},n.createElement(a.C,{variant:"light"},e)));return n.createElement(s.Z,{justify:"center",style:{cursor:"default"}},e)}}},44982:function(e,t,o){"use strict";o.d(t,{c:function(){return n}});let n=[{label:"top",value:"top"},{label:"top-start",value:"top-start"},{label:"top-end",value:"top-end"},{label:"left",value:"left"},{label:"left-start",value:"left-start"},{label:"left-end",value:"left-end"},{label:"right",value:"right"},{label:"right-start",value:"right-start"},{label:"right-end",value:"right-end"},{label:"bottom",value:"bottom"},{label:"bottom-start",value:"bottom-start"},{label:"bottom-end",value:"bottom-end"}]}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=92446)}),_N_E=e.O()}]);