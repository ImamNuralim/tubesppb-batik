import { BrowserRouter, Route, NavLink, Routes, Navigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { FiAlertCircle } from "react-icons/fi";
import { FaBookOpen } from "react-icons/fa";

 
import "./App.css";
import Batik from "./pages/Batik";
import Profile from "./pages/Profile";
import Detail from "./pages/Detailbatik";
import Information from "./pages/Information";
 
function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">BATIKPEDIA</p>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/batik" />} />
        <Route path="/batik" element={<Batik />}></Route>
        <Route path="/information" element={<Information />}></Route>
        <Route path="/batik/detail" element={<Detail />}></Route>
        <Route path="/information/detail" element={<Detail />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <footer>
        <NavLink to="/batik" className="iconWrapper">
          <HiHome className="icon" />
          Home
        </NavLink>
        <NavLink to="/information" className="iconWrapper">
          <FaBookOpen className="icon" />
          Information
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <FiAlertCircle className="icon" />
          Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}
 
export default App;

