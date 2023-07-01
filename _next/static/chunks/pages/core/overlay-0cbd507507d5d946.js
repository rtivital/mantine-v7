(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[783],{77266:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/overlay",function(){return o(89964)}])},89964:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return E}});var r=o(85893),a=o(11151),n=o(34940),i=o(25263),c=o(67294),l=o(25278),s=o(52569),d=o(43406);let u=`
import { useState } from 'react';
import { Button, Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <AspectRatio ratio={16 / 9} maw={400} mx="auto">
        <img
          src="https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          alt="Demo"
        />
        {visible && <Overlay color="#000" backgroundOpacity={0.85} />}
      </AspectRatio>
      <Button onClick={() => setVisible((v) => !v)} fullWidth maw={200} mx="auto" mt="xl">
        Toggle overlay
      </Button>
    </>
  );
}
`,p={type:"code",code:u,component:function(){let[e,t]=(0,c.useState)(!0);return c.createElement(c.Fragment,null,c.createElement(l.o,{ratio:16/9,maw:400,mx:"auto"},c.createElement("img",{src:"https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",alt:"Demo"}),e&&c.createElement(s.a,{color:"#000",backgroundOpacity:.85})),c.createElement(d.z,{onClick:()=>t(e=>!e),fullWidth:!0,maw:200,mx:"auto",mt:"xl"},"Toggle overlay"))}},m=`
import { useState } from 'react';
import { Button, Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <AspectRatio ratio={16 / 9} maw={400} mx="auto">
        <img
          src="https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          alt="Demo"
        />
        {visible && (
          <Overlay
            gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
            opacity={0.85}
          />
        )}
      </AspectRatio>
      <Button onClick={() => setVisible((v) => !v)} fullWidth maw={200} mx="auto" mt="xl">
        Toggle overlay
      </Button>
    </>
  );
}
`,f={type:"code",code:m,component:function(){let[e,t]=(0,c.useState)(!0);return c.createElement(c.Fragment,null,c.createElement(l.o,{ratio:16/9,maw:400,mx:"auto"},c.createElement("img",{src:"https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",alt:"Demo"}),e&&c.createElement(s.a,{gradient:"linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)",opacity:.85})),c.createElement(d.z,{onClick:()=>t(e=>!e),fullWidth:!0,maw:200,mx:"auto",mt:"xl"},"Toggle overlay"))}};var x=Object.defineProperty,b=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,y=(e,t,o)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,w=(e,t)=>{for(var o in t||(t={}))h.call(t,o)&&y(e,o,t[o]);if(b)for(var o of b(t))g.call(t,o)&&y(e,o,t[o]);return e};let j=`
import { Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9} maw={400} mx="auto">
      <img
        src="https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        alt="Demo"
      />
      <Overlay color="#000" backgroundOpacity={0.35}{{props}} />
    </AspectRatio>
  );
}
`,v={type:"configurator",component:function(e){return c.createElement(l.o,{ratio:16/9,maw:400,mx:"auto"},c.createElement("img",{src:"https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",alt:"Demo"}),c.createElement(s.a,w({color:"#000",backgroundOpacity:.35},e)))},code:j,controls:[{type:"number",prop:"blur",initialValue:15,libraryValue:null,min:0,max:30}]},O=(0,n.A)(i.us.Overlay);function k(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,a.ah)(),e.components),{Demo:o,Polymorphic:n}=t;return o||D("Demo",!0),n||D("Polymorphic",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Overlay"})," takes 100% of width and height of parent container or viewport if ",(0,r.jsx)(t.code,{children:"fixed"})," prop is set.\nSet ",(0,r.jsx)(t.code,{children:"color"})," and ",(0,r.jsx)(t.code,{children:"backgroundOpacity"})," props to change ",(0,r.jsx)(t.code,{children:"Overlay"})," background-color. Note that ",(0,r.jsx)(t.code,{children:"backgroundOpacity"})," prop\ndoes not change CSS opacity property, it changes background-color. For example, if you set\n",(0,r.jsx)(t.code,{children:'color="#000"'})," and ",(0,r.jsx)(t.code,{children:"backgroundOpacity={0.85}"})," background-color will be ",(0,r.jsx)(t.code,{children:"rgba(0, 0, 0, 0.85)"}),":"]}),"\n",(0,r.jsx)(o,{data:p}),"\n",(0,r.jsx)(t.h2,{id:"gradient",children:"Gradient"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"gradient"})," prop to use background-image instead of background-color. When ",(0,r.jsx)(t.code,{children:"gradient"})," prop is set,\n",(0,r.jsx)(t.code,{children:"color"})," and ",(0,r.jsx)(t.code,{children:"backgroundOpacity"})," props are ignored."]}),"\n",(0,r.jsx)(o,{data:f}),"\n",(0,r.jsx)(t.h2,{id:"blur",children:"Blur"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"blur"})," prop to add ",(0,r.jsx)(t.code,{children:"backdrop-filter: blur({value})"})," styles.\nNote that ",(0,r.jsx)(t.code,{children:"backdrop-filter"})," ",(0,r.jsx)(t.a,{href:"https://caniuse.com/css-backdrop-filter",children:"is not supported in all browsers"}),"."]}),"\n",(0,r.jsx)(o,{data:v}),"\n",(0,r.jsx)(n,{defaultElement:"div",changeToElement:"a",component:"Overlay",withNext:!0})]})}var E=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(O,Object.assign({},e,{children:(0,r.jsx)(k,e)}))};function D(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[2411,7437,514,9774,2888,179],function(){return e(e.s=77266)}),_N_E=e.O()}]);