import { PlaceholdersAndVanishInput } from "./components/ChatInput";
import OverlayAnimation from "./components/Particles/OverlayAnimation";
import { NavBar } from "./components/Layout/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Chat } from "./pages/Chat";
import { Game } from "./pages/Game";
import "./App.css"
function App() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  const links = [
    {
      title: "Home",
      icon: (
        <div className="h-full w-full  text-neutral-500 bg-red-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Chat",
      icon: (
        <div className="h-full w-full  text-neutral-500 bg-red-500 dark:text-neutral-300" />
      ),
      href: "/chat",
    },
    {
      title: "Gam",
      icon: (
        <div className="h-full w-full  text-neutral-500 bg-red-500 dark:text-neutral-300" />
      ),
      href: "/game",
    },
  ];
  return (
    // <div className="h-full w-full">
    //   <PlaceholdersAndVanishInput
    //     placeholders={placeholders}
    //     onChange={handleChange}
    //     onSubmit={onSubmit}
    //   />
    //   <OverlayAnimation name="komari" ></OverlayAnimation>
    // </div>

    <div className="wrapper absolute inset-0 overflow-hidden">
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Router>
        <div >
          <div className="w-full absolute bottom-10 flex flex-row justify-center">
            <NavBar></NavBar>
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
