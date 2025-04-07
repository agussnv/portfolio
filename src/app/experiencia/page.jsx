'use client'

import MainLayout from "@/app/MainLayout";
import { experiencia } from "@/data/experiencia";

export default function Experiencia() {
    return (
        <MainLayout>
            <div className="p-5 h-full">
                <p className="font-bold text-2xl">EXPERIENCIA</p>
                <div className="mt-5 ml-11 h-[90%] border-l flex flex-col gap-6">
                    <div className="mt-2 relative h-[125px]">
                        <div className="border w-[70px] h-[70px] rounded-full absolute left-[-35px] bg-white flex justify-center items-center">
                            <p className="whitespace-pre-line">2025</p>
                        </div>
                        <div className="ml-15">
                            <p className="text-[20px] font-semibold">En búsqueda de nuevas oportunidades</p>
                            <p className="text-[16px] font-light">¿Tienes un proyecto en mente o buscas talento para tu equipo? ¡Contáctame!</p>
                            <div className="px-3 py-[6px] border rounded-md inline-block flex items-center justify-center mt-2 font-semibold hover:bg-[#3d3d3d] hover:text-white transition-all cursor-pointer">Contactar</div>
                        </div>
                    </div>
                    {experiencia.map((exp, index) => {
                        return (
                            <div className="mt-2 relative h-[125px]">
                                <div className="border w-[70px] h-[70px] rounded-full absolute left-[-35px] bg-white flex justify-center items-center whitespace-pre-line ">
                                    <p className="whitespace-pre-line">{exp.year}</p>
                                </div>
                                <div className="ml-15">
                                    <p className="text-[20px] font-semibold">{exp.title}</p>
                                    <p className="text-[16px] font-light">{exp.subtitle}</p>
                                    <p className="text-[14px] font-light">{exp.date}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </MainLayout>
    )
}