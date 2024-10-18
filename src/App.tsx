import { NavBar } from "./components/Layout/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Chat } from "./pages/Chat";
import { Game } from "./pages/Game";
import GeometryBackground from "./components/Particles/GeometryBackground";
import "./App.css"
function App() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <GeometryBackground></GeometryBackground>
      <Router>
        <div >
          <div className="w-full absolute bottom-10 flex flex-row justify-center">
            <NavBar mobileClassName="z-50" desktopClassName="z-50"></NavBar>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
