(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[691],{64877:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/accordion",function(){return o(46107)}])},46107:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return n_}});var t=o(85893),r=o(11151),a=o(34940),i=o(34200),c=o(67294),l=o(32582),s=o(35179),d=o(46393),m=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,b=(e,n,o)=>n in e?m(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,y=(e,n)=>{for(var o in n||(n={}))h.call(n,o)&&b(e,o,n[o]);if(f)for(var o of f(n))v.call(n,o)&&b(e,o,n[o]);return e},g=(e,n)=>u(e,p(n)),A=(e,n)=>{var o={};for(var t in e)h.call(e,t)&&0>n.indexOf(t)&&(o[t]=e[t]);if(null!=e&&f)for(var t of f(e))0>n.indexOf(t)&&v.call(e,t)&&(o[t]=e[t]);return o};function j(e){var{style:n,size:o=16}=e,t=A(e,["style","size"]);return c.createElement("svg",y({viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:g(y({},n),{width:(0,d.h)(o),height:(0,d.h)(o),display:"block"})},t),c.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}j.displayName="@mantine/core/AccordionChevron";var x=o(16371);let[w,P]=(0,x.R)("Accordion component was not found in the tree"),[C,O]=(0,x.R)("Accordion.Item component was not found in the tree");var E={panel:"m-df78851f",content:"m-4ba554d4",itemTitle:"m-8fa820a0",control:"m-4ba585b8","control--default":"m-6939a5e9","control--contained":"m-4271d21b",label:"m-df3ffa0f",chevron:"m-3f35ae96",icon:"m-9bd771fe",item:"m-9bd7b098","item--default":"m-fe19b709","item--contained":"m-1f921b3b","item--filled":"m-2cdf939a","item--separated":"m-9f59b069"},I=o(75144),S=o(35577),k=o(13671),D=Object.defineProperty,N=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,R=(e,n,o)=>n in e?D(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,B=(e,n)=>{for(var o in n||(n={}))M.call(n,o)&&R(e,o,n[o]);if(N)for(var o of N(n))z.call(n,o)&&R(e,o,n[o]);return e},T=(e,n)=>{var o={};for(var t in e)M.call(e,t)&&0>n.indexOf(t)&&(o[t]=e[t]);if(null!=e&&N)for(var t of N(e))0>n.indexOf(t)&&z.call(e,t)&&(o[t]=e[t]);return o};let V={},Z=(0,I.d)((e,n)=>{let o=(0,S.w)("AccordionItem",V,e),{classNames:t,className:r,style:a,styles:i,unstyled:l,vars:s,value:d}=o,m=T(o,["classNames","className","style","styles","unstyled","vars","value"]),u=P();return c.createElement(C,{value:{value:d}},c.createElement(k.x,B(B({ref:n,mod:{active:u.isItemActive(d)}},u.getStyles("item",{className:r,classNames:t,styles:i,style:a,variant:u.variant})),m)))});Z.displayName="@mantine/core/AccordionItem",Z.classes=E;var F=o(25716),H=Object.defineProperty,L=Object.defineProperties,W=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,U=(e,n,o)=>n in e?H(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,q=(e,n)=>{for(var o in n||(n={}))G.call(n,o)&&U(e,o,n[o]);if(_)for(var o of _(n))$.call(n,o)&&U(e,o,n[o]);return e},J=(e,n)=>L(e,W(n)),K=(e,n)=>{var o={};for(var t in e)G.call(e,t)&&0>n.indexOf(t)&&(o[t]=e[t]);if(null!=e&&_)for(var t of _(e))0>n.indexOf(t)&&$.call(e,t)&&(o[t]=e[t]);return o};let X={},Y=(0,I.d)((e,n)=>{let o=(0,S.w)("AccordionPanel",X,e),{classNames:t,className:r,style:a,styles:i,unstyled:l,vars:s,children:d}=o,m=K(o,["classNames","className","style","styles","unstyled","vars","children"]),{value:u}=O(),p=P();return c.createElement(F.U,J(q(q({ref:n},p.getStyles("panel",{className:r,classNames:t,style:a,styles:i})),m),{in:p.isItemActive(u),transitionDuration:p.transitionDuration,role:"region",id:p.getRegionId(u),"aria-labelledby":p.getControlId(u)}),c.createElement("div",q({},p.getStyles("content",{classNames:t,styles:i})),d))});Y.displayName="@mantine/core/AccordionPanel",Y.classes=E;var Q=o(90395),ee=o(22882),en=Object.defineProperty,eo=Object.defineProperties,et=Object.getOwnPropertyDescriptors,er=Object.getOwnPropertySymbols,ea=Object.prototype.hasOwnProperty,ei=Object.prototype.propertyIsEnumerable,ec=(e,n,o)=>n in e?en(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,el=(e,n)=>{for(var o in n||(n={}))ea.call(n,o)&&ec(e,o,n[o]);if(er)for(var o of er(n))ei.call(n,o)&&ec(e,o,n[o]);return e},es=(e,n)=>eo(e,et(n)),ed=(e,n)=>{var o={};for(var t in e)ea.call(e,t)&&0>n.indexOf(t)&&(o[t]=e[t]);if(null!=e&&er)for(var t of er(e))0>n.indexOf(t)&&ei.call(e,t)&&(o[t]=e[t]);return o};let em={},eu=(0,I.d)((e,n)=>{let o=(0,S.w)("AccordionControl",em,e),{classNames:t,className:r,style:a,styles:i,unstyled:l,vars:s,chevron:d,icon:m,onClick:u,onKeyDown:p,children:f,disabled:h}=o,v=ed(o,["classNames","className","style","styles","unstyled","vars","chevron","icon","onClick","onKeyDown","children","disabled"]),{value:b}=O(),y=P(),g=y.isItemActive(b),A="number"==typeof y.order,j=`h${y.order}`,x=c.createElement(Q.k,es(el(el({},v),y.getStyles("control",{className:r,classNames:t,style:a,styles:i,variant:y.variant})),{mod:["accordion-control",{active:g,"chevron-position":y.chevronPosition,disabled:h}],ref:n,onClick:e=>{null==u||u(e),y.onChange(b)},type:"button",disabled:h,"aria-expanded":g,"aria-controls":y.getRegionId(b),id:y.getControlId(b),onKeyDown:(0,ee.R)({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:y.loop,orientation:"vertical",onKeyDown:p})}),c.createElement(k.x,el({component:"span",mod:{rotate:!y.disableChevronRotation&&g,position:y.chevronPosition}},y.getStyles("chevron",{classNames:t,styles:i})),d||y.chevron),c.createElement("span",el({},y.getStyles("label",{classNames:t,styles:i})),f),m&&c.createElement(k.x,el({component:"span",mod:{"chevron-position":y.chevronPosition}},y.getStyles("icon",{classNames:t,styles:i})),m));return A?c.createElement(j,el({},y.getStyles("itemTitle",{classNames:t,styles:i})),x):x});eu.displayName="@mantine/core/AccordionControl",eu.classes=E;var ep=o(35486),ef=o(95553),eh=o(71350),ev=o(25637),eb=Object.defineProperty,ey=Object.defineProperties,eg=Object.getOwnPropertyDescriptors,eA=Object.getOwnPropertySymbols,ej=Object.prototype.hasOwnProperty,ex=Object.prototype.propertyIsEnumerable,ew=(e,n,o)=>n in e?eb(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,eP=(e,n)=>{for(var o in n||(n={}))ej.call(n,o)&&ew(e,o,n[o]);if(eA)for(var o of eA(n))ex.call(n,o)&&ew(e,o,n[o]);return e},eC=(e,n)=>ey(e,eg(n)),eO=(e,n)=>{var o={};for(var t in e)ej.call(e,t)&&0>n.indexOf(t)&&(o[t]=e[t]);if(null!=e&&eA)for(var t of eA(e))0>n.indexOf(t)&&ex.call(e,t)&&(o[t]=e[t]);return o};let eE={multiple:!1,disableChevronRotation:!1,transitionDuration:200,chevronPosition:"right",variant:"default",chevronSize:15,chevron:c.createElement(j,null)},eI=(0,ef.Z)((e,{transitionDuration:n,chevronSize:o,radius:t})=>({root:{"--accordion-transition-duration":`${n}ms`,"--accordion-chevron-size":(0,d.h)(o),"--accordion-radius":(0,eh.H5)(t)}}));function eS(e){let n=(0,S.w)("Accordion",eE,e),{classNames:o,className:t,style:r,styles:a,unstyled:i,vars:d,children:m,multiple:u,value:p,defaultValue:f,onChange:h,id:v,loop:b,transitionDuration:y,disableChevronRotation:g,chevronPosition:A,chevronSize:j,order:x,chevron:P,variant:C,radius:O}=n,I=eO(n,["classNames","className","style","styles","unstyled","vars","children","multiple","value","defaultValue","onChange","id","loop","transitionDuration","disableChevronRotation","chevronPosition","chevronSize","order","chevron","variant","radius"]),D=(0,l.M)(v),[N,M]=(0,s.C)({value:p,defaultValue:f,finalValue:u?[]:null,onChange:h}),z=e=>Array.isArray(N)?N.includes(e):e===N,R=e=>{let n=Array.isArray(N)?N.includes(e)?N.filter(n=>n!==e):[...N,e]:e===N?null:e;M(n)},B=(0,ev.y)({name:"Accordion",classes:E,props:n,className:t,style:r,classNames:o,styles:a,unstyled:i,vars:d,varsResolver:eI});return c.createElement(w,{value:{isItemActive:z,onChange:R,getControlId:(0,ep.A)(`${D}-control`,"Accordion.Item component was rendered with invalid value or without value"),getRegionId:(0,ep.A)(`${D}-panel`,"Accordion.Item component was rendered with invalid value or without value"),transitionDuration:y,disableChevronRotation:g,chevronPosition:A,order:x,chevron:P,loop:b,getStyles:B,variant:C}},c.createElement(k.x,eC(eP(eP({},B("root")),I),{variant:C,"data-accordion":!0}),m))}eS.extend=e=>e,eS.classes=E,eS.displayName="@mantine/core/Accordion",eS.Item=Z,eS.Panel=Y,eS.Control=eu,eS.Chevron=j;var ek=Object.defineProperty,eD=Object.getOwnPropertySymbols,eN=Object.prototype.hasOwnProperty,eM=Object.prototype.propertyIsEnumerable,ez=(e,n,o)=>n in e?ek(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,eR=(e,n)=>{for(var o in n||(n={}))eN.call(n,o)&&ez(e,o,n[o]);if(eD)for(var o of eD(n))eM.call(n,o)&&ez(e,o,n[o]);return e};let eB=[{emoji:"\uD83C\uDF4E",value:"Apples",description:"Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads."},{emoji:"\uD83C\uDF4C",value:"Bananas",description:"Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking."},{emoji:"\uD83E\uDD66",value:"Broccoli",description:"Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries."}],eT=eB.map(e=>c.createElement(eS.Item,{key:e.value,value:e.value},c.createElement(eS.Control,{icon:e.emoji},e.value),c.createElement(eS.Panel,null,e.description)));function eV(e){return c.createElement(eS,eR({},e),eT)}var eZ=Object.defineProperty,eF=Object.defineProperties,eH=Object.getOwnPropertyDescriptors,eL=Object.getOwnPropertySymbols,eW=Object.prototype.hasOwnProperty,e_=Object.prototype.propertyIsEnumerable,eG=(e,n,o)=>n in e?eZ(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,e$=(e,n)=>{for(var o in n||(n={}))eW.call(n,o)&&eG(e,o,n[o]);if(eL)for(var o of eL(n))e_.call(n,o)&&eG(e,o,n[o]);return e},eU=(e,n)=>eF(e,eH(n));let eq=`
import { Accordion } from '@mantine/core';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion{{props}} defaultValue="Apples">
      {items}
    </Accordion>
  );
}
`,eJ={type:"configurator",component:function(e){let n=eB.map(e=>c.createElement(eS.Item,{key:e.value,value:e.value},c.createElement(eS.Control,{icon:e.emoji},e.value),c.createElement(eS.Panel,null,e.description)));return c.createElement(eS,eU(e$({},e),{defaultValue:"Apples"}),n)},code:eq,controls:[{prop:"variant",type:"select",initialValue:"default",libraryValue:"default",data:[{label:"Default",value:"default"},{label:"Contained",value:"contained"},{label:"Filled",value:"filled"},{label:"Separated",value:"separated"}]},{prop:"radius",type:"size",libraryValue:"sm",initialValue:"sm"},{prop:"chevronPosition",type:"segmented",data:[{label:"Left",value:"left"},{label:"Right",value:"right"}],initialValue:"right",libraryValue:"right"},{prop:"disableChevronRotation",type:"boolean",initialValue:!1,libraryValue:!1}]};var eK=o(74378),eX=o(47914),eY=o(77048),eQ=Object.defineProperty,e0=Object.getOwnPropertySymbols,e1=Object.prototype.hasOwnProperty,e7=Object.prototype.propertyIsEnumerable,e9=(e,n,o)=>n in e?eQ(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,e2=(e,n)=>{for(var o in n||(n={}))e1.call(n,o)&&e9(e,o,n[o]);if(e0)for(var o of e0(n))e7.call(n,o)&&e9(e,o,n[o]);return e};let e4=[{id:"bender",image:"https://img.icons8.com/clouds/256/000000/futurama-bender.png",label:"Bender Bending Rodr\xedguez",description:"Fascinated with cooking, though has no sense of taste",content:"Bender Bending Rodr\xedguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend."},{id:"carol",image:"https://img.icons8.com/clouds/256/000000/futurama-mom.png",label:"Carol Miller",description:"One of the richest people on Earth",content:"Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series."},{id:"homer",image:"https://img.icons8.com/clouds/256/000000/homer-simpson.png",label:"Homer Simpson",description:"Overweight, lazy, and often ignorant",content:"Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson."}],e5=`
import { Group, Avatar, Text, Accordion } from '@mantine/core';

const charactersList = [
  {
    id: 'bender',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Bender Bending Rodr\xedguez',
    description: 'Fascinated with cooking, though has no sense of taste',
    content: "Bender Bending Rodr\xedguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },

  {
    id: 'carol',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    description: 'One of the richest people on Earth',
    content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
  },

  {
    id: 'homer',
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    label: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
    content: 'Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.',
  },
];

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

function AccordionLabel({ label, image, description }: AccordionLabelProps) {
  return (
    <Group wrap="nowrap">
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" c="dimmed" fw={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

function Demo() {
  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion chevronPosition="right" variant="contained">
      {items}
    </Accordion>
  );
}
`;function e8({label:e,image:n,description:o}){return c.createElement(eK.Z,{wrap:"nowrap"},c.createElement(eX.q,{src:n,radius:"xl",size:"lg"}),c.createElement("div",null,c.createElement(eY.x,null,e),c.createElement(eY.x,{size:"sm",c:"dimmed",fw:400},o)))}function e3(e){let n=e4.map(e=>c.createElement(eS.Item,{value:e.id,key:e.label},c.createElement(eS.Control,null,c.createElement(e8,e2({},e))),c.createElement(eS.Panel,null,c.createElement(eY.x,{size:"sm"},e.content))));return c.createElement(eS,e2({chevronPosition:"right",variant:"contained"},e),n)}let e6={type:"code",code:e5,component:function(){return c.createElement(e3,null)},maxWidth:540,centered:!0};var ne=o(85078),nn={chevron:"m-85bcba4",icon:"m-b7471fb0"};let no=`
import { IconPlus } from '@tabler/icons-react';
import { Accordion } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji} disabled={item.value === 'Bananas'}>
        {item.value}
      </Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion
      defaultValue="Apples"
      classNames={{ chevron: classes.chevron }}
      chevron={<IconPlus className={classes.icon} />}
    >
      {items}
    </Accordion>
  );
}
`,nt=`
.chevron {
  &[data-rotate] {
    transform: rotate(45deg);
  }
}

.icon {
  width: rem(16px);
  height: rem(16px);
}
`,nr={type:"code",component:function(){let e=eB.map(e=>c.createElement(eS.Item,{key:e.value,value:e.value},c.createElement(eS.Control,{icon:e.emoji},e.value),c.createElement(eS.Panel,null,e.description)));return c.createElement(eS,{defaultValue:"Apples",classNames:{chevron:nn.chevron},chevron:c.createElement(ne.Z,{className:nn.icon})},e)},code:[{fileName:"Demo.tsx",language:"tsx",code:no},{fileName:"Demo.module.css",code:nt,language:"scss"}],centered:!0,maxWidth:600};var na=o(60060),ni=o(65521),nc=o(59939);let nl=`
import { IconPhoto, IconPrinter, IconCameraSelfie } from '@tabler/icons-react';
import { Accordion, rem } from '@mantine/core';

function Demo() {
  return (
    <Accordion variant="contained">
      <Accordion.Item value="photos">
        <Accordion.Control
          icon={
            <IconPhoto
              style={{ color: 'var(--mantine-color-red-filled', width: rem(20), height: rem(20) }}
            />
          }
        >
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="print">
        <Accordion.Control
          icon={
            <IconPrinter
              style={{ color: 'var(--mantine-color-blue-filled', width: rem(20), height: rem(20) }}
            />
          }
        >
          Print photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="camera">
        <Accordion.Control
          icon={
            <IconCameraSelfie
              style={{ color: 'var(--mantine-color-teal-filled)', width: rem(20), height: rem(20) }}
            />
          }
        >
          Camera settings
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`,ns={type:"code",component:function(){return c.createElement(eS,{variant:"contained"},c.createElement(eS.Item,{value:"photos"},c.createElement(eS.Control,{icon:c.createElement(na.Z,{style:{color:"var(--mantine-color-red-filled",width:(0,d.h)(20),height:(0,d.h)(20)}})},"Recent photos"),c.createElement(eS.Panel,null,"Content")),c.createElement(eS.Item,{value:"print"},c.createElement(eS.Control,{icon:c.createElement(ni.Z,{style:{color:"var(--mantine-color-blue-filled",width:(0,d.h)(20),height:(0,d.h)(20)}})},"Print photos"),c.createElement(eS.Panel,null,"Content")),c.createElement(eS.Item,{value:"camera"},c.createElement(eS.Control,{icon:c.createElement(nc.Z,{style:{color:"var(--mantine-color-teal-filled)",width:(0,d.h)(20),height:(0,d.h)(20)}})},"Camera settings"),c.createElement(eS.Panel,null,"Content")))},code:nl,maxWidth:400,centered:!0},nd=e=>`
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion ${e}>
      {/* ...content */}
    </Accordion>
  )
}
`,nm={type:"code",component:()=>c.createElement(eV,{transitionDuration:0,maw:380,mx:"auto"}),code:nd("transitionDuration={0}")},nu={type:"code",component:()=>c.createElement(eV,{transitionDuration:1e3,maw:380,mx:"auto"}),code:nd("transitionDuration={1000}")};var np=o(56903),nf=o(4277),nh=o(3691),nv=Object.defineProperty,nb=Object.getOwnPropertySymbols,ny=Object.prototype.hasOwnProperty,ng=Object.prototype.propertyIsEnumerable,nA=(e,n,o)=>n in e?nv(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,nj=(e,n)=>{for(var o in n||(n={}))ny.call(n,o)&&nA(e,o,n[o]);if(nb)for(var o of nb(n))ng.call(n,o)&&nA(e,o,n[o]);return e};let nx=`
import { Accordion, ActionIcon, AccordionControlProps, Center } from '@mantine/core';
import { IconDots } from '@tabler/icons-react';

function AccordionControl(props: AccordionControlProps) {
  return (
    <Center>
      <Accordion.Control {...props} />
      <ActionIcon size="lg" variant="subtle" color="gray">
        <IconDots size="1rem" />
      </ActionIcon>
    </Center>
  );
}

function Demo() {
  return (
    <Accordion chevronPosition="left" maw={400} mx="auto">
      <Accordion.Item value="item-1">
        <AccordionControl>Control 1</AccordionControl>
        <Accordion.Panel>Panel 1</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <AccordionControl>Control 2</AccordionControl>
        <Accordion.Panel>Panel 2</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <AccordionControl>Control 3</AccordionControl>
        <Accordion.Panel>Panel 3</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`;function nw(e){return c.createElement(np.M,null,c.createElement(eS.Control,nj({},e)),c.createElement(nf.A,{size:"lg",variant:"subtle",color:"gray"},c.createElement(nh.Z,{size:"1rem"})))}let nP={type:"code",component:function(){return c.createElement(eS,{chevronPosition:"left",maw:400,mx:"auto"},c.createElement(eS.Item,{value:"item-1"},c.createElement(nw,null,"Control 1"),c.createElement(eS.Panel,null,"Panel 1")),c.createElement(eS.Item,{value:"item-2"},c.createElement(nw,null,"Control 2"),c.createElement(eS.Panel,null,"Panel 2")),c.createElement(eS.Item,{value:"item-3"},c.createElement(nw,null,"Control 3"),c.createElement(eS.Panel,null,"Panel 3")))},code:nx},nC=`
import { Accordion } from '@mantine/core';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji} disabled={item.value === 'Bananas'}>
        {item.value}
      </Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion maw={400} defaultValue="Apples">
      {items}
    </Accordion>
  );
}
`,nO={type:"code",component:function(){let e=eB.map(e=>c.createElement(eS.Item,{key:e.value,value:e.value},c.createElement(eS.Control,{icon:e.emoji,disabled:"Bananas"===e.value},e.value),c.createElement(eS.Panel,null,e.description)));return c.createElement(eS,{defaultValue:"Apples"},e)},code:nC,centered:!0,maxWidth:600},nE=`
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion unstyled>
      {/* ... Accordion items */}
    </Accordion>
  );
}
`,nI={type:"code",component:function(){return c.createElement(eV,{unstyled:!0})},code:nE};var nS=o(5435),nk=Object.defineProperty,nD=Object.getOwnPropertySymbols,nN=Object.prototype.hasOwnProperty,nM=Object.prototype.propertyIsEnumerable,nz=(e,n,o)=>n in e?nk(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,nR=(e,n)=>{for(var o in n||(n={}))nN.call(n,o)&&nz(e,o,n[o]);if(nD)for(var o of nD(n))nM.call(n,o)&&nz(e,o,n[o]);return e};let nB=`
import { Accordion } from '@mantine/core';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion defaultValue="Apples" order={2}{{props}}>
      {items}
    </Accordion>
  );
}
`,nT={type:"styles-api",data:nS.x,component:function(e){let n=eB.map(e=>c.createElement(eS.Item,{key:e.value,value:e.value},c.createElement(eS.Control,{icon:e.emoji},e.value),c.createElement(eS.Panel,null,e.description)));return c.createElement(eS,nR({defaultValue:"Apples",order:2},e),n)},centered:!0,maxWidth:"100%",code:nB};var nV={root:"m-333cc5d1",item:"m-3338c002",chevron:"m-67366eec"};let nZ=`
import { Accordion } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion maw={400} defaultValue="Apples">
      {items}
    </Accordion>
  );
}
`,nF=`.root {
  border-radius: var(--mantine-radius-sm);
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
}

.item {
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  border: rem(1px) solid transparent;
  position: relative;
  z-index: 0;
  transition: transform 150ms ease;

  &[data-active] {
    transform: scale(1.03);
    z-index: 1;
    background-color: var(--mantine-color-body);
    border-color: light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-4));
    box-shadow: var(--mantine-shadow-md);
    border-radius: var(--mantine-radius-md);
  }
}

.chevron {
  &[data-rotate] {
    transform: rotate(-90deg);
  }
}
`,nH={type:"code",component:function(){let e=eB.map(e=>c.createElement(eS.Item,{key:e.value,value:e.value},c.createElement(eS.Control,{icon:e.emoji},e.value),c.createElement(eS.Panel,null,e.description)));return c.createElement(eS,{defaultValue:"Apples",classNames:nV,variant:"filled"},e)},code:[{fileName:"Demo.tsx",language:"tsx",code:nZ},{fileName:"Demo.module.css",code:nF,language:"scss"}],centered:!0,maxWidth:500},nL=(0,a.A)(i.us.Accordion);function nW(e){let n=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a",ul:"ul",li:"li"},(0,r.ah)(),e.components),{Demo:o,StylesApiSelectors:a,KeyboardEventsTable:i}=n;return o||nG("Demo",!0),i||nG("KeyboardEventsTable",!0),a||nG("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"Data used in Accordion examples:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const groceries = [\n  {\n    emoji: '\uD83C\uDF4E',\n    value: 'Apples',\n    description:\n      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',\n  },\n  {\n    emoji: '\uD83C\uDF4C',\n    value: 'Bananas',\n    description:\n      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',\n  },\n  {\n    emoji: '\uD83E\uDD66',\n    value: 'Broccoli',\n    description:\n      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',\n  },\n];\n"})}),"\n",(0,t.jsx)(o,{data:eJ}),"\n",(0,t.jsx)(n.h2,{id:"custom-control-label",children:"Custom control label"}),"\n",(0,t.jsx)(o,{data:e6}),"\n",(0,t.jsx)(n.h2,{id:"change-chevron",children:"Change chevron"}),"\n",(0,t.jsx)(o,{data:nr}),"\n",(0,t.jsx)(n.h2,{id:"with-icons",children:"With icons"}),"\n",(0,t.jsx)(o,{data:ns}),"\n",(0,t.jsx)(n.h2,{id:"change-transition",children:"Change transition"}),"\n",(0,t.jsxs)(n.p,{children:["To change transition duration, set ",(0,t.jsx)(n.code,{children:"transitionDuration"})," prop:"]}),"\n",(0,t.jsx)(o,{data:nu}),"\n",(0,t.jsxs)(n.p,{children:["To disable transitions, set ",(0,t.jsx)(n.code,{children:"transitionDuration"})," to 0:"]}),"\n",(0,t.jsx)(o,{data:nm}),"\n",(0,t.jsx)(n.h2,{id:"default-opened-items",children:"Default opened items"}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"multiple={false}"}),", set ",(0,t.jsx)(n.code,{children:"defaultValue"})," as string:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Accordion } from \'@mantine/core\';\n\nfunction Demo() {\n  // Second item will be opened by default\n  return (\n    <Accordion defaultValue="item-2">\n      <Accordion.Item value="item-1">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value="item-2">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"multiple={true}"}),", set ",(0,t.jsx)(n.code,{children:"defaultValue"})," as an array of strings:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  // Both items will be opened by default\n  return (\n    <Accordion multiple defaultValue={['item-1', 'item-2']}>\n      <Accordion.Item value=\"item-1\">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value=\"item-2\">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"control-state",children:"Control state"}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"multiple={false}"}),", set ",(0,t.jsx)(n.code,{children:"value"})," as string:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string | null>(null);\n\n  return (\n    <Accordion value={value} onChange={setValue}>\n      <Accordion.Item value=\"item-1\">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value=\"item-2\">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"multiple={true}"}),", set ",(0,t.jsx)(n.code,{children:"value"})," as an array of strings:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Accordion multiple value={value} onChange={setValue}>\n      <Accordion.Item value=\"item-1\">\n        <Accordion.Control>control-1</Accordion.Control>\n        <Accordion.Panel>panel-1</Accordion.Panel>\n      </Accordion.Item>\n\n      <Accordion.Item value=\"item-2\">\n        <Accordion.Control>control-2</Accordion.Control>\n        <Accordion.Panel>panel-2</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"compose-controls",children:"Compose controls"}),"\n",(0,t.jsxs)(n.p,{children:["You can add any additional elements that will be displayed next to ",(0,t.jsx)(n.code,{children:"Accordion.Control"}),",\nfor example, you can add ",(0,t.jsx)(n.a,{href:"/core/action-icon/",children:"ActionIcon"})," or ",(0,t.jsx)(n.a,{href:"/core/menu/",children:"Menu"}),":"]}),"\n",(0,t.jsx)(o,{data:nP}),"\n",(0,t.jsx)(n.h2,{id:"disabled-items",children:"Disabled items"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"disabled"})," prop on ",(0,t.jsx)(n.code,{children:"Accordion.Control"})," component to disable it.\nDisabled items cannot be activated with mouse or keyboard, will be skipped when user navigates with arrow keys:"]}),"\n",(0,t.jsx)(o,{data:nO}),"\n",(0,t.jsx)(n.h2,{id:"unstyled-accordion",children:"Unstyled Accordion"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"unstyled"})," prop on Accordion component to remove all non-essential library styles.\nIt can be used to style component with ",(0,t.jsx)(n.a,{href:"/styles/styles-api/",children:"Styles API"})," without overriding any styles."]}),"\n",(0,t.jsx)(o,{data:nI}),"\n",(0,t.jsx)(a,{component:"Accordion"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.a,{href:"/styles/styles-api/",children:"Styles API"})," to customize Accordion styles:"]}),"\n",(0,t.jsx)(o,{data:nT}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.a,{href:"/styles/styles-api/",children:"Styles API"})," to customize Accordion styles:"]}),"\n",(0,t.jsx)(o,{data:nH}),"\n",(0,t.jsx)(n.h2,{id:"data-attributes",children:"Data attributes"}),"\n",(0,t.jsxs)(n.p,{children:["Accordion elements have ",(0,t.jsx)(n.code,{children:"data-"})," attributes that can be used with ",(0,t.jsx)(n.a,{href:"/styles/styles-api/",children:"Styles API"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data-active"})," attribute is added to ",(0,t.jsx)(n.code,{children:"Accordion.Item"})," root element when associated panel is expanded"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data-rotate"})," attribute is added to chevron icon when icon should rotate (controlled by ",(0,t.jsx)(n.code,{children:"disableChevronRotation"})," and expanded state of associated panel)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Accordion, rem } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Accordion\n      styles={{\n        item: {\n          // styles added to all items\n          backgroundColor: '#fff',\n          border: `${rem(1)} solid #ededed`,\n\n          // styles added to expanded item\n          '&[data-active]': {\n            backgroundColor: '#ccc',\n          },\n        },\n\n        chevron: {\n          // styles added to chevron when it should rotate\n          '&[data-rotate]': {\n            transform: 'rotate(-90deg)',\n          },\n        },\n      }}\n    >\n      {/* ... Accordion items */}\n    </Accordion>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"typescript",children:"TypeScript"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"AccordionProps"})," type exported from ",(0,t.jsx)(n.code,{children:"@mantine/core"})," is a generic, it accepts boolean type that\ndescribes ",(0,t.jsx)(n.code,{children:"multiple"})," state:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import type { AccordionProps } from '@mantine/core';\n\ntype MultipleAccordionProps = AccordionProps<true>;\ntype DefaultAccordionProps = AccordionProps<false>;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(n.p,{children:["Accordion component follows ",(0,t.jsx)(n.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"order"})," on ",(0,t.jsx)(n.code,{children:"Accordion"})," component to wrap accordion controls with h2-h6 heading.\nThe following example will wrap controls with h3 tag:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Accordion } from '@mantine/core';\n\nfunction Demo() {\n  return <Accordion order={3}>{/* ...items */}</Accordion>;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Keyboard interactions:"}),"\n",(0,t.jsx)(i,{data:[{key:"ArrowDown",description:"Moves focus to next item"},{key:"ArrowUp",description:"Moves focus to previous item"},{key:"Home",description:"Moves focus to first item"},{key:"End",description:"Moves focus to last item"},{key:"Space/Enter",description:"Toggles focused item opened state"}]})]})}var n_=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(nL,Object.assign({},e,{children:(0,t.jsx)(nW,e)}))};function nG(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},47914:function(e,n,o){"use strict";o.d(n,{q:function(){return $}});var t=o(67294);let r=(0,t.createContext)(null),a=r.Provider;var i={root:"m-f85678b6",image:"m-11f8ac07",placeholder:"m-104cd71f",group:"m-11def92b"},c=o(75144),l=o(35577),s=o(25637),d=o(13671),m=o(95553),u=o(71350),p=Object.defineProperty,f=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,b=(e,n,o)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,y=(e,n)=>{for(var o in n||(n={}))h.call(n,o)&&b(e,o,n[o]);if(f)for(var o of f(n))v.call(n,o)&&b(e,o,n[o]);return e},g=(e,n)=>{var o={};for(var t in e)h.call(e,t)&&0>n.indexOf(t)&&(o[t]=e[t]);if(null!=e&&f)for(var t of f(e))0>n.indexOf(t)&&v.call(e,t)&&(o[t]=e[t]);return o};let A={spacing:"sm"},j=(0,m.Z)((e,{spacing:n})=>({group:{"--ag-spacing":(0,u.bG)(n)}})),x=(0,c.d)((e,n)=>{let o=(0,l.w)("AvatarGroup",A,e),{classNames:r,className:c,style:m,styles:u,unstyled:p,vars:f,spacing:h}=o,v=g(o,["classNames","className","style","styles","unstyled","vars","spacing"]),b=(0,s.y)({name:"AvatarGroup",classes:i,props:o,className:c,style:m,classNames:r,styles:u,unstyled:p,vars:f,varsResolver:j,rootSelector:"group"});return t.createElement(a,{value:!0},t.createElement(d.x,y(y({ref:n},b("group")),v)))});x.classes=i,x.displayName="@mantine/core/AvatarGroup";var w=Object.defineProperty,P=Object.defineProperties,C=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,S=(e,n,o)=>n in e?w(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,k=(e,n)=>{for(var o in n||(n={}))E.call(n,o)&&S(e,o,n[o]);if(O)for(var o of O(n))I.call(n,o)&&S(e,o,n[o]);return e},D=(e,n)=>P(e,C(n));function N(e){return t.createElement("svg",D(k({},e),{"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}),t.createElement("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var M=o(70656),z=Object.defineProperty,R=Object.defineProperties,B=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,F=(e,n,o)=>n in e?z(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,H=(e,n)=>{for(var o in n||(n={}))V.call(n,o)&&F(e,o,n[o]);if(T)for(var o of T(n))Z.call(n,o)&&F(e,o,n[o]);return e},L=(e,n)=>R(e,B(n)),W=(e,n)=>{var o={};for(var t in e)V.call(e,t)&&0>n.indexOf(t)&&(o[t]=e[t]);if(null!=e&&T)for(var t of T(e))0>n.indexOf(t)&&Z.call(e,t)&&(o[t]=e[t]);return o};let _={size:"md",radius:"100%",color:"gray",variant:"light"},G=(0,m.Z)((e,{size:n,radius:o,variant:t,gradient:r,color:a})=>{let i=e.variantColorResolver({color:a||e.primaryColor,theme:e,gradient:r,variant:t});return{root:{"--avatar-size":(0,u.ap)(n,"avatar-size"),"--avatar-radius":(0,u.H5)(o),"--avatar-bg":i.background,"--avatar-color":i.color,"--avatar-bd":i.border}}}),$=(0,M.b)((e,n)=>{let o=(0,l.w)("Avatar",_,e),{classNames:a,className:c,style:m,styles:u,unstyled:p,vars:f,src:h,alt:v,radius:b,color:y,gradient:g,imageProps:A,children:j}=o,x=W(o,["classNames","className","style","styles","unstyled","vars","src","alt","radius","color","gradient","imageProps","children"]),w=function(){let e=(0,t.useContext)(r);return{withinGroup:!!e}}(),[P,C]=(0,t.useState)(!h),O=(0,s.y)({name:"Avatar",props:o,classes:i,className:c,style:m,classNames:a,styles:u,unstyled:p,vars:f,varsResolver:G});return(0,t.useEffect)(()=>C(!h),[h]),t.createElement(d.x,H(L(H({},O("root")),{mod:{"within-group":w.withinGroup},ref:n}),x),P?t.createElement("span",L(H({},O("placeholder")),{title:v}),j||t.createElement(N,null)):t.createElement("img",L(H(H({},A),O("image")),{src:h,alt:v,onError:e=>{var n;C(!0),null==(n=null==A?void 0:A.onError)||n.call(A,e)}})))});$.classes=i,$.displayName="@mantine/core/Avatar",$.Group=x},56903:function(e,n,o){"use strict";o.d(n,{M:function(){return g}});var t=o(67294),r={root:"m-4451eb3a"},a=o(70656),i=o(35577),c=o(25637),l=o(13671),s=o(95553),d=Object.defineProperty,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,n,o)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,h=(e,n)=>{for(var o in n||(n={}))u.call(n,o)&&f(e,o,n[o]);if(m)for(var o of m(n))p.call(n,o)&&f(e,o,n[o]);return e},v=(e,n)=>{var o={};for(var t in e)u.call(e,t)&&0>n.indexOf(t)&&(o[t]=e[t]);if(null!=e&&m)for(var t of m(e))0>n.indexOf(t)&&p.call(e,t)&&(o[t]=e[t]);return o};let b={},y=(0,s.Z)((e,{inline:n})=>({root:{"--center-display":n?"inline-flex":"flex"}})),g=(0,a.b)((e,n)=>{let o=(0,i.w)("Center",b,e),{classNames:a,className:s,style:d,styles:m,unstyled:u,vars:p,inline:f}=o,g=v(o,["classNames","className","style","styles","unstyled","vars","inline"]),A=(0,c.y)({name:"Center",props:o,classes:r,className:s,style:d,classNames:a,styles:m,unstyled:u,vars:p,varsResolver:y});return t.createElement(l.x,h(h({ref:n},A("root")),g))});g.classes=r,g.displayName="@mantine/core/Center"},25716:function(e,n,o){"use strict";o.d(n,{U:function(){return N}});var t=o(67294),r=o(56763),a=o(73935),i=o(9045),c=o(382),l=Object.defineProperty,s=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,n,o)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,h=(e,n)=>{for(var o in n||(n={}))u.call(n,o)&&f(e,o,n[o]);if(m)for(var o of m(n))p.call(n,o)&&f(e,o,n[o]);return e},v=(e,n)=>s(e,d(n)),b=(e,n)=>{var o={};for(var t in e)u.call(e,t)&&0>n.indexOf(t)&&(o[t]=e[t]);if(null!=e&&m)for(var t of m(e))0>n.indexOf(t)&&p.call(e,t)&&(o[t]=e[t]);return o};function y(e){return(null==e?void 0:e.current)?e.current.scrollHeight:"auto"}let g="undefined"!=typeof window&&window.requestAnimationFrame;var A=o(49441),j=o(83422),x=o(35577),w=o(13671),P=Object.defineProperty,C=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,I=(e,n,o)=>n in e?P(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,S=(e,n)=>{for(var o in n||(n={}))O.call(n,o)&&I(e,o,n[o]);if(C)for(var o of C(n))E.call(n,o)&&I(e,o,n[o]);return e},k=(e,n)=>{var o={};for(var t in e)O.call(e,t)&&0>n.indexOf(t)&&(o[t]=e[t]);if(null!=e&&C)for(var t of C(e))0>n.indexOf(t)&&E.call(e,t)&&(o[t]=e[t]);return o};let D={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},N=(0,t.forwardRef)((e,n)=>{let o=(0,x.w)("Collapse",D,e),{children:l,in:s,transitionDuration:d,transitionTimingFunction:m,style:u,onTransitionEnd:p,animateOpacity:f}=o,P=k(o,["children","in","transitionDuration","transitionTimingFunction","style","onTransitionEnd","animateOpacity"]),C=(0,A.rZ)(),O=(0,r.J)(),E=!!C.respectReducedMotion&&O,I=E?0:d,N=function({transitionDuration:e,transitionTimingFunction:n="ease",onTransitionEnd:o=()=>{},opened:r}){let l=(0,t.useRef)(null),s={display:"none",height:0,overflow:"hidden"},[d,m]=(0,t.useState)(r?{}:s),u=e=>{(0,a.flushSync)(()=>m(e))},p=e=>{u(n=>h(h({},n),e))};function f(o){let t=e||function(e){if(!e||"string"==typeof e)return 0;let n=e/36;return Math.round((4+15*n**.25+n/5)*10)}(o);return{transition:`height ${t}ms ${n}`}}(0,i.l)(()=>{"function"==typeof g&&(r?g(()=>{p({willChange:"height",display:"block",overflow:"hidden"}),g(()=>{let e=y(l);p(v(h({},f(e)),{height:e}))})}):g(()=>{let e=y(l);p(v(h({},f(e)),{willChange:"height",height:e})),g(()=>p({height:0,overflow:"hidden"}))}))},[r]);let A=e=>{if(e.target===l.current&&"height"===e.propertyName){if(r){let e=y(l);e===d.height?u({}):p({height:e}),o()}else 0===d.height&&(u(s),o())}};return function(e={}){var{style:n={},refKey:o="ref"}=e,t=b(e,["style","refKey"]);let a=t[o];return v(h({"aria-hidden":!r},t),{[o]:(0,c.lq)(l,a),onTransitionEnd:A,style:h(h({boxSizing:"border-box"},n),d)})}}({opened:s,transitionDuration:I,transitionTimingFunction:m,onTransitionEnd:p});return 0===I?s?t.createElement(w.x,S({},P),l):null:t.createElement(w.x,S({},N(S({style:(0,j.c)(u,C),ref:n},P))),t.createElement("div",{style:{opacity:s||!f?1:0,transition:f?`opacity ${I}ms ${m}`:"none"}},l))});N.displayName="@mantine/core/Collapse"}},function(e){e.O(0,[3462,2411,7437,9774,2888,179],function(){return e(e.s=64877)}),_N_E=e.O()}]);