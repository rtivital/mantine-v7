(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[783],{33507:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},79153:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]])},62640:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},77266:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/overlay",function(){return r(89964)}])},89964:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return M}});var o=r(85893),a=r(11151),n=r(34940),i=r(25263),c=r(67294),l=r(25278),s=r(52569),d=r(43406);let u=`
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
`,p={type:"code",code:u,component:function(){let[e,t]=(0,c.useState)(!0);return c.createElement(c.Fragment,null,c.createElement(l.o,{ratio:16/9,maw:400,mx:"auto"},c.createElement("img",{src:"https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",alt:"Demo"}),e&&c.createElement(s.a,{color:"#000",backgroundOpacity:.85})),c.createElement(d.z,{onClick:()=>t(e=>!e),fullWidth:!0,maw:200,mx:"auto",mt:"xl"},"Toggle overlay"))}},f=`
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
`,m={type:"code",code:f,component:function(){let[e,t]=(0,c.useState)(!0);return c.createElement(c.Fragment,null,c.createElement(l.o,{ratio:16/9,maw:400,mx:"auto"},c.createElement("img",{src:"https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",alt:"Demo"}),e&&c.createElement(s.a,{gradient:"linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)",opacity:.85})),c.createElement(d.z,{onClick:()=>t(e=>!e),fullWidth:!0,maw:200,mx:"auto",mt:"xl"},"Toggle overlay"))}};var h=Object.defineProperty,y=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&v(e,r,t[r]);if(y)for(var r of y(t))b.call(t,r)&&v(e,r,t[r]);return e};let w=`
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
`,k={type:"configurator",component:function(e){return c.createElement(l.o,{ratio:16/9,maw:400,mx:"auto"},c.createElement("img",{src:"https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",alt:"Demo"}),c.createElement(s.a,x({color:"#000",backgroundOpacity:.35},e)))},code:w,controls:[{type:"number",prop:"blur",initialValue:15,libraryValue:null,min:0,max:30}]},j=(0,n.A)(i.us.Overlay);function O(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,a.ah)(),e.components),{Demo:r,Polymorphic:n}=t;return r||E("Demo",!0),n||E("Polymorphic",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Overlay"})," takes 100% of width and height of parent container or viewport if ",(0,o.jsx)(t.code,{children:"fixed"})," prop is set.\nSet ",(0,o.jsx)(t.code,{children:"color"})," and ",(0,o.jsx)(t.code,{children:"backgroundOpacity"})," props to change ",(0,o.jsx)(t.code,{children:"Overlay"})," background-color. Note that ",(0,o.jsx)(t.code,{children:"backgroundOpacity"})," prop\ndoes not change CSS opacity property, it changes background-color. For example, if you set\n",(0,o.jsx)(t.code,{children:'color="#000"'})," and ",(0,o.jsx)(t.code,{children:"backgroundOpacity={0.85}"})," background-color will be ",(0,o.jsx)(t.code,{children:"rgba(0, 0, 0, 0.85)"}),":"]}),"\n",(0,o.jsx)(r,{data:p}),"\n",(0,o.jsx)(t.h2,{id:"gradient",children:"Gradient"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"gradient"})," prop to use background-image instead of background-color. When ",(0,o.jsx)(t.code,{children:"gradient"})," prop is set,\n",(0,o.jsx)(t.code,{children:"color"})," and ",(0,o.jsx)(t.code,{children:"backgroundOpacity"})," props are ignored."]}),"\n",(0,o.jsx)(r,{data:m}),"\n",(0,o.jsx)(t.h2,{id:"blur",children:"Blur"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"blur"})," prop to add ",(0,o.jsx)(t.code,{children:"backdrop-filter: blur({value})"})," styles.\nNote that ",(0,o.jsx)(t.code,{children:"backdrop-filter"})," ",(0,o.jsx)(t.a,{href:"https://caniuse.com/css-backdrop-filter",children:"is not supported in all browsers"}),"."]}),"\n",(0,o.jsx)(r,{data:k}),"\n",(0,o.jsx)(n,{defaultElement:"div",changeToElement:"a",component:"Overlay",withNext:!0})]})}var M=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(j,Object.assign({},e,{children:(0,o.jsx)(O,e)}))};function E(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},25278:function(e,t,r){"use strict";r.d(t,{o:function(){return v}});var o=r(67294),a={root:"mantine-iUBXcbk"},n=r(75144),i=r(35577),c=r(89123),l=r(94873),s=r(95553),d=Object.defineProperty,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&m(e,r,t[r]);if(u)for(var r of u(t))f.call(t,r)&&m(e,r,t[r]);return e},y=(e,t)=>{var r={};for(var o in e)p.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&u)for(var o of u(e))0>t.indexOf(o)&&f.call(e,o)&&(r[o]=e[o]);return r};let g={},b=(0,s.Z)((e,{ratio:t})=>({root:{"--ar-ratio":(null!=t?t:1).toString()}})),v=(0,n.d)((e,t)=>{let r=(0,i.w)("AspectRatio",g,e),{classNames:n,className:s,style:d,styles:u,unstyled:p,vars:f,ratio:m}=r,v=y(r,["classNames","className","style","styles","unstyled","vars","ratio"]),x=(0,c.y)({name:"AspectRatio",classes:a,props:r,className:s,style:d,classNames:n,styles:u,unstyled:p,vars:f,varsResolver:b});return o.createElement(l.x,h(h({ref:t},x("root")),v))});v.classes=a,v.displayName="@mantine/core/AspectRatio"},52569:function(e,t,r){"use strict";r.d(t,{a:function(){return E}});var o=r(67294),a={root:"mantine-aUY-pnb"},n=r(70656),i=r(35577),c=r(89123),l=r(94873),s=r(13279),d=r(95553),u=r(26595),p=r(46393),f=r(71350),m=Object.defineProperty,h=Object.defineProperties,y=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,w=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&x(e,r,t[r]);if(g)for(var r of g(t))v.call(t,r)&&x(e,r,t[r]);return e},k=(e,t)=>h(e,y(t)),j=(e,t)=>{var r={};for(var o in e)b.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&g)for(var o of g(e))0>t.indexOf(o)&&v.call(e,o)&&(r[o]=e[o]);return r};let O={color:"#000",backgroundOpacity:.6,zIndex:(0,s.w)("modal"),radius:0},M=(0,d.Z)((e,{gradient:t,color:r,backgroundOpacity:o,blur:a,radius:n,zIndex:i})=>({root:{"--overlay-bg":t||(0,u.m)(r||"#000",null!=o?o:.6),"--overlay-filter":a?`blur(${(0,p.h)(a)})`:void 0,"--overlay-radius":(0,f.H5)(n),"--overlay-z-index":null==i?void 0:i.toString()}})),E=(0,n.b)((e,t)=>{let r=(0,i.w)("Overlay",O,e),{classNames:n,className:s,style:d,styles:u,unstyled:p,vars:f,fixed:m,center:h,children:y,radius:g,zIndex:b,gradient:v,blur:x,color:E,backgroundOpacity:D}=r,A=j(r,["classNames","className","style","styles","unstyled","vars","fixed","center","children","radius","zIndex","gradient","blur","color","backgroundOpacity"]),B=(0,c.y)({name:"Overlay",props:r,classes:a,className:s,style:d,classNames:n,styles:u,unstyled:p,vars:f,varsResolver:M});return o.createElement(l.x,w(k(w({ref:t},B("root")),{mod:{center:h,fixed:m}}),A),y)});E.classes=a,E.displayName="@mantine/core/Overlay"}},function(e){e.O(0,[8969,9341,4831,9774,2888,179],function(){return e(e.s=77266)}),_N_E=e.O()}]);