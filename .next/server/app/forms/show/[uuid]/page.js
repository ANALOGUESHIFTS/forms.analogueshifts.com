(()=>{var e={};e.id=573,e.ids=[573],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},4396:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d}),r(3976),r(7829),r(5866);var s=r(3191),a=r(8716),l=r(7922),i=r.n(l),o=r(5231),n={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);r.d(t,n);let d=["",{children:["forms",{children:["show",{children:["[uuid]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3976)),"C:\\Users\\USER\\Promise\\AnalogueShifts\\forms.analogueshifts.com\\src\\app\\forms\\show\\[uuid]\\page.tsx"]}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,7829)),"C:\\Users\\USER\\Promise\\AnalogueShifts\\forms.analogueshifts.com\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\USER\\Promise\\AnalogueShifts\\forms.analogueshifts.com\\src\\app\\forms\\show\\[uuid]\\page.tsx"],c="/forms/show/[uuid]/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/forms/show/[uuid]/page",pathname:"/forms/show/[uuid]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9903:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9404,23)),Promise.resolve().then(r.bind(r,9305))},9305:(e,t,r)=>{"use strict";r.d(t,{default:()=>b});var s=r(326),a=r(7577),l=r(5047),i=r(6627),o=r(2015),n=r(9280),d=r(4794),u=r(3282),c=r(1890);let m=({item:e,updateAnswerValue:t,formUUID:l})=>{let[m,p]=(0,a.useState)(null),[x,f]=(0,a.useState)(e.answer||""),[h,b]=(0,a.useState)(!1),{toast:g}=(0,i.pm)();(0,a.useEffect)(()=>{"file"===e.type||"image"===e.type?e.answer&&p({name:JSON.parse(e.answer)?.name}):f(e.answer||"")},[e.answer]);let w=e=>{f(e.target.value)},y=()=>{t(e.number,x)},v=async s=>{let a=r(3369),i=new FormData;i.append("upload",s),i.append("type",e.type),b(!0);try{let r=await a.request({method:"POST",url:"https://api.analogueshifts.com/api/upload/"+l,headers:{Accept:"application/json","Content-Type":"multipart/form-data"},data:i});b(!1),p(s),t(e.number,JSON.stringify({path:r.data.data.full_path,name:s.name}))}catch(e){b(!1),g({variant:"destructive",title:"Error Uploading File",description:e.message})}};return(0,s.jsxs)("div",{className:"w-full mt-3 flex flex-col bg-white pb-5  border border-[#E7E7E7] h-max  rounded-xl",children:[s.jsx("div",{className:"px-3 md:px-6 py-3 md:py-4",children:(0,s.jsxs)("h3",{className:"text-base text-primary-boulder900 font-medium",children:[e.question," ","1"===e.required&&s.jsx("span",{className:"text-red-600",children:" *"})]})}),(0,s.jsxs)("div",{className:"px-3 md:px-6",children:["short_text"===e.type&&s.jsx("input",{onBlur:y,required:"1"===e.required,type:"text",value:x,onChange:w,placeholder:"e.g “Enter answer”",className:"max-w-full w-full  h-14 rounded-2xl  px-5 border border-primary-boulder200 text-[13px] font-light placeholder:text-primary-boulder300 text-primary-boulder950 outline-1 outline-background-lightYellow"}),"long_text"===e.type&&s.jsx(o.g,{onBlur:y,required:"1"===e.required,value:x,onChange:w,placeholder:"e.g “I am a software engineer”",className:"text-[13px] rounded-2xl px-5 border border-primary-boulder200 font-light placeholder:text-primary-boulder300 text-primary-boulder950"}),"checkbox"===e.type&&s.jsx("div",{className:"w-full flex flex-col gap-2",children:e.options.map(r=>(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[s.jsx(n.X,{id:e.number+r.value,onCheckedChange:()=>t(e.number,r.value),checked:null!==e.answer&&e.answer.indexOf(r.value)>-1}),s.jsx("label",{htmlFor:e.number+r.value,className:"text-[13px] font-light peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary-boulder950",children:r.value})]},crypto.randomUUID()))}),"radio"===e.type&&s.jsx(u.E,{onValueChange:r=>{t(e.number,r)},children:e.options.map(t=>(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[s.jsx(u.m,{checked:e.answer===t.value,value:t.value,id:e.number+t.value}),s.jsx(d._,{htmlFor:e.number+t.value,className:"text-[13px] font-light peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary-boulder950",children:t.value})]},crypto.randomUUID()))}),("image"===e.type||"file"===e.type)&&(0,s.jsxs)("div",{className:"relative w-full h-max overflow-hidden rounded-3xl",children:[h&&(0,s.jsxs)("div",{className:"absolute top-0 left-0 w-full h-full flex justify-center items-center bg-primary-boulder200/10",children:[" ",(0,s.jsxs)("div",{className:"lds-ellipsis",children:[s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{})]})]}),s.jsx(c.Z,{value:m,setValue:v,fileType:e.type})]})]})]},e.number)};var p=r(1664),x=r(3663),f=r(8747),h=r(6113);let b=({formUUID:e})=>{let[t,o]=(0,a.useState)(null),[n,d]=(0,a.useState)(null),[u,c]=(0,a.useState)(!1),[b,g]=(0,a.useState)(!1),[w,y]=(0,a.useState)(!1),[v,j]=(0,a.useState)(!1),[N,S]=(0,a.useState)(null),[E,k]=(0,a.useState)(""),{toast:q}=(0,i.pm)(),P=(0,l.useRouter)(),C=(0,a.useCallback)((e,t)=>{d(r=>r.map(r=>{if(r.number===e){if("checkbox"===r.type)return{...r,answer:function(e,t){let r=e;return null===e?r=[t]:Array.isArray(e)&&(r=e.indexOf(t)>-1?r.filter(e=>e!==t):[...r,t]),r}(r.answer,t)};if("short_text"===r.type||"long_text"===r.type||"radio"===r.type||"file"===r.type||"image"===r.type)return{...r,answer:t}}return r}))},[]);async function U(){let t=r(3369);try{c(!0);let r=await t.request({method:"GET",url:"https://api.analogueshifts.com/api/tools/form/form/"+e});o(r.data.data.form),d(r.data.data.questions),c(!1)}catch(e){c(!1),"Form closed"!==e.response.data.message?q({variant:"destructive",title:"Error Fetching Form",description:e.message}):g(!0),e?.response?.status===401&&(0,h.d)()}}let _=async()=>{let t=[];n?.forEach(e=>{t.push({question_uuid:e.uuid,answer:JSON.stringify(e.answer)})});let s=r(3369);try{c(!0),await s.request({method:"POST",url:"https://api.analogueshifts.com/api/tools/form/store/answers/"+e+"?email="+E,data:{email:E,responses:t}}),c(!1),y(!0)}catch(e){q({variant:"destructive",title:"Error submiting response",description:e.message}),c(!1),e?.response?.status===401&&(0,h.d)()}};return(0,a.useEffect)(()=>{e&&U()},[e]),(0,a.useEffect)(()=>{t?.timeout!==null&&parseInt(t?.timeout)&&j(!0)},[t]),(0,a.useEffect)(()=>{if("number"==typeof N&&N<=0){_();return}if("number"==typeof N){let e=setInterval(()=>{S(e=>e-1)},1e3);return()=>clearInterval(e)}},[N]),(0,s.jsxs)(s.Fragment,{children:[s.jsx(f.Z,{open:v,description:`You have ${t?.timeout} minutes to fill this form and submit it. Form will be submitted automatically if you fail to finish on time. Enter email in the field below to proceed. Note that the email will be used to submit your form, and It is required.`,title:"Instruction",label:"Proceed",action:()=>{if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(E)){let e=parseInt(t.timeout);j(!1),S(60*e)}else q({variant:"destructive",title:"Invalid Email",description:"Must provide a valid email"})},close:()=>{P.push("/")},emailInput:!0,onChangeEmailValue:e=>k(e)}),b?s.jsx("div",{className:"w-containerWidth max-w-showFormWidth mx-auto pb-7 mt-5",children:s.jsx("div",{className:"w-full mt-3 flex flex-col bg-white pb-5  border border-[#E7E7E7] h-max  rounded-xl border-t-8 border-t-background-lightYellow mb-4",children:(0,s.jsxs)("div",{className:"px-3 md:px-6 py-3 md:pt-6",children:[s.jsx("h1",{className:"text-4xl w-full mt-1.5 mb-5  text-primary-boulder950 font-semibold",children:"Form Closed"}),s.jsx("div",{className:"w-full border-b border-dotted mb-4"}),s.jsx("span",{className:"text-base w-full  text-primary-boulder700",children:"This Form Is Closed"})]})})}):(0,s.jsxs)("form",{onKeyDown:e=>{"Enter"===e.key&&e.preventDefault()},onSubmit:e=>{e.preventDefault(),function(e,t){let r=!0;return e.forEach(e=>{("1"!==e.required||null!==e.answer)&&("1"!==e.required||null===e.answer||e.answer[0])||(r=!1,t({variant:"destructive",title:"Missing Field",description:e.question}))}),r}(n,q)&&_()},className:"w-containerWidth max-w-showFormWidth mx-auto pb-7 mt-5",children:[u&&s.jsx(x.Z,{}),t&&!w&&s.jsx("div",{className:"w-full mt-3 flex flex-col bg-white pb-5  border border-[#E7E7E7] h-max  rounded-xl border-t-8 border-t-background-lightYellow mb-4",children:(0,s.jsxs)("div",{className:"px-3 md:px-6 py-3 md:pt-6",children:[s.jsx("h1",{className:"text-4xl w-full mt-1.5 mb-5  text-primary-boulder950 font-semibold",children:t.title}),s.jsx("div",{className:"w-full border-b border-dotted mb-4"}),s.jsx("span",{className:"text-base w-full  text-primary-boulder700",children:t.description}),null!==N&&(0,s.jsxs)("p",{className:"text-base w-full  text-primary-boulder700 mt-4",children:["Time Left: ",s.jsx("b",{children:`${Math.floor(N/60).toString().padStart(2,"0")}:${(N%60).toString().padStart(2,"0")}`})]}),s.jsx("input",{disabled:null!==N,required:!0,type:"email",value:E,onChange:e=>k(e.target.value),placeholder:"“Enter Email”",className:"max-w-full mt-4 w-full h-14 rounded-2xl  px-5 border border-primary-boulder200 text-[13px] font-light placeholder:text-primary-boulder300 text-primary-boulder950 outline-1 outline-background-lightYellow"})]})}),t&&w&&s.jsx("div",{className:"w-full mt-3 flex flex-col bg-white pb-5  border border-[#E7E7E7] h-max  rounded-xl border-t-8 border-t-background-lightYellow mb-4",children:(0,s.jsxs)("div",{className:"px-3 md:px-6 py-3 md:pt-6",children:[s.jsx("h1",{className:"text-4xl w-full mt-1.5 mb-5  text-primary-boulder950 font-semibold",children:t.title}),s.jsx("div",{className:"w-full border-b border-dotted mb-4"}),s.jsx("span",{className:"text-base w-full  text-primary-boulder700",children:"Your response has been recorded!"})]})}),n&&n[0]&&!w&&(0,s.jsxs)("div",{className:"w-full flex flex-col gap-4",children:[n.map(t=>s.jsx(m,{item:t,formUUID:e,updateAnswerValue:C},crypto.randomUUID())),(0,s.jsxs)("div",{className:"w-full flex justify-between items-center",children:[s.jsx(p.z,{type:"button",onClick:()=>{d(e=>e.map(e=>({...e,answer:null})))},className:"bg-transparent hover:bg-transparent text-background-lightYellow hover:text-background-lightYellow/80",children:"Clear form"}),s.jsx(p.z,{type:"submit",className:"bg-background-lightYellow hover:bg-background-lightYellow/80 w-28",children:"Submit"})]})]})]})]})}},1890:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(326),a=r(7577),l=r(6627);let i=({value:e,setValue:t,fileType:r})=>{let[i,o]=(0,a.useState)(e?"Success":""),n=(0,a.useRef)(),{toast:d}=(0,l.pm)();return(0,a.useEffect)(()=>{e&&o("Success")},[e]),(0,s.jsxs)("section",{children:[s.jsx("input",{accept:"image"===r?"image/jpeg,image/png":"application/pdf",onChange:e=>{let r=e.target.files[0];if(r&&r.size>5242880){d({variant:"destructive",title:"File size exceeds the limit (5 MB)"});return}r?t(r):o("")},ref:n,type:"file",className:"-z-10 hidden opacity-0"}),s.jsx("div",{onClick:()=>n.current.click(),className:`max-w-full cursor-pointer py-5 w-full h-auto border-dashed rounded-3xl  px-5 border  flex flex-col items-center ${"Success"===i?"border-primary-success":"border-primary-boulder200"}`,children:"Success"!==i?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{className:"flex text-primary-boulder700 items-center gap-1.5 mb-1",children:[s.jsx("span",{className:"font-medium text-sm",children:"Upload Here"}),s.jsx("i",{className:"fas fa-cloud-arrow-up text-sm"})]}),(0,s.jsxs)("p",{className:"font-light text-[13px] text-primary-boulder500 mb-1",children:["Supports ","image"===r?"JPG, JPEG, PNG":"PDF"]}),s.jsx("p",{className:"font-light text-[13px] text-primary-boulder500 mb-1",children:"Maximum file size 5mb"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{className:"flex text-primary-success items-center gap-1.5 mb-1",children:[s.jsx("span",{className:"font-medium text-sm",children:"Upload Successful"}),s.jsx("i",{className:"fas fa-circle-check text-sm"})]}),s.jsx("p",{className:"font-light text-[13px] text-primary-success mb-1",children:e?.name})]})})]})}},9280:(e,t,r)=>{"use strict";r.d(t,{X:()=>n});var s=r(326),a=r(7577),l=r(3635),i=r(2933),o=r(1223);let n=a.forwardRef(({className:e,...t},r)=>s.jsx(l.fC,{ref:r,className:(0,o.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary-boulder300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-background-lightYellow data-[state=checked]:text-primary-foreground",e),...t,children:s.jsx(l.z$,{className:(0,o.cn)("flex items-center justify-center text-current"),children:s.jsx(i.Z,{className:"h-4 w-4"})})}));n.displayName=l.fC.displayName},4794:(e,t,r)=>{"use strict";r.d(t,{_:()=>d});var s=r(326),a=r(7577),l=r(4478),i=r(8671),o=r(1223);let n=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=a.forwardRef(({className:e,...t},r)=>s.jsx(l.f,{ref:r,className:(0,o.cn)(n(),e),...t}));d.displayName=l.f.displayName},3282:(e,t,r)=>{"use strict";r.d(t,{E:()=>n,m:()=>d});var s=r(326),a=r(7577),l=r(8623),i=r(3982),o=r(1223);let n=a.forwardRef(({className:e,...t},r)=>s.jsx(l.fC,{className:(0,o.cn)("grid gap-2",e),...t,ref:r}));n.displayName=l.fC.displayName;let d=a.forwardRef(({className:e,...t},r)=>s.jsx(l.ck,{ref:r,className:(0,o.cn)("aspect-square h-4 w-4 rounded-full border border-primary-boulder300 text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),...t,children:s.jsx(l.z$,{className:"flex items-center justify-center",children:s.jsx(i.Z,{className:"h-2.5 w-2.5 fill-background-lightYellow text-background-lightYellow"})})}));d.displayName=l.ck.displayName},2015:(e,t,r)=>{"use strict";r.d(t,{g:()=>i});var s=r(326),a=r(7577),l=r(1223);let i=a.forwardRef(({className:e,...t},r)=>s.jsx("textarea",{className:(0,l.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background-lightYellow focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...t}));i.displayName="Textarea"},1812:(e,t,r)=>{"use strict";let{createProxy:s}=r(8570);e.exports=s("C:\\Users\\USER\\Promise\\AnalogueShifts\\forms.analogueshifts.com\\node_modules\\next\\dist\\client\\link.js")},3976:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(9510),a=r(9591),l=r(8570);let i=(0,l.createProxy)(String.raw`C:\Users\USER\Promise\AnalogueShifts\forms.analogueshifts.com\src\app\forms\show\[uuid]\components\show-form.tsx`),{__esModule:o,$$typeof:n}=i;i.default;let d=(0,l.createProxy)(String.raw`C:\Users\USER\Promise\AnalogueShifts\forms.analogueshifts.com\src\app\forms\show\[uuid]\components\show-form.tsx#default`),u=function({params:e}){return s.jsx(a.Z,{children:s.jsx(d,{formUUID:e.uuid})})}},9591:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(9510);let a=()=>(0,s.jsxs)("div",{className:"flex gap-3",children:[s.jsx("img",{src:"/logo.png",className:"w-10 h-10",alt:""}),(0,s.jsxs)("h3",{className:"text-lg font-bold uppercase text-zinc-600 leading-5",children:[s.jsx("span",{className:"tracking-widest text-yellow-400",children:"Analogue"}),s.jsx("br",{}),s.jsx("span",{className:"tracking-[1rem]",children:"Shifts"})]})]});var l=r(1812),i=r.n(l);function o({children:e}){return(0,s.jsxs)("section",{style:{background:"rgb(243 244 246/1)"},className:"w-full min-h-screen",children:[s.jsx("div",{className:"flex justify-center pt-3 pb-20 px-3",children:s.jsx("nav",{className:"backdrop-blur-lg drop-shadow-lg border border-gray-100 w-full lg:rounded-full fixed z-30",children:s.jsx("div",{className:"w-full mx-auto px-4 lg:px-6 xl:px-8",children:s.jsx("div",{className:"flex justify-between h-16",children:s.jsx("div",{className:"flex items-center",children:s.jsx("div",{className:"flex-shrink-0 flex items-center",children:s.jsx(i(),{href:"/",children:s.jsx(a,{})})})})})})})}),e]})}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,837,621,404,939,592,465,957],()=>r(4396));module.exports=s})();