import{u as ee,C as te,g as ae,i as m,j as M,am as se,k as g,h as oe,D as ne,l as re,r as i,o as c,c as p,b as o,w as n,y as t,s as v,v as le,x as _,A as y,t as r,F as C,H as de,z as ie}from"./vendor.e9042f2c.js";import{o as ce,g as ue,d as me,i as fe,e as _e}from"./main.d8ec3f25.js";import{_ as pe,a as ye}from"./SendPaymentModal.886cb222.js";import{L as he}from"./LoadingIcon.1d7d9f05.js";const be={class:"fixed top-0 left-0 hidden h-full pt-16 pb-4 ml-56 bg-white xl:ml-64 w-88 xl:block"},ge={class:"flex items-center justify-between px-4 pt-8 pb-6 border border-gray-200 border-solid"},ve={class:"flex ml-3",role:"group","aria-label":"First group"},Be={class:"px-4 py-1 pb-2 mb-2 text-sm border-b border-gray-200 border-solid"},xe={class:"px-2"},we={class:"px-2"},ke={class:"px-2"},Fe={key:0,class:"h-full pb-32 overflow-y-scroll border-l border-gray-200 border-solid"},Ie={class:"flex-2"},Ve={class:"pr-2 mb-2 text-sm not-italic font-normal leading-5 text-black capitalize truncate"},Pe={class:"mb-1 text-xs not-italic font-medium leading-5 text-gray-500 capitalize"},Se={class:"mb-1 text-xs not-italic font-medium leading-5 text-gray-500 capitalize"},De={class:"flex-1 whitespace-nowrap right"},Te={class:"text-sm text-right text-gray-500 non-italic"},$e={class:"flex justify-center p-4 items-center"},je={key:0,class:"flex justify-center px-4 mt-5 text-sm text-gray-600"},ze={class:"flex flex-col min-h-0 mt-8 overflow-hidden",style:{height:"75vh"}},Me=["src"],Ee={setup(Ce){const h=ee();te();const{t:w}=ae();m(null),m(null);let f=M({});m(null);let s=M({orderBy:"",orderByField:"",searchText:""}),k=m(!1),L=m(!1);m(!1);let b=m(!1),B=m(!1);se("utils");const d=ce(),N=ue(),U=me(),A=g(()=>f.payment_number||""),S=g(()=>s.orderBy==="asc"||s.orderBy==null);g(()=>S.value?w("general.ascending"):w("general.descending"));const D=g(()=>f.unique_hash?`/payments/pdf/${f.unique_hash}`:!1),E=g(()=>{var a;return oe((a=d==null?void 0:d.selectedPayment)==null?void 0:a.payment_date).format("YYYY/MM/DD")});ne(h,()=>{T()}),R(),T(),u=re.exports.debounce(u,500);function Y(a){return h.params.id==a}fe();async function R(){b.value=!0,await d.fetchPayments({limit:"all"}),b.value=!1,setTimeout(()=>{H()},500)}async function T(){if(!h.params.id)return;B.value=!0;let a=await d.fetchPayment(h.params.id);a.data&&(B.value=!1,Object.assign(f,a.data.data))}function H(){const a=document.getElementById(`payment-${h.params.id}`);a&&(a.scrollIntoView({behavior:"smooth"}),a.classList.add("shake"))}async function u(){let a={};s.searchText!==""&&s.searchText!==null&&s.searchText!==void 0&&(a.search=s.searchText),s.orderBy!==null&&s.orderBy!==void 0&&(a.orderBy=s.orderBy),s.orderByField!==null&&s.orderByField!==void 0&&(a.orderByField=s.orderByField),k.value=!0;try{let l=await d.searchPayment(a);k.value=!1,l.data.data&&(d.payments=l.data.data)}catch{k.value=!1}}function q(){return s.orderBy==="asc"?(s.orderBy="desc",u(),!0):(s.orderBy="asc",u(),!0)}async function G(){N.openModal({title:w("payments.send_payment"),componentName:"SendPaymentModal",id:f.id,data:f,variant:"lg"})}return(a,l)=>{const F=i("BaseButton"),O=i("BasePageHeader"),x=i("BaseIcon"),J=i("BaseInput"),I=i("BaseRadio"),V=i("BaseInputGroup"),P=i("BaseDropdownItem"),K=i("BaseDropdown"),Q=i("BaseFormatMoney"),W=i("router-link"),X=i("BasePage");return c(),p(C,null,[o(pe),o(X,{class:"xl:pl-96"},{default:n(()=>{var $,j;return[o(O,{title:t(A)},{actions:n(()=>[t(U).hasAbilities(t(_e).SEND_PAYMENT)?(c(),v(F,{key:0,disabled:t(L),"content-loading":t(B),variant:"primary",onClick:G},{default:n(()=>[le(_(a.$t("payments.send_payment_receipt")),1)]),_:1},8,["disabled","content-loading"])):y("",!0),o(ye,{"content-loading":t(B),class:"ml-3",row:t(f)},null,8,["content-loading","row"])]),_:1},8,["title"]),r("div",be,[r("div",ge,[o(J,{modelValue:t(s).searchText,"onUpdate:modelValue":l[0]||(l[0]=e=>t(s).searchText=e),placeholder:a.$t("general.search"),type:"text",onInput:u},{default:n(()=>[o(x,{name:"SearchIcon",class:"h-5"})]),_:1},8,["modelValue","placeholder"]),r("div",ve,[o(K,{position:"bottom-start","width-class":"w-50","position-class":"left-0"},{activator:n(()=>[o(F,{variant:"gray"},{default:n(()=>[o(x,{name:"FilterIcon"})]),_:1})]),default:n(()=>[r("div",Be,_(a.$t("general.sort_by")),1),r("div",xe,[o(P,{class:"pt-3 rounded-md hover:rounded-md"},{default:n(()=>[o(V,{class:"-mt-3 font-normal"},{default:n(()=>[o(I,{id:"filter_invoice_number",modelValue:t(s).orderByField,"onUpdate:modelValue":[l[1]||(l[1]=e=>t(s).orderByField=e),u],label:a.$t("invoices.title"),size:"sm",name:"filter",value:"invoice_number"},null,8,["modelValue","label"])]),_:1})]),_:1})]),r("div",we,[o(P,{class:"pt-3 rounded-md hover:rounded-md"},{default:n(()=>[o(V,{class:"-mt-3 font-normal"},{default:n(()=>[o(I,{modelValue:t(s).orderByField,"onUpdate:modelValue":[l[2]||(l[2]=e=>t(s).orderByField=e),u],label:a.$t("payments.date"),size:"sm",name:"filter",value:"payment_date"},null,8,["modelValue","label"])]),_:1})]),_:1})]),r("div",ke,[o(P,{class:"pt-3 rounded-md hover:rounded-md"},{default:n(()=>[o(V,{class:"-mt-3 font-normal"},{default:n(()=>[o(I,{id:"filter_payment_number",modelValue:t(s).orderByField,"onUpdate:modelValue":[l[3]||(l[3]=e=>t(s).orderByField=e),u],label:a.$t("payments.payment_number"),size:"sm",name:"filter",value:"payment_number"},null,8,["modelValue","label"])]),_:1})]),_:1})])]),_:1}),o(F,{class:"ml-1",size:"md",variant:"gray",onClick:q},{default:n(()=>[t(S)?(c(),v(x,{key:0,name:"SortAscendingIcon"})):(c(),v(x,{key:1,name:"SortDescendingIcon"}))]),_:1})])]),t(d)&&t(d).payments?(c(),p("div",Fe,[(c(!0),p(C,null,de(t(d).payments,(e,Z)=>(c(),p("div",{key:Z},[e&&!t(b)?(c(),v(W,{key:0,id:"payment-"+e.id,to:`/admin/payments/${e.id}/view`,class:ie(["flex justify-between p-4 items-center cursor-pointer hover:bg-gray-100 border-l-4 border-transparent",{"bg-gray-100 border-l-4 border-primary-500 border-solid":Y(e.id)}]),style:{"border-bottom":"1px solid rgba(185, 193, 209, 0.41)"}},{default:n(()=>{var z;return[r("div",Ie,[r("div",Ve,_((z=e==null?void 0:e.customer)==null?void 0:z.name),1),r("div",Pe,_(e==null?void 0:e.payment_number),1),r("div",Se,_(e==null?void 0:e.invoice_number),1)]),r("div",De,[o(Q,{class:"block mb-2 text-xl not-italic font-semibold leading-8 text-right text-gray-900",amount:e==null?void 0:e.amount,currency:e==null?void 0:e.currency},null,8,["amount","currency"]),r("div",Te,_(t(E)),1)])]}),_:2},1032,["id","to","class"])):y("",!0)]))),128)),r("div",$e,[t(b)?(c(),v(he,{key:0,class:"h-6 m-1 animate-spin text-primary-400"})):y("",!0)]),!((j=($=t(d))==null?void 0:$.payments)==null?void 0:j.length)&&!t(b)?(c(),p("p",je,_(a.$t("payments.no_matching_payments")),1)):y("",!0)])):y("",!0)]),r("div",ze,[t(D)?(c(),p("iframe",{key:0,src:t(D),class:"flex-1 border border-gray-400 border-solid rounded-md"},null,8,Me)):y("",!0)])]}),_:1})],64)}}};export{Ee as default};
