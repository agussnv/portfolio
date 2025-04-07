'use client'

import ProyectoComp from "@/components/ProyectoComp";

export default function Proyectos() {
    return (
        <>
            <p className="font-bold text-2xl">PROYECTOS</p>
            <div className="flex flex-col gap-4">
                <ProyectoComp
                    title="HolaBarri"
                    description="Plataforma digital para impulsar el comercio local, integra mapas interactivos y permite a los usuarios explorar productos y tiendas cercanas."
                    link="https://example.com"
                    image="https://example.com/image.jpg"
                    languages={[
                        {'name': 'Nuxt.JS' , 'color': '#02DB84'},
                        {'name': 'Laravel' , 'color': '#F53003'},
                        {'name': 'Node.JS' , 'color': '#8AC400'},
                    ]}
                />
                <ProyectoComp
                    title="ATURAPP"
                    description="Aplicación en tiempo real para alertar casos de bullying, con un mapa de calor para visualizar incidentes y un sistema de ubicación adaptado a entornos cerrados."
                    link="https://example.com"
                    image="https://example.com/image.jpg"
                    languages={[
                        {'name': 'Vue.JS' , 'color': '#02DB84'},
                        {'name': 'Laravel' , 'color': '#02DB84'},
                        {'name': 'Node.JS' , 'color': '#02DB84'},
                    ]}
                />
                <ProyectoComp
                    title="Cinetix"
                    description="Portal para la compra de entradas y gestión de salas de cine, con selección de asientos en tiempo real, horarios, información de peliculas y administración de funciones."
                    link="https://example.com"
                    image="https://example.com/image.jpg"
                    languages={[
                        {'name': 'Next.JS' , 'color': '#02DB84'},
                        {'name': 'Nuxt.JS' , 'color': '#02DB84'},
                        {'name': 'Node.JS' , 'color': '#02DB84'},
                    ]}
                />
            </div>
        </>
    );
}