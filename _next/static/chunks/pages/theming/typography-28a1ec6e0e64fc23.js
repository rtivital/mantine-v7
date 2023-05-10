(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9550],{98691:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theming/typography",function(){return t(96675)}])},96675:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return P}});var o=t(85893),i=t(11151),r=t(34940),s=t(25263),a=t(5037),l=t(67294),d=t(73459),c=t(74378),h=t(43406),m=t(2857);let f=`
import { Button, Code, Title, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Verdana, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Greycliff CF, sans-serif' },
      }}
    >
      <Title order={3}>Greycliff CF or sans-serif title</Title>
      <Button>Verdana button</Button>
      <Code>Monaco, Courier Code</Code>
    </MantineProvider>
  );
}
`,p={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(d.D,{order:3,ff:"Greycliff CF, sans-serif",ta:"center"},"Greycliff CF title"),l.createElement(c.Z,{mt:"md"},l.createElement(h.z,{ff:"Verdana, sans-serif"},"Verdana button"),l.createElement(m.E,{ff:"Monaco, Courier, monospace"},"Monaco, Courier Code")))},centered:!0,code:f};var u=t(77048);let g=e=>`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text fz="${e.fontSize}" lh="${e.lineHeight}">
      Paras is an orange, insectoid Pok\xe9mon that resembles the nymph stage of a cicada. Its ovoid
      body is segmented, and it has three pairs of legs. The foremost pair of legs is the largest
      and has sharp claws at the tips. There are five specks on its forehead and three teeth on
      either side of its mouth. It has circular eyes with large pseudopupils.
    </Text>
  );
}
`,x={type:"configurator",component:function(e){return l.createElement(u.x,{fz:e.fontSize,lh:e.lineHeight},"Paras is an orange, insectoid Pok\xe9mon that resembles the nymph stage of a cicada. Its ovoid body is segmented, and it has three pairs of legs. The foremost pair of legs is the largest and has sharp claws at the tips. There are five specks on its forehead and three teeth on either side of its mouth. It has circular eyes with large pseudopupils.")},code:g,centered:!0,controls:[{type:"size",prop:"fontSize",initialValue:"md",libraryValue:"__none__"},{type:"size",prop:"lineHeight",initialValue:"md",libraryValue:"__none__"}]};var y=t(49441),j={heading:"mantine-iQ9dfw7"};let v=`
import { Title, MantineProvider } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Title: Title.extend({
            classNames: {
              root: classes.heading,
            },
          }),
        },
      }}
    >
      <Title order={1}>Heading 1</Title>
      <Title order={2}>Heading 2</Title>
      <Title order={3}>Heading 3</Title>
      <Title order={4}>Heading 4</Title>
      <Title order={5}>Heading 5</Title>
      <Title order={6}>Heading 6</Title>
    </MantineProvider>
  );
}
`,b=`
.heading {
  &:is(h1) {
    font-family: GreycliffCF, sans-serif;
    font-weight: 900;
  }

  &:is(h5, h6) {
    color: var(--mantine-color-dimmed);
  }
}
`,T={type:"code",component:function(){return l.createElement(y.M2,{theme:{components:{Title:d.D.extend({classNames:{root:j.heading}})}}},l.createElement(d.D,{order:1},"Heading 1"),l.createElement(d.D,{order:2},"Heading 2"),l.createElement(d.D,{order:3},"Heading 3"),l.createElement(d.D,{order:4},"Heading 4"),l.createElement(d.D,{order:5},"Heading 5"),l.createElement(d.D,{order:6},"Heading 6"))},code:[{fileName:"Demo.tsx",language:"tsx",code:v},{fileName:"Demo.module.css",language:"css",code:b}]},M=(0,r.A)(s.us.Typography);function S(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",a:"a",pre:"pre"},(0,i.ah)(),e.components),{Demo:t,DataTable:r}=n;return r||w("DataTable",!0),t||w("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"typography",children:"Typography"}),"\n",(0,o.jsx)(n.h2,{id:"change-fonts",children:"Change fonts"}),"\n",(0,o.jsx)(n.p,{children:"You can change fonts and other text styles for headings, code and all other components with the following theme properties:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.fontFamily"})," – controls font-family in all components except ",(0,o.jsx)(n.a,{href:"/core/title/",children:"Title"}),", ",(0,o.jsx)(n.a,{href:"/core/code/",children:"Code"})," and ",(0,o.jsx)(n.a,{href:"/core/kbd/",children:"Kbd"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.fontFamilyMonospace"})," – controls font-family of components that require monospace font: ",(0,o.jsx)(n.a,{href:"/core/code/",children:"Code"}),", ",(0,o.jsx)(n.a,{href:"/core/kbd/",children:"Kbd"})," and ",(0,o.jsx)(n.a,{href:"/others/prism/",children:"Prism"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.headings.fontFamily"})," – controls font-family of h1-h6 tags in ",(0,o.jsx)(n.a,{href:"/core/title/",children:"Title"})," and ",(0,o.jsx)(n.a,{href:"/core/typography-styles-provider/",children:"TypographyStylesProvider"})," components, fallbacks to ",(0,o.jsx)(n.code,{children:"theme.fontFamily"})," if not defined"]}),"\n"]}),"\n",(0,o.jsx)(t,{data:p}),"\n",(0,o.jsx)(n.h2,{id:"system-fonts",children:"System fonts"}),"\n",(0,o.jsxs)(n.p,{children:["By default, Mantine uses system fonts. It means that different devices will display components based on available font,\nfor example, MacOS and iOS users will see ",(0,o.jsx)(n.a,{href:"https://developer.apple.com/fonts/",children:"San Francisco font"}),",\nWindows users will see ",(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/typography/font-list/segoe-ui",children:"Segoe UI font"}),",\nAndroid users will see ",(0,o.jsx)(n.a,{href:"https://fonts.google.com/specimen/Roboto",children:"Roboto font"})," and so on.\nThis approach provides familiar experience to the users and allows avoiding common problems\nrelated to custom fonts loading (layout shift, invisible text, etc.), if you do not have strict\nrequirements, it is recommended to use system fonts for better performance."]}),"\n",(0,o.jsx)(n.p,{children:"Default values for theme properties:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Default value for ",(0,o.jsx)(n.code,{children:"theme.fontFamily"})," and ",(0,o.jsx)(n.code,{children:"theme.headings.fontFamily"})," is ",(0,o.jsx)(n.code,{children:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji"})]}),"\n",(0,o.jsxs)(n.li,{children:["Default value for ",(0,o.jsx)(n.code,{children:"theme.fontFamilyMonospace"})," is ",(0,o.jsx)(n.code,{children:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"font-sizes",children:"Font sizes"}),"\n",(0,o.jsx)(t,{data:x}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"theme.fontSizes"})," property defines font-size values for all Mantine components:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        fontSizes: {\n          xs: '0.6rem',\n          sm: '0.75rem',\n          md: '0.9rem',\n          lg: '1rem',\n          xl: '1.2rem',\n        },\n      }}\n    >\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Default ",(0,o.jsx)(n.code,{children:"theme.fontSizes"})," values:"]}),"\n",(0,o.jsx)(r,{head:["Key","Value","Value in px"],data:Object.keys(a.t.fontSizes).map(e=>{var n;return[e,"".concat(a.t.fontSizes[e]),"".concat("number"==typeof(n=a.t.fontSizes[e])?n:"string"==typeof n?n.includes("px")?Number(n.replace("px","")):n.includes("rem")?16*Number(n.replace("rem","")):n.includes("em")?16*Number(n.replace("em","")):Number(n):NaN,"px")]})}),"\n",(0,o.jsx)(n.h2,{id:"line-heights",children:"Line heights"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"theme.lineHeights"})," property defines line-height values for ",(0,o.jsx)(n.a,{href:"/core/text",children:"Text"})," component,\nmost other components use ",(0,o.jsx)(n.code,{children:"theme.lineHeights.md"})," by default:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        lineHeights: {\n          xs: '1.4',\n          sm: '1.45',\n          md: '1.55',\n          lg: '1.6',\n          xl: '1.65',\n        },\n      }}\n    >\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Default ",(0,o.jsx)(n.code,{children:"theme.lineHeights"})," values:"]}),"\n",(0,o.jsx)(r,{head:["Key","Value"],data:Object.keys(a.t.lineHeights).map(e=>[e,"".concat(a.t.lineHeights[e])])}),"\n",(0,o.jsx)(n.h2,{id:"h1-h6-styles",children:"h1-h6 styles"}),"\n",(0,o.jsxs)(n.p,{children:["To customize headings styles in ",(0,o.jsx)(n.a,{href:"/core/title/",children:"Title"})," and ",(0,o.jsx)(n.a,{href:"/core/typography-styles-provider/",children:"TypographyStylesProvider"})," components\nset ",(0,o.jsx)(n.code,{children:"theme.headings"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        headings: {\n          // properties for all headings\n          fontWeight: 400,\n          fontFamily: 'Roboto',\n\n          // properties for individual headings, all of them are optional\n          sizes: {\n            h1: { fontWeight: 100, fontSize: '3rem', lineHeight: 1.4 },\n            h2: { fontSize: '2.2rem', lineHeight: 1.5 },\n            // ...up to h6\n            h6: { fontWeight: 900 },\n          },\n        },\n      }}\n    >\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["With ",(0,o.jsx)(n.code,{children:"theme.headings"})," you can customize font-size, font-weight and line-height per heading level.\nIf you need more control over styles use (:is selector)[https://developer.mozilla.org/en-US/docs/Web/CSS/:is]\nwith ",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," to target specific heading level:"]}),"\n",(0,o.jsx)(t,{data:T})]})}var P=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(M,Object.assign({},e,{children:(0,o.jsx)(S,e)}))};function w(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[4878,9341,4940,9774,2888,179],function(){return e(e.s=98691)}),_N_E=e.O()}]);