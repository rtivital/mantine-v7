(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8455],{955:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/copy-button",function(){return t(67737)}])},67737:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return w}});var n=t(85893),i=t(11151),c=t(34940),r=t(25263),l=t(67294),a=t(4028),s=t(43406);let d=`
import { CopyButton, Button } from '@mantine/core';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev">
      {({ copied, copy }) => (
        <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
          {copied ? 'Copied url' : 'Copy url'}
        </Button>
      )}
    </CopyButton>
  );
}
`,p={type:"code",component:function(){return l.createElement(a.q,{value:"https://mantine.dev"},({copied:e,copy:o})=>l.createElement(s.z,{color:e?"teal":"blue",onClick:o},e?"Copied url":"Copy url"))},centered:!0,code:d};var u=t(41283),h=t(80194),m=t(16659),y=(0,t(54764).Z)("copy","IconCopy",[["path",{d:"M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2",key:"svg-1"}]]);let f=`
import { CopyButton, ActionIcon, Tooltip } from '@mantine/core';
import { IconCopy, IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev" timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
            {copied ? (
              <IconCheck style={{ width: '1rem' }} />
            ) : (
              <IconCopy style={{ width: '1rem' }} />
            )}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}

`,v={type:"code",component:function(){return l.createElement(a.q,{value:"https://mantine.dev",timeout:2e3},({copied:e,copy:o})=>l.createElement(u.u,{label:e?"Copied":"Copy",withArrow:!0,position:"right"},l.createElement(h.A,{color:e?"teal":"gray",variant:"subtle",onClick:o},e?l.createElement(m.Z,{style:{width:"1rem"}}):l.createElement(y,{style:{width:"1rem"}}))))},centered:!0,code:f},j=(0,c.A)(r.us.CopyButton);function C(e){let o=Object.assign({h2:"h2",p:"p",code:"code",a:"a",ul:"ul",li:"li"},(0,i.ah)(),e.components),{Demo:t}=o;return t||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"CopyButton"})," is based on ",(0,n.jsx)(o.a,{href:"/hooks/use-clipboard/",children:"use-clipboard"})," hook.\nIts children is a function that receives an object with the following properties:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"copied"})," – boolean value that indicates that given value was recently copied to clipboard, it resets after given timeout (defaults to 500ms)"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"copy"})," – function that should be called to copy given value to clipboard"]}),"\n"]}),"\n",(0,n.jsx)(t,{data:p}),"\n",(0,n.jsx)(o.h2,{id:"security",children:"Security"}),"\n",(0,n.jsxs)(o.p,{children:["Due to security reasons ",(0,n.jsx)(o.code,{children:"CopyButton"})," component will not work in iframes and may not work with local files opened with ",(0,n.jsx)(o.code,{children:"file://"})," protocol\n(component will work fine with local websites that are using ",(0,n.jsx)(o.code,{children:"http://"})," protocol). You can learn more about ",(0,n.jsx)(o.code,{children:"navigator.clipboard"})," ",(0,n.jsx)(o.a,{href:"https://web.dev/async-clipboard/",children:"here"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"timeout",children:"Timeout"}),"\n",(0,n.jsxs)(o.p,{children:["You can provide a custom ",(0,n.jsx)(o.code,{children:"copied"})," reset ",(0,n.jsx)(o.code,{children:"timeout"}),":"]}),"\n",(0,n.jsx)(t,{data:v})]})}var w=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(j,Object.assign({},e,{children:(0,n.jsx)(C,e)}))}},16659:function(e,o,t){"use strict";t.d(o,{Z:function(){return n}});var n=(0,t(54764).Z)("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]])}},function(e){e.O(0,[4878,9341,4940,9774,2888,179],function(){return e(e.s=955)}),_N_E=e.O()}]);