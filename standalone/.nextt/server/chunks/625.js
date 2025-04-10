exports.id=625,exports.ids=[625],exports.modules={212:(e,t,s)=>{"use strict";s.d(t,{ContactProvider:()=>o,Y:()=>n});var r=s(687),l=s(3210);let a=(0,l.createContext)(),o=({children:e})=>{let[t,s]=(0,l.useState)(!1),[o,n]=(0,l.useState)(!1);return(0,r.jsx)(a.Provider,{value:{contactView:t,setContactView:s,mailSendView:o,setMailSendView:n},children:e})},n=()=>(0,l.useContext)(a)},440:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var r=s(1658);let l=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},1135:()=>{},1232:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,6346,23)),Promise.resolve().then(s.t.bind(s,7924,23)),Promise.resolve().then(s.t.bind(s,5656,23)),Promise.resolve().then(s.t.bind(s,99,23)),Promise.resolve().then(s.t.bind(s,8243,23)),Promise.resolve().then(s.t.bind(s,8827,23)),Promise.resolve().then(s.t.bind(s,2763,23)),Promise.resolve().then(s.t.bind(s,7173,23))},1508:(e,t,s)=>{Promise.resolve().then(s.bind(s,212))},1562:(e,t,s)=>{"use strict";s.d(t,{ContactProvider:()=>l});var r=s(2907);let l=(0,r.registerClientReference)(function(){throw Error("Attempted to call ContactProvider() from the server but ContactProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/agustin/Escritorio/portfolio/src/context/ContactContext.jsx","ContactProvider");(0,r.registerClientReference)(function(){throw Error("Attempted to call useContact() from the server but useContact is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/agustin/Escritorio/portfolio/src/context/ContactContext.jsx","useContact")},1652:(e,t,s)=>{Promise.resolve().then(s.bind(s,1562))},4032:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,6444,23)),Promise.resolve().then(s.t.bind(s,6042,23)),Promise.resolve().then(s.t.bind(s,8170,23)),Promise.resolve().then(s.t.bind(s,9477,23)),Promise.resolve().then(s.t.bind(s,9345,23)),Promise.resolve().then(s.t.bind(s,2089,23)),Promise.resolve().then(s.t.bind(s,6577,23)),Promise.resolve().then(s.t.bind(s,1307,23))},4263:()=>{},7496:(e,t,s)=>{"use strict";s.d(t,{A:()=>h});var r=s(687),l=s(833),a=s.n(l),o=s(3210),n=s(6189),i=s(8920),c=s(5101),d=s(8551);let x=({setContactView:e})=>{let[t,s]=(0,o.useState)({name:"",email:"",message:""}),[l,a]=(0,o.useState)(!1);(0,o.useEffect)(()=>{a(!1)},[e]);let n=e=>{let{name:r,value:l}=e.target;console.log(`Campo: ${r}, Valor: ${l}`),s({...t,[r]:l})},i=async e=>{e.preventDefault();try{let e=await d.Ay.send("service_8j8hwkh","template_ybv2xlo",t,"4BB9eGS0SwT-kRqXn");console.log("Mensaje enviado",e),a(!0)}catch(e){console.error("Error al enviar el mensaje",e)}};return(0,r.jsx)(c.P.div,{className:"fixed inset-0 bg-black/20 backdrop-blur-xs z-50 flex items-center justify-center",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:()=>{e(!1)},children:(0,r.jsxs)(c.P.div,{className:"bg-white border-[2px] border-[#3D3D3D] rounded-xl w-[600px] shadow-[-5px_5px_0px_0px_rgba(61,61,61,1)]",initial:{scale:.8},animate:{scale:1},exit:{scale:.8,opacity:0},transition:{duration:.3},onClick:e=>{e.stopPropagation()},children:[(0,r.jsxs)("div",{className:"w-full border-b-[2px] border-[#3D3D3D] flex items-center relative justify-center py-2",children:[(0,r.jsx)("p",{className:"font-bold text-[20px] mt-1",children:"FORMULARIO DE CONTACTO"}),(0,r.jsxs)("svg",{onClick:()=>{e(!1)},width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"absolute right-[15px] cursor-pointer hover:scale-110 transition-all",children:[(0,r.jsx)("line",{x1:"1.29289",y1:"22.5062",x2:"22.5061",y2:"1.29295",stroke:"#3D3D3D",strokeWidth:"2"}),(0,r.jsx)("line",{x1:"1.70711",y1:"1.29289",x2:"22.9203",y2:"22.5061",stroke:"#3D3D3D",strokeWidth:"2"})]})]}),l?(0,r.jsxs)("div",{className:"py-8 px-10",children:[(0,r.jsx)("h2",{className:"text-[35px] font-bold mb-4 text-center",children:"\xa1Gracias por contactarme!"}),(0,r.jsxs)("p",{className:"text-center text-[20px]",children:["He recibido tu mensaje,",(0,r.jsx)("br",{}),"pronto me pondr\xe9 en contacto."]})]}):(0,r.jsxs)("div",{className:"py-8 px-10",children:[(0,r.jsx)("h2",{className:"text-[35px] font-bold mb-4 text-center",children:"\xa1Trabajemos juntos!"}),(0,r.jsxs)("form",{className:"flex flex-col gap-4",onSubmit:i,children:[(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{className:"text-[22px]",children:"Nombre"}),(0,r.jsx)("input",{type:"text",name:"name",className:"border border-gray-300 rounded px-4 py-2 text-[20px]",value:t.name,onChange:n})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{className:"text-[22px]",children:"Correo electr\xf3nico"}),(0,r.jsx)("input",{type:"email",name:"email",className:"border border-gray-300 rounded px-4 py-2 text-[20px]",value:t.email,onChange:n})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{className:"text-[22px]",children:"Mensaje"}),(0,r.jsx)("textarea",{rows:"4",name:"message",className:"border border-gray-300 rounded px-4 py-2 resize-none text-[20px]",value:t.message,onChange:n})]}),(0,r.jsx)("div",{className:"flex justify-center w-full h-[50px] mt-2",children:(0,r.jsx)("button",{type:"submit",className:"bg-[#3D3D3D] text-center rounded-md w-xs text-white text-[25px] font-bold py-2 rounded hover:bg-[#2a2a2a] hover:scale-102 transition-all cursor-pointer",children:"CONTACTAR"})})]})]})]})})};var p=s(212),m=s(474);function h({children:e}){let{contactView:t,setContactView:s,setMailSendView:l}=(0,p.Y)(),o=(0,n.useRouter)(),d=(0,n.usePathname)(),h=[{label:"PROYECTOS",active:"/"===d||d.includes("/proyecto"),link:"/    "},{label:"COMPETENCIAS",active:d.includes("/competencias"),link:"/competencias"},{label:"EXPERIENCIA",active:d.includes("/experiencia"),link:"/experiencia"},{label:"ESTUDIOS",active:d.includes("/estudios"),link:"/estudios"}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.N,{children:t&&(0,r.jsx)(x,{setContactView:s})}),(0,r.jsx)("div",{className:`${a().variable} antialiased w-full flex justify-center min-h-screen`,children:(0,r.jsxs)("div",{className:"max-w-4xl w-full justify-center py-8",children:[(0,r.jsxs)("div",{className:"border-[2px] border-[#3D3D3D] rounded-xl h-[220px] shadow-[-5px_5px_0px_0px_rgba(61,61,61,1)] grid grid-cols-3",children:[(0,r.jsx)("div",{className:"col-span-1 relative flex justify-center items-center",children:(0,r.jsx)("div",{className:"border rounded-full w-[210px] h-[210px] absolute top-[-20px] bg-white z-10 shadow-xl",children:(0,r.jsx)(m.default,{src:"/perfil.png",alt:"Agust\xedn",width:260,height:260,className:"w-[260px] h-[260px] object-cover rounded-full absolute top-[-50px] z-20"})})}),(0,r.jsxs)("div",{className:"col-span-2 flex flex-col justify-center items-start ",children:[(0,r.jsx)("p",{className:"font-bold text-3xl mb-2",children:"Agust\xedn Enzo Noviello"}),(0,r.jsx)("p",{className:"font-semibold text-2xl",children:"Desarrollador de software"}),(0,r.jsx)("p",{className:"text-lg",children:"Desarrollador Full Stack | Construyendo soluciones reales"}),(0,r.jsxs)("div",{className:"mt-3 flex gap-3",children:[(0,r.jsx)("a",{href:"https://www.linkedin.com/in/agust%C3%ADn-enzo-noviello-39b424256/",target:"_blank",children:(0,r.jsx)("img",{src:"/linkedin.svg",alt:"linkedin",className:"cursor-pointer hover:scale-115 transition-all",width:25,height:25})}),(0,r.jsx)("a",{href:"https://github.com/agussnv",target:"_blank",children:(0,r.jsx)("img",{src:"/github.svg",alt:"github",className:"cursor-pointer hover:scale-115 transition-all",width:25,height:25})})]})]})]}),(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-6 mt-6",children:[(0,r.jsxs)("div",{className:"col-span-1 flex flex-col gap-6 h-fit sticky top-5",children:[(0,r.jsxs)("div",{className:"border-[2px] border-[#3D3D3D] rounded-xl shadow-[-5px_5px_0px_0px_rgba(61,61,61,1)] p-3",children:[(0,r.jsx)("p",{className:"font-bold text-xl mt-2",children:"SOBRE M\xcd"}),(0,r.jsxs)("p",{className:"text-justify",children:["Soy desarrollador Full Stack especializado en Vue.js, Next.js y Laravel.",(0,r.jsx)("br",{}),"Veo los problemas como oportunidades para desarrollar una soluci\xf3n innovadora y escalable que aporte valor al mundo, abarcando desde la validaci\xf3n de la idea y la experiencia de usuario hasta el desarrollo y el despliegue en un entorno real."]}),(0,r.jsx)("div",{className:"flex flex-col gap-3 mt-8",children:h.map((e,t)=>(0,r.jsx)("div",{onClick:()=>{o.push(e.link)},className:`cursor-pointer w-full h-[50px] border-[2px] rounded-md flex justify-center items-center font-bold text-[18px] transition-all ${e.active?"bg-[#3D3D3D] text-[#fff]":"bg-[#FFF] hover:bg-[#3D3D3D] hover:text-[#fff]"}`,children:e.label},t))})]}),(0,r.jsx)("div",{className:"border-[2px] border-[#3D3D3D] rounded-xl shadow-[-5px_5px_0px_0px_rgba(61,61,61,1)] h-[60px] font-bold text-xl flex justify-center items-center transition-all hover:shadow-[0] hover:translate-x-[-5px] hover:translate-y-[5px] cursor-pointer",onClick:()=>{s(!0)},children:"CONT\xc1CTAME"})]}),(0,r.jsx)(i.N,{mode:"wait",children:(0,r.jsx)(c.P.div,{className:"col-span-2 border-[2px] border-[#3D3D3D] rounded-xl shadow-[-5px_5px_0px_0px_rgba(61,61,61,1)] overflow-hidden h-full",initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5},children:e})})]})]})})]})}s(4263)},9769:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i,metadata:()=>n});var r=s(7413),l=s(4726),a=s.n(l),o=s(1562);s(1135);let n={title:"Portfolio AEN",description:"Portfolio de Agust\xedn Enzo Noviello"};function i({children:e}){return(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)("body",{className:`${a().variable} antialiased w-full flex justify-center`,children:(0,r.jsx)(o.ContactProvider,{children:e})})})}}};