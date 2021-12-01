var oe=Object.defineProperty;var z=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var L=(y,u,s)=>u in y?oe(y,u,{enumerable:!0,configurable:!0,writable:!0,value:s}):y[u]=s,M=(y,u)=>{for(var s in u||(u={}))ne.call(u,s)&&L(y,s,u[s]);if(z)for(var s of z(u))re.call(u,s)&&L(y,s,u[s]);return y};import{g as le,am as ie,i as f,u as de,C as ce,j as ue,k as x,D as me,l as fe,r as m,o as d,c as I,b as n,s as v,w as r,t as c,y as a,v as S,x as p,A as _,F as P,H as ve,z as pe}from"./vendor.e9042f2c.js";import{_ as _e}from"./InvoiceIndexDropdown.c26f9f0a.js";import{g as ye,f as be,u as ge,d as he,i as Be,e as F}from"./main.d8ec3f25.js";import{_ as xe}from"./SendInvoiceModal.a2b1bc3f.js";import{L as Ie}from"./LoadingIcon.1d7d9f05.js";const ke={class:"text-sm mr-3"},Ee={class:"fixed top-0 left-0 hidden h-full pt-16 pb-4 ml-56 bg-white xl:ml-64 w-88 xl:block"},Se={class:"flex items-center justify-between px-4 pt-8 pb-2 border border-gray-200 border-solid height-full"},we={class:"mb-6"},De={class:"flex mb-6 ml-3",role:"group","aria-label":"First group"},Te={class:"px-2 py-1 pb-2 mb-1 mb-2 text-sm border-b border-gray-200 border-solid"},Ve={key:0,class:"h-full pb-32 overflow-y-scroll border-l border-gray-200 border-solid base-scroll"},$e={class:"flex-2"},Fe={class:"pr-2 mb-2 text-sm not-italic font-normal leading-5 text-black capitalize truncate"},Ae={class:"mt-1 mb-2 text-xs not-italic font-medium leading-5 text-gray-600"},Ne={class:"flex-1 whitespace-nowrap right"},Ce={class:"text-sm not-italic font-normal leading-5 text-right text-gray-600 est-date"},je={class:"flex justify-center p-4 items-center"},Re={key:0,class:"flex justify-center px-4 mt-5 text-sm text-gray-600"},ze={class:"flex flex-col min-h-0 mt-8 overflow-hidden",style:{height:"75vh"}},Le=["src"],We={setup(y){const u=ye(),s=be();ge();const w=he(),U=Be(),{t:g}=le();ie("$utils"),f(null),f(null);const l=f(null);f(null);const k=de();ce(),f(["DRAFT","SENT","VIEWED","EXPIRED","ACCEPTED","REJECTED"]);const D=f(!1),O=f(!1);f(!1);const A=f(!1),h=f(!1),t=ue({orderBy:null,orderByField:null,searchText:null}),H=x(()=>l.value.invoice_number),N=x(()=>t.orderBy==="asc"||t.orderBy==null);x(()=>N.value?g("general.ascending"):g("general.descending"));const G=x(()=>`/invoices/pdf/${l.value.unique_hash}`);x(()=>l.value&&l.value.id?invoice.value.id:null),me(k,(e,i)=>{e.name==="invoices.view"&&j()});async function W(){U.openDialog({title:g("general.are_you_sure"),message:g("invoices.invoice_mark_as_sent"),yesLabel:g("general.ok"),noLabel:g("general.cancel"),variant:"primary",hideNoButton:!1,size:"lg"}).then(async e=>{D.value=!1,e&&(await s.markAsSent({id:l.value.id,status:"SENT"}),l.value.status="SENT",D.value=!0)})}async function q(e){u.openModal({title:g("invoices.send_invoice"),componentName:"SendInvoiceModal",id:l.value.id,data:l.value})}function J(e){return k.params.id==e}async function C(){h.value=!0,await s.fetchInvoices(),h.value=!1,setTimeout(()=>{X()},500)}function X(){const e=document.getElementById(`invoice-${k.params.id}`);e&&(e.scrollIntoView({behavior:"smooth"}),e.classList.add("shake"))}async function j(){let e=await s.fetchInvoice(k.params.id);e.data&&(l.value=M({},e.data.data))}async function b(){let e="";t.searchText!==""&&t.searchText!==null&&t.searchText!==void 0&&(e+=`search=${t.searchText}&`),t.orderBy!==null&&t.orderBy!==void 0&&(e+=`orderBy=${t.orderBy}&`),t.orderByField!==null&&t.orderByField!==void 0&&(e+=`orderByField=${t.orderByField}`),A.value=!0;let i=await s.searchInvoice(e);A.value=!1,i.data&&(s.invoices=i.data.data)}function Y(){return t.orderBy==="asc"?(t.orderBy="desc",b(),!0):(t.orderBy="asc",b(),!0)}return C(),j(),b=fe.exports.debounce(b,500),(e,i)=>{const B=m("BaseButton"),R=m("router-link"),K=m("BasePageHeader"),E=m("BaseIcon"),Q=m("BaseInput"),T=m("BaseRadio"),V=m("BaseInputGroup"),$=m("BaseDropdownItem"),Z=m("BaseDropdown"),ee=m("BaseEstimateStatusBadge"),te=m("BaseFormatMoney"),ae=m("BasePage");return d(),I(P,null,[n(xe),l.value?(d(),v(ae,{key:0,class:"xl:pl-96 xl:ml-8"},{default:r(()=>[n(K,{title:a(H)},{actions:r(()=>[c("div",ke,[l.value.status==="DRAFT"&&a(w).hasAbilities(a(F).EDIT_INVOICE)?(d(),v(B,{key:0,disabled:D.value,variant:"primary-outline",onClick:W},{default:r(()=>[S(p(e.$t("invoices.mark_as_sent")),1)]),_:1},8,["disabled"])):_("",!0)]),l.value.status==="DRAFT"&&a(w).hasAbilities(a(F).SEND_INVOICE)?(d(),v(B,{key:0,disabled:O.value,variant:"primary",class:"text-sm",onClick:q},{default:r(()=>[S(p(e.$t("invoices.send_invoice")),1)]),_:1},8,["disabled"])):_("",!0),a(w).hasAbilities(a(F).CREATE_PAYMENT)?(d(),v(R,{key:1,to:`/admin/payments/${e.$route.params.id}/create`},{default:r(()=>[l.value.status==="SENT"||l.value.status==="OVERDUE"||l.value.status==="VIEWED"?(d(),v(B,{key:0,variant:"primary"},{default:r(()=>[S(p(e.$t("invoices.record_payment")),1)]),_:1})):_("",!0)]),_:1},8,["to"])):_("",!0),n(_e,{class:"ml-3",row:l.value,"load-data":C},null,8,["row"])]),_:1},8,["title"]),c("div",Ee,[c("div",Se,[c("div",we,[n(Q,{modelValue:a(t).searchText,"onUpdate:modelValue":i[0]||(i[0]=o=>a(t).searchText=o),placeholder:e.$t("general.search"),type:"text",variant:"gray",onInput:i[1]||(i[1]=o=>b())},{right:r(()=>[n(E,{name:"SearchIcon",class:"h-5 text-gray-400"})]),_:1},8,["modelValue","placeholder"])]),c("div",De,[n(Z,{class:"ml-3",position:"bottom-start"},{activator:r(()=>[n(B,{size:"md",variant:"gray"},{default:r(()=>[n(E,{name:"FilterIcon"})]),_:1})]),default:r(()=>[c("div",Te,p(e.$t("general.sort_by")),1),n($,{class:"flex px-1 py-2 cursor-pointer"},{default:r(()=>[n(V,{class:"-mt-3 font-normal"},{default:r(()=>[n(T,{id:"filter_invoice_date",modelValue:a(t).orderByField,"onUpdate:modelValue":[i[2]||(i[2]=o=>a(t).orderByField=o),b],label:e.$t("reports.invoices.invoice_date"),size:"sm",name:"filter",value:"invoice_date"},null,8,["modelValue","label"])]),_:1})]),_:1}),n($,{class:"flex px-1 py-2 cursor-pointer"},{default:r(()=>[n(V,{class:"-mt-3 font-normal"},{default:r(()=>[n(T,{id:"filter_due_date",modelValue:a(t).orderByField,"onUpdate:modelValue":[i[3]||(i[3]=o=>a(t).orderByField=o),b],label:e.$t("invoices.due_date"),value:"due_date",size:"sm",name:"filter"},null,8,["modelValue","label"])]),_:1})]),_:1}),n($,{class:"flex px-1 py-2 cursor-pointer"},{default:r(()=>[n(V,{class:"-mt-3 font-normal"},{default:r(()=>[n(T,{id:"filter_invoice_number",modelValue:a(t).orderByField,"onUpdate:modelValue":[i[4]||(i[4]=o=>a(t).orderByField=o),b],label:e.$t("invoices.invoice_number"),value:"invoice_number",size:"sm",name:"filter"},null,8,["modelValue","label"])]),_:1})]),_:1})]),_:1}),n(B,{class:"ml-1",size:"md",variant:"gray",onClick:Y},{default:r(()=>[a(N)?(d(),v(E,{key:0,name:"SortAscendingIcon"})):(d(),v(E,{key:1,name:"SortDescendingIcon"}))]),_:1})])]),a(s)&&a(s).invoices?(d(),I("div",Ve,[(d(!0),I(P,null,ve(a(s).invoices,(o,se)=>(d(),I("div",{key:se},[o&&!h.value?(d(),v(R,{key:0,id:"invoice-"+o.id,to:`/admin/invoices/${o.id}/view`,class:pe(["flex justify-between side-invoice p-4 cursor-pointer hover:bg-gray-100 items-center border-l-4 border-transparent",{"bg-gray-100 border-l-4 border-primary-500 border-solid":J(o.id)}]),style:{"border-bottom":"1px solid rgba(185, 193, 209, 0.41)"}},{default:r(()=>[c("div",$e,[c("div",Fe,p(o.customer.name),1),c("div",Ae,p(o.invoice_number),1),n(ee,{status:o.status,class:"px-1 text-xs"},{default:r(()=>[S(p(o.status),1)]),_:2},1032,["status"])]),c("div",Ne,[n(te,{class:"mb-2 text-xl not-italic font-semibold leading-8 text-right text-gray-900 block",amount:o.total,currency:o.customer.currency},null,8,["amount","currency"]),c("div",Ce,p(o.formatted_invoice_date),1)])]),_:2},1032,["id","to","class"])):_("",!0)]))),128)),c("div",je,[h.value?(d(),v(Ie,{key:0,class:"h-6 m-1 animate-spin text-primary-400"})):_("",!0)]),!a(s).invoices.length&&!h.value?(d(),I("p",Re,p(e.$t("invoices.no_matching_invoices")),1)):_("",!0)])):_("",!0)]),c("div",ze,[c("iframe",{src:`${a(G)}`,class:"flex-1 border border-gray-400 border-solid bg-white rounded-md frame-style"},null,8,Le)])]),_:1})):_("",!0)],64)}}};export{We as default};
