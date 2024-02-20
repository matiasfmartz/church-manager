import ItemTable from "./ItemTable";

const Table = ({arr}) => {
    return (
        <>
            <div className="overflow-auto h-[92%]">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="h-full text-xs text-gray-400 uppercase bg-stone-100">
                        <tr>
                            <th scope="col" className="p-4">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Guia
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Estado
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Accion
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">
                            { arr.map((e, i)=> (
                                <ItemTable i={i}/>
                            ))                           
                            }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;