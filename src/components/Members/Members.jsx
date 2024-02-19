import BtnTable from "../Shared/BtnTable";
import Tab from "../Shared/Tab";
import Table from "../Shared/Table";

const Members = () => {

    return (
        <>
            <div className="h-[13%]">
                <h1 className="text-2xl font-semibold text-neutral-700">Miembros</h1>
                <Tab />
            </div>
            <div className="h-[87%] relative shadow-xl sm:rounded-lg p-5 bg-white content-between">
                <BtnTable name1={"Nuevo Miembro"}/>
                <Table arr={[1,1,1,1,1,1,1,1]}/>
            </div>
        </>
    )
}

export default Members;