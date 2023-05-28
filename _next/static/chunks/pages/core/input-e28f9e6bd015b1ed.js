(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9354],{19837:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/input",function(){return n(94898)}])},94898:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return el}});var r=n(85893),o=n(11151),i=n(34940),l=n(25263),a=n(67294),c=n(51499),p=n(51343);let s=`
import { Input } from '@mantine/core';

function Demo() {
  return <Input{{props}} placeholder="Input component" />;
}
`,u={type:"configurator",component:function(e){return a.createElement(c.I,Object.assign({placeholder:"Input component"},e))},code:s,centered:!0,maxWidth:340,controls:p.Mt};var d=n(75675),h=n(93693);let m=`
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
`,x={type:"code",component:function(){let[e,t]=(0,a.useState)("Clear me");return a.createElement(a.Fragment,null,a.createElement(c.I,{placeholder:"Your email",leftSection:a.createElement(h.Z,{size:16})}),a.createElement(c.I,{placeholder:"Clearable input",value:e,onChange:e=>t(e.currentTarget.value),rightSectionPointerEvents:"all",mt:"md",rightSection:a.createElement(d.P,{"aria-label":"Clear input",onClick:()=>t(""),style:{display:e?void 0:"none"}})}))},maxWidth:340,centered:!0,code:m};var I=n(62283);let f=`
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
`,b={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(c.I,{component:"button",pointer:!0},"Button input"),a.createElement(c.I,{component:"select",rightSection:a.createElement(I.Z,{size:14,stroke:1.5}),pointer:!0,mt:"md"},a.createElement("option",{value:"1"},"1"),a.createElement("option",{value:"2"},"2")))},code:f};var j=n(25707);let y=`
import { Input } from '@mantine/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return <Input<any> component={IMaskInput} mask="+7 (000) 000-00-00" placeholder="Your phone" />;
}
`,g={type:"code",component:function(){return a.createElement(c.I,{component:j.oc,mask:"+7 (000) 000-00-00",placeholder:"Your phone"})},maxWidth:340,centered:!0,code:y},v=`
import { Input } from '@mantine/core';

function Wrapper() {
  return (
    <Input.Wrapper{{props}}>
      <Input placeholder="Input inside Input.Wrapper" />
    </Input.Wrapper>
  );
}
`,w={type:"configurator",component:function(e){return a.createElement(c.I.Wrapper,Object.assign({},e),a.createElement(c.I,{placeholder:"Input inside Input.Wrapper"}))},code:v,centered:!0,maxWidth:440,controls:p.nW};var E=n(31577);let W=`
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
`,T={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(E.o,{label:"Custom layout",placeholder:"Custom layout",description:"Description below the input",inputWrapperOrder:["label","error","input","description"]}),a.createElement(E.o,{mt:"md",label:"Custom layout",placeholder:"Custom layout",description:"Error and description are",error:"both below the input",inputWrapperOrder:["label","input","description","error"]}))},maxWidth:340,centered:!0,code:W};var S=n(41283);let C=`
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
`,k={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,a.useState)(!1);return a.createElement(E.o,{label:"TextInput with tooltip",description:"Tooltip will be relative to the input",placeholder:"Focus me to see tooltip",onFocus:()=>t(!0),onBlur:()=>t(!1),inputContainer:t=>a.createElement(S.u,{label:"Additional information",position:"top-start",opened:e},t)})},code:C},N=`
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
`,D={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(c.I.Label,{required:!0},"Input label"),a.createElement(c.I.Description,null,"Input description"),a.createElement(c.I.Error,null,"Input error"))},code:N},V=`
import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input component="button" pointer>
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}
`,P={type:"code",component:function(){return a.createElement(c.I,{component:"button",pointer:!0},a.createElement(c.I.Placeholder,null,"Placeholder content"))},maxWidth:340,centered:!0,code:V};var A=n(39242),O=n(49441),z=n(94042);let B=`
import { TextInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';

const theme = createTheme({
  components: {
    Input: Input.extend({
      defaultProps: {
        variant: 'filled',
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      defaultProps: {
        inputWrapperOrder: ['label', 'input', 'description', 'error'],
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput
        label="Text input"
        placeholder="Text input"
        description="Description below the input"
      />

      <NativeSelect
        mt="md"
        label="Native select"
        placeholder="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        description="Description below the input"
      />
    </MantineProvider>
  );
}
`,Y=(0,A.j)({components:{Input:c.I.extend({defaultProps:{variant:"filled"}}),InputWrapper:c.I.Wrapper.extend({defaultProps:{inputWrapperOrder:["label","input","description","error"]}})}}),_={type:"code",component:function(){return a.createElement(O.M2,{theme:Y},a.createElement(E.o,{label:"Text input",placeholder:"Text input",description:"Description below the input"}),a.createElement(z.p,{mt:"md",label:"Native select",placeholder:"Native select",data:["React","Angular","Vue","Svelte"],description:"Description below the input"}))},centered:!0,maxWidth:340,code:B};var M={label:"mantine-imQBXX7",input:"mantine-m57XaXY"};let L=`
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
`,q=`
.label {
  background-color: var(--mantine-color-blue-light);
}

.input {
  border: rem(1px) solid var(--mantine-color-violet-filled);
}
`,F=(0,A.j)({components:{Input:c.I.extend({classNames:{input:M.input}}),InputWrapper:c.I.Wrapper.extend({classNames:{label:M.label}})}}),R={type:"code",component:function(){return a.createElement(O.M2,{theme:F},a.createElement(E.o,{label:"Text input",placeholder:"Text input"}),a.createElement(z.p,{mt:"md",label:"Native select",placeholder:"Native select",data:["React","Angular","Vue","Svelte"]}))},centered:!0,maxWidth:340,code:[{fileName:"Demo.tsx",code:L,language:"tsx"},{fileName:"Demo.module.css",code:q,language:"css"}]};var X={input:"mantine-u1lkhpP"};let U=`
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
`,Z=`
.input {
  transition: none;

  &:focus-within {
    outline: rem(2px) solid var(--mantine-color-blue-filled);
    border-color: transparent;
  }
}
`,G={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(c.I,{placeholder:"Regular Input component",classNames:X}),a.createElement(E.o,{placeholder:"TextInput component",label:"TextInput component",mt:"md",classNames:X}))},maxWidth:340,centered:!0,code:[{fileName:"Demo.module.css",code:Z,language:"css"},{fileName:"Demo.tsx",code:U,language:"tsx"}]};var Q=n(39213);let H=`
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
`,J={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(Q.M,{label:"Your phone",component:j.oc,mask:"+7 (000) 000-0000",placeholder:"Your phone"}),a.createElement(Q.M,{label:"Custom native select",component:"select",mt:"md"},a.createElement("option",{value:"react"},"React"),a.createElement("option",{value:"react"},"Angular"),a.createElement("option",{value:"svelte"},"Svelte")))},maxWidth:340,centered:!0,code:H};var K=n(46393),$=n(68539);let ee=`
import { Input, rem } from '@mantine/core';

function Demo() {
  const at = <IconAt style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;
  const chevron = <IconChevronDown style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;
  return <Input{{props}} placeholder="Input component" leftSection={at} rightSection={chevron} />;
}
`,et={type:"styles-api",data:$.a,component:function(e){let t=a.createElement(h.Z,{style:{width:(0,K.h)(16),height:(0,K.h)(16)},stroke:1.5}),n=a.createElement(I.Z,{style:{width:(0,K.h)(16),height:(0,K.h)(16)},stroke:1.5});return a.createElement(c.I,Object.assign({placeholder:"Input component",leftSection:t,rightSection:n},e))},code:ee,centered:!0,maxWidth:340},en=`
import { Input } from '@mantine/core';

function Demo() {
  return <Input.Wrapper{{props}} label="Input label" description="Input description" error="Input error" withAsterisk />;
}
`,er={type:"styles-api",data:$.X,component:function(e){return a.createElement(c.I.Wrapper,Object.assign({label:"Input label",description:"Input description",error:"Input error",withAsterisk:!0},e),a.createElement(c.I,{placeholder:"Input"}))},code:en,centered:!0,maxWidth:340},eo=(0,i.A)(l.us.Input);function ei(e){let t=Object.assign({h2:"h2",p:"p",strong:"strong",code:"code",a:"a",pre:"pre",ul:"ul",li:"li",em:"em"},(0,o.ah)(),e.components),{Demo:n,GetElementRef:i}=t;return n||ea("Demo",!0),i||ea("GetElementRef",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"disclaimer",children:"Disclaimer"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"!important:"})," In most cases, you should not use ",(0,r.jsx)(t.code,{children:"Input"})," in your application.\n",(0,r.jsx)(t.code,{children:"Input"})," is a base for other inputs and was not designed to be used directly.\nUse ",(0,r.jsx)(t.code,{children:"Input"})," to create custom inputs, for other cases prefer ",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"}),"\nor other component."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Input, TextInput } from \'@mantine/core\';\n\n// Incorrect usage, input is not accessible\nfunction Incorrect() {\n  return (\n    <Input.Wrapper label="Input label">\n      <Input />\n    </Input.Wrapper>\n  );\n}\n\n// Use TextInput instead of Input everywhere you want to use Input,\n// it is accessible by default and includes Input.Wrapper\nfunction Correct() {\n  return <TextInput label="Input label" description="Input description" />;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input"})," component is used as base for some other inputs (",(0,r.jsx)(t.a,{href:"/core/native-select/",children:"NativeSelect"}),", ",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"}),", ",(0,r.jsx)(t.a,{href:"/core/textarea/",children:"Textarea"}),", etc.).\nThe purpose of the ",(0,r.jsx)(t.code,{children:"Input"})," is to provide shared styles and features to other inputs."]}),"\n",(0,r.jsx)(n,{data:u}),"\n",(0,r.jsx)(t.h2,{id:"left-and-right-sections",children:"Left and right sections"}),"\n",(0,r.jsxs)(t.p,{children:["You can use ",(0,r.jsx)(t.code,{children:"leftSection"})," and ",(0,r.jsx)(t.code,{children:"rightSection"})," props to add icons or other elements to the left and right side of the input.\nYou can control the following sections styles with props:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"leftSectionWidth"})," / ",(0,r.jsx)(t.code,{children:"rightSectionWidth"})," – width of the section"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"leftSectionPointerEvents"})," / ",(0,r.jsx)(t.code,{children:"rightSectionPointerEvents"})," – pointer-events CSS property"]}),"\n"]}),"\n",(0,r.jsx)(n,{data:x}),"\n",(0,r.jsx)(t.h2,{id:"change-input-element",children:"Change input element"}),"\n",(0,r.jsxs)(t.p,{children:["Input is a ",(0,r.jsx)(t.a,{href:"/guides/polymorphic",children:"polymorphic component"}),", the default root element is ",(0,r.jsx)(t.code,{children:"input"}),",\nbut it can be changed to any other element or component."]}),"\n",(0,r.jsxs)(t.p,{children:["Example of using ",(0,r.jsx)(t.code,{children:"Input"})," as ",(0,r.jsx)(t.code,{children:"button"})," and ",(0,r.jsx)(t.code,{children:"select"}),":"]}),"\n",(0,r.jsx)(n,{data:b}),"\n",(0,r.jsxs)(t.p,{children:["Example of using ",(0,r.jsx)(t.a,{href:"https://github.com/uNmAnNeR/imaskjs/tree/master/packages/react-imask",children:"react-imask"})," with ",(0,r.jsx)(t.code,{children:"Input"}),":"]}),"\n",(0,r.jsx)(n,{data:g}),"\n",(0,r.jsx)(t.h2,{id:"inputwrapper-component",children:"Input.Wrapper component"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input.Wrapper"})," component is used in all other inputs\n(",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"}),", ",(0,r.jsx)(t.a,{href:"/core/native-select/",children:"NativeSelect"}),", ",(0,r.jsx)(t.a,{href:"/core/textarea/",children:"Textarea"}),", etc.)\nunder the hood, you ",(0,r.jsx)(t.em,{children:"do not need to wrap your inputs with it, as it is already included in all of them"}),".\nUse ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," only when you want to create custom inputs."]}),"\n",(0,r.jsx)(n,{data:w}),"\n",(0,r.jsx)(t.h2,{id:"inputwrapperorder",children:"inputWrapperOrder"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"inputWrapperOrder"})," allows configuring the order of ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," parts.\nIt accepts an array of four elements: ",(0,r.jsx)(t.code,{children:"label"}),", ",(0,r.jsx)(t.code,{children:"input"}),", ",(0,r.jsx)(t.code,{children:"error"})," and ",(0,r.jsx)(t.code,{children:"description"}),".\nNote that it is not required to include all of them, you can use only those that you need\n– parts that are not included will not be rendered."]}),"\n",(0,r.jsx)(n,{data:T}),"\n",(0,r.jsx)(t.h2,{id:"inputcontainer",children:"inputContainer"}),"\n",(0,r.jsxs)(t.p,{children:["With ",(0,r.jsx)(t.code,{children:"inputContainer"})," prop, you can enhance inputs that use ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," under the hood,\nfor example, you can add ",(0,r.jsx)(t.a,{href:"/core/tooltip/",children:"Tooltip"})," to the ",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"})," when\nthe input is focused:"]}),"\n",(0,r.jsx)(n,{data:k}),"\n",(0,r.jsx)(t.h2,{id:"required-and-withasterisk-props",children:"required and withAsterisk props"}),"\n",(0,r.jsxs)(t.p,{children:["All components that are based on ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," support ",(0,r.jsx)(t.code,{children:"required"})," and ",(0,r.jsx)(t.code,{children:"withAsterisk"})," props.\nWhen set to true, both of these props will add a red asterisk to the end of the label.\nThe only difference is whether input element will have ",(0,r.jsx)(t.code,{children:"required"})," attribute, example with\n",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"})," component:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { TextInput } from \'@mantine/core\';\n\n// Will display required asterisk and add `required` attribute to the input element\nfunction RequiredDemo() {\n  return <TextInput label="test-label" required />;\n}\n\n// Will only display the asterisk, `required` attribute is not added to the input element\nfunction AsteriskDemo() {\n  return <TextInput label="test-label" withAsterisk />;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"inputlabel-inputdescription-and-inputerror-components",children:"Input.Label, Input.Description and Input.Error components"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input.Label"}),", ",(0,r.jsx)(t.code,{children:"Input.Error"})," and ",(0,r.jsx)(t.code,{children:"Input.Description"})," components can be used to create custom\nform layouts if the default ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," layout does not meet your requirements."]}),"\n",(0,r.jsx)(n,{data:D}),"\n",(0,r.jsx)(t.h2,{id:"inputplaceholder-component",children:"Input.Placeholder component"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input.Placeholder"})," component can be used to add placeholder to ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"InputBase"})," components that are based on ",(0,r.jsx)(t.code,{children:"button"})," element\nor do not support placeholder property natively:"]}),"\n",(0,r.jsx)(n,{data:P}),"\n",(0,r.jsx)(t.h2,{id:"default-props-on-theme",children:"Default props on theme"}),"\n",(0,r.jsxs)(t.p,{children:["You can add ",(0,r.jsx)(t.a,{href:"/theming/default-props/",children:"default props"})," on ",(0,r.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"}),"\nto ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," components. These default props will be inherited by all inputs\nthat use ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," under the hood (",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"}),", ",(0,r.jsx)(t.a,{href:"/core/native-select/",children:"NativeSelect"}),", ",(0,r.jsx)(t.a,{href:"/core/textarea/",children:"Textarea"}),", etc.):"]}),"\n",(0,r.jsx)(n,{data:_}),"\n",(0,r.jsx)(t.h2,{id:"styles-on-theme",children:"Styles on theme"}),"\n",(0,r.jsxs)(t.p,{children:["Same as with default props, you can use ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," ",(0,r.jsx)(t.a,{href:"/styles/styles-api/",children:"Styles API"}),"\non ",(0,r.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"})," to add styles to all inputs:"]}),"\n",(0,r.jsx)(n,{data:R}),"\n",(0,r.jsx)(t.h2,{id:"change-focus-styles",children:"Change focus styles"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"&:focus-within"})," selector to change inputs focus styles. You can apply these styles to\none component with ",(0,r.jsx)(t.code,{children:"classNames"})," prop or to all inputs with ",(0,r.jsx)(t.a,{href:"/styles/styles-api/",children:"Styles API"}),"\non ",(0,r.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"}),"."]}),"\n",(0,r.jsx)(n,{data:G}),"\n",(0,r.jsx)(t.h2,{id:"inputbase-component",children:"InputBase component"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"InputBase"})," component combines ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," components and supports ",(0,r.jsx)(t.code,{children:"component"})," prop:"]}),"\n",(0,r.jsx)(n,{data:J}),"\n",(0,r.jsx)(t.h2,{id:"styles-api",children:"Styles API"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," components support ",(0,r.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"})," –\nyou can customize styles of any inner element with ",(0,r.jsx)(t.code,{children:"classNames"})," and ",(0,r.jsx)(t.code,{children:"styles"})," props."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input"})," Styles API selectors:"]}),"\n",(0,r.jsx)(n,{data:et}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input.Wrapper"})," Styles API selectors:"]}),"\n",(0,r.jsx)(n,{data:er}),"\n",(0,r.jsx)(i,{component:"Input",refType:"input"}),"\n",(0,r.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsxs)(t.p,{children:["If you use ",(0,r.jsx)(t.code,{children:"Input"})," component without associated label element, set ",(0,r.jsx)(t.code,{children:"aria-label"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Input } from \'@mantine/core\';\n\n// ok – the input is labelled by the aria-label\nfunction WithAriaLabel() {\n  return <Input aria-label="Your email" />;\n}\n\n// ok – the input is labelled by the label element\nfunction WithLabel() {\n  return (\n    <>\n      <label htmlFor="my-email">Your email</label>\n      <Input id="my-email" />\n    </>\n  );\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["When you use ",(0,r.jsx)(t.code,{children:"Input"})," with ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," it is required to set ",(0,r.jsx)(t.code,{children:"id"})," on both components\nto connect label and other elements with the input:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Input } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Input.Wrapper label="Your email" id="your-email">\n      <Input id="your-email" />\n    </Input.Wrapper>\n  );\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["You can use ",(0,r.jsx)(t.a,{href:"/hooks/use-id",children:"use-id"})," to generate unique ids:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useId } from '@mantine/hooks';\nimport { Input } from '@mantine/core';\n\nfunction Demo() {\n  const id = useId();\n  return (\n    <Input.Wrapper label=\"Your email\" id={id}>\n      <Input id={id} />\n    </Input.Wrapper>\n  );\n}\n"})})]})}var el=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(eo,Object.assign({},e,{children:(0,r.jsx)(ei,e)}))};function ea(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},75675:function(e,t,n){"use strict";n.d(t,{P:function(){return u}});var r=n(59312),o=n(67294);let i=(0,o.forwardRef)((e,t)=>{var{size:n="var(--cb-icon-size)",style:i}=e,l=(0,r._T)(e,["size","style"]);return o.createElement("svg",Object.assign({viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:Object.assign(Object.assign({},i),{width:n,height:n}),ref:t},l),o.createElement("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))});i.displayName="@mantine/core/CloseIcon";var l=n(80194),a=n(70656),c=n(35577),p=n(46393);let s={iconSize:"70%",variant:"subtle",color:"gray"},u=(0,a.b)((e,t)=>{let n=(0,c.w)("CloseButton",s,e),{iconSize:a,children:u,vars:d}=n,h=(0,r._T)(n,["iconSize","children","vars"]);return o.createElement(l.A,Object.assign({ref:t},h,{__vars:{"--cb-icon-size":(0,p.h)(a)},__staticSelector:"CloseButton"}),o.createElement(i,null),u)});u.displayName="@mantine/core/CloseButton"},51343:function(e,t,n){"use strict";n.d(t,{Mt:function(){return r},nW:function(){return o},pc:function(){return i}});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],o=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],i=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[5664,6106,9341,4831,9774,2888,179],function(){return e(e.s=19837)}),_N_E=e.O()}]);