(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[783],{77266:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/overlay",function(){return o(48462)}])},48462:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return N}});var r=o(85893),a=o(11151),n=o(34940),i=o(25263),c=o(67294),l=o(25278),s=o(59312),d={root:"mantine-aUY-pnb"},u=o(70656),m=o(35577),p=o(89123),f=o(94873),x=o(13279),b=o(95553),h=o(26595),g=o(46393),y=o(71350);let w={color:"#000",backgroundOpacity:.6,zIndex:(0,x.w)("modal")},v=(0,b.Z)((e,{gradient:t,color:o,backgroundOpacity:r,blur:a,radius:n,zIndex:i})=>({root:{"--overlay-bg":t||(0,h.m)(o||"#000",null!=r?r:.6),"--overlay-filter":a?`blur(${(0,g.h)(a)})`:void 0,"--overlay-radius":(0,y.H5)(n),"--overlay-z-index":null==i?void 0:i.toString()}})),j=(0,u.b)((e,t)=>{let o=(0,m.w)("Overlay",w,e),{classNames:r,className:a,style:n,styles:i,unstyled:l,vars:u,fixed:x,center:b,children:h,radius:g,zIndex:y,gradient:j,blur:k,color:O,backgroundOpacity:E}=o,B=(0,s._T)(o,["classNames","className","style","styles","unstyled","vars","fixed","center","children","radius","zIndex","gradient","blur","color","backgroundOpacity"]),D=(0,p.y)({name:"Overlay",props:o,classes:d,className:a,style:n,classNames:r,styles:i,unstyled:l,vars:u,varsResolver:v});return c.createElement(f.x,Object.assign({ref:t},D("root"),{mod:{center:b,fixed:x}},B),h)});j.displayName="@mantine/core/Overlay";var k=o(43406);let O=`
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
`,E={type:"code",code:O,component:function(){let[e,t]=(0,c.useState)(!0);return c.createElement(c.Fragment,null,c.createElement(l.o,{ratio:16/9,maw:400,mx:"auto"},c.createElement("img",{src:"https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",alt:"Demo"}),e&&c.createElement(j,{color:"#000",backgroundOpacity:.85})),c.createElement(k.z,{onClick:()=>t(e=>!e),fullWidth:!0,maw:200,mx:"auto",mt:"xl"},"Toggle overlay"))}},B=`
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
`,D={type:"code",code:B,component:function(){let[e,t]=(0,c.useState)(!0);return c.createElement(c.Fragment,null,c.createElement(l.o,{ratio:16/9,maw:400,mx:"auto"},c.createElement("img",{src:"https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",alt:"Demo"}),e&&c.createElement(j,{gradient:"linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)",opacity:.85})),c.createElement(k.z,{onClick:()=>t(e=>!e),fullWidth:!0,maw:200,mx:"auto",mt:"xl"},"Toggle overlay"))}},A=`
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
`,H={type:"code",code:A,component:function(){let[e,t]=(0,c.useState)(!1);return c.createElement(l.o,{ratio:16/9,maw:400,mx:"auto"},c.createElement("img",{src:"https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",alt:"Demo",onClick:()=>t(!1)}),!e&&c.createElement(j,{blur:15,center:!0},c.createElement(k.z,{color:"red",radius:"xl",onClick:()=>t(!0)},"NSFW, click to reveal")))}},M=(0,n.A)(i.us.Overlay);function S(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,a.ah)(),e.components),{Demo:o,Polymorphic:n}=t;return o||_("Demo",!0),n||_("Polymorphic",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Overlay"})," takes 100% of width and height of parent container or viewport if ",(0,r.jsx)(t.code,{children:"fixed"})," prop is set.\nSet ",(0,r.jsx)(t.code,{children:"color"})," and ",(0,r.jsx)(t.code,{children:"backgroundOpacity"})," props to change ",(0,r.jsx)(t.code,{children:"Overlay"})," background-color. Note that ",(0,r.jsx)(t.code,{children:"backgroundOpacity"})," prop\ndoes not change CSS opacity property, it changes background-color. For example, if you set\n",(0,r.jsx)(t.code,{children:'color="#000"'})," and ",(0,r.jsx)(t.code,{children:"backgroundOpacity={0.85}"})," background-color will be ",(0,r.jsx)(t.code,{children:"rgba(0, 0, 0, 0.85)"}),":"]}),"\n",(0,r.jsx)(o,{data:E}),"\n",(0,r.jsx)(t.h2,{id:"gradient",children:"Gradient"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"gradient"})," prop to use background-image instead of background-color. When ",(0,r.jsx)(t.code,{children:"gradient"})," prop is set,\n",(0,r.jsx)(t.code,{children:"color"})," and ",(0,r.jsx)(t.code,{children:"backgroundOpacity"})," props are ignored."]}),"\n",(0,r.jsx)(o,{data:D}),"\n",(0,r.jsx)(t.h2,{id:"blur",children:"Blur"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"blur"})," prop to add ",(0,r.jsx)(t.code,{children:"backdrop-filter: blur({value})"})," styles.\nNote that ",(0,r.jsx)(t.code,{children:"backdrop-filter"})," ",(0,r.jsx)(t.a,{href:"https://caniuse.com/css-backdrop-filter",children:"is not supported in all browsers"}),"."]}),"\n",(0,r.jsx)(o,{data:H}),"\n",(0,r.jsx)(n,{defaultElement:"div",changeToElement:"a",component:"Overlay",withNext:!0})]})}var N=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(M,Object.assign({},e,{children:(0,r.jsx)(S,e)}))};function _(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},25278:function(e,t,o){"use strict";o.d(t,{o:function(){return p}});var r=o(59312),a=o(67294),n={root:"mantine-iUBXcbk"},i=o(75144),c=o(35577),l=o(89123),s=o(94873),d=o(95553);let u={},m=(0,d.Z)((e,{ratio:t})=>({root:{"--ar-ratio":(null!=t?t:1).toString()}})),p=(0,i.d)((e,t)=>{let o=(0,c.w)("AspectRatio",u,e),{classNames:i,className:d,style:p,styles:f,unstyled:x,vars:b,ratio:h}=o,g=(0,r._T)(o,["classNames","className","style","styles","unstyled","vars","ratio"]),y=(0,l.y)({name:"AspectRatio",classes:n,props:o,className:d,style:p,classNames:i,styles:f,unstyled:x,vars:b,varsResolver:m});return a.createElement(s.x,Object.assign({ref:t},y("root"),g))});p.displayName="@mantine/core/AspectRatio"}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=77266)}),_N_E=e.O()}]);