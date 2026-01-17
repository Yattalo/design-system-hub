import{j as e}from"./index-Df7fr5hj.js";import{B as r}from"./index-ChUS1HbI.js";import"./index-D4H_InIO.js";import"./index-Dd8bRu6S.js";import"./index-U0U5CWNo.js";const C={title:"Hologram/Button",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","outline","secondary","ghost","link"]},size:{control:"select",options:["default","sm","lg","icon"]}}},a={args:{children:"Activate",variant:"default"}},t={args:{children:"Configure",variant:"secondary"}},n={args:{children:"Deactivate",variant:"destructive"}},s={render:()=>e.jsx(r,{className:"bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500",children:e.jsx("span",{className:"text-white",children:"Initialize Portal"})})},o={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(r,{children:"Activate"}),e.jsx(r,{variant:"secondary",children:"Configure"}),e.jsx(r,{variant:"destructive",children:"Terminate"}),e.jsx(r,{variant:"outline",children:"Scan"}),e.jsx(r,{variant:"ghost",children:"Menu"}),e.jsx(r,{variant:"link",children:"Learn more"})]})},i={render:()=>e.jsx("div",{className:"relative p-8 rounded-xl",style:{background:"linear-gradient(135deg, #a855f7, #ec4899, #06b6d4)"},children:e.jsx(r,{variant:"secondary",className:"backdrop-blur-xl bg-white/10 border-white/20",children:"Glass Button"})})};var c,d,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: "Activate",
    variant: "default"
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,m,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Configure",
    variant: "secondary"
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var v,g,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Deactivate",
    variant: "destructive"
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,f,B;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Button className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
      <span className="text-white">Initialize Portal</span>
    </Button>
}`,...(B=(f=s.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var y,b,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Button>Activate</Button>
      <Button variant="secondary">Configure</Button>
      <Button variant="destructive">Terminate</Button>
      <Button variant="outline">Scan</Button>
      <Button variant="ghost">Menu</Button>
      <Button variant="link">Learn more</Button>
    </div>
}`,...(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var N,S,k;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="relative p-8 rounded-xl" style={{
    background: "linear-gradient(135deg, #a855f7, #ec4899, #06b6d4)"
  }}>
      <Button variant="secondary" className="backdrop-blur-xl bg-white/10 border-white/20">
        Glass Button
      </Button>
    </div>
}`,...(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const E=["Default","Secondary","Destructive","WithGradientText","AllVariants","GlassEffect"];export{o as AllVariants,a as Default,n as Destructive,i as GlassEffect,t as Secondary,s as WithGradientText,E as __namedExportsOrder,C as default};
