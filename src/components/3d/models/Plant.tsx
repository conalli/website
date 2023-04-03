/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: eucalyp555 (https://sketchfab.com/eucalyp555)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/low-poly-plant-in-a-pot-e3a4d0c168954ced9e3702c14b986046
title: Low Poly Plant in a pot
*/

/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: eucalyp555 (https://sketchfab.com/eucalyp555)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/low-poly-plant-in-a-pot-e3a4d0c168954ced9e3702c14b986046
title: Low Poly Plant in a pot
*/
import type * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_13: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_17: THREE.Mesh;
  };
  materials: {
    ceramique: THREE.MeshStandardMaterial;
    dirt: THREE.MeshStandardMaterial;
    bark_i_dunno_i_guess_thats_how_its_called: THREE.MeshStandardMaterial;
    leaf: THREE.MeshStandardMaterial;
  };
};

export function Plant(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/plant/low_poly_plant.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.85, 0]} scale={0.85}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.ceramique}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.dirt}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.bark_i_dunno_i_guess_thats_how_its_called}
        position={[0, 1.41, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.bark_i_dunno_i_guess_thats_how_its_called}
        position={[-0.04, 1.41, -0.12]}
        rotation={[0, -0.9, 0]}
        scale={0.69}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.bark_i_dunno_i_guess_thats_how_its_called}
        position={[0.02, 1.52, -0.05]}
        rotation={[0.99, 1.5, -1.01]}
        scale={0.29}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials.leaf}
        position={[0.36, 2.98, -0.11]}
        rotation={[0, 1.15, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials.leaf}
        position={[0.14, 5.13, 0.63]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_17.geometry}
        material={materials.leaf}
        position={[-0.6, 4.4, -0.24]}
        rotation={[-2.69, 1.38, 2.41]}
        scale={0.91}
      />
    </group>
  );
}

useGLTF.preload("/models/plant/low_poly_plant.glb");
