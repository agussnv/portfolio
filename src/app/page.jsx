'use client'

import MainLayout from "@/app/MainLayout";
import ProyectoComp from "@/components/ProyectoComp";
import { proyectos } from "@/data/proyectos";


export default function Proyectos() {
    return (
        <MainLayout>
            <div className="p-5">
                <p className="font-bold text-2xl">PROYECTOS</p>
                <div className="flex flex-col gap-4 mt-4">
                    {
                        proyectos.map((proyecto, index) => (
                            <ProyectoComp
                                key={index}
                                title={proyecto.title}
                                description={proyecto.short_description}
                                link={proyecto.link}
                                image={proyecto.image}
                                languages={proyecto.languages}
                            />
                        ))
                    }
                </div>
            </div>
        </MainLayout>
    );
}