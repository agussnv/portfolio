'use client'

import MainLayout from "@/app/MainLayout";
import NivelSkillComp from "@/components/NivelSkillComp";
import { competencias } from "@/data/competencias";
import RadarSkillComp from "@/components/RadarSkillComp";

export default function Competencias() {
    return (
        <MainLayout>
            <div className="p-5">
                <p className="font-bold text-2xl">COMPETENCIAS</p>
                <div className="flex justify-center items-center mt-4">
                    <div className="flex justify-center items-center">
                        <div className="border-r-[1px] border-[#d8d8d8] border-[#3D3D3D] pr-14 flex flex-col gap-1">
                            {competencias.slice(0, 4).map((competencia, index) => {
                                return (
                                    <div key={index} className="flex flex-col gap-1 mb-3">
                                        <p className="text-xl text-[16px]">{competencia.name}</p>
                                        <NivelSkillComp nivel={competencia.nivel} />
                                    </div>
                                )
                            })
                            }
                        </div>
                        <div className="pl-14">
                            {competencias.slice(4, 8).map((competencia, index) => {
                                return (
                                    <div key={index} className="flex flex-col gap-2 mb-3">
                                        <p className="text-xl text-[16px]">{competencia.name}</p>
                                        <NivelSkillComp nivel={competencia.nivel} />
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <RadarSkillComp />
                </div>
            </div>
        </MainLayout>
    )
}