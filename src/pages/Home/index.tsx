// import "./index.css";
import Overlay from "../../components/Particles/OverlayAnimation";
import ElapsedTime from "../../components/Particles/Counter";
import { TypewriterEffectSmooth } from "../../components/Particles/TypeWriter";
export function Home() {
  const words = [
    {
      text: "It",
    },
    {
      text: "has",
    },
    {
      text: "been",
    },
  ];
  return (
    <>
      <div className="background">
        <div className="h-screen w-screen overflow-auto">
          <div className=" w-full h-screen grid place-items-center">
            <div>
              <TypewriterEffectSmooth words={words} />
              <ElapsedTime></ElapsedTime>
              <TypewriterEffectSmooth words={words} />
            </div>
            {/* <TestMatter></TestMatter> */}
          </div>
          <div className=" h-screen ">

          </div>
          <Overlay name="anna"></Overlay>
        </div>
      </div>
    </>
  );
}
