'use client'

import { Geist, Geist_Mono, Amiko } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";
import "./globals.css";

const amiko = Amiko({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-amiko',
    display: 'swap',
})

export default function MainLayout({ children }) {
    const router = useRouter();
    const pathname = usePathname();

    const secciones = [
        { label: 'PROYECTOS', active: pathname.includes('/proyectos'), link: '/proyectos' },
        { label: 'COMPETENCIAS', active: pathname.includes('/competencias'), link: '/competencias' },
        { label: 'EXPERIENCIA', active: pathname.includes('/experiencia'), link: '/experiencia' },
        { label: 'ESTUDIOS', active: pathname.includes('/estudios'), link: '/estudios' },
    ];

    return (
        <html lang="en">
            <body className={`${amiko.variable} antialiased w-full flex justify-center`}>
                <div className="max-w-[900px] w-full justify-center py-8">
                    <div className="border-[2px] border-[#3D3D3D] rounded-xl h-[220px] shadow-[-5px_5px_0px_0px_rgba(61,61,61,1)] grid grid-cols-3">
                        <div className="col-span-1 relative flex justify-center items-center">
                            <div className="border rounded-full w-[210px] h-[210px] absolute top-[-20px] bg-[#FFFFFF]"></div>
                        </div>
                        <div className="col-span-2 flex flex-col justify-center items-start h-[180px]">
                            <p className="font-bold text-3xl mb-2">Agustín Enzo Noviello</p>
                            <p className="font-semibold text-2xl">Desarrollador de software</p>
                            <p className="text-lg">Desarrollador Full Stack | Construyendo soluciones reales</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 mt-6">
                        <div className="col-span-1 flex flex-col gap-6 relative">
                            <div className="border-[2px] border-[#3D3D3D] rounded-xl shadow-[-5px_5px_0px_0px_rgba(61,61,61,1)] p-3">
                                <p className="font-bold text-xl mt-2">SOBRE MÍ</p>
                                <p>
                                    Soy desarrollador Full Stack especializado en Vue.js, Next.js y Laravel.<br />
                                    Veo los problemas como oportunidades para desarrollar una solución innovadora y escalable que aporte valor al mundo, abarcando desde la validación de la idea y la experiencia de usuario hasta el desarrollo y el despliegue en un entorno real.
                                </p>
                                <div className="flex flex-col gap-3 mt-8">
                                    {secciones.map((seccion, index) => (
                                        <div key={index} onClick={() => { router.push(seccion.link) }} className={`cursor-pointer w-full h-[50px] border-[2px] rounded-md flex justify-center items-center font-bold text-[18px] transition-all ${seccion.active ? 'bg-[#3D3D3D] text-[#fff]' : 'bg-[#FFF] hover:bg-[#3D3D3D] hover:text-[#fff]'}`}>
                                            {seccion.label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="border-[2px] border-[#3D3D3D] rounded-xl shadow-[-5px_5px_0px_0px_rgba(61,61,61,1)] h-[60px] font-bold text-xl flex justify-center items-center transition-all hover:shadow-[0] hover:translate-x-[-5px] hover:translate-y-[5px] cursor-pointer">CONTÁCTAME</div>
                        </div>
                        <div className="col-span-2 border-[2px] border-[#3D3D3D] rounded-xl shadow-[-5px_5px_0px_0px_rgba(61,61,61,1)]">
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
