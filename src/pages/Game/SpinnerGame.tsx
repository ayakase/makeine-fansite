import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import nukuGratz from "../../assets/nuku-gratz.png";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

export default function SpinnerGame() {
  const [number, setNumber] = useState<string | number>("🎲");
  const [spinning, setSpinning] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [showGratz, setShowGratz] = useState(false);

  const spin = () => {
    if (spinning) return;

    setSpinning(true);

    let spinCount = 100;
    let current = 0;

    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * 100) + 1;
      setNumber(random);
      current++;

      if (current >= spinCount) {
        clearInterval(interval);
        setSpinning(false);
        setShowFireworks(true);
        setShowGratz(true);
        setTimeout(() => {
          setShowFireworks(false);
          setShowGratz(false);
        }, 3000);
      }
    }, 30);
  };

  const reset = () => {
    setNumber("🎲");
    setShowFireworks(false);
    setShowGratz(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-center gap-10 p-10 min-h-screen">
      <motion.div
        className="text-8xl font-extrabold w-64 h-64 flex items-center justify-center bg-white border-8 border-blue-500 rounded-full text-blue-700"
        animate={{ rotate: spinning ? 360 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {number}
      </motion.div>

      <div className="flex gap-4">
        <button
          onClick={spin}
          disabled={spinning}
          className={`px-10 py-4 text-2xl font-semibold rounded-full border-4 border-blue-500 text-white ${
            spinning
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } transition-colors duration-300`}
        >
          {spinning ? "Spinning..." : "Spin"}
        </button>

        <button
          onClick={reset}
          className="px-10 py-4 text-2xl font-semibold rounded-full border-4 border-gray-400 text-gray-700 bg-white hover:bg-gray-100 transition-colors duration-300"
        >
          Reset
        </button>
      </div>
      <AnimatePresence>
        {showGratz && (
          <motion.img
            key="gratz"
            src={nukuGratz}
            alt="Gratz!"
            className="absolute bottom-20 w-80"
            initial={{ y: 300, opacity: 0, scale: 0.8 }}
            animate={{
              y: 0,
              opacity: 1,
              scale: [0.8, 1.2, 0.95, 1.1, 1],
            }}
            exit={{
              y: 300,
              opacity: 0,
              scale: [1, 1.2, 0.9, 1.1, 0.6],
            }}
            transition={{
              y: { type: "spring", stiffness: 120, damping: 14 },
              scale: { duration: 0.6, ease: "easeInOut" },
              opacity: { duration: 0.4 },
            }}
          />
        )}
      </AnimatePresence>
      {showFireworks && <Fireworks autorun={{ speed: 3 }} />}
    </div>
  );
}
