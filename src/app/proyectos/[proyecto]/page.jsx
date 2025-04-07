'use client'

import MainLayout from "@/app/MainLayout";
import { proyectos } from "@/data/proyectos";
import { useParams, useRouter } from "next/navigation";

export default function Proyecto() {
    const router = useRouter();
    const params = useParams();
    console.log("PARAMETRO: ", params.proyecto);
    const proyecto = proyectos.find(proyecto => proyecto.link === `proyectos/${params.proyecto}`);
    if (!proyecto) {
        return (
            <MainLayout>
                <p>Proyecto no encontrado.</p>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="w-full border-b-[2px] border-[#3D3D3D] flex items-center relative justify-center py-2">
                <p className="font-bold text-[20px]">{proyecto.title}</p>
                <svg onClick={() => { router.push('/proyectos') }} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-[15px] cursor-pointer hover:scale-110 transition-all">
                    <line x1="1.29289" y1="22.5062" x2="22.5061" y2="1.29295" stroke="#3D3D3D" stroke-width="2" />
                    <line x1="1.70711" y1="1.29289" x2="22.9203" y2="22.5061" stroke="#3D3D3D" stroke-width="2" />
                </svg>
            </div>
            <div>
                <div className="h-[245px] border"></div>
                <div className="flex flex-col gap-4 p-4">
                    <div>
                        <p className="font-bold text-[18px]">Descripción</p>
                        <p className="text-[14px] whitespace-pre-line">{proyecto.large_description}</p>
                    </div>
                    <div>
                        <p className="font-bold text-[18px]">Tecnologías utilizadas</p>
                        <ul className="list-disc pl-5 flex flex-col gap-2">
                            {proyecto.technologies.map((technology, index) => (
                                <li key={index} className="text-[14px]">
                                    <span className="font-bold">{technology.name}:</span>
                                    <p>{technology.description}</p>
                                </li>

                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="font-bold text-[18px]">Problemas y soluciones</p>
                        <div className="flex flex-col gap-4">
                            {proyecto.problems.map((problem, index) => (
                                <div key={index}>
                                    <p className="underline underline-offset-3 text-[14px]">{problem.title}</p>
                                    <ul className="list-disc pl-5">
                                        <li className="text-[14px]">{problem.solution}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}