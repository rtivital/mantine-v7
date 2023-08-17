(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5348],{98685:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/others/tiptap",function(){return o(6613)}])},6613:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return oV}});var r=o(85893),n=o(11151),i=o(19905),l=o(9904),a=o(67294),c=o(49947),s=o(61506),d=o(86873),p=o(67890),h=o(16985),u=o(56437),x=o(64088),m=o(61165);let b=m.Z.extend({addKeyboardShortcuts:()=>({"Mod-k":()=>(window.dispatchEvent(new Event("edit-link")),!0)})}).configure({openOnClick:!1});var g=o(75144),E=o(35577),f=o(25637),k=o(51227);let C={linkControlLabel:"Link",colorPickerControlLabel:"Text color",highlightControlLabel:"Highlight text",colorControlLabel:e=>`Set text color ${e}`,boldControlLabel:"Bold",italicControlLabel:"Italic",underlineControlLabel:"Underline",strikeControlLabel:"Strikethrough",clearFormattingControlLabel:"Clear formatting",unlinkControlLabel:"Remove link",bulletListControlLabel:"Bullet list",orderedListControlLabel:"Ordered list",h1ControlLabel:"Heading 1",h2ControlLabel:"Heading 2",h3ControlLabel:"Heading 3",h4ControlLabel:"Heading 4",h5ControlLabel:"Heading 5",h6ControlLabel:"Heading 6",blockquoteControlLabel:"Blockquote",alignLeftControlLabel:"Align text: left",alignCenterControlLabel:"Align text: center",alignRightControlLabel:"Align text: right",alignJustifyControlLabel:"Align text: justify",codeControlLabel:"Code",codeBlockControlLabel:"Code block",subscriptControlLabel:"Subscript",superscriptControlLabel:"Superscript",unsetColorControlLabel:"Unset color",hrControlLabel:"Horizontal line",linkEditorInputLabel:"Enter URL",linkEditorInputPlaceholder:"https://example.com/",linkEditorExternalLink:"Open link in a new tab",linkEditorInternalLink:"Open link in the same tab",linkEditorSave:"Save",colorPickerCancel:"Cancel",colorPickerClear:"Clear color",colorPickerColorPicker:"Color picker",colorPickerPalette:"Color palette",colorPickerSave:"Save",colorPickerColorLabel:e=>`Set text color ${e}`};var y=o(16371);let[j,T]=(0,y.R)("RichTextEditor component was not found in tree");var v=o(46393),R={root:"m-dd3f7539",typographyStylesProvider:"m-d37966d9",content:"m-c2204cc2",linkEditorDropdown:"m-8a991b4f",control:"m-c2207da6",controlsGroup:"m-2ab47ef2",linkEditor:"m-b67b711e",linkEditorInput:"m-296cf94c",linkEditorExternalControl:"m-cfef614",linkEditorSave:"m-3b28e7bb",toolbar:"m-4574a3c4"},L=Object.defineProperty,w=Object.defineProperties,O=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,I=(e,t,o)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,H=(e,t)=>{for(var o in t||(t={}))S.call(t,o)&&I(e,o,t[o]);if(P)for(var o of P(t))A.call(t,o)&&I(e,o,t[o]);return e},B=(e,t)=>w(e,O(t)),Z=(e,t)=>{var o={};for(var r in e)S.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&P)for(var r of P(e))0>t.indexOf(r)&&A.call(e,r)&&(o[r]=e[r]);return o};let N={},G=(0,g.d)((e,t)=>{let o=(0,E.w)("RichTextEditorToolbar",N,e),{classNames:r,className:n,style:i,styles:l,unstyled:c,vars:s,sticky:d,stickyOffset:p}=o,h=Z(o,["classNames","className","style","styles","unstyled","vars","sticky","stickyOffset"]),u=T();return a.createElement(k.x,B(H(H({ref:t,mod:{sticky:d}},u.getStyles("toolbar",{className:n,style:i,styles:l,classNames:r})),h),{__vars:{"--rte-sticky-offset":(0,v.h)(p)}}))});G.classes=R,G.displayName="@mantine/tiptap/RichTextEditorToolbar";var D=Object.defineProperty,U=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,F=(e,t,o)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,M=(e,t)=>{for(var o in t||(t={}))q.call(t,o)&&F(e,o,t[o]);if(U)for(var o of U(t))z.call(t,o)&&F(e,o,t[o]);return e},K=(e,t)=>{var o={};for(var r in e)q.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&U)for(var r of U(e))0>t.indexOf(r)&&z.call(e,r)&&(o[r]=e[r]);return o};let _={},J=(0,g.d)((e,t)=>{let o=(0,E.w)("RichTextEditorControlsGroup",_,e),{classNames:r,className:n,style:i,styles:l,unstyled:c,vars:s}=o,d=K(o,["classNames","className","style","styles","unstyled","vars"]),p=T();return a.createElement(k.x,M(M({ref:t},p.getStyles("controlsGroup",{className:n,style:i,styles:l,classNames:r})),d))});J.classes=R,J.displayName="@mantine/tiptap/RichTextEditorControlsGroup";var $=o(12705),X=Object.defineProperty,Y=Object.defineProperties,V=Object.getOwnPropertyDescriptors,W=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,et=(e,t,o)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,eo=(e,t)=>{for(var o in t||(t={}))Q.call(t,o)&&et(e,o,t[o]);if(W)for(var o of W(t))ee.call(t,o)&&et(e,o,t[o]);return e},er=(e,t)=>Y(e,V(t)),en=(e,t)=>{var o={};for(var r in e)Q.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&W)for(var r of W(e))0>t.indexOf(r)&&ee.call(e,r)&&(o[r]=e[r]);return o};let ei={},el=(0,g.d)((e,t)=>{let o=(0,E.w)("RichTextEditorContent",ei,e),{classNames:r,className:n,style:i,styles:l,unstyled:s,vars:d}=o,p=en(o,["classNames","className","style","styles","unstyled","vars"]),h=T();return h.withTypographyStyles?a.createElement($.l,er(eo({},h.getStyles("typographyStylesProvider",{className:n,style:i,styles:l,classNames:r})),{ref:t}),a.createElement(k.x,eo(eo({component:c.kg,editor:h.editor},h.getStyles("content",{classNames:r,styles:l})),p))):a.createElement(k.x,eo(eo({component:c.kg,editor:h.editor},h.getStyles("content",{classNames:r,styles:l,className:n,style:i})),p))});el.classes=R,el.displayName="@mantine/tiptap/RichTextEditorContent";var ea=o(90395),ec=Object.defineProperty,es=Object.defineProperties,ed=Object.getOwnPropertyDescriptors,ep=Object.getOwnPropertySymbols,eh=Object.prototype.hasOwnProperty,eu=Object.prototype.propertyIsEnumerable,ex=(e,t,o)=>t in e?ec(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,em=(e,t)=>{for(var o in t||(t={}))eh.call(t,o)&&ex(e,o,t[o]);if(ep)for(var o of ep(t))eu.call(t,o)&&ex(e,o,t[o]);return e},eb=(e,t)=>es(e,ed(t)),eg=(e,t)=>{var o={};for(var r in e)eh.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&ep)for(var r of ep(e))0>t.indexOf(r)&&eu.call(e,r)&&(o[r]=e[r]);return o};let eE={interactive:!0},ef=(0,g.d)((e,t)=>{let o=(0,E.w)("RichTextEditorControl",eE,e),{classNames:r,className:n,style:i,styles:l,unstyled:c,vars:s,interactive:d,active:p}=o,h=eg(o,["classNames","className","style","styles","unstyled","vars","interactive","active"]),u=T();return a.createElement(ea.k,eb(em(em({},h),u.getStyles("control",{className:n,style:i,classNames:r,styles:l})),{"data-rich-text-editor-control":!0,tabIndex:d?0:-1,"data-interactive":d||void 0,"data-active":p||void 0,"aria-pressed":p&&d||void 0,"aria-hidden":!d||void 0,ref:t,unstyled:c}))});ef.classes=R,ef.displayName="@mantine/tiptap/RichTextEditorControl";let ek=(0,a.forwardRef)((e,t)=>{var{className:o,icon:r}=e,n=eg(e,["className","icon"]);return a.createElement(ef,em({ref:t},n),a.createElement(r,{style:{width:(0,v.h)(16),height:(0,v.h)(16)}}))});function eC({label:e,isActive:t,operation:o,icon:r}){return(0,a.forwardRef)((n,i)=>{let{editor:l,labels:c}=T(),s=c[e];return a.createElement(ek,eb(em({},n),{"aria-label":s,title:s,active:null!=t&&!!t.name&&(null==l?void 0:l.isActive(t.name,t.attributes)),ref:i,onClick:()=>null==l?void 0:l.chain().focus()[o.name](o.attributes).run(),icon:n.icon||r}))})}ek.displayName="@mantine/tiptap/RichTextEditorControlBase";var ey=o(52025),ej=o(4014),eT=o(11269),ev=o(53770),eR=o(25696),eL=o(96930),ew=o(47261),eO=o(4702),eP=o(23052),eS=o(1363),eA=o(97567),eI=o(10713),eH=o(72437),eB=o(24878),eZ=o(54928),eN=o(89483),eG=o(4861),eD=o(90318),eU=o(68577),eq=o(50078),ez=o(3727),eF=o(77573),eM=o(63465),eK=o(12976),e_=o(78483),eJ=Object.defineProperty,e$=Object.defineProperties,eX=Object.getOwnPropertyDescriptors,eY=Object.getOwnPropertySymbols,eV=Object.prototype.hasOwnProperty,eW=Object.prototype.propertyIsEnumerable,eQ=(e,t,o)=>t in e?eJ(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,e0=(e,t)=>{for(var o in t||(t={}))eV.call(t,o)&&eQ(e,o,t[o]);if(eY)for(var o of eY(t))eW.call(t,o)&&eQ(e,o,t[o]);return e},e1=(e,t)=>e$(e,eX(t));let e5=eC({label:"boldControlLabel",icon:e=>a.createElement(ey.Z,e1(e0({},e),{stroke:1.5})),isActive:{name:"bold"},operation:{name:"toggleBold"}}),e2=eC({label:"italicControlLabel",icon:e=>a.createElement(ej.Z,e1(e0({},e),{stroke:1.5})),isActive:{name:"italic"},operation:{name:"toggleItalic"}}),e6=eC({label:"underlineControlLabel",icon:e=>a.createElement(eT.Z,e1(e0({},e),{stroke:1.5})),isActive:{name:"underline"},operation:{name:"toggleUnderline"}}),e7=eC({label:"strikeControlLabel",icon:e=>a.createElement(ev.Z,e1(e0({},e),{stroke:1.5})),isActive:{name:"strike"},operation:{name:"toggleStrike"}}),e4=eC({label:"clearFormattingControlLabel",icon:e=>a.createElement(eR.Z,e1(e0({},e),{stroke:1.5})),operation:{name:"unsetAllMarks"}}),e3=eC({label:"unlinkControlLabel",icon:e=>a.createElement(eL.Z,e1(e0({},e),{stroke:1.5})),operation:{name:"unsetLink"}}),e8=eC({label:"bulletListControlLabel",icon:e=>a.createElement(ew.Z,e1(e0({},e),{stroke:1.5})),isActive:{name:"bulletList"},operation:{name:"toggleBulletList"}}),e9=eC({label:"orderedListControlLabel",icon:e=>a.createElement(eO.Z,e1(e0({},e),{stroke:1.5})),isActive:{name:"orderedList"},operation:{name:"toggleOrderedList"}}),te=eC({label:"h1ControlLabel",icon:e=>a.createElement(eP.Z,e1(e0({},e),{stroke:1.5})),isActive:{name:"heading",attributes:{level:1}},operation:{name:"toggleHeading",attributes:{level:1}}}),tt=eC({label:"h2ControlLabel",icon:e=>a.createElement(eS.Z,e1(e0({},e),{stroke:1.5})),isActive:{name:"heading",attributes:{level:2}},operation:{name:"toggleHeading",attributes:{level:2}}}),to=eC({label:"h3ControlLabel",icon:e=>a.createElement(eA.Z,e1(e0({},e),{stroke:1.5})),isActive:{name:"heading",attributes:{level:3}},operation:{name:"toggleHeading",attributes:{level:3}}}),tr=eC({label:"h4ControlLabel",icon:e=>a.createElement(eI.Z,e1(e0({},e),{stroke:1.5})),isActive:{name:"heading",attributes:{level:4}},operation:{name:"toggleHeading",attributes:{level:4}}}),tn=eC({label:"h5ControlLabel",icon:e=>a.createElement(eH.Z,e1(e0({},e),{stroke:1.5})),isActive:{name:"heading",attributes:{level:5}},operation:{name:"toggleHeading",attributes:{level:5}}}),ti=eC({label:"h6ControlLabel",icon:e=>a.createElement(eB.Z,e1(e0({},e),{stroke:1.5})),isActive:{name:"heading",attributes:{level:6}},operation:{name:"toggleHeading",attributes:{level:6}}}),tl=eC({label:"blockquoteControlLabel",icon:e=>a.createElement(eZ.Z,e1(e0({},e),{stroke:1.5})),isActive:{name:"blockquote"},operation:{name:"toggleBlockquote"}}),ta=eC({label:"alignLeftControlLabel",icon:e=>a.createElement(eN.Z,e1(e0({},e),{stroke:1.5})),operation:{name:"setTextAlign",attributes:"left"}}),tc=eC({label:"alignRightControlLabel",icon:e=>a.createElement(eG.Z,e1(e0({},e),{stroke:1.5})),operation:{name:"setTextAlign",attributes:"right"}}),ts=eC({label:"alignCenterControlLabel",icon:e=>a.createElement(eD.Z,e1(e0({},e),{stroke:1.5})),operation:{name:"setTextAlign",attributes:"center"}}),td=eC({label:"alignJustifyControlLabel",icon:e=>a.createElement(eU.Z,e1(e0({},e),{stroke:1.5})),operation:{name:"setTextAlign",attributes:"justify"}}),tp=eC({label:"subscriptControlLabel",icon:e=>a.createElement(eq.Z,e1(e0({},e),{stroke:1.5})),isActive:{name:"subscript"},operation:{name:"toggleSubscript"}}),th=eC({label:"superscriptControlLabel",icon:e=>a.createElement(ez.Z,e1(e0({},e),{stroke:1.5})),isActive:{name:"superscript"},operation:{name:"toggleSuperscript"}}),tu=eC({label:"codeControlLabel",icon:e=>a.createElement(eF.Z,e1(e0({},e),{stroke:1.5})),isActive:{name:"code"},operation:{name:"toggleCode"}}),tx=eC({label:"codeBlockControlLabel",icon:e=>a.createElement(eF.Z,e1(e0({},e),{stroke:1.5})),isActive:{name:"codeBlock"},operation:{name:"toggleCodeBlock"}}),tm=eC({label:"highlightControlLabel",icon:e=>a.createElement(eM.Z,e1(e0({},e),{stroke:1.5})),isActive:{name:"highlight"},operation:{name:"toggleHighlight"}}),tb=eC({label:"hrControlLabel",icon:e=>a.createElement(eK.Z,e1(e0({},e),{stroke:1.5})),operation:{name:"setHorizontalRule"}}),tg=eC({label:"unsetColorControlLabel",icon:e=>a.createElement(e_.Z,e1(e0({},e),{stroke:1.5})),operation:{name:"unsetColor"}});var tE=o(19732),tf=o(87810),tk=o(31577),tC=o(41283),ty=o(55899),tj=o(57730),tT=o(78901),tv=o(99440),tR=o(56809),tL=o(31550),tw=Object.defineProperty,tO=Object.defineProperties,tP=Object.getOwnPropertyDescriptors,tS=Object.getOwnPropertySymbols,tA=Object.prototype.hasOwnProperty,tI=Object.prototype.propertyIsEnumerable,tH=(e,t,o)=>t in e?tw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,tB=(e,t)=>{for(var o in t||(t={}))tA.call(t,o)&&tH(e,o,t[o]);if(tS)for(var o of tS(t))tI.call(t,o)&&tH(e,o,t[o]);return e},tZ=(e,t)=>tO(e,tP(t)),tN=(e,t)=>{var o={};for(var r in e)tA.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&tS)for(var r of tS(e))0>t.indexOf(r)&&tI.call(e,r)&&(o[r]=e[r]);return o};let tG=e=>a.createElement(tR.Z,tB({stroke:1.5},e)),tD={},tU=(0,g.d)((e,t)=>{var o;let r=(0,E.w)("RichTextEditorLinkControl",tD,e),{classNames:n,className:i,style:l,styles:c,unstyled:s,vars:d,icon:p,popoverProps:h,disableTooltips:u,initialExternal:x}=r,m=tN(r,["classNames","className","style","styles","unstyled","vars","icon","popoverProps","disableTooltips","initialExternal"]),b=T(),g={classNames:n,styles:c},[f,k]=(0,tj.U)(""),[C,y]=(0,a.useState)(x),[j,{open:R,close:L}]=(0,tT.q)(!1),w=()=>{var e;R();let t=null==(e=b.editor)?void 0:e.getAttributes("link");k((null==t?void 0:t.href)||""),y((null==t?void 0:t.target)==="_blank")},O=()=>{L(),k(""),y(x)},P=()=>{var e,t;O(),""===f?null==(e=b.editor)||e.chain().focus().extendMarkRange("link").unsetLink().run():null==(t=b.editor)||t.chain().focus().extendMarkRange("link").setLink({href:f,target:C?"_blank":null}).run()},S=e=>{"Enter"===e.key&&(e.preventDefault(),P())};(0,tv.s)("edit-link",w,!1);let{resolvedClassNames:A,resolvedStyles:I}=(0,tE.h)({classNames:n,styles:c,props:r});return a.createElement(tf.J,tB({trapFocus:!0,shadow:"md",withinPortal:!0,opened:j,onClose:O,offset:-44,zIndex:1e4,unstyled:s},h),a.createElement(tf.J.Target,null,a.createElement(ek,tZ(tB({icon:p||tG},m),{"aria-label":b.labels.linkControlLabel,title:b.labels.linkControlLabel,onClick:w,active:null==(o=b.editor)?void 0:o.isActive("link"),unstyled:s,ref:t,classNames:A,styles:I,className:i,style:l}))),a.createElement(tf.J.Dropdown,tB({},b.getStyles("linkEditorDropdown",g)),a.createElement("div",tB({},b.getStyles("linkEditor",g)),a.createElement(tk.o,{placeholder:b.labels.linkEditorInputPlaceholder,"aria-label":b.labels.linkEditorInputLabel,type:"url",value:f,onChange:k,classNames:{input:b.getStyles("linkEditorInput",g).className},onKeyDown:S,unstyled:s,rightSection:a.createElement(tC.u,{label:C?b.labels.linkEditorExternalLink:b.labels.linkEditorInternalLink,events:{hover:!0,focus:!0,touch:!0},withinPortal:!0,withArrow:!0,disabled:u,unstyled:s,zIndex:1e4},a.createElement(ea.k,tZ(tB({onClick:()=>y(e=>!e),"data-active":C||void 0},b.getStyles("linkEditorExternalControl",g)),{unstyled:s}),a.createElement(tL.Z,{style:{width:(0,v.h)(14),height:(0,v.h)(14)},stroke:1.5})))}),a.createElement(ty.z,tZ(tB({variant:"default",onClick:P},b.getStyles("linkEditorSave",g)),{unstyled:s}),b.labels.linkEditorSave))))});tU.classes=R,tU.displayName="@mantine/tiptap/RichTextEditorLinkControl";var tq=o(87578),tz=o(32887),tF=o(91377),tM=o(74378),tK=o(4277),t_=o(86171),tJ=o(40903),t$=o(91564),tX=o(16659),tY=Object.defineProperty,tV=Object.defineProperties,tW=Object.getOwnPropertyDescriptors,tQ=Object.getOwnPropertySymbols,t0=Object.prototype.hasOwnProperty,t1=Object.prototype.propertyIsEnumerable,t5=(e,t,o)=>t in e?tY(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,t2=(e,t)=>{for(var o in t||(t={}))t0.call(t,o)&&t5(e,o,t[o]);if(tQ)for(var o of tQ(t))t1.call(t,o)&&t5(e,o,t[o]);return e},t6=(e,t)=>tV(e,tW(t)),t7=(e,t)=>{var o={};for(var r in e)t0.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&tQ)for(var r of tQ(e))0>t.indexOf(r)&&t1.call(e,r)&&(o[r]=e[r]);return o};let t4={},t3=(0,a.forwardRef)((e,t)=>{let o=(0,E.w)("RichTextEditorColorPickerControl",t4,e),{popoverProps:r,colors:n,colorPickerProps:i}=o,l=t7(o,["popoverProps","colors","colorPickerProps"]),{editor:c,labels:s,getStyles:d}=T(),[p,{toggle:h,close:u}]=(0,tT.q)(!1),[x,m]=(0,a.useState)("palette"),b=(null==c?void 0:c.getAttributes("textStyle").color)||"var(--mantine-color-text)",g=(e,t=!0)=>{(null==c?void 0:c.chain()).focus().setColor(e).run(),t&&u()},f=()=>{(null==c?void 0:c.chain()).focus().unsetColor().run(),u()},k=n.map((e,t)=>a.createElement(tq.b,{key:t,component:"button",color:e,onClick:()=>g(e),size:26,radius:"xs",style:{cursor:"pointer"},title:s.colorPickerColorLabel(e),"aria-label":s.colorPickerColorLabel(e)}));return a.createElement(tf.J,t2({opened:p,withinPortal:!0,trapFocus:!0,onClose:u},r),a.createElement(tf.J.Target,null,a.createElement(ef,t6(t2({},l),{"aria-label":s.colorPickerControlLabel,title:s.colorPickerControlLabel,ref:t,onClick:h}),a.createElement(tq.b,{color:b,size:14}))),a.createElement(tf.J.Dropdown,t2({},d("linkEditorDropdown")),"palette"===x&&a.createElement(tz.M,{cols:7,spacing:2},k),"colorPicker"===x&&a.createElement(tF.z,t2({defaultValue:b,onChange:e=>g(e,!1)},i)),a.createElement(tC.u.Group,{closeDelay:200},a.createElement(tM.Z,{justify:"flex-end",gap:"xs",mt:"sm"},"palette"===x&&a.createElement(tK.A,{variant:"default",onClick:u,title:s.colorPickerCancel,"aria-label":s.colorPickerCancel},a.createElement(t_.Z,{stroke:1.5,size:"1rem"})),a.createElement(tK.A,{variant:"default",onClick:f,title:s.colorPickerClear,"aria-label":s.colorPickerClear},a.createElement(e_.Z,{stroke:1.5,size:"1rem"})),"palette"===x?a.createElement(tK.A,{variant:"default",onClick:()=>m("colorPicker"),title:s.colorPickerColorPicker,"aria-label":s.colorPickerColorPicker},a.createElement(tJ.Z,{stroke:1.5,size:"1rem"})):a.createElement(tK.A,{variant:"default",onClick:()=>m("palette"),"aria-label":s.colorPickerPalette,title:s.colorPickerPalette},a.createElement(t$.Z,{stroke:1.5,size:"1rem"})),"colorPicker"===x&&a.createElement(tK.A,{variant:"default",onClick:u,title:s.colorPickerSave,"aria-label":s.colorPickerSave},a.createElement(tX.Z,{stroke:1.5,size:"1rem"}))))))});t3.displayName="@mantine/tiptap/ColorPickerControl";var t8=Object.defineProperty,t9=Object.defineProperties,oe=Object.getOwnPropertyDescriptors,ot=Object.getOwnPropertySymbols,oo=Object.prototype.hasOwnProperty,or=Object.prototype.propertyIsEnumerable,on=(e,t,o)=>t in e?t8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,oi=(e,t)=>{for(var o in t||(t={}))oo.call(t,o)&&on(e,o,t[o]);if(ot)for(var o of ot(t))or.call(t,o)&&on(e,o,t[o]);return e},ol=(e,t)=>t9(e,oe(t)),oa=(e,t)=>{var o={};for(var r in e)oo.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&ot)for(var r of ot(e))0>t.indexOf(r)&&or.call(e,r)&&(o[r]=e[r]);return o};let oc={},os=(0,a.forwardRef)((e,t)=>{let o=(0,E.w)("RichTextEditorColorControl",oc,e),{color:r}=o,n=oa(o,["color"]),{editor:i,labels:l}=T(),c=(null==i?void 0:i.getAttributes("textStyle").color)||null,s=l.colorControlLabel(r);return a.createElement(ef,ol(oi({},n),{active:c===r,"aria-label":s,title:s,onClick:()=>(null==i?void 0:i.chain()).focus().setColor(r).run(),ref:t}),a.createElement(tq.b,{color:r,size:14}))});var od=Object.defineProperty,op=Object.defineProperties,oh=Object.getOwnPropertyDescriptors,ou=Object.getOwnPropertySymbols,ox=Object.prototype.hasOwnProperty,om=Object.prototype.propertyIsEnumerable,ob=(e,t,o)=>t in e?od(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,og=(e,t)=>{for(var o in t||(t={}))ox.call(t,o)&&ob(e,o,t[o]);if(ou)for(var o of ou(t))om.call(t,o)&&ob(e,o,t[o]);return e},oE=(e,t)=>op(e,oh(t)),of=(e,t)=>{var o={};for(var r in e)ox.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&ou)for(var r of ou(e))0>t.indexOf(r)&&om.call(e,r)&&(o[r]=e[r]);return o};let ok={withCodeHighlightStyles:!0,withTypographyStyles:!0},oC=(0,g.d)((e,t)=>{let o=(0,E.w)("RichTextEditor",ok,e),{classNames:r,className:n,style:i,styles:l,unstyled:c,vars:s,editor:d,withCodeHighlightStyles:p,withTypographyStyles:h,labels:u,children:x}=o,m=of(o,["classNames","className","style","styles","unstyled","vars","editor","withCodeHighlightStyles","withTypographyStyles","labels","children"]),b=(0,f.y)({name:"RichTextEditor",classes:R,props:o,className:n,style:i,classNames:r,styles:l,unstyled:c,vars:s}),g=(0,a.useMemo)(()=>og(og({},C),u),[u]);return a.createElement(j,{value:{editor:d,getStyles:b,labels:g,withCodeHighlightStyles:p,withTypographyStyles:h}},a.createElement(k.x,oE(og(og({},b("root")),m),{ref:t}),x))});oC.classes=R,oC.displayName="@mantine/tiptap/RichTextEditor",oC.Content=el,oC.Control=ef,oC.Toolbar=G,oC.ControlsGroup=J,oC.Bold=e5,oC.Italic=e2,oC.Strikethrough=e7,oC.Underline=e6,oC.ClearFormatting=e4,oC.H1=te,oC.H2=tt,oC.H3=to,oC.H4=tr,oC.H5=tn,oC.H6=ti,oC.BulletList=e8,oC.OrderedList=e9,oC.Link=tU,oC.Unlink=e3,oC.Blockquote=tl,oC.AlignLeft=ta,oC.AlignRight=tc,oC.AlignCenter=ts,oC.AlignJustify=td,oC.Superscript=th,oC.Subscript=tp,oC.Code=tu,oC.CodeBlock=tx,oC.ColorPicker=t3,oC.Color=os,oC.Highlight=tm,oC.Hr=tb,oC.UnsetColor=tg;let oy=`
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';

const content =
  '<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';

function Demo() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content,
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
          <RichTextEditor.ClearFormatting />
          <RichTextEditor.Highlight />
          <RichTextEditor.Code />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.H1 />
          <RichTextEditor.H2 />
          <RichTextEditor.H3 />
          <RichTextEditor.H4 />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Blockquote />
          <RichTextEditor.Hr />
          <RichTextEditor.BulletList />
          <RichTextEditor.OrderedList />
          <RichTextEditor.Subscript />
          <RichTextEditor.Superscript />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Link />
          <RichTextEditor.Unlink />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AlignLeft />
          <RichTextEditor.AlignCenter />
          <RichTextEditor.AlignJustify />
          <RichTextEditor.AlignRight />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`,oj={type:"code",component:function(){let e=(0,c.jE)({extensions:[d.Z,p.Z,b,u.Z,x.Z,s.ZP,h.Z.configure({types:["heading","paragraph"]})],content:'<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>'});return a.createElement(oC,{editor:e},a.createElement(oC.Toolbar,{sticky:!0,stickyOffset:60},a.createElement(oC.ControlsGroup,null,a.createElement(oC.Bold,null),a.createElement(oC.Italic,null),a.createElement(oC.Underline,null),a.createElement(oC.Strikethrough,null),a.createElement(oC.ClearFormatting,null),a.createElement(oC.Highlight,null),a.createElement(oC.Code,null)),a.createElement(oC.ControlsGroup,null,a.createElement(oC.H1,null),a.createElement(oC.H2,null),a.createElement(oC.H3,null),a.createElement(oC.H4,null)),a.createElement(oC.ControlsGroup,null,a.createElement(oC.Blockquote,null),a.createElement(oC.Hr,null),a.createElement(oC.BulletList,null),a.createElement(oC.OrderedList,null),a.createElement(oC.Subscript,null),a.createElement(oC.Superscript,null)),a.createElement(oC.ControlsGroup,null,a.createElement(oC.Link,null),a.createElement(oC.Unlink,null)),a.createElement(oC.ControlsGroup,null,a.createElement(oC.AlignLeft,null),a.createElement(oC.AlignCenter,null),a.createElement(oC.AlignJustify,null),a.createElement(oC.AlignRight,null))),a.createElement(oC.Content,null))},code:oy};var oT=o(86422);let ov=`
import { RichTextEditor } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, Placeholder.configure({ placeholder: 'This is placeholder' })],
    content: '',
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`,oR={type:"code",component:function(){let e=(0,c.jE)({extensions:[d.Z,oT.Z.configure({placeholder:"This is placeholder"})],content:""});return a.createElement(oC,{editor:e},a.createElement(oC.Content,null))},code:ov};var oL=o(71493),ow=o(51655);let oO=`
import { useEditor } from '@tiptap/react';
import { IconColorPicker } from '@tabler/icons-react';
import { Color } from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, TextStyle, Color],
    content: '<p>Apply some colors to this text</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
        <RichTextEditor.ColorPicker
          colors={[
            '#25262b',
            '#868e96',
            '#fa5252',
            '#e64980',
            '#be4bdb',
            '#7950f2',
            '#4c6ef5',
            '#228be6',
            '#15aabf',
            '#12b886',
            '#40c057',
            '#82c91e',
            '#fab005',
            '#fd7e14',
          ]}
        />

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Control interactive={false}>
            <IconColorPicker size="1rem" stroke={1.5} />
          </RichTextEditor.Control>
          <RichTextEditor.Color color="#F03E3E" />
          <RichTextEditor.Color color="#7048E8" />
          <RichTextEditor.Color color="#1098AD" />
          <RichTextEditor.Color color="#37B24D" />
          <RichTextEditor.Color color="#F59F00" />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.UnsetColor />
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`,oP={type:"code",component:function(){let e=(0,c.jE)({extensions:[d.Z,ow.Z,oL.I],content:"<p>Apply some colors to this text</p>"});return a.createElement(oC,{editor:e},a.createElement(oC.Toolbar,{sticky:!0,stickyOffset:60},a.createElement(oC.ColorPicker,{colors:["#25262b","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),a.createElement(oC.ControlsGroup,null,a.createElement(oC.Control,{interactive:!1},a.createElement(tJ.Z,{size:"1rem",stroke:1.5})),a.createElement(oC.Color,{color:"#F03E3E"}),a.createElement(oC.Color,{color:"#7048E8"}),a.createElement(oC.Color,{color:"#1098AD"}),a.createElement(oC.Color,{color:"#37B24D"}),a.createElement(oC.Color,{color:"#F59F00"})),a.createElement(oC.UnsetColor,null)),a.createElement(oC.Content,null))},code:oO};var oS=o(36667),oA=o(84468),oI=o(49859);let oH=`
import { RichTextEditor } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { lowlight } from 'lowlight';
import tsLanguageSyntax from 'highlight.js/lib/languages/typescript';

// register languages that your are planning to use
lowlight.registerLanguage('ts', tsLanguageSyntax);

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const codeExample =
  escapeHtml(\`// Valid braces Kata \u2013 https://www.codewars.com/kata/5277c8a221e209d3f6000b56

const pairs: Record<string, string> = {
  '[': ']',
  '{': '}',
  '(': ')',
};

const openBraces = Object.keys(pairs);

export function validBraces(braces: string) {
  const opened: string[] = [];

  for (let i = 0; i < braces.length; i += 1) {
    const brace = braces[i];

    if (openBraces.includes(brace)) {
      opened.push(brace);
      continue;
    }

    if (pairs[opened[opened.length - 1]] !== brace) {
      return false
    }

    opened.pop();
  }

  return opened.length === 0;
}\`);

function Demo() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: \`<p>Regular paragraph</p><pre><code>\${codeExample}</code></pre>\`,
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.CodeBlock />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`;oA.$.registerLanguage("ts",oI.Z);let oB=`// Valid braces Kata \u2013 https://www.codewars.com/kata/5277c8a221e209d3f6000b56

const pairs: Record<string, string> = {
  '[': ']',
  '{': '}',
  '(': ')',
};

const openBraces = Object.keys(pairs);

export function validBraces(braces: string) {
  const opened: string[] = [];

  for (let i = 0; i < braces.length; i += 1) {
    const brace = braces[i];

    if (openBraces.includes(brace)) {
      opened.push(brace);
      continue;
    }

    if (pairs[opened[opened.length - 1]] !== brace) {
      return false
    }

    opened.pop();
  }

  return opened.length === 0;
}`.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),oZ={type:"code",component:function(){let e=(0,c.jE)({extensions:[d.Z,oS.Z.configure({lowlight:oA.$})],content:`<p>Regular paragraph</p><pre><code>${oB}</code></pre>`});return a.createElement(oC,{editor:e},a.createElement(oC.Toolbar,null,a.createElement(oC.ControlsGroup,null,a.createElement(oC.CodeBlock,null))),a.createElement(oC.Content,null))},code:oH},oN=`
import { useEditor, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor, Link } from '@mantine/tiptap';

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, Link],
    content: '<p>Select some text to see bubble menu</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      {editor && (
        <BubbleMenu editor={editor}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Link />
          </RichTextEditor.ControlsGroup>
        </BubbleMenu>
      )}
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`,oG={type:"code",component:function(){let e=(0,c.jE)({extensions:[d.Z,b],content:"<p>Select some text to see bubble menu</p>"});return a.createElement(oC,{editor:e},e&&a.createElement(c.NM,{editor:e},a.createElement(oC.ControlsGroup,null,a.createElement(oC.Bold,null),a.createElement(oC.Italic,null),a.createElement(oC.Link,null))),a.createElement(oC.Content,null))},code:oN},oD=`
import { useEditor, FloatingMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor, Link } from '@mantine/tiptap';

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, Link],
    content: '<p>Enter a new line to see floating menu</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      {editor && (
        <FloatingMenu editor={editor}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.BulletList />
          </RichTextEditor.ControlsGroup>
        </FloatingMenu>
      )}
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`,oU={type:"code",component:function(){let e=(0,c.jE)({extensions:[d.Z,b],content:"<p>Enter a new line to see floating menu</p>"});return a.createElement(oC,{editor:e},e&&a.createElement(c.AH,{editor:e},a.createElement(oC.ControlsGroup,null,a.createElement(oC.H1,null),a.createElement(oC.H2,null),a.createElement(oC.BulletList,null))),a.createElement(oC.Content,null))},code:oD};var oq=o(48112);let oz=`
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor, useRichTextEditorContext } from '@mantine/tiptap';
import { IconStar } from '@tabler/icons-react';

function InsertStarControl() {
  const { editor } = useRichTextEditorContext();
  return (
    <RichTextEditor.Control
      onClick={() => editor?.commands.insertContent('\u2B50')}
      aria-label="Insert star emoji"
      title="Insert star emoji"
    >
      <IconStar stroke={1.5} size="1rem" />
    </RichTextEditor.Control>
  );
}

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Click control to insert star emoji</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <InsertStarControl />
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`;function oF(){let{editor:e}=T();return a.createElement(oC.Control,{onClick:()=>null==e?void 0:e.commands.insertContent("⭐"),"aria-label":"Insert star emoji",title:"Insert star emoji"},a.createElement(oq.Z,{stroke:1.5,size:"1rem"}))}let oM={type:"code",component:function(){let e=(0,c.jE)({extensions:[d.Z],content:"<p>Click control to insert star emoji</p>"});return a.createElement(oC,{editor:e},a.createElement(oC.Toolbar,null,a.createElement(oF,null)),a.createElement(oC.Content,null))},code:oz},oK=`
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';
import { IconBold, IconItalic } from '@tabler/icons-react';

const BoldIcon = () => <IconBold size="1rem" stroke={3.5} />;
const ItalicIcon = () => <IconItalic size="1rem" stroke={3.5} />;

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Customize icons with icon prop</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold icon={BoldIcon} />
          <RichTextEditor.Italic icon={ItalicIcon} />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`,o_=()=>a.createElement(ey.Z,{size:"1rem",stroke:3.5}),oJ=()=>a.createElement(ej.Z,{size:"1rem",stroke:3.5}),o$={type:"code",component:function(){let e=(0,c.jE)({extensions:[d.Z],content:"<p>Customize icons with icon prop</p>"});return a.createElement(oC,{editor:e},a.createElement(oC.Toolbar,null,a.createElement(oC.ControlsGroup,null,a.createElement(oC.Bold,{icon:o_}),a.createElement(oC.Italic,{icon:oJ}))),a.createElement(oC.Content,null))},code:oK},oX=(0,i.A)(l.us.TipTap);function oY(e){let t=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a",ul:"ul",li:"li"},(0,n.ah)(),e.components),{InstallScript:o,Demo:i}=t;return i||oW("Demo",!0),o||oW("InstallScript",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:"Install with yarn:"}),"\n",(0,r.jsx)(o,{packages:"@mantine/tiptap @mantine/core @mantine/hooks @tabler/icons-react @tiptap/react @tiptap/pm @tiptap/extension-link @tiptap/starter-kit"}),"\n",(0,r.jsx)(t.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import '@mantine/tiptap/styles.css';\n"})}),"\n",(0,r.jsx)(t.h2,{id:"tiptap-editor",children:"TipTap editor"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"@mantine/tiptap"})," provides a UI for ",(0,r.jsx)(t.a,{href:"https://tiptap.dev/",children:"Tiptap"}),". ",(0,r.jsx)(t.code,{children:"RichTextEditor"})," component\nworks with ",(0,r.jsx)(t.a,{href:"https://tiptap.dev/api/editor",children:"Editor"})," instance of tiptap.\nThis means that you have full control over the editor ",(0,r.jsx)(t.a,{href:"https://tiptap.dev/guide/configuration",children:"state and configuration"}),"\nwith ",(0,r.jsx)(t.a,{href:"https://tiptap.dev/installation/react",children:"useEditor hook"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["In other words, ",(0,r.jsx)(t.code,{children:"RichTextEditor"})," component does not manage state for you,\ncontrols just execute operations on the ",(0,r.jsx)(t.code,{children:"Editor"})," instance. If you want to\nimplement something that is related to state or component value (e.g. controlled mode, value transforms to HTML/Markdown),\nyou should look for documentation on ",(0,r.jsx)(t.a,{href:"https://tiptap.dev/",children:"tiptap.dev"})," website."]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(i,{data:oj}),"\n",(0,r.jsx)(t.h2,{id:"controls-and-extensions",children:"Controls and extensions"}),"\n",(0,r.jsxs)(t.p,{children:["Some controls require installation of additional ",(0,r.jsx)(t.a,{href:"https://tiptap.dev/extensions",children:"Tiptap extensions"}),".\nFor example, if you want to use ",(0,r.jsx)(t.code,{children:"RichTextEditor.Underline"})," control, you will need to install ",(0,r.jsx)(t.code,{children:"@tiptap/extension-underline"})," package:"]}),"\n",(0,r.jsx)(o,{packages:"@tiptap/extension-underline"}),"\n",(0,r.jsxs)(t.p,{children:["Included with ",(0,r.jsx)(t.code,{children:"@tiptap/starter-kit"})," (should be installed by default):"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.H1"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.H2"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.H3"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.H4"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.H5"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.H6"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.BulletList"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.OrderedList"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.Bold"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.Italic"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.Strikethrough"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.ClearFormatting"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.Blockquote"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.Code"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.CodeBlock"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.Hr"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Controls that require ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@tiptap/extension-link",children:"@tiptap/extension-link"})," extension:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.Link"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.Unlink"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Controls that require ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@tiptap/extension-text-align",children:"@tiptap/extension-text-align"})," extension:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.AlignLeft"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.AlignRight"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.AlignCenter"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.AlignJustify"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Controls that require ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@tiptap/extension-color",children:"@tiptap/extension-color"})," and ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@tiptap/extension-text-style",children:"@tiptap/extension-text-style"})," extensions:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.ColorPicker"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.Color"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RichTextEditor.UnsetColor"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Other controls with required extensions:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"RichTextEditor.Underline"})," requires ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@tiptap/extension-underline",children:"@tiptap/extension-underline"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"RichTextEditor.Superscript"})," requires ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@tiptap/extension-superscript",children:"@tiptap/extension-superscript"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"RichTextEditor.Subscript"})," requires ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@tiptap/extension-subscript",children:"@tiptap/extension-subscript"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"RichTextEditor.Highlight"})," requires ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@tiptap/extension-highlight",children:"@tiptap/extension-highlight"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"placeholder",children:"Placeholder"}),"\n",(0,r.jsxs)(t.p,{children:["To use placeholder you will need to install ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@tiptap/extension-placeholder",children:"@tiptap/extension-placeholder"})," package:"]}),"\n",(0,r.jsx)(o,{packages:"@tiptap/extension-placeholder"}),"\n",(0,r.jsx)(i,{data:oR}),"\n",(0,r.jsx)(t.h2,{id:"link-extension",children:"Link extension"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"@mantine/tiptap"})," provides custom ",(0,r.jsx)(t.code,{children:"Link"})," extension that is required to be used instead of\n",(0,r.jsx)(t.code,{children:"@tiptap/extension-link"})," in order for ",(0,r.jsx)(t.code,{children:"Ctrl + K"})," keyboard shortcut to work:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"// Use Link extension exported from the @mantine/tiptap package\nimport { RichTextEditor, Link } from '@mantine/tiptap';\nimport { useEditor } from '@tiptap/react';\n\nfunction Demo() {\n  const editor = useEditor({\n    extensions: [\n      Link,\n      // ... other extensions\n    ],\n  });\n\n  return <RichTextEditor editor={editor}>{/* content */}</RichTextEditor>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"text-color",children:"Text color"}),"\n",(0,r.jsx)(t.p,{children:"To use text color you will need to install additional packages:"}),"\n",(0,r.jsx)(o,{packages:"@tiptap/extension-color @tiptap/extension-text-style"}),"\n",(0,r.jsx)(t.p,{children:"You can use the following controls to change text color:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"RichTextEditor.ColorPicker"})," – allows to pick colors from given predefined color swatches and with ",(0,r.jsx)(t.a,{href:"/core/color-picker/",children:"ColorPicker"})," component"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"RichTextEditor.Color"})," – allows to apply given color with one click"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"RichTextEditor.UnsetColor"})," – clears color styles"]}),"\n"]}),"\n",(0,r.jsx)(i,{data:oP}),"\n",(0,r.jsx)(t.h2,{id:"code-highlight",children:"Code highlight"}),"\n",(0,r.jsx)(t.p,{children:"To use code highlight you will need to install additional packages:"}),"\n",(0,r.jsx)(o,{packages:"lowlight @tiptap/extension-code-block-lowlight"}),"\n",(0,r.jsx)(i,{data:oZ}),"\n",(0,r.jsx)(t.h2,{id:"typography-styles",children:"Typography styles"}),"\n",(0,r.jsxs)(t.p,{children:["By default, ",(0,r.jsx)(t.code,{children:"RichTextEditor"})," renders content with ",(0,r.jsx)(t.a,{href:"/core/typography-styles-provider/",children:"TypographyStylesProvider"})," and some additional styles.\nYou can disable these styles by setting ",(0,r.jsx)(t.code,{children:"withTypographyStyles={false}"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { RichTextEditor } from '@mantine/tiptap';\nimport { useEditor } from '@tiptap/react';\n\nfunction Demo() {\n  const editor = useEditor({\n    extensions: [\n      // ... your extensions\n    ],\n  });\n\n  return (\n    <RichTextEditor editor={editor} withTypographyStyles={false}>\n      {/* content */}\n    </RichTextEditor>\n  );\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Then you will be able to add your own styles either with ",(0,r.jsx)(t.a,{href:"/styles/global/",children:"global styles"}),"\nor with ",(0,r.jsx)(t.a,{href:"/styles/styles-api/",children:"Styles API"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"// ...\n<RichTextEditor\n  editor={editor}\n  withTypographyStyles={false}\n  styles={{\n    content: {\n      '& p': {\n        color: 'silver',\n      },\n    },\n  }}\n>\n  {/* content */}\n</RichTextEditor>\n"})}),"\n",(0,r.jsx)(t.h2,{id:"bubble-menu",children:"Bubble menu"}),"\n",(0,r.jsxs)(t.p,{children:["You can use ",(0,r.jsx)(t.a,{href:"https://tiptap.dev/api/extensions/bubble-menu",children:"BubbleMenu"})," component\nwith any ",(0,r.jsx)(t.code,{children:"RichTextEditor"})," controls. Bubble menu will appear near a selection of text:"]}),"\n",(0,r.jsx)(i,{data:oG}),"\n",(0,r.jsx)(t.h2,{id:"floating-menu",children:"Floating menu"}),"\n",(0,r.jsxs)(t.p,{children:["You can use ",(0,r.jsx)(t.a,{href:"https://tiptap.dev/api/extensions/floating-menu",children:"FloatingMenu"})," component\nwith any ",(0,r.jsx)(t.code,{children:"RichTextEditor"})," controls. Floating menu will appear in an empty line:"]}),"\n",(0,r.jsx)(i,{data:oU}),"\n",(0,r.jsx)(t.h2,{id:"sticky-toolbar",children:"Sticky toolbar"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"sticky"})," prop on ",(0,r.jsx)(t.code,{children:"RichTextEditor.Toolbar"})," component to make toolbar sticky,\ncontrol ",(0,r.jsx)(t.code,{children:"top"})," property with ",(0,r.jsx)(t.code,{children:"stickyOffset"}),". For example, on mantine.dev documentation\nwebsite there is a header with ",(0,r.jsx)(t.code,{children:"60px"})," height (converted to rem), in this case we will need to\nset ",(0,r.jsx)(t.code,{children:"stickyOffset={60}"})," to make sticky position correctly with fixed positioned element."]}),"\n",(0,r.jsx)(i,{data:oj,demoProps:{toggle:!0}}),"\n",(0,r.jsx)(t.h2,{id:"editor-context",children:"Editor context"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"useRichTextEditorContext"})," hook to get ",(0,r.jsx)(t.a,{href:"https://tiptap.dev/api/editor",children:"Editor"})," from\nthe context. This hook can be used to create custom control or run any operations supported\nby the Tiptap ",(0,r.jsx)(t.a,{href:"https://tiptap.dev/api/editor",children:"editor API"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useRichTextEditorContext } from '@mantine/tiptap';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  const { editor } = useRichTextEditorContext();\n  return <Button onClick={() => editor?.chain().focus().toggleBold().run()}>Make bold</Button>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"custom-controls",children:"Custom controls"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"RichTextEditor.Control"})," component to create custom controls. It supports all\nprops supported by ",(0,r.jsx)(t.code,{children:"button"})," element and has ",(0,r.jsx)(t.code,{children:"active"})," prop to indicate active state.\nNote that you will need to set ",(0,r.jsx)(t.code,{children:"aria-label"})," attribute to make control visible for screen readers."]}),"\n",(0,r.jsx)(i,{data:oM}),"\n",(0,r.jsx)(t.h2,{id:"change-icons",children:"Change icons"}),"\n",(0,r.jsxs)(t.p,{children:["You can change icon of control by setting ",(0,r.jsx)(t.code,{children:"icon"})," prop. It accepts a component\nthat must handle ",(0,r.jsx)(t.code,{children:"size"})," prop:"]}),"\n",(0,r.jsx)(i,{data:o$}),"\n",(0,r.jsx)(t.h2,{id:"labels-and-localization",children:"Labels and localization"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"RichTextEditor"})," supports changing labels for all controls with ",(0,r.jsx)(t.code,{children:"labels"})," prop:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { RichTextEditor } from '@mantine/tiptap';\nimport { useEditor } from '@tiptap/react';\n\nfunction Demo() {\n  const editor = useEditor({\n    extensions: [\n      // ... your extensions\n    ],\n  });\n\n  return (\n    <RichTextEditor\n      editor={editor}\n      labels={{\n        boldControlLabel: 'Make text bold',\n        italicControlLabel: 'Make text bold',\n        // ...other labels\n      }}\n    >\n      {/* content */}\n    </RichTextEditor>\n  );\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Most labels are used to add ",(0,r.jsx)(t.code,{children:"aria-label"})," and ",(0,r.jsx)(t.code,{children:"title"})," attributes to controls, some of the labels\ncan be a function that returns string. If you do not provide all labels, then they will be merged with\nthe default labels."]}),"\n",(0,r.jsx)(t.p,{children:"All available labels:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"// RichTextEditorLabels type can be imported from @mantine/tiptap package\nexport interface RichTextEditorLabels {\n  /** RichTextEditor.Bold control aria-label */\n  boldControlLabel: string;\n\n  /** RichTextEditor.Hr control aria-label */\n  hrControlLabel: string;\n\n  /** RichTextEditor.Italic control aria-label */\n  italicControlLabel: string;\n\n  /** RichTextEditor.Underline control aria-label */\n  underlineControlLabel: string;\n\n  /** RichTextEditor.Strike control aria-label */\n  strikeControlLabel: string;\n\n  /** RichTextEditor.ClearFormatting control aria-label */\n  clearFormattingControlLabel: string;\n\n  /** RichTextEditor.Link control aria-label */\n  linkControlLabel: string;\n\n  /** RichTextEditor.Unlink control aria-label */\n  unlinkControlLabel: string;\n\n  /** RichTextEditor.BulletList control aria-label */\n  bulletListControlLabel: string;\n\n  /** RichTextEditor.OrderedList control aria-label */\n  orderedListControlLabel: string;\n\n  /** RichTextEditor.H1 control aria-label */\n  h1ControlLabel: string;\n\n  /** RichTextEditor.H2 control aria-label */\n  h2ControlLabel: string;\n\n  /** RichTextEditor.H3 control aria-label */\n  h3ControlLabel: string;\n\n  /** RichTextEditor.H4 control aria-label */\n  h4ControlLabel: string;\n\n  /** RichTextEditor.H5 control aria-label */\n  h5ControlLabel: string;\n\n  /** RichTextEditor.H6 control aria-label */\n  h6ControlLabel: string;\n\n  /** RichTextEditor.Blockquote control aria-label */\n  blockquoteControlLabel: string;\n\n  /** RichTextEditor.AlignLeft control aria-label */\n  alignLeftControlLabel: string;\n\n  /** RichTextEditor.AlignCenter control aria-label */\n  alignCenterControlLabel: string;\n\n  /** RichTextEditor.AlignRight control aria-label */\n  alignRightControlLabel: string;\n\n  /** RichTextEditor.AlignJustify control aria-label */\n  alignJustifyControlLabel: string;\n\n  /** RichTextEditor.Code control aria-label */\n  codeControlLabel: string;\n\n  /** RichTextEditor.CodeBlock control aria-label */\n  codeBlockControlLabel: string;\n\n  /** RichTextEditor.Subscript control aria-label */\n  subscriptControlLabel: string;\n\n  /** RichTextEditor.Superscript control aria-label */\n  superscriptControlLabel: string;\n\n  /** RichTextEditor.ColorPicker control aria-label */\n  colorPickerControlLabel: string;\n\n  /** RichTextEditor.UnsetColor control aria-label */\n  unsetColorControlLabel: string;\n\n  /** RichTextEditor.Highlight control aria-label */\n  highlightControlLabel: string;\n\n  /** A function go get RichTextEditor.Color control aria-label based on color that control applies */\n  colorControlLabel(color: string): string;\n\n  /** aria-label for link editor url input */\n  linkEditorInputLabel: string;\n\n  /** placeholder for link editor url input */\n  linkEditorInputPlaceholder: string;\n\n  /** Content of external button tooltip in link editor when the link was chosen to open in a new tab */\n  linkEditorExternalLink: string;\n\n  /** Content of external button tooltip in link editor when the link was chosen to open in the same tab */\n  linkEditorInternalLink: string;\n\n  /** Save button content in link editor */\n  linkEditorSave: string;\n\n  /** Cancel button title text in color picker control */\n  colorPickerCancel: string;\n\n  /** Clear button title text in color picker control */\n  colorPickerClear: string;\n\n  /** Color picker button title text in color picker control */\n  colorPickerColorPicker: string;\n\n  /** Palette button title text in color picker control */\n  colorPickerPalette: string;\n\n  /** Save button title text in color picker control */\n  colorPickerSave: string;\n\n  /** aria-label for color palette colors */\n  colorPickerColorLabel(color: string): string;\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Default labels (can be imported from ",(0,r.jsx)(t.code,{children:"@mantine/tiptap"})," package):"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"export const DEFAULT_LABELS: RichTextEditorLabels = {\n  // Controls labels\n  linkControlLabel: 'Link',\n  colorPickerControlLabel: 'Text color',\n  highlightControlLabel: 'Highlight text',\n  colorControlLabel: (color) => `Set text color ${color}`,\n  boldControlLabel: 'Bold',\n  italicControlLabel: 'Italic',\n  underlineControlLabel: 'Underline',\n  strikeControlLabel: 'Strikethrough',\n  clearFormattingControlLabel: 'Clear formatting',\n  unlinkControlLabel: 'Remove link',\n  bulletListControlLabel: 'Bullet list',\n  orderedListControlLabel: 'Ordered list',\n  h1ControlLabel: 'Heading 1',\n  h2ControlLabel: 'Heading 2',\n  h3ControlLabel: 'Heading 3',\n  h4ControlLabel: 'Heading 4',\n  h5ControlLabel: 'Heading 5',\n  h6ControlLabel: 'Heading 6',\n  blockquoteControlLabel: 'Blockquote',\n  alignLeftControlLabel: 'Align text: left',\n  alignCenterControlLabel: 'Align text: center',\n  alignRightControlLabel: 'Align text: right',\n  alignJustifyControlLabel: 'Align text: justify',\n  codeControlLabel: 'Code',\n  codeBlockControlLabel: 'Code block',\n  subscriptControlLabel: 'Subscript',\n  superscriptControlLabel: 'Superscript',\n  unsetColorControlLabel: 'Unset color',\n  hrControlLabel: 'Horizontal line',\n\n  // Link editor\n  linkEditorInputLabel: 'Enter URL',\n  linkEditorInputPlaceholder: 'https://example.com/',\n  linkEditorExternalLink: 'Open link in a new tab',\n  linkEditorInternalLink: 'Open link in the same tab',\n  linkEditorSave: 'Save',\n\n  // Color picker control\n  colorPickerCancel: 'Cancel',\n  colorPickerClear: 'Clear color',\n  colorPickerColorPicker: 'Color picker',\n  colorPickerPalette: 'Color palette',\n  colorPickerSave: 'Save',\n  colorPickerColorLabel: (color) => `Set text color ${color}`,\n};\n"})})]})}var oV=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(oX,Object.assign({},e,{children:(0,r.jsx)(oY,e)}))};function oW(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32887:function(e,t,o){"use strict";o.d(t,{M:function(){return O}});var r=o(67294),n=o(49441),i=o(56882),l=o(71350),a=o(80931),c=o(40342),s=o(89305),d=o(40128);function p({spacing:e,verticalSpacing:t,cols:o,selector:p}){var h;let u=(0,n.rZ)(),x=(0,i.L)({"--sg-spacing-x":(0,l.bG)((0,a.v)(e)),"--sg-spacing-y":(0,l.bG)((0,a.v)(t)),"--sg-cols":null==(h=(0,a.v)(o))?void 0:h.toString()}),m=(0,c.X)(u.breakpoints).reduce((r,n)=>(r[n]||(r[n]={}),"object"==typeof e&&void 0!==e[n]&&(r[n]["--sg-spacing-x"]=(0,l.bG)(e[n])),"object"==typeof t&&void 0!==t[n]&&(r[n]["--sg-spacing-y"]=(0,l.bG)(t[n])),"object"==typeof o&&void 0!==o[n]&&(r[n]["--sg-cols"]=o[n]),r),{}),b=(0,s.I)((0,c.X)(m),u).filter(e=>(0,c.X)(m[e.value]).length>0),g=b.map(e=>({query:`(min-width: ${u.breakpoints[e.value]})`,styles:m[e.value]}));return r.createElement(d.f,{styles:x,media:g,selector:p})}var h={root:"m-2415a157"},u=o(75144),x=o(35577),m=o(25637),b=o(6937),g=o(51227),E=Object.defineProperty,f=Object.defineProperties,k=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,T=(e,t,o)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,v=(e,t)=>{for(var o in t||(t={}))y.call(t,o)&&T(e,o,t[o]);if(C)for(var o of C(t))j.call(t,o)&&T(e,o,t[o]);return e},R=(e,t)=>f(e,k(t)),L=(e,t)=>{var o={};for(var r in e)y.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&C)for(var r of C(e))0>t.indexOf(r)&&j.call(e,r)&&(o[r]=e[r]);return o};let w={cols:1,spacing:"md",verticalSpacing:"md"},O=(0,u.d)((e,t)=>{let o=(0,x.w)("SimpleGrid",w,e),{classNames:n,className:i,style:l,styles:a,unstyled:c,vars:s,cols:d,verticalSpacing:u,spacing:E}=o,f=L(o,["classNames","className","style","styles","unstyled","vars","cols","verticalSpacing","spacing"]),k=(0,m.y)({name:"SimpleGrid",classes:h,props:o,className:i,style:l,classNames:n,styles:a,unstyled:c,vars:s}),C=(0,b.m)();return r.createElement(r.Fragment,null,r.createElement(p,R(v({},o),{selector:`.${C}`})),r.createElement(g.x,v(v({ref:t},k("root",{className:C})),f)))});O.classes=h,O.displayName="@mantine/core/SimpleGrid"},12705:function(e,t,o){"use strict";o.d(t,{l:function(){return g}});var r=o(67294),n={root:"m-d6493fad"},i=o(75144),l=o(35577),a=o(25637),c=o(51227),s=Object.defineProperty,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,u=(e,t,o)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,x=(e,t)=>{for(var o in t||(t={}))p.call(t,o)&&u(e,o,t[o]);if(d)for(var o of d(t))h.call(t,o)&&u(e,o,t[o]);return e},m=(e,t)=>{var o={};for(var r in e)p.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&d)for(var r of d(e))0>t.indexOf(r)&&h.call(e,r)&&(o[r]=e[r]);return o};let b={},g=(0,i.d)((e,t)=>{let o=(0,l.w)("TypographyStylesProvider",b,e),{classNames:i,className:s,style:d,styles:p,unstyled:h}=o,u=m(o,["classNames","className","style","styles","unstyled"]),g=(0,a.y)({name:"TypographyStylesProvider",classes:n,props:o,className:s,style:d,classNames:i,styles:p,unstyled:h});return r.createElement(c.x,x(x({ref:t},g("root")),u))});g.classes=n,g.displayName="@mantine/core/TypographyStylesProvider"},80931:function(e,t,o){"use strict";function r(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}o.d(t,{v:function(){return r}})},29376:function(e,t,o){"use strict";o.d(t,{o:function(){return n}});var r=o(94389);function n(e,t){return e in t.breakpoints?(0,r.px)(t.breakpoints[e]):(0,r.px)(e)}},89305:function(e,t,o){"use strict";o.d(t,{I:function(){return n}});var r=o(29376);function n(e,t){let o=e.map(e=>({value:e,px:(0,r.o)(e,t)}));return o.sort((e,t)=>e.px-t.px),o}},78901:function(e,t,o){"use strict";o.d(t,{q:function(){return n}});var r=o(67294);function n(e=!1,t){let{onOpen:o,onClose:n}=t||{},[i,l]=(0,r.useState)(e),a=(0,r.useCallback)(()=>{l(e=>e||(null==o||o(),!0))},[o]),c=(0,r.useCallback)(()=>{l(e=>e?(null==n||n(),!1):e)},[n]),s=(0,r.useCallback)(()=>{i?c():a()},[c,a,i]);return[i,{open:a,close:c,toggle:s}]}},57730:function(e,t,o){"use strict";o.d(t,{U:function(){return n}});var r=o(67294);function n(e){let[t,o]=(0,r.useState)(e);return[t,e=>{if(e){if("function"==typeof e)o(e);else if("object"==typeof e&&"nativeEvent"in e){let{currentTarget:t}=e;o("checkbox"===t.type?t.checked:t.value)}else o(e)}else o(e)}]}}},function(e){e.O(0,[8345,6468,9905,9774,2888,179],function(){return e(e.s=98685)}),_N_E=e.O()}]);