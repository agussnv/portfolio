export default function NivelSkillComp(props) {
    const total = Array.from({ length: 10 });
    return (
        <div className="flex gap-1">
            {total.map((x, i) => {
                return (
                    <div key={i} className={`w-[17px] h-[17px] rounded-full border border-[#3D3D3D] ${i < props.nivel ? 'bg-[#3D3D3D]' : 'bg-white'}`}/>
                )
            })}
        </div>
    );
}
