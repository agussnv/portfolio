'use client'

import { useRouter } from "next/navigation";

export default function ProyectoComp(props) {
    const router = useRouter();

    return (
        <>
            <div className="border-[2px] border-md flex rounded-[10px] overflow-hidden h-[170px] hover:scale-102 transition-all">
                <div className="w-3/10 bg-gray-200 border-r-[2px]">
                    <img src={props.image} alt={props.title} className="w-full h-full object-cover" />
                </div>
                <div className="w-7/10 relative py-2 px-3 ">
                    <div className="flex justify-between items-center py-1 mb-1">
                        <p className="font-bold text-xl">{props.title}</p>
                        <div className="flex gap-2">
                            {props.languages.map((leng) => (
                                <p key={leng.name} className="px-[5px] py-[2px] rounded-[5px] text-[#3D3D3D] font-bold border-1 border-[#3d3d3d]">{leng.name}</p>
                            ))}
                        </div>
                    </div>
                    <p className="text-sm text-justify">{props.description}</p>
                    <div onClick={() => {router.push(props.link)}} className="border py-[5px] px-4 rounded-md flex justify-end absolute bottom-[10px] right-[10px] font-bold hover:bg-[#3D3D3D] hover:text-white transition-all cursor-pointer">
                        Ver más
                    </div>
                </div>
            </div>
        </>
    );
}