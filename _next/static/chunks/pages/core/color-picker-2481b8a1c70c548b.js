(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5686],{59140:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-picker",function(){return t(17049)}])},17049:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return $}});var o=t(85893),n=t(11151),a=t(34940),l=t(25263),c=t(67294),i=t(25943),s=t(46112),u=t(77048);let p=`
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
`,m={type:"code",component:function(){let[e,r]=(0,c.useState)("rgba(47, 119, 150, 0.7)");return c.createElement(i.K,{align:"center"},c.createElement(s.z,{format:"rgba",value:e,onChange:r}),c.createElement(u.x,null,e))},code:p};var h=Object.defineProperty,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,x=(e,r,t)=>r in e?h(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,j=(e,r)=>{for(var t in r||(r={}))f.call(r,t)&&x(e,t,r[t]);if(d)for(var t of d(r))b.call(r,t)&&x(e,t,r[t]);return e};let y=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,g={type:"configurator",component:function(e){let[r,t]=(0,c.useState)("#C5D899");return c.createElement(i.K,{align:"center"},c.createElement(s.z,j({value:r,onChange:t},e)),c.createElement(u.x,null,r))},code:y,controls:[{prop:"format",type:"select",initialValue:"hex",libraryValue:"hex",data:[{value:"hex",label:"HEX"},{value:"hexa",label:"HEXA"},{value:"rgb",label:"RGB"},{value:"rgba",label:"RGBA"},{value:"hsl",label:"HSL"},{value:"hsla",label:"HSLA"}]}]};var w=t(5037);let E=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker
      format="hex"
      swatches={[${Object.keys(w.t.colors).map(e=>`'${w.t.colors[e][6]}'`).join(", ")}]}
    />
  );
}
`,k={type:"code",component:function(){return c.createElement(i.K,{align:"center"},c.createElement(s.z,{format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(w.t.colors).map(e=>w.t.colors[e][6])}))},code:E};var v=Object.defineProperty,P=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,S=(e,r,t)=>r in e?v(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,T=(e,r)=>{for(var t in r||(r={}))C.call(r,t)&&S(e,t,r[t]);if(P)for(var t of P(r))O.call(r,t)&&S(e,t,r[t]);return e};let _=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={[${Object.keys(w.t.colors).map(e=>`'${w.t.colors[e][6]}'`).join(", ")}]} />
  );
}
`,D={type:"configurator",component:function(e){return c.createElement(s.z,T({mx:"auto",format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(w.t.colors).map(e=>w.t.colors[e][6])},e))},code:_,controls:[{prop:"swatchesPerRow",type:"number",initialValue:7,libraryValue:7,min:5,max:12}]};var z=t(94873);let A=`
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
`,H={type:"code",component:function(){let[e,r]=(0,c.useState)("#fff");return c.createElement(z.x,{maw:200,mx:"auto"},c.createElement(s.z,{format:"hex",value:e,onChange:r,withPicker:!1,fullWidth:!0,swatches:[...w.t.colors.red.slice(0,7),...w.t.colors.green.slice(0,7),...w.t.colors.blue.slice(0,7)]}),c.createElement(u.x,{ta:"center",mt:5},e))},code:A};var L=Object.defineProperty,V=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,F=(e,r,t)=>r in e?L(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,U=(e,r)=>{for(var t in r||(r={}))B.call(r,t)&&F(e,t,r[t]);if(V)for(var t of V(r))N.call(r,t)&&F(e,t,r[t]);return e};let W=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,M={type:"configurator",component:function(e){return c.createElement(s.z,U({mx:"auto",format:"rgba",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(w.t.colors).map(e=>w.t.colors[e][6])},e))},code:W,controls:[{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"}]},R=(0,a.A)(l.us.ColorPicker);function X(e){let r=Object.assign({h2:"h2",p:"p",code:"code",ul:"ul",li:"li",pre:"pre"},(0,n.ah)(),e.components),{Demo:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:m}),"\n",(0,o.jsx)(r.h2,{id:"color-format",children:"Color format"}),"\n",(0,o.jsx)(r.p,{children:"Component supports hex, hexa, rgb, rgba, hsl and hsla color formats.\nSlider to change opacity is displayed only for hexa, rgba and hsla formats:"}),"\n",(0,o.jsx)(t,{data:g}),"\n",(0,o.jsx)(r.h2,{id:"with-swatches",children:"With swatches"}),"\n",(0,o.jsx)(r.p,{children:"You can add any amount of predefined color swatches:"}),"\n",(0,o.jsx)(t,{data:k}),"\n",(0,o.jsxs)(r.p,{children:["By default, there will be 10 swatches per row, you can change this with ",(0,o.jsx)(r.code,{children:"swatchesPerRow"})," prop:"]}),"\n",(0,o.jsx)(t,{data:D}),"\n",(0,o.jsxs)(r.p,{children:["To display swatches without picker set ",(0,o.jsx)(r.code,{children:"withPicker={false}"})," and ",(0,o.jsx)(r.code,{children:"fullWidth"})," props:"]}),"\n",(0,o.jsx)(t,{data:H}),"\n",(0,o.jsx)(r.h2,{id:"size",children:"Size"}),"\n",(0,o.jsx)(r.p,{children:"Component has 5 predefined sizes: xs, sm, md, lg and xl:"}),"\n",(0,o.jsx)(t,{data:M}),"\n",(0,o.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsx)(r.p,{children:"ColorPicker component is accessible by default:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Saturation, hue and alpha sliders are focusable"}),"\n",(0,o.jsx)(r.li,{children:"When user uses mouse to interact with slider, focus is moved on slider"}),"\n",(0,o.jsx)(r.li,{children:"All values can be changed with arrows"}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"To make component visible for screen readers provide following props:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:'<ColorPicker saturationLabel="Saturation" hueLabel="Hue" alphaLabel="Alpha" />\n'})})]})}var $=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(R,Object.assign({},e,{children:(0,o.jsx)(X,e)}))}}},function(e){e.O(0,[4878,9341,4940,9774,2888,179],function(){return e(e.s=59140)}),_N_E=e.O()}]);