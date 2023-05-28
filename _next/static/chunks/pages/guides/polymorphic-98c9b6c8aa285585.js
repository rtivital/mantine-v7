(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8442],{77733:function(n,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/polymorphic",function(){return o(21421)}])},21421:function(n,e,o){"use strict";o.r(e),o.d(e,{default:function(){return E}});var t=o(85893),r=o(11151),c=o(34940),p=o(25263),a=o(67294),i=o(43406);let s=`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button component="a" href="https://mantine.dev/" target="_blank">
      Mantine website
    </Button>
  );
}
`,m={type:"code",component:function(){return a.createElement(i.z,{component:"a",href:"https://mantine.dev/",target:"_blank"},"Mantine website")},centered:!0,code:s},l=`
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
`,h=(0,a.forwardRef)((n,e)=>a.createElement(i.z,Object.assign({},n,{ref:e,component:"a"}))),u={type:"code",component:function(){return a.createElement(h,{href:"https://mantine.dev",target:"_blank"},"Mantine website")},centered:!0,code:l};var d=o(59312),f=o(15067),x=o(74378);let y=`
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
`,b=(0,f.F)((0,a.forwardRef)((n,e)=>{var{label:o}=n,t=(0,d._T)(n,["label"]);return a.createElement(i.z,Object.assign({},t,{ref:e}),o)})),j=(0,f.F)((0,a.forwardRef)((n,e)=>{var{label:o}=n,t=(0,d._T)(n,["label"]);return a.createElement(i.z,Object.assign({component:"a"},t,{ref:e}),o)})),B={type:"code",component:function(){return a.createElement(x.Z,null,a.createElement(b,{label:"Button by default",color:"cyan"}),a.createElement(j,{label:"Anchor by default",href:"https://mantine.dev",target:"_blank"}))},centered:!0,code:y};var g=o(94873);let w=`
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
`,P=(0,f.F)((0,a.forwardRef)((n,e)=>{var{label:o}=n,t=(0,d._T)(n,["label"]);return a.createElement(g.x,Object.assign({component:"button"},t,{ref:e}),o)})),k={type:"code",component:function(){return a.createElement(x.Z,null,a.createElement(P,{label:"Button by default"}),a.createElement(P,{label:"MyButton as anchor",component:"a",href:"https://mantine.dev",target:"_blank"}))},centered:!0,code:w},v=(0,c.A)(p.us.Polymorphic);function C(n){let e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,r.ah)(),n.components),{Demo:o}=e;return o||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"polymorphic-components",children:"Polymorphic components"}),"\n",(0,t.jsx)(e.h2,{id:"what-is-a-polymorphic-component",children:"What is a polymorphic component"}),"\n",(0,t.jsxs)(e.p,{children:["A polymorphic component is a component which root element can be changed with ",(0,t.jsx)(e.code,{children:"component"})," prop.\nAll polymorphic components have a default element which is used when ",(0,t.jsx)(e.code,{children:"component"})," prop is not provided.\nFor example, the ",(0,t.jsx)(e.a,{href:"/components/button",children:"Button"})," component default element is ",(0,t.jsx)(e.code,{children:"button"})," and\nit can be changed to ",(0,t.jsx)(e.code,{children:"a"})," or any other element or component:"]}),"\n",(0,t.jsx)(o,{data:m}),"\n",(0,t.jsx)(e.h2,{id:"polymorphic-components-as-other-react-components",children:"Polymorphic components as other React components"}),"\n",(0,t.jsxs)(e.p,{children:["You can pass any other React component to ",(0,t.jsx)(e.code,{children:"component"})," prop.\nFor example, you can pass ",(0,t.jsx)(e.code,{children:"Link"})," component from ",(0,t.jsx)(e.code,{children:"react-router-dom"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import { Link } from 'react-router-dom';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button component={Link} to=\"/react-router\">\n      React router link\n    </Button>\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"polymorphic-components-as-nextjs-link",children:"Polymorphic components as Next.js Link"}),"\n",(0,t.jsx)(e.p,{children:"Next.js link does not work in the same way as other similar components in all Next.js versions."}),"\n",(0,t.jsx)(e.p,{children:"With Next.js 12 and below:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import Link from 'next/link';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Link href=\"/hello\" passHref>\n      <Button component=\"a\">Next link button</Button>\n    </Link>\n  );\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"With Next.js 13 and above:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import Link from 'next/link';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button component={Link} href=\"/hello\">\n      Next link button\n    </Button>\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"wrapping-polymorphic-components",children:"Wrapping polymorphic components"}),"\n",(0,t.jsxs)(e.p,{children:["Non-polymorphic components include ",(0,t.jsx)(e.code,{children:"React.ComponentPropsWithoutRef<'x'>"})," as a part of their props type,\nwhere ",(0,t.jsx)(e.code,{children:"x"})," is a root element of the component. For example, ",(0,t.jsx)(e.a,{href:"/core/container",children:"Container"})," component\nis not polymorphic – its root element is always ",(0,t.jsx)(e.code,{children:"div"}),", so its props type includes ",(0,t.jsx)(e.code,{children:"React.ComponentPropsWithoutRef<'div'>"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Polymorphic components do not include ",(0,t.jsx)(e.code,{children:"React.ComponentPropsWithoutRef<'x'>"})," as a part of their props type\nbecause their root element can be changed, and thus props type can be inferred only after the component was rendered."]}),"\n",(0,t.jsx)(e.p,{children:"Example of creating a non-polymorphic wrapper component for Mantine polymorphic component:"}),"\n",(0,t.jsx)(o,{data:u}),"\n",(0,t.jsx)(e.p,{children:"Example of creating a polymorphic wrapper component for Mantine polymorphic component:"}),"\n",(0,t.jsx)(o,{data:B}),"\n",(0,t.jsx)(e.h2,{id:"dynamic-component-prop",children:"Dynamic component prop"}),"\n",(0,t.jsxs)(e.p,{children:["You can use dynamic value in the ",(0,t.jsx)(e.code,{children:"component"})," prop, but in this case, you need to either provide types manually\nor disable type checking by passing ",(0,t.jsx)(e.code,{children:"any"})," as a type argument to the polymorphic component:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\nfunction KeepTypes() {\n  return <Box<'input'> component={(Math.random() > 0.5 ? 'input' : 'div') as any} />;\n}\n\nfunction NukeTypes() {\n  return <Box<any> component={Math.random() > 0.5 ? 'input' : 'div'} />;\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"create-your-own-polymorphic-components",children:"Create your own polymorphic components"}),"\n",(0,t.jsxs)(e.p,{children:["Use ",(0,t.jsx)(e.code,{children:"createPolymorphicComponent"})," function and ",(0,t.jsx)(e.a,{href:"/core/box",children:"Box"})," component to create new polymorphic components:"]}),"\n",(0,t.jsx)(o,{data:k}),"\n",(0,t.jsx)(e.h2,{id:"make-mantine-component-polymorphic",children:"Make Mantine component polymorphic"}),"\n",(0,t.jsxs)(e.p,{children:["Polymorphic components have performance overhead for tsserver (no impact on runtime performance),\nbecause of that not all Mantine components have polymorphic types, but all components still\naccept ",(0,t.jsx)(e.code,{children:"component"})," prop – root element can be changed."]}),"\n",(0,t.jsxs)(e.p,{children:["To make Mantine component polymorphic, use ",(0,t.jsx)(e.code,{children:"createPolymorphicComponent"})," function the same way\nas in the previous example:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import { Group, GroupProps, createPolymorphicComponent } from '@mantine/core';\n\nconst PolymorphicGroup = createPolymorphicComponent<'button', GroupProps>(Group);\n\nfunction Demo() {\n  return <PolymorphicGroup component=\"a\" href=\"https://mantine.dev\" />;\n}\n"})})]})}var E=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(v,Object.assign({},n,{children:(0,t.jsx)(C,n)}))}}},function(n){n.O(0,[5664,9341,4831,9774,2888,179],function(){return n(n.s=77733)}),_N_E=n.O()}]);