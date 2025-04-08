'use client'

import MainLayout from "@/app/MainLayout";
import { estudios } from "@/data/estudios";

export default function Estudios() {
    return (
        <MainLayout>
            <div className="p-5 h-full">
                <div className="flex justify-between items-center">
                    <p className="font-bold text-2xl">ESTUDIOS</p>
                    <div className="flex items-center gap-2">
                        <div className="py-1 px-2 bg-[#f0fdff] rounded-md border border-[#b7f3ff] text-[14px] leading-tight">Soft Skills</div>
                        <div className="py-1 px-2 bg-[#fceedb] rounded-md border border-[#f9deb9] text-[14px] leading-tight">Hard Skills</div>
                    </div>
                </div>
                <div className="mt-5 ml-11 h-[90%] border-l flex flex-col gap-6 pb-10">
                    {estudios.map((estudio, index) => {
                        return (
                            <div key={index} className="mt-2 relative">
                                <div className="border w-[70px] h-[70px] rounded-full absolute left-[-35px] bg-white flex justify-center items-center whitespace-pre-line ">
                                    <p className="whitespace-pre-line">{estudio.year}</p>
                                </div>
                                <div className="ml-15">
                                    <p className="text-[20px] font-semibold">{estudio.title}</p>
                                    <p className="text-[16px] font-light">{estudio.subtitle}</p>
                                    <p className="text-[14px] font-light">{estudio.date}</p>
                                    <p className="text-[17px] font-light mt-1">Habilidades adquiridas:</p>
                                    <div className="flex gap-1 flex-wrap">
                                        {estudio.softskills.map((soft, index) => {
                                            return (
                                                <p key={index} className="py-2 px-2 bg-[#f0fdff] rounded-md border border-[#b7f3ff] text-[14px]">{soft}</p>
                                            )
                                        })}
                                        {estudio.hardskills.map((hard, index) => {
                                            return (
                                                <p key={index} className="py-2 px-2 bg-[#fceedb] rounded-md border border-[#f9deb9] text-[14px]">{hard}</p>
                                            )
                                        })}

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </MainLayout>
    )
}