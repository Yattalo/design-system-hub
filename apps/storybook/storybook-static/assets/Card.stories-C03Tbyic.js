import{j as s}from"./index-Df7fr5hj.js";import{C as e,a as d,b as f,c as l}from"./index-DfK_zHqt.js";import"./index-D4H_InIO.js";import"./index-Dd8bRu6S.js";import"./index-U0U5CWNo.js";const T={title:"Cyberdeck/Card",component:e,parameters:{layout:"centered"},tags:["autodocs"]},a={render:()=>s.jsxs(e,{className:"w-[350px] font-mono",children:[s.jsx(d,{children:s.jsxs(f,{className:"text-sm",children:[s.jsx("span",{className:"opacity-60",children:">"})," SYSTEM_STATUS"]})}),s.jsxs(l,{className:"text-xs space-y-1",children:[s.jsxs("p",{children:["CPU: ",s.jsx("span",{className:"text-primary",children:"OK"})]}),s.jsxs("p",{children:["MEM: ",s.jsx("span",{className:"text-primary",children:"8.2GB FREE"})]}),s.jsxs("p",{children:["NET: ",s.jsx("span",{className:"text-primary",children:"CONNECTED"})]})]})]})},r={render:()=>s.jsxs(e,{className:"w-[400px] font-mono",children:[s.jsx(d,{className:"border-b border-border pb-2",children:s.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[s.jsx("span",{className:"w-3 h-3 rounded-full bg-destructive"}),s.jsx("span",{className:"w-3 h-3 rounded-full bg-yellow-500"}),s.jsx("span",{className:"w-3 h-3 rounded-full bg-primary"}),s.jsx("span",{className:"ml-2 text-muted-foreground",children:"~/projects/deck"})]})}),s.jsx(l,{className:"p-4 text-xs text-primary",children:s.jsx("pre",{children:`$ ls -la
drwxr-xr-x  user  4096  components/
drwxr-xr-x  user  4096  styles/
-rw-r--r--  user  2048  config.ts
$ _`})})]})},n={render:()=>s.jsxs(e,{className:"w-[300px] font-mono text-xs",children:[s.jsx(d,{children:s.jsx(f,{className:"text-sm",children:"[SYSTEM MONITOR]"})}),s.jsxs(l,{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex justify-between mb-1",children:[s.jsx("span",{children:"CPU"}),s.jsx("span",{className:"text-primary",children:"23%"})]}),s.jsx("div",{className:"h-2 bg-muted",children:s.jsx("div",{className:"h-full bg-primary",style:{width:"23%"}})})]}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex justify-between mb-1",children:[s.jsx("span",{children:"MEM"}),s.jsx("span",{className:"text-primary",children:"67%"})]}),s.jsx("div",{className:"h-2 bg-muted",children:s.jsx("div",{className:"h-full bg-primary",style:{width:"67%"}})})]}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex justify-between mb-1",children:[s.jsx("span",{children:"DISK"}),s.jsx("span",{className:"text-primary",children:"45%"})]}),s.jsx("div",{className:"h-2 bg-muted",children:s.jsx("div",{className:"h-full bg-primary",style:{width:"45%"}})})]})]})]})},t={render:()=>s.jsx(e,{className:"w-[400px] font-mono text-xs",children:s.jsxs(l,{className:"p-4 space-y-1",children:[s.jsxs("p",{children:[s.jsx("span",{className:"text-primary",children:">"})," LOADING CYBERDECK_UI v0.1.0"]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-primary",children:">"})," INITIALIZING MODULES..."]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-primary",children:">"})," CORE: [OK]"]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-primary",children:">"})," NETWORK: [OK]"]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-primary",children:">"})," SECURITY: [OK]"]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-primary",children:">"})," STATUS: ONLINE",s.jsx("span",{className:"animate-pulse",children:"_"})]})]})})};var c,p,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px] font-mono">
      <CardHeader>
        <CardTitle className="text-sm">
          <span className="opacity-60">&gt;</span> SYSTEM_STATUS
        </CardTitle>
      </CardHeader>
      <CardContent className="text-xs space-y-1">
        <p>CPU: <span className="text-primary">OK</span></p>
        <p>MEM: <span className="text-primary">8.2GB FREE</span></p>
        <p>NET: <span className="text-primary">CONNECTED</span></p>
      </CardContent>
    </Card>
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var i,x,o;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Card className="w-[400px] font-mono">
      <CardHeader className="border-b border-border pb-2">
        <div className="flex items-center gap-2 text-xs">
          <span className="w-3 h-3 rounded-full bg-destructive" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-primary" />
          <span className="ml-2 text-muted-foreground">~/projects/deck</span>
        </div>
      </CardHeader>
      <CardContent className="p-4 text-xs text-primary">
        <pre>{\`$ ls -la
drwxr-xr-x  user  4096  components/
drwxr-xr-x  user  4096  styles/
-rw-r--r--  user  2048  config.ts
$ _\`}</pre>
      </CardContent>
    </Card>
}`,...(o=(x=r.parameters)==null?void 0:x.docs)==null?void 0:o.source}}};var N,h,j;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Card className="w-[300px] font-mono text-xs">
      <CardHeader>
        <CardTitle className="text-sm">[SYSTEM MONITOR]</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span>CPU</span>
            <span className="text-primary">23%</span>
          </div>
          <div className="h-2 bg-muted">
            <div className="h-full bg-primary" style={{
            width: "23%"
          }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span>MEM</span>
            <span className="text-primary">67%</span>
          </div>
          <div className="h-2 bg-muted">
            <div className="h-full bg-primary" style={{
            width: "67%"
          }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span>DISK</span>
            <span className="text-primary">45%</span>
          </div>
          <div className="h-2 bg-muted">
            <div className="h-full bg-primary" style={{
            width: "45%"
          }} />
          </div>
        </div>
      </CardContent>
    </Card>
}`,...(j=(h=n.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var u,y,C;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Card className="w-[400px] font-mono text-xs">
      <CardContent className="p-4 space-y-1">
        <p><span className="text-primary">&gt;</span> LOADING CYBERDECK_UI v0.1.0</p>
        <p><span className="text-primary">&gt;</span> INITIALIZING MODULES...</p>
        <p><span className="text-primary">&gt;</span> CORE: [OK]</p>
        <p><span className="text-primary">&gt;</span> NETWORK: [OK]</p>
        <p><span className="text-primary">&gt;</span> SECURITY: [OK]</p>
        <p><span className="text-primary">&gt;</span> STATUS: ONLINE<span className="animate-pulse">_</span></p>
      </CardContent>
    </Card>
}`,...(C=(y=t.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const S=["Default","Terminal","SystemMonitor","BootSequence"];export{t as BootSequence,a as Default,n as SystemMonitor,r as Terminal,S as __namedExportsOrder,T as default};
