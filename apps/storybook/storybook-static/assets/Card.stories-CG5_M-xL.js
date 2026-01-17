import{j as e}from"./index-Df7fr5hj.js";import{C as a,a as l,b as c,c as H,d as r,e as T,B as F}from"./index-DcFJ2UL5.js";import"./index-D4H_InIO.js";import"./index-Dd8bRu6S.js";import"./index-U0U5CWNo.js";const E={title:"Bubblegum/Card",component:a,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsxs(a,{className:"w-[350px]",children:[e.jsxs(l,{children:[e.jsxs(c,{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl",children:"🍬"}),"Sweet Deal!"]}),e.jsx(H,{children:"Get 50% off your first order"})]}),e.jsx(r,{children:e.jsx("p",{children:"Limited time offer on all candy products."})}),e.jsx(T,{children:e.jsx(F,{className:"rounded-full",children:"Grab it now!"})})]})},n={render:()=>e.jsxs(a,{className:"w-[350px]",style:{boxShadow:"0 4px 0 0 rgba(255, 105, 180, 0.3), 0 8px 20px -4px rgba(255, 105, 180, 0.2)"},children:[e.jsx(l,{children:e.jsx(c,{children:"Candy Shadow"})}),e.jsx(r,{children:e.jsx("p",{children:"Cards with playful colored shadows."})})]})},t={render:()=>e.jsx("div",{className:"grid grid-cols-3 gap-6",children:["🍬","🍭","🍫"].map((D,i)=>e.jsx(a,{className:"cursor-pointer hover:scale-105 transition-transform",style:{boxShadow:"0 4px 0 0 rgba(255, 105, 180, 0.3)"},children:e.jsxs(r,{className:"p-8 text-center",children:[e.jsx("span",{className:"text-5xl block mb-4",children:D}),e.jsxs("h3",{className:"font-bold text-lg",children:["Product ",i+1]}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"$9.99"})]})},i))})},d={render:()=>e.jsx(a,{className:"w-[300px] border-2 border-primary",children:e.jsxs(r,{className:"p-4 flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🎉"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold",children:"Congrats!"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"You earned a badge!"})]})]})})},o={render:()=>e.jsxs("div",{className:"relative p-8",children:[e.jsx("div",{className:"absolute top-2 left-2 w-8 h-8 bg-pink-300 rounded-full opacity-60"}),e.jsx("div",{className:"absolute top-6 right-4 w-6 h-6 bg-cyan-300 rounded-full opacity-50"}),e.jsx("div",{className:"absolute bottom-4 left-8 w-10 h-10 bg-yellow-300 rounded-full opacity-40"}),e.jsxs(a,{className:"relative w-[300px]",children:[e.jsx(l,{children:e.jsxs(c,{className:"flex items-center gap-2",children:[e.jsx("span",{children:"✨"}),"Magic Card"]})}),e.jsx(r,{children:e.jsx("p",{children:"With floating candy decorations!"})})]})]})};var p,m,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🍬</span>
          Sweet Deal!
        </CardTitle>
        <CardDescription>Get 50% off your first order</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Limited time offer on all candy products.</p>
      </CardContent>
      <CardFooter>
        <Button className="rounded-full">Grab it now!</Button>
      </CardFooter>
    </Card>
}`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var u,C,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]" style={{
    boxShadow: "0 4px 0 0 rgba(255, 105, 180, 0.3), 0 8px 20px -4px rgba(255, 105, 180, 0.2)"
  }}>
      <CardHeader>
        <CardTitle>Candy Shadow</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Cards with playful colored shadows.</p>
      </CardContent>
    </Card>
}`,...(h=(C=n.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var g,f,N;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-6">
      {["🍬", "🍭", "🍫"].map((emoji, i) => <Card key={i} className="cursor-pointer hover:scale-105 transition-transform" style={{
      boxShadow: "0 4px 0 0 rgba(255, 105, 180, 0.3)"
    }}>
          <CardContent className="p-8 text-center">
            <span className="text-5xl block mb-4">{emoji}</span>
            <h3 className="font-bold text-lg">Product {i + 1}</h3>
            <p className="text-muted-foreground text-sm">$9.99</p>
          </CardContent>
        </Card>)}
    </div>
}`,...(N=(f=t.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var b,j,w;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Card className="w-[300px] border-2 border-primary">
      <CardContent className="p-4 flex items-center gap-3">
        <span className="text-3xl">🎉</span>
        <div>
          <p className="font-bold">Congrats!</p>
          <p className="text-sm text-muted-foreground">You earned a badge!</p>
        </div>
      </CardContent>
    </Card>
}`,...(w=(j=d.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var y,v,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="relative p-8">
      {/* Floating decorations */}
      <div className="absolute top-2 left-2 w-8 h-8 bg-pink-300 rounded-full opacity-60" />
      <div className="absolute top-6 right-4 w-6 h-6 bg-cyan-300 rounded-full opacity-50" />
      <div className="absolute bottom-4 left-8 w-10 h-10 bg-yellow-300 rounded-full opacity-40" />

      <Card className="relative w-[300px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>✨</span>
            Magic Card
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>With floating candy decorations!</p>
        </CardContent>
      </Card>
    </div>
}`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const L=["Default","WithShadow","ProductGrid","Notification","FloatingCard"];export{s as Default,o as FloatingCard,d as Notification,t as ProductGrid,n as WithShadow,L as __namedExportsOrder,E as default};
