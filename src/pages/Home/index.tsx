
// import "./index.css";
import Overlay from "../../components/Particles/OverlayAnimation";
import ElapsedTime from "../../components/Particles/Counter";
import { TypewriterEffectSmooth } from "../../components/Particles/TypeWriter";
export function Home() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
      <div className="background">
        <div className="h-screen w-screen grid place-items-center">
          <div>
            <div className="">
              <TypewriterEffectSmooth words={words} />

              <ElapsedTime></ElapsedTime>
            </div>
          </div>
          <Overlay name="anna"></Overlay>
        </div>
      </div>
    </>
  );
}
