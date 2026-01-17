import{j as a}from"./index-Df7fr5hj.js";import{B as t}from"./index-DfK_zHqt.js";import"./index-D4H_InIO.js";import"./index-Dd8bRu6S.js";import"./index-U0U5CWNo.js";const M={title:"Cyberdeck/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","outline","secondary","ghost","link"]},size:{control:"select",options:["default","sm","lg","icon"]}}},r={args:{children:"EXECUTE",variant:"default"}},s={args:{children:"CANCEL",variant:"secondary"}},e={args:{children:"TERMINATE",variant:"destructive"}},n={render:()=>a.jsxs(t,{children:[a.jsx("span",{className:"opacity-60 mr-2",children:"$"}),"RUN PROGRAM"]})},o={render:()=>a.jsxs("div",{className:"flex flex-wrap gap-4 font-mono",children:[a.jsx(t,{children:"$ EXECUTE"}),a.jsx(t,{variant:"secondary",children:"STANDBY"}),a.jsx(t,{variant:"destructive",children:"ABORT"}),a.jsx(t,{variant:"outline",children:"STATUS"}),a.jsx(t,{variant:"ghost",children:"[MENU]"}),a.jsx(t,{variant:"link",children:"./help"})]})},c={render:()=>a.jsxs("div",{className:"flex flex-col gap-2 font-mono text-sm",children:[a.jsxs(t,{variant:"ghost",className:"justify-start",children:[a.jsx("span",{className:"text-primary mr-2",children:">"})," ls -la"]}),a.jsxs(t,{variant:"ghost",className:"justify-start",children:[a.jsx("span",{className:"text-primary mr-2",children:">"})," cat config.ts"]}),a.jsxs(t,{variant:"ghost",className:"justify-start",children:[a.jsx("span",{className:"text-primary mr-2",children:">"})," npm run build"]})]})};var i,l,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "EXECUTE",
    variant: "default"
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,u,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "CANCEL",
    variant: "secondary"
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var x,v,h;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "TERMINATE",
    variant: "destructive"
  }
}`,...(h=(v=e.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var g,f,N;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Button>
      <span className="opacity-60 mr-2">$</span>
      RUN PROGRAM
    </Button>
}`,...(N=(f=n.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var B,j,y;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4 font-mono">
      <Button>$ EXECUTE</Button>
      <Button variant="secondary">STANDBY</Button>
      <Button variant="destructive">ABORT</Button>
      <Button variant="outline">STATUS</Button>
      <Button variant="ghost">[MENU]</Button>
      <Button variant="link">./help</Button>
    </div>
}`,...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var E,T,A;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2 font-mono text-sm">
      <Button variant="ghost" className="justify-start">
        <span className="text-primary mr-2">&gt;</span> ls -la
      </Button>
      <Button variant="ghost" className="justify-start">
        <span className="text-primary mr-2">&gt;</span> cat config.ts
      </Button>
      <Button variant="ghost" className="justify-start">
        <span className="text-primary mr-2">&gt;</span> npm run build
      </Button>
    </div>
}`,...(A=(T=c.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};const O=["Default","Secondary","Destructive","WithTerminalPrefix","AllVariants","TerminalCommands"];export{o as AllVariants,r as Default,e as Destructive,s as Secondary,c as TerminalCommands,n as WithTerminalPrefix,O as __namedExportsOrder,M as default};
