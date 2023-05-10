(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7945],{68140:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/button",function(){return n(13711)}])},13711:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eg}});var o=n(85893),r=n(11151),i=n(34940),a=n(25263),l=n(67294),d=n(43406),s=n(12572),c=Object.defineProperty,u=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&m(e,n,t[n]);return e};let b=`
import { Button } from '@mantine/core';

function Demo() {
  return <Button{{props}}>Button</Button>;
}
`,g={type:"configurator",component:function(e){return l.createElement(d.z,f({},e),"Button")},code:b,centered:!0,controls:[s.c,{type:"color",prop:"color",initialValue:"blue",libraryValue:"blue"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]},j=`
import { Button } from '@mantine/core';

function Demo() {
  return <Button fullWidth>Full width button</Button>;
}
`,v={type:"code",component:function(){return l.createElement(d.z,{fullWidth:!0},"Full width button")},code:j};var x=n(74378),y=n(60060),B=(0,n(54764).Z)("download","IconDownload",[["path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M7 11l5 5l5 -5",key:"svg-1"}],["path",{d:"M12 4l0 12",key:"svg-2"}]]),w=n(4687);let z=`
import { Group, Button } from '@mantine/core';
import { IconPhoto, IconDownload, IconArrowRight } from '@tabler/icons-react';

function Demo() {
  return (
    <Group justify="center">
      <Button leftSection={<IconPhoto size={14} />} variant="default">
        Gallery
      </Button>

      <Button rightSection={<IconDownload size={14} />}>Download</Button>

      <Button
        variant="light"
        leftSection={<IconPhoto size={14} />}
        rightSection={<IconArrowRight size={14} />}
      >
        Visit gallery
      </Button>
    </Group>
  );
}
`,E={type:"code",component:function(){return l.createElement(x.Z,{justify:"center"},l.createElement(d.z,{leftSection:l.createElement(y.Z,{size:14}),variant:"default"},"Gallery"),l.createElement(d.z,{rightSection:l.createElement(B,{size:14})},"Download"),l.createElement(d.z,{variant:"light",leftSection:l.createElement(y.Z,{size:14}),rightSection:l.createElement(w.Z,{size:14,className:"mantine-rotate-rtl"})},"Visit gallery"))},code:z};var D=Object.defineProperty,S=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,O=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&O(e,n,t[n]);if(S)for(var n of S(t))P.call(t,n)&&O(e,n,t[n]);return e};let _=e=>`
import { Button } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

function Demo() {
  const icon = <IconPhoto size={14} />;
  return (
    <>
      <Button justify="${e.justify}" fullWidth leftSection={icon} rightSection={icon} variant="default">
        Button label
      </Button>

      <Button justify="${e.justify}" fullWidth leftSection={icon} variant="default" mt="md">
        Button label
      </Button>

      <Button justify="${e.justify}" fullWidth rightSection={icon} variant="default" mt="md">
        Button label
      </Button>

      <Button
        justify="${e.justify}"
        fullWidth
        rightSection={icon}
        leftSection={<span />}
        variant="default"
        mt="md"
      >
        Button label
      </Button>
    </>
  );
}
`,G={type:"configurator",component:function(e){let t=l.createElement(y.Z,{size:14});return l.createElement(l.Fragment,null,l.createElement(d.z,C({fullWidth:!0,leftSection:t,rightSection:t,variant:"default"},e),"Button label"),l.createElement(d.z,C({fullWidth:!0,leftSection:t,variant:"default",mt:"md"},e),"Button label"),l.createElement(d.z,C({fullWidth:!0,rightSection:t,variant:"default",mt:"md"},e),"Button label"),l.createElement(d.z,C({fullWidth:!0,rightSection:t,leftSection:l.createElement("span",null),variant:"default",mt:"md"},e),"Button label"))},code:_,controls:[{type:"segmented",prop:"justify",data:["center","space-between"],initialValue:"center",libraryValue:"__none__"}]},T=e=>`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Button size="${e.size}">Regular ${e.size}</Button>
      <Button size="compact-${e.size}">Compact ${e.size}</Button>
    </Group>
  );
}
`,I={type:"configurator",component:function(e){return l.createElement(x.Z,null,l.createElement(d.z,{size:e.size},"Regular ",e.size),l.createElement(d.z,{size:`compact-${e.size}`},"Compact ",e.size))},code:T,centered:!0,controls:[{type:"size",prop:"size",initialValue:"md",libraryValue:"__none__"}]},N=e=>`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      variant="gradient"
      gradient={{ from: '${e.gradientFrom}', to: '${e.gradientTo}', deg: ${e.gradientDegree} }}
    >
      Gradient button
    </Button>
  );
}
`,V={type:"configurator",component:function(e){return l.createElement(d.z,{variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree}},"Gradient button")},code:N,centered:!0,controls:[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},R=`
import { Button } from '@mantine/core';

function Demo() {
  return <Button disabled>Disabled button</Button>;
}
`,M={type:"code",component:function(){return l.createElement(d.z,{disabled:!0},"Disabled button")},centered:!0,code:R},Z=`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      component="a"
      href="https://mantine.dev"
      data-disabled
      onClick={(event) => event.preventDefault()}
    >
      Disabled link
    </Button>
  );
}
`,F={type:"code",component:function(){return l.createElement(d.z,{component:"a",href:"https://mantine.dev","data-disabled":!0,onClick:e=>e.preventDefault()},"Disabled link")},centered:!0,code:Z};var $={button:"mantine-ZNB69-m"};let L=`
import { Button } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Button className={classes.button} disabled>
      Disabled with styles
    </Button>
  );
}
`,W=`
.button {
  &:disabled,
  &[data-disabled] {
    border-color: light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
    background-color: transparent;
  }
}
`,A={type:"code",component:function(){return l.createElement(d.z,{className:$.button,disabled:!0},"Disabled with styles")},centered:!0,code:[{fileName:"Demo.module.css",code:W,language:"css"},{fileName:"Demo.tsx",code:L,language:"tsx"}]};var Y=n(41283);let U=`
import { Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <Button data-disabled onClick={(event) => event.preventDefault()}>
        Disabled button with tooltip
      </Button>
    </Tooltip>
  );
}
`,X={type:"code",component:function(){return l.createElement(Y.u,{label:"Tooltip for disabled button"},l.createElement(d.z,{"data-disabled":!0,onClick:e=>e.preventDefault()},"Disabled button with tooltip"))},centered:!0,code:U},q=`
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Button loading>Filled button</Button>
      <Button variant="light" loading>
        Light button
      </Button>
      <Button variant="outline" loading>
        Outline button
      </Button>
    </Group>
  );
}
`,H={type:"code",component:function(){return l.createElement(x.Z,null,l.createElement(d.z,{loading:!0},"Filled button"),l.createElement(d.z,{variant:"light",loading:!0},"Light button"),l.createElement(d.z,{variant:"outline",loading:!0},"Outline button"))},centered:!0,code:q},K=`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button loading loaderProps={{ type: 'dots' }}>
      Loading button
    </Button>
  );
}
`,Q={type:"code",component:function(){return l.createElement(d.z,{loading:!0,loaderProps:{type:"dots"}},"Loading button")},centered:!0,code:K};var J=n(4872),ee=n(39242),et=n(49441);let en=`
import { Group, Button, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button variant="danger">Danger variant</Button>
        <Button variant="primary">Primary variant</Button>
      </Group>
    </MantineProvider>
  );
}
`,eo=`
.root {
  &[data-variant='danger'] {
    background-color: var(--mantine-color-red-9);
    color: var(--mantine-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--mantine-color-white);
  }
}
`,er=(0,ee.j)({components:{Button:d.z.extend({classNames:{root:"mantine-ZKuxogN"}})}}),ei={type:"code",component:function(){return l.createElement(et.M2,{theme:er},l.createElement(x.Z,null,l.createElement(d.z,{variant:"danger"},"Danger variant"),l.createElement(d.z,{variant:"primary"},"Primary variant")))},centered:!0,code:[{fileName:"Demo.tsx",code:en,language:"tsx"},{fileName:"Demo.module.css",code:eo,language:"css"}]};var ea=n(10460),el=Object.defineProperty,ed=Object.getOwnPropertySymbols,es=Object.prototype.hasOwnProperty,ec=Object.prototype.propertyIsEnumerable,eu=(e,t,n)=>t in e?el(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,eh=(e,t)=>{for(var n in t||(t={}))es.call(t,n)&&eu(e,n,t[n]);if(ed)for(var n of ed(t))ec.call(t,n)&&eu(e,n,t[n]);return e};let ep=`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button.Group {{props}}>
      <Button variant="default">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
    </Button.Group>
  );
}
`,em={type:"configurator",component:function(e){return l.createElement(d.z.Group,eh({},e),l.createElement(d.z,{variant:"default"},"First"),l.createElement(d.z,{variant:"default"},"Second"),l.createElement(d.z,{variant:"default"},"Third"))},code:ep,centered:!0,controls:[{type:"segmented",prop:"orientation",data:["horizontal","vertical"],initialValue:"horizontal",libraryValue:"horizontal"}]},ef=(0,i.A)(a.us.Button);function eb(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",ul:"ul",li:"li",pre:"pre"},(0,r.ah)(),e.components),{Demo:n,Polymorphic:i,GetElementRef:a}=t;return n||ej("Demo",!0),a||ej("GetElementRef",!0),i||ej("Polymorphic",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n,{data:g}),"\n",(0,o.jsx)(t.h2,{id:"full-width",children:"Full width"}),"\n",(0,o.jsxs)(t.p,{children:["If ",(0,o.jsx)(t.code,{children:"fullWidth"})," prop is set ",(0,o.jsx)(t.code,{children:"Button"})," will take 100% of parent width:"]}),"\n",(0,o.jsx)(n,{data:v}),"\n",(0,o.jsx)(t.h2,{id:"left-and-right-sections",children:"Left and right sections"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"leftSection"})," and ",(0,o.jsx)(t.code,{children:"rightSection"})," allow to add icons or any other element to the left and right side of the button.\nWhen section is added, padding on the corresponding side is reduced."]}),"\n",(0,o.jsxs)(t.p,{children:["Note that ",(0,o.jsx)(t.code,{children:"leftSection"})," and ",(0,o.jsx)(t.code,{children:"rightSection"})," are flipped in ",(0,o.jsx)(t.a,{href:"/styles/rtl",children:"RTL"})," mode\n(",(0,o.jsx)(t.code,{children:"leftSection"})," is displayed on the right and ",(0,o.jsx)(t.code,{children:"rightSection"})," is displayed on the left)."]}),"\n",(0,o.jsx)(n,{data:E}),"\n",(0,o.jsx)(t.h2,{id:"sections-position",children:"Sections position"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"justify"})," prop sets ",(0,o.jsx)(t.code,{children:"justify-content"})," of ",(0,o.jsx)(t.code,{children:"inner"})," element. You can use it to change alignment of\nleft and right sections. For example, to spread them across the button set ",(0,o.jsx)(t.code,{children:"justify"})," to ",(0,o.jsx)(t.code,{children:"space-between"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["If you need to align just one section to the side of the button set ",(0,o.jsx)(t.code,{children:"justify"})," to ",(0,o.jsx)(t.code,{children:"space-between"}),"\nand add empty ",(0,o.jsx)(t.code,{children:"<span />"})," to the opposite section."]}),"\n",(0,o.jsx)(n,{data:G}),"\n",(0,o.jsx)(t.h2,{id:"compact-size",children:"Compact size"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Button"})," supports ",(0,o.jsx)(t.code,{children:"xs"})," – ",(0,o.jsx)(t.code,{children:"xl"})," and ",(0,o.jsx)(t.code,{children:"compact-xs"})," – ",(0,o.jsx)(t.code,{children:"compact-xl"})," sizes. ",(0,o.jsx)(t.code,{children:"compact"})," sizes have\nthe same font-size as ",(0,o.jsx)(t.code,{children:"xs"})," – ",(0,o.jsx)(t.code,{children:"xl"})," but reduced padding and height."]}),"\n",(0,o.jsx)(n,{data:I}),"\n",(0,o.jsx)(t.h2,{id:"gradient-variant",children:"Gradient variant"}),"\n",(0,o.jsxs)(t.p,{children:["When ",(0,o.jsx)(t.code,{children:"variant"})," prop is set to ",(0,o.jsx)(t.code,{children:"gradient"}),", you can control button gradient with ",(0,o.jsx)(t.code,{children:"gradient"})," prop,\nit accepts an object with ",(0,o.jsx)(t.code,{children:"from"}),", ",(0,o.jsx)(t.code,{children:"to"})," and ",(0,o.jsx)(t.code,{children:"deg"})," properties. If gradient property is not set\n",(0,o.jsx)(t.code,{children:"Button"})," will use ",(0,o.jsx)(t.code,{children:"theme.defaultGradient"})," which can be configured on ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme object"}),".\n",(0,o.jsx)(t.code,{children:"gradient"})," prop is ignored when ",(0,o.jsx)(t.code,{children:"variant"})," is not ",(0,o.jsx)(t.code,{children:"gradient"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Note that ",(0,o.jsx)(t.code,{children:'variant="gradient"'})," supports only linear gradients with two colors. If you need more\ncomplex gradient, then use ",(0,o.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"})," to modify ",(0,o.jsx)(t.code,{children:"Button"})," styles."]}),"\n",(0,o.jsx)(n,{data:V}),"\n",(0,o.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,o.jsxs)(t.p,{children:["To make ",(0,o.jsx)(t.code,{children:"Button"})," disabled set ",(0,o.jsx)(t.code,{children:"disabled"})," prop, this will prevent any interactions with the button\nand add disabled styles. If you want button to just look disabled but still be interactive,\nset ",(0,o.jsx)(t.code,{children:"data-disabled"})," prop instead. Note that disabled styles are the same for all variants."]}),"\n",(0,o.jsx)(n,{data:M}),"\n",(0,o.jsx)(t.h2,{id:"disabled-state-when-button-is-link",children:"Disabled state when Button is link"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"<a />"})," element does not support ",(0,o.jsx)(t.code,{children:"disabled"})," attribute. To make ",(0,o.jsx)(t.code,{children:"Button"})," disabled when it is\nrendered as ",(0,o.jsx)(t.code,{children:"<a />"})," set ",(0,o.jsx)(t.code,{children:"data-disabled"})," attribute instead and prevent default behavior in\n",(0,o.jsx)(t.code,{children:"onClick"})," event handler."]}),"\n",(0,o.jsx)(n,{data:F}),"\n",(0,o.jsx)(t.h2,{id:"customize-disabled-styles",children:"Customize disabled styles"}),"\n",(0,o.jsxs)(t.p,{children:["To customize disabled styles it is recommended to use both ",(0,o.jsx)(t.code,{children:"&:disabled"})," and ",(0,o.jsx)(t.code,{children:"&[data-disabled]"}),"\nselectors:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"&:disabled"})," is used to style button when ",(0,o.jsx)(t.code,{children:"disabled"})," prop is set and\nalso when button is disabled by parent component (for example, when ",(0,o.jsx)(t.code,{children:"disabled"})," prop is set on\n",(0,o.jsx)(t.code,{children:"<fieldset />"})," which contains ",(0,o.jsx)(t.code,{children:"Button"}),")."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"&[data-disabled]"})," is used to style button when it is not actually disabled but should look like\nit is (for example, ",(0,o.jsx)(t.code,{children:"data-disabled"})," should be used if you need to use ",(0,o.jsx)(t.a,{href:"/core/tooltip",children:"Tooltip"})," with disabled ",(0,o.jsx)(t.code,{children:"Button"}),"\nor when ",(0,o.jsx)(t.code,{children:"Button"})," is used as link)"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:A}),"\n",(0,o.jsx)(t.h2,{id:"disabled-button-with-tooltip",children:"Disabled button with Tooltip"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"onMouseLeave"})," event ",(0,o.jsx)(t.a,{href:"https://github.com/facebook/react/issues/18753",children:"is not triggered"})," when ",(0,o.jsx)(t.code,{children:"Button"})," is disabled, so if you need to use\n",(0,o.jsx)(t.a,{href:"/core/tooltip",children:"Tooltip"})," with disabled ",(0,o.jsx)(t.code,{children:"Button"})," you need to set ",(0,o.jsx)(t.code,{children:"data-disabled"})," prop on ",(0,o.jsx)(t.code,{children:"Button"}),"\ninstead of ",(0,o.jsx)(t.code,{children:"disabled"}),". Note that it is also required to change ",(0,o.jsx)(t.code,{children:"onClick"})," event handler to\n",(0,o.jsx)(t.code,{children:"(event) => event.preventDefault()"})," as ",(0,o.jsx)(t.code,{children:"Button"})," is not actually disabled and will still trigger\n",(0,o.jsx)(t.code,{children:"onClick"})," event."]}),"\n",(0,o.jsx)(n,{data:X}),"\n",(0,o.jsx)(t.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,o.jsxs)(t.p,{children:["When ",(0,o.jsx)(t.code,{children:"loading"})," prop is set, ",(0,o.jsx)(t.code,{children:"Button"})," will be disabled and ",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," with overlay will be rendered\nin the center of the button. ",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," color depends on ",(0,o.jsx)(t.code,{children:"Button"})," variant."]}),"\n",(0,o.jsx)(n,{data:H}),"\n",(0,o.jsx)(t.h2,{id:"loader-props",children:"Loader props"}),"\n",(0,o.jsxs)(t.p,{children:["You can customize ",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," with ",(0,o.jsx)(t.code,{children:"loaderProps"})," prop, it accepts all props that\n",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," component has:"]}),"\n",(0,o.jsx)(n,{data:Q}),"\n",(0,o.jsx)(t.h2,{id:"styles-api",children:"Styles API"}),"\n",(0,o.jsxs)(t.p,{children:["You can customize styles of any inner element inside ",(0,o.jsx)(t.code,{children:"Button"})," with ",(0,o.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"\nand ",(0,o.jsx)(t.a,{href:"/styles/data-attributes",children:"data-* attributes"}),":"]}),"\n",(0,o.jsx)(n,{data:J.C}),"\n",(0,o.jsx)(t.h2,{id:"custom-variants",children:"Custom variants"}),"\n",(0,o.jsxs)(t.p,{children:["To add new ",(0,o.jsx)(t.code,{children:"Button"})," variants use ",(0,o.jsx)(t.a,{href:"/styles/variants-sizes",children:"data-variant"})," attribute.\nUsually new variants are added on ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"}),", this way they are\navailable in all ",(0,o.jsx)(t.code,{children:"Button"})," components in your application."]}),"\n",(0,o.jsx)(n,{data:ei}),"\n",(0,o.jsx)(t.h2,{id:"customize-variants-colors",children:"Customize variants colors"}),"\n",(0,o.jsxs)(t.p,{children:["You can customize colors for ",(0,o.jsx)(t.code,{children:"Button"})," and other components variants by adding\n",(0,o.jsx)(t.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"})," to your theme."]}),"\n",(0,o.jsx)(n,{data:ea.D}),"\n",(0,o.jsx)(t.h2,{id:"buttongroup",children:"Button.Group"}),"\n",(0,o.jsx)(n,{data:em}),"\n",(0,o.jsxs)(t.p,{children:["Note that you cannot wrap child ",(0,o.jsx)(t.code,{children:"Button"})," components with any additional elements:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button.Group>\n      <div>\n        <Button>This will not work</Button>\n      </div>\n      <Button>Buttons will have incorrect borders</Button>\n    </Button.Group>\n  );\n}\n"})}),"\n",(0,o.jsx)(i,{defaultElement:"button",changeToElement:"a",component:"Button",withNext:!0}),"\n",(0,o.jsx)(a,{component:"Button",refType:"button"})]})}var eg=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(ef,Object.assign({},e,{children:(0,o.jsx)(eb,e)}))};function ej(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4687:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},60060:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},39242:function(e,t,n){"use strict";function o(e){return e}n.d(t,{j:function(){return o}})},4872:function(e,t,n){"use strict";n.d(t,{C:function(){return x}});var o=n(67294),r=n(43406),i=n(74378),a=n(4687),l={root:"mantine-QSnP0HB",section:"mantine-Sxngl37"},d=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&m(e,n,t[n]);return e},b=(e,t)=>s(e,c(t));let g=`
import { Button, ButtonProps, Group } from '@mantine/core';
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
        rightSection={<IconArrowRight style={{ width: '1.1rem' }} />}
      >
        Send files
      </SendFilesButton>
      <SendFilesButton
        leftSection="3"
        rightSection={<IconArrowRight style={{ width: '1.1rem' }} />}
        disabled
      >
        Send files
      </SendFilesButton>
    </Group>
  );
}
`,j=`
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
`;function v(e){return o.createElement(r.z,b(f({},e),{radius:"md",classNames:l}))}let x={type:"code",component:function(){return o.createElement(i.Z,null,o.createElement(v,{leftSection:"12",rightSection:o.createElement(a.Z,{style:{width:"1.1rem"}})},"Send files"),o.createElement(v,{leftSection:"3",rightSection:o.createElement(a.Z,{style:{width:"1.1rem"}}),disabled:!0},"Send files"))},centered:!0,code:[{fileName:"Demo.module.css",code:j,language:"css"},{fileName:"Demo.tsx",code:g,language:"tsx"}]}},10460:function(e,t,n){"use strict";n.d(t,{D:function(){return w}});var o=n(67294),r=n(28274),i=n(31254),a=n(26595),l=n(46393),d=n(8781),s=n(49441),c=n(74378),u=n(43406),h=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,j=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&j(e,n,t[n]);if(f)for(var n of f(t))g.call(t,n)&&j(e,n,t[n]);return e},x=(e,t)=>p(e,m(t));let y=`
import {
  Button,
  Group,
  MantineProvider,
  defaultVariantColorsResolver,
  VariantColorsResolver,
  parseThemeColor,
  rem,
  rgba,
  darken,
} from '@mantine/core';

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  // Override some properties for variant
  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return { ...defaultResolvedColors, color: 'var(--mantine-color-black)' };
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: \`\${rem(1)} solid \${parsedColor.value}\`,
      color: darken(parsedColor.value, 0.1),
    };
  }

  // Add new variants support
  if (input.variant === 'danger') {
    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};

function Demo() {
  return (
    <MantineProvider theme={{ variantColorResolver }}>
      <Group>
        <Button color="lime.4" variant="filled">
          Lime filled button
        </Button>

        <Button color="orange" variant="light">
          Orange light button
        </Button>

        <Button variant="danger">Danger button</Button>
      </Group>
    </MantineProvider>
  );
}
`,B=e=>{let t=(0,r.B)(e),n=(0,i.E)({color:e.color||e.theme.primaryColor,theme:e.theme});return n.isThemeColor&&"lime"===n.color&&"filled"===e.variant?x(v({},t),{color:"var(--mantine-color-black)"}):"light"===e.variant?{background:(0,a.m)(n.value,.1),hover:(0,a.m)(n.value,.15),border:`${(0,l.h)(1)} solid ${n.value}`,color:(0,d._)(n.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:t},w={type:"code",component:function(){return o.createElement(s.M2,{theme:{variantColorResolver:B}},o.createElement(c.Z,null,o.createElement(u.z,{color:"lime.4",variant:"filled"},"Lime filled button"),o.createElement(u.z,{color:"orange",variant:"light"},"Orange light button"),o.createElement(u.z,{variant:"danger"},"Danger button")))},centered:!0,code:y}},12572:function(e,t,n){"use strict";n.d(t,{c:function(){return o}});let o={type:"select",prop:"variant",data:["default","filled","light","outline","subtle","transparent","white"],initialValue:"filled",libraryValue:"__none__"}}},function(e){e.O(0,[4878,9341,4940,9774,2888,179],function(){return e(e.s=68140)}),_N_E=e.O()}]);