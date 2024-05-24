"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[670],{4670:(e,n,i)=>{i.r(n),i.d(n,{default:()=>b});var r,t,l,s,d,o=i(5043),a=i(3003),c=i(1129),u=i(7528),h=i(789);const p=h.A.div(r||(r=(0,u.A)(["\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 25px;\n    padding: 45px;\n    -webkit-box-align: center;\n    align-items: center;\n"]))),x=h.A.div(t||(t=(0,u.A)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),g=h.A.div(l||(l=(0,u.A)(["\n  background: white;\n  padding: 20px;\n  border-radius: 10px;\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),f=h.A.button(s||(s=(0,u.A)(["\n  font-style: normal;\n  font-weight: var(--fontWeight500);\n  font-size: 14px;\n  line-height: 21px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  width: 100%;\n  height: 29px;\n  background: rgb(154, 196, 60);\n  border-radius: 8px;\n  margin-top: 10px;\n  &:hover {\n    background-color: #0056b3;\n  }\n"]))),m=h.A.select(d||(d=(0,u.A)(["\n  padding: 5px 40px;\n"])));var j=i(3401),v=i(579);const b=()=>{const e=(0,a.wA)(),{users:n}=(0,a.d4)((e=>e.user)),i=(0,a.d4)((e=>e.auth.user)),[r,t]=(0,o.useState)(null),[l,s]=(0,o.useState)(""),[d,u]=(0,o.useState)(!1);(0,o.useEffect)((()=>{e((0,c.hU)({skip:0,limit:10}))}),[e]);const h=()=>{t(null),s(""),u(!1)};if(!n||0===n.length)return(0,v.jsx)("div",{children:"No users found."});const b=n.filter((e=>e.id!==i.id));return(0,v.jsxs)(p,{children:[b.map((e=>(0,v.jsxs)("div",{children:[(0,v.jsxs)("h2",{children:["Username: ",e.username]}),(0,v.jsxs)("p",{children:["Email: ",e.email]}),(0,v.jsxs)("p",{children:["Role: ",e.role]}),(0,v.jsx)(f,{onClick:()=>(e=>{t(e),u(!0)})(e),children:"Edit Role"})]},e.id))),d&&(0,v.jsx)(x,{children:(0,v.jsxs)(g,{children:[(0,v.jsxs)("h2",{children:["Edit Role for ",null===r||void 0===r?void 0:r.username]}),(0,v.jsxs)(m,{value:l,onChange:e=>{s(e.target.value)},children:[(0,v.jsx)("option",{value:"",disabled:!0,children:"Select new role"}),(0,v.jsx)("option",{value:"user",children:"User"}),(0,v.jsx)("option",{value:"moderator",children:"Moderator"}),(0,v.jsx)("option",{value:"admin",children:"Admin"})]}),(0,v.jsx)(f,{onClick:()=>{r&&l?(e((0,c.v_)({userId:r.id,newRole:l})).then((()=>{h()})).catch((e=>{console.error("Failed to update role:",e)})),j.oR.success("Role updated successfully")):j.oR.error("Please select a user and select a new role")},children:"Submit"}),(0,v.jsx)(f,{onClick:h,children:"Cancel"})]})})]})}}}]);
//# sourceMappingURL=670.f9748e64.chunk.js.map