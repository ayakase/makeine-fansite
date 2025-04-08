import Overlay from "../../components/Particles/OverlayAnimation";
import AnnaBG from "../../assets/img/background-characters/Anna-home.png";

export function Game() {
  return (
    <>
      <Overlay name="komari"></Overlay>
      <img src={AnnaBG} className="absolute h-screen right-0" alt="" />
    </>
  );
}
