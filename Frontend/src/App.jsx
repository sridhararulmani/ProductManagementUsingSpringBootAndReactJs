import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddUser from "./Users/AddUser";
import EditUser from "./Users/EditUser";
import ViewUser from "./Users/ViewUser";
import Navbar from "./layout/Navbar";
import HoemPage from "./pages/HoemPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<HoemPage />} />
          <Route exact path="/addUser" element={<AddUser />} />
          <Route exact path="/updateUser/:userId" element={<EditUser />} />
          <Route exact path="/getUserById/:userId" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
