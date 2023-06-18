(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{90653:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/action-icon",function(){return t(17798)}])},17798:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return em}});var o=t(85893),i=t(11151),a=t(34940),r=t(25263),c=t(67294),l=(0,t(54764).Z)("adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]]),s=t(46393),d=t(80194),u=t(12572),m=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,j=(e,n,t)=>n in e?m(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,y=(e,n)=>{for(var t in n||(n={}))x.call(n,t)&&j(e,t,n[t]);if(b)for(var t of b(n))f.call(n,t)&&j(e,t,n[t]);return e},g=(e,n)=>h(e,p(n));let I=`
import { ActionIcon } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon{{props}} aria-label="Settings">
      <IconAdjustments />
    </ActionIcon>
  );
}
`,v={xs:(0,s.h)(12),sm:(0,s.h)(14),md:(0,s.h)(18),lg:(0,s.h)(26),xl:(0,s.h)(34)},A={type:"configurator",component:function(e){return c.createElement(d.A,g(y({},e),{"aria-label":"Settings"}),c.createElement(l,{style:{width:v[e.size],height:v[e.size]},stroke:1.5}))},code:I,centered:!0,striped:!0,controls:[u.cH,{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"}]};var w=t(1002),z=t(55127);let k=e=>`
import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: '${e.gradientFrom}', to: '${e.gradientTo}', deg: ${e.gradientDegree} }}
    >
      <IconHeart />
    </ActionIcon>
  );
}
`,E={type:"configurator",component:function(e){return c.createElement(d.A,{variant:"gradient",size:"xl","aria-label":"Gradient action icon",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree}},c.createElement(w.Z,null))},code:k,centered:!0,controls:z.P},D=`
import { ActionIcon, rem } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon size={42} variant="default" aria-label="ActionIcon with size as a number">
      <IconHeart style={{ width: rem(24), height: rem(24) }} />
    </ActionIcon>
  );
}
`,_={type:"code",centered:!0,component:function(){return c.createElement(d.A,{size:42,variant:"default","aria-label":"ActionIcon with size as a number"},c.createElement(w.Z,{style:{width:(0,s.h)(24),height:(0,s.h)(24)}}))},code:D};var H=t(74378);let T=`
import { ActionIcon, Group } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <Group justify="center">
      <ActionIcon size="xl" disabled aria-label="Disabled and not interactive">
        <IconHeart />
      </ActionIcon>

      <ActionIcon size="xl" data-disabled aria-label="Has disabled styles but still interactive">
        <IconHeart />
      </ActionIcon>
    </Group>
  );
}
`,P={type:"code",component:function(){return c.createElement(H.Z,{justify:"center"},c.createElement(d.A,{size:"xl",disabled:!0,"aria-label":"Disabled and not interactive"},c.createElement(w.Z,null)),c.createElement(d.A,{size:"xl","data-disabled":!0,"aria-label":"Has disabled styles but still interactive"},c.createElement(w.Z,null)))},code:T};var G=t(31550);let N=`
import { ActionIcon } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon
      component="a"
      href="https://mantine.dev"
      data-disabled
      size="xl"
      aria-label="Open in a new tab"
      onClick={(event) => event.preventDefault()}
    >
      <IconExternalLink />
    </ActionIcon>
  );
}
`,O={type:"code",component:function(){return c.createElement(d.A,{component:"a",href:"https://mantine.dev","data-disabled":!0,size:"xl","aria-label":"Open in a new tab",onClick:e=>e.preventDefault()},c.createElement(G.Z,null))},centered:!0,code:N};var Z={button:"mantine-f4gt-54"};let M=`
import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ActionIcon size="xl" className={classes.button} disabled aria-label="Disabled with styles">
      <IconHeart />
    </ActionIcon>
  );
}
`,V=`
.button {
  &:disabled,
  &[data-disabled] {
    border-color: light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
    background-color: transparent;
  }
}
`,C={type:"code",component:function(){return c.createElement(d.A,{size:"xl",className:Z.button,disabled:!0,"aria-label":"Disabled with styles"},c.createElement(w.Z,null))},centered:!0,code:[{fileName:"Demo.module.css",code:V,language:"css"},{fileName:"Demo.tsx",code:M,language:"tsx"}]};var L=t(41283);let S=`
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <ActionIcon size="xl" data-disabled onClick={(event) => event.preventDefault()}>
        <IconHeart />
      </ActionIcon>
    </Tooltip>
  );
}
`,F={type:"code",component:function(){return c.createElement(L.u,{label:"Tooltip for disabled button"},c.createElement(d.A,{size:"xl","data-disabled":!0,onClick:e=>e.preventDefault()},c.createElement(w.Z,null)))},centered:!0,code:S},W=`
import { ActionIcon, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <ActionIcon loading aria-label="Filled loading" />
      <ActionIcon variant="light" loading aria-label="Light loading" />
      <ActionIcon variant="outline" loading aria-label="Outline loading" />
    </Group>
  );
}
`,$={type:"code",component:function(){return c.createElement(H.Z,{justify:"center"},c.createElement(d.A,{loading:!0,"aria-label":"Filled loading"}),c.createElement(d.A,{variant:"light",loading:!0,"aria-label":"Light loading"}),c.createElement(d.A,{variant:"outline",loading:!0,"aria-label":"Outline loading"}))},code:W},R=`
import { ActionIcon } from '@mantine/core';

function Demo() {
  return <ActionIcon size="xl" loading loaderProps={{ type: 'dots' }} />;
}
`,U={type:"code",component:function(){return c.createElement(d.A,{size:"xl",loading:!0,loaderProps:{type:"dots"}})},centered:!0,code:R};var X=t(39242),Y=t(49441);let q=`
import { Group, ActionIcon, MantineProvider, createTheme } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group justify="center">
        <ActionIcon size="xl" variant="danger" aria-label="Danger variant">
          <IconHeart />
        </ActionIcon>
        <ActionIcon size="xl" variant="primary" aria-label="Primary variant">
          <IconHeart />
        </ActionIcon>
      </Group>
    </MantineProvider>
  );
}
`,K=`
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
`,Q=(0,X.j)({components:{ActionIcon:d.A.extend({classNames:{root:"mantine-N-KPnGR"}})}}),B={type:"code",component:function(){return c.createElement(Y.M2,{theme:Q},c.createElement(H.Z,{justify:"center"},c.createElement(d.A,{size:"xl",variant:"danger","aria-label":"Danger variant"},c.createElement(w.Z,null)),c.createElement(d.A,{size:"xl",variant:"primary","aria-label":"Primary variant"},c.createElement(w.Z,null))))},centered:!0,code:[{fileName:"Demo.tsx",code:q,language:"tsx"},{fileName:"Demo.module.css",code:K,language:"css"}]};var J=t(78708),ee=t(60060),en=t(17569),et=Object.defineProperty,eo=Object.getOwnPropertySymbols,ei=Object.prototype.hasOwnProperty,ea=Object.prototype.propertyIsEnumerable,er=(e,n,t)=>n in e?et(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,ec=(e,n)=>{for(var t in n||(n={}))ei.call(n,t)&&er(e,t,n[t]);if(eo)for(var t of eo(n))ea.call(n,t)&&er(e,t,n[t]);return e};let el=`
import { ActionIcon, rem } from '@mantine/core';
import { IconPhoto, IconSettings, IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon.Group{{props}}>
      <ActionIcon variant="default" size="lg" aria-label="Gallery">
        <IconPhoto style={{ width: rem(20) }} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Settings">
        <IconSettings style={{ width: rem(20) }} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Likes">
        <IconHeart style={{ width: rem(20) }} stroke={1.5} />
      </ActionIcon>
    </ActionIcon.Group>
  );
}
`,es={type:"configurator",component:function(e){return c.createElement(d.A.Group,ec({},e),c.createElement(d.A,{variant:"default",size:"lg","aria-label":"Gallery"},c.createElement(ee.Z,{style:{width:(0,s.h)(20)},stroke:1.5})),c.createElement(d.A,{variant:"default",size:"lg","aria-label":"Settings"},c.createElement(en.Z,{style:{width:(0,s.h)(20)},stroke:1.5})),c.createElement(d.A,{variant:"default",size:"lg","aria-label":"Likes"},c.createElement(w.Z,{style:{width:(0,s.h)(20)},stroke:1.5})))},code:el,centered:!0,controls:[{type:"segmented",prop:"orientation",data:["horizontal","vertical"],initialValue:"horizontal",libraryValue:"horizontal"}]},ed=(0,a.A)(r.us.ActionIcon);function eu(e){let n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",ul:"ul",li:"li",pre:"pre"},(0,i.ah)(),e.components),{Demo:t,Gradient:a,Polymorphic:r,GetElementRef:c}=n;return t||eh("Demo",!0),c||eh("GetElementRef",!0),a||eh("Gradient",!0),r||eh("Polymorphic",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:A}),"\n",(0,o.jsx)(a,{component:"ActionIcon"}),"\n",(0,o.jsx)(t,{data:E}),"\n",(0,o.jsx)(n.h2,{id:"size",children:"Size"}),"\n",(0,o.jsxs)(n.p,{children:["You can use any valid CSS value in ",(0,o.jsx)(n.code,{children:"size"})," prop, it is used to set ",(0,o.jsx)(n.code,{children:"width"}),", ",(0,o.jsx)(n.code,{children:"min-width"}),", ",(0,o.jsx)(n.code,{children:"min-height"})," and ",(0,o.jsx)(n.code,{children:"height"}),"\nproperties. Note that ",(0,o.jsx)(n.code,{children:"size"})," prop does not control child ",(0,o.jsx)(n.a,{href:"/guides/icons",children:"icon"})," size, you need to\nset it manually on icon component. When ",(0,o.jsx)(n.code,{children:"size"})," is a number, the value is treated as ",(0,o.jsx)(n.code,{children:"px"})," units and\nconverted to ",(0,o.jsx)(n.a,{href:"/styles/rem",children:"rem"})," units."]}),"\n",(0,o.jsx)(t,{data:_}),"\n",(0,o.jsx)(n.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,o.jsxs)(n.p,{children:["To make ",(0,o.jsx)(n.code,{children:"ActionIcon"})," disabled set ",(0,o.jsx)(n.code,{children:"disabled"})," prop, this will prevent any interactions with the button\nand add disabled styles. If you want the button to just look disabled but still be interactive,\nset ",(0,o.jsx)(n.code,{children:"data-disabled"})," prop instead. Note that disabled styles are the same for all variants."]}),"\n",(0,o.jsx)(t,{data:P}),"\n",(0,o.jsx)(n.h2,{id:"disabled-state-when-actionicon-is-link",children:"Disabled state when ActionIcon is link"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"<a />"})," element does not support ",(0,o.jsx)(n.code,{children:"disabled"})," attribute. To make ",(0,o.jsx)(n.code,{children:"ActionIcon"})," disabled when it is\nrendered as a link, set ",(0,o.jsx)(n.code,{children:"data-disabled"})," attribute instead and prevent default behavior in\n",(0,o.jsx)(n.code,{children:"onClick"})," event handler."]}),"\n",(0,o.jsx)(t,{data:O}),"\n",(0,o.jsx)(n.h2,{id:"customize-disabled-styles",children:"Customize disabled styles"}),"\n",(0,o.jsxs)(n.p,{children:["To customize disabled styles, it is recommended to use both ",(0,o.jsx)(n.code,{children:"&:disabled"})," and ",(0,o.jsx)(n.code,{children:"&[data-disabled]"}),"\nselectors:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"&:disabled"})," is used to style the button when ",(0,o.jsx)(n.code,{children:"disabled"})," prop is set and\nalso when the button is disabled by the parent component (for example, when ",(0,o.jsx)(n.code,{children:"disabled"})," prop is set on a\n",(0,o.jsx)(n.code,{children:"<fieldset />"})," element which contains ",(0,o.jsx)(n.code,{children:"ActionIcon"}),")."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"&[data-disabled]"})," is used to style the button when it is not actually disabled but should look like\nit is (for example, ",(0,o.jsx)(n.code,{children:"data-disabled"})," should be used if you need to use ",(0,o.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"})," with disabled ",(0,o.jsx)(n.code,{children:"ActionIcon"}),"\nor when ",(0,o.jsx)(n.code,{children:"ActionIcon"})," is used as a link)"]}),"\n"]}),"\n",(0,o.jsx)(t,{data:C}),"\n",(0,o.jsx)(n.h2,{id:"disabled-button-with-tooltip",children:"Disabled button with Tooltip"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"onMouseLeave"})," event ",(0,o.jsx)(n.a,{href:"https://github.com/facebook/react/issues/18753",children:"is not triggered"})," when ",(0,o.jsx)(n.code,{children:"ActionIcon"})," is disabled, so if you need to use\n",(0,o.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"})," with disabled ",(0,o.jsx)(n.code,{children:"ActionIcon"})," you need to set ",(0,o.jsx)(n.code,{children:"data-disabled"})," prop on ",(0,o.jsx)(n.code,{children:"ActionIcon"}),"\ninstead of ",(0,o.jsx)(n.code,{children:"disabled"}),". Note that it is also required to change ",(0,o.jsx)(n.code,{children:"onClick"})," event handler to\n",(0,o.jsx)(n.code,{children:"(event) => event.preventDefault()"})," as ",(0,o.jsx)(n.code,{children:"ActionIcon"})," is not actually disabled and will still trigger\n",(0,o.jsx)(n.code,{children:"onClick"})," event."]}),"\n",(0,o.jsx)(t,{data:F}),"\n",(0,o.jsx)(n.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,o.jsxs)(n.p,{children:["When ",(0,o.jsx)(n.code,{children:"loading"})," prop is set, ",(0,o.jsx)(n.code,{children:"ActionIcon"})," will be disabled and ",(0,o.jsx)(n.a,{href:"/core/loader",children:"Loader"})," with overlay will be rendered\nin the center of the button. ",(0,o.jsx)(n.a,{href:"/core/loader",children:"Loader"})," color depends on ",(0,o.jsx)(n.code,{children:"ActionIcon"})," variant."]}),"\n",(0,o.jsx)(t,{data:$}),"\n",(0,o.jsx)(n.h2,{id:"loader-props",children:"Loader props"}),"\n",(0,o.jsxs)(n.p,{children:["You can customize ",(0,o.jsx)(n.a,{href:"/core/loader",children:"Loader"})," with ",(0,o.jsx)(n.code,{children:"loaderProps"})," prop, it accepts all props that\n",(0,o.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component has:"]}),"\n",(0,o.jsx)(t,{data:U}),"\n",(0,o.jsx)(n.h2,{id:"add-custom-variants",children:"Add custom variants"}),"\n",(0,o.jsxs)(n.p,{children:["To add new ",(0,o.jsx)(n.code,{children:"ActionIcon"})," variants, use ",(0,o.jsx)(n.a,{href:"/styles/variants-sizes",children:"data-variant"})," attribute.\nUsually new variants are added on ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),", this way they are\navailable in all ",(0,o.jsx)(n.code,{children:"ActionIcon"})," components in your application."]}),"\n",(0,o.jsx)(t,{data:B}),"\n",(0,o.jsx)(n.h2,{id:"add-custom-sizes",children:"Add custom sizes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ActionIcon"})," sizes are defined by ",(0,o.jsx)(n.code,{children:"--ai-size-{x}"})," CSS variables. The easiest way to add new sizes is to\ndefine additional ",(0,o.jsx)(n.code,{children:"--ai-size-{x}"})," variables on the ",(0,o.jsx)(n.code,{children:"root"})," element:"]}),"\n",(0,o.jsx)(t,{data:J.h}),"\n",(0,o.jsx)(n.h2,{id:"actionicongroup",children:"ActionIcon.Group"}),"\n",(0,o.jsx)(t,{data:es}),"\n",(0,o.jsxs)(n.p,{children:["Note that you must not wrap child ",(0,o.jsx)(n.code,{children:"ActionIcon"})," components with any additional elements:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { ActionIcon } from '@mantine/core';\n\n// Will not work correctly\nfunction Demo() {\n  return (\n    <ActionIcon.Group>\n      <div>\n        <ActionIcon>This will not work</ActionIcon>\n      </div>\n      <ActionIcon>ActionIcons will have incorrect borders</ActionIcon>\n    </ActionIcon.Group>\n  );\n}\n"})}),"\n",(0,o.jsx)(r,{defaultElement:"button",changeToElement:"a",component:"ActionIcon",withNext:!0}),"\n",(0,o.jsx)(c,{component:"ActionIcon",refType:"button"}),"\n",(0,o.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(n.p,{children:["To make ",(0,o.jsx)(n.code,{children:"ActionIcon"})," accessible for screen readers, you need to either set ",(0,o.jsx)(n.code,{children:"aria-label"})," or\nuse ",(0,o.jsx)(n.a,{href:"/core/visually-hidden",children:"VisuallyHidden"})," component:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { ActionIcon, VisuallyHidden } from '@mantine/core';\nimport { IconHeart } from '@tabler/icons-react';\n\nfunction Demo() {\n  return (\n    <>\n      <ActionIcon aria-label=\"Like post\">\n        <IconHeart />\n      </ActionIcon>\n\n      <ActionIcon>\n        <VisuallyHidden>Like post</VisuallyHidden>\n        <IconHeart />\n      </ActionIcon>\n    </>\n  );\n}\n"})})]})}var em=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(ed,Object.assign({},e,{children:(0,o.jsx)(eu,e)}))};function eh(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},31550:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(54764).Z)("external-link","IconExternalLink",[["path",{d:"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6",key:"svg-0"}],["path",{d:"M11 13l9 -9",key:"svg-1"}],["path",{d:"M15 4h5v5",key:"svg-2"}]])},1002:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(54764).Z)("heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])},78708:function(e,n,t){"use strict";t.d(n,{h:function(){return h}});var o=t(67294),i=t(39242),a=t(80194),r=t(49441),c=t(74378),l=t(46393),s=t(1002);let d=`
import { ActionIcon, createTheme, Group, MantineThemeProvider, rem } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Group justify="center">
        <ActionIcon size="xxs" aria-label="Custom xxs size">
          <IconHeart style={{ width: rem(10), height: rem(10) }} />
        </ActionIcon>

        <ActionIcon size="xxl" aria-label="Custom xxl size">
          <IconHeart style={{ width: rem(32), height: rem(32) }} />
        </ActionIcon>
      </Group>
    </MantineThemeProvider>
  );
}
`,u=`
.root {
  --ai-size-xxs: rem(16px);
  --ai-size-xxl: rem(50px);
}
`,m=(0,i.j)({components:{ActionIcon:a.A.extend({classNames:{root:"mantine-EQzkIkt"}})}}),h={type:"code",component:function(){return o.createElement(r.M2,{theme:m},o.createElement(c.Z,{justify:"center"},o.createElement(a.A,{size:"xxs","aria-label":"Custom xxs size"},o.createElement(s.Z,{style:{width:(0,l.h)(10),height:(0,l.h)(10)}})),o.createElement(a.A,{size:"xxl","aria-label":"Custom xxl size"},o.createElement(s.Z,{style:{width:(0,l.h)(32),height:(0,l.h)(32)}}))))},code:[{fileName:"Demo.module.css",code:u,language:"css"},{fileName:"Demo.tsx",code:d,language:"tsx"}]}},55127:function(e,n,t){"use strict";t.d(n,{P:function(){return o}});let o=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},12572:function(e,n,t){"use strict";t.d(n,{cH:function(){return o},d_:function(){return i}});let o={type:"select",prop:"variant",data:["default","filled","light","outline","subtle","transparent","white"],initialValue:"filled",libraryValue:"__none__"},i={type:"select",prop:"variant",data:["filled","light","outline","transparent","white","default"],initialValue:"filled",libraryValue:"__none__"}}},function(e){e.O(0,[3334,7914,4831,9774,2888,179],function(){return e(e.s=90653)}),_N_E=e.O()}]);