(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9354],{19837:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/input",function(){return n(66357)}])},66357:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ed}});var r=n(85893),o=n(11151),l=n(34940),i=n(25263),a=n(67294),p=n(51499),c=n(51343),s=Object.defineProperty,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&h(e,n,t[n]);if(u)for(var n of u(t))m.call(t,n)&&h(e,n,t[n]);return e};let x=`
import { Input } from '@mantine/core';

function Demo() {
  return <Input{{props}} placeholder="Input component" />;
}
`,b={type:"configurator",component:function(e){return a.createElement(p.I,f({placeholder:"Input component"},e))},code:x,centered:!0,maxWidth:340,controls:c.Mt};var I=n(75675),j=n(93693);let y=`
import { useState } from 'react';
import { Input, CloseButton } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const [value, setValue] = useState('Clear me');
  return (
    <>
      <Input placeholder="Your email" leftSection={<IconAt size={16} />} />
      <Input
        placeholder="Clearable input"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        mt="md"
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => setValue('')}
            style={{ display: value ? undefined : 'none' }}
          />
        }
      />
    </>
  );
}
`,v={type:"code",component:function(){let[e,t]=(0,a.useState)("Clear me");return a.createElement(a.Fragment,null,a.createElement(p.I,{placeholder:"Your email",leftSection:a.createElement(j.Z,{size:16})}),a.createElement(p.I,{placeholder:"Clearable input",value:e,onChange:e=>t(e.currentTarget.value),rightSectionPointerEvents:"all",mt:"md",rightSection:a.createElement(I.P,{"aria-label":"Clear input",onClick:()=>t(""),style:{display:e?void 0:"none"}})}))},maxWidth:340,centered:!0,code:y};var g=n(62283);let w=`
import { Input } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Input component="button" pointer>
        Button input
      </Input>

      <Input
        component="select"
        rightSection={<IconChevronDown size={14} stroke={1.5} />}
        pointer
        mt="md"
      >
        <option value="1">1</option>
        <option value="2">2</option>
      </Input>
    </>
  );
}
`,E={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(p.I,{component:"button",pointer:!0},"Button input"),a.createElement(p.I,{component:"select",rightSection:a.createElement(g.Z,{size:14,stroke:1.5}),pointer:!0,mt:"md"},a.createElement("option",{value:"1"},"1"),a.createElement("option",{value:"2"},"2")))},code:w};var T=n(25707);let W=`
import { Input } from '@mantine/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return <Input<any> component={IMaskInput} mask="+7 (000) 000-00-00" placeholder="Your phone" />;
}
`,C={type:"code",component:function(){return a.createElement(p.I,{component:T.oc,mask:"+7 (000) 000-00-00",placeholder:"Your phone"})},maxWidth:340,centered:!0,code:W};var O=Object.defineProperty,S=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,N=(e,t,n)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))V.call(t,n)&&N(e,n,t[n]);if(S)for(var n of S(t))P.call(t,n)&&N(e,n,t[n]);return e};let D=`
import { Input } from '@mantine/core';

function Wrapper(props: any) {
  return (
    <Input.Wrapper{{props}}>
      <Input placeholder="Input inside Input.Wrapper" />
    </Input.Wrapper>
  );
}
`,A={type:"configurator",component:function(e){return a.createElement(p.I.Wrapper,k({},e),a.createElement(p.I,{placeholder:"Input inside Input.Wrapper"}))},code:D,centered:!0,maxWidth:440,controls:c.nW};var B=n(31577);let z=`
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput
        label="Custom layout"
        placeholder="Custom layout"
        description="Description below the input"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
      <TextInput
        mt="xl"
        label="Custom layout"
        placeholder="Custom layout"
        description="Error and description are"
        error="both below the input"
        inputWrapperOrder={['label', 'input', 'description', 'error']}
      />
    </>
  );
}
`,_={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(B.o,{label:"Custom layout",placeholder:"Custom layout",description:"Description below the input",inputWrapperOrder:["label","error","input","description"]}),a.createElement(B.o,{mt:"md",label:"Custom layout",placeholder:"Custom layout",description:"Error and description are",error:"both below the input",inputWrapperOrder:["label","input","description","error"]}))},maxWidth:340,centered:!0,code:z};var F=n(41283);let L=`
import { useState } from 'react';
import { TextInput, Tooltip } from '@mantine/core';

function Demo() {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      label="TextInput with tooltip"
      description="Tooltip will be relative to the input"
      placeholder="Focus me to see tooltip"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      inputContainer={(children) => (
        <Tooltip label="Additional information" position="top-start" opened={focused}>
          {children}
        </Tooltip>
      )}
    />
  );
}
`,M={type:"code",component:function(){let[e,t]=(0,a.useState)(!1);return a.createElement(B.o,{label:"TextInput with tooltip",description:"Tooltip will be relative to the input",placeholder:"Focus me to see tooltip",onFocus:()=>t(!0),onBlur:()=>t(!1),inputContainer:t=>a.createElement(F.u,{label:"Additional information",position:"top-start",opened:e},t)})},code:L},q=`
import { Input } from '@mantine/core';

function Demo() {
  return (
    <>
      <Input.Label required>Input label</Input.Label>
      <Input.Description>Input description</Input.Description>
      <Input.Error>Input error</Input.Error>
    </>
  );
}
`,R={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(p.I.Label,{required:!0},"Input label"),a.createElement(p.I.Description,null,"Input description"),a.createElement(p.I.Error,null,"Input error"))},code:q},Y=`
import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input component="button" pointer>
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}
`,X={type:"code",component:function(){return a.createElement(p.I,{component:"button",pointer:!0},a.createElement(p.I.Placeholder,null,"Placeholder content"))},maxWidth:340,centered:!0,code:Y};var U=n(39242),Z=n(49441),G=n(94042);let Q=`
`,H=(0,U.j)({components:{Input:p.I.extend({defaultProps:{variant:"filled"}}),InputWrapper:p.I.Wrapper.extend({defaultProps:{inputWrapperOrder:["label","input","description","error"]}})}}),J={type:"code",component:function(){return a.createElement(Z.M2,{theme:H},a.createElement(B.o,{label:"Text input",placeholder:"Text input",description:"Description below the input"}),a.createElement(G.p,{mt:"md",label:"Native select",placeholder:"Native select",data:["React","Angular","Vue","Svelte"],description:"Description below the input"}))},centered:!0,maxWidth:340,code:Q};var K={label:"mantine-imQBXX7",input:"mantine-m57XaXY"};let $=`
import { TextInput, NativeSelect, MantineThemeProvider, createTheme, Input } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({
      classNames: {
        input: classes.input,
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      classNames: {
        label: classes.label,
      },
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <TextInput label="Text input" placeholder="Text input" />

      <NativeSelect
        mt="md"
        label="Native select"
        placeholder="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </MantineThemeProvider>
  );
}
`,ee=`
.label {
  background-color: var(--mantine-color-blue-light);
}

.input {
  border: rem(1px) solid var(--mantine-color-violet-filled);
}
`,et=(0,U.j)({components:{Input:p.I.extend({classNames:{input:K.input}}),InputWrapper:p.I.Wrapper.extend({classNames:{label:K.label}})}}),en={type:"code",component:function(){return a.createElement(Z.M2,{theme:et},a.createElement(B.o,{label:"Text input",placeholder:"Text input"}),a.createElement(G.p,{mt:"md",label:"Native select",placeholder:"Native select",data:["React","Angular","Vue","Svelte"]}))},centered:!0,maxWidth:340,code:[{fileName:"Demo.tsx",code:$,language:"tsx"},{fileName:"Demo.module.css",code:ee,language:"css"}]};var er={input:"mantine-u1lkhpP"};let eo=`
import { Input, TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <>
      <Input placeholder="Regular Input component" classNames={classes} />
      <TextInput
        placeholder="TextInput component"
        label="TextInput component"
        mt="md"
        classNames={classes}
      />
    </>
  );
}
`,el=`
.input {
  transition: none;

  &:focus-within {
    outline: rem(2px) solid var(--mantine-color-blue-filled);
    border-color: transparent;
  }
}
`,ei={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(p.I,{placeholder:"Regular Input component",classNames:er}),a.createElement(B.o,{placeholder:"TextInput component",label:"TextInput component",mt:"md",classNames:er}))},maxWidth:340,centered:!0,code:[{fileName:"Demo.module.css",code:el,language:"css"},{fileName:"Demo.tsx",code:eo,language:"tsx"}]};var ea=n(39213);let ep=`
import { InputBase } from '@mantine/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return (
    <>
      <InputBase<any>
        label="Your phone"
        component={IMaskInput}
        mask="+7 (000) 000-0000"
        placeholder="Your phone"
      />

      <InputBase label="Custom native select" component="select" mt="md">
        <option value="react">React</option>
        <option value="react">Angular</option>
        <option value="svelte">Svelte</option>
      </InputBase>
    </>
  );
}
`,ec={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(ea.M,{label:"Your phone",component:T.oc,mask:"+7 (000) 000-0000",placeholder:"Your phone"}),a.createElement(ea.M,{label:"Custom native select",component:"select",mt:"md"},a.createElement("option",{value:"react"},"React"),a.createElement("option",{value:"react"},"Angular"),a.createElement("option",{value:"svelte"},"Svelte")))},maxWidth:340,centered:!0,code:ep},es=(0,l.A)(i.us.Input);function eu(e){let t=Object.assign({h2:"h2",p:"p",strong:"strong",code:"code",a:"a",pre:"pre",ul:"ul",li:"li",em:"em"},(0,o.ah)(),e.components),{Demo:n,GetElementRef:l}=t;return n||em("Demo",!0),l||em("GetElementRef",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"disclaimer",children:"Disclaimer"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"!important:"})," In most cases, you should not use ",(0,r.jsx)(t.code,{children:"Input"})," in your application.\n",(0,r.jsx)(t.code,{children:"Input"})," is a base for other inputs and was not designed to be used directly.\nUse ",(0,r.jsx)(t.code,{children:"Input"})," to create custom inputs, for other cases prefer ",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"}),"\nor other component."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'// Incorrect usage, input is not accessible\n<Input.Wrapper label="Input label">\n  <Input />\n</Input.Wrapper>\n\n// Use TextInput instead of Input everywhere you want to use Input,\n// it is accessible by default and includes Input.Wrapper\n<TextInput label="Input label" description="Input description" />\n'})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input"})," component is used as base for some other inputs (",(0,r.jsx)(t.a,{href:"/core/native-select/",children:"NativeSelect"}),", ",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"}),", ",(0,r.jsx)(t.a,{href:"/core/textarea/",children:"Textarea"}),", etc.).\nThe purpose of the ",(0,r.jsx)(t.code,{children:"Input"})," is to provide shared styles and features to other inputs."]}),"\n",(0,r.jsx)(n,{data:b}),"\n",(0,r.jsx)(t.h2,{id:"left-and-right-sections",children:"Left and right sections"}),"\n",(0,r.jsxs)(t.p,{children:["You can use ",(0,r.jsx)(t.code,{children:"leftSection"})," and ",(0,r.jsx)(t.code,{children:"rightSection"})," props to add icons or other elements to the left and right side of the input.\nYou can control the following sections styles with props:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"leftSectionWidth"})," / ",(0,r.jsx)(t.code,{children:"rightSectionWidth"})," – width of the section"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"leftSectionPointerEvents"})," / ",(0,r.jsx)(t.code,{children:"rightSectionPointerEvents"})," – pointer-events CSS property"]}),"\n"]}),"\n",(0,r.jsx)(n,{data:v}),"\n",(0,r.jsx)(t.h2,{id:"change-input-element",children:"Change input element"}),"\n",(0,r.jsxs)(t.p,{children:["Input is a ",(0,r.jsx)(t.a,{href:"/guides/polymorphic",children:"polymorphic component"}),", default root element is ",(0,r.jsx)(t.code,{children:"input"}),",\nbut it can be changed to any other element or component."]}),"\n",(0,r.jsxs)(t.p,{children:["Example of using ",(0,r.jsx)(t.code,{children:"Input"})," as ",(0,r.jsx)(t.code,{children:"button"})," and ",(0,r.jsx)(t.code,{children:"select"}),":"]}),"\n",(0,r.jsx)(n,{data:E}),"\n",(0,r.jsxs)(t.p,{children:["Example of using ",(0,r.jsx)(t.a,{href:"https://github.com/uNmAnNeR/imaskjs/tree/master/packages/react-imask",children:"react-imask"})," with ",(0,r.jsx)(t.code,{children:"Input"}),":"]}),"\n",(0,r.jsx)(n,{data:C}),"\n",(0,r.jsx)(t.h2,{id:"inputwrapper-component",children:"Input.Wrapper component"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input.Wrapper"})," component is used in all other inputs\n(",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"}),", ",(0,r.jsx)(t.a,{href:"/core/native-select/",children:"NativeSelect"}),", ",(0,r.jsx)(t.a,{href:"/core/textarea/",children:"Textarea"}),", etc.)\nunder the hood, you ",(0,r.jsx)(t.em,{children:"do not need to wrap your inputs with it, as it is already included in all of them"}),".\nUse ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," only when you want to create custom inputs."]}),"\n",(0,r.jsx)(n,{data:A}),"\n",(0,r.jsx)(t.h2,{id:"inputwrapperorder",children:"inputWrapperOrder"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"inputWrapperOrder"})," allows to configure the order of ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," parts.\nIt accepts an array of four elements: ",(0,r.jsx)(t.code,{children:"label"}),", ",(0,r.jsx)(t.code,{children:"input"}),", ",(0,r.jsx)(t.code,{children:"error"})," and ",(0,r.jsx)(t.code,{children:"description"}),".\nNote that it is not required to include all of them, you can use only those that you need\n– parts that are not included will not be rendered."]}),"\n",(0,r.jsx)(n,{data:_}),"\n",(0,r.jsx)(t.h2,{id:"inputcontainer",children:"inputContainer"}),"\n",(0,r.jsxs)(t.p,{children:["With ",(0,r.jsx)(t.code,{children:"inputContainer"})," prop you can enhance inputs that use ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," under the hood,\nfor example, you can add ",(0,r.jsx)(t.a,{href:"/core/tooltip/",children:"Tooltip"})," to ",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"})," when\nthe input is focused:"]}),"\n",(0,r.jsx)(n,{data:M}),"\n",(0,r.jsx)(t.h2,{id:"required-and-withasterisk-props",children:"required and withAsterisk props"}),"\n",(0,r.jsxs)(t.p,{children:["All components that are based on ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," support ",(0,r.jsx)(t.code,{children:"required"})," and ",(0,r.jsx)(t.code,{children:"withAsterisk"})," props.\nWhen set to true, both of these props will add red asterisk to the end of the label.\nThe only difference is whether input element will have ",(0,r.jsx)(t.code,{children:"required"})," attribute, example with\n",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"})," component:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { TextInput } from \'@mantine/core\';\n\n// Will display required asterisk and add `required` attribute to the input element\nfunction RequiredDemo() {\n  return <TextInput label="test-label" required />;\n}\n\n// Will only display the asterisk, `required` attribute is not added to the input element\nfunction AsteriskDemo() {\n  return <TextInput label="test-label" withAsterisk />;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"inputlabel-inputdescription-and-inputerror-components",children:"Input.Label, Input.Description and Input.Error components"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input.Label"}),", ",(0,r.jsx)(t.code,{children:"Input.Error"})," and ",(0,r.jsx)(t.code,{children:"Input.Description"})," components can be used to create custom\nform layouts if default ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," layout does not meet your requirements."]}),"\n",(0,r.jsx)(n,{data:R}),"\n",(0,r.jsx)(t.h2,{id:"inputplaceholder-component",children:"Input.Placeholder component"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input.Placeholder"})," component can be used to add placeholder to ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"InputBase"})," components that are based on ",(0,r.jsx)(t.code,{children:"button"})," element\nor do not support placeholder property natively:"]}),"\n",(0,r.jsx)(n,{data:X}),"\n",(0,r.jsx)(t.h2,{id:"default-props-on-theme",children:"Default props on theme"}),"\n",(0,r.jsxs)(t.p,{children:["You can add ",(0,r.jsx)(t.a,{href:"/theming/default-props/",children:"default props"})," on ",(0,r.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"}),"\nto ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," components. These default props will be inherited by all inputs\nthat use ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," under the hood (",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"}),", ",(0,r.jsx)(t.a,{href:"/core/native-select/",children:"NativeSelect"}),", ",(0,r.jsx)(t.a,{href:"/core/textarea/",children:"Textarea"}),", etc.):"]}),"\n",(0,r.jsx)(n,{data:J}),"\n",(0,r.jsx)(t.h2,{id:"styles-on-theme",children:"Styles on theme"}),"\n",(0,r.jsxs)(t.p,{children:["Same as with default props you can use ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," ",(0,r.jsx)(t.a,{href:"/styles/styles-api/",children:"Styles API"}),"\non ",(0,r.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"})," to add styles to all inputs:"]}),"\n",(0,r.jsx)(n,{data:en}),"\n",(0,r.jsx)(t.h2,{id:"change-focus-styles",children:"Change focus styles"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"&:focus-within"})," selector to change inputs focus styles. You can apply these styles to\none component with ",(0,r.jsx)(t.code,{children:"classNames"})," prop or to all inputs with ",(0,r.jsx)(t.a,{href:"/styles/styles-api/",children:"Styles API"}),"\non ",(0,r.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"}),"."]}),"\n",(0,r.jsx)(n,{data:ei}),"\n",(0,r.jsx)(t.h2,{id:"inputbase-component",children:"InputBase component"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"InputBase"})," component combines ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," components and supports ",(0,r.jsx)(t.code,{children:"component"})," prop:"]}),"\n",(0,r.jsx)(n,{data:ec}),"\n",(0,r.jsx)(l,{component:"Input",refType:"input"})]})}var ed=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(es,Object.assign({},e,{children:(0,r.jsx)(eu,e)}))};function em(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},75675:function(e,t,n){"use strict";n.d(t,{P:function(){return V}});var r=n(67294),o=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(a)for(var n of a(t))c.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>l(e,i(t)),m=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))0>t.indexOf(r)&&c.call(e,r)&&(n[r]=e[r]);return n};let h=(0,r.forwardRef)((e,t)=>{var{size:n="var(--cb-icon-size)",style:o}=e,l=m(e,["size","style"]);return r.createElement("svg",u({viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:d(u({},o),{width:n,height:n}),ref:t},l),r.createElement("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))});h.displayName="@mantine/core/CloseIcon";var f=n(80194),x=n(70656),b=n(35577),I=n(46393),j=Object.defineProperty,y=Object.defineProperties,v=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,T=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,W=(e,t)=>{for(var n in t||(t={}))w.call(t,n)&&T(e,n,t[n]);if(g)for(var n of g(t))E.call(t,n)&&T(e,n,t[n]);return e},C=(e,t)=>y(e,v(t)),O=(e,t)=>{var n={};for(var r in e)w.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&g)for(var r of g(e))0>t.indexOf(r)&&E.call(e,r)&&(n[r]=e[r]);return n};let S={iconSize:"70%",variant:"subtle",color:"gray"},V=(0,x.b)((e,t)=>{let n=(0,b.w)("CloseButton",S,e),{iconSize:o,children:l,vars:i}=n,a=O(n,["iconSize","children","vars"]);return r.createElement(f.A,C(W({ref:t},a),{__vars:{"--cb-icon-size":(0,I.h)(o)},__staticSelector:"CloseButton"}),r.createElement(h,null),l)});V.displayName="@mantine/core/CloseButton"},39242:function(e,t,n){"use strict";function r(e){return e}n.d(t,{j:function(){return r}})},51343:function(e,t,n){"use strict";n.d(t,{Mt:function(){return r},nW:function(){return o},pc:function(){return l}});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],o=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"",libraryValue:null}]}},function(e){e.O(0,[4878,6106,9341,4940,9774,2888,179],function(){return e(e.s=19837)}),_N_E=e.O()}]);