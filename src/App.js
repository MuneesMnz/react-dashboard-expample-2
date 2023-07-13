import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import UsersList from "./pages/UsersList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="flex mt-2 ">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/users" element={<UsersList />}/>
          <Route path="/users/:id" element={<User />}/>
          <Route path="/newuser" element={<NewUser />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
