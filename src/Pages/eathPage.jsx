import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

function Earth() {
  const earthRef = useRef();
  const [colorMap, bumpMap, specularMap, cloudMap, cloudAlphaMap] = useTexture([
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthmap1k.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthbump1k.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthspec1k.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthcloudmap.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthcloudmaptrans.jpg",
  ]);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group>
      {/* Earth */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 164, 164]} /> {/* Increased size */}
        <meshPhongMaterial bumpScale={0.10} shininess={20} map={colorMap} bumpMap={bumpMap} specularMap={specularMap} />
      </mesh>

      {/* Clouds */}
      <mesh>
        <sphereGeometry args={[2.05, 64, 64]} /> {/* Increased size slightly */}
        <meshPhongMaterial map={cloudMap} alphaMap={cloudAlphaMap} transparent opacity={1} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [5, 3, 5], fov: 50 }}> {/* Adjusted camera */}
      <ambientLight intensity={0.7} />
      <spotLight position={[5, 3, 3]} intensity={1.5} />
      <Earth />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}
