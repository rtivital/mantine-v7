(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8560],{69706:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/tabs",function(){return t(81789)}])},81789:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return $}});var n=t(85893),s=t(11151),l=t(34940),r=t(25263),o=t(67294),c=t(60060),i=(0,t(54764).Z)("message-circle","IconMessageCircle",[["path",{d:"M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1",key:"svg-0"}]]),b=t(17569),u=t(11211),d=Object.defineProperty,T=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(e,a,t)=>a in e?d(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,v=(e,a)=>{for(var t in a||(a={}))m.call(a,t)&&p(e,t,a[t]);if(T)for(var t of T(a))h.call(a,t)&&p(e,t,a[t]);return e};let f=`
import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';

function Demo() {
  const iconStyle = { width: '0.8rem', height: '0.8rem' };

  return (
    <Tabs{{props}} defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle style={iconStyle} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<IconSettings style={iconStyle} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}`,g={type:"configurator",component:function(e){let a="vertical"===e.orientation?{pl:"xs"}:{pt:"xs"},t={width:"0.8rem",height:"0.8rem"};return o.createElement(u.m,v({defaultValue:"gallery"},e),o.createElement(u.m.List,null,o.createElement(u.m.Tab,{value:"gallery",leftSection:o.createElement(c.Z,{style:t})},"Gallery"),o.createElement(u.m.Tab,{value:"messages",leftSection:o.createElement(i,{style:t})},"Messages"),o.createElement(u.m.Tab,{value:"settings",leftSection:o.createElement(b.Z,{style:t})},"Settings")),o.createElement(u.m.Panel,v({value:"gallery"},a),"Gallery tab content"),o.createElement(u.m.Panel,v({value:"messages"},a),"Messages tab content"),o.createElement(u.m.Panel,v({value:"settings"},a),"Settings tab content"))},code:f,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",initialValue:"default",libraryValue:"default",data:[{value:"default",label:"Default"},{value:"outline",label:"Outline"},{value:"pills",label:"Pills"}]},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"orientation",type:"segmented",initialValue:"horizontal",libraryValue:"horizontal",data:[{value:"horizontal",label:"Horizontal"},{value:"vertical",label:"Vertical"}]}]},y=`
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs color="teal" defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">Teal tab</Tabs.Tab>
        <Tabs.Tab value="second" color="blue">
          Blue tab
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first" pt="xs">
        First tab color is teal, it gets this value from context
      </Tabs.Panel>

      <Tabs.Panel value="second" pt="xs">
        Second tab color is blue, it gets this value from props, props have the priority and will
        override context value
      </Tabs.Panel>
    </Tabs>
  );
}
`,x={type:"code",code:y,component:function(){return o.createElement(u.m,{color:"teal",defaultValue:"first"},o.createElement(u.m.List,null,o.createElement(u.m.Tab,{value:"first"},"Teal tab"),o.createElement(u.m.Tab,{value:"second",color:"blue"},"Blue tab")),o.createElement(u.m.Panel,{value:"first",pt:"xs"},"First tab color is teal, it gets this value from context"),o.createElement(u.m.Panel,{value:"second",pt:"xs"},"Second tab color is blue, it gets this value from props, props have the priority and will override context value"))}};var j=Object.defineProperty,E=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,S=(e,a,t)=>a in e?j(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,L=(e,a)=>{for(var t in a||(a={}))P.call(a,t)&&S(e,t,a[t]);if(E)for(var t of E(a))w.call(a,t)&&S(e,t,a[t]);return e};let V=`
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="first">
      <Tabs.List{{props}}>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
        <Tabs.Tab value="third">Third tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
`,k={type:"configurator",component:function(e){return o.createElement(u.m,{defaultValue:"first"},o.createElement(u.m.List,L({},e),o.createElement(u.m.Tab,{value:"first"},"First tab"),o.createElement(u.m.Tab,{value:"second"},"Second tab"),o.createElement(u.m.Tab,{value:"third"},"Third tab")))},code:V,controls:[{prop:"grow",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"justify",type:"select",initialValue:"flex-start",libraryValue:"flex-start",data:["flex-start","center","flex-end","space-between"]}]},C=`
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
        <Tabs.Tab value="account" ml="auto">
          Account
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
`,D={type:"code",component:function(){return o.createElement(u.m,{defaultValue:"chat"},o.createElement(u.m.List,null,o.createElement(u.m.Tab,{value:"chat"},"Chat"),o.createElement(u.m.Tab,{value:"gallery"},"Gallery"),o.createElement(u.m.Tab,{value:"settings"},"Settings"),o.createElement(u.m.Tab,{value:"account",ml:"auto"},"Account")))},code:C},A=`
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" inverted>
      <Tabs.Panel value="chat" pb="xs">Chat panel</Tabs.Panel>
      <Tabs.Panel value="gallery" pb="xs">Gallery panel</Tabs.Panel>
      <Tabs.Panel value="account" pb="xs">Account panel</Tabs.Panel>

      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
`,O={type:"code",component:function(){return o.createElement(u.m,{defaultValue:"chat",inverted:!0},o.createElement(u.m.Panel,{value:"chat",pb:"xs"},"Chat panel"),o.createElement(u.m.Panel,{value:"gallery",pb:"xs"},"Gallery panel"),o.createElement(u.m.Panel,{value:"account",pb:"xs"},"Account panel"),o.createElement(u.m.List,null,o.createElement(u.m.Tab,{value:"chat"},"Chat"),o.createElement(u.m.Tab,{value:"gallery"},"Gallery"),o.createElement(u.m.Tab,{value:"account"},"Account")))},code:A};var G=Object.defineProperty,M=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,N=(e,a,t)=>a in e?G(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,_=(e,a)=>{for(var t in a||(a={}))F.call(a,t)&&N(e,t,a[t]);if(M)for(var t of M(a))I.call(a,t)&&N(e,t,a[t]);return e};let z=`
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="gallery" orientation="vertical"{{props}}>
      <Tabs.List>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="messages">Messages</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
      <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
      <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
    </Tabs>
  );
}
`,R={type:"configurator",component:function(e){let a="left"===e.placement?{pl:"xs"}:{pr:"xs"};return o.createElement(u.m,_({defaultValue:"gallery",orientation:"vertical"},e),o.createElement(u.m.List,null,o.createElement(u.m.Tab,{value:"gallery"},"Gallery"),o.createElement(u.m.Tab,{value:"messages"},"Messages"),o.createElement(u.m.Tab,{value:"settings"},"Settings")),o.createElement(u.m.Panel,_({value:"gallery"},a),"Gallery tab content"),o.createElement(u.m.Panel,_({value:"messages"},a),"Messages tab content"),o.createElement(u.m.Panel,_({value:"settings"},a),"Settings tab content"))},code:z,controls:[{prop:"placement",type:"segmented",initialValue:"left",libraryValue:"left",data:["left","right"]}]},U=`
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="settings" disabled>
          Settings
        </Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
`,Z={type:"code",component:function(){return o.createElement(u.m,{defaultValue:"chat"},o.createElement(u.m.List,null,o.createElement(u.m.Tab,{value:"chat"},"Chat"),o.createElement(u.m.Tab,{value:"gallery"},"Gallery"),o.createElement(u.m.Tab,{value:"settings",disabled:!0},"Settings"),o.createElement(u.m.Tab,{value:"account"},"Account")))},code:U},B=`
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" activateTabWithKeyboard={false}>
      {/* ...content */}
    </Tabs>
  );
}
`,K={type:"code",component:function(){return o.createElement(u.m,{defaultValue:"chat",activateTabWithKeyboard:!1},o.createElement(u.m.List,null,o.createElement(u.m.Tab,{value:"chat"},"Chat"),o.createElement(u.m.Tab,{value:"gallery"},"Gallery"),o.createElement(u.m.Tab,{value:"account"},"Account")),o.createElement(u.m.Panel,{value:"chat",pt:"xs"},"Chat panel"),o.createElement(u.m.Panel,{value:"gallery",pt:"xs"},"Gallery panel"),o.createElement(u.m.Panel,{value:"account",pt:"xs"},"Account panel"))},code:B},H=`
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" allowTabDeactivation>
      {/* ...content */}
    </Tabs>
  );
}
`,W={type:"code",component:function(){return o.createElement(u.m,{defaultValue:"chat",allowTabDeactivation:!0},o.createElement(u.m.List,null,o.createElement(u.m.Tab,{value:"chat"},"Chat"),o.createElement(u.m.Tab,{value:"gallery"},"Gallery"),o.createElement(u.m.Tab,{value:"account"},"Account")),o.createElement(u.m.Panel,{value:"chat",pt:"xs"},"Chat panel"),o.createElement(u.m.Panel,{value:"gallery",pt:"xs"},"Gallery panel"),o.createElement(u.m.Panel,{value:"account",pt:"xs"},"Account panel"))},code:H},q=(0,l.A)(r.us.Tabs);function X(e){let a=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",a:"a",h3:"h3"},(0,s.ah)(),e.components),{Demo:t,KeyboardEventsTable:l}=a;return t||J("Demo",!0),l||J("KeyboardEventsTable",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t,{data:g}),"\n",(0,n.jsx)(a.h2,{id:"controlled-tabs",children:"Controlled Tabs"}),"\n",(0,n.jsxs)(a.p,{children:["To control Tabs state provide ",(0,n.jsx)(a.code,{children:"value"})," and ",(0,n.jsx)(a.code,{children:"onChange"})," props:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Tabs } from \'@mantine/core\';\n\nfunction Demo() {\n  const [activeTab, setActiveTab] = useState<string | null>(\'first\');\n\n  return (\n    <Tabs value={activeTab} onChange={setActiveTab}>\n      <Tabs.List>\n        <Tabs.Tab value="first">First tab</Tabs.Tab>\n        <Tabs.Tab value="second">Second tab</Tabs.Tab>\n      </Tabs.List>\n\n      <Tabs.Panel value="first">First panel</Tabs.Panel>\n      <Tabs.Panel value="second">Second panel</Tabs.Panel>\n    </Tabs>\n  );\n}\n'})}),"\n",(0,n.jsx)(a.h2,{id:"uncontrolled-tabs",children:"Uncontrolled Tabs"}),"\n",(0,n.jsxs)(a.p,{children:["If you do not need to subscribe to Tabs state changes use ",(0,n.jsx)(a.code,{children:"defaultValue"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:'import { Tabs } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Tabs defaultValue="first">\n      <Tabs.List>\n        <Tabs.Tab value="first">First tab</Tabs.Tab>\n        <Tabs.Tab value="second">Second tab</Tabs.Tab>\n      </Tabs.List>\n\n      <Tabs.Panel value="first">First panel</Tabs.Panel>\n      <Tabs.Panel value="second">Second panel</Tabs.Panel>\n    </Tabs>\n  );\n}\n'})}),"\n",(0,n.jsx)(a.h2,{id:"change-colors",children:"Change colors"}),"\n",(0,n.jsxs)(a.p,{children:["To change colors of all tabs set ",(0,n.jsx)(a.code,{children:"color"})," on ",(0,n.jsx)(a.code,{children:"Tabs"})," component, to change color of the individual tab set ",(0,n.jsx)(a.code,{children:"color"})," on ",(0,n.jsx)(a.code,{children:"Tabs.Tab"}),".\n",(0,n.jsx)(a.code,{children:"color"})," should be a key of ",(0,n.jsx)(a.code,{children:"theme.colors"}),":"]}),"\n",(0,n.jsx)(t,{data:x}),"\n",(0,n.jsx)(a.h2,{id:"tabs-position",children:"Tabs position"}),"\n",(0,n.jsx)(t,{data:k}),"\n",(0,n.jsxs)(a.p,{children:["To display tab on the opposite side, set margin-left to auto with ",(0,n.jsx)(a.code,{children:'ml="auto"'})," prop:"]}),"\n",(0,n.jsx)(t,{data:D}),"\n",(0,n.jsx)(a.h2,{id:"inverted-tabs",children:"Inverted tabs"}),"\n",(0,n.jsxs)(a.p,{children:["To make tabs inverted, place ",(0,n.jsx)(a.code,{children:"Tabs.Panel"})," components before ",(0,n.jsx)(a.code,{children:"Tabs.List"})," and add ",(0,n.jsx)(a.code,{children:"inverted"})," prop to ",(0,n.jsx)(a.code,{children:"Tabs"})," component:"]}),"\n",(0,n.jsx)(t,{data:O}),"\n",(0,n.jsx)(a.h2,{id:"vertical-tabs-placement",children:"Vertical tabs placement"}),"\n",(0,n.jsxs)(a.p,{children:["To change placement of ",(0,n.jsx)(a.code,{children:"Tabs.List"})," in vertical orientation set ",(0,n.jsx)(a.code,{children:"placement"})," prop:"]}),"\n",(0,n.jsx)(t,{data:R}),"\n",(0,n.jsx)(a.h2,{id:"disabled-tabs",children:"Disabled tabs"}),"\n",(0,n.jsxs)(a.p,{children:["Set ",(0,n.jsx)(a.code,{children:"disabled"})," prop on ",(0,n.jsx)(a.code,{children:"Tabs.Tab"})," component to disable tab.\nDisabled tab cannot be activated with mouse or keyboard, will be skipped when user navigates with arrow keys:"]}),"\n",(0,n.jsx)(t,{data:Z}),"\n",(0,n.jsx)(a.h2,{id:"activation-mode",children:"Activation mode"}),"\n",(0,n.jsxs)(a.p,{children:["By default, tabs are activated when user presses arrows and Home/End keys.\nTo disable that set ",(0,n.jsx)(a.code,{children:"activateTabWithKeyboard={false}"})," on ",(0,n.jsx)(a.code,{children:"Tabs"})," component,\nthen user will be able to deactivate active tab by clicking on it:"]}),"\n",(0,n.jsx)(t,{data:K}),"\n",(0,n.jsx)(a.h2,{id:"tab-deactivation",children:"Tab deactivation"}),"\n",(0,n.jsxs)(a.p,{children:["By default, active cannot be deactivated. To allow that set ",(0,n.jsx)(a.code,{children:"allowTabDeactivation"})," on ",(0,n.jsx)(a.code,{children:"Tabs"})," component:"]}),"\n",(0,n.jsx)(t,{data:W}),"\n",(0,n.jsx)(a.h2,{id:"unmount-inactive-tabs",children:"Unmount inactive tabs"}),"\n",(0,n.jsxs)(a.p,{children:["By default, inactive ",(0,n.jsx)(a.code,{children:"Tabs.Panel"})," will stay mounted, to unmount inactive tabs, set ",(0,n.jsx)(a.code,{children:"keepMounted={false}"})," on Tabs.\nThis is useful when you want to render components that impact performance inside ",(0,n.jsx)(a.code,{children:"Tabs.Panel"}),". Note that\ncomponents that are rendered inside ",(0,n.jsx)(a.code,{children:"Tabs.Panel"})," will reset their state on each mount (tab change)."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:'import { Tabs } from \'@mantine/core\';\n\n// Second tab panel will be mounted only when user activates second tab\nfunction Demo() {\n  return (\n    <Tabs keepMounted={false} defaultValue="first">\n      <Tabs.List>\n        <Tabs.Tab value="first">First tab</Tabs.Tab>\n        <Tabs.Tab value="second">Second tab</Tabs.Tab>\n      </Tabs.List>\n\n      <Tabs.Panel value="first">First panel</Tabs.Panel>\n      <Tabs.Panel value="second">Second panel</Tabs.Panel>\n    </Tabs>\n  );\n}\n'})}),"\n",(0,n.jsx)(a.h2,{id:"get-tab-control-ref",children:"Get tab control ref"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:'import { useRef } from \'react\';\nimport { Tabs } from \'@mantine/core\';\n\nfunction Demo() {\n  const secondTabRef = useRef<HTMLButtonElement>(null);\n\n  return (\n    <Tabs defaultValue="first">\n      <Tabs.List>\n        <Tabs.Tab value="first">First tab</Tabs.Tab>\n        <Tabs.Tab value="Second" ref={secondTabRef}>\n          Second tab\n        </Tabs.Tab>\n        <Tabs.Tab value="third">Third tab</Tabs.Tab>\n      </Tabs.List>\n    </Tabs>\n  );\n}\n'})}),"\n",(0,n.jsx)(a.h2,{id:"usage-with-react-router",children:"Usage with react-router"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:'<Route path="/tabs/:tabValue" element={<Demo />} />\n'})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:"import { useNavigate, useParams } from 'react-router-dom';\nimport { Tabs } from '@mantine/core';\n\nfunction Demo() {\n  const navigate = useNavigate();\n  const { tabValue } = useParams();\n\n  return (\n    <Tabs value={tabValue} onTabChange={(value) => navigate(`/tabs/${value}`)}>\n      <Tabs.List>\n        <Tabs.Tab value=\"first\">First tab</Tabs.Tab>\n        <Tabs.Tab value=\"second\">Second tab</Tabs.Tab>\n      </Tabs.List>\n    </Tabs>\n  );\n}\n"})}),"\n",(0,n.jsx)(a.h2,{id:"usage-with-nextjs-router",children:"Usage with Next.js router"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:"// For file /tabs/[activeTab].tsx\nimport { useRouter } from 'next/router';\nimport { Tabs } from '@mantine/core';\n\nfunction Demo() {\n  const router = useRouter();\n\n  return (\n    <Tabs\n      value={router.query.activeTab as string}\n      onTabChange={(value) => router.push(`/tabs/${value}`)}\n    >\n      <Tabs.List>\n        <Tabs.Tab value=\"first\">First tab</Tabs.Tab>\n        <Tabs.Tab value=\"second\">Second tab</Tabs.Tab>\n      </Tabs.List>\n    </Tabs>\n  );\n}\n"})}),"\n",(0,n.jsx)(a.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(a.p,{children:["Tabs component follows ",(0,n.jsx)(a.a,{href:"https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,n.jsx)(a.h3,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(a.p,{children:["If you use ",(0,n.jsx)(a.code,{children:"Tabs.Tab"})," without text content, for example, only with icon, then set ",(0,n.jsx)(a.code,{children:"aria-label"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:'import { Tabs } from \'@mantine/core\';\nimport { IconCoin } from \'@tabler/icon\';\n\nfunction Demo() {\n  return (\n    <Tabs defaultValue="chat">\n      <Tabs.List>\n        {/* aria-label is not required, tab is labelled by children */}\n        <Tabs.Tab value="chat">Chat</Tabs.Tab>\n\n        {/* aria-label is required, tab is not labelled by children */}\n        <Tabs.Tab icon={<IconCoin size={14} />} value="money" aria-label="Get money" />\n      </Tabs.List>\n    </Tabs>\n  );\n}\n'})}),"\n",(0,n.jsxs)(a.p,{children:["To set tabs list label, set ",(0,n.jsx)(a.code,{children:"aria-label"})," on ",(0,n.jsx)(a.code,{children:"Tabs.List"})," component, it will be announced by screen reader:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",children:'import { Tabs } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Tabs defaultValue="recent">\n      {/* Tabs.List aria-label will be announced when tab is focused for the first time */}\n      <Tabs.List aria-label="Chats">\n        <Tabs.Tab value="recent">Most recent</Tabs.Tab>\n        <Tabs.Tab value="recent">Unanswered</Tabs.Tab>\n        <Tabs.Tab value="archived">Archived</Tabs.Tab>\n      </Tabs.List>\n    </Tabs>\n  );\n}\n'})}),"\n",(0,n.jsx)(a.h3,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,n.jsx)(l,{data:[{key:"ArrowRight",description:"Focuses and activates next tab that is not disabled",condition:'orientation="horizontal"'},{key:"ArrowLeft",description:"Focuses and activates previous tab that is not disabled",condition:'orientation="horizontal"'},{key:"ArrowDown",description:"Focuses and activates next tab that is not disabled",condition:'orientation="vertical"'},{key:"ArrowUp",description:"Focuses and activates previous tab that is not disabled",condition:'orientation="vertical"'},{key:"Home",description:"Focuses and activates first tab"},{key:"End",description:"Focuses and activates last tab"}]})]})}var $=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(q,Object.assign({},e,{children:(0,n.jsx)(X,e)}))};function J(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},60060:function(e,a,t){"use strict";t.d(a,{Z:function(){return n}});var n=(0,t(54764).Z)("photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},17569:function(e,a,t){"use strict";t.d(a,{Z:function(){return n}});var n=(0,t(54764).Z)("settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]])}},function(e){e.O(0,[4878,9341,4940,9774,2888,179],function(){return e(e.s=69706)}),_N_E=e.O()}]);