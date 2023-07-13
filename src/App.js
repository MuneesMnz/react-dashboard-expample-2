import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Topbar />
      <div className="flex mt-2 ">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
