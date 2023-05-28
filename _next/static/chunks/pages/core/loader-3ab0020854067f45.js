(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1141],{67386:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/loader",function(){return a(77837)}])},77837:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return j}});var t=a(85893),o=a(11151),n=a(34940),i=a(25263),s=a(82236),d=a(67294),l=a(99146);let c=`
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`,u={type:"configurator",component:function(e){return d.createElement(l.a,Object.assign({},e))},code:c,centered:!0,minHeight:70,controls:[{type:"number",prop:"size",initialValue:30,min:10,max:50,libraryValue:"__none__"}]};var m=a(30527),p=a(49441),f=a(59312);let h=(0,d.forwardRef)((e,r)=>{var{style:a}=e,t=(0,f._T)(e,["style"]);return d.createElement("svg",Object.assign({},t,{ref:r,style:Object.assign({width:"var(--loader-size)",height:"var(--loader-size)",stroke:"var(--loader-color)"},a),viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:"#fff"}),d.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2"},d.createElement("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0"},d.createElement("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),d.createElement("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),d.createElement("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),d.createElement("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0"},d.createElement("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),d.createElement("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),d.createElement("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),d.createElement("circle",{cx:"22",cy:"22",r:"8"},d.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"}))))}),g=`
import { forwardRef } from 'react';
import { MantineLoaderComponent } from '@mantine/core';

const RingLoader: MantineLoaderComponent = forwardRef(({ style, ...others }, ref) => (
  <svg
    {...others}
    ref={ref}
    style={{
      width: 'var(--loader-size)',
      height: 'var(--loader-size)',
      stroke: 'var(--loader-color)',
      ...style,
    }}
    viewBox="0 0 45 45"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#fff"
  >
    <g fill="none" fillRule="evenodd" transform="translate(1 1)" strokeWidth="2">
      <circle cx="22" cy="22" r="6" strokeOpacity="0">
        <animate
          attributeName="r"
          begin="1.5s"
          dur="3s"
          values="6;22"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="1.5s"
          dur="3s"
          values="1;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-width"
          begin="1.5s"
          dur="3s"
          values="2;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r="6" strokeOpacity="0">
        <animate
          attributeName="r"
          begin="3s"
          dur="3s"
          values="6;22"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="3s"
          dur="3s"
          values="1;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-width"
          begin="3s"
          dur="3s"
          values="2;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r="8">
        <animate
          attributeName="r"
          begin="0s"
          dur="1.5s"
          values="6;1;2;3;4;5;6"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
));`,x=`
import { MantineProvider, Loader } from '@mantine/core';
import { RingLoader } from './RingLoader';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Loader: Loader.extend({
            defaultProps: {
              loaders: { ...Loader.defaultLoaders, ring: RingLoader },
              type: 'ring',
            },
          }),
        },
      }}
    >
      <Loader />
    </MantineProvider>
  );
}
`,b={type:"code",component:function(){return d.createElement(p.M2,{theme:{components:{Loader:l.a.extend({defaultProps:{loaders:Object.assign(Object.assign({},l.a.defaultLoaders),{ring:h}),type:"ring"}})}}},d.createElement(l.a,null))},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:x},{fileName:"RingLoader.tsx",language:"tsx",code:g}]},y=(0,n.A)(i.us.Loader);function v(e){let r=Object.assign({h2:"h2",p:"p",code:"code",a:"a",h3:"h3",ul:"ul",li:"li"},(0,o.ah)(),e.components),{Demo:a}=r;return a||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Loader"})," component supports 3 types of loaders: ",(0,t.jsx)(r.code,{children:"oval"}),", ",(0,t.jsx)(r.code,{children:"bars"})," and ",(0,t.jsx)(r.code,{children:"dots"})," by default. All\nloaders are animated with CSS for better performance."]}),"\n",(0,t.jsx)(a,{data:s.g}),"\n",(0,t.jsx)(r.h2,{id:"size-prop",children:"Size prop"}),"\n",(0,t.jsxs)(r.p,{children:["You can pass any valid CSS values and numbers to ",(0,t.jsx)(r.code,{children:"size"})," prop. Numbers are treated as px, but\nconverted to ",(0,t.jsx)(r.a,{href:"/styles/rem",children:"rem"}),". For example, ",(0,t.jsx)(r.code,{children:"size={32}"})," will produce\n",(0,t.jsx)(r.code,{children:"--loader-size: 2rem"})," CSS variable."]}),"\n",(0,t.jsx)(a,{data:u}),"\n",(0,t.jsx)(r.h2,{id:"adding-custom-loaders",children:"Adding custom loaders"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Loader"})," component is used in other components (",(0,t.jsx)(r.a,{href:"/core/button",children:"Button"}),", ",(0,t.jsx)(r.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,t.jsx)(r.a,{href:"/core/loading-overlay",children:"LoadingOverlay"}),", etc.).\nYou can change loader type with ",(0,t.jsx)(r.a,{href:"/theming/default-props",children:"default props"})," by setting ",(0,t.jsx)(r.code,{children:"type"}),".\nYou can also add a custom CSS or SVG loader with ",(0,t.jsx)(r.code,{children:"loaders"})," ",(0,t.jsx)(r.a,{href:"/theming/default-props",children:"default prop"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"custom-css-only-loader",children:"Custom CSS only loader"}),"\n",(0,t.jsxs)(r.p,{children:["Note that in order for ",(0,t.jsx)(r.code,{children:"size"})," and ",(0,t.jsx)(r.code,{children:"color"})," props to work with custom loaders, you need to\nuse ",(0,t.jsx)(r.code,{children:"--loader-size"})," and ",(0,t.jsx)(r.code,{children:"--loader-color"})," CSS variables in your loader styles."]}),"\n",(0,t.jsx)(a,{data:m.w}),"\n",(0,t.jsx)(r.h3,{id:"custom-svg-loader",children:"Custom SVG loader"}),"\n",(0,t.jsx)(r.p,{children:"It is recommended to use CSS only loaders, as SVG based animations may have the following issues:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"High CPU usage – loader may look glitchy on low-end devices"}),"\n",(0,t.jsx)(r.li,{children:"Loader animation may not start playing until js is loaded – user may see static loader"}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["In your SVG loader, you need to use ",(0,t.jsx)(r.code,{children:"--loader-size"})," and ",(0,t.jsx)(r.code,{children:"--loader-color"})," variables the same\nway as in CSS only custom loader in order for ",(0,t.jsx)(r.code,{children:"size"})," and ",(0,t.jsx)(r.code,{children:"color"})," props to work. Usually,\nyou would need to set ",(0,t.jsx)(r.code,{children:"width"})," and ",(0,t.jsx)(r.code,{children:"height"})," to ",(0,t.jsx)(r.code,{children:"var(--loader-size)"})," and ",(0,t.jsx)(r.code,{children:"fill"}),"/",(0,t.jsx)(r.code,{children:"stroke"})," to\n",(0,t.jsx)(r.code,{children:"var(--loader-color)"}),"."]}),"\n",(0,t.jsx)(a,{data:b})]})}var j=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(y,Object.assign({},e,{children:(0,t.jsx)(v,e)}))}},82236:function(e,r,a){"use strict";a.d(r,{g:function(){return n}});var t=a(99146);let o=`
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`,n={type:"configurator",component:t.a,code:o,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"segmented",prop:"type",data:["oval","bars","dots"],initialValue:"oval",libraryValue:"oval"}]}},30527:function(e,r,a){"use strict";a.d(r,{w:function(){return f}});var t=a(67294),o=a(49441),n=a(99146),i=a(59312),s=a(38944),d=a(94873),l={loader:"mantine-P161cRp","loader-animation":"mantine-YhQwUWj"};let c=(0,t.forwardRef)((e,r)=>{var{className:a}=e,o=(0,i._T)(e,["className"]);return t.createElement(d.x,Object.assign({component:"span",className:(0,s.Z)(l.loader,a)},o,{ref:r}))}),u=`
import { forwardRef } from 'react';
import cx from 'clsx';
import { Box, MantineLoaderComponent } from '@mantine/core';
import classes from './CssLoader.module.css';

export const CssLoader: MantineLoaderComponent = forwardRef(({ className, ...others }, ref) => (
  <Box component="span" className={cx(classes.loader, className)} {...others} ref={ref} />
));
`,m=`
@keyframes loader-animation {
  0% {
    transform: rotateY(0deg);
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }

  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }

  100% {
    transform: rotateY(3600deg);
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
}

.loader {
  display: inline-block;
  width: var(--loader-size);
  height: var(--loader-size);
  border-radius: var(--loader-size);
  background: var(--loader-color);
  animation: loader-animation 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
`,p=`
import { MantineProvider, Loader } from '@mantine/core';
import { CssLoader } from './CssLoader';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Loader: Loader.extend({
            defaultProps: {
              loaders: { ...Loader.defaultLoaders, custom: CssLoader },
              type: 'custom',
            },
          }),
        },
      }}
    >
      <Loader />
    </MantineProvider>
  );
}
`,f={type:"code",component:function(){return t.createElement(o.M2,{theme:{components:{Loader:n.a.extend({defaultProps:{loaders:Object.assign(Object.assign({},n.a.defaultLoaders),{custom:c}),type:"custom"}})}}},t.createElement(n.a,null))},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:p},{fileName:"CssLoader.tsx",language:"tsx",code:u},{fileName:"CssLoader.module.css",language:"css",code:m}]}}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=67386)}),_N_E=e.O()}]);