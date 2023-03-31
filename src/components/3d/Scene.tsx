/* eslint-disable react/no-unknown-property */
import {
  Loader,
  OrbitControls,
  PerspectiveCamera,
  Stage,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { PropsWithChildren, Suspense } from "react";
import PC from "./models/PC";
import Room from "./models/Room";

function Scene({ children }: PropsWithChildren) {
  if (!children) return null;
  return (
    <div className="flex w-[80vw] h-[80vh] m-auto bg-slate-400">
      <Canvas shadows>
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
      <Loader
        // containerStyles={} // Flex layout styles
        // innerStyles={} // Inner container styles
        // barStyles={} // Loading-bar styles
        // dataStyles={} // Text styles
        dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`} // Text
        initialState={(active) => active} // Initial black out state
      />
    </div>
  );
}

export const BasicScene = () => {
  return (
    <Scene>
      <ambientLight intensity={0.1} />
      <directionalLight color="white" position={[0, 5, 0]} intensity={0.1} />
      <Stage
        intensity={0.5}
        preset="rembrandt"
        shadows={{
          type: "accumulative",
          color: "black",
          colorBlend: 2,
          opacity: 2,
        }}
        adjustCamera={1}
        environment="apartment"
      >
        <PC />
        <Room />
        <axesHelper scale={7} />
        <gridHelper />
      </Stage>
      <OrbitControls
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={Math.PI / 16}
        maxAzimuthAngle={Math.PI / 2}
        makeDefault
      />
      <PerspectiveCamera makeDefault />
    </Scene>
  );
};

export default Scene;
