(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8444],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},60204:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/file-button",function(){return n(84829)}])},84829:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return J}});var r=n(85893),l=n(11151),i=n(34940),o=n(34200),a=n(67294),c=n(74378),s=n(382),u=n(35577),p=Object.defineProperty,f=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&g(e,n,t[n]);if(f)for(var n of f(t))d.call(t,n)&&g(e,n,t[n]);return e},y=(e,t)=>{var n={};for(var r in e)m.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))0>t.indexOf(r)&&d.call(e,r)&&(n[r]=e[r]);return n};let v={multiple:!1},b=(0,a.forwardRef)((e,t)=>{let n=(0,u.w)("FileButton",v,e),{onChange:r,children:l,multiple:i,accept:o,name:c,form:p,resetRef:f,disabled:m,capture:d,inputProps:g}=n,b=y(n,["onChange","children","multiple","accept","name","form","resetRef","disabled","capture","inputProps"]),j=(0,a.useRef)(),k=()=>{var e;m||null==(e=j.current)||e.click()},x=e=>{i?r(Array.from(e.currentTarget.files)):r(e.currentTarget.files[0]||null)},E=()=>{j.current.value=""};return(0,s.kR)(f,E),a.createElement(a.Fragment,null,l(h({onClick:k},b)),a.createElement("input",h({style:{display:"none"},type:"file",accept:o,multiple:i,onChange:x,ref:(0,s.Yx)(t,j),name:c,form:p,capture:d},g)))});b.displayName="@mantine/core/FileButton";var j=n(55899),k=n(77048),x=Object.defineProperty,E=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,F=(e,t,n)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,M=(e,t)=>{for(var n in t||(t={}))w.call(t,n)&&F(e,n,t[n]);if(E)for(var n of E(t))O.call(t,n)&&F(e,n,t[n]);return e};let B=`
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
`,P={type:"code",component:function(){let[e,t]=(0,a.useState)(null);return a.createElement(a.Fragment,null,a.createElement(c.Z,{justify:"center"},a.createElement(b,{onChange:t,accept:"image/png,image/jpeg"},e=>a.createElement(j.z,M({},e),"Upload image"))),e&&a.createElement(k.x,{size:"sm",ta:"center",mt:"sm"},"Picked file: ",e.name))},code:B};var R=Object.defineProperty,Z=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,T=(e,t,n)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t)=>{for(var n in t||(t={}))S.call(t,n)&&T(e,n,t[n]);if(Z)for(var n of Z(t))C.call(t,n)&&T(e,n,t[n]);return e};let z=`
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
`,I={type:"code",component:function(){let[e,t]=(0,a.useState)([]);return a.createElement(a.Fragment,null,a.createElement(c.Z,{justify:"center"},a.createElement(b,{onChange:t,accept:"image/png,image/jpeg",multiple:!0},e=>a.createElement(j.z,_({},e),"Upload image"))),e.length>0&&a.createElement(k.x,{size:"sm",mt:"sm"},"Picked files:"),a.createElement("ul",null,e.map((e,t)=>a.createElement("li",{key:t},e.name))))},code:z};var G=Object.defineProperty,U=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,D=(e,t,n)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,L=(e,t)=>{for(var n in t||(t={}))N.call(t,n)&&D(e,n,t[n]);if(U)for(var n of U(t))A.call(t,n)&&D(e,n,t[n]);return e};let X=`
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
`,Y={type:"code",component:function(){let[e,t]=(0,a.useState)(null),n=(0,a.useRef)(null),r=()=>{var e;t(null),null==(e=n.current)||e.call(n)};return a.createElement(a.Fragment,null,a.createElement(c.Z,{justify:"center"},a.createElement(b,{resetRef:n,onChange:t,accept:"image/png,image/jpeg"},e=>a.createElement(j.z,L({},e),"Upload image")),a.createElement(j.z,{disabled:!e,color:"red",onClick:r},"Reset")),e&&a.createElement(k.x,{size:"sm",ta:"center",mt:"sm"},"Picked file: ",e.name))},code:X},q=(0,i.A)(o.us.FileButton);function H(e){let t=Object.assign({h2:"h2",p:"p",code:"code"},(0,l.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:P}),"\n",(0,r.jsx)(t.h2,{id:"multiple-files",children:"Multiple files"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"multiple"})," prop to allow picking multiple files:"]}),"\n",(0,r.jsx)(n,{data:I}),"\n",(0,r.jsx)(t.h2,{id:"reset-file",children:"Reset file"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"resetRef"})," should be used to fix issue with stale value on hidden input element as input type file cannot be controlled.\nCall ",(0,r.jsx)(t.code,{children:"resetRef"})," when user selection is cleared:"]}),"\n",(0,r.jsx)(n,{data:Y})]})}var J=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(q,Object.assign({},e,{children:(0,r.jsx)(H,e)}))}}},function(e){e.O(0,[4940,9774,2888,179],function(){return e(e.s=60204)}),_N_E=e.O()}]);