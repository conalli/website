/* eslint-disable react/no-unknown-property */
import { Loader, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { PropsWithChildren, Suspense } from "react";
import PC from "./models/PC";
import { DEG2RAD } from "three/src/math/MathUtils";
import { Plant } from "./models/Plant";
import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { useMousePosition } from "src/hooks/useMousePosition";
import { useWindowDimensions } from "src/hooks/useWindowDimensions";

function Scene({ children }: PropsWithChildren) {
  const { x, y } = useMousePosition();
  const { width, height } = useWindowDimensions();
  const r = x / width;
  const g = y / height;
  const b = 1 - (r + g);
  if (!children) return null;
  return (
    <div className="flex absolute top-0 z-0 w-[100vw] h-[100vh] p-0 m-auto">
      <Canvas shadows>
        <color attach="background" args={[r, g, b]} />
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
