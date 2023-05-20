(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8442],{77733:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/polymorphic",function(){return o(21421)}])},21421:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return en}});var t=o(85893),r=o(11151),c=o(34940),p=o(25263),a=o(67294),i=o(43406);let l=`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button component="a" href="https://mantine.dev/" target="_blank">
      Mantine website
    </Button>
  );
}
`,s={type:"code",component:function(){return a.createElement(i.z,{component:"a",href:"https://mantine.dev/",target:"_blank"},"Mantine website")},centered:!0,code:l};var m=Object.defineProperty,u=Object.defineProperties,h=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,b=(e,n,o)=>n in e?m(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,x=(e,n)=>{for(var o in n||(n={}))f.call(n,o)&&b(e,o,n[o]);if(d)for(var o of d(n))y.call(n,o)&&b(e,o,n[o]);return e},j=(e,n)=>u(e,h(n));let B=`
import { forwardRef } from 'react';
import { Button, ButtonProps } from '@mantine/core';

interface LinkButtonProps
  extends ButtonProps,
    Omit<React.ComponentPropsWithoutRef<'a'>, keyof ButtonProps> {}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>((props, ref) => (
  <Button {...props} ref={ref} component="a" />
));

function Demo() {
  return (
    <LinkButton href="https://mantine.dev" target="_blank">
      Mantine website
    </LinkButton>
  );
}
`,P=(0,a.forwardRef)((e,n)=>a.createElement(i.z,j(x({},e),{ref:n,component:"a"}))),w={type:"code",component:function(){return a.createElement(P,{href:"https://mantine.dev",target:"_blank"},"Mantine website")},centered:!0,code:B};var g=o(15067),v=o(74378),k=Object.defineProperty,O=Object.defineProperties,E=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,_=(e,n,o)=>n in e?k(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,N=(e,n)=>{for(var o in n||(n={}))M.call(n,o)&&_(e,o,n[o]);if(C)for(var o of C(n))R.call(n,o)&&_(e,o,n[o]);return e},L=(e,n)=>O(e,E(n)),D=(e,n)=>{var o={};for(var t in e)M.call(e,t)&&0>n.indexOf(t)&&(o[t]=e[t]);if(null!=e&&C)for(var t of C(e))0>n.indexOf(t)&&R.call(e,t)&&(o[t]=e[t]);return o};let G=`
import { forwardRef } from 'react';
import { createPolymorphicComponent, Button, ButtonProps, Group } from '@mantine/core';

interface CustomButtonProps extends ButtonProps {
  label: string;
}

// Default root element is 'button', but it can be changed with 'component' prop
const CustomButton = createPolymorphicComponent<'button', CustomButtonProps>(
  forwardRef<HTMLButtonElement, CustomButtonProps>(({ label, ...others }, ref) => (
    <Button {...others} ref={ref}>
      {label}
    </Button>
  ))
);

// Default root element is 'a', but it can be changed with 'component' prop
const CustomButtonAnchor = createPolymorphicComponent<'a', CustomButtonProps>(
  forwardRef<HTMLAnchorElement, CustomButtonProps>(({ label, ...others }, ref) => (
    <Button component="a" {...others} ref={ref}>
      {label}
    </Button>
  ))
);

function Demo() {
  return (
    <Group>
      <CustomButton label="Button by default" color="cyan" />
      <CustomButtonAnchor label="Anchor by default" href="https://mantine.dev" target="_blank" />
    </Group>
  );
}
`,A=(0,g.F)((0,a.forwardRef)((e,n)=>{var{label:o}=e,t=D(e,["label"]);return a.createElement(i.z,L(N({},t),{ref:n}),o)})),T=(0,g.F)((0,a.forwardRef)((e,n)=>{var{label:o}=e,t=D(e,["label"]);return a.createElement(i.z,L(N({component:"a"},t),{ref:n}),o)})),W={type:"code",component:function(){return a.createElement(v.Z,null,a.createElement(A,{label:"Button by default",color:"cyan"}),a.createElement(T,{label:"Anchor by default",href:"https://mantine.dev",target:"_blank"}))},centered:!0,code:G};var F=o(94873),H=Object.defineProperty,z=Object.defineProperties,I=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,Z=(e,n,o)=>n in e?H(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,K=(e,n)=>{for(var o in n||(n={}))X.call(n,o)&&Z(e,o,n[o]);if(S)for(var o of S(n))Y.call(n,o)&&Z(e,o,n[o]);return e},U=(e,n)=>z(e,I(n)),q=(e,n)=>{var o={};for(var t in e)X.call(e,t)&&0>n.indexOf(t)&&(o[t]=e[t]);if(null!=e&&S)for(var t of S(e))0>n.indexOf(t)&&Y.call(e,t)&&(o[t]=e[t]);return o};let J=`
import { forwardRef } from 'react';
import { Box, BoxProps, createPolymorphicComponent, Group } from '@mantine/core';

interface MyButtonProps extends BoxProps {
  label: string;
}

const MyButton = createPolymorphicComponent<'button', MyButtonProps>(
  forwardRef<HTMLButtonElement, MyButtonProps>(({ label, ...others }, ref) => (
    <Box component="button" {...others} ref={ref}>
      {label}
    </Box>
  ))
);

function Demo() {
  return (
    <Group>
      <MyButton label="Button by default" />
      <MyButton
        label="MyButton as anchor"
        component="a"
        href="https://mantine.dev"
        target="_blank"
      />
    </Group>
  );
}
`,Q=(0,g.F)((0,a.forwardRef)((e,n)=>{var{label:o}=e,t=q(e,["label"]);return a.createElement(F.x,U(K({component:"button"},t),{ref:n}),o)})),V={type:"code",component:function(){return a.createElement(v.Z,null,a.createElement(Q,{label:"Button by default"}),a.createElement(Q,{label:"MyButton as anchor",component:"a",href:"https://mantine.dev",target:"_blank"}))},centered:!0,code:J},$=(0,c.A)(p.us.Polymorphic);function ee(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,r.ah)(),e.components),{Demo:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"polymorphic-components",children:"Polymorphic components"}),"\n",(0,t.jsx)(n.h2,{id:"what-is-a-polymorphic-component",children:"What is a polymorphic component"}),"\n",(0,t.jsxs)(n.p,{children:["A polymorphic component is a component which root element can be changed with ",(0,t.jsx)(n.code,{children:"component"})," prop.\nAll polymorphic components have a default element which is used when ",(0,t.jsx)(n.code,{children:"component"})," prop is not provided.\nFor example, ",(0,t.jsx)(n.a,{href:"/components/button",children:"Button"})," component default element is ",(0,t.jsx)(n.code,{children:"button"})," and\nit can be changed to ",(0,t.jsx)(n.code,{children:"a"})," or any other element or component:"]}),"\n",(0,t.jsx)(o,{data:s}),"\n",(0,t.jsx)(n.h2,{id:"polymorphic-components-as-other-react-components",children:"Polymorphic components as other React components"}),"\n",(0,t.jsxs)(n.p,{children:["You can pass any other React component to ",(0,t.jsx)(n.code,{children:"component"})," prop.\nFor example you can pass ",(0,t.jsx)(n.code,{children:"Link"})," component from ",(0,t.jsx)(n.code,{children:"react-router-dom"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Link } from 'react-router-dom';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button component={Link} to=\"/react-router\">\n      React router link\n    </Button>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"polymorphic-components-as-nextjs-link",children:"Polymorphic components as Next.js Link"}),"\n",(0,t.jsx)(n.p,{children:"Next.js link does not work in the same way as other similar components in all Next.js version."}),"\n",(0,t.jsx)(n.p,{children:"With Next.js 12 and below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import Link from 'next/link';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Link href=\"/hello\" passHref>\n      <Button component=\"a\">Next link button</Button>\n    </Link>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"With Next.js 13 and above:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import Link from 'next/link';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button component={Link} href=\"/hello\">\n      Next link button\n    </Button>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"wrapping-polymorphic-components",children:"Wrapping polymorphic components"}),"\n",(0,t.jsxs)(n.p,{children:["Non-polymorphic components include ",(0,t.jsx)(n.code,{children:"React.ComponentPropsWithoutRef<'x'>"})," as a part of their props type,\nwhere ",(0,t.jsx)(n.code,{children:"x"})," is a root element of the component. For example, ",(0,t.jsx)(n.a,{href:"/core/container",children:"Container"})," component\nis not polymorphic – its root element is always ",(0,t.jsx)(n.code,{children:"div"}),", so its props type includes ",(0,t.jsx)(n.code,{children:"React.ComponentPropsWithoutRef<'div'>"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Polymorphic components do not include ",(0,t.jsx)(n.code,{children:"React.ComponentPropsWithoutRef<'x'>"})," as a part of their props type,\nbecause their root element can be changed, and thus props type can be inferred only after component was rendered."]}),"\n",(0,t.jsx)(n.p,{children:"Example of creating non-polymorphic wrapper component for Mantine polymorphic component:"}),"\n",(0,t.jsx)(o,{data:w}),"\n",(0,t.jsx)(n.p,{children:"Example of creating polymorphic wrapper component for Mantine polymorphic component:"}),"\n",(0,t.jsx)(o,{data:W}),"\n",(0,t.jsx)(n.h2,{id:"dynamic-component-prop",children:"Dynamic component prop"}),"\n",(0,t.jsxs)(n.p,{children:["You can use dynamic value in ",(0,t.jsx)(n.code,{children:"component"})," prop, but in this case you need to either provide types manually\nor disable type checking by passing ",(0,t.jsx)(n.code,{children:"any"})," as a type argument to polymorphic component:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\nfunction KeepTypes() {\n  return <Box<'input'> component={(Math.random() > 0.5 ? 'input' : 'div') as any} />;\n}\n\nfunction NukeTypes() {\n  return <Box<any> component={Math.random() > 0.5 ? 'input' : 'div'} />;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"create-your-own-polymorphic-components",children:"Create your own polymorphic components"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"createPolymorphicComponent"})," function and ",(0,t.jsx)(n.a,{href:"/core/box",children:"Box"})," component to create new polymorphic components:"]}),"\n",(0,t.jsx)(o,{data:V}),"\n",(0,t.jsx)(n.h2,{id:"make-mantine-component-polymorphic",children:"Make Mantine component polymorphic"}),"\n",(0,t.jsxs)(n.p,{children:["Polymorphic components have performance overhead for tsserver (no impact on runtime performance),\nbecause of that not all Mantine components have polymorphic types, but all components still\naccept ",(0,t.jsx)(n.code,{children:"component"})," prop – root element can be changed."]}),"\n",(0,t.jsxs)(n.p,{children:["To make Mantine component polymorphic, use ",(0,t.jsx)(n.code,{children:"createPolymorphicComponent"})," function the same way\nas in previous example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Group, GroupProps, createPolymorphicComponent } from '@mantine/core';\n\nconst PolymorphicGroup = createPolymorphicComponent<'button', GroupProps>(Group);\n\nfunction Demo() {\n  return <PolymorphicGroup component=\"a\" href=\"https://mantine.dev\" />;\n}\n"})})]})}var en=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)($,Object.assign({},e,{children:(0,t.jsx)(ee,e)}))}}},function(e){e.O(0,[5664,9341,4940,9774,2888,179],function(){return e(e.s=77733)}),_N_E=e.O()}]);