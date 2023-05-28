(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5686],{59140:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-picker",function(){return o(38181)}])},38181:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return L}});var t=o(85893),n=o(11151),c=o(34940),a=o(25263),l=o(67294),i=o(25943),s=o(46112),d=o(77048);let u=`
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
`,h={type:"code",component:function(){let[e,r]=(0,l.useState)("rgba(47, 119, 150, 0.7)");return l.createElement(i.K,{align:"center"},l.createElement(s.z,{format:"rgba",value:e,onChange:r}),l.createElement(d.x,null,e))},code:u},m=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,p={type:"configurator",component:function(e){let[r,o]=(0,l.useState)("#C5D899");return l.createElement(i.K,{align:"center"},l.createElement(s.z,Object.assign({value:r,onChange:o},e)),l.createElement(d.x,null,r))},code:m,controls:[{prop:"format",type:"select",initialValue:"hex",libraryValue:"hex",data:[{value:"hex",label:"HEX"},{value:"hexa",label:"HEXA"},{value:"rgb",label:"RGB"},{value:"rgba",label:"RGBA"},{value:"hsl",label:"HSL"},{value:"hsla",label:"HSLA"}]}]};var f=o(5037);let x=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker
      format="hex"
      swatches={[${Object.keys(f.t.colors).map(e=>`'${f.t.colors[e][6]}'`).join(", ")}]}
    />
  );
}
`,b={type:"code",component:function(){return l.createElement(i.K,{align:"center"},l.createElement(s.z,{format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(f.t.colors).map(e=>f.t.colors[e][6])}))},code:x},j=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={[${Object.keys(f.t.colors).map(e=>`'${f.t.colors[e][6]}'`).join(", ")}]} />
  );
}
`,g={type:"configurator",component:function(e){return l.createElement(s.z,Object.assign({mx:"auto",format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(f.t.colors).map(e=>f.t.colors[e][6])},e))},code:j,controls:[{prop:"swatchesPerRow",type:"number",initialValue:7,libraryValue:7,min:5,max:12}]};var w=o(94873);let k=`
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
`,C={type:"code",component:function(){let[e,r]=(0,l.useState)("#fff");return l.createElement(w.x,{maw:200,mx:"auto"},l.createElement(s.z,{format:"hex",value:e,onChange:r,withPicker:!1,fullWidth:!0,swatches:[...f.t.colors.red.slice(0,7),...f.t.colors.green.slice(0,7),...f.t.colors.blue.slice(0,7)]}),l.createElement(d.x,{ta:"center",mt:5},e))},code:k},E=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,y={type:"configurator",component:function(e){return l.createElement(s.z,Object.assign({mx:"auto",format:"rgba",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(f.t.colors).map(e=>f.t.colors[e][6])},e))},code:E,controls:[{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"}]},P=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}
`,v={type:"code",component:function(){return l.createElement(s.z,{fullWidth:!0,size:"lg",format:"rgba"})},code:P};var z=o(33512);let S=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker format="rgba" size="lg"{{props}} swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5']} />
  );
}
`,T={type:"styles-api",data:z.L,component:function(e){return l.createElement(s.z,Object.assign({size:"lg",format:"rgba",swatches:["#25262b","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5"]},e))},centered:!0,code:S},_=(0,c.A)(a.us.ColorPicker);function D(e){let r=Object.assign({h2:"h2",p:"p",code:"code",ul:"ul",li:"li",pre:"pre"},(0,n.ah)(),e.components),{Demo:o,StylesApiSelectors:c}=r;return o||O("Demo",!0),c||O("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:h}),"\n",(0,t.jsx)(r.h2,{id:"color-format",children:"Color format"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"ColorPicker"})," supports hex, hexa, rgb, rgba, hsl and hsla color formats.\nSlider to change opacity and color preview are displayed only for hexa, rgba and hsla formats:"]}),"\n",(0,t.jsx)(o,{data:p}),"\n",(0,t.jsx)(r.h2,{id:"with-swatches",children:"With swatches"}),"\n",(0,t.jsxs)(r.p,{children:["You can add predefined color swatches with ",(0,t.jsx)(r.code,{children:"swatches"})," prop:"]}),"\n",(0,t.jsx)(o,{data:b}),"\n",(0,t.jsxs)(r.p,{children:["By default, ",(0,t.jsx)(r.code,{children:"ColorPicker"})," will display 7 swatches per row, you can configure it with ",(0,t.jsx)(r.code,{children:"swatchesPerRow"})," prop:"]}),"\n",(0,t.jsx)(o,{data:g}),"\n",(0,t.jsxs)(r.p,{children:["To display swatches without picker set ",(0,t.jsx)(r.code,{children:"withPicker={false}"})," and ",(0,t.jsx)(r.code,{children:"fullWidth"})," props:"]}),"\n",(0,t.jsx)(o,{data:C}),"\n",(0,t.jsx)(r.h2,{id:"size",children:"Size"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"ColorPicker"})," has 5 predefined sizes: ",(0,t.jsx)(r.code,{children:"xs"}),", ",(0,t.jsx)(r.code,{children:"sm"}),", ",(0,t.jsx)(r.code,{children:"md"}),", ",(0,t.jsx)(r.code,{children:"lg"})," and ",(0,t.jsx)(r.code,{children:"xl"}),":"]}),"\n",(0,t.jsx)(o,{data:y}),"\n",(0,t.jsx)(r.h2,{id:"fullwidth",children:"fullWidth"}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"fullWidth"})," prop to stretch component to 100% of parent width. In this case the picker will not\nhave fixed width, but you can still use ",(0,t.jsx)(r.code,{children:"size"})," prop to control sizes of sliders."]}),"\n",(0,t.jsx)(o,{data:v}),"\n",(0,t.jsx)(c,{component:"ColorPicker"}),"\n",(0,t.jsx)(o,{data:T}),"\n",(0,t.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsx)(r.p,{children:"ColorPicker component is accessible by default:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Saturation, hue and alpha sliders are focusable"}),"\n",(0,t.jsx)(r.li,{children:"When moused is used to interact with the slider, focus is moved to the slider"}),"\n",(0,t.jsx)(r.li,{children:"All values can be changed with arrows"}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["To make component accessible for screen readers, set ",(0,t.jsx)(r.code,{children:"saturationLabel"}),", ",(0,t.jsx)(r.code,{children:"hueLabel"})," and ",(0,t.jsx)(r.code,{children:"alphaLabel"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:'import { ColorPicker } from \'@mantine/core\';\n\nfunction Demo() {\n  return <ColorPicker saturationLabel="Saturation" hueLabel="Hue" alphaLabel="Alpha" />;\n}\n'})})]})}var L=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(_,Object.assign({},e,{children:(0,t.jsx)(D,e)}))};function O(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=59140)}),_N_E=e.O()}]);