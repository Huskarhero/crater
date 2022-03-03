var ce=Object.defineProperty;var G=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var q=(p,m,i)=>m in p?ce(p,m,{enumerable:!0,configurable:!0,writable:!0,value:i}):p[m]=i,z=(p,m)=>{for(var i in m||(m={}))ue.call(m,i)&&q(p,i,m[i]);if(G)for(var i of G(m))me.call(m,i)&&q(p,i,m[i]);return p};import{J as ve,B,G as fe,a0 as pe,k as F,C as _e,A as ye,r as d,o as c,e as V,f as s,l as y,w as o,h as u,u as n,i as D,t as g,j as b,F as J,y as ge,m as be}from"./vendor.d12b5734.js";import{c as he,i as Be,e as xe,j as Ie,g as P}from"./main.6ceeb72d.js";import{_ as ke}from"./SendInvoiceModal.224b5c76.js";import{_ as Se}from"./InvoiceIndexDropdown.78aec816.js";import{L as we}from"./LoadingIcon.66b14768.js";import"./mail-driver.c62711d2.js";const Te={class:"text-sm mr-3"},Fe={class:"fixed top-0 left-0 hidden h-full pt-16 pb-[6.4rem] ml-56 bg-white xl:ml-64 w-88 xl:block"},Ve={class:"flex items-center justify-between px-4 pt-8 pb-2 border border-gray-200 border-solid height-full"},Ee={class:"mb-6"},$e={class:"flex mb-6 ml-3",role:"group","aria-label":"First group"},De={class:"px-2 py-1 pb-2 mb-1 mb-2 text-sm border-b border-gray-200 border-solid"},Ne={class:"flex-2"},je={class:"mt-1 mb-2 text-xs not-italic font-medium leading-5 text-gray-600"},Ae={class:"flex-1 whitespace-nowrap right"},Le={class:"text-sm not-italic font-normal leading-5 text-right text-gray-600 est-date"},Ce={key:0,class:"flex justify-center p-4 items-center"},Me={key:1,class:"flex justify-center px-4 mt-5 text-sm text-gray-600"},ze={class:"flex flex-col min-h-0 mt-8 overflow-hidden",style:{height:"75vh"}},Pe=["src"],We={setup(p){const m=he(),i=Be(),N=xe(),W=Ie(),{t:h}=ve(),l=B(null),I=fe(),E=B(!1),k=B(!1),v=B(null),S=B(1),j=B(1),U=B(null),t=pe({orderBy:null,orderByField:null,searchText:null}),Y=F(()=>l.value.invoice_number),R=F(()=>t.orderBy==="asc"||t.orderBy==null);F(()=>R.value?h("general.ascending"):h("general.descending"));const K=F(()=>`/invoices/pdf/${l.value.unique_hash}`);F(()=>l.value&&l.value.id?invoice.value.id:null),_e(I,(e,r)=>{e.name==="invoices.view"&&H()});async function Q(){W.openDialog({title:h("general.are_you_sure"),message:h("invoices.invoice_mark_as_sent"),yesLabel:h("general.ok"),noLabel:h("general.cancel"),variant:"primary",hideNoButton:!1,size:"lg"}).then(async e=>{E.value=!1,e&&(await i.markAsSent({id:l.value.id,status:"SENT"}),l.value.status="SENT",E.value=!0),E.value=!1})}async function X(e){m.openModal({title:h("invoices.send_invoice"),componentName:"SendInvoiceModal",id:l.value.id,data:l.value})}function Z(e){return I.params.id==e}async function w(e,r=!1){if(k.value)return;let f={};t.searchText!==""&&t.searchText!==null&&t.searchText!==void 0&&(f.search=t.searchText),t.orderBy!==null&&t.orderBy!==void 0&&(f.orderBy=t.orderBy),t.orderByField!==null&&t.orderByField!==void 0&&(f.orderByField=t.orderByField),k.value=!0;let T=await i.fetchInvoices(z({page:e},f));k.value=!1,v.value=v.value?v.value:[],v.value=[...v.value,...T.data.data],S.value=e||1,j.value=T.data.meta.last_page;let $=v.value.find(x=>x.id==I.params.id);r==!1&&!$&&S.value<j.value&&Object.keys(f).length===0&&w(++S.value),$&&setTimeout(()=>{r==!1&&ee()},500)}function ee(){const e=document.getElementById(`invoice-${I.params.id}`);e&&(e.scrollIntoView({behavior:"smooth"}),e.classList.add("shake"),te())}function te(){U.value.addEventListener("scroll",e=>{e.target.scrollTop>0&&e.target.scrollTop+e.target.clientHeight>e.target.scrollHeight-200&&S.value<j.value&&w(++S.value,!0)})}async function H(){let e=await i.fetchInvoice(I.params.id);e.data&&(l.value=z({},e.data.data))}async function _(){v.value=[],w()}function ae(){return t.orderBy==="asc"?(t.orderBy="desc",_(),!0):(t.orderBy="asc",_(),!0)}function se(){let e=v.value.findIndex(r=>r.id===l.value.id);v.value[e]&&(v.value[e].status="SENT",l.value.status="SENT")}return w(),H(),_=ye.exports.debounce(_,500),(e,r)=>{const f=d("BaseButton"),T=d("router-link"),$=d("BasePageHeader"),x=d("BaseIcon"),oe=d("BaseInput"),A=d("BaseRadio"),L=d("BaseInputGroup"),C=d("BaseDropdownItem"),le=d("BaseDropdown"),ne=d("BaseText"),re=d("BaseEstimateStatusBadge"),ie=d("BaseFormatMoney"),de=d("BasePage");return c(),V(J,null,[s(ke,{onUpdate:se}),l.value?(c(),y(de,{key:0,class:"xl:pl-96 xl:ml-8"},{default:o(()=>{var O;return[s($,{title:n(Y)},{actions:o(()=>[u("div",Te,[l.value.status==="DRAFT"&&n(N).hasAbilities(n(P).EDIT_INVOICE)?(c(),y(f,{key:0,disabled:E.value,variant:"primary-outline",onClick:Q},{default:o(()=>[D(g(e.$t("invoices.mark_as_sent")),1)]),_:1},8,["disabled"])):b("",!0)]),l.value.status==="DRAFT"&&n(N).hasAbilities(n(P).SEND_INVOICE)?(c(),y(f,{key:0,variant:"primary",class:"text-sm",onClick:X},{default:o(()=>[D(g(e.$t("invoices.send_invoice")),1)]),_:1})):b("",!0),n(N).hasAbilities(n(P).CREATE_PAYMENT)?(c(),y(T,{key:1,to:`/admin/payments/${e.$route.params.id}/create`},{default:o(()=>[l.value.status==="SENT"||l.value.status==="VIEWED"?(c(),y(f,{key:0,variant:"primary"},{default:o(()=>[D(g(e.$t("invoices.record_payment")),1)]),_:1})):b("",!0)]),_:1},8,["to"])):b("",!0),s(Se,{class:"ml-3",row:l.value,"load-data":w},null,8,["row"])]),_:1},8,["title"]),u("div",Fe,[u("div",Ve,[u("div",Ee,[s(oe,{modelValue:n(t).searchText,"onUpdate:modelValue":r[0]||(r[0]=a=>n(t).searchText=a),placeholder:e.$t("general.search"),type:"text",variant:"gray",onInput:r[1]||(r[1]=a=>_())},{right:o(()=>[s(x,{name:"SearchIcon",class:"h-5 text-gray-400"})]),_:1},8,["modelValue","placeholder"])]),u("div",$e,[s(le,{class:"ml-3",position:"bottom-start"},{activator:o(()=>[s(f,{size:"md",variant:"gray"},{default:o(()=>[s(x,{name:"FilterIcon"})]),_:1})]),default:o(()=>[u("div",De,g(e.$t("general.sort_by")),1),s(C,{class:"flex px-1 py-2 cursor-pointer"},{default:o(()=>[s(L,{class:"-mt-3 font-normal"},{default:o(()=>[s(A,{id:"filter_invoice_date",modelValue:n(t).orderByField,"onUpdate:modelValue":[r[2]||(r[2]=a=>n(t).orderByField=a),_],label:e.$t("reports.invoices.invoice_date"),size:"sm",name:"filter",value:"invoice_date"},null,8,["modelValue","label"])]),_:1})]),_:1}),s(C,{class:"flex px-1 py-2 cursor-pointer"},{default:o(()=>[s(L,{class:"-mt-3 font-normal"},{default:o(()=>[s(A,{id:"filter_due_date",modelValue:n(t).orderByField,"onUpdate:modelValue":[r[3]||(r[3]=a=>n(t).orderByField=a),_],label:e.$t("invoices.due_date"),value:"due_date",size:"sm",name:"filter"},null,8,["modelValue","label"])]),_:1})]),_:1}),s(C,{class:"flex px-1 py-2 cursor-pointer"},{default:o(()=>[s(L,{class:"-mt-3 font-normal"},{default:o(()=>[s(A,{id:"filter_invoice_number",modelValue:n(t).orderByField,"onUpdate:modelValue":[r[4]||(r[4]=a=>n(t).orderByField=a),_],label:e.$t("invoices.invoice_number"),value:"invoice_number",size:"sm",name:"filter"},null,8,["modelValue","label"])]),_:1})]),_:1})]),_:1}),s(f,{class:"ml-1",size:"md",variant:"gray",onClick:ae},{default:o(()=>[n(R)?(c(),y(x,{key:0,name:"SortAscendingIcon"})):(c(),y(x,{key:1,name:"SortDescendingIcon"}))]),_:1})])]),u("div",{ref:(a,M)=>{M.invoiceListSection=a,U.value=a},class:"h-full overflow-y-scroll border-l border-gray-200 border-solid base-scroll"},[(c(!0),V(J,null,ge(v.value,(a,M)=>(c(),V("div",{key:M},[a?(c(),y(T,{key:0,id:"invoice-"+a.id,to:`/admin/invoices/${a.id}/view`,class:be(["flex justify-between side-invoice p-4 cursor-pointer hover:bg-gray-100 items-center border-l-4 border-transparent",{"bg-gray-100 border-l-4 border-primary-500 border-solid":Z(a.id)}]),style:{"border-bottom":"1px solid rgba(185, 193, 209, 0.41)"}},{default:o(()=>[u("div",Ne,[s(ne,{text:a.customer.name,length:30,class:"pr-2 mb-2 text-sm not-italic font-normal leading-5 text-black capitalize truncate"},null,8,["text"]),u("div",je,g(a.invoice_number),1),s(re,{status:a.status,class:"px-1 text-xs"},{default:o(()=>[D(g(a.status),1)]),_:2},1032,["status"])]),u("div",Ae,[s(ie,{class:"mb-2 text-xl not-italic font-semibold leading-8 text-right text-gray-900 block",amount:a.total,currency:a.customer.currency},null,8,["amount","currency"]),u("div",Le,g(a.formatted_invoice_date),1)])]),_:2},1032,["id","to","class"])):b("",!0)]))),128)),k.value?(c(),V("div",Ce,[s(we,{class:"h-6 m-1 animate-spin text-primary-400"})])):b("",!0),!((O=v.value)==null?void 0:O.length)&&!k.value?(c(),V("p",Me,g(e.$t("invoices.no_matching_invoices")),1)):b("",!0)],512)]),u("div",ze,[u("iframe",{src:`${n(K)}`,class:"flex-1 border border-gray-400 border-solid bg-white rounded-md frame-style"},null,8,Pe)])]}),_:1})):b("",!0)],64)}}};export{We as default};
