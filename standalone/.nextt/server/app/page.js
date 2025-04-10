(()=>{var e={};e.id=974,e.ids=[974],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3226:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>o});let o=(0,r(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/agustin/Escritorio/portfolio/src/app/page.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/agustin/Escritorio/portfolio/src/app/page.jsx","default")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},5384:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>l});var o=r(687),i=r(7496),n=r(6189);function t(e){let a=(0,n.useRouter)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"border-[2px] border-md flex rounded-[10px] overflow-hidden h-[170px] hover:scale-102 transition-all",children:[(0,o.jsx)("div",{className:"w-3/10 bg-gray-200 border-r-[2px]",children:(0,o.jsx)("img",{src:e.image,alt:e.title,className:"w-full h-full object-cover"})}),(0,o.jsxs)("div",{className:"w-7/10 relative py-2 px-3 ",children:[(0,o.jsxs)("div",{className:"flex justify-between items-center py-1 mb-1",children:[(0,o.jsx)("p",{className:"font-bold text-xl",children:e.title}),(0,o.jsx)("div",{className:"flex gap-2",children:e.languages.map(e=>(0,o.jsx)("p",{className:"px-[5px] py-[2px] rounded-[5px] text-[#3D3D3D] font-bold border-1 border-[#3d3d3d]",children:e.name},e.name))})]}),(0,o.jsx)("p",{className:"text-sm text-justify",children:e.description}),(0,o.jsx)("div",{onClick:()=>{a.push(e.link)},className:"border py-[5px] px-4 rounded-md flex justify-end absolute bottom-[10px] right-[10px] font-bold hover:bg-[#3D3D3D] hover:text-white transition-all cursor-pointer",children:"Ver m\xe1s"})]})]})})}var s=r(9504);function l(){return(0,o.jsx)(i.A,{children:(0,o.jsxs)("div",{className:"p-5",children:[(0,o.jsx)("p",{className:"font-bold text-2xl",children:"PROYECTOS"}),(0,o.jsx)("div",{className:"flex flex-col gap-4 mt-4",children:s.t.map((e,a)=>(0,o.jsx)(t,{title:e.title,description:e.short_description,link:e.link,image:e.image,languages:e.languages},a))})]})})}},7789:(e,a,r)=>{Promise.resolve().then(r.bind(r,5384))},8253:(e,a,r)=>{"use strict";r.r(a),r.d(a,{GlobalError:()=>t.a,__next_app__:()=>p,pages:()=>d,routeModule:()=>u,tree:()=>c});var o=r(5239),i=r(8088),n=r(8170),t=r.n(n),s=r(893),l={};for(let e in s)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);r.d(a,l);let c={children:["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3226)),"/home/agustin/Escritorio/portfolio/src/app/page.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9769)),"/home/agustin/Escritorio/portfolio/src/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,5284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,d=["/home/agustin/Escritorio/portfolio/src/app/page.jsx"],p={require:r,loadChunk:()=>Promise.resolve()},u=new o.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9504:(e,a,r)=>{"use strict";r.d(a,{t:()=>o});let o=[{title:"HolaBarri",short_description:"Plataforma digital para impulsar el comercio local, integra mapas interactivos y permite a los usuarios explorar productos y tiendas cercanas.",large_description:"Marketplace local creado para dinamizar el comercio de barrio, permitiendo a los vecinos descubrir productos y tiendas cercanas en un entorno digital moderno y accesible. Lider\xe9 el proyecto desde la concepci\xf3n hasta su presentaci\xf3n ante asociaciones reales y ayuntamientos, validando la propuesta con actores del entorno.\n\nLa plataforma permite a cada comercio gestionar su cat\xe1logo, recibir valoraciones y conectar directamente con la comunidad, todo sin necesidad de reparto a domicilio en la primera versi\xf3n, para facilitar una prueba piloto viable.",link:"proyecto/holabarri",image:"/media/holabarri/portada.png",languages:[{name:"Nuxt.JS",color:"#80ecc1"},{name:"Laravel",color:"#f99780"},{name:"Node.JS",color:"#c4e17f"}],technologies:[{name:"Nuxt.JS",description:"Se eligi\xf3 para construir un SPA y permitir de esta forma tiempos de carga optimizados y una experiencia de usuario fluida."},{name:"Tailwind CSS",description:"Nos permiti\xf3 cumplir con el objetivo a tiempo: dise\xf1ar una interfaz intuitiva y responsiva en el menor tiempo posible para lanzar el MVP y validar la idea."},{name:"Laravel + MySQL",description:"Laravel para poder desarrollar una API robusta y segura, mientras que MySQL nos aseguraba integridad y rendimiento en la gesti\xf3n de toda la informaci\xf3n de comercios, productos, clientes, pedidos..."},{name:"Leaflet.js",description:"Utilizado para desarrollar un mapa interactivo que permite geolocalizar y visualizar de forma din\xe1mica los comercios cercanos."},{name:"Node.JS + WebSockets",description:"Integrado con la finalidad de poder obtener eventos en tiempo real, como nuevas reservas, pedidos, cambios de estado..."},{name:"Docker + GitHub Actions",description:"Se utiliz\xf3 Docker para aislar cada componente del sistema, y GitHub Actions para la implementaci\xf3n de un pipeline de CI/CD que automatiza pruebas y despliegues."}],problems:[{title:"Superposici\xf3n de elementos en el mapa",solution:"Al mostrar muchos comercios cercanos en una misma zona, los marcadores se sobrepon\xedan entre ellos y no permit\xeda una experiencia de usuario c\xf3moda. Para ello, implement\xe9 un agrupamiento din\xe1mico (clustering) y un zoom progresivo para no perder informaci\xf3n."},{title:"Renderizaci\xf3n del mapa MUY lenta",solution:"Al cargar el mapa, se renderizaban muchas zonas y junto a ellas, todos los comercios disponibles y esto realentizaba su rendimiento. Para solucionar este problema, el clustering ayud\xf3 a reducir su tiempo de carga, pero para optimizarlo a\xfan m\xe1s se utiliz\xf3 un renderizado condicional para que unicamente cargue las zonas visibles en pantalla."},{title:"Falta de presupuesto para riders",solution:"Quer\xedamos un marketplace realista y viable, pero nuestro presupuesto no nos permit\xeda cubrir una flota de repartidores. Ante esta situaci\xf3n adaptamos el modelo para priorizar reserva y recogida en el local, permitiendo una prueba piloto sin demasiadas complicaciones."}]},{title:"ATURAPP",short_description:"Aplicaci\xf3n en tiempo real para alertar casos de bullying, con un mapa de calor para visualizar incidentes y un sistema de ubicaci\xf3n adaptado a entornos cerrados.",large_description:"Plataforma contra el bullying dise\xf1ada para entornos escolares, su principal objetivo es proporcionar una herramienta discreta y efectiva que permita a los alumnos reportar incidentes de manera inmediata, adem\xe1s de ofrecer un canal para comunicar casos recurrentes o de acoso psicol\xf3gico a trav\xe9s de un chat en tiempo real.\n\nLa aplicaci\xf3n ofrece un mapa interactivo y gr\xe1ficos que muestran datos tangibles (como zonas m\xe1s afectadas, horarios y d\xedas con mayor incidencia), facilitando la toma de decisiones.\n\nLider\xe9 el proyecto desde la validaci\xf3n de la idea hasta su implementaci\xf3n, adaptando la soluci\xf3n a las restricciones del entorno y garantizando la efectividad de las alertas en tiempo real.",link:"proyecto/aturapp",image:"/media/aturapp/portada.png",languages:[{name:"Vue.JS",color:"#79cea9"},{name:"Laravel",color:"#f99780"},{name:"Node.JS",color:"#c4e17f"}],technologies:[{name:"Vue.JS",description:"Se utiliz\xf3 para poder crear una SPA y ofrecer una experiencia interactiva y din\xe1mica."},{name:"CSS",description:"Hemos decidido prescindir de un framework para lograr una personalizaci\xf3n total en el dise\xf1o."},{name:"Laravel + MySQL",description:"Implementados para construir una API robusta y segura que gestione datos sensibles y garantice el rendimiento en la gesti\xf3n de incidentes."},{name:"Node.JS + WebSockets",description:"Integrados para el chat en tiempo real y para lanzar alertas instant\xe1neas y que los reportes se reciban al momento."},{name:"Chart.JS",description:"Empleado para generar gr\xe1ficos que presentan de forma clara datos sobre las zonas, horarios y d\xedas con mayor incidencia."},{name:"Docker (solo en fase de desarrollo):",description:"Utilizado para aislar entornos y facilitar la configuraci\xf3n local."}],problems:[{title:"Implementaci\xf3n de mapas de calor",solution:"La librer\xeda Heatmap.js no se aplicaba correctamente sobre los mapas SVG generados, as\xed que para replicar su funcionamiento a nuestro entorno, desarrollamos un heatmap personalizado."},{title:"Alertas en tiempo real",solution:"Era indispensable que las alertas se transmitiesen de inmediato para poder actual al momento. Para conseguirlo se integraron WebSockets con Node.JS, permitiendo el env\xedo instant\xe1neo del reporte."}]},{title:"Cinetix",short_description:"Portal para la compra de entradas y gesti\xf3n de salas de cine, con selecci\xf3n de asientos en tiempo real, horarios, informaci\xf3n de peliculas y administraci\xf3n de funciones.",large_description:"Cinetix es un proyecto personal desarrollado con Next.js, cuyo objetivo fue consolidar mis conocimientos en esta tecnolog\xeda.\n\nSe trata de un portal de gesti\xf3n de salas de un cine que permite a los usuarios seleccionar asientos en tiempo real, consultar horarios y acceder a informaci\xf3n detallada de pel\xedculas.",link:"proyecto/cinetix",image:"/media/cinetix/portada.png",languages:[{name:"Next.JS",color:"#7f7f7f"},{name:"Laravel",color:"#f99780"},{name:"Node.JS",color:"#c4e17f"}],technologies:[{name:"Next.JS",description:"Utilizado para desarrollar una SPA que ofrecer una interfaz din\xe1mica y responsiva."},{name:"Tailwind CSS",description:"Empleado para lograr un dise\xf1o limpio y responsivo, para facilitar su desarrollo."},{name:"Laravel + MySQL",description:"Implementados para construir una API robusta y segura que gestione el cat\xe1logo de pel\xedculas, horarios y reservas."},{name:"Node.JS + WebSockets",description:"Integrados para sincronizar en tiempo real la selecci\xf3n de asientos, evitando conflictos y asegurando una reserva actualizada al instante."},{name:"Docker (solo en fase de desarrollo)",description:"Utilizado para aislar entornos y facilitar la configuraci\xf3n local."},{name:"CI/CD con GitHub Actions y Testing",description:"Establec\xed un pipeline de CI/CD con GitHub Actions para automatizar los despliegues. Las pruebas se ejecutaban previamente antes de realizar un commit."}],problems:[{title:"Falta de estabilidad en el despliegue",solution:"Se configur\xf3 un pipeline CI/CD con GitHub Actions y testings, garantizando un flujo de trabajo controlado."},{title:"Selecci\xf3n de asientos en tiempo real",solution:"Al no actualizar los asientos disponibles en tiempo real, cuando un usuario seleccionaba y compraba un asiento que estaba ocupado realmente, generaba conflictos. Para solucionar esto implement\xe9 WebSockets para sincronizar en tiempo real los asientos que dejaban de estar disponibles."}]}]},9551:e=>{"use strict";e.exports=require("url")},9997:(e,a,r)=>{Promise.resolve().then(r.bind(r,3226))}};var a=require("../webpack-runtime.js");a.C(e);var r=e=>a(a.s=e),o=a.X(0,[447,68,74,625],()=>r(8253));module.exports=o})();