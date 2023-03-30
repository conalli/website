/* eslint-disable react/no-unknown-property */
import {
  CameraControls,
  Html,
  Loader,
  OrbitControls,
  PerspectiveCamera,
  Stage,
  useScroll,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { PropsWithChildren, Suspense, useRef, useState } from "react";
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
  const controls = useRef<CameraControls>(null);
  console.log(controls.current);
  return (
    <Scene>
      <CameraControls ref={controls} enabled={false} />
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
        <Room controls={controls} />
        <axesHelper scale={7} />
        <gridHelper />
      </Stage>
      <OrbitControls
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={Math.PI / 2}
        maxAzimuthAngle={Math.PI}
        makeDefault
      />
      <PerspectiveCamera makeDefault />
    </Scene>
  );
};

export default Scene;
