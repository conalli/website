/* eslint-disable react/no-unknown-property */
import { useStore } from "@nanostores/react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense, type PropsWithChildren } from "react";
import { useMousePosition, useWindowDimensions } from "src/hooks";
import { loadingAtom } from "src/store/loading";
import { DEG2RAD } from "three/src/math/MathUtils";
import Loader from "./Loader";
import { PC, Plant } from "./models";

function Scene({ children }: PropsWithChildren) {
  const loading = useStore(loadingAtom);
  const { x, y } = useMousePosition();
  const { width, height } = useWindowDimensions();
  const r = x / width;
  const g = y / height;
  const b = 1 - (r + g);
  if (!children) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex absolute top-0 z-0 w-[100vw] h-[100vh] p-0 m-auto"
    >
      <AnimatePresence>
        <Canvas shadows key="3d-canvas">
          <color attach="background" args={[r, g, b]} />
          <Suspense fallback={null}>{children}</Suspense>
        </Canvas>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const HomeScene = () => {
  return (
    <Scene>
      <ambientLight intensity={0.5} />
      <directionalLight color="red" position={[0, 10, 0]} intensity={0.5} />
      <Stage
        intensity={0.1}
        preset="rembrandt"
        shadows={{
          type: "accumulative",
          color: "black",
          colorBlend: 2,
          opacity: 2,
        }}
        adjustCamera={0.8}
        environment="apartment"
      >
        <PC rotation={[0, DEG2RAD * 180, 0]} scale={0.6} />
        <Plant position={[1.6, 0, 1]} scale={0.2} />
        <EffectComposer>
          <Vignette eskil={false} offset={0.1} darkness={0.8} />
        </EffectComposer>
      </Stage>
      <OrbitControls
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={DEG2RAD * -45}
        maxAzimuthAngle={DEG2RAD * 45}
        makeDefault
      />
    </Scene>
  );
};

export default HomeScene;
