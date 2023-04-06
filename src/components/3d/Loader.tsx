import { useStore } from "@nanostores/react";
import { useProgress } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { loadingAtom, loadingComplete } from "src/store/loading";

function Loader() {
  const loading = useStore(loadingAtom);
  const [showMessage, setShowMessage] = useState(true);
  const { progress } = useProgress();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMessage(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const timeout = setInterval(() => {
      setShowMessage(false);
      if (progress === 100 && !showMessage) loadingComplete();
    }, 2000);

    return () => {
      clearInterval(timeout);
    };
  }, [progress, showMessage]);

  if (!loading) return null;
  return (
    <div className="absolute top-0 z-10 left-0 bg-black w-full h-full flex justify-center items-center text-2xl md:text-5xl font-serif">
      <AnimatePresence>
        <motion.h1 layout key="hello" animate={{ transition: { duration: 1 } }}>
          Hello,&nbsp;
        </motion.h1>
        {showMessage && (
          <motion.h1
            key="remove"
            layout
            animate={{
              opacity: 1,
              transition: { layout: { type: "spring" } },
            }}
            exit={{ opacity: 0 }}
          >
            welcome to my
          </motion.h1>
        )}
        <motion.h1 layout key="world">
          &nbsp;world<span className="text-red-500">.</span>
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}

export default Loader;
