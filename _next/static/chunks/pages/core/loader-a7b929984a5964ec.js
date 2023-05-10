(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1141],{67386:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/loader",function(){return t(80562)}])},80562:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return eg}});var o=t(85893),a=t(11151),n=t(34940),i=t(25263),l=t(99146);let s=`
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`,c={type:"configurator",component:l.a,code:s,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"segmented",prop:"type",data:["oval","bars","dots"],initialValue:"oval",libraryValue:"oval"}]};var d=t(67294),u=Object.defineProperty,m=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(e,r,t)=>r in e?u(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,b=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&h(e,t,r[t]);if(m)for(var t of m(r))f.call(r,t)&&h(e,t,r[t]);return e};let y=`
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`,g={type:"configurator",component:function(e){return d.createElement(l.a,b({},e))},code:y,centered:!0,minHeight:70,controls:[{type:"number",prop:"size",initialValue:30,min:10,max:50,libraryValue:"__none__"}]};var x=t(49441),j=t(38944),v=t(94873),w={loader:"mantine-P161cRp","loader-animation":"mantine-YhQwUWj"},O=Object.defineProperty,L=Object.defineProperties,C=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,E=(e,r,t)=>r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,M=(e,r)=>{for(var t in r||(r={}))N.call(r,t)&&E(e,t,r[t]);if(P)for(var t of P(r))k.call(r,t)&&E(e,t,r[t]);return e},S=(e,r)=>L(e,C(r)),z=(e,r)=>{var t={};for(var o in e)N.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&P)for(var o of P(e))0>r.indexOf(o)&&k.call(e,o)&&(t[o]=e[o]);return t};let _=(0,d.forwardRef)((e,r)=>{var{className:t}=e,o=z(e,["className"]);return d.createElement(v.x,S(M({component:"span",className:(0,j.Z)(w.loader,t)},o),{ref:r}))}),R=`
import { forwardRef } from 'react';
import cx from 'clsx';
import { Box, MantineLoaderComponent } from '@mantine/core';
import classes from './CssLoader.module.css';

export const CssLoader: MantineLoaderComponent = forwardRef(({ className, ...others }, ref) => (
  <Box component="span" className={cx(classes.loader, className)} {...others} ref={ref} />
));
`,V=`
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
`;var D=Object.defineProperty,I=Object.defineProperties,Y=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,U=(e,r,t)=>r in e?D(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,W=(e,r)=>{for(var t in r||(r={}))A.call(r,t)&&U(e,t,r[t]);if(B)for(var t of B(r))G.call(r,t)&&U(e,t,r[t]);return e},F=(e,r)=>I(e,Y(r));let H=`
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
`,T={type:"code",component:function(){return d.createElement(x.M2,{theme:{components:{Loader:l.a.extend({defaultProps:{loaders:F(W({},l.a.defaultLoaders),{custom:_}),type:"custom"}})}}},d.createElement(l.a,null))},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:H},{fileName:"CssLoader.tsx",language:"tsx",code:R},{fileName:"CssLoader.module.css",language:"css",code:V}]};var X=Object.defineProperty,Q=Object.defineProperties,Z=Object.getOwnPropertyDescriptors,q=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,$=(e,r,t)=>r in e?X(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ee=(e,r)=>{for(var t in r||(r={}))J.call(r,t)&&$(e,t,r[t]);if(q)for(var t of q(r))K.call(r,t)&&$(e,t,r[t]);return e},er=(e,r)=>Q(e,Z(r)),et=(e,r)=>{var t={};for(var o in e)J.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&q)for(var o of q(e))0>r.indexOf(o)&&K.call(e,o)&&(t[o]=e[o]);return t};let eo=(0,d.forwardRef)((e,r)=>{var{style:t}=e,o=et(e,["style"]);return d.createElement("svg",er(ee({},o),{ref:r,style:ee({width:"var(--loader-size)",height:"var(--loader-size)",stroke:"var(--loader-color)"},t),viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:"#fff"}),d.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2"},d.createElement("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0"},d.createElement("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),d.createElement("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),d.createElement("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),d.createElement("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0"},d.createElement("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),d.createElement("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),d.createElement("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),d.createElement("circle",{cx:"22",cy:"22",r:"8"},d.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"}))))}),ea=`
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
));`;var en=Object.defineProperty,ei=Object.defineProperties,el=Object.getOwnPropertyDescriptors,es=Object.getOwnPropertySymbols,ec=Object.prototype.hasOwnProperty,ed=Object.prototype.propertyIsEnumerable,eu=(e,r,t)=>r in e?en(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,em=(e,r)=>{for(var t in r||(r={}))ec.call(r,t)&&eu(e,t,r[t]);if(es)for(var t of es(r))ed.call(r,t)&&eu(e,t,r[t]);return e},ep=(e,r)=>ei(e,el(r));let ef=`
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
`,eh={type:"code",component:function(){return d.createElement(x.M2,{theme:{components:{Loader:l.a.extend({defaultProps:{loaders:ep(em({},l.a.defaultLoaders),{ring:eo}),type:"ring"}})}}},d.createElement(l.a,null))},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:ef},{fileName:"RingLoader.tsx",language:"tsx",code:ea}]},eb=(0,n.A)(i.us.Loader);function ey(e){let r=Object.assign({h2:"h2",p:"p",code:"code",a:"a",h3:"h3",ul:"ul",li:"li"},(0,a.ah)(),e.components),{Demo:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"Loader"})," component supports 3 types of loaders: ",(0,o.jsx)(r.code,{children:"oval"}),", ",(0,o.jsx)(r.code,{children:"bars"})," and ",(0,o.jsx)(r.code,{children:"dots"})," by default. All\nloaders are animated with CSS for better performance."]}),"\n",(0,o.jsx)(t,{data:c}),"\n",(0,o.jsx)(r.h2,{id:"size-prop",children:"Size prop"}),"\n",(0,o.jsxs)(r.p,{children:["You can pass any valid CSS values and numbers to ",(0,o.jsx)(r.code,{children:"size"})," prop. Numbers are treated as px, but\nconverted to ",(0,o.jsx)(r.a,{href:"/styles/rem",children:"rem"})," ",(0,o.jsx)(r.code,{children:"(1rem = 16px)"}),". For example, ",(0,o.jsx)(r.code,{children:"size={32}"})," will produce\n",(0,o.jsx)(r.code,{children:"--loader-size: 2rem"})," CSS variable."]}),"\n",(0,o.jsx)(t,{data:g}),"\n",(0,o.jsx)(r.h2,{id:"adding-custom-loaders",children:"Adding custom loaders"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"Loader"})," component is used in other components (",(0,o.jsx)(r.a,{href:"/core/button",children:"Button"}),", ",(0,o.jsx)(r.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,o.jsx)(r.a,{href:"/core/loading-overlay",children:"LoadingOverlay"}),", etc.).\nYou can change loader type with ",(0,o.jsx)(r.a,{href:"/theming/default-props",children:"default props"})," by setting ",(0,o.jsx)(r.code,{children:"type"}),".\nYou can also add custom CSS or SVG loader with ",(0,o.jsx)(r.code,{children:"loaders"})," ",(0,o.jsx)(r.a,{href:"/theming/default-props",children:"default prop"}),"."]}),"\n",(0,o.jsx)(r.h3,{id:"custom-css-only-loader",children:"Custom CSS only loader"}),"\n",(0,o.jsxs)(r.p,{children:["Note that in order for ",(0,o.jsx)(r.code,{children:"size"})," and ",(0,o.jsx)(r.code,{children:"color"})," props to work with custom loaders you need to\nuse ",(0,o.jsx)(r.code,{children:"--loader-size"})," and ",(0,o.jsx)(r.code,{children:"--loader-color"})," CSS variables in your loader styles."]}),"\n",(0,o.jsx)(t,{data:T}),"\n",(0,o.jsx)(r.h3,{id:"custom-svg-loader",children:"Custom SVG loader"}),"\n",(0,o.jsx)(r.p,{children:"It is recommended to use CSS only loader as SVG based animations may have the following issues:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"High CPU usage – loader may look glitchy on low-end devices"}),"\n",(0,o.jsx)(r.li,{children:"Loader animation may not start playing until js is loaded – user may see static loader"}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["In your SVG loader you need to use ",(0,o.jsx)(r.code,{children:"--loader-size"})," and ",(0,o.jsx)(r.code,{children:"--loader-color"})," variables the same\nway as in CSS only custom loader in order for ",(0,o.jsx)(r.code,{children:"size"})," and ",(0,o.jsx)(r.code,{children:"color"})," props to work. Usually\nyou would need to set ",(0,o.jsx)(r.code,{children:"width"})," and ",(0,o.jsx)(r.code,{children:"height"})," to ",(0,o.jsx)(r.code,{children:"var(--loader-size)"})," and ",(0,o.jsx)(r.code,{children:"fill"}),"/",(0,o.jsx)(r.code,{children:"stroke"})," to\n",(0,o.jsx)(r.code,{children:"var(--loader-color)"}),"."]}),"\n",(0,o.jsx)(t,{data:eh})]})}var eg=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(eb,Object.assign({},e,{children:(0,o.jsx)(ey,e)}))}}},function(e){e.O(0,[4878,9341,4940,9774,2888,179],function(){return e(e.s=67386)}),_N_E=e.O()}]);