(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{7276:(e,s,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(7769)}])},7769:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>c});var a=r(4848),n=r(6540),t=r(4335);let i=()=>{let[e,s]=(0,n.useState)(""),[r,i]=(0,n.useState)([]),[l,o]=(0,n.useState)(!1),[c,d]=(0,n.useState)(""),p=async()=>{try{o(!0),await t.A.post("/api/trips",{name:e}),u(),s(""),d("")}catch(e){var r,a;d("Error creando el viaje: "+((null===(a=e.response)||void 0===a?void 0:null===(r=a.data)||void 0===r?void 0:r.message)||e.message)),console.error("Error creando el viaje:",e)}finally{o(!1)}},u=async()=>{try{o(!0);let e=await t.A.get("/api/trips");i(e.data.trips),d("")}catch(r){var e,s;d("Error obteniendo los viajes: "+((null===(s=r.response)||void 0===s?void 0:null===(e=s.data)||void 0===e?void 0:e.message)||r.message)),console.error("Error obteniendo los viajes:",r)}finally{o(!1)}};return(0,n.useEffect)(()=>{u()},[]),(0,a.jsxs)("div",{className:"trip-container",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"Trip"}),(0,a.jsx)("input",{type:"text",value:e,onChange:e=>s(e.target.value),placeholder:"Enter trip name"}),(0,a.jsx)("button",{onClick:p,disabled:l,children:l?"Creating...":"Create New Trip"}),c&&(0,a.jsx)("p",{style:{color:"red"},children:c})]}),(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("h2",{className:"title-trips",children:"Your Trips"}),null==r?void 0:r.map(e=>(0,a.jsx)("li",{children:e.name},e._id))]})})]})},l=()=>{let[e,s]=(0,n.useState)(""),[r,i]=(0,n.useState)(""),[l,o]=(0,n.useState)([]),c=async()=>{try{await t.A.post("/api/expenses",{trip:e,amount:parseFloat(r)}),d(),s(""),i("")}catch(e){console.error("Error creando el gasto:",e)}},d=async()=>{try{let s=await t.A.get("/api/expenses",{params:{trip:e}});o(s.data.expenses)}catch(e){console.error("Error obteniendo los gastos:",e)}};return(0,n.useEffect)(()=>{e&&d()}),(0,a.jsxs)("div",{className:"expenses-container",children:[(0,a.jsxs)("div",{className:"expenses-container-input",children:[(0,a.jsx)("h2",{children:"Expenses"}),(0,a.jsx)("input",{type:"text",value:e,onChange:e=>s(e.target.value)}),(0,a.jsx)("input",{type:"number",value:r,onChange:e=>i(e.target.value),placeholder:"Monto"}),(0,a.jsx)("button",{onClick:c,children:"New Expense"})]}),(0,a.jsx)("div",{className:"expenses-container-a",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("h2",{className:"title-expenses",children:"Your Expenses"}),l.map(e=>(0,a.jsxs)("li",{children:[e.trip," $",e.amount]},e._id))]})})]})},o=()=>(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h1",{children:"Plan Your Dream Trip"}),(0,a.jsx)("p",{children:"Discover new destinations and create unforgettable experiences"})]});function c(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{children:(0,a.jsx)(o,{})}),(0,a.jsxs)("div",{className:"content-container",children:[(0,a.jsx)(i,{}),(0,a.jsx)(l,{})]})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[335,636,593,792],()=>s(7276)),_N_E=e.O()}]);