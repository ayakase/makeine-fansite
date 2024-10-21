// import "./index.css";
import Overlay from "../../components/Particles/OverlayAnimation";
import ElapsedTime from "../../components/Particles/Counter";
import { TypewriterEffectSmooth, TypewriterEffect } from "../../components/Particles/TypeWriter";
export function Home() {
  const words1 = [
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
  const words2 = [
    {
      text: "Without",
    },
    {
      text: "Too",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Many",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Losing",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Heroines",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Anime",
    },
  ];
  return (
    <>
      <div className="background">
        <div className="h-screen w-screen overflow-auto">
          <div className=" w-full h-screen grid place-items-center">
            <div>
              <TypewriterEffect words={words1} />
              <ElapsedTime></ElapsedTime>
              <TypewriterEffect words={words2} />
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
