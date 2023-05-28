(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5752],{4032:function(e,l,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/slider",function(){return a(99286)}])},99286:function(e,l,a){"use strict";a.r(l),a.d(l,{default:function(){return em}});var n=a(85893),t=a(11151),r=a(34940),i=a(25263),s=a(67294),o=a(24138);let u=`
import { Slider } from '@mantine/core';


function Demo() {
  return (
    <Slider
      {{props}}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}
`,d={type:"configurator",component:function(e){return s.createElement(o.i,Object.assign({defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}]},e))},code:u,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"showLabelOnHover",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"labelAlwaysOn",type:"boolean",initialValue:!1,libraryValue:!1}]};var c=a(94873),m=a(59312),b=a(35179),h=a(45266),p=a(55487),x=a(61408),f=a(4597),v=a(84789),g=a(38889),y=a(12326),k=a(89641),j=a(75144),S=a(35577),w=a(89123),E=a(9149),V=a(95553),T=a(71350),z=a(94975),C=a(46393);let D=(0,V.Z)((e,{size:l,color:a,thumbSize:n,radius:t})=>({root:{"--slider-size":(0,T.ap)(l,"slider-size"),"--slider-color":(0,z.p)(a,e),"--slider-radius":(0,T.H5)(t),"--slider-thumb-size":void 0!==n?(0,C.h)(n):"calc(var(--slider-size) * 2)"}})),A={size:"md",radius:"xl",min:0,max:100,minRange:10,step:1,marks:[],label:e=>e,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,showLabelOnHover:!0,disabled:!1,scale:e=>e},O=(0,j.d)((e,l)=>{let a=(0,S.w)("RangeSlider",A,e),{classNames:n,styles:t,value:r,onChange:i,onChangeEnd:o,size:u,min:d,max:c,minRange:j,maxRange:V,step:T,precision:z,defaultValue:C,name:O,marks:R,label:L,labelTransitionProps:M,labelAlwaysOn:F,thumbFromLabel:N,thumbToLabel:_,showLabelOnHover:I,thumbChildren:B,disabled:H,unstyled:W,scale:P,inverted:Z,className:$,style:K,vars:X}=a,Y=(0,m._T)(a,["classNames","styles","value","onChange","onChangeEnd","size","min","max","minRange","maxRange","step","precision","defaultValue","name","marks","label","labelTransitionProps","labelAlwaysOn","thumbFromLabel","thumbToLabel","showLabelOnHover","thumbChildren","disabled","unstyled","scale","inverted","className","style","vars"]),U=(0,w.y)({name:"Slider",props:a,classes:k.Z,classNames:n,className:$,styles:t,style:K,vars:X,varsResolver:D}),{dir:G}=(0,E.gm)(),[J,q]=(0,s.useState)(-1),[Q,ee]=(0,s.useState)(!1),[el,ea]=(0,b.C)({value:r,defaultValue:C,finalValue:[d,c],onChange:i}),en=(0,s.useRef)(el),et=(0,s.useRef)([]),er=(0,s.useRef)(void 0),ei=[(0,g.b)({value:el[0],min:d,max:c}),(0,g.b)({value:el[1],min:d,max:c})],es=e=>{ea(e),en.current=e};(0,s.useEffect)(()=>{Array.isArray(r)&&(en.current=r)},Array.isArray(r)?[r[0],r[1]]:[null,null]);let eo=(e,l,a)=>{let n=[...en.current];n[l]=e,0===l&&(e>n[1]-(j-1e-9)&&(n[1]=Math.min(e+j,c)),e>(c-(j-1e-9)||d)&&(n[l]=en.current[l]),n[1]-e>V&&(n[1]=e+V)),1===l&&(e<n[0]+j&&(n[0]=Math.max(e-j,d)),e<n[0]+j&&(n[l]=en.current[l]),e-n[0]>V&&(n[0]=e-V)),es(n),a&&(null==o||o(en.current))},eu=e=>{if(!H){let l=(0,y.i)({value:e,min:d,max:c,step:T,precision:z});eo(l,er.current,!1)}},{ref:ed,active:ec}=(0,h.r)(({x:e})=>eu(e),{onScrubEnd:()=>null==o?void 0:o(en.current)},G),em=e=>{ed.current.focus();let l=ed.current.getBoundingClientRect(),a=function(e){if("TouchEvent"in window&&e instanceof window.TouchEvent){let l=e.touches[0];return l.clientX}return e.clientX}(e.nativeEvent),n=(0,y.i)({value:a-l.left,max:c,min:d,step:T,containerWidth:l.width}),t=Math.abs(el[0]-n)>Math.abs(el[1]-n)?1:0;er.current="ltr"===G?t:1===t?0:1},eb=()=>1!==J&&0!==J?(q(0),0):J,eh=e=>{if(!H)switch(e.key){case"ArrowUp":{e.preventDefault();let l=eb();et.current[l].focus(),eo(Math.min(Math.max(en.current[l]+T,d),c),l,!0);break}case"ArrowRight":{e.preventDefault();let l=eb();et.current[l].focus(),eo(Math.min(Math.max("rtl"===G?en.current[l]-T:en.current[l]+T,d),c),l,!0);break}case"ArrowDown":{e.preventDefault();let l=eb();et.current[l].focus(),eo(Math.min(Math.max(en.current[l]-T,d),c),l,!0);break}case"ArrowLeft":{e.preventDefault();let l=eb();et.current[l].focus(),eo(Math.min(Math.max("rtl"===G?en.current[l]+T:en.current[l]-T,d),c),l,!0)}}},ep={max:c,min:d,size:u,labelTransitionProps:M,labelAlwaysOn:F,onBlur:()=>q(-1)},ex=Array.isArray(B);return s.createElement(p.Y,{value:{getStyles:U}},s.createElement(x.l,Object.assign({},Y,{size:u,ref:l,disabled:H}),s.createElement(f.f,{offset:ei[0],marksOffset:el[0],filled:ei[1]-ei[0],marks:R,inverted:Z,min:d,max:c,value:el[1],disabled:H,containerProps:{ref:ed,onMouseEnter:I?()=>ee(!0):void 0,onMouseLeave:I?()=>ee(!1):void 0,onTouchStartCapture:em,onTouchEndCapture:()=>{er.current=-1},onMouseDownCapture:em,onMouseUpCapture:()=>{er.current=-1},onKeyDownCapture:eh}},s.createElement(v.b,Object.assign({},ep,{value:P(el[0]),position:ei[0],dragging:ec,label:"function"==typeof L?L(P(el[0])):L,ref:e=>{et.current[0]=e},thumbLabel:N,onMouseDown:()=>void(er.current=0),onFocus:()=>q(0),showLabelOnHover:I,isHovered:Q,disabled:H}),ex?B[0]:B),s.createElement(v.b,Object.assign({},ep,{thumbLabel:_,value:P(el[1]),position:ei[1],dragging:ec,label:"function"==typeof L?L(P(el[1])):L,ref:e=>{et.current[1]=e},onMouseDown:()=>void(er.current=1),onFocus:()=>q(1),showLabelOnHover:I,isHovered:Q,disabled:H}),ex?B[1]:B)),s.createElement("input",{type:"hidden",name:`${O}_from`,value:el[0]}),s.createElement("input",{type:"hidden",name:`${O}_to`,value:el[1]})))});O.displayName="@mantine/core/RangeSlider";let R=`
import { Slider, RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider defaultValue={60} disabled />
      <RangeSlider
        mt="xl"
        mb="xl"
        disabled
        defaultValue={[25, 75]}
        marks={[
          { value: 0, label: 'xs' },
          { value: 25, label: 'sm' },
          { value: 50, label: 'md' },
          { value: 75, label: 'lg' },
          { value: 100, label: 'xl' },
        ]}
      />
    </>
  );
}
`,L={type:"code",component:function(){return s.createElement(c.x,{maw:400,mx:"auto"},s.createElement(o.i,{defaultValue:60,disabled:!0}),s.createElement(O,{mt:"xl",mb:"xl",disabled:!0,defaultValue:[25,75],marks:[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}]}))},code:R};var M=a(77048);let F=`
import { useState } from 'react';
import { Slider, Text, Box } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(50);
  const [endValue, setEndValue] = useState(50);

  return (
    <Box maw={400} mx="auto">
      <Slider value={value} onChange={setValue} onChangeEnd={setEndValue} />
      <Text mt="md" size="sm">
        onChange value: <b>{value}</b>
      </Text>
      <Text mt={5} size="sm">
        onChangeEnd value: <b>{endValue}</b>
      </Text>
    </Box>
  );
}
`,N={type:"code",component:function(){let[e,l]=(0,s.useState)(50),[a,n]=(0,s.useState)(50);return s.createElement(c.x,{maw:400,mx:"auto"},s.createElement(o.i,{value:e,onChange:l,onChangeEnd:n}),s.createElement(M.x,{mt:"md",size:"sm"},"onChange value: ",s.createElement("b",null,e)),s.createElement(M.x,{mt:5,size:"sm"},"onChangeEnd value: ",s.createElement("b",null,a)))},code:F},_=`
import { Slider, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm">No label</Text>
      <Slider defaultValue={40} label={null} />

      <Text size="sm" mt="xl">Formatted label</Text>
      <Slider defaultValue={40} label={(value) => \`\${value} \xb0C\`} />

      <Text size="sm" mt="xl">Label always visible</Text>
      <Slider defaultValue={40} labelAlwaysOn />

      <Text size="sm" mt="xl">Custom label transition</Text>
      <Slider
        defaultValue={40}
        labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }}
      />
    </>
  );
}
`,I={type:"code",component:function(){return s.createElement(s.Fragment,null,s.createElement(M.x,{size:"sm"},"No label"),s.createElement(o.i,{defaultValue:40,label:null}),s.createElement(M.x,{size:"sm",mt:"xl"},"Formatted label"),s.createElement(o.i,{defaultValue:40,label:e=>`${e} \xb0C`}),s.createElement(M.x,{size:"sm",mt:"xl"},"Label always visible"),s.createElement(o.i,{defaultValue:40,labelAlwaysOn:!0}),s.createElement(M.x,{size:"sm",mt:"xl"},"Custom label transition"),s.createElement(o.i,{defaultValue:40,labelTransitionProps:{transition:"skew-down",duration:150,timingFunction:"linear"}}))},code:_,centered:!0,maxWidth:400},B=`
import { Slider, Text } from '@mantine/core';

const marks = [
  { value: 0, label: 'xs' },
  { value: 25, label: 'sm' },
  { value: 50, label: 'md' },
  { value: 75, label: 'lg' },
  { value: 100, label: 'xl' },
];

function Demo() {
  return (
    <>
      <Text>Decimal step</Text>
      <Slider
        defaultValue={0}
        min={-10}
        max={10}
        label={(value) => value.toFixed(1)}
        step={0.1}
        styles={{ markLabel: { display: 'none' } }}
      />

      <Text mt="md">Step matched with marks</Text>
      <Slider
        defaultValue={50}
        label={(val) => marks.find((mark) => mark.value === val)!.label}
        step={25}
        marks={marks}
        styles={{ markLabel: { display: 'none' } }}
      />
    </>
  );
}
`,H=[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}],W={type:"code",component:function(){return s.createElement(s.Fragment,null,s.createElement(M.x,null,"Decimal step"),s.createElement(o.i,{defaultValue:0,min:-10,max:10,label:e=>e.toFixed(1),step:.1,styles:{markLabel:{display:"none"}}}),s.createElement(M.x,{mt:"md"},"Step matched with marks"),s.createElement(o.i,{defaultValue:50,label:e=>H.find(l=>l.value===e).label,step:25,marks:H,styles:{markLabel:{display:"none"}}}))},code:B,centered:!0,maxWidth:400},P=`
import { Slider, RangeSlider } from '@mantine/core';

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

function Demo() {
  return (
    <>
      <Slider defaultValue={40} marks={[{ value: 10 }, { value: 40 }, { value: 95 }]} />
      <Slider defaultValue={40} marks={marks} />
      <RangeSlider defaultValue={[20, 80]} marks={marks} />
    </>
  );
}
`,Z={type:"code",component:function(){let e=[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}];return s.createElement(s.Fragment,null,s.createElement(o.i,{defaultValue:40,marks:[{value:10},{value:40},{value:95}],mb:32}),s.createElement(o.i,{defaultValue:40,marks:e,mb:32}),s.createElement(O,{defaultValue:[20,80],marks:e,mb:32}))},code:P,centered:!0,maxWidth:400},$=`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} defaultValue={20} />;
}
`,K={type:"configurator",component:function(e){return s.createElement(o.i,Object.assign({},e,{defaultValue:20}))},code:$,maxWidth:400,centered:!0,controls:[{prop:"thumbSize",type:"number",min:14,max:32,initialValue:14,libraryValue:null}]};var X=a(1002),Y=(0,a(54764).Z)("heart-broken","IconHeartBroken",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}],["path",{d:"M12 6l-2 4l4 3l-2 4v3",key:"svg-1"}]]);let U=`
import { Slider, RangeSlider, rem } from '@mantine/core';
import { IconHeart, IconHeartBroken } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Slider
        thumbChildren={<IconHeart size="1rem" />}
        color="red"
        label={null}
        defaultValue={40}
        thumbSize={26}
        styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
      />

      <RangeSlider
        mt="xl"
        styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
        color="red"
        label={null}
        defaultValue={[20, 60]}
        thumbSize={26}
        thumbChildren={[<IconHeart size="1rem" key="1" />, <IconHeartBroken size="1rem" key="2" />]}
      />
    </>
  );
}
`,G={type:"code",component:function(){return s.createElement(s.Fragment,null,s.createElement(o.i,{thumbChildren:s.createElement(X.Z,{size:"1rem",stroke:1.5}),color:"red",label:null,defaultValue:40,thumbSize:26,styles:{thumb:{borderWidth:(0,C.h)(2),padding:(0,C.h)(3)}}}),s.createElement(O,{mt:"xl",styles:{thumb:{borderWidth:(0,C.h)(2),padding:(0,C.h)(3)}},color:"red",label:null,defaultValue:[20,60],thumbSize:26,thumbChildren:[s.createElement(X.Z,{size:"1rem",stroke:1.5,key:"1"}),s.createElement(Y,{size:"1rem",stroke:1.5,key:"2"})]}))},code:U,maxWidth:400,centered:!0},J=`
import { RangeSlider, Slider } from '@mantine/core';

function valueLabelFormat(value: number) {
  const units = ['KB', 'MB', 'GB', 'TB'];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return \`\${scaledValue} \${units[unitIndex]}\`;
}

const getScale = (v: number) => 2 ** v;

function Demo() {
  return (
    <>
      <Slider
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={10}
        label={valueLabelFormat}
      />
      <RangeSlider
        mt={50}
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={[10, 20]}
        label={valueLabelFormat}
      />
    </>
  );
}
`;function q(e){let l=["KB","MB","GB","TB"],a=0,n=e;for(;n>=1024&&a<l.length-1;)a+=1,n/=1024;return`${n} ${l[a]}`}let Q=e=>Math.pow(2,e),ee={type:"code",component:function(){return s.createElement(s.Fragment,null,s.createElement(o.i,{scale:Q,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:10,label:q}),s.createElement(O,{mt:50,scale:Q,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:[10,20],label:q}))},code:J,centered:!0,maxWidth:400},el=`
import { RangeSlider, Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider inverted defaultValue={80} />
      <RangeSlider inverted defaultValue={[40, 80]} mt="xl" />
    </>
  );
}
`,ea={type:"code",component:function(){return s.createElement(s.Fragment,null,s.createElement(o.i,{inverted:!0,defaultValue:80}),s.createElement(O,{inverted:!0,defaultValue:[40,80],mt:"xl"}))},code:el,centered:!0,maxWidth:400};var en=a(1287);let et=`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} marks={[{ value: 20, label: '20%' }, { value: 80, label: '80%' }]} labelAlwaysOn />;
}
`,er={type:"styles-api",data:en.a,component:function(e){return s.createElement(o.i,Object.assign({marks:[{value:20,label:"20%"},{value:80,label:"80%"}],defaultValue:40,labelAlwaysOn:!0},e))},code:et,centered:!0,maxWidth:400};var ei={track:"mantine-ZJRFk4x",mark:"mantine-nEZPdgE",markLabel:"mantine-syGJJ1c",thumb:"mantine-OaLcDe8"};let es=`
import { Slider } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Slider
      defaultValue={40}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
      size={2}
      classNames={classes}
    />
  );
}
`,eo=`
.track {
  &::before {
    background-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));
  }
}

.mark {
  width: rem(6px);
  height: rem(6px);
  border-radius: rem(6px);
  transform: translateX(rem(-3px)) translateY(rem(-2px));
  border-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));

  &[data-filled] {
    border-color: var(--mantine-color-blue-6);
  }
}

.markLabel {
  font-size: var(--mantine-font-size-xs);
  margin-bottom: rem(5px);
  margin-top: 0;
}

.thumb {
  height: rem(16px);
  width: rem(16px);
  background-color: var(--mantine-color-white);
  border-width: rem(1px);
  box-shadow: var(--mantine-shadow-sm);
}
`,eu={type:"code",component:function(){return s.createElement(c.x,{maw:400,pt:15,pb:20,mx:"auto"},s.createElement(o.i,{defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],size:2,classNames:ei}))},code:[{fileName:"Demo.tsx",code:es,language:"tsx"},{fileName:"Demo.module.css",code:eo,language:"css"}]},ed=(0,r.A)(i.us.Slider);function ec(e){let l=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,t.ah)(),e.components),{Demo:a,StylesApiSelectors:r,KeyboardEventsTable:i}=l;return a||eb("Demo",!0),i||eb("KeyboardEventsTable",!0),r||eb("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(a,{data:d}),"\n",(0,n.jsx)(l.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsxs)(l.p,{children:["Controlled ",(0,n.jsx)(l.code,{children:"Slider"}),":"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Slider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState(40);\n  return <Slider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsxs)(l.p,{children:["Controlled ",(0,n.jsx)(l.code,{children:"RangeSlider"}),":"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { RangeSlider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<[number, number]>([20, 80]);\n  return <RangeSlider value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsx)(l.h2,{id:"disabled",children:"Disabled"}),"\n",(0,n.jsx)(a,{data:L}),"\n",(0,n.jsx)(l.h2,{id:"onchangeend",children:"onChangeEnd"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.code,{children:"onChangeEnd"})," callback is called when user the slider is stopped from being dragged or value is changed with keyboard.\nYou can use it as a debounced callback to avoid too frequent updates."]}),"\n",(0,n.jsx)(a,{data:N}),"\n",(0,n.jsx)(l.h2,{id:"control-label",children:"Control label"}),"\n",(0,n.jsx)(l.p,{children:"To change label behavior and appearance, set the following props:"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.code,{children:"label"})," – formatter function, accepts value as an argument, set null to disable label, defaults to ",(0,n.jsx)(l.code,{children:"f => f"})]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.code,{children:"labelAlwaysOn"})," – if true – label will always be displayed, by default label is visible only when user is dragging"]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.code,{children:"labelTransitionProps"})," – props passed down to the ",(0,n.jsx)(l.a,{href:"/core/transition",children:"Transition"})," component, can be used to customize label animation"]}),"\n"]}),"\n",(0,n.jsx)(a,{data:I}),"\n",(0,n.jsx)(l.h2,{id:"min-max-and-step",children:"Min, max and step"}),"\n",(0,n.jsx)(a,{data:W}),"\n",(0,n.jsx)(l.h2,{id:"marks",children:"Marks"}),"\n",(0,n.jsxs)(l.p,{children:["Add any number of marks to slider by setting ",(0,n.jsx)(l.code,{children:"marks"})," prop to an array of objects:"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"const marks = [\n  { value: 20 }, // -> displays mark on slider track\n  { value: 40, label: '40%' }, // -> adds mark label below slider track\n];\n"})}),"\n",(0,n.jsx)(l.p,{children:"Note that mark value is relative to slider value, not width:"}),"\n",(0,n.jsx)(a,{data:Z}),"\n",(0,n.jsx)(l.h2,{id:"thumb-size",children:"Thumb size"}),"\n",(0,n.jsx)(a,{data:K}),"\n",(0,n.jsx)(l.h2,{id:"thumb-children",children:"Thumb children"}),"\n",(0,n.jsx)(a,{data:G}),"\n",(0,n.jsx)(l.h2,{id:"scale",children:"Scale"}),"\n",(0,n.jsxs)(l.p,{children:["You can use the ",(0,n.jsx)(l.code,{children:"scale"})," prop to represent the value on a different scale."]}),"\n",(0,n.jsxs)(l.p,{children:["In the following demo, the value ",(0,n.jsx)(l.code,{children:"x"})," represents the value ",(0,n.jsx)(l.code,{children:"2^x"}),". Increasing ",(0,n.jsx)(l.code,{children:"x"})," by one increases the represented value by 2 to the power of ",(0,n.jsx)(l.code,{children:"x"}),"."]}),"\n",(0,n.jsx)(a,{data:ee}),"\n",(0,n.jsx)(l.h2,{id:"inverted",children:"Inverted"}),"\n",(0,n.jsxs)(l.p,{children:["You can invert the track with the ",(0,n.jsx)(l.code,{children:"inverted"})," prop:"]}),"\n",(0,n.jsx)(a,{data:ea}),"\n",(0,n.jsx)(r,{component:"Slider"}),"\n",(0,n.jsx)(a,{data:er}),"\n",(0,n.jsxs)(l.p,{children:["Example of using ",(0,n.jsx)(l.a,{href:"/styles/styles-api/",children:"Styles API"})," to change ",(0,n.jsx)(l.code,{children:"Slider"})," styles:"]}),"\n",(0,n.jsx)(a,{data:eu}),"\n",(0,n.jsx)(l.h2,{id:"vertical-slider",children:"Vertical slider"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.code,{children:"Slider"})," and ",(0,n.jsx)(l.code,{children:"RangeSlider"})," do not provide vertical orientation as it is very rarely used.\nIf you need this feature you can build it yourself with ",(0,n.jsx)(l.a,{href:"/hooks/use-move/",children:"use-move"})," hook."]}),"\n",(0,n.jsx)(l.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.code,{children:"Slider"})," and ",(0,n.jsx)(l.code,{children:"RangeSlider"})," components are accessible by default:"]}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"Thumbs are focusable"}),"\n",(0,n.jsx)(l.li,{children:"When the user uses mouse to interact with the slider, focus is moved to the slider track, when the user presses arrows focus is moved to the thumb"}),"\n",(0,n.jsx)(l.li,{children:"Value can be changed with arrows with step increment/decrement"}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:"To label component for screen readers, add labels to thumbs:"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:'import { Slider, RangeSlider } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <>\n      <Slider thumbLabel="Thumb aria-label" />\n      <RangeSlider thumbFromLabel="First thumb aria-label" thumbToLabel="Second thumb aria-label" />\n    </>\n  );\n}\n'})}),"\n",(0,n.jsx)(l.h2,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,n.jsx)(i,{data:[{key:"ArrowRight/ArrowUp",description:"Increases slider value by one step"},{key:"ArrowLeft/ArrowDown",description:"Decreases slider value by one step"},{key:"Home",description:"Sets slider value to min value"},{key:"End",description:"Sets slider value to max value"}]})]})}var em=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(ed,Object.assign({},e,{children:(0,n.jsx)(ec,e)}))};function eb(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1002:function(e,l,a){"use strict";a.d(l,{Z:function(){return n}});var n=(0,a(54764).Z)("heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=4032)}),_N_E=e.O()}]);