// import "./index.css";
import Overlay from "../../components/Particles/OverlayAnimation";
import ElapsedTime from "../../components/Particles/Counter";
import { TypewriterEffectSmooth } from "../../components/Particles/TypeWriter";
// import { TestMatter } from "../../components/Particles/Matter";
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
        <div className="h-screen w-screen grid place-items-center">
          <div>
            <div className="">
              <TypewriterEffectSmooth words={words} />
              <ElapsedTime></ElapsedTime>
              {/* <TestMatter></TestMatter> */}
            </div>
          </div>
          <Overlay name="anna"></Overlay>
        </div>
      </div>
    </>
  );
}
