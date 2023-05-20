(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1141],{67386:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/loader",function(){return t(77837)}])},77837:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return H}});var o=t(85893),a=t(11151),n=t(34940),i=t(25263),l=t(82236),s=t(67294),c=t(99146),d=Object.defineProperty,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,r,t)=>r in e?d(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,b=(e,r)=>{for(var t in r||(r={}))m.call(r,t)&&f(e,t,r[t]);if(u)for(var t of u(r))p.call(r,t)&&f(e,t,r[t]);return e};let h=`
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`,y={type:"configurator",component:function(e){return s.createElement(c.a,b({},e))},code:h,centered:!0,minHeight:70,controls:[{type:"number",prop:"size",initialValue:30,min:10,max:50,libraryValue:"__none__"}]};var g=t(30527),x=t(49441),j=Object.defineProperty,v=Object.defineProperties,w=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,P=(e,r,t)=>r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,N=(e,r)=>{for(var t in r||(r={}))L.call(r,t)&&P(e,t,r[t]);if(O)for(var t of O(r))C.call(r,t)&&P(e,t,r[t]);return e},k=(e,r)=>v(e,w(r)),E=(e,r)=>{var t={};for(var o in e)L.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&O)for(var o of O(e))0>r.indexOf(o)&&C.call(e,o)&&(t[o]=e[o]);return t};let M=(0,s.forwardRef)((e,r)=>{var{style:t}=e,o=E(e,["style"]);return s.createElement("svg",k(N({},o),{ref:r,style:N({width:"var(--loader-size)",height:"var(--loader-size)",stroke:"var(--loader-color)"},t),viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:"#fff"}),s.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2"},s.createElement("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0"},s.createElement("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),s.createElement("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),s.createElement("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),s.createElement("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0"},s.createElement("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),s.createElement("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),s.createElement("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),s.createElement("circle",{cx:"22",cy:"22",r:"8"},s.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"}))))}),S=`
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
));`;var z=Object.defineProperty,_=Object.defineProperties,R=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,Y=(e,r,t)=>r in e?z(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,B=(e,r)=>{for(var t in r||(r={}))D.call(r,t)&&Y(e,t,r[t]);if(V)for(var t of V(r))I.call(r,t)&&Y(e,t,r[t]);return e},A=(e,r)=>_(e,R(r));let G=`
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
`,U={type:"code",component:function(){return s.createElement(x.M2,{theme:{components:{Loader:c.a.extend({defaultProps:{loaders:A(B({},c.a.defaultLoaders),{ring:M}),type:"ring"}})}}},s.createElement(c.a,null))},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:G},{fileName:"RingLoader.tsx",language:"tsx",code:S}]},W=(0,n.A)(i.us.Loader);function F(e){let r=Object.assign({h2:"h2",p:"p",code:"code",a:"a",h3:"h3",ul:"ul",li:"li"},(0,a.ah)(),e.components),{Demo:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"Loader"})," component supports 3 types of loaders: ",(0,o.jsx)(r.code,{children:"oval"}),", ",(0,o.jsx)(r.code,{children:"bars"})," and ",(0,o.jsx)(r.code,{children:"dots"})," by default. All\nloaders are animated with CSS for better performance."]}),"\n",(0,o.jsx)(t,{data:l.g}),"\n",(0,o.jsx)(r.h2,{id:"size-prop",children:"Size prop"}),"\n",(0,o.jsxs)(r.p,{children:["You can pass any valid CSS values and numbers to ",(0,o.jsx)(r.code,{children:"size"})," prop. Numbers are treated as px, but\nconverted to ",(0,o.jsx)(r.a,{href:"/styles/rem",children:"rem"}),". For example, ",(0,o.jsx)(r.code,{children:"size={32}"})," will produce\n",(0,o.jsx)(r.code,{children:"--loader-size: 2rem"})," CSS variable."]}),"\n",(0,o.jsx)(t,{data:y}),"\n",(0,o.jsx)(r.h2,{id:"adding-custom-loaders",children:"Adding custom loaders"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"Loader"})," component is used in other components (",(0,o.jsx)(r.a,{href:"/core/button",children:"Button"}),", ",(0,o.jsx)(r.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,o.jsx)(r.a,{href:"/core/loading-overlay",children:"LoadingOverlay"}),", etc.).\nYou can change loader type with ",(0,o.jsx)(r.a,{href:"/theming/default-props",children:"default props"})," by setting ",(0,o.jsx)(r.code,{children:"type"}),".\nYou can also add a custom CSS or SVG loader with ",(0,o.jsx)(r.code,{children:"loaders"})," ",(0,o.jsx)(r.a,{href:"/theming/default-props",children:"default prop"}),"."]}),"\n",(0,o.jsx)(r.h3,{id:"custom-css-only-loader",children:"Custom CSS only loader"}),"\n",(0,o.jsxs)(r.p,{children:["Note that in order for ",(0,o.jsx)(r.code,{children:"size"})," and ",(0,o.jsx)(r.code,{children:"color"})," props to work with custom loaders, you need to\nuse ",(0,o.jsx)(r.code,{children:"--loader-size"})," and ",(0,o.jsx)(r.code,{children:"--loader-color"})," CSS variables in your loader styles."]}),"\n",(0,o.jsx)(t,{data:g.w}),"\n",(0,o.jsx)(r.h3,{id:"custom-svg-loader",children:"Custom SVG loader"}),"\n",(0,o.jsx)(r.p,{children:"It is recommended to use CSS only loaders, as SVG based animations may have the following issues:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"High CPU usage – loader may look glitchy on low-end devices"}),"\n",(0,o.jsx)(r.li,{children:"Loader animation may not start playing until js is loaded – user may see static loader"}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["In your SVG loader, you need to use ",(0,o.jsx)(r.code,{children:"--loader-size"})," and ",(0,o.jsx)(r.code,{children:"--loader-color"})," variables the same\nway as in CSS only custom loader in order for ",(0,o.jsx)(r.code,{children:"size"})," and ",(0,o.jsx)(r.code,{children:"color"})," props to work. Usually,\nyou would need to set ",(0,o.jsx)(r.code,{children:"width"})," and ",(0,o.jsx)(r.code,{children:"height"})," to ",(0,o.jsx)(r.code,{children:"var(--loader-size)"})," and ",(0,o.jsx)(r.code,{children:"fill"}),"/",(0,o.jsx)(r.code,{children:"stroke"})," to\n",(0,o.jsx)(r.code,{children:"var(--loader-color)"}),"."]}),"\n",(0,o.jsx)(t,{data:U})]})}var H=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(W,Object.assign({},e,{children:(0,o.jsx)(F,e)}))}},82236:function(e,r,t){"use strict";t.d(r,{g:function(){return n}});var o=t(99146);let a=`
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`,n={type:"configurator",component:o.a,code:a,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"segmented",prop:"type",data:["oval","bars","dots"],initialValue:"oval",libraryValue:"oval"}]}},30527:function(e,r,t){"use strict";t.d(r,{w:function(){return z}});var o=t(67294),a=t(49441),n=t(99146),i=t(38944),l=t(94873),s={loader:"mantine-P161cRp","loader-animation":"mantine-YhQwUWj"},c=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,h=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&b(e,t,r[t]);if(m)for(var t of m(r))f.call(r,t)&&b(e,t,r[t]);return e},y=(e,r)=>d(e,u(r)),g=(e,r)=>{var t={};for(var o in e)p.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&m)for(var o of m(e))0>r.indexOf(o)&&f.call(e,o)&&(t[o]=e[o]);return t};let x=(0,o.forwardRef)((e,r)=>{var{className:t}=e,a=g(e,["className"]);return o.createElement(l.x,y(h({component:"span",className:(0,i.Z)(s.loader,t)},a),{ref:r}))}),j=`
import { forwardRef } from 'react';
import cx from 'clsx';
import { Box, MantineLoaderComponent } from '@mantine/core';
import classes from './CssLoader.module.css';

export const CssLoader: MantineLoaderComponent = forwardRef(({ className, ...others }, ref) => (
  <Box component="span" className={cx(classes.loader, className)} {...others} ref={ref} />
));
`,v=`
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
`;var w=Object.defineProperty,O=Object.defineProperties,L=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,k=(e,r,t)=>r in e?w(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,E=(e,r)=>{for(var t in r||(r={}))P.call(r,t)&&k(e,t,r[t]);if(C)for(var t of C(r))N.call(r,t)&&k(e,t,r[t]);return e},M=(e,r)=>O(e,L(r));let S=`
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
`,z={type:"code",component:function(){return o.createElement(a.M2,{theme:{components:{Loader:n.a.extend({defaultProps:{loaders:M(E({},n.a.defaultLoaders),{custom:x}),type:"custom"}})}}},o.createElement(n.a,null))},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:S},{fileName:"CssLoader.tsx",language:"tsx",code:j},{fileName:"CssLoader.module.css",language:"css",code:v}]}}},function(e){e.O(0,[5664,9341,4940,9774,2888,179],function(){return e(e.s=67386)}),_N_E=e.O()}]);