(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4051],{34976:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/aspect-ratio",function(){return o(7765)}])},7765:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return y}});var r=o(85893),a=o(11151),n=o(34940),i=o(25263),c=o(67294),s=o(25278);let m=`
import { AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={720 / 1080} maw={300} mx="auto">
      <img
        src="https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        alt="Panda"
      />
    </AspectRatio>
  );
}
`,l={type:"code",component:function(){return c.createElement(s.o,{ratio:720/1080,maw:300,mx:"auto"},c.createElement("img",{src:"https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",alt:"Panda"}))},code:m},p=`
import { AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
        title="Google map"
        style={{ border: 0 }}
      />
    </AspectRatio>
  );
}
`,d={type:"code",component:function(){return c.createElement(s.o,{ratio:16/9},c.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru",title:"Google map",style:{border:0}}))},code:p},u=`
import { AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.youtube.com/embed/mzJ4vCjSt28"
        title="YouTube video player"
        style={{ border: 0 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
  );
}
`,f={type:"code",component:function(){return c.createElement(s.o,{ratio:16/9},c.createElement("iframe",{src:"https://www.youtube.com/embed/mzJ4vCjSt28",title:"YouTube video player",style:{border:0},allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))},code:u},b=(0,n.A)(i.us.AspectRatio);function w(e){let t=Object.assign({h2:"h2",p:"p",code:"code"},(0,a.ah)(),e.components),{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"AspectRatio"})," allows maintaining a consistent width/height ratio.\nIt can be used to display images, maps, videos and other media."]}),"\n",(0,r.jsx)(o,{data:l}),"\n",(0,r.jsx)(t.h2,{id:"map-embed",children:"Map embed"}),"\n",(0,r.jsx)(o,{data:d}),"\n",(0,r.jsx)(t.h2,{id:"video-embed",children:"Video embed"}),"\n",(0,r.jsx)(o,{data:f})]})}var y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(b,Object.assign({},e,{children:(0,r.jsx)(w,e)}))}},25278:function(e,t,o){"use strict";o.d(t,{o:function(){return x}});var r=o(67294),a={root:"mantine-iUBXcbk"},n=o(75144),i=o(35577),c=o(89123),s=o(94873),m=o(95553),l=Object.defineProperty,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,f=(e,t,o)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,b=(e,t)=>{for(var o in t||(t={}))d.call(t,o)&&f(e,o,t[o]);if(p)for(var o of p(t))u.call(t,o)&&f(e,o,t[o]);return e},w=(e,t)=>{var o={};for(var r in e)d.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&p)for(var r of p(e))0>t.indexOf(r)&&u.call(e,r)&&(o[r]=e[r]);return o};let y={},h=(0,m.Z)((e,{ratio:t})=>({root:{"--ar-ratio":(null!=t?t:1).toString()}})),x=(0,n.d)((e,t)=>{let o=(0,i.w)("AspectRatio",y,e),{classNames:n,className:m,style:l,styles:p,unstyled:d,vars:u,ratio:f}=o,x=w(o,["classNames","className","style","styles","unstyled","vars","ratio"]),g=(0,c.y)({name:"AspectRatio",classes:a,props:o,className:m,style:l,classNames:n,styles:p,unstyled:d,vars:u,varsResolver:h});return r.createElement(s.x,b(b({ref:t},g("root")),x))});x.displayName="@mantine/core/AspectRatio"}},function(e){e.O(0,[5664,9341,4940,9774,2888,179],function(){return e(e.s=34976)}),_N_E=e.O()}]);