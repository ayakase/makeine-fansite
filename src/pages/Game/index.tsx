import Overlay from "../../components/Particles/OverlayAnimation";
import AnnaBG from "../../assets/img/background-characters/Anna-home.png";
import SpinnerGame from "./SpinnerGame.tsx"; // adjust the path if needed
import chikaPeace from "../../assets/Chika-removebg-preview.png";

export function Game() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background character image */}
      <img src={AnnaBG} className="absolute h-screen right-0 z-0" alt="" />

      {/* Spinner game UI centered */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <SpinnerGame />
      </div>
      <img
        src={chikaPeace}
        alt="Chika Peace"
        className="absolute top-0 left-5 w-80 scale-y-[-1]"
      />
      {/* Particle overlay on top */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <Overlay name="komari" />
      </div>
    </div>
  );
}
