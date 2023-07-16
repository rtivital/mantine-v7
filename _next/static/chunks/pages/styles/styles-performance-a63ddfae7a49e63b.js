(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8226],{95341:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/styles-performance",function(){return s(30102)}])},30102:function(e,n,s){"use strict";s.r(n);var t=s(85893),o=s(11151),r=s(34940),i=s(34200),l=s(35310),a=s(55847),c=s(79724);let d=(0,r.A)(i.us.StylesPerformance);function p(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",ul:"ul",li:"li",em:"em",pre:"pre"},(0,o.ah)(),e.components),{Demo:s}=n;return s||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"styles-performance",children:"Styles performance"}),"\n",(0,t.jsx)(n.h2,{id:"css-modules",children:"CSS modules"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," is the most performant way to apply styles –\nthis approach generates static CSS that is never re-evaluated. 99% of Mantine components\nstyles are generated with CSS modules – components are optimized out of the box."]}),"\n",(0,t.jsxs)(n.p,{children:["In most cases, it is recommended to use ",(0,t.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," to style your components as well.\nYou can apply styles to HTML elements with ",(0,t.jsx)(n.code,{children:"className"})," prop and to Mantine components with ",(0,t.jsx)(n.code,{children:"className"}),",\n",(0,t.jsx)(n.code,{children:"classNames"})," props."]}),"\n",(0,t.jsxs)(n.p,{children:["Applying styles with ",(0,t.jsx)(n.code,{children:"className"}),":"]}),"\n",(0,t.jsx)(s,{data:l.o}),"\n",(0,t.jsxs)(n.p,{children:["Applying styles with ",(0,t.jsx)(n.code,{children:"classNames"})," (see ",(0,t.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API guide"})," to learn more):"]}),"\n",(0,t.jsx)(s,{data:a.A}),"\n",(0,t.jsx)(n.h2,{id:"inline-styles",children:"Inline styles"}),"\n",(0,t.jsxs)(n.p,{children:["Inline styles (",(0,t.jsx)(n.code,{children:"style"})," and ",(0,t.jsx)(n.code,{children:"styles"})," props) are less performant than CSS modules, but still\nperformant enough to be used in most cases if it is your preferred way of styling in your project."]}),"\n",(0,t.jsx)(n.p,{children:"Inline styles caveats:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Styles are not reused between components, each component will generate its own styles, for example,\nif you have 100 buttons with the same styles, CSS modules will generate 1 class for all of them,\ninline styles will generate 100 ",(0,t.jsx)(n.code,{children:"style"})," attributes"]}),"\n",(0,t.jsx)(n.li,{children:"If inline styles are overused, it can increase bundle size and output HTML size"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Not performance related"}),": inline styles have higher specificity than CSS modules, so if you want\nto override inline styles you will have to use ",(0,t.jsx)(n.code,{children:"!important"})," or use another inline styles"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example of inline styles:"}),"\n",(0,t.jsx)(s,{data:c.W}),"\n",(0,t.jsx)(n.h2,{id:"style-props",children:"Style props"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/styles/style-props",children:"Style props"})," transform component props into inline styles. Style props have\nthe same caveats as inline styles, it is not recommended to use them as the primary means of styling\nyour components. Usually, style props are used to apply 1–3 styles to a component – using them\nthis way does not impact performance."]}),"\n",(0,t.jsx)(n.h2,{id:"responsive-style-props",children:"Responsive style props"}),"\n",(0,t.jsxs)(n.p,{children:["Responsive ",(0,t.jsx)(n.a,{href:"/styles/style-props",children:"style props"})," have worse performance than regular style props\nbecause they require injecting ",(0,t.jsx)(n.code,{children:"<style />"})," tag next to the component. It is fine to use responsive\nstyle props to apply styles to several components, but it is not recommended to use\nthem in large lists of components, for example, if you have 1000 inputs with responsive margins,\nit is better to refactor to use ",(0,t.jsx)(n.code,{children:"classNames"})," prop:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { TextInput } from \'@mantine/core\';\n\n// Ok, style props are used to apply margin-top property to several components\nfunction StyleProps() {\n  return (\n    <>\n      <TextInput label="Input 1" />\n      <TextInput label="Input 2" mt={{ base: 10, md: 20 }} />\n      <TextInput label="Input 3" mt={{ base: 10, md: 20 }} />\n    </>\n  );\n}\n\n// Worse, 1000 separate `<style />` tags will be generated\n// Better to refactor to use className prop\nfunction StylePropsArray() {\n  const inputs = Array(1000)\n    .fill(0)\n    .map((_, index) => (\n      <TextInput key={index} label={`Input ${index}`} mt={{ base: 10, md: 20 }} />\n    ));\n\n  return <>{inputs}</>;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"components-responsive-props",children:"Components responsive props"}),"\n",(0,t.jsxs)(n.p,{children:["Some components, like ",(0,t.jsx)(n.a,{href:"/components/simple-grid",children:"SimpleGrid"})," and ",(0,t.jsx)(n.a,{href:"/components/grid",children:"Grid"}),"\nrely on the same mechanism as responsive style props to apply styles. The limitations are the same\n– it is fine to use these several of these components on a page, but it is not recommended to use\nthem in large lists of components."]})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(d,Object.assign({},e,{children:(0,t.jsx)(p,e)}))}},35310:function(e,n,s){"use strict";s.d(n,{o:function(){return a}});var t=s(67294),o=s(13671),r={box:"m-3b7b8cc2",highlight:"m-b0c0466b"};let i=`
import { Box } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Box className={classes.box}>
      Box component with <span className={classes.highlight}>some styles</span>
    </Box>
  );
}
`,l=`
.box {
  font-size: var(--mantine-font-size-xl);
  text-align: center;
  font-weight: 600;
}

.highlight {
  padding: 0.1rem 0.7rem;
  display: inline-block;
  border-radius: var(--mantine-radius-md);
  background: var(--mantine-color-blue-light);
  color: var(--mantine-color-blue-light-color);
}
`,a={type:"code",component:function(){return t.createElement(o.x,{className:r.box},"Box component with ",t.createElement("span",{className:r.highlight},"some styles"))},code:[{fileName:"Demo.tsx",language:"tsx",code:i},{fileName:"Demo.module.css",language:"css",code:l}]}},79724:function(e,n,s){"use strict";s.d(n,{W:function(){return l}});var t=s(67294),o=s(55899),r=s(46393);let i=`
import { Button, rem } from '@mantine/core';

function Demo() {
  const gradient =
    'linear-gradient(45deg, var(--mantine-color-pink-filled) 0%, var(--mantine-color-orange-filled) 50%, var(--mantine-color-yellow-filled) 100%)';

  return (
    <Button
      radius="md"
      styles={{
        root: {
          padding: rem(2),
          border: 0,
          backgroundImage: gradient,
        },

        inner: {
          background: 'var(--mantine-color-body)',
          color: 'var(--mantine-color-text)',
          borderRadius: 'calc(var(--button-radius) - 2px)',
          paddingLeft: 'var(--mantine-spacing-md)',
          paddingRight: 'var(--mantine-spacing-md)',
        },

        label: {
          backgroundImage: gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
      }}
    >
      Gradient button
    </Button>
  );
}
`,l={type:"code",component:function(){let e="linear-gradient(45deg, var(--mantine-color-pink-filled) 0%, var(--mantine-color-orange-filled) 50%, var(--mantine-color-yellow-filled) 100%)";return t.createElement(o.z,{radius:"md",styles:{root:{padding:(0,r.h)(2),border:0,backgroundImage:e},inner:{background:"var(--mantine-color-body)",color:"var(--mantine-color-text)",borderRadius:"calc(var(--button-radius) - 2px)",paddingLeft:"var(--mantine-spacing-md)",paddingRight:"var(--mantine-spacing-md)"},label:{backgroundImage:e,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}},"Gradient button")},centered:!0,code:i}}},function(e){e.O(0,[2411,7437,9815,9774,2888,179],function(){return e(e.s=95341)}),_N_E=e.O()}]);