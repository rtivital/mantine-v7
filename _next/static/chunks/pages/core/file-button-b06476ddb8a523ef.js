(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8444],{60204:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/file-button",function(){return n(84829)}])},84829:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var r=n(85893),l=n(11151),o=n(34940),i=n(25263),a=n(67294),c=n(74378),u=n(84020),s=n(382),p=n(35577),m=Object.defineProperty,f=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&b(e,n,t[n]);if(f)for(var n of f(t))g.call(t,n)&&b(e,n,t[n]);return e},j=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))0>t.indexOf(r)&&g.call(e,r)&&(n[r]=e[r]);return n};let h={multiple:!1},E=(0,a.forwardRef)((e,t)=>{let n=(0,p.w)("FileButton",h,e),{onChange:r,children:l,multiple:o,accept:i,name:c,form:m,resetRef:f,disabled:d,capture:g,inputProps:b}=n,E=j(n,["onChange","children","multiple","accept","name","form","resetRef","disabled","capture","inputProps"]),O=(0,a.useRef)(),x=()=>{var e;d||null==(e=O.current)||e.click()},w=e=>{o?r(Array.from(e.currentTarget.files)):r(e.currentTarget.files[0]||null)},F=()=>{O.current.value=""};return(0,u.k)(f,F),a.createElement(a.Fragment,null,l(y({onClick:x},E)),a.createElement("input",y({style:{display:"none"},type:"file",accept:i,multiple:o,onChange:w,ref:(0,s.Y)(t,O),name:c,form:m,capture:g},b)))});E.displayName="@mantine/core/FileButton";var O=n(43406),x=n(77048),w=Object.defineProperty,F=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,B=(e,t,n)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))v.call(t,n)&&B(e,n,t[n]);if(F)for(var n of F(t))P.call(t,n)&&B(e,n,t[n]);return e};let R=`
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
`,S={type:"code",component:function(){let[e,t]=(0,a.useState)(null);return a.createElement(a.Fragment,null,a.createElement(c.Z,{justify:"center"},a.createElement(E,{onChange:t,accept:"image/png,image/jpeg"},e=>a.createElement(O.z,k({},e),"Upload image"))),e&&a.createElement(x.x,{size:"sm",ta:"center",mt:"sm"},"Picked file: ",e.name))},code:R};var C=Object.defineProperty,_=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,G=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t)=>{for(var n in t||(t={}))T.call(t,n)&&G(e,n,t[n]);if(_)for(var n of _(t))z.call(t,n)&&G(e,n,t[n]);return e};let U=`
import { useState } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';
`,I={type:"code",component:function(){let[e,t]=(0,a.useState)([]);return a.createElement(a.Fragment,null,a.createElement(c.Z,{justify:"center"},a.createElement(E,{onChange:t,accept:"image/png,image/jpeg",multiple:!0},e=>a.createElement(O.z,N({},e),"Upload image"))),e.length>0&&a.createElement(x.x,{size:"sm",mt:"sm"},"Picked files:"),a.createElement("ul",null,e.map((e,t)=>a.createElement("li",{key:t},e.name))))},code:U};var D=Object.defineProperty,Z=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,M=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Y=(e,t)=>{for(var n in t||(t={}))A.call(t,n)&&M(e,n,t[n]);if(Z)for(var n of Z(t))X.call(t,n)&&M(e,n,t[n]);return e};let q=`
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
`,H={type:"code",component:function(){let[e,t]=(0,a.useState)(null),n=(0,a.useRef)(null),r=()=>{var e;t(null),null==(e=n.current)||e.call(n)};return a.createElement(a.Fragment,null,a.createElement(c.Z,{justify:"center"},a.createElement(E,{resetRef:n,onChange:t,accept:"image/png,image/jpeg"},e=>a.createElement(O.z,Y({},e),"Upload image")),a.createElement(O.z,{disabled:!e,color:"red",onClick:r},"Reset")),e&&a.createElement(x.x,{size:"sm",ta:"center",mt:"sm"},"Picked file: ",e.name))},code:q},J=(0,o.A)(i.us.FileButton);function K(e){let t=Object.assign({h2:"h2",p:"p",code:"code"},(0,l.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:S}),"\n",(0,r.jsx)(t.h2,{id:"multiple-files",children:"Multiple files"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"multiple"})," prop to allow picking multiple files:"]}),"\n",(0,r.jsx)(n,{data:I}),"\n",(0,r.jsx)(t.h2,{id:"reset-file",children:"Reset file"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"resetRef"})," should be used to fix issue with stale value on hidden input element as input type file cannot be controlled.\nCall ",(0,r.jsx)(t.code,{children:"resetRef"})," when user selection is cleared:"]}),"\n",(0,r.jsx)(n,{data:H})]})}var L=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(J,Object.assign({},e,{children:(0,r.jsx)(K,e)}))}}},function(e){e.O(0,[4878,9341,4940,9774,2888,179],function(){return e(e.s=60204)}),_N_E=e.O()}]);