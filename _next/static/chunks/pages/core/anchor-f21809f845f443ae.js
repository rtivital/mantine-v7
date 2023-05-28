(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[551],{1150:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/anchor",function(){return r(26131)}])},26131:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return j}});var t=r(85893),o=r(11151),i=r(34940),c=r(25263),l=r(67294),a=r(46342);let d=`
import { Anchor } from '@mantine/core';

function Demo() {
  return (
    <Anchor href="https://mantine.dev/" target="_blank">
      Anchor component
    </Anchor>
  );
}
`,h={type:"code",component:function(){return l.createElement(a.e,{href:"https://mantine.dev/",target:"_blank"},"Anchor component")},code:d};var s=r(74378);let u=`
import { Anchor, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Anchor href="https://mantine.dev/" target="_blank" underline="always">
        Underline always
      </Anchor>
      <Anchor href="https://mantine.dev/" target="_blank" underline="hover">
        Underline hover
      </Anchor>
      <Anchor href="https://mantine.dev/" target="_blank" underline="never">
        Underline never
      </Anchor>
    </Group>
  );
}
`,p={type:"code",component:function(){return l.createElement(s.Z,{justify:"center"},l.createElement(a.e,{href:"https://mantine.dev/",target:"_blank",underline:"always"},"Underline always"),l.createElement(a.e,{href:"https://mantine.dev/",target:"_blank",underline:"hover"},"Underline hover"),l.createElement(a.e,{href:"https://mantine.dev/",target:"_blank",underline:"never"},"Underline never"))},code:u},m=(0,i.A)(c.us.Anchor);function f(e){let n=Object.assign({h2:"h2",p:"p",code:"code",ul:"ul",li:"li",a:"a",pre:"pre"},(0,o.ah)(),e.components),{Demo:r,Polymorphic:i,GetElementRef:c}=n;return r||x("Demo",!0),c||x("GetElementRef",!0),i||x("Polymorphic",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r,{data:h}),"\n",(0,t.jsx)(n.h2,{id:"underline",children:"Underline"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"underline"})," prop to configure ",(0,t.jsx)(n.code,{children:"text-decoration"})," property. It accepts the following values:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"always"})," - link is always underlined"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hover"})," - link is underlined on hover"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"never"})," - link is never underlined"]}),"\n"]}),"\n",(0,t.jsx)(r,{data:p}),"\n",(0,t.jsxs)(n.p,{children:["You can also configure ",(0,t.jsx)(n.code,{children:"underline"})," prop for all ",(0,t.jsx)(n.code,{children:"Anchor"})," components with ",(0,t.jsx)(n.a,{href:"/theming/default-props",children:"default props"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Anchor, createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  components: {\n    Anchor: Anchor.extend({\n      defaultProps: {\n        underline: 'always',\n      },\n    }),\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(i,{defaultElement:"a",changeToElement:"button",component:"Anchor",withNext:!0}),"\n",(0,t.jsx)(c,{component:"Anchor",refType:"a"})]})}var j=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(m,Object.assign({},e,{children:(0,t.jsx)(f,e)}))};function x(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[5664,9341,4831,9774,2888,179],function(){return e(e.s=1150)}),_N_E=e.O()}]);