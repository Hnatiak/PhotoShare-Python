"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[530],{530:(e,a,t)=>{t.r(a),t.d(a,{default:()=>f});var n=t(43),r=t(213),s=t(216),i=t(3),c=t(266),o=t(579);const f=function(){const e=(0,s.Zp)(),a=(0,s.zy)(),t=(0,i.wA)(),[f,h]=(0,n.useState)("");return(0,n.useEffect)((()=>{(async()=>{const n=new URLSearchParams(a.search).get("token");if(n)try{const a=await r.A.get("/api/auth/refresh_token");if(h(a.data.message),"Email confirmed"===a.data.message){const a=await r.A.get("/api/auth/refresh_token");t((0,c.iD)({email:a,token:n})),e("/")}}catch(s){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u044f \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438:",s),h("Verification error")}else h("Invalid confirmation link")})()}),[t,a.search,e]),(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"Email Confirmation"}),(0,o.jsx)("p",{children:f||"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u044f \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438..."})]})}}}]);
//# sourceMappingURL=530.5dd4da49.chunk.js.map