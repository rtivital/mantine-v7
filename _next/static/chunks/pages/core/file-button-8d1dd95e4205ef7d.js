(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8444],{60204:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/file-button",function(){return n(84829)}])},84829:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return K}});var r=n(85893),l=n(11151),o=n(34940),i=n(25263),a=n(67294),c=n(74378),u=n(382),s=n(35577),p=Object.defineProperty,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&g(e,n,t[n]);if(m)for(var n of m(t))d.call(t,n)&&g(e,n,t[n]);return e},y=(e,t)=>{var n={};for(var r in e)f.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))0>t.indexOf(r)&&d.call(e,r)&&(n[r]=e[r]);return n};let j={multiple:!1},h=(0,a.forwardRef)((e,t)=>{let n=(0,s.w)("FileButton",j,e),{onChange:r,children:l,multiple:o,accept:i,name:c,form:p,resetRef:m,disabled:f,capture:d,inputProps:g}=n,h=y(n,["onChange","children","multiple","accept","name","form","resetRef","disabled","capture","inputProps"]),x=(0,a.useRef)(),E=()=>{var e;f||null==(e=x.current)||e.click()},O=e=>{o?r(Array.from(e.currentTarget.files)):r(e.currentTarget.files[0]||null)},F=()=>{x.current.value=""};return(0,u.kR)(m,F),a.createElement(a.Fragment,null,l(b({onClick:E},h)),a.createElement("input",b({style:{display:"none"},type:"file",accept:i,multiple:o,onChange:O,ref:(0,u.Yx)(t,x),name:c,form:p,capture:d},g)))});h.displayName="@mantine/core/FileButton";var x=n(43406),E=n(77048),O=Object.defineProperty,F=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,B=(e,t,n)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,P=(e,t)=>{for(var n in t||(t={}))w.call(t,n)&&B(e,n,t[n]);if(F)for(var n of F(t))v.call(t,n)&&B(e,n,t[n]);return e};let k=`
import { useState } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';

function Demo() {
  const [file, setFile] = useState<File | null>(null);
  return (
    <>
      <Group justify="center">
        <FileButton onChange={setFile} accept="image/png,image/jpeg">
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
      </Group>

      {file && (
        <Text size="sm" ta="center" mt="sm">
          Picked file: {file.name}
        </Text>
      )}
    </>
  );
}
`,R={type:"code",component:function(){let[e,t]=(0,a.useState)(null);return a.createElement(a.Fragment,null,a.createElement(c.Z,{justify:"center"},a.createElement(h,{onChange:t,accept:"image/png,image/jpeg"},e=>a.createElement(x.z,P({},e),"Upload image"))),e&&a.createElement(E.x,{size:"sm",ta:"center",mt:"sm"},"Picked file: ",e.name))},code:k};var S=Object.defineProperty,C=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,z=(e,t,n)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,G=(e,t)=>{for(var n in t||(t={}))T.call(t,n)&&z(e,n,t[n]);if(C)for(var n of C(t))_.call(t,n)&&z(e,n,t[n]);return e};let U=`
import { useState } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';

function Demo() {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <>
      <Group justify="center">
        <FileButton onChange={setFiles} accept="image/png,image/jpeg" multiple>
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
      </Group>

      {files.length > 0 && (
        <Text size="sm" mt="sm">
          Picked files:
        </Text>
      )}

      <ul>
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </>
  );
}
`,N={type:"code",component:function(){let[e,t]=(0,a.useState)([]);return a.createElement(a.Fragment,null,a.createElement(c.Z,{justify:"center"},a.createElement(h,{onChange:t,accept:"image/png,image/jpeg",multiple:!0},e=>a.createElement(x.z,G({},e),"Upload image"))),e.length>0&&a.createElement(E.x,{size:"sm",mt:"sm"},"Picked files:"),a.createElement("ul",null,e.map((e,t)=>a.createElement("li",{key:t},e.name))))},code:U};var D=Object.defineProperty,I=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,X=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,M=(e,t)=>{for(var n in t||(t={}))Z.call(t,n)&&X(e,n,t[n]);if(I)for(var n of I(t))A.call(t,n)&&X(e,n,t[n]);return e};let Y=`
import { useState, useRef } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';

function Demo() {
  const [file, setFile] = useState<File | null>(null);
  const resetRef = useRef<() => void>(null);

  const clearFile = () => {
    setFile(null);
    resetRef.current?.();
  };

  return (
    <>
      <Group justify="center">
        <FileButton resetRef={resetRef} onChange={setFile} accept="image/png,image/jpeg">
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
        <Button disabled={!file} color="red" onClick={clearFile}>
          Reset
        </Button>
      </Group>

      {file && (
        <Text size="sm" ta="center" mt="sm">
          Picked file: {file.name}
        </Text>
      )}
    </>
  );
}
`,q={type:"code",component:function(){let[e,t]=(0,a.useState)(null),n=(0,a.useRef)(null),r=()=>{var e;t(null),null==(e=n.current)||e.call(n)};return a.createElement(a.Fragment,null,a.createElement(c.Z,{justify:"center"},a.createElement(h,{resetRef:n,onChange:t,accept:"image/png,image/jpeg"},e=>a.createElement(x.z,M({},e),"Upload image")),a.createElement(x.z,{disabled:!e,color:"red",onClick:r},"Reset")),e&&a.createElement(E.x,{size:"sm",ta:"center",mt:"sm"},"Picked file: ",e.name))},code:Y},H=(0,o.A)(i.us.FileButton);function J(e){let t=Object.assign({h2:"h2",p:"p",code:"code"},(0,l.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:R}),"\n",(0,r.jsx)(t.h2,{id:"multiple-files",children:"Multiple files"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"multiple"})," prop to allow picking multiple files:"]}),"\n",(0,r.jsx)(n,{data:N}),"\n",(0,r.jsx)(t.h2,{id:"reset-file",children:"Reset file"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"resetRef"})," should be used to fix issue with stale value on hidden input element as input type file cannot be controlled.\nCall ",(0,r.jsx)(t.code,{children:"resetRef"})," when user selection is cleared:"]}),"\n",(0,r.jsx)(n,{data:q})]})}var K=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(H,Object.assign({},e,{children:(0,r.jsx)(J,e)}))}}},function(e){e.O(0,[5664,9341,4940,9774,2888,179],function(){return e(e.s=60204)}),_N_E=e.O()}]);