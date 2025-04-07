export default function ProyectoComp(props) {
    return (
        <>
            <div className="border-[2px] border-md grid grid-cols-3 rounded-[10px] overflow-hidden h-[170px]">
                <div className="col-span-1 bg-gray-200"></div>
                <div className="col-span-2 relative">
                    <div className="flex justify-between">
                        <p>{props.title}</p>
                        <div className="flex gap-2">
                            {props.languages.map((leng) => (
                                <p key={leng.name}>{leng.name}</p>
                            ))}
                        </div>
                    </div>
                    <p>{props.description}</p>
                    <div className="border py-[7px] px-4 rounded-md flex justify-end absolute bottom-[10px] right-[10px]">
                        Ver más
                    </div>
                </div>
            </div>
        </>
    );
}