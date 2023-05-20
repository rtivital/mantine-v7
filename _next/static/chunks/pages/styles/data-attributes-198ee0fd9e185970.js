(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9837],{20008:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/data-attributes",function(){return n(79305)}])},79305:function(e,t,n){"use strict";n.r(t);var o=n(85893),s=n(11151),i=n(34940),a=n(25263),r=n(4872),d=n(90792),l=n(63090);let c=(0,i.A)(a.us.DataAttributes);function u(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",a:"a",pre:"pre",ul:"ul",li:"li"},(0,s.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"data-attributes",children:"data attributes"}),"\n",(0,o.jsxs)(t.p,{children:["Mantine components use ",(0,o.jsx)(t.code,{children:"data-*"})," attributes to apply styles. These attributes are used as\na modifier to apply styles based on component state. General rule of Mantine components\nstyles – one class with shared styles and any number of ",(0,o.jsx)(t.code,{children:"data-*"})," attributes as modifiers."]}),"\n",(0,o.jsxs)(t.p,{children:["Example of applying styles with ",(0,o.jsx)(t.code,{children:"data-*"})," attributes:"]}),"\n",(0,o.jsx)(n,{data:r.C}),"\n",(0,o.jsx)(t.h2,{id:"data-attributes-values",children:"data attributes values"}),"\n",(0,o.jsxs)(t.p,{children:["Most of the ",(0,o.jsx)(t.code,{children:"data-*"})," attributes do not have associated values, they represent boolean\nstate or feature. For example, when ",(0,o.jsx)(t.code,{children:"disabled"})," prop on ",(0,o.jsx)(t.a,{href:"/core/button",children:"Button"})," is set\n",(0,o.jsx)(t.code,{children:"data-disabled"})," attribute is added to ",(0,o.jsx)(t.code,{children:"<button />"})," element:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button disabled className=\"my-button\">\n      Disabled button\n    </Button>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"Will output the following HTML:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<button class="my-button" data-disabled>Disabled button</button>\n'})}),"\n",(0,o.jsx)(t.p,{children:"You can then use this attribute to apply styles to disabled button:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-css",children:".my-button {\n  color: var(--mantine-color-black);\n\n  &[data-disabled] {\n    color: var(--mantine-color-gray-5);\n  }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["When ",(0,o.jsx)(t.code,{children:"disabled"})," prop is not set, then ",(0,o.jsx)(t.code,{children:"data-disabled"})," attribute is not added to the\nbutton:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<button class="my-button">Not disabled button</button>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["In some cases ",(0,o.jsx)(t.code,{children:"data-*"})," attributes have associated values, for example, ",(0,o.jsx)(t.a,{href:"/core/button",children:"Button"}),"\ncomponent ",(0,o.jsx)(t.code,{children:"section"})," element has associated ",(0,o.jsx)(t.code,{children:"data-position"})," attribute which can be\n",(0,o.jsx)(t.code,{children:"left"})," or ",(0,o.jsx)(t.code,{children:"right"}),". The following example will render two ",(0,o.jsx)(t.code,{children:"section"})," elements, one with\n",(0,o.jsx)(t.code,{children:'data-position="left"'})," and another with ",(0,o.jsx)(t.code,{children:'data-position="right"'}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'import { Button } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Button leftSection="L" rightSection="R">\n      Label\n    </Button>\n  );\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Will output the following HTML:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<button>\n  <span class="section" data-position="left">L</span>\n  Label\n  <span class="section" data-position="right">R</span>\n</button>\n'})}),"\n",(0,o.jsx)(t.p,{children:"You can then use this attribute to apply styles to left and right sections:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-css",children:".section {\n  /* Styles applied to both sections */\n  width: 2rem;\n\n  /* Styles applied only to left section */\n  &[data-position='left'] {\n    background-color: red;\n  }\n\n  /* Styles applied only to right section */\n  &[data-position='right'] {\n    background-color: blue;\n  }\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"components-data-attributes-documentation",children:"Components data attributes documentation"}),"\n",(0,o.jsxs)(t.p,{children:["Every component that uses ",(0,o.jsx)(t.code,{children:"data-*"})," attributes has a dedicated section under ",(0,o.jsx)(t.code,{children:"Styles API"})," tab."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/core/button",children:"Button"})," component ",(0,o.jsx)(t.code,{children:"data-*"})," attributes table:"]}),"\n",(0,o.jsx)(l.Hx,{data:d.B,withTableBorder:!1,my:"xl"}),"\n",(0,o.jsx)(t.p,{children:"How to read this table:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"selector"})," column – ",(0,o.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"})," selector (or multiple selectors) to which data attribute is added"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"attribute"})," column – data attribute name"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"condition"})," column – condition based on which data attribute is added to the element"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"value"})," column – value of the data attribute"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"box-component-mod-prop",children:"Box component mod prop"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/core/box",children:"Box"})," component supports ",(0,o.jsx)(t.code,{children:"mod"})," prop which allows to add data attributes to\nthe element. You can use to create custom components with data attributes."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\n<Box mod=\"data-button\" />;\n// -> <div data-button />\n\n<Box mod={{ opened: true }} />;\n// -> <div data-opened />\n\n<Box mod={{ opened: false }} />;\n// -> <div />\n\n<Box mod={['button', { opened: true }]} />;\n// -> <div data-button data-opened />\n\n<Box mod={{ orientation: 'horizontal' }} />;\n// -> <div data-orientation=\"horizontal\" />\n"})})]})}t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(c,Object.assign({},e,{children:(0,o.jsx)(u,e)}))}},4687:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},4872:function(e,t,n){"use strict";n.d(t,{C:function(){return w}});var o=n(67294),s=n(43406),i=n(74378),a=n(46393),r=n(4687),d={root:"mantine-QSnP0HB",section:"mantine-Sxngl37"},l=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&b(e,n,t[n]);if(h)for(var n of h(t))m.call(t,n)&&b(e,n,t[n]);return e},j=(e,t)=>c(e,u(t));let f=`
import { Button, ButtonProps, Group, rem } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import classes from './Demo.module.css';

function SendFilesButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  return <Button {...props} radius="md" classNames={classes} />;
}

function Demo() {
  return (
    <Group>
      <SendFilesButton
        leftSection="12"
        rightSection={<IconArrowRight style={{ width: rem(18) }} />}
      >
        Send files
      </SendFilesButton>
      <SendFilesButton
        leftSection="3"
        rightSection={<IconArrowRight style={{ width: rem(18) }} />}
        disabled
      >
        Send files
      </SendFilesButton>
    </Group>
  );
}
`,g=`
.root {
  border-top-left-radius: var(--mantine-radius-xl);
  border-bottom-left-radius: var(--mantine-radius-xl);
  padding-left: rem(4px);

  /* The following styles will be applied only when button is disabled */
  &[data-disabled] {
    /* You can use Mantine PostCSS mixins inside data attributes */
    @mixin light {
      border: rem(1px) solid var(--mantine-color-gray-2);
    }

    @mixin dark {
      border: rem(1px) solid var(--mantine-color-dark-4);
    }

    /* You can target child elements that are inside .root[data-disabled] */
    & .section[data-position='left'] {
      opacity: 0.6;
    }
  }
}

.section {
  /* Apply styles only to left section */
  &[data-position='left'] {
    --section-size: calc(var(--button-height) - rem(8px));

    background-color: var(--mantine-color-body);
    color: var(--mantine-color-text);
    height: var(--section-size);
    width: var(--section-size);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--mantine-radius-xl);
  }

  &[data-position='right'] {
    @mixin rtl {
      transform: rotate(180deg);
    }
  }
}
`;function y(e){return o.createElement(s.z,j(x({},e),{radius:"md",classNames:d}))}let w={type:"code",component:function(){return o.createElement(i.Z,null,o.createElement(y,{leftSection:"12",rightSection:o.createElement(r.Z,{style:{width:(0,a.h)(18)}})},"Send files"),o.createElement(y,{leftSection:"3",rightSection:o.createElement(r.Z,{style:{width:(0,a.h)(18)}}),disabled:!0},"Send files"))},centered:!0,code:[{fileName:"Demo.module.css",code:g,language:"css"},{fileName:"Demo.tsx",code:f,language:"tsx"}]}}},function(e){e.O(0,[5664,9341,4940,9774,2888,179],function(){return e(e.s=20008)}),_N_E=e.O()}]);