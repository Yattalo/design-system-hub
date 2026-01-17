import{j as r}from"./index-Df7fr5hj.js";import{C as e,a as i,b as l,c as v,d as o,e as k,B as y}from"./index-ChUS1HbI.js";import"./index-D4H_InIO.js";import"./index-Dd8bRu6S.js";import"./index-U0U5CWNo.js";const I={title:"Hologram/Card",component:e,parameters:{layout:"centered"},tags:["autodocs"]},d={render:()=>r.jsxs(e,{className:"w-[350px]",children:[r.jsxs(i,{children:[r.jsx(l,{className:"bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent",children:"Holographic Interface"}),r.jsx(v,{children:"Tomorrow's UI, rendered today"})]}),r.jsx(o,{children:r.jsx("p",{className:"text-muted-foreground",children:"Iridescent gradients and prismatic effects."})}),r.jsx(k,{children:r.jsx(y,{children:"Activate"})})]})},t={render:()=>r.jsx("div",{className:"p-[2px] rounded-[18px]",style:{background:"linear-gradient(135deg, #a855f7, #ec4899, #06b6d4, #a855f7)",backgroundSize:"300% 300%",animation:"gradient 4s ease infinite"},children:r.jsxs(e,{className:"bg-card/95 backdrop-blur-xl",children:[r.jsx(i,{children:r.jsx(l,{children:"Prismatic Border"})}),r.jsx(o,{children:r.jsx("p",{children:"Animated gradient border effect."})})]})})},s={render:()=>r.jsxs("div",{className:"relative p-8",children:[r.jsx("div",{className:"absolute top-0 left-0 w-32 h-32 rounded-full opacity-50",style:{background:"radial-gradient(circle, rgba(168,85,247,0.6), transparent)",filter:"blur(40px)"}}),r.jsx("div",{className:"absolute bottom-0 right-0 w-24 h-24 rounded-full opacity-40",style:{background:"radial-gradient(circle, rgba(236,72,153,0.6), transparent)",filter:"blur(40px)"}}),r.jsxs(e,{className:"relative bg-card/80 backdrop-blur-xl w-[300px]",children:[r.jsx(i,{children:r.jsx(l,{className:"font-light",children:"Glass Effect"})}),r.jsx(o,{children:r.jsx("p",{className:"text-sm text-muted-foreground",children:"Frosted glass with ambient orbs."})})]})]})},n={render:()=>r.jsx("div",{className:"grid grid-cols-3 gap-4",children:[1,2,3].map(a=>r.jsxs(e,{className:"bg-card/80 backdrop-blur-xl",children:[r.jsx(i,{children:r.jsxs(l,{className:"text-lg font-light",children:["Module ",a]})}),r.jsx(o,{children:r.jsx("div",{className:"h-16 rounded-lg",style:{background:`linear-gradient(135deg,
                  hsl(${260+a*20} 100% 70% / 0.2),
                  hsl(${300+a*20} 100% 70% / 0.1)
                )`}})})]},a))})};var c,p,m;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          Holographic Interface
        </CardTitle>
        <CardDescription>Tomorrow's UI, rendered today</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Iridescent gradients and prismatic effects.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Activate</Button>
      </CardFooter>
    </Card>
}`,...(m=(p=d.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,u,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="p-[2px] rounded-[18px]" style={{
    background: "linear-gradient(135deg, #a855f7, #ec4899, #06b6d4, #a855f7)",
    backgroundSize: "300% 300%",
    animation: "gradient 4s ease infinite"
  }}>
      <Card className="bg-card/95 backdrop-blur-xl">
        <CardHeader>
          <CardTitle>Prismatic Border</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Animated gradient border effect.</p>
        </CardContent>
      </Card>
    </div>
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var b,C,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="relative p-8">
      {/* Background orbs */}
      <div className="absolute top-0 left-0 w-32 h-32 rounded-full opacity-50" style={{
      background: "radial-gradient(circle, rgba(168,85,247,0.6), transparent)",
      filter: "blur(40px)"
    }} />
      <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full opacity-40" style={{
      background: "radial-gradient(circle, rgba(236,72,153,0.6), transparent)",
      filter: "blur(40px)"
    }} />

      <Card className="relative bg-card/80 backdrop-blur-xl w-[300px]">
        <CardHeader>
          <CardTitle className="font-light">Glass Effect</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Frosted glass with ambient orbs.
          </p>
        </CardContent>
      </Card>
    </div>
}`,...(h=(C=s.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var f,j,N;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-4">
      {[1, 2, 3].map(i => <Card key={i} className="bg-card/80 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-lg font-light">Module {i}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-16 rounded-lg" style={{
          background: \`linear-gradient(135deg,
                  hsl(\${260 + i * 20} 100% 70% / 0.2),
                  hsl(\${300 + i * 20} 100% 70% / 0.1)
                )\`
        }} />
          </CardContent>
        </Card>)}
    </div>
}`,...(N=(j=n.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const S=["Default","WithPrismaticBorder","GlassCard","ModuleGrid"];export{d as Default,s as GlassCard,n as ModuleGrid,t as WithPrismaticBorder,S as __namedExportsOrder,I as default};
