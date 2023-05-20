(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[783],{77266:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/overlay",function(){return o(48462)}])},48462:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return Y}});var r=o(85893),a=o(11151),n=o(34940),i=o(25263),l=o(67294),c=o(25278),s={root:"mantine-aUY-pnb"},d=o(70656),u=o(35577),m=o(89123),p=o(94873),f=o(13279),b=o(95553),x=o(26595),h=o(46393),y=o(71350),g=Object.defineProperty,v=Object.defineProperties,w=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,E=(e,t,o)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,B=(e,t)=>{for(var o in t||(t={}))O.call(t,o)&&E(e,o,t[o]);if(j)for(var o of j(t))k.call(t,o)&&E(e,o,t[o]);return e},D=(e,t)=>v(e,w(t)),S=(e,t)=>{var o={};for(var r in e)O.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&j)for(var r of j(e))0>t.indexOf(r)&&k.call(e,r)&&(o[r]=e[r]);return o};let A={color:"#000",backgroundOpacity:.6,zIndex:(0,f.w)("modal")},H=(0,b.Z)((e,{gradient:t,color:o,backgroundOpacity:r,blur:a,radius:n,zIndex:i})=>({root:{"--overlay-bg":t||(0,x.m)(o||"#000",null!=r?r:.6),"--overlay-filter":a?`blur(${(0,h.h)(a)})`:void 0,"--overlay-radius":(0,y.H5)(n),"--overlay-z-index":null==i?void 0:i.toString()}})),M=(0,d.b)((e,t)=>{let o=(0,u.w)("Overlay",A,e),{classNames:r,className:a,style:n,styles:i,unstyled:c,vars:d,fixed:f,center:b,children:x,radius:h,zIndex:y,gradient:g,blur:v,color:w,backgroundOpacity:j}=o,O=S(o,["classNames","className","style","styles","unstyled","vars","fixed","center","children","radius","zIndex","gradient","blur","color","backgroundOpacity"]),k=(0,m.y)({name:"Overlay",props:o,classes:s,className:a,style:n,classNames:r,styles:i,unstyled:c,vars:d,varsResolver:H});return l.createElement(p.x,B(D(B({ref:t},k("root")),{mod:{center:b,fixed:f}}),O),x)});M.displayName="@mantine/core/Overlay";var N=o(43406);let G=`
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
`,V={type:"code",code:G,component:function(){let[e,t]=(0,l.useState)(!0);return l.createElement(l.Fragment,null,l.createElement(c.o,{ratio:16/9,maw:400,mx:"auto"},l.createElement("img",{src:"https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",alt:"Demo"}),e&&l.createElement(M,{color:"#000",backgroundOpacity:.85})),l.createElement(N.z,{onClick:()=>t(e=>!e),fullWidth:!0,maw:200,mx:"auto",mt:"xl"},"Toggle overlay"))}},W=`
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
`,R={type:"code",code:W,component:function(){let[e,t]=(0,l.useState)(!0);return l.createElement(l.Fragment,null,l.createElement(c.o,{ratio:16/9,maw:400,mx:"auto"},l.createElement("img",{src:"https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",alt:"Demo"}),e&&l.createElement(M,{gradient:"linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)",opacity:.85})),l.createElement(N.z,{onClick:()=>t(e=>!e),fullWidth:!0,maw:200,mx:"auto",mt:"xl"},"Toggle overlay"))}},_=`
import { useState } from 'react';
import { Button, Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  const [visible, setVisible] = useState(false);

  return (
    <AspectRatio ratio={16 / 9} maw={400} mx="auto">
      <img
        src="https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        alt="Demo"
        onClick={() => setVisible(false)}
      />
      {!visible && (
        <Overlay blur={15} center>
          <Button color="red" radius="xl" onClick={() => setVisible(true)}>
            NSFW, click to reveal
          </Button>
        </Overlay>
      )}
    </AspectRatio>
  );
}
`,C={type:"code",code:_,component:function(){let[e,t]=(0,l.useState)(!1);return l.createElement(c.o,{ratio:16/9,maw:400,mx:"auto"},l.createElement("img",{src:"https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",alt:"Demo",onClick:()=>t(!1)}),!e&&l.createElement(M,{blur:15,center:!0},l.createElement(N.z,{color:"red",radius:"xl",onClick:()=>t(!0)},"NSFW, click to reveal")))}},P=(0,n.A)(i.us.Overlay);function T(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,a.ah)(),e.components),{Demo:o,Polymorphic:n}=t;return o||q("Demo",!0),n||q("Polymorphic",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Overlay"})," takes 100% of width and height of parent container or viewport if ",(0,r.jsx)(t.code,{children:"fixed"})," prop is set.\nSet ",(0,r.jsx)(t.code,{children:"color"})," and ",(0,r.jsx)(t.code,{children:"backgroundOpacity"})," props to change ",(0,r.jsx)(t.code,{children:"Overlay"})," background-color. Note that ",(0,r.jsx)(t.code,{children:"backgroundOpacity"})," prop\ndoes not change CSS opacity property, it changes background-color. For example, if you set\n",(0,r.jsx)(t.code,{children:'color="#000"'})," and ",(0,r.jsx)(t.code,{children:"backgroundOpacity={0.85}"})," background-color will be ",(0,r.jsx)(t.code,{children:"rgba(0, 0, 0, 0.85)"}),":"]}),"\n",(0,r.jsx)(o,{data:V}),"\n",(0,r.jsx)(t.h2,{id:"gradient",children:"Gradient"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"gradient"})," prop to use background-image instead of background-color. When ",(0,r.jsx)(t.code,{children:"gradient"})," prop is set,\n",(0,r.jsx)(t.code,{children:"color"})," and ",(0,r.jsx)(t.code,{children:"backgroundOpacity"})," props are ignored."]}),"\n",(0,r.jsx)(o,{data:R}),"\n",(0,r.jsx)(t.h2,{id:"blur",children:"Blur"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"blur"})," prop to add ",(0,r.jsx)(t.code,{children:"backdrop-filter: blur({value})"})," styles.\nNote that ",(0,r.jsx)(t.code,{children:"backdrop-filter"})," ",(0,r.jsx)(t.a,{href:"https://caniuse.com/css-backdrop-filter",children:"is not supported in all browsers"}),"."]}),"\n",(0,r.jsx)(o,{data:C}),"\n",(0,r.jsx)(n,{defaultElement:"div",changeToElement:"a",component:"Overlay",withNext:!0})]})}var Y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(P,Object.assign({},e,{children:(0,r.jsx)(T,e)}))};function q(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},25278:function(e,t,o){"use strict";o.d(t,{o:function(){return g}});var r=o(67294),a={root:"mantine-iUBXcbk"},n=o(75144),i=o(35577),l=o(89123),c=o(94873),s=o(95553),d=Object.defineProperty,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,t,o)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,b=(e,t)=>{for(var o in t||(t={}))m.call(t,o)&&f(e,o,t[o]);if(u)for(var o of u(t))p.call(t,o)&&f(e,o,t[o]);return e},x=(e,t)=>{var o={};for(var r in e)m.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&u)for(var r of u(e))0>t.indexOf(r)&&p.call(e,r)&&(o[r]=e[r]);return o};let h={},y=(0,s.Z)((e,{ratio:t})=>({root:{"--ar-ratio":(null!=t?t:1).toString()}})),g=(0,n.d)((e,t)=>{let o=(0,i.w)("AspectRatio",h,e),{classNames:n,className:s,style:d,styles:u,unstyled:m,vars:p,ratio:f}=o,g=x(o,["classNames","className","style","styles","unstyled","vars","ratio"]),v=(0,l.y)({name:"AspectRatio",classes:a,props:o,className:s,style:d,classNames:n,styles:u,unstyled:m,vars:p,varsResolver:y});return r.createElement(c.x,b(b({ref:t},v("root")),g))});g.displayName="@mantine/core/AspectRatio"}},function(e){e.O(0,[5664,9341,4940,9774,2888,179],function(){return e(e.s=77266)}),_N_E=e.O()}]);