(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5752],{4032:function(e,l,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/slider",function(){return a(13459)}])},13459:function(e,l,a){"use strict";a.r(l),a.d(l,{default:function(){return eA}});var n=a(85893),r=a(11151),t=a(34940),i=a(25263),o=a(67294),s=a(35179),u=a(45266),d=a(55487),c=a(61408),m=a(4597),b=a(84789),h=a(38889),p=a(12326),f=a(89641),x=a(75144),v=a(35577),y=a(89123),g=a(9149),w=a(95553),j=a(71350),k=a(94975),S=a(46393),E=Object.defineProperty,V=Object.defineProperties,O=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,R=(e,l,a)=>l in e?E(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a,A=(e,l)=>{for(var a in l||(l={}))D.call(l,a)&&R(e,a,l[a]);if(T)for(var a of T(l))C.call(l,a)&&R(e,a,l[a]);return e},z=(e,l)=>V(e,O(l)),M=(e,l)=>{var a={};for(var n in e)D.call(e,n)&&0>l.indexOf(n)&&(a[n]=e[n]);if(null!=e&&T)for(var n of T(e))0>l.indexOf(n)&&C.call(e,n)&&(a[n]=e[n]);return a};let L=(0,w.Z)((e,{size:l,color:a,thumbSize:n,radius:r})=>({root:{"--slider-size":(0,j.ap)(l,"slider-size"),"--slider-color":(0,k.p)(a,e),"--slider-radius":(0,j.H5)(r),"--slider-thumb-size":void 0!==n?(0,S.h)(n):"calc(var(--slider-size) * 2)"}})),I={size:"md",radius:"xl",min:0,max:100,minRange:10,step:1,marks:[],label:e=>e,labelTransition:"skew-down",labelTransitionDuration:0,labelAlwaysOn:!1,showLabelOnHover:!0,disabled:!1,scale:e=>e},F=(0,x.d)((e,l)=>{let a=(0,v.w)("RangeSlider",I,e),{classNames:n,styles:r,value:t,onChange:i,onChangeEnd:x,size:w,min:j,max:k,minRange:S,maxRange:E,step:V,precision:O,defaultValue:T,name:D,marks:C,label:R,labelTransition:F,labelTransitionDuration:P,labelTransitionTimingFunction:B,labelAlwaysOn:N,thumbFromLabel:H,thumbToLabel:_,showLabelOnHover:K,thumbChildren:Z,disabled:$,unstyled:W,scale:X,inverted:Y,className:U,style:G,vars:J}=a,q=M(a,["classNames","styles","value","onChange","onChangeEnd","size","min","max","minRange","maxRange","step","precision","defaultValue","name","marks","label","labelTransition","labelTransitionDuration","labelTransitionTimingFunction","labelAlwaysOn","thumbFromLabel","thumbToLabel","showLabelOnHover","thumbChildren","disabled","unstyled","scale","inverted","className","style","vars"]),Q=(0,y.y)({name:"Slider",props:a,classes:f.Z,classNames:n,className:U,styles:r,style:G,vars:J,varsResolver:L}),{dir:ee}=(0,g.gm)(),[el,ea]=(0,o.useState)(-1),[en,er]=(0,o.useState)(!1),[et,ei]=(0,s.C)({value:t,defaultValue:T,finalValue:[j,k],onChange:i}),eo=(0,o.useRef)(et),es=(0,o.useRef)([]),eu=(0,o.useRef)(void 0),ed=[(0,h.b)({value:et[0],min:j,max:k}),(0,h.b)({value:et[1],min:j,max:k})],ec=e=>{ei(e),eo.current=e};(0,o.useEffect)(()=>{Array.isArray(t)&&(eo.current=t)},Array.isArray(t)?[t[0],t[1]]:[null,null]);let em=(e,l,a)=>{let n=[...eo.current];n[l]=e,0===l&&(e>n[1]-(S-1e-9)&&(n[1]=Math.min(e+S,k)),e>(k-(S-1e-9)||j)&&(n[l]=eo.current[l]),n[1]-e>E&&(n[1]=e+E)),1===l&&(e<n[0]+S&&(n[0]=Math.max(e-S,j)),e<n[0]+S&&(n[l]=eo.current[l]),e-n[0]>E&&(n[0]=e-E)),ec(n),a&&(null==x||x(eo.current))},eb=e=>{if(!$){let l=(0,p.i)({value:e,min:j,max:k,step:V,precision:O});em(l,eu.current,!1)}},{ref:eh,active:ep}=(0,u.r)(({x:e})=>eb(e),{onScrubEnd:()=>null==x?void 0:x(eo.current)},ee),ef=e=>{eh.current.focus();let l=eh.current.getBoundingClientRect(),a=function(e){if("TouchEvent"in window&&e instanceof window.TouchEvent){let l=e.touches[0];return l.clientX}return e.clientX}(e.nativeEvent),n=(0,p.i)({value:a-l.left,max:k,min:j,step:V,containerWidth:l.width}),r=Math.abs(et[0]-n)>Math.abs(et[1]-n)?1:0;eu.current="ltr"===ee?r:1===r?0:1},ex=()=>1!==el&&0!==el?(ea(0),0):el,ev=e=>{if(!$)switch(e.key){case"ArrowUp":{e.preventDefault();let l=ex();es.current[l].focus(),em(Math.min(Math.max(eo.current[l]+V,j),k),l,!0);break}case"ArrowRight":{e.preventDefault();let l=ex();es.current[l].focus(),em(Math.min(Math.max("rtl"===ee?eo.current[l]-V:eo.current[l]+V,j),k),l,!0);break}case"ArrowDown":{e.preventDefault();let l=ex();es.current[l].focus(),em(Math.min(Math.max(eo.current[l]-V,j),k),l,!0);break}case"ArrowLeft":{e.preventDefault();let l=ex();es.current[l].focus(),em(Math.min(Math.max("rtl"===ee?eo.current[l]+V:eo.current[l]-V,j),k),l,!0)}}},ey={max:k,min:j,size:w,labelTransition:F,labelTransitionDuration:P,labelTransitionTimingFunction:B,labelAlwaysOn:N,onBlur:()=>ea(-1)},eg=Array.isArray(Z);return o.createElement(d.Y,{value:{getStyles:Q}},o.createElement(c.l,z(A({},q),{size:w,ref:l,disabled:$}),o.createElement(m.f,{offset:ed[0],marksOffset:et[0],filled:ed[1]-ed[0],marks:C,inverted:Y,min:j,max:k,value:et[1],disabled:$,containerProps:{ref:eh,onMouseEnter:K?()=>er(!0):void 0,onMouseLeave:K?()=>er(!1):void 0,onTouchStartCapture:ef,onTouchEndCapture:()=>{eu.current=-1},onMouseDownCapture:ef,onMouseUpCapture:()=>{eu.current=-1},onKeyDownCapture:ev}},o.createElement(b.b,z(A({},ey),{value:X(et[0]),position:ed[0],dragging:ep,label:"function"==typeof R?R(X(et[0])):R,ref:e=>{es.current[0]=e},thumbLabel:H,onMouseDown:()=>void(eu.current=0),onFocus:()=>ea(0),showLabelOnHover:K,isHovered:en,disabled:$}),eg?Z[0]:Z),o.createElement(b.b,z(A({},ey),{thumbLabel:_,value:X(et[1]),position:ed[1],dragging:ep,label:"function"==typeof R?R(X(et[1])):R,ref:e=>{es.current[1]=e},onMouseDown:()=>void(eu.current=1),onFocus:()=>ea(1),showLabelOnHover:K,isHovered:en,disabled:$}),eg?Z[1]:Z)),o.createElement("input",{type:"hidden",name:`${D}_from`,value:et[0]}),o.createElement("input",{type:"hidden",name:`${D}_to`,value:et[1]})))});F.displayName="@mantine/core/RangeSlider";var P=a(24138),B=a(94873),N=Object.defineProperty,H=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,Z=(e,l,a)=>l in e?N(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a,$=(e,l)=>{for(var a in l||(l={}))_.call(l,a)&&Z(e,a,l[a]);if(H)for(var a of H(l))K.call(l,a)&&Z(e,a,l[a]);return e},W=(e,l)=>{var a={};for(var n in e)_.call(e,n)&&0>l.indexOf(n)&&(a[n]=e[n]);if(null!=e&&H)for(var n of H(e))0>l.indexOf(n)&&K.call(e,n)&&(a[n]=e[n]);return a};let X=`
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
`,Y={type:"configurator",component:function(e){let{type:l}=e,a=W(e,["type"]),n="range"===l?F:P.i;return o.createElement(B.x,{maw:400,mx:"auto"},o.createElement(n,$({defaultValue:"range"===l?[20,80]:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}]},a)))},code:X,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"showLabelOnHover",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"labelAlwaysOn",type:"boolean",initialValue:!1,libraryValue:!1}]},U=`
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
`,G={type:"code",component:function(){return o.createElement(B.x,{maw:400,mx:"auto"},o.createElement(P.i,{defaultValue:60,disabled:!0}),o.createElement(F,{mt:"xl",mb:"xl",disabled:!0,defaultValue:[25,75],marks:[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}]}))},code:U};var J=a(77048);let q=`
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
`,Q={type:"code",component:function(){let[e,l]=(0,o.useState)(50),[a,n]=(0,o.useState)(50);return o.createElement(B.x,{maw:400,mx:"auto"},o.createElement(P.i,{value:e,onChange:l,onChangeEnd:n}),o.createElement(J.x,{mt:"md",size:"sm"},"onChange value: ",o.createElement("b",null,e)),o.createElement(J.x,{mt:5,size:"sm"},"onChangeEnd value: ",o.createElement("b",null,a)))},code:q},ee=`
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Disable label */}
      <Slider label={null} />

      {/* Format label with function */}
      <Slider label={(value) => \`\${value} \xb0C\`} />

      {/* Always display label */}
      <Slider labelAlwaysOn />

      {/* Change label transition */}
      <Slider
        labelTransition="skew-down"
        labelTransitionDuration={150}
        labelTransitionTimingFunction="ease"
      />
    </>
  );
}
`,el={type:"code",component:function(){return o.createElement(B.x,{maw:400,mx:"auto"},o.createElement(J.x,null,"No label"),o.createElement(P.i,{defaultValue:40,label:null}),o.createElement(J.x,{mt:"xl"},"Formatted label"),o.createElement(P.i,{defaultValue:40,label:e=>`${e} \xb0C`}),o.createElement(J.x,{mt:"xl"},"Label always visible"),o.createElement(P.i,{defaultValue:40,labelAlwaysOn:!0}),o.createElement(J.x,{mt:"xl"},"Custom label transition"),o.createElement(P.i,{defaultValue:40,labelTransition:"skew-down",labelTransitionDuration:150,labelTransitionTimingFunction:"ease"}))},code:ee},ea=`
import { Slider } from '@mantine/core';

// Configure marks to match step
const MARKS = [
  { value: 0, label: 'xs' },
  { value: 25, label: 'sm' },
  { value: 50, label: 'md' },
  { value: 75, label: 'lg' },
  { value: 100, label: 'xl' },
];

function Demo() {
  return (
    <>
      {/* Set min, max and step props to replace default values */}
      <Slider
        defaultValue={5}
        min={-10}
        max={10}
        label={(value) => value.toFixed(1)}
        step={0.1}
        styles={{ markLabel: { display: 'none' } }}
      />

      <Slider
        label={(val) => MARKS.find((mark) => mark.value === val)!.label}
        defaultValue={50}
        step={25}
        marks={MARKS}
        styles={{ markLabel: { display: 'none' } }}
      />
    </>
  );
}
`,en={type:"code",component:function(){let e=[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}];return o.createElement(B.x,{maw:400,mx:"auto"},o.createElement(J.x,null,"Decimal step"),o.createElement(P.i,{defaultValue:0,min:-10,max:10,label:e=>e.toFixed(1),step:.1,styles:{markLabel:{display:"none"}}}),o.createElement(J.x,{mt:"md"},"Step matched with marks"),o.createElement(P.i,{defaultValue:50,label:l=>e.find(e=>e.value===l).label,step:25,marks:e,styles:{markLabel:{display:"none"}}}))},code:ea},er=`
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
`,et={type:"code",component:function(){let e=[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}];return o.createElement(B.x,{maw:400,mx:"auto"},o.createElement(P.i,{defaultValue:40,marks:[{value:10},{value:40},{value:95}],mb:32}),o.createElement(P.i,{defaultValue:40,marks:e,mb:32}),o.createElement(F,{defaultValue:[20,80],marks:e,mb:32}))},code:er};var ei=Object.defineProperty,eo=Object.defineProperties,es=Object.getOwnPropertyDescriptors,eu=Object.getOwnPropertySymbols,ed=Object.prototype.hasOwnProperty,ec=Object.prototype.propertyIsEnumerable,em=(e,l,a)=>l in e?ei(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a,eb=(e,l)=>{for(var a in l||(l={}))ed.call(l,a)&&em(e,a,l[a]);if(eu)for(var a of eu(l))ec.call(l,a)&&em(e,a,l[a]);return e},eh=(e,l)=>eo(e,es(l));let ep=`
import { Slider, RangeSlider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} defaultValue={20} />;
}
`,ef={type:"configurator",component:function(e){return o.createElement(B.x,{maw:400,mx:"auto"},o.createElement(P.i,eh(eb({},e),{defaultValue:20})))},code:ep,controls:[{prop:"thumbSize",type:"number",min:14,max:32,initialValue:14,libraryValue:null}]};var ex=a(1002),ev=(0,a(54764).Z)("heart-broken","IconHeartBroken",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}],["path",{d:"M12 6l-2 4l4 3l-2 4v3",key:"svg-1"}]]);let ey=`
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
`,eg={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(P.i,{thumbChildren:o.createElement(ex.Z,{size:"1rem",stroke:1.5}),color:"red",label:null,defaultValue:40,thumbSize:26,styles:{thumb:{borderWidth:(0,S.h)(2),padding:(0,S.h)(3)}}}),o.createElement(F,{mt:"xl",styles:{thumb:{borderWidth:(0,S.h)(2),padding:(0,S.h)(3)}},color:"red",label:null,defaultValue:[20,60],thumbSize:26,thumbChildren:[o.createElement(ex.Z,{size:"1rem",stroke:1.5,key:"1"}),o.createElement(ev,{size:"1rem",stroke:1.5,key:"2"})]}))},code:ey};var ew=a(25943);let ej=`
import { RangeSlider, Slider, Stack } from '@mantine/core';

function Demo() {
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

  return (
    <Stack gap="xl" p="xl">
      <Slider
        py="xl"
        scale={(v) => 2 ** v}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={10}
        label={valueLabelFormat}
      />
      <RangeSlider
        py="xl"
        scale={(v) => 2 ** v}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={[10, 20]}
        label={valueLabelFormat}
      />
    </Stack>
  );
}
`,ek={type:"code",component:function(){function e(e){let l=["KB","MB","GB","TB"],a=0,n=e;for(;n>=1024&&a<l.length-1;)a+=1,n/=1024;return`${n} ${l[a]}`}return o.createElement(ew.K,{gap:"xl",p:"xl"},o.createElement(P.i,{py:"xl",scale:e=>2**e,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:10,label:e}),o.createElement(F,{py:"xl",scale:e=>2**e,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:[10,20],label:e}))},code:ej},eS=`
import { RangeSlider, Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider inverted defaultValue={80} py="xl" />
      <RangeSlider inverted defaultValue={[40, 80]} py="xl" />
    </>
  );
}
`,eE={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(P.i,{inverted:!0,defaultValue:80,py:"xl"}),o.createElement(F,{inverted:!0,defaultValue:[40,80],py:"xl"}))},code:eS};var eV={track:"mantine-ZJRFk4x",mark:"mantine-nEZPdgE",markLabel:"mantine-syGJJ1c",thumb:"mantine-OaLcDe8"};let eO=`
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
      labelTransition="fade"
      size={2}
      classNames={classes}
    />
  );
}
`,eT=`
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
`,eD={type:"code",component:function(){return o.createElement(B.x,{maw:400,pt:15,pb:20,mx:"auto"},o.createElement(P.i,{defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],labelTransition:"fade",size:2,classNames:eV}))},code:[{fileName:"Demo.tsx",code:eO,language:"tsx"},{fileName:"Demo.module.css",code:eT,language:"css"}]},eC=(0,t.A)(i.us.Slider);function eR(e){let l=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",a:"a",h3:"h3"},(0,r.ah)(),e.components),{Demo:a,KeyboardEventsTable:t}=l;return a||ez("Demo",!0),t||ez("KeyboardEventsTable",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(a,{data:Y}),"\n",(0,n.jsx)(l.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(l.p,{children:"By default, both Slider and RangeSlider are uncontrolled, add onChange and value props to make them controlled:"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Slider, RangeSlider } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState(40);\n  const [rangeValue, setRangeValue] = useState<[number, number]>([20, 80]);\n\n  return (\n    <>\n      <Slider value={value} onChange={setValue} />\n      <RangeSlider value={rangeValue} onChange={setRangeValue} />\n    </>\n  );\n}\n"})}),"\n",(0,n.jsx)(l.h2,{id:"disabled",children:"Disabled"}),"\n",(0,n.jsx)(a,{data:G}),"\n",(0,n.jsx)(l.h2,{id:"onchangeend",children:"onChangeEnd"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.code,{children:"onChangeEnd"})," callback is called when user stops dragging the slider or uses arrows:"]}),"\n",(0,n.jsx)(a,{data:Q}),"\n",(0,n.jsx)(l.h2,{id:"control-label",children:"Control label"}),"\n",(0,n.jsx)(l.p,{children:"To change label behavior and appearance, set the following props:"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.code,{children:"label"})," – formatter function, accepts value as an argument, set null to disable label, defaults to ",(0,n.jsx)(l.code,{children:"f => f"})]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.code,{children:"labelAlwaysOn"})," – if true – label will always be displayed, by default label is visible only when user is dragging"]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.code,{children:"labelTransition"}),", ",(0,n.jsx)(l.code,{children:"labelTransitionDuration"}),", ",(0,n.jsx)(l.code,{children:"labelTransitionTimingFunction"})," – label uses ",(0,n.jsx)(l.a,{href:"/core/transition/",children:"Transition"})," component to animate presence, you can choose any premade transition or create your own"]}),"\n"]}),"\n",(0,n.jsx)(a,{data:el}),"\n",(0,n.jsx)(l.h2,{id:"min-max-and-step",children:"Min, max and step"}),"\n",(0,n.jsx)(a,{data:en}),"\n",(0,n.jsx)(l.h2,{id:"marks",children:"Marks"}),"\n",(0,n.jsxs)(l.p,{children:["Add any number of marks to slider by setting ",(0,n.jsx)(l.code,{children:"marks"})," prop to an array of objects:"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"const marks = [\n  { value: 20 }, // -> displays mark on slider track\n  { value: 40, label: '40%' }, // -> adds mark label below slider track\n];\n"})}),"\n",(0,n.jsx)(l.p,{children:"Note that mark value is relative to slider value, not width:"}),"\n",(0,n.jsx)(a,{data:et}),"\n",(0,n.jsx)(l.h2,{id:"thumb-size",children:"Thumb size"}),"\n",(0,n.jsx)(a,{data:ef}),"\n",(0,n.jsx)(l.h2,{id:"thumb-children",children:"Thumb children"}),"\n",(0,n.jsx)(a,{data:eg}),"\n",(0,n.jsx)(l.h2,{id:"scale",children:"Scale"}),"\n",(0,n.jsxs)(l.p,{children:["You can use the ",(0,n.jsx)(l.code,{children:"scale"})," prop to represent the value on a different scale."]}),"\n",(0,n.jsxs)(l.p,{children:["In the following demo, the value ",(0,n.jsx)(l.code,{children:"x"})," represents the value ",(0,n.jsx)(l.code,{children:"2^x"}),". Increasing ",(0,n.jsx)(l.code,{children:"x"})," by one increases the represented value by 2 to the power of ",(0,n.jsx)(l.code,{children:"x"}),"."]}),"\n",(0,n.jsx)(a,{data:ek}),"\n",(0,n.jsx)(l.h2,{id:"inverted",children:"Inverted"}),"\n",(0,n.jsxs)(l.p,{children:["You can invert the track with the ",(0,n.jsx)(l.code,{children:"inverted"})," prop:"]}),"\n",(0,n.jsx)(a,{data:eE}),"\n",(0,n.jsx)(l.h2,{id:"styles-api",children:"Styles API"}),"\n",(0,n.jsxs)(l.p,{children:["You can change styles of any element in slider component with ",(0,n.jsx)(l.a,{href:"/styles/styles-api/",children:"Styles API"})," to match your design requirements:"]}),"\n",(0,n.jsx)(a,{data:eD}),"\n",(0,n.jsx)(l.h2,{id:"vertical-slider",children:"Vertical slider"}),"\n",(0,n.jsxs)(l.p,{children:["Slider and RangeSlider do not provide vertical orientation as it is very rarely used.\nIf you need this feature you should build it yourself with ",(0,n.jsx)(l.a,{href:"/hooks/use-move/",children:"use-move"})," hook."]}),"\n",(0,n.jsx)(l.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsx)(l.p,{children:"Slider and RangeSlider components are accessible by default:"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"Slider thumbs are focusable"}),"\n",(0,n.jsx)(l.li,{children:"When the user uses mouse to interact with a slider, focus is moved on slider track, when the user presses arrows focus is moved on thumb"}),"\n",(0,n.jsx)(l.li,{children:"Value can be changed with arrows with step increment/decrement"}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:"To label component for screen readers, add labels to thumbs:"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:'<Slider thumbLabel="Thumb aria-label" />\n<RangeSlider thumbFromLabel="First thumb aria-label" thumbToLabel="Second thumb aria-label" />\n'})}),"\n",(0,n.jsx)(l.h3,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,n.jsx)(t,{data:[{key:"ArrowRight/ArrowUp",description:"Increases slider value by one step"},{key:"ArrowLeft/ArrowDown",description:"Decreases slider value by one step"},{key:"Home",description:"Sets slider value to min value"},{key:"End",description:"Sets slider value to max value"}]})]})}var eA=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(eC,Object.assign({},e,{children:(0,n.jsx)(eR,e)}))};function ez(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1002:function(e,l,a){"use strict";a.d(l,{Z:function(){return n}});var n=(0,a(54764).Z)("heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])}},function(e){e.O(0,[4878,9341,4940,9774,2888,179],function(){return e(e.s=4032)}),_N_E=e.O()}]);