(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8444],{60204:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/file-button",function(){return n(84829)}])},84829:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var l=n(85893),i=n(11151),r=n(34940),o=n(25263),a=n(67294),c=n(74378),s=n(59312),u=n(382),m=n(35577);let p={multiple:!1},f=(0,a.forwardRef)((e,t)=>{let n=(0,m.w)("FileButton",p,e),{onChange:l,children:i,multiple:r,accept:o,name:c,form:f,resetRef:d,disabled:g,capture:h,inputProps:j}=n,x=(0,s._T)(n,["onChange","children","multiple","accept","name","form","resetRef","disabled","capture","inputProps"]),F=(0,a.useRef)(),E=()=>{var e;g||null===(e=F.current)||void 0===e||e.click()},B=e=>{r?l(Array.from(e.currentTarget.files)):l(e.currentTarget.files[0]||null)},y=()=>{F.current.value=""};return(0,u.kR)(d,y),a.createElement(a.Fragment,null,i(Object.assign({onClick:E},x)),a.createElement("input",Object.assign({style:{display:"none"},type:"file",accept:o,multiple:r,onChange:B,ref:(0,u.Yx)(t,F),name:c,form:f,capture:h},j)))});f.displayName="@mantine/core/FileButton";var d=n(43406),g=n(77048);let h=`
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
`,j={type:"code",component:function(){let[e,t]=(0,a.useState)(null);return a.createElement(a.Fragment,null,a.createElement(c.Z,{justify:"center"},a.createElement(f,{onChange:t,accept:"image/png,image/jpeg"},e=>a.createElement(d.z,Object.assign({},e),"Upload image"))),e&&a.createElement(g.x,{size:"sm",ta:"center",mt:"sm"},"Picked file: ",e.name))},code:h},x=`
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
`,F={type:"code",component:function(){let[e,t]=(0,a.useState)([]);return a.createElement(a.Fragment,null,a.createElement(c.Z,{justify:"center"},a.createElement(f,{onChange:t,accept:"image/png,image/jpeg",multiple:!0},e=>a.createElement(d.z,Object.assign({},e),"Upload image"))),e.length>0&&a.createElement(g.x,{size:"sm",mt:"sm"},"Picked files:"),a.createElement("ul",null,e.map((e,t)=>a.createElement("li",{key:t},e.name))))},code:x},E=`
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
`,B={type:"code",component:function(){let[e,t]=(0,a.useState)(null),n=(0,a.useRef)(null),l=()=>{var e;t(null),null===(e=n.current)||void 0===e||e.call(n)};return a.createElement(a.Fragment,null,a.createElement(c.Z,{justify:"center"},a.createElement(f,{resetRef:n,onChange:t,accept:"image/png,image/jpeg"},e=>a.createElement(d.z,Object.assign({},e),"Upload image")),a.createElement(d.z,{disabled:!e,color:"red",onClick:l},"Reset")),e&&a.createElement(g.x,{size:"sm",ta:"center",mt:"sm"},"Picked file: ",e.name))},code:E},y=(0,r.A)(o.us.FileButton);function k(e){let t=Object.assign({h2:"h2",p:"p",code:"code"},(0,i.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n,{data:j}),"\n",(0,l.jsx)(t.h2,{id:"multiple-files",children:"Multiple files"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"multiple"})," prop to allow picking multiple files:"]}),"\n",(0,l.jsx)(n,{data:F}),"\n",(0,l.jsx)(t.h2,{id:"reset-file",children:"Reset file"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"resetRef"})," should be used to fix issue with stale value on hidden input element as input type file cannot be controlled.\nCall ",(0,l.jsx)(t.code,{children:"resetRef"})," when user selection is cleared:"]}),"\n",(0,l.jsx)(n,{data:B})]})}var b=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(y,Object.assign({},e,{children:(0,l.jsx)(k,e)}))}}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=60204)}),_N_E=e.O()}]);