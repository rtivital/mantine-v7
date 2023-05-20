(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1269],{48385:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/container",function(){return t(77584)}])},77584:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return F}});var i=t(85893),r=t(11151),o=t(34940),s=t(25263),a=t(67294),c=t(46049),d=Object.defineProperty,m=Object.defineProperties,l=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,f=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&u(e,t,n[t]);if(h)for(var t of h(n))x.call(n,t)&&u(e,t,n[t]);return e},C=(e,n)=>m(e,l(n));let j=`
import { Container } from '@mantine/core';

function Demo() {
  const demoProps = {
    bg: 'var(--mantine-color-blue-light)',
    h: 50,
    mt: 'md',
  };

  return (
    <>
      <Container {...demoProps}>Default Container</Container>

      <Container size="xs" {...demoProps}>
        xs Container
      </Container>

      <Container px={0} size="30rem" {...demoProps} mt="md">
        30rem Container without padding
      </Container>
    </>
  );
}
`,g={type:"code",component:function(){let e={bg:"var(--mantine-color-blue-light)",h:50,mt:"md"};return a.createElement(a.Fragment,null,a.createElement(c.W,C(f({},e),{mt:0}),"Default Container"),a.createElement(c.W,f({size:"xs"},e),"xs Container"),a.createElement(c.W,C(f({px:0,size:"30rem"},e),{mt:"md"}),"30rem Container without padding"))},code:j},v=`
import { Container } from '@mantine/core';

function Demo() {
  return (
    <Container fluid h={50} bg="var(--mantine-color-blue-light)">
      Fluid container has 100% max-width
    </Container>
  );
}
`,w={type:"code",component:function(){return a.createElement(c.W,{fluid:!0,h:50,bg:"var(--mantine-color-blue-light)"},"Fluid container has 100% max-width")},code:v};var b=t(46393),z=t(39242),E=t(49441);let y=`
import { Container, MantineProvider, createTheme, rem } from '@mantine/core';

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(300),
  xs: rem(400),
  sm: rem(500),
  md: rem(600),
  lg: rem(700),
  xl: rem(800),
  xxl: rem(900),
};

const theme = createTheme({
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
            ? CONTAINER_SIZES[size]
            : rem(size),
        },
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Container size="xxs" bg="var(--mantine-color-blue-light)">
        Container with custom size
      </Container>
    </MantineProvider>
  );
}

`,P={xxs:(0,b.h)(300),xs:(0,b.h)(400),sm:(0,b.h)(500),md:(0,b.h)(600),lg:(0,b.h)(700),xl:(0,b.h)(800),xxl:(0,b.h)(900)},N=(0,z.j)({components:{Container:c.W.extend({vars:(e,{size:n,fluid:t})=>({root:{"--container-size":t?"100%":void 0!==n&&n in P?P[n]:(0,b.h)(n)}})})}}),_={type:"code",component:function(){return a.createElement(E.M2,{theme:N},a.createElement(c.W,{size:"xxs",bg:"var(--mantine-color-blue-light)"},"Container with custom size"))},code:y};var O=t(38944),D={responsiveContainer:"mantine-88drGXg"};let S=`
import cx from 'clsx';
import { MantineProvider, Container, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === 'responsive' }),
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Container size="responsive" bg="var(--mantine-color-blue-light)">
        Container with responsive size
      </Container>
    </MantineProvider>
  );
}
`,k=`
.responsiveContainer {
  max-width: rem(300px);

  @media (min-width: em(400px)) {
    max-width: rem(400px);
  }

  @media (min-width: em(600px)) {
    max-width: rem(600px);
  }
}
`,T=(0,z.j)({components:{Container:c.W.extend({classNames:(e,{size:n})=>({root:(0,O.Z)({[D.responsiveContainer]:"responsive"===n})})})}}),I={type:"code",component:function(){return a.createElement(E.M2,{theme:T},a.createElement(c.W,{size:"responsive",bg:"var(--mantine-color-blue-light)"},"Container with responsive size"))},code:[{fileName:"Demo.tsx",code:S,language:"tsx"},{fileName:"Demo.module.css",code:k,language:"css"}]},M=(0,o.A)(s.us.Container);function W(e){let n=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,r.ah)(),e.components),{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Container"})," centers content and limits its ",(0,i.jsx)(n.code,{children:"max-width"})," to the value specified in ",(0,i.jsx)(n.code,{children:"size"})," prop.\nNote that the ",(0,i.jsx)(n.code,{children:"size"})," prop does not make ",(0,i.jsx)(n.code,{children:"max-width"})," responsive, for example,\nwhen it set to ",(0,i.jsx)(n.code,{children:"lg"})," it will always be ",(0,i.jsx)(n.code,{children:"lg"})," regardless of screen size."]}),"\n",(0,i.jsx)(t,{data:g}),"\n",(0,i.jsx)(n.h2,{id:"fluid",children:"Fluid"}),"\n",(0,i.jsxs)(n.p,{children:["Set ",(0,i.jsx)(n.code,{children:"fluid"})," prop to make container fluid, it will take 100% of available width,\nit is the same as setting ",(0,i.jsx)(n.code,{children:'size="100%"'}),"."]}),"\n",(0,i.jsx)(t,{data:w}),"\n",(0,i.jsx)(n.h2,{id:"customize-sizes",children:"Customize sizes"}),"\n",(0,i.jsxs)(n.p,{children:["You can customize existing ",(0,i.jsx)(n.code,{children:"Container"})," sizes and add new ones with ",(0,i.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"}),"\non ",(0,i.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,i.jsx)(t,{data:_}),"\n",(0,i.jsx)(n.h2,{id:"responsive-max-width",children:"Responsive max-width"}),"\n",(0,i.jsxs)(n.p,{children:["To make ",(0,i.jsx)(n.code,{children:"Container"})," ",(0,i.jsx)(n.code,{children:"max-width"})," responsive, use ",(0,i.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," to set\n",(0,i.jsx)(n.code,{children:"classNames"}),". For example, you can add ",(0,i.jsx)(n.code,{children:"responsive"})," size that will make ",(0,i.jsx)(n.code,{children:"Container"}),"\n",(0,i.jsx)(n.code,{children:"max-width"})," different depending on screen size:"]}),"\n",(0,i.jsx)(t,{data:I})]})}var F=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(M,Object.assign({},e,{children:(0,i.jsx)(W,e)}))}}},function(e){e.O(0,[5664,9341,4940,9774,2888,179],function(){return e(e.s=48385)}),_N_E=e.O()}]);