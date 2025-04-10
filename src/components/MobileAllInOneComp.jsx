'use client'

import { useState } from 'react';

// Animaciones
import { Swiper, SwiperSlide } from 'swiper/react';
import { AnimatePresence, motion } from 'framer-motion';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

// Componentes
import { CenterCarrouselComp } from "@/components/CenterCarrouselComp";
import NivelSkillComp from "@/components/NivelSkillComp";
import RadarSkillComp from "@/components/RadarSkillComp";

// Información
import { proyectos } from "@/data/proyectos";
import { competencias } from "@/data/competencias";
import { experiencia } from "@/data/experiencia";
import { estudios } from "@/data/estudios";

const holabarri = [
    '/media/holabarri/HolaBarri-MVP.mp4',
    '/media/holabarri/captura.png',
    '/media/holabarri/captura0.png',
    '/media/holabarri/captura1.png',
    '/media/holabarri/captura2.png',
    '/media/holabarri/captura3.png',
]

const aturapp = [
    '/media/aturapp/captura0.png',
    '/media/aturapp/captura1.png',
    '/media/aturapp/captura2.png',
    '/media/aturapp/captura3.png',
]

const cinetix = [
    '/media/cinetix/captura0.png',
    '/media/cinetix/captura1.png',
    '/media/cinetix/captura2.png',
    '/media/cinetix/captura3.png',
    '/media/cinetix/captura4.png',
    '/media/cinetix/captura5.png',
    '/media/cinetix/captura6.png',
]

export default function MobileAllInOneComp() {
    const [selectedProject, setSelectedProject] = useState(null);

    // Cuando pulsa en un proyecto, se selecciona el proyecto
    const handleOpenProject = (proyecto) => {
        setSelectedProject(proyecto);
    }

    // Cerrar el popUp mediante la anulacion del proyecto seleccionado
    const handleClosePopUp = () => {
        setSelectedProject(null);
    }

    function getMediaProyecto(title) {
        switch (title.toLowerCase()) {
            case 'holabarri':
                return holabarri;
            case 'aturapp':
                return aturapp;
            case 'cinetix':
                return cinetix;
            default:
                return null;
        }
    }

    return (
        <>
            {selectedProject ? (
                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="w-full h-full"
                    >
                        <div className='rounded-xl h-full flex items-center justify-center p-2'>
                            <div className="relative border-[2px] border-[#3D3D3D] rounded-xl py-2 shadow-[-5px_5px_0px_0px_rgba(61,61,61,1)] bg-white w-full h-full overflow-y-scroll">
                                <div className="w-full border-b-[2px] border-[#3D3D3D] flex items-center relative justify-center py-2 sticky mt-[-8px] top-[-8px] bg-white z-50">
                                    <p className="font-bold text-[20px]">{selectedProject.title}</p>
                                    <svg onClick={() => { handleClosePopUp() }} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-[15px] cursor-pointer hover:scale-110 transition-all">
                                        <line x1="1.29289" y1="22.5062" x2="22.5061" y2="1.29295" stroke="#3D3D3D" strokeWidth="2" />
                                        <line x1="1.70711" y1="1.29289" x2="22.9203" y2="22.5061" stroke="#3D3D3D" strokeWidth="2" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="h-[190px] mt-5 w-full flex justify-center items-center">
                                        <CenterCarrouselComp width="330px" height="185px" proyecto={getMediaProyecto(selectedProject.title)} />
                                    </div>
                                    <div className="flex flex-col gap-4 p-4">
                                        <div>
                                            <p className="font-bold text-[18px]">Descripción</p>
                                            <p className="text-[14px] whitespace-pre-line">{selectedProject.large_description}</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-[18px]">Tecnologías utilizadas</p>
                                            <ul className="list-disc pl-5 flex flex-col gap-2">
                                                {selectedProject.technologies.map((technology, index) => (
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
                                                {selectedProject.problems.map((problem, index) => (
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
                            </div >
                        </div>
                    </motion.div>
                </AnimatePresence>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="w-full h-full"
                >
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper w-full h-full"
                    >
                        <SwiperSlide
                            key={"inicio"}
                            className="rounded-xl h-full flex items-center justify-center p-2"
                        >
                            <div className="relative border-[2px] border-[#3D3D3D] rounded-xl shadow-[-5px_5px_0px_0px_rgba(61,61,61,1)] bg-white w-full h-full overflow-y-scroll">
                                <div className="p-5">
                                    <p className="font-bold text-2xl">SOBRE MÍ</p>
                                    <div className='my-4'>
                                        <p className="text-justify text-[18px] mb-4">
                                            Soy desarrollador Full Stack especializado en Vue.js, Next.js y Laravel.<br />
                                            Veo los problemas como oportunidades para desarrollar una solución innovadora y escalable que aporte valor al mundo, abarcando desde la validación de la idea y la experiencia de usuario hasta el desarrollo y el despliegue en un entorno real. <br />
                                            Algunos ejemplos que demuestran mi filosofía son mis 2 grandes proyectos, HolaBarri y ATURAPP, del cual les comentaré a continuación.
                                        </p>
                                        <div className='flex flex-col gap-2 pb-2'>
                                            <a href="https://www.linkedin.com/in/agust%C3%ADn-enzo-noviello-39b424256/" target="_blank">
                                                <div className='w-full border border-2 rounded-md p-2 flex items-center relative'>
                                                    <img src="/linkedin.svg" alt="linkedin" className="w-[25px] h-[25px] absolute" />
                                                    <p className='w-full text-center text-xl'>Mi perfil de LinkedIn</p>
                                                </div>
                                            </a>
                                            <a href="https://github.com/agussnv" target="_blank">
                                                <div className='w-full border border-2 rounded-md p-2 flex items-center relative'>
                                                    <img src="/github.svg" alt="github" className="w-[25px] h-[25px] absolute" />
                                                    <p className='w-full text-center text-xl'>Mi GitHub</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='w-[350px] box-border flex justify-center items-center font-bold text-[18px] fixed bottom-[10px] left-1/2 transform -translate-x-1/2 bg-gradient-to-t from-white to-transparent'>
                                            {'DESLIZAR >'}
                                        </p>
                                    </div>
                                </div>
                            </div >
                        </SwiperSlide >
                        <SwiperSlide
                            key={"proyectos"}
                            className="rounded-xl h-full flex items-center justify-center p-2"
                        >
                            <div className="relative border-[2px] border-[#3D3D3D] rounded-xl shadow-[-5px_5px_0px_0px_rgba(61,61,61,1)] bg-white w-full h-full overflow-y-scroll">
                                <div className="p-5">
                                    <p className="font-bold text-2xl">PROYECTOS</p>
                                    <div className="flex flex-col gap-4 my-4">
                                        {
                                            proyectos.map((proyecto, index) => (
                                                <div key={index}
                                                    className="border-[2px] border-md flex rounded-[10px] overflow-hidden h-[160px] hover:scale-102 transition-all"
                                                    onClick={() => { handleOpenProject(proyecto) }}
                                                >
                                                    <div className="w-8/20 bg-gray-200 border-r-[2px]">
                                                        <img src={proyecto.image} alt={proyecto.title} loading="lazy" className="w-full h-full object-cover" />
                                                    </div>
                                                    <div className="w-7/10 relative py-2 px-3">
                                                        <div className="flex justify-between items-center">
                                                            <p className="font-bold text-xl">{proyecto.title}</p>
                                                        </div>
                                                        <p className="text-[12px] text-justify">{proyecto.short_description}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div>
                                    <p className='w-[350px] box-border flex justify-center items-center font-bold text-[18px] fixed bottom-[10px] left-1/2 transform -translate-x-1/2 bg-gradient-to-t from-white to-transparent'>
                                        {'< DESLIZAR >'}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide
                            key={"competencias"}
                            className="rounded-xl h-full flex items-center justify-center p-2"
                        >
                            <div className="relative border-[2px] border-[#3D3D3D] rounded-xl shadow-[-5px_5px_0px_0px_rgba(61,61,61,1)] bg-white w-full h-full overflow-y-scroll">
                                <div className="p-5">
                                    <p className="font-bold text-2xl">COMPETENCIAS</p>
                                    <div className="flex justify-center items-center mt-4">
                                        <div className="flex justify-center items-center">
                                            <div className="border-r-[1px] border-[#d8d8d8] border-[#3D3D3D] pr-5 flex flex-col gap-1">
                                                {competencias.slice(0, 4).map((competencia, index) => {
                                                    return (
                                                        <div key={index} className="flex flex-col gap-1 mb-3">
                                                            <p className="text-[13px]">{competencia.name}</p>
                                                            <NivelSkillComp width="10px" height="10px" nivel={competencia.nivel} />
                                                        </div>
                                                    )
                                                })
                                                }
                                            </div>
                                            <div className="pl-5">
                                                {competencias.slice(4, 8).map((competencia, index) => {
                                                    return (
                                                        <div key={index} className="flex flex-col gap-2 mb-3">
                                                            <p className="text-[13px]">{competencia.name}</p>
                                                            <NivelSkillComp width="10px" height="10px" nivel={competencia.nivel} />
                                                        </div>
                                                    )
                                                })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-center'>
                                        <RadarSkillComp />
                                    </div>
                                </div>
                                <div>
                                    <p className='w-[350px] box-border flex justify-center items-center font-bold text-[18px] fixed bottom-[10px] left-1/2 transform -translate-x-1/2 bg-gradient-to-t from-white to-transparent'>
                                        {'< DESLIZAR >'}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide
                            key={"experiencia"}
                            className="rounded-xl h-full flex items-center justify-center p-2"
                        >
                            <div className="relative border-[2px] border-[#3D3D3D] rounded-xl shadow-[-5px_5px_0px_0px_rgba(61,61,61,1)] bg-white w-full h-full overflow-y-scroll">
                                <div className="py-5 pl-5 h-[85%]">
                                    <p className="font-bold text-2xl">EXPERIENCIA</p>
                                    <div className="mt-5 ml-6 h-full border-l flex flex-col justify-between">
                                        <div className="mt-2 relative">
                                            <div className="border w-[50px] h-[50px] rounded-full absolute left-[-25px] bg-white flex justify-center items-center">
                                                <p className="whitespace-pre-line text-[12px]">2025</p>
                                            </div>
                                            <div className="ml-10">
                                                <p className="text-[16px] font-semibold">En búsqueda de nuevas oportunidades</p>
                                                <p className="text-[14px] font-light">¿Tienes un proyecto en mente o buscas talento para tu equipo? ¡Contáctame!</p>
                                                <div className="px-3 py-[4px] border rounded-md inline-block flex items-center justify-center font-semibold"
                                                    onClick={() => { setContactView(true) }}>Contactar</div>
                                            </div>
                                        </div>
                                        {experiencia.map((exp, index) => {
                                            return (
                                                <div key={index} className="mt-2 relative">
                                                    <div className="border w-[50px] h-[50px] rounded-full absolute left-[-25px] bg-white flex justify-center items-center whitespace-pre-line ">
                                                        <p className="whitespace-pre-line text-[12px]">{exp.year}</p>
                                                    </div>
                                                    <div className="ml-10">
                                                        <p className="text-[16px] font-semibold">{exp.title}</p>
                                                        <p className="text-[14px] font-light">{exp.subtitle}</p>
                                                        <p className="text-[13px] font-light">{exp.date}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div>
                                    <p className='w-[350px] box-border flex justify-center items-center font-bold text-[18px] fixed bottom-[10px] left-1/2 transform -translate-x-1/2 bg-gradient-to-t from-white to-transparent'>
                                        {'< DESLIZAR >'}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide
                            key={"estudios"}
                            className="rounded-xl h-full flex items-center justify-center p-2"
                        >
                            <div className="relative border-[2px] border-[#3D3D3D] rounded-xl shadow-[-5px_5px_0px_0px_rgba(61,61,61,1)] bg-white w-full h-full overflow-y-scroll">
                                <div className="p-5">
                                    <div className="flex justify-between items-center">
                                        <p className="font-bold text-2xl">ESTUDIOS</p>
                                        <div className="flex items-center gap-2">
                                            <div className="py-1 px-1 bg-[#f0fdff] rounded-md border border-[#b7f3ff] text-[13px] leading-tight">Soft Skills</div>
                                            <div className="py-1 px-1 bg-[#fceedb] rounded-md border border-[#f9deb9] text-[13px] leading-tight">Hard Skills</div>
                                        </div>
                                    </div>
                                    <div className="mt-5 ml-6 h-[90%] border-l flex flex-col gap-6 pb-10">
                                        {estudios.map((estudio, index) => {
                                            return (
                                                <div key={index} className="mt-2 relative">
                                                    <div className="border w-[50px] h-[50px] rounded-full absolute left-[-25px] bg-white flex justify-center items-center whitespace-pre-line ">
                                                        <p className="whitespace-pre-line text-[12px]">{estudio.year}</p>
                                                    </div>
                                                    <div className="ml-10">
                                                        <p className="text-[16px] font-semibold">{estudio.title}</p>
                                                        <p className="text-[14px] font-light">{estudio.subtitle}</p>
                                                        <p className="text-[13px] font-light">{estudio.date}</p>
                                                        <p className="text-[17px] font-light mt-1">Habilidades adquiridas:</p>
                                                        <div className="flex gap-1 flex-wrap">
                                                            {estudio.softskills.map((soft, index) => {
                                                                return (
                                                                    <p key={index} className="py-2 px-1 bg-[#f0fdff] rounded-md border border-[#b7f3ff] text-[13px]">{soft}</p>
                                                                )
                                                            })}
                                                            {estudio.hardskills.map((hard, index) => {
                                                                return (
                                                                    <p key={index} className="py-2 px-1 bg-[#fceedb] rounded-md border border-[#f9deb9] text-[13px]">{hard}</p>
                                                                )
                                                            })}

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div>
                                    <p className='w-[350px] box-border flex justify-center items-center font-bold text-[18px] fixed bottom-[10px] left-1/2 transform -translate-x-1/2 bg-gradient-to-t from-white to-transparent'>
                                        {'< DESLIZAR >'}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper >
                </motion.div >
            )
            }
        </>
    )
}