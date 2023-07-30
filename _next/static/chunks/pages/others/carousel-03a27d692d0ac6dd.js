(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[148],{50404:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/others/carousel",function(){return o(47777)}])},47777:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return eG}});var a=o(85893),r=o(11151),i=o(34940),l=o(34200),n=o(67294),s=o(10036),c=o(17801);let u=`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel withIndicators height={200}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,d={type:"code",component:function(){return n.createElement(s.l,{withIndicators:!0,height:200},n.createElement(c.M,{count:5}))},code:u,centered:!0,maxWidth:320};var m=Object.defineProperty,h=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(e,t,o)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,x=(e,t)=>{for(var o in t||(t={}))p.call(t,o)&&g(e,o,t[o]);if(h)for(var o of h(t))f.call(t,o)&&g(e,o,t[o]);return e};let b=`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel slideSize="70%" height={200}{{props}}>
      {/* ...slides */}
    </Carousel>
  );
}
`,w={type:"configurator",component:function(e){return n.createElement(s.l,x({height:200,slideSize:"70%"},e),n.createElement(c.M,{count:5}))},code:b,centered:!0,maxWidth:"100%",controls:[{prop:"align",type:"segmented",initialValue:"center",libraryValue:"center",data:[{label:"Start",value:"start"},{label:"Center",value:"center"},{label:"End",value:"end"}]},{prop:"orientation",type:"segmented",initialValue:"horizontal",libraryValue:"horizontal",data:[{label:"Horizontal",value:"horizontal"},{label:"Vertical",value:"vertical"}]},{prop:"slideGap",type:"size",initialValue:"md",libraryValue:"__"},{prop:"controlsOffset",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"controlSize",type:"number",min:14,max:40,initialValue:26,libraryValue:26},{prop:"loop",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"dragFree",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"draggable",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withControls",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withIndicators",type:"boolean",initialValue:!1,libraryValue:!1}]},y=`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={3}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,C={type:"code",component:function(){return n.createElement(s.l,{withIndicators:!0,height:200,slideSize:"33.333333%",slideGap:"md",loop:!0,align:"start",slidesToScroll:3},n.createElement(c.M,{count:12}))},code:y};var S=o(29926);let j=`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel withIndicators height={200} dragFree slideGap="md" align="start">
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,v={type:"code",component:function(){return n.createElement(s.l,{withIndicators:!0,height:200,dragFree:!0,slideGap:"md",align:"start"},n.createElement(c.M,{count:5}))},code:j,centered:!0,maxWidth:320},E=`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel orientation="vertical" height={200} withIndicators>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,M={type:"code",component:function(){return n.createElement(s.l,{orientation:"vertical",height:200,withIndicators:!0},n.createElement(c.M,{count:5}))},code:E,centered:!0,maxWidth:320};var D=o(46393),I=o(4687),O=o(87393);let H=`
import { rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

function Demo() {
  return (
    <Carousel
      height={180}
      nextControlIcon={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
      previousControlIcon={<IconArrowLeft style={{ width: rem(16), height: rem(16) }} />}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,N={type:"code",component:function(){return n.createElement(s.l,{height:180,nextControlIcon:n.createElement(I.Z,{style:{width:(0,D.h)(16),height:(0,D.h)(16)}}),previousControlIcon:n.createElement(O.Z,{style:{width:(0,D.h)(16),height:(0,D.h)(16)}})},n.createElement(c.M,{count:5}))},code:H,centered:!0,maxWidth:320};var A=o(69794);let B=`
import { useCallback, useEffect, useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';
import { Progress } from '@mantine/core';

function Demo() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <>
      <Carousel
        dragFree
        slideSize="50%"
        slideGap="md"
        height={200}
        getEmblaApi={setEmbla}
        initialSlide={2}
      >
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
      <Progress
        value={scrollProgress}
        maw={320}
        size="sm"
        mt="xl"
        mx="auto"
      />
    </>
  );
}
`,k={type:"code",component:function(){let[e,t]=(0,n.useState)(0),[o,a]=(0,n.useState)(null),r=(0,n.useCallback)(()=>{if(!o)return;let e=Math.max(0,Math.min(1,o.scrollProgress()));t(100*e)},[o,t]);return(0,n.useEffect)(()=>{o&&(o.on("scroll",r),r())},[o]),n.createElement(n.Fragment,null,n.createElement(s.l,{dragFree:!0,slideSize:"50%",slideGap:"md",height:200,getEmblaApi:a,initialSlide:2},n.createElement(c.M,{count:12})),n.createElement(A.E,{value:e,maw:320,size:"sm",mt:"xl",mx:"auto"}))},code:B};var G=o(306),V=o.n(G);let z=`
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';

function Demo() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      withIndicators
      height={200}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,T={type:"code",component:function(){let e=(0,n.useRef)(V()({delay:2e3}));return n.createElement(s.l,{withIndicators:!0,height:200,plugins:[e.current],onMouseEnter:e.current.stop,onMouseLeave:e.current.reset},n.createElement(c.M,{count:5}))},code:z,centered:!0,maxWidth:320};var P=o(44085),W=Object.defineProperty,F=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,_=(e,t,o)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,q=(e,t)=>{for(var o in t||(t={}))R.call(t,o)&&_(e,o,t[o]);if(F)for(var o of F(t))Y.call(t,o)&&_(e,o,t[o]);return e};let U=`
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel withIndicators height={200}{{props}}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
    </Carousel>
  );
}
`,L={type:"styles-api",data:P.J,component:function(e){return n.createElement(s.l,q({withIndicators:!0,height:200},e),n.createElement(c.M,{count:2}))},code:U,centered:!0,maxWidth:"100%"};var Z={indicator:"m-4fe518f6"};let $=`
.indicator {
  width: rem(12px);
  height: rem(4px);
  transition: width 250ms ease;

  &[data-active] {
    width: rem(40px);
  }
}`,X=`
import { Carousel } from '@mantine/carousel';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Carousel withIndicators height={200} classNames={classes}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,Q={type:"code",component:function(){return n.createElement(s.l,{withIndicators:!0,height:200,classNames:Z},n.createElement(c.M,{count:5}))},code:[{fileName:"Demo.tsx",code:X,language:"tsx"},{fileName:"Demo.module.css",code:$,language:"scss"}],centered:!0,maxWidth:320};var J={control:"m-bf2c70c5"};let K=`
.control {
  &[data-inactive] {
    opacity: 0;
    cursor: default;
  }
}
`,ee=`
import { Carousel } from '@mantine/carousel';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Carousel height={200} classNames={classes}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,et={type:"code",component:function(){return n.createElement(s.l,{height:200,classNames:J},n.createElement(c.M,{count:5}))},code:[{fileName:"Demo.tsx",code:ee,language:"tsx"},{fileName:"Demo.module.css",code:K,language:"scss"}],centered:!0,maxWidth:320};var eo={controls:"m-78ad357a",root:"m-f45b71a6"};let ea=`.controls {
  transition: opacity 150ms ease;
  opacity: 0;
}

.root {
  &:hover {
    .controls {
      opacity: 1;
    }
  }
}`,er=`
import { Carousel } from '@mantine/carousel';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Carousel height={200} classNames={classes}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`,ei={type:"code",component:function(){return n.createElement(s.l,{height:200,classNames:eo},n.createElement(c.M,{count:5}))},code:[{fileName:"Demo.tsx",code:er,language:"tsx"},{fileName:"Demo.module.css",code:ea,language:"scss"}],centered:!0,maxWidth:320};var el=o(42249);let en=["https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80","https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80","https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80","https://images.unsplash.com/photo-1562176566-73c303ac1617?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80","https://images.unsplash.com/photo-1579698374511-6017bd6db7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"],es=`
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const images = [/* ... urls of images */];

function Demo() {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return <Carousel withIndicators>{slides}</Carousel>;
}
`,ec={type:"code",component:function(){let e=en.map(e=>n.createElement(s.l.Slide,{key:e},n.createElement(el.E,{src:e})));return n.createElement(s.l,{withIndicators:!0},e)},code:es,maxWidth:320,centered:!0};var eu=o(18248),ed=o(54777),em=o(77048),eh=o(73459),ep=o(55899),ef=o(49441),eg={card:"m-819023b7",title:"m-b1678e91",category:"m-3481ba25"},ex=Object.defineProperty,eb=Object.getOwnPropertySymbols,ew=Object.prototype.hasOwnProperty,ey=Object.prototype.propertyIsEnumerable,eC=(e,t,o)=>t in e?ex(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,eS=(e,t)=>{for(var o in t||(t={}))ew.call(t,o)&&eC(e,o,t[o]);if(eb)for(var o of eb(t))ey.call(t,o)&&eC(e,o,t[o]);return e};let ej=`.card {
  height: rem(440px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-size: cover;
  background-position: center;
}

.title {
  font-weight: 900;
  color: var(--mantine-color-white);
  line-height: 1.2;
  font-size: rem(32px);
  margin-top: var(--mantine-spacing-xs);
}

.category {
  color: var(--mantine-color-white);
  opacity: 0.7;
  font-weight: 700;
  text-transform: uppercase;
}
`,ev=`
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Button, Paper, Title, useMantineTheme, Text } from '@mantine/core';
import classes from './Demo.module.css';

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
];

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: \`url(\${image})\` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

function Demo() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(\`(max-width: \${theme.breakpoints.sm})\`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: 'xl', sm: 2 }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
`,eE=[{image:"https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Best forests to visit in North America",category:"nature"},{image:"https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Hawaii beaches review: better than you think",category:"beach"},{image:"https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Mountains at night: 12 best locations to enjoy the view",category:"nature"},{image:"https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Aurora in Norway: when to visit for best experience",category:"nature"},{image:"https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Best places to visit this winter",category:"tourism"},{image:"https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",title:"Active volcanos reviews: travel at your own risk",category:"nature"}];function eM({image:e,title:t,category:o}){return n.createElement(ed.X,{shadow:"md",p:"xl",radius:"md",style:{backgroundImage:`url(${e})`},className:eg.card},n.createElement("div",null,n.createElement(em.x,{className:eg.category,size:"xs"},o),n.createElement(eh.D,{order:3,className:eg.title},t)),n.createElement(ep.z,{variant:"white",color:"dark"},"Read article"))}let eD={type:"code",component:function(e){let t=(0,ef.rZ)(),o=(0,eu.a)(`(max-width: ${t.breakpoints.sm})`),a=eE.map(e=>n.createElement(s.l.Slide,{key:e.title},n.createElement(eM,eS({},e))));return n.createElement(s.l,eS({slideSize:{base:"100%",sm:"50%"},slideGap:{base:"xl",sm:2},align:"start",slidesToScroll:o?1:2},e),a)},code:[{fileName:"Demo.tsx",code:ev,language:"tsx"},{fileName:"Demo.module.css",code:ej,language:"scss"}]};var eI=o(31017);let eO=`
import { useState } from 'react';
import { Button, Modal, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

function Demo() {
  const TRANSITION_DURATION = 200;
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open carousel with broken offset</Button>
      <Modal
        opened={opened}
        size={300}
        padding={0}
        transitionProps={{ duration: TRANSITION_DURATION }}
        withCloseButton={false}
        onClose={() => setOpened(false)}
      >
        <Carousel loop maw={300}>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/cute"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/angry"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
        </Carousel>
      </Modal>
    </>
  );
}
`,eH={type:"code",component:function(){let[e,t]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement(ep.z,{onClick:()=>t(!0)},"Open carousel with broken offset"),n.createElement(eI.u,{opened:e,size:300,padding:0,transitionProps:{duration:200},withCloseButton:!1,onClose:()=>t(!1)},n.createElement(s.l,{loop:!0,maw:300},n.createElement(s.l.Slide,null,n.createElement("img",{src:"https://cataas.com/cat",alt:"",style:{width:(0,D.h)(300),height:(0,D.h)(200),objectFit:"cover"}})),n.createElement(s.l.Slide,null,n.createElement("img",{src:"https://cataas.com/cat/cute",alt:"",style:{width:(0,D.h)(300),height:(0,D.h)(200),objectFit:"cover"}})),n.createElement(s.l.Slide,null,n.createElement("img",{src:"https://cataas.com/cat/angry",alt:"",style:{width:(0,D.h)(300),height:(0,D.h)(200),objectFit:"cover"}})))))},code:eO,centered:!0},eN=`
import { useState } from 'react';
import { Button, Modal, rem } from '@mantine/core';
import { Carousel, useAnimationOffsetEffect } from '@mantine/carousel';

function Demo() {
  const TRANSITION_DURATION = 200;
  const [opened, setOpened] = useState(false);
  const [embla, setEmbla] = useState<Embla | null>(null);

  useAnimationOffsetEffect(embla, TRANSITION_DURATION);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open modal with carousel</Button>
      <Modal
        opened={opened}
        size={300}
        padding={0}
        transitionProps={{ duration: TRANSITION_DURATION }}
        withCloseButton={false}
        onClose={() => setOpened(false)}
      >
        <Carousel loop getEmblaApi={setEmbla} maw={300}>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/cute"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/angry"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
        </Carousel>
      </Modal>
    </>
  );
}
`,eA={type:"code",component:function(){let[e,t]=(0,n.useState)(!1),[o,a]=(0,n.useState)(null);return(0,n.useEffect)(()=>{o&&window.setTimeout(()=>{o.reInit()},200)},[o,200]),n.createElement(n.Fragment,null,n.createElement(ep.z,{onClick:()=>t(!0)},"Open modal with carousel"),n.createElement(eI.u,{opened:e,size:300,padding:0,transitionProps:{duration:200},withCloseButton:!1,onClose:()=>t(!1)},n.createElement(s.l,{loop:!0,getEmblaApi:a,maw:300},n.createElement(s.l.Slide,null,n.createElement("img",{src:"https://cataas.com/cat",alt:"Cat",style:{width:(0,D.h)(300),height:(0,D.h)(200),objectFit:"cover"}})),n.createElement(s.l.Slide,null,n.createElement("img",{src:"https://cataas.com/cat/cute",alt:"Cat",style:{width:(0,D.h)(300),height:(0,D.h)(200),objectFit:"cover"}})),n.createElement(s.l.Slide,null,n.createElement("img",{src:"https://cataas.com/cat/angry",alt:"Cat",style:{width:(0,D.h)(300),height:(0,D.h)(200),objectFit:"cover"}})))))},code:eN,centered:!0},eB=(0,i.A)(l.us.Carousel);function ek(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",ul:"ul",li:"li",pre:"pre"},(0,r.ah)(),e.components),{InstallScript:o,Demo:i,StylesApiSelectors:l}=t;return i||eV("Demo",!0),o||eV("InstallScript",!0),l||eV("StylesApiSelectors",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(o,{packages:"embla-carousel-react @mantine/carousel"}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"@mantine/carousel"})," package is based on ",(0,a.jsx)(t.a,{href:"https://www.embla-carousel.com/",children:"embla carousel"}),",\nit supports most of its features:"]}),"\n",(0,a.jsx)(i,{data:d}),"\n",(0,a.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,a.jsx)(i,{data:w}),"\n",(0,a.jsx)(t.h2,{id:"size-and-gap",children:"Size and gap"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"slideSize"})," and ",(0,a.jsx)(t.code,{children:"slideGap"})," on ",(0,a.jsx)(t.code,{children:"Carousel"})," component to control size and gap of every slide:"]}),"\n",(0,a.jsx)(i,{data:C}),"\n",(0,a.jsx)(t.h2,{id:"responsive-styles",children:"Responsive styles"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"slideSize"})," and ",(0,a.jsx)(t.code,{children:"slideGap"})," props work the same way as ",(0,a.jsx)(t.a,{href:"/styles/style-props/",children:"style props"}),",\nyou can pass an object with values for different breakpoints:"]}),"\n",(0,a.jsx)(i,{data:S.A}),"\n",(0,a.jsx)(t.h2,{id:"drag-free",children:"Drag free"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"dragFree"})," will disable slides snap points – user will be able to stop dragging at any position:"]}),"\n",(0,a.jsx)(i,{data:v}),"\n",(0,a.jsx)(t.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,a.jsxs)(t.p,{children:["Carousel with ",(0,a.jsx)(t.code,{children:'orientation="vertical"'})," requires ",(0,a.jsx)(t.code,{children:"height"})," prop to be set:"]}),"\n",(0,a.jsx)(i,{data:M}),"\n",(0,a.jsx)(t.h2,{id:"controls-icons",children:"Controls icons"}),"\n",(0,a.jsx)(t.p,{children:"You can replace default next/previous controls icons with any React nodes:"}),"\n",(0,a.jsx)(i,{data:N}),"\n",(0,a.jsx)(t.h2,{id:"100-height",children:"100% height"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:'height="100%"'})," to make Carousel take 100% height of the container. Note that in this case:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["container element must have ",(0,a.jsx)(t.code,{children:"display: flex"})," styles"]}),"\n",(0,a.jsxs)(t.li,{children:["carousel root element must have ",(0,a.jsx)(t.code,{children:"flex: 1"})," styles"]}),"\n",(0,a.jsx)(t.li,{children:"container element must have fixed height"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { Carousel } from '@mantine/carousel';\n\nexport function PercentageHeight() {\n  return (\n    <div style={{ height: 400, display: 'flex' }}>\n      <Carousel withIndicators height=\"100%\" style={{ flex: 1 }}>\n        <Carousel.Slide>1</Carousel.Slide>\n        <Carousel.Slide>2</Carousel.Slide>\n        <Carousel.Slide>3</Carousel.Slide>\n      </Carousel>\n    </div>\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"get-embla-instance",children:"Get embla instance"}),"\n",(0,a.jsxs)(t.p,{children:["You can get ",(0,a.jsx)(t.a,{href:"https://www.embla-carousel.com/api/methods/",children:"embla instance"})," with ",(0,a.jsx)(t.code,{children:"getEmblaApi"})," prop.\nYou will be able enhance carousel with additional logic after that using embla api methods:"]}),"\n",(0,a.jsx)(i,{data:k}),"\n",(0,a.jsx)(t.h2,{id:"embla-plugins",children:"Embla plugins"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"plugins"})," prop to enhance carousel with ",(0,a.jsx)(t.a,{href:"https://www.embla-carousel.com/plugins/",children:"embla plugins"}),".\nNote that plugins are not installed with ",(0,a.jsx)(t.code,{children:"@mantine/carousel"})," package and you will need to\ninstall them on your side."]}),"\n",(0,a.jsxs)(t.p,{children:["Example with ",(0,a.jsx)(t.a,{href:"https://www.embla-carousel.com/plugins/autoplay/",children:"autoplay plugin"}),":"]}),"\n",(0,a.jsx)(i,{data:T}),"\n",(0,a.jsx)(l,{component:"Carousel"}),"\n",(0,a.jsx)(i,{data:L}),"\n",(0,a.jsx)(t.h2,{id:"indicator-styles",children:"Indicator styles"}),"\n",(0,a.jsx)(i,{data:Q}),"\n",(0,a.jsx)(t.h2,{id:"hide-inactive-controls",children:"Hide inactive controls"}),"\n",(0,a.jsx)(i,{data:et}),"\n",(0,a.jsx)(t.h2,{id:"show-controls-on-hover",children:"Show controls on hover"}),"\n",(0,a.jsx)(i,{data:ei}),"\n",(0,a.jsx)(t.h2,{id:"example-images-carousel",children:"Example: Images carousel"}),"\n",(0,a.jsx)(i,{data:ec}),"\n",(0,a.jsx)(t.h2,{id:"example-cards-carousel",children:"Example: Cards carousel"}),"\n",(0,a.jsx)(i,{data:eD}),"\n",(0,a.jsx)(t.h2,{id:"carousel-container-animation-offset",children:"Carousel container animation offset"}),"\n",(0,a.jsx)(t.p,{children:"Embla carousel only reads slides positions and sizes upon initialization. When you are using Carousel\ncomponent inside animated component you may experience an issue with incorrect slides offset after\nanimation finishes."}),"\n",(0,a.jsx)(t.p,{children:"Example of incorrect slides offset calculation (scroll though slides):"}),"\n",(0,a.jsx)(i,{data:eH}),"\n",(0,a.jsxs)(t.p,{children:["To solve this issue use ",(0,a.jsx)(t.code,{children:"useAnimationOffsetEffect"})," hook exported from ",(0,a.jsx)(t.code,{children:"@mantine/carousel"})," package.\nIt accepts embla instance as first argument and transition duration as second:"]}),"\n",(0,a.jsx)(i,{data:eA})]})}var eG=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(eB,Object.assign({},e,{children:(0,a.jsx)(ek,e)}))};function eV(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87393:function(e,t,o){"use strict";o.d(t,{Z:function(){return a}});var a=(0,o(54764).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},4687:function(e,t,o){"use strict";o.d(t,{Z:function(){return a}});var a=(0,o(54764).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},306:function(e,t,o){e.exports=function(e){"use strict";var t=e&&"object"==typeof e&&"default"in e?e:{default:e},o={active:!0,breakpoints:{},delay:4e3,playOnInit:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function a(e){var r,i,l,n=t.default.optionsHandler(),s=n.merge(o,a.globalOptions),c=0;function u(){i.off("pointerDown",l),r.stopOnInteraction||i.off("pointerUp",h),m(),c=0}function d(){m(),c=window.setTimeout(p,r.delay)}function m(){c&&window.clearTimeout(c)}function h(){c&&(m(),d())}function p(){var e=i.internalEngine().index;if(r.stopOnLastSnap&&e.get()===e.max)return u();i.canScrollNext()?i.scrollNext():i.scrollTo(0),d()}var f={name:"autoplay",options:n.merge(s,e),init:function(e){i=e,l=(r=n.atMedia(f.options)).stopOnInteraction?u:m;var t=i.internalEngine().eventStore,o=i.rootNode(),a=r.rootNode&&r.rootNode(o)||o;i.on("pointerDown",l),r.stopOnInteraction||i.on("pointerUp",h),r.stopOnMouseEnter&&(t.add(a,"mouseenter",l),r.stopOnInteraction||t.add(a,"mouseleave",h)),t.add(document,"visibilitychange",function(){if("hidden"===document.visibilityState)return m();h()}),t.add(window,"pagehide",function(e){e.persisted&&m()}),r.playOnInit&&d()},destroy:u,play:d,stop:m,reset:h};return f}return a.globalOptions=void 0,a}(o(22621))}},function(e){e.O(0,[5297,4940,9077,9774,2888,179],function(){return e(e.s=50404)}),_N_E=e.O()}]);