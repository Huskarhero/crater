var ce=Object.defineProperty;var E=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var F=(_,s,c)=>s in _?ce(_,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):_[s]=c,G=(_,s)=>{for(var c in s||(s={}))de.call(s,c)&&F(_,c,s[c]);if(E)for(var c of E(s))ye.call(s,c)&&F(_,c,s[c]);return _};import{u as pe,C as _e,am as fe,g as ve,i as M,j as Pe,k as C,m as h,n as w,aZ as ge,aU as be,O as Be,q as $e,ac as he,b3 as Ie,r as m,o as k,c as Ce,b as o,w as l,t as I,y as e,s as R,z,A as L,v as q,x as v,a0 as Se,B as Ve,F as Me}from"./vendor.e9042f2c.js";import{_ as we}from"./ExchangeRateConverter.93670bbe.js";import{o as qe,u as ke,k as Ne,l as Ue,c as je,g as Ae,f as De,m as xe}from"./main.c79d7c07.js";import{_ as Ee}from"./SelectNotePopup.f00187f3.js";import{_ as Fe}from"./CreateCustomFields.3f760eef.js";import{_ as Ge}from"./PaymentModeModal.4e64ba20.js";import"./NoteModal.ebba860d.js";const Re=["onSubmit"],ze={class:"absolute left-3.5"},Le={class:"relative w-full"},He={class:"relative mt-6"},Te={class:"z-20 float-right text-sm font-semibold leading-5 text-primary-400"},Oe={class:"mb-4 text-sm font-medium text-primary-800"},tt={setup(_){const s=pe(),c=_e(),t=qe();ke();const H=Ne();Ue(),je();const T=Ae(),N=De();xe();const U=fe("utils"),{t:p}=ve();let P=M(!1),S=M(!1),g=M([]);const B=M(null),j="newEstimate",O=Pe(["customer","company","customerCustom","payment","paymentCustom"]),V=C({get:()=>t.currentPayment.amount/100,set:n=>{t.currentPayment.amount=Math.round(n*100)}}),u=C(()=>t.isFetchingInitialData),d=C(()=>s.name==="payments.edit"),A=C(()=>d.value?p("payments.edit_payment"):p("payments.new_payment")),Z=C(()=>({currentPayment:{customer_id:{required:h.withMessage(p("validation.required"),w)},payment_date:{required:h.withMessage(p("validation.required"),w)},amount:{required:h.withMessage(p("validation.required"),w),between:h.withMessage(p("validation.payment_greater_than_due_amount"),ge(1,t.currentPayment.maxPayableAmount))},exchange_rate:{required:be(function(){return h.withMessage(p("validation.required"),w),t.showExchangeRate}),decimal:h.withMessage(p("validation.valid_exchange_rate"),Be)}}})),i=$e(Z,t,{$scope:j});he(()=>{t.currentPayment.customer_id&&X(t.currentPayment.customer_id),s.query.customer&&(t.currentPayment.customer_id=s.query.customer)}),t.resetCurrentPayment(),s.query.customer&&(t.currentPayment.customer_id=s.query.customer),t.fetchPaymentInitialData(d.value),s.params.id&&!d.value&&Q();async function J(){T.openModal({title:p("settings.payment_modes.add_payment_mode"),componentName:"PaymentModeModal"})}function K(n){t.currentPayment.notes=""+n.notes}async function Q(){var a;let n=await N.fetchInvoice((a=s==null?void 0:s.params)==null?void 0:a.id);t.currentPayment.customer_id=n.data.data.customer.id,t.currentPayment.invoice_id=n.data.data.id}async function W(n){n&&(B.value=g.value.find(a=>a.id===n),V.value=B.value.due_amount/100,t.currentPayment.maxPayableAmount=B.value.due_amount)}function X(n){if(n){let a={customer_id:n,status:"DUE",limit:"all"};d.value&&(a.status=""),S.value=!0,Promise.all([N.fetchInvoices(a),H.fetchCustomer(n)]).then(async([y,b])=>{y&&(g.value=[...y.data.data]),b&&b.data&&(t.currentPayment.selectedCustomer=b.data.data,t.currentPayment.customer=b.data.data,t.currentPayment.currency=b.data.data.currency),d.value&&t.currentPayment.invoice_id&&(B.value=g.value.find(f=>f.id===t.currentPayment.invoice_id),t.currentPayment.maxPayableAmount=B.value.due_amount+t.currentPayment.amount),d.value&&(g.value=g.value.filter(f=>f.due_amount>0||f.id==t.currentPayment.invoice_id)),S.value=!1}).catch(y=>{S.value=!1,console.error(y,"error")})}}Ie(()=>{t.resetCurrentPayment(),g.value=[]});async function Y(){if(i.value.$touch(),i.value.$invalid)return!1;P.value=!0;let n=G({},t.currentPayment),a=null;try{a=await(d.value?t.updatePayment:t.addPayment)(n),c.push(`/admin/payments/${a.data.data.id}/view`)}catch{P.value=!1}}function ee(n){let a={userId:n};s.params.id&&(a.model_id=s.params.id),t.currentPayment.invoice_id=null,t.getNextNumber(a,!0)}return(n,a)=>{const y=m("BaseBreadcrumbItem"),b=m("BaseBreadcrumb"),f=m("BaseIcon"),D=m("BaseButton"),te=m("BasePageHeader"),ne=m("BaseDatePicker"),$=m("BaseInputGroup"),ae=m("BaseInput"),oe=m("BaseCustomerSelectInput"),x=m("BaseMultiselect"),re=m("BaseMoney"),se=m("BaseSelectAction"),le=m("BaseInputGrid"),ue=m("BaseCustomInput"),me=m("BaseCard"),ie=m("BasePage");return k(),Ce(Me,null,[o(Ge),o(ie,{class:"relative payment-create"},{default:l(()=>[I("form",{action:"",onSubmit:Ve(Y,["prevent"])},[o(te,{title:e(A),class:"mb-5"},{actions:l(()=>[o(D,{loading:e(P),disabled:e(P),variant:"primary",type:"submit",class:"hidden sm:flex"},{left:l(r=>[e(P)?L("",!0):(k(),R(f,{key:0,name:"SaveIcon",class:z(r.class)},null,8,["class"]))]),default:l(()=>[q(" "+v(e(d)?n.$t("payments.update_payment"):n.$t("payments.save_payment")),1)]),_:1},8,["loading","disabled"])]),default:l(()=>[o(b,null,{default:l(()=>[o(y,{title:n.$t("general.home"),to:"/admin/dashboard"},null,8,["title"]),o(y,{title:n.$tc("payments.payment",2),to:"/admin/payments"},null,8,["title"]),o(y,{title:e(A),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),o(me,null,{default:l(()=>[o(le,null,{default:l(()=>[o($,{label:n.$t("payments.date"),"content-loading":e(u),required:"",error:e(i).currentPayment.payment_date.$error&&e(i).currentPayment.payment_date.$errors[0].$message},{default:l(()=>[o(ne,{modelValue:e(t).currentPayment.payment_date,"onUpdate:modelValue":[a[0]||(a[0]=r=>e(t).currentPayment.payment_date=r),a[1]||(a[1]=r=>e(i).currentPayment.payment_date.$touch())],"content-loading":e(u),"calendar-button":!0,"calendar-button-icon":"calendar",invalid:e(i).currentPayment.payment_date.$error},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["label","content-loading","error"]),o($,{label:n.$t("payments.payment_number"),"content-loading":e(u),required:""},{default:l(()=>[o(ae,{modelValue:e(t).currentPayment.payment_number,"onUpdate:modelValue":a[2]||(a[2]=r=>e(t).currentPayment.payment_number=r),"content-loading":e(u)},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading"]),o($,{label:n.$t("payments.customer"),error:e(i).currentPayment.customer_id.$error&&e(i).currentPayment.customer_id.$errors[0].$message,"content-loading":e(u),required:""},{default:l(()=>[o(oe,{modelValue:e(t).currentPayment.customer_id,"onUpdate:modelValue":[a[3]||(a[3]=r=>e(t).currentPayment.customer_id=r),a[4]||(a[4]=r=>ee(e(t).currentPayment.customer_id))],"content-loading":e(u),invalid:e(i).currentPayment.customer_id.$error,placeholder:n.$t("customers.select_a_customer"),"fetch-all":e(d),"show-action":""},null,8,["modelValue","content-loading","invalid","placeholder","fetch-all"])]),_:1},8,["label","error","content-loading"]),o($,{"content-loading":e(u),label:n.$t("payments.invoice"),"help-text":B.value?`Due Amount: ${e(t).currentPayment.maxPayableAmount/100}`:""},{default:l(()=>[o(x,{modelValue:e(t).currentPayment.invoice_id,"onUpdate:modelValue":a[5]||(a[5]=r=>e(t).currentPayment.invoice_id=r),"content-loading":e(u),"value-prop":"id","track-by":"invoice_number",label:"invoice_number",options:e(g),loading:e(S),placeholder:n.$t("invoices.select_invoice"),onSelect:W},{singlelabel:l(({value:r})=>[I("div",ze,v(r.invoice_number)+" ("+v(e(U).formatMoney(r.total,r.customer.currency))+") ",1)]),option:l(({option:r})=>[q(v(r.invoice_number)+" ("+v(e(U).formatMoney(r.total,r.customer.currency))+") ",1)]),_:1},8,["modelValue","content-loading","options","loading","placeholder"])]),_:1},8,["content-loading","label","help-text"]),o($,{label:n.$t("payments.amount"),"content-loading":e(u),error:e(i).currentPayment.amount.$error&&e(i).currentPayment.amount.$errors[0].$message,required:""},{default:l(()=>[I("div",Le,[o(re,{key:e(t).currentPayment.currency,modelValue:e(V),"onUpdate:modelValue":[a[6]||(a[6]=r=>Se(V)?V.value=r:null),a[7]||(a[7]=r=>e(i).currentPayment.amount.$touch())],currency:e(t).currentPayment.currency,"content-loading":e(u),invalid:e(i).currentPayment.amount.$error},null,8,["modelValue","currency","content-loading","invalid"])])]),_:1},8,["label","content-loading","error"]),o($,{"content-loading":e(u),label:n.$t("payments.payment_mode")},{default:l(()=>[o(x,{modelValue:e(t).currentPayment.payment_method_id,"onUpdate:modelValue":a[8]||(a[8]=r=>e(t).currentPayment.payment_method_id=r),"content-loading":e(u),label:"name","value-prop":"id","track-by":"name",options:e(t).paymentModes,placeholder:n.$t("payments.select_payment_mode"),searchable:""},{action:l(()=>[o(se,{onClick:J},{default:l(()=>[o(f,{name:"PlusIcon",class:"h-4 mr-2 -ml-2 text-center text-primary-400"}),q(" "+v(n.$t("settings.payment_modes.add_payment_mode")),1)]),_:1})]),_:1},8,["modelValue","content-loading","options","placeholder"])]),_:1},8,["content-loading","label"]),o(we,{store:e(t),"store-prop":"currentPayment",v:e(i).currentPayment,"is-loading":e(u),"is-edit":e(d),"customer-currency":e(t).currentPayment.currency_id},null,8,["store","v","is-loading","is-edit","customer-currency"])]),_:1}),o(Fe,{type:"Payment","is-edit":e(d),"is-loading":e(u),store:e(t),"store-prop":"currentPayment","custom-field-scope":j,class:"mt-6"},null,8,["is-edit","is-loading","store"]),I("div",He,[I("div",Te,[o(Ee,{type:"Payment",onSelect:K})]),I("label",Oe,v(n.$t("estimates.notes")),1),o(ue,{modelValue:e(t).currentPayment.notes,"onUpdate:modelValue":a[9]||(a[9]=r=>e(t).currentPayment.notes=r),"content-loading":e(u),fields:e(O),class:"mt-1"},null,8,["modelValue","content-loading","fields"])]),o(D,{loading:e(P),"content-loading":e(u),variant:"primary",type:"submit",class:"flex justify-center w-full mt-4 sm:hidden md:hidden"},{left:l(r=>[e(P)?L("",!0):(k(),R(f,{key:0,name:"SaveIcon",class:z(r.class)},null,8,["class"]))]),default:l(()=>[q(" "+v(e(d)?n.$t("payments.update_payment"):n.$t("payments.save_payment")),1)]),_:1},8,["loading","content-loading"])]),_:1})],40,Re)]),_:1})],64)}}};export{tt as default};
