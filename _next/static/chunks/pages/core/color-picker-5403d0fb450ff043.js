(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5686],{59140:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-picker",function(){return t(38181)}])},38181:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return et}});var o=t(85893),n=t(11151),c=t(34940),a=t(25263),l=t(67294),i=t(25943),s=t(46112),u=t(77048);let d=`
import { useState } from 'react';
import { ColorPicker, Text, Stack } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  return (
    <Stack align="center">
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
    </Stack>
  );
}
`,p={type:"code",component:function(){let[e,r]=(0,l.useState)("rgba(47, 119, 150, 0.7)");return l.createElement(i.K,{align:"center"},l.createElement(s.z,{format:"rgba",value:e,onChange:r}),l.createElement(u.x,null,e))},code:d};var h=Object.defineProperty,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,x=(e,r,t)=>r in e?h(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,j=(e,r)=>{for(var t in r||(r={}))f.call(r,t)&&x(e,t,r[t]);if(m)for(var t of m(r))b.call(r,t)&&x(e,t,r[t]);return e};let y=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,g={type:"configurator",component:function(e){let[r,t]=(0,l.useState)("#C5D899");return l.createElement(i.K,{align:"center"},l.createElement(s.z,j({value:r,onChange:t},e)),l.createElement(u.x,null,r))},code:y,controls:[{prop:"format",type:"select",initialValue:"hex",libraryValue:"hex",data:[{value:"hex",label:"HEX"},{value:"hexa",label:"HEXA"},{value:"rgb",label:"RGB"},{value:"rgba",label:"RGBA"},{value:"hsl",label:"HSL"},{value:"hsla",label:"HSLA"}]}]};var w=t(5037);let k=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker
      format="hex"
      swatches={[${Object.keys(w.t.colors).map(e=>`'${w.t.colors[e][6]}'`).join(", ")}]}
    />
  );
}
`,P={type:"code",component:function(){return l.createElement(i.K,{align:"center"},l.createElement(s.z,{format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(w.t.colors).map(e=>w.t.colors[e][6])}))},code:k};var E=Object.defineProperty,v=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,S=(e,r,t)=>r in e?E(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,z=(e,r)=>{for(var t in r||(r={}))C.call(r,t)&&S(e,t,r[t]);if(v)for(var t of v(r))O.call(r,t)&&S(e,t,r[t]);return e};let T=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={[${Object.keys(w.t.colors).map(e=>`'${w.t.colors[e][6]}'`).join(", ")}]} />
  );
}
`,_={type:"configurator",component:function(e){return l.createElement(s.z,z({mx:"auto",format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(w.t.colors).map(e=>w.t.colors[e][6])},e))},code:T,controls:[{prop:"swatchesPerRow",type:"number",initialValue:7,libraryValue:7,min:5,max:12}]};var D=t(94873);let L=`
import { useState } from 'react';
import { DEFAULT_THEME, ColorPicker, Text, Box } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('#fff');

  return (
    <Box maw={200} mx="auto">
      <ColorPicker
        format="hex"
        value={value}
        onChange={onChange}
        withPicker={false}
        fullWidth
        swatches={[
          ...DEFAULT_THEME.colors.red.slice(0, 7),
          ...DEFAULT_THEME.colors.green.slice(0, 7),
          ...DEFAULT_THEME.colors.blue.slice(0, 7),
        ]}
      />
      <Text ta="center" mt={5}>
        {value}
      </Text>
    </Box>
  );
}
`,A={type:"code",component:function(){let[e,r]=(0,l.useState)("#fff");return l.createElement(D.x,{maw:200,mx:"auto"},l.createElement(s.z,{format:"hex",value:e,onChange:r,withPicker:!1,fullWidth:!0,swatches:[...w.t.colors.red.slice(0,7),...w.t.colors.green.slice(0,7),...w.t.colors.blue.slice(0,7)]}),l.createElement(u.x,{ta:"center",mt:5},e))},code:L};var H=Object.defineProperty,V=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,N=(e,r,t)=>r in e?H(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,F=(e,r)=>{for(var t in r||(r={}))W.call(r,t)&&N(e,t,r[t]);if(V)for(var t of V(r))B.call(r,t)&&N(e,t,r[t]);return e};let I=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,U={type:"configurator",component:function(e){return l.createElement(s.z,F({mx:"auto",format:"rgba",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(w.t.colors).map(e=>w.t.colors[e][6])},e))},code:I,controls:[{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"}]},M=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}
`,R={type:"code",component:function(){return l.createElement(s.z,{fullWidth:!0,size:"lg",format:"rgba"})},code:M};var X=t(33512),$=Object.defineProperty,K=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,q=(e,r,t)=>r in e?$(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,J=(e,r)=>{for(var t in r||(r={}))G.call(r,t)&&q(e,t,r[t]);if(K)for(var t of K(r))Y.call(r,t)&&q(e,t,r[t]);return e};let Q=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker format="rgba" size="lg"{{props}} swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5']} />
  );
}
`,Z={type:"styles-api",data:X.L,component:function(e){return l.createElement(s.z,J({size:"lg",format:"rgba",swatches:["#25262b","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5"]},e))},centered:!0,code:Q},ee=(0,c.A)(a.us.ColorPicker);function er(e){let r=Object.assign({h2:"h2",p:"p",code:"code",ul:"ul",li:"li",pre:"pre"},(0,n.ah)(),e.components),{Demo:t,StylesApiSelectors:c}=r;return t||eo("Demo",!0),c||eo("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:p}),"\n",(0,o.jsx)(r.h2,{id:"color-format",children:"Color format"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"ColorPicker"})," supports hex, hexa, rgb, rgba, hsl and hsla color formats.\nSlider to change opacity and color preview are displayed only for hexa, rgba and hsla formats:"]}),"\n",(0,o.jsx)(t,{data:g}),"\n",(0,o.jsx)(r.h2,{id:"with-swatches",children:"With swatches"}),"\n",(0,o.jsxs)(r.p,{children:["You can add predefined color swatches with ",(0,o.jsx)(r.code,{children:"swatches"})," prop:"]}),"\n",(0,o.jsx)(t,{data:P}),"\n",(0,o.jsxs)(r.p,{children:["By default, ",(0,o.jsx)(r.code,{children:"ColorPicker"})," will display 7 swatches per row, you can configure it with ",(0,o.jsx)(r.code,{children:"swatchesPerRow"})," prop:"]}),"\n",(0,o.jsx)(t,{data:_}),"\n",(0,o.jsxs)(r.p,{children:["To display swatches without picker set ",(0,o.jsx)(r.code,{children:"withPicker={false}"})," and ",(0,o.jsx)(r.code,{children:"fullWidth"})," props:"]}),"\n",(0,o.jsx)(t,{data:A}),"\n",(0,o.jsx)(r.h2,{id:"size",children:"Size"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"ColorPicker"})," has 5 predefined sizes: ",(0,o.jsx)(r.code,{children:"xs"}),", ",(0,o.jsx)(r.code,{children:"sm"}),", ",(0,o.jsx)(r.code,{children:"md"}),", ",(0,o.jsx)(r.code,{children:"lg"})," and ",(0,o.jsx)(r.code,{children:"xl"}),":"]}),"\n",(0,o.jsx)(t,{data:U}),"\n",(0,o.jsx)(r.h2,{id:"fullwidth",children:"fullWidth"}),"\n",(0,o.jsxs)(r.p,{children:["Set ",(0,o.jsx)(r.code,{children:"fullWidth"})," prop to stretch component to 100% of parent width. In this case the picker will not\nhave fixed width, but you can still use ",(0,o.jsx)(r.code,{children:"size"})," prop to control sizes of sliders."]}),"\n",(0,o.jsx)(t,{data:R}),"\n",(0,o.jsx)(c,{component:"ColorPicker"}),"\n",(0,o.jsx)(t,{data:Z}),"\n",(0,o.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsx)(r.p,{children:"ColorPicker component is accessible by default:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Saturation, hue and alpha sliders are focusable"}),"\n",(0,o.jsx)(r.li,{children:"When moused is used to interact with the slider, focus is moved to the slider"}),"\n",(0,o.jsx)(r.li,{children:"All values can be changed with arrows"}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["To make component accessible for screen readers, set ",(0,o.jsx)(r.code,{children:"saturationLabel"}),", ",(0,o.jsx)(r.code,{children:"hueLabel"})," and ",(0,o.jsx)(r.code,{children:"alphaLabel"}),":"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:'import { ColorPicker } from \'@mantine/core\';\n\nfunction Demo() {\n  return <ColorPicker saturationLabel="Saturation" hueLabel="Hue" alphaLabel="Alpha" />;\n}\n'})})]})}var et=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(ee,Object.assign({},e,{children:(0,o.jsx)(er,e)}))};function eo(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[5664,9341,4940,9774,2888,179],function(){return e(e.s=59140)}),_N_E=e.O()}]);