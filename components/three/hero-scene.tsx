'use client'

import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Sun() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y += 0.0015
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, state.pointer.x * 0.5, 0.04)
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, state.pointer.y * 0.3, 0.04)
  })
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.1}>
      <mesh ref={ref}>
        <sphereGeometry args={[1.45, 96, 96]} />
        <MeshDistortMaterial
          color="#d59a3a"
          emissive="#8a521a"
          emissiveIntensity={0.5}
          roughness={0.35}
          metalness={0.4}
          distort={0.32}
          speed={1.5}
        />
      </mesh>
    </Float>
  )
}

function Halo() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * 0.12
    ref.current.rotation.y = state.clock.elapsedTime * 0.08
  })
  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.7, 0.008, 16, 140]} />
      <meshBasicMaterial color="#e7c98a" transparent opacity={0.4} />
    </mesh>
  )
}

function Dust() {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const count = 700
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16
      arr[i * 3 + 1] = (Math.random() - 0.5) * 9
      arr[i * 3 + 2] = (Math.random() - 0.5) * 7
    }
    return arr
  }, [])
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.025
  })
  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#e8c07d"
        size={0.032}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <fog attach="fog" args={['#1a1510', 6.5, 15]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 3, 5]} intensity={2.2} color="#ffd9a0" />
      <pointLight position={[-4, -2, 2]} intensity={22} color="#e8933a" />
      <directionalLight position={[-3, 4, -2]} intensity={1.2} color="#e8c07d" />
      <Sun />
      <Halo />
      <Dust />
    </Canvas>
  )
}
