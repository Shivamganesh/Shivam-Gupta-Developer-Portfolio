import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useFBX, Sparkles, ContactShadows } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function FloatingModel() {
  const model = useFBX('/models/3d.fbx'); 
  const ref = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.003;
      ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05;
     // ref.current.scale.setScalar(hovered ? 0.014 : 0.012);
    }
  });

  return (
    <primitive
      object={model}
      ref={ref}
      scale={0.012}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
}

export default function ThreeModel() {
  return (
    <div className="relative w-full h-full pb-7 rounded-2xl overflow-hidden border border-white/20 backdrop-blur-md shadow-xl">
      {/* Glowing background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-gradient-to-br from-fuchsia-500 via-pink-500 to-purple-500 opacity-20 blur-2xl rounded-full animate-ping"></div>
      </div>

      {/* Canvas */}
      <div className="relative z-10 h-full w-full">
        <Canvas camera={{ position: [0, 1, 4], fov: 40 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <OrbitControls enableZoom={false} enablePan={false} />
          
          {/* Sparkles for magical effect */}
          <Sparkles
            count={50}
            scale={[3, 3, 3]}
            size={2}
            speed={0.4}
            color="white"
            opacity={0.6}
          />

          <FloatingModel />

          {/* Soft shadow under the model */}
          <ContactShadows
            position={[0, -0.8, 0]}
            opacity={0.3}
            scale={10}
            blur={2.5}
            far={1}
          />
        </Canvas>
      </div>
    </div>
  );
}
