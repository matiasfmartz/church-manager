import SideBar from "./components/SideBar"

const App = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Inicio</h1>
      </div>
    </div>
  );
};
export default App;