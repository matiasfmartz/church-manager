import ItemTable from "./ItemTable";

const Table = ({arr}) => {

    console.log(arr);

    return (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="h-full text-xs text-gray-400 uppercase bg-stone-100">
                <tr>
                    <th scope="col" className="p-4">
                        ID
                    </th>
                    <th scope="col" className="px-3 py-3">
                        Nombre
                    </th>
                    <th scope="col" className="px-3 py-3">
                        Edad
                    </th>
                    <th scope="col" className="px-3 py-3">
                        Contacto
                    </th>
                    <th scope="col" className="px-3 py-3">
                        Ingreso
                    </th>
                    <th scope="col" className="px-3 py-3">
                        Guia
                    </th>
                    <th scope="col" className="px-3 py-3">
                        Area
                    </th>
                    <th scope="col" className="px-3 py-3">
                        Estado
                    </th>
                </tr>
            </thead>
            <tbody className="">
                {
                    arr.length > 0 ?                        
                        arr.map((e, i)=> (
                            <ItemTable member={e} key={i} keyK={i}/>
                        ))
                        : 
                    <tr>
                        <td colSpan="8" className="text-center p-4 text-gray-400">
                            No hay datos
                        </td>
                    </tr>
                }
            </tbody>
        </table>
    )
}

export default Table;