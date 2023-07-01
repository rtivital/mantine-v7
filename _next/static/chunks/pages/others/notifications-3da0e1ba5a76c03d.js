(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[216],{46180:function(n,i,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/others/notifications",function(){return e(90597)}])},90597:function(n,i,e){"use strict";e.r(i),e.d(i,{default:function(){return I}});var o=e(85893),t=e(11151),s=e(34940),c=e(25263),a=e(67294),l=e(43406),r=e(71045);let d=`
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        notifications.show({
          title: 'Default notification',
          message: 'Hey there, your code is awesome! \u{1F925}',
        })
      }
    >
      Show notification
    </Button>
  );
}`,u={type:"code",code:d,centered:!0,component:function(){return a.createElement(l.z,{variant:"outline",onClick:()=>r.N9.show({title:"Default notification",message:"Hey there, your code is awesome! \uD83E\uDD25"})},"Show notification")}};var h=e(45740),f=e(74378),m={root:"mantine-oiPbQrj",description:"mantine-3vl6eQ6",title:"mantine-UVyelYS",closeButton:"mantine-Wsdt39U"};let p=`
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        notifications.show({
          title: 'Notification with custom styles',
          message: 'It is default blue',
          classNames: classes,
        })
      }
    >
      Show customized notification
    </Button>
  );
}`,x=`
.root {
  background-color: var(--notification-color);

  &::before {
    background-color: var(--mantine-color-white);
  }
}

.description,
.title {
  color: var(--mantine-color-white);
}

.closeButton {
  color: var(--mantine-color-white);

  @mixin hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
`,j={type:"code",centered:!0,component:function(){return a.createElement(f.Z,{justify:"center"},a.createElement(l.z,{onClick:()=>r.N9.show({title:"Notification with custom styles",message:"It is default blue",classNames:m})},"Default notification"),a.createElement(l.z,{color:"red",onClick:()=>r.N9.show({color:"red",title:"Notification with custom styles",message:"It is red",classNames:m})},"Error notification"))},code:[{fileName:"Demo.tsx",code:p,language:"tsx"},{fileName:"Demo.module.css",code:x,language:"css"}]},g=`
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        Array(10).fill(0).forEach((_, index) => {
          setTimeout(() => {
            notifications.show({
              title: \`Notification \${index + 1}\`,
              message: 'Most notifications are added to queue',
            });
          }, 200 * index);
        });
      }}
    >
      Show 10 notifications
    </Button>
  );
}`,w={type:"code",code:g,centered:!0,component:function(){return a.createElement(l.z,{variant:"outline",onClick:()=>{Array(10).fill(0).forEach((n,i)=>{setTimeout(()=>{r.N9.show({title:`Notification ${i+1}`,message:"Most notifications are added to queue"})},200*i)})}},"Show 10 notifications")}},y=`
import { Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Group justify="center">
      <Button
        variant="outline"
        onClick={() => {
          Array(10)
            .fill(0)
            .forEach((_, index) => {
              notifications.show({
                title: \`Notification \${index + 1}\`,
                message: 'Most notifications are added to queue',
                autoClose: false,
              });
            });
        }}
      >
        Show 10 notifications
      </Button>

      <Button variant="outline" color="gray" onClick={() => notifications.cleanQueue()}>
        Clean queue
      </Button>

      <Button variant="outline" color="red" onClick={() => notifications.clean()}>
        Clean all
      </Button>
    </Group>
  );
}`,N={type:"code",code:y,component:function(){return a.createElement(f.Z,{justify:"center"},a.createElement(l.z,{variant:"outline",onClick:()=>{Array(10).fill(0).forEach((n,i)=>{r.N9.show({title:`Notification ${i+1}`,message:"Most notifications are added to queue",autoClose:!1})})}},"Show 10 notifications"),a.createElement(l.z,{variant:"outline",color:"gray",onClick:()=>r.N9.cleanQueue()},"Clean queue"),a.createElement(l.z,{variant:"outline",color:"red",onClick:()=>r.N9.clean()},"Clean all"))}};var v=e(16659),C=e(46393);let b=`
import { Button, rem } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        const id = notifications.show({
          loading: true,
          title: 'Loading your data',
          message: 'Data will be loaded in 3 seconds, you cannot close this yet',
          autoClose: false,
          withCloseButton: false,
        });

        setTimeout(() => {
          notifications.update({
            id,
            color: 'teal',
            title: 'Data was loaded',
            message: 'Notification will close in 2 seconds, you can close this notification now',
            icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />,
            loading: false,
            autoClose: 2000,
          });
        }, 3000);
      }}
    >
      Show update notification
    </Button>
  );
}
`,k={type:"code",code:b,centered:!0,component:function(){return a.createElement(l.z,{variant:"outline",onClick:()=>{let n=r.N9.show({loading:!0,title:"Loading your data",message:"Data will be loaded in 3 seconds, you cannot close this yet",autoClose:!1,withCloseButton:!1});setTimeout(()=>{r.N9.update({id:n,color:"teal",title:"Data was loaded",message:"Notification will close in 2 seconds, you can close this notification now",icon:a.createElement(v.Z,{style:{width:(0,C.h)(18),height:(0,C.h)(18)}}),loading:!1,autoClose:2e3})},3e3)}},"Show update notification")}},B=`
import { Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Group justify="center">
      <Button
        variant="outline"
        onClick={() => notifications.show({ message: 'I will close in 4 seconds' })}
      >
        Notifications Provider timeout
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            message: 'I will close in 500ms',
            autoClose: 500,
          })
        }
      >
        Closes in 500ms
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            color: 'blue',
            title: 'I will never close',
            message: 'unless you click X',
            autoClose: false,
          })
        }
      >
        Never closes automatically
      </Button>
    </Group>
  );
}
`,E={type:"code",code:B,component:function(){return a.createElement(f.Z,{justify:"center"},a.createElement(l.z,{variant:"outline",onClick:()=>r.N9.show({message:"I will close in 4 seconds"})},"Notifications Provider timeout"),a.createElement(l.z,{variant:"outline",onClick:()=>r.N9.show({message:"I will close in 500ms",autoClose:500})},"Closes in 500ms"),a.createElement(l.z,{variant:"outline",onClick:()=>r.N9.show({color:"blue",title:"I will never close",message:"unless you click X",autoClose:!1})},"Never closes automatically"))}},q=(0,s.A)(c.us.Notifications);function D(n){let i=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li"},(0,t.ah)(),n.components),{InstallScript:e,Demo:s}=i;return s||z("Demo",!0),e||z("InstallScript",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,o.jsxs)(i.p,{children:["Install ",(0,o.jsx)(i.code,{children:"@mantine/notifications"})," package. Note that the package depends on ",(0,o.jsx)(i.code,{children:"@mantine/core"})," and ",(0,o.jsx)(i.code,{children:"@mantine/hooks"})," packages, you need to install them as well.\nTo do that, follow the installation instructions on the ",(0,o.jsx)(i.a,{href:"/getting-started/",children:"getting started page"}),"."]}),"\n",(0,o.jsx)(e,{packages:"@mantine/notifications"}),"\n",(0,o.jsx)(i.p,{children:"Import styles at the root of your application:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-tsx",children:"import '@mantine/core/styles.css';\nimport '@mantine/notifications/styles.css';\n// ... styles imports of other packages\n"})}),"\n",(0,o.jsxs)(i.p,{children:["Add ",(0,o.jsx)(i.code,{children:"Notifications"})," component anywhere in your application. Note that:"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["It is required to render ",(0,o.jsx)(i.code,{children:"Notifications"})," component inside ",(0,o.jsx)(i.a,{href:"/theming/mantine-provider/",children:"MantineProvider"})]}),"\n",(0,o.jsxs)(i.li,{children:["You do not need to wrap your application with ",(0,o.jsx)(i.code,{children:"Notifications"})," component – it is not a provider, it is a regular component"]}),"\n",(0,o.jsxs)(i.li,{children:["You should not render multiple ",(0,o.jsx)(i.code,{children:"Notifications"})," components – if you do that, your notifications will be duplicated"]}),"\n"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { Notifications } from '@mantine/notifications';\n\nfunction Demo() {\n  return (\n    <MantineProvider>\n      <Notifications />\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(i.p,{children:"All set! You can now use all notifications system features."}),"\n",(0,o.jsx)(s,{data:u}),"\n",(0,o.jsx)(i.h2,{id:"functions",children:"Functions"}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.code,{children:"@mantine/notifications"})," package exports ",(0,o.jsx)(i.code,{children:"notifications"})," object with the following functions:"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"notifications.show"})," – adds given notification to the notifications list or queue, depending on the current state and ",(0,o.jsx)(i.code,{children:"limit"})]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"notifications.hide"})," – removes notification with given ",(0,o.jsx)(i.code,{children:"id"})," from the notifications state and queue"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"notifications.update"})," – updates notification that was previously added to the state or queue"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"notifications.updateState"})," – executes given callback with current notifications state and queue as an argument and updates state with returned value"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"notifications.clean"})," – removes all notifications from the notifications state and queue"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"notifications.cleanQueue"})," – removes all notifications from the queue"]}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["All functions can be imported from ",(0,o.jsx)(i.code,{children:"@mantine/notifications"})," package and can be used in any part of your application:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-tsx",children:"import { notifications } from '@mantine/notifications';\n"})}),"\n",(0,o.jsx)(i.p,{children:"You can also import these functions separately:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-tsx",children:"// alias functions\nimport {\n  showNotification, // notifications.show\n  hideNotification, // notifications.hide\n  updateNotification, // notifications.update\n  updateNotificationsState, // notifications.updateState\n  cleanNotifications, // notifications.clean\n  cleanNotificationsQueue, // notifications.cleanQueue\n} from '@mantine/notifications';\n"})}),"\n",(0,o.jsx)(i.h2,{id:"notification-props",children:"Notification props"}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.code,{children:"notifications.show"})," and ",(0,o.jsx)(i.code,{children:"notification.update"})," functions can be called with an object that has the following properties:"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"id"})," – notification id, it is used to update and remove notifications, by default ",(0,o.jsx)(i.code,{children:"id"})," is randomly generated"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"withBorder"})," – determines whether notification should have a border"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"withCloseButton"})," – determines whether the close button should be visible"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"onClose"})," – calls when notification is unmounted"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"onOpen"})," – calls when notification is mounted"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"autoClose"})," – defines timeout in ms on which notification will be automatically closed, use ",(0,o.jsx)(i.code,{children:"false"})," to disable auto close"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"message"})," – required notification body"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"color, icon, title, radius, className, style, sx, loading"})," – props passed down to the ",(0,o.jsx)(i.a,{href:"/core/notification/",children:"Notification"})," component"]}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["All properties except ",(0,o.jsx)(i.code,{children:"message"})," are optional."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-tsx",children:"import { IconX } from '@tabler/icons-react';\nimport { notifications } from '@mantine/notifications';\n\n// Bare minimum – message is required for all notifications\nnotifications.show({ message: 'Hello' });\n\n// Most used notification props\nnotifications.show({\n  id: 'hello-there',\n  withCloseButton: true,\n  onClose: () => console.log('unmounted'),\n  onOpen: () => console.log('mounted'),\n  autoClose: 5000,\n  title: \"You've been compromised\",\n  message: 'Leave the building immediately',\n  color: 'red',\n  icon: <IconX />,\n  className: 'my-notification-class',\n  style: { backgroundColor: 'red' },\n  loading: false,\n});\n"})}),"\n",(0,o.jsxs)(i.p,{children:["Notifications preview (",(0,o.jsx)(i.code,{children:"message"})," prop used as ",(0,o.jsx)(i.code,{children:"children"}),"):"]}),"\n",(0,o.jsx)(s,{data:h.g,configuratorProps:{includeCode:!1}}),"\n",(0,o.jsx)(i.h2,{id:"customize-notification-styles",children:"Customize notification styles"}),"\n",(0,o.jsxs)(i.p,{children:["You can use ",(0,o.jsx)(i.code,{children:"style"}),", ",(0,o.jsx)(i.code,{children:"className"})," or ",(0,o.jsx)(i.a,{href:"/styles/styles-api/",children:"Styles API"})," ",(0,o.jsx)(i.code,{children:"classNames"}),", ",(0,o.jsx)(i.code,{children:"styles"})," props to customize notification styles.\nUsually, it is better to override ",(0,o.jsx)(i.a,{href:"/core/notification",children:"Notification"})," styles with ",(0,o.jsx)(i.code,{children:"classNames"})," prop in the ",(0,o.jsx)(i.a,{href:"/theming/theme-object/",children:"theme object"}),"."]}),"\n",(0,o.jsx)(s,{data:j}),"\n",(0,o.jsx)(i.h2,{id:"notifications-container-position",children:"Notifications container position"}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.code,{children:"Notifications"})," container has fixed position inside, it is rendered inside ",(0,o.jsx)(i.a,{href:"/core/portal/",children:"Portal"})," by default.\nPosition cannot be changed per notification. ",(0,o.jsx)(i.code,{children:"Notifications"})," supports the following positions:"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.code,{children:"top-left"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.code,{children:"top-right"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.code,{children:"top-center"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.code,{children:"bottom-left"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.code,{children:"bottom-right"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.code,{children:"bottom-center"})}),"\n"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-tsx",children:"import { Notifications } from '@mantine/notifications';\n\nfunction Demo() {\n  return <Notifications position=\"top-right\" zIndex={1000} />;\n}\n"})}),"\n",(0,o.jsx)(i.h2,{id:"limit-and-queue",children:"Limit and queue"}),"\n",(0,o.jsxs)(i.p,{children:["You can limit maximum number of notifications that are displayed at a time by setting\n",(0,o.jsx)(i.code,{children:"limit"})," prop on ",(0,o.jsx)(i.code,{children:"Notifications"}),":"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-tsx",children:"import { Notifications } from '@mantine/notifications';\n\nfunction Demo() {\n  return <Notifications limit={5} />;\n}\n"})}),"\n",(0,o.jsxs)(i.p,{children:["All notifications added after the ",(0,o.jsx)(i.code,{children:"limit"})," was reached are added to the queue\nand displayed when notification from current state is hidden."]}),"\n",(0,o.jsx)(s,{data:w}),"\n",(0,o.jsx)(i.h2,{id:"remove-notifications-from-state-and-queue",children:"Remove notifications from state and queue"}),"\n",(0,o.jsxs)(i.p,{children:["To remove specific notification from state or queue use ",(0,o.jsx)(i.code,{children:"notifications.hide"})," function:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-tsx",children:"import { notifications } from '@mantine/notifications';\n\nconst id = notifications.show({ message: 'Hello!' });\nnotifications.hide(id);\n"})}),"\n",(0,o.jsxs)(i.p,{children:["Use ",(0,o.jsx)(i.code,{children:"notifications.cleanQueue"})," function to remove all notifications from the queue and\n",(0,o.jsx)(i.code,{children:"notifications.clean"})," to remove all notifications both from the state and queue:"]}),"\n",(0,o.jsx)(s,{data:N}),"\n",(0,o.jsx)(i.h2,{id:"update-notification",children:"Update notification"}),"\n",(0,o.jsx)(s,{data:k}),"\n",(0,o.jsx)(i.h2,{id:"auto-close",children:"Auto close"}),"\n",(0,o.jsxs)(i.p,{children:["You can configure auto close timeout with ",(0,o.jsx)(i.code,{children:"Notifications"}),":"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-tsx",children:"import { Notifications } from '@mantine/notifications';\n\n// All notifications will be closed automatically in 4000ms\nfunction Demo() {\n  return <Notifications autoClose={4000} />;\n}\n"})}),"\n",(0,o.jsxs)(i.p,{children:["Or per notification in ",(0,o.jsx)(i.code,{children:"notifications.show"}),"/",(0,o.jsx)(i.code,{children:"notifications.update"})," functions:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-tsx",children:"import { notifications } from '@mantine/notifications';\n\nnotifications.show({\n  message: 'I will close in 500ms seconds',\n  autoClose: 500,\n});\n\nnotifications.update({\n  id: 'hello',\n  message: 'I will never close',\n  autoClose: false,\n});\n"})}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.code,{children:"notifications.show"})," and ",(0,o.jsx)(i.code,{children:"notifications.update"})," functions ",(0,o.jsx)(i.code,{children:"autoClose"})," prop has higher priority."]}),"\n",(0,o.jsx)(s,{data:E})]})}var I=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(q,Object.assign({},n,{children:(0,o.jsx)(D,n)}))};function z(n,i){throw Error("Expected "+(i?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(n){n.O(0,[2411,7437,207,9774,2888,179],function(){return n(n.s=46180)}),_N_E=n.O()}]);