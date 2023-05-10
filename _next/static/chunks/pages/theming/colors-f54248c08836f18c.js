(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8989],{94171:function(e,o,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theming/colors",function(){return r(19318)}])},89545:function(e,o,r){"use strict";r.d(o,{I:function(){return d},a:function(){return m}});var n=r(85893);r(67294);var t=r(49441),l=r(87578),c=r(94873),i=r(77048),a=r(89070),s=r.n(a);function d(e){let{group:o}=e,r=(0,t.rZ)(),a=r.colors[o].map((e,r)=>(0,n.jsxs)("div",{className:s().color,children:[(0,n.jsx)(l.b,{color:e,radius:"md",className:s().swatch}),(0,n.jsxs)(c.x,{mt:7,children:[(0,n.jsxs)(i.x,{size:"xs",className:s().colorName,children:[o," ",r]}),(0,n.jsx)(i.x,{color:"dimmed",size:"xs",tt:"uppercase",mt:2,fz:10,children:e})]})]},e));return(0,n.jsx)("div",{className:s().wrapper,children:(0,n.jsx)("div",{className:s().group,children:a})})}var u=r(5037),h=r(10157),p=r.n(h);function m(){let e=Object.keys(u.t.colors).map(e=>(0,n.jsx)(d,{group:e},e));return(0,n.jsx)("div",{className:p().root,children:e})}},19318:function(e,o,r){"use strict";r.r(o),r.d(o,{default:function(){return _}});var n=r(85893),t=r(11151),l=r(34940),c=r(25263),i=r(89545),a=r(67294),s=r(74378),d=r(43406);let u=`
import { Group, Button, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        colors: {
          'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
          'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
        },
      }}
    >
      <Group>
        <Button>Primary button</Button>
        <Button color="blue">Blue button</Button>
      </Group>
    </MantineProvider>
  );
}

`,h={type:"code",component:function(){return a.createElement(s.Z,null,a.createElement(d.z,{color:"ocean-blue"},"Ocean blue button"),a.createElement(d.z,{color:"bright-pink",variant:"filled"},"Bright pink button"))},centered:!0,code:u},p=`
import { Group, Button, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        primaryColor: 'bright-pink',
        colors: {
          'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
        },
      }}
    >
      <Group>
        <Button>Primary button</Button>
        <Button color="blue">Blue button</Button>
      </Group>
    </MantineProvider>
  );
}

`,m={type:"code",component:function(){return a.createElement(s.Z,null,a.createElement(d.z,{color:"bright-pink"},"Primary button"),a.createElement(d.z,{color:"blue"},"Blue button"))},centered:!0,code:p};var x=r(18297),j=r(65132);let f=e=>`
import { MantineProvider, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ primaryShade: ${e.primaryShade} }}>
      <Group>
        <Button>Filled</Button>
        <Button variant="light">Light</Button>
        <Button variant="outline">Outline</Button>
      </Group>
    </MantineProvider>
  );
}
`,v={type:"configurator",component:function(e){let[o,r]=(0,a.useState)(void 0),{colorScheme:n}=(0,x.X)();return(0,a.useEffect)(()=>{r(n)},[n]),a.createElement("div",{id:"primary-color-demo-root","data-mantine-color-scheme":o},a.createElement(j.M,{cssVariablesSelector:"#primary-color-demo-root",getRootElement:()=>document.createElement("div"),theme:{primaryShade:e.primaryShade}},a.createElement(s.Z,null,a.createElement(d.z,null,"Filled"),a.createElement(d.z,{variant:"light"},"Light"),a.createElement(d.z,{variant:"outline"},"Outline"))))},code:f,centered:!0,controls:[{type:"number",prop:"primaryShade",initialValue:6,libraryValue:"__none__",min:0,max:9}]};var g=r(77048);let b=`
import { Group, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm" mb={5} fw={500}>
        Filled variant
      </Text>
      <Group>
        <Button color="cyan">Theme color</Button>
        <Button color="#1D72FE">Hex color</Button>
      </Group>

      <Text size="sm" mb={5} mt="md" fw={500}>
        Light variant
      </Text>
      <Group>
        <Button variant="light" color="cyan">
          Theme color
        </Button>
        <Button variant="light" color="#1D72FE">
          Hex color
        </Button>
      </Group>

      <Text size="sm" mb={5} mt="md" fw={500}>
        Outline variant
      </Text>
      <Group>
        <Button variant="outline" color="cyan">
          Theme color
        </Button>
        <Button variant="outline" color="#1D72FE">
          Hex color
        </Button>
      </Group>
    </>
  );
}

`,y={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(g.x,{size:"sm",mb:5,fw:500},"Filled variant"),a.createElement(s.Z,null,a.createElement(d.z,{color:"cyan"},"Theme color"),a.createElement(d.z,{color:"#1D72FE"},"Hex color")),a.createElement(g.x,{size:"sm",mb:5,mt:"md",fw:500},"Light variant"),a.createElement(s.Z,null,a.createElement(d.z,{variant:"light",color:"cyan"},"Theme color"),a.createElement(d.z,{variant:"light",color:"#1D72FE"},"Hex color")),a.createElement(g.x,{size:"sm",mb:5,mt:"md",fw:500},"Outline variant"),a.createElement(s.Z,null,a.createElement(d.z,{variant:"outline",color:"cyan"},"Theme color"),a.createElement(d.z,{variant:"outline",color:"#1D72FE"},"Hex color")))},defaultExpanded:!1,code:b},C=e=>`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text c="blue.${e.index}">Text with blue.${e.index} color</Text>
      <Button color="cyan.${e.index}">Button</Button>
    </>
  );
}
`,w={type:"configurator",component:function(e){return a.createElement(a.Fragment,null,a.createElement(g.x,{c:`blue.${e.index}`},"Text with blue.",e.index," color"),a.createElement(d.z,{color:`cyan.${e.index}`,mt:"sm"},"Button"))},code:C,controls:[{type:"number",prop:"index",initialValue:6,libraryValue:"__none__",min:0,max:9}]},E=`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button color="#C3FF36" c="black">
      Button with color and c props
    </Button>
  );
}
`,B={type:"code",component:function(){return a.createElement(d.z,{color:"#C3FF36",c:"black"},"Button with color and c props")},centered:!0,code:E};var D=r(10460);let F=(0,l.A)(c.us.Colors);function k(e){let o=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",h2:"h2",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li"},(0,t.ah)(),e.components),{Demo:r,InstallScript:l}=o;return r||T("Demo",!0),l||T("InstallScript",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"colors",children:"Colors"}),"\n",(0,n.jsxs)(o.p,{children:["Mantine uses ",(0,n.jsx)(o.a,{href:"https://yeun.github.io/open-color/",children:"open-color"})," in default theme with some additions.\nEach color has 10 shades."]}),"\n",(0,n.jsxs)(o.p,{children:["Colors are exposed on ",(0,n.jsx)(o.a,{href:"/theming/theme-object",children:"theme object"})," as an array of strings,\nyou can access color shade by color name and index (0-9), colors with larger index are darker:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"theme.colors.red[5];\ntheme.colors.gray[9];\ntheme.colors.blue[0];\n"})}),"\n",(0,n.jsxs)(o.p,{children:["Colors are also exposed as ",(0,n.jsx)(o.a,{href:"/styles/css-variables",children:"CSS variables"}),":"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-css",children:"--mantine-color-red-5;\n--mantine-color-gray-9;\n--mantine-color-blue-0;\n"})}),"\n",(0,n.jsx)(o.h2,{id:"adding-extra-colors",children:"Adding extra colors"}),"\n",(0,n.jsxs)(o.p,{children:["You can add any number of extra colors to ",(0,n.jsx)(o.code,{children:"theme.colors"})," object.\nThis will allow you to use them in all components that support ",(0,n.jsx)(o.code,{children:"color"})," prop, for example\n",(0,n.jsx)(o.a,{href:"/core/button",children:"Button"}),", ",(0,n.jsx)(o.a,{href:"/core/badge",children:"Badge"})," and ",(0,n.jsx)(o.a,{href:"/core/switch",children:"Switch"}),"."]}),"\n",(0,n.jsx)(r,{data:h}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"10 shades per color"})}),"\n",(0,n.jsxs)(o.p,{children:["Colors override must include ",(0,n.jsx)(o.strong,{children:"at least 10 shades per color"}),", otherwise you will get a TypeScript error\nand some variants will not have proper colors. If you only have one color value you can either\npick remaining colors by hand or use ",(0,n.jsx)(o.a,{href:"/colors-generator",children:"colors generator tool"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["You can add more than 10 shades per color: these values will not be used by Mantine components with default colors resolver,\nbut you can still reference them by index, for example, ",(0,n.jsx)(o.code,{children:'color="blue.11"'}),"."]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"primarycolor",children:"primaryColor"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"theme.primaryColor"})," is a key of ",(0,n.jsx)(o.code,{children:"theme.colors"}),", it is used:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["As a default value for most of the components that support ",(0,n.jsx)(o.code,{children:"color"})," prop"]}),"\n",(0,n.jsx)(o.li,{children:"To set default focus ring outline color"}),"\n"]}),"\n",(0,n.jsx)(r,{data:m}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:(0,n.jsxs)(o.strong,{children:["CSS color values at ",(0,n.jsx)(o.code,{children:"theme.primaryColor"})]})}),"\n",(0,n.jsxs)(o.p,{children:["Value of ",(0,n.jsx)(o.code,{children:"theme.primaryColor"})," must be a key of ",(0,n.jsx)(o.code,{children:"theme.colors"})," object. For example, ",(0,n.jsx)(o.code,{children:"blue"}),", ",(0,n.jsx)(o.code,{children:"orange"})," or ",(0,n.jsx)(o.code,{children:"green"}),".\nYou cannot assign CSS color values, for example, the following code will throw an error during theme merging:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        primaryColor: '#CEFEDC', // This will throw an error\n      }}\n    >\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"primaryshade",children:"primaryShade"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"theme.primaryShade"})," is a number from 0 to 9. It determines which shade will be used for the components that have ",(0,n.jsx)(o.code,{children:"color"})," prop."]}),"\n",(0,n.jsx)(r,{data:v}),"\n",(0,n.jsx)(o.p,{children:"You can also customize primary shade for dark and light color schemes separately:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={{ primaryShade: { light: 6, dark: 8 } }}>\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"color-prop",children:"Color prop"}),"\n",(0,n.jsxs)(o.p,{children:["Components that support changing their color have ",(0,n.jsx)(o.code,{children:"color"})," prop. This prop supports the following values:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Key of ",(0,n.jsx)(o.code,{children:"theme.colors"}),", for example, ",(0,n.jsx)(o.code,{children:"blue"})," or ",(0,n.jsx)(o.code,{children:"green"})]}),"\n",(0,n.jsxs)(o.li,{children:["Key of ",(0,n.jsx)(o.code,{children:"theme.colors"})," with color index, for example, ",(0,n.jsx)(o.code,{children:"blue.5"})," or ",(0,n.jsx)(o.code,{children:"green.9"})]}),"\n",(0,n.jsxs)(o.li,{children:["CSS color value, for example, ",(0,n.jsx)(o.code,{children:"#fff"})," or ",(0,n.jsx)(o.code,{children:"rgba(0, 0, 0, 0.5)"})]}),"\n"]}),"\n",(0,n.jsx)(r,{data:y}),"\n",(0,n.jsx)(o.h2,{id:"colors-index-reference",children:"Colors index reference"}),"\n",(0,n.jsxs)(o.p,{children:["You can reference colors by index in ",(0,n.jsx)(o.code,{children:"color"})," prop and ",(0,n.jsx)(o.a,{href:"/styles/style-props",children:"style props"}),", for example ",(0,n.jsx)(o.code,{children:"c"})," prop:"]}),"\n",(0,n.jsx)(r,{data:w}),"\n",(0,n.jsx)(o.h2,{id:"difference-between-color-and-c-props",children:"Difference between color and c props"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"color"})," prop is used to control multiple CSS properties of the component. These properties can vary across different components,\nbut usually ",(0,n.jsx)(o.code,{children:"color"})," prop controls ",(0,n.jsx)(o.code,{children:"background"}),", ",(0,n.jsx)(o.code,{children:"color"})," and ",(0,n.jsx)(o.code,{children:"border-color"})," CSS properties. For example,\nwhen you set ",(0,n.jsx)(o.code,{children:'color="#C3FF36"'})," on ",(0,n.jsx)(o.a,{href:"/core/button",children:"Button"})," component (with ",(0,n.jsx)(o.code,{children:'variant="filled"'}),"), it will set the following CSS properties:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"background-color"})," to ",(0,n.jsx)(o.code,{children:"#C3FF36"})]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"background-color"})," when button is hovered to ",(0,n.jsx)(o.code,{children:"#B0E631"})," (",(0,n.jsx)(o.code,{children:"#C3FF36"})," darkened by 10%)"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"color"})," to ",(0,n.jsx)(o.code,{children:"var(--mantine-color-white)"})]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"border-color"})," to ",(0,n.jsx)(o.code,{children:"transparent"})]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"c"})," is a ",(0,n.jsx)(o.a,{href:"/styles/style-props",children:"style prop"})," – it is responsible for setting single CSS property ",(0,n.jsx)(o.code,{children:"color"})," (color of the text).\nYou can combine both props to achieve better contrast between text and background. In the following example:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"color"})," prop sets all ",(0,n.jsx)(o.code,{children:"background: #C3FF36"})," and ",(0,n.jsx)(o.code,{children:"color: var(--mantine-color-white)"})]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"c"})," prop overrides color styles to ",(0,n.jsx)(o.code,{children:"color: var(--mantine-color-black)"})]}),"\n"]}),"\n",(0,n.jsx)(r,{data:B}),"\n",(0,n.jsx)(o.h2,{id:"colors-variant-resolver",children:"Colors variant resolver"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"theme.variantColorResolver"})," is a function that is used to determine which colors will be used\nin different variants in the following components: ",(0,n.jsx)(o.a,{href:"/core/button",children:"Button"}),", ",(0,n.jsx)(o.a,{href:"/core/badge",children:"Badge"}),", ",(0,n.jsx)(o.a,{href:"/core/action-icon",children:"ActionIcon"})," and ",(0,n.jsx)(o.a,{href:"/core/theme-icon",children:"ThemeIcon"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"It accepts an object argument with the following properties:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"interface VariantColorsResolverInput {\n  /** `color` prop passed to component */\n  color: MantineColor | undefined;\n\n  /** `variant` prop passed to component */\n  variant: string;\n\n  /** `gradient` prop passed to component, used only for gradient variant by default */\n  gradient?: MantineGradient;\n\n  /** Theme object */\n  theme: MantineTheme;\n}\n"})}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"theme.variantColorResolver"})," must return an object with the following properties:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"interface VariantColorResolverResult {\n  background: string;\n  hover: string;\n  color: string;\n  border: string;\n}\n"})}),"\n",(0,n.jsxs)(o.p,{children:["You can use ",(0,n.jsx)(o.code,{children:"theme.variantColorResolver"})," to customize colors handling by default variants\nor to add new variants support:"]}),"\n",(0,n.jsx)(r,{data:D.D}),"\n",(0,n.jsx)(o.h2,{id:"colors-generation",children:"Colors generation"}),"\n",(0,n.jsxs)(o.p,{children:["You can use ",(0,n.jsx)(o.a,{href:"/colors-generator",children:"colors generator"})," to generate 10 shades of color based on single value\nor install ",(0,n.jsx)(o.code,{children:"@mantine/colors-generator"})," package to generate dynamic colors in your application:"]}),"\n",(0,n.jsx)(l,{packages:"chroma-js @mantine/colors-generator"}),"\n",(0,n.jsxs)(o.p,{children:["The package exports ",(0,n.jsx)(o.code,{children:"generateColors"})," function that accepts color value and returns an array of 10 shades.\nNote that ",(0,n.jsx)(o.code,{children:"generateColors"})," function works best with darker colors (blue, violet, red) and may produce\ncolors with poor contrast for lighter colors (yellow, teal, orange). Usually it is better to generate\ncolors in advance to avoid contrast issues."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { generateColors } from '@mantine/colors-generator';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        colors: {\n          'pale-blue': generateColors('#375EAC'),\n        },\n      }}\n    >\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"default-colors",children:"Default colors"}),"\n",(0,n.jsx)(i.a,{})]})}var _=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(F,Object.assign({},e,{children:(0,n.jsx)(k,e)}))};function T(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},89070:function(e){e.exports={wrapper:"ColorsGroup_wrapper__CL3j0",color:"ColorsGroup_color__h_UQT",swatch:"ColorsGroup_swatch__TKQN5",title:"ColorsGroup_title___FhcQ",group:"ColorsGroup_group__XrmQh",colorName:"ColorsGroup_colorName__iVJUN"}},10157:function(e){e.exports={root:"ThemeColors_root__YibUj"}},10460:function(e,o,r){"use strict";r.d(o,{D:function(){return w}});var n=r(67294),t=r(28274),l=r(31254),c=r(26595),i=r(46393),a=r(8781),s=r(49441),d=r(74378),u=r(43406),h=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,o,r)=>o in e?h(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,g=(e,o)=>{for(var r in o||(o={}))j.call(o,r)&&v(e,r,o[r]);if(x)for(var r of x(o))f.call(o,r)&&v(e,r,o[r]);return e},b=(e,o)=>p(e,m(o));let y=`
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
`,C=e=>{let o=(0,t.B)(e),r=(0,l.E)({color:e.color||e.theme.primaryColor,theme:e.theme});return r.isThemeColor&&"lime"===r.color&&"filled"===e.variant?b(g({},o),{color:"var(--mantine-color-black)"}):"light"===e.variant?{background:(0,c.m)(r.value,.1),hover:(0,c.m)(r.value,.15),border:`${(0,i.h)(1)} solid ${r.value}`,color:(0,a._)(r.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:o},w={type:"code",component:function(){return n.createElement(s.M2,{theme:{variantColorResolver:C}},n.createElement(d.Z,null,n.createElement(u.z,{color:"lime.4",variant:"filled"},"Lime filled button"),n.createElement(u.z,{color:"orange",variant:"light"},"Orange light button"),n.createElement(u.z,{variant:"danger"},"Danger button")))},centered:!0,code:y}}},function(e){e.O(0,[4878,9341,4940,9774,2888,179],function(){return e(e.s=94171)}),_N_E=e.O()}]);