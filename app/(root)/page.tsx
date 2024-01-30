'use client'
import React, { useEffect, useRef } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
// import { TextureLoader } from 'three/app/loaders/TextureLoader'
// import styles from './style.module.scss'
import { OrbitControls, useTexture } from '@react-three/drei'
import {
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from 'framer-motion'
import { motion } from 'framer-motion-3d'
import { useRouter } from 'next/navigation'

export default function index() {
  const router = useRouter()
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })
  const progress = useTransform(scrollYProgress, [0, 1], [0, 5])
  const smoothProgress = useSpring(progress, { damping: 30 })

  const handleClick = () => {
    router.push('/change')
  }

  return (
    <div ref={container} className='main3d'>
      <button onClick={handleClick}>signup</button>
      <div className='h-[100vh] border border-solid border-blue-500 flex justify-center items-center'>
        <h1 className='text-blue-500 text-5xl'>Yakshith</h1>
      </div>
      <div className='cube'>
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={2} />
          <directionalLight position={[2, 1, 1]} />
          <Cube progress={smoothProgress} />
        </Canvas>
      </div>
    </div>
  )
}

function Cube({ progress }: { progress: any }) {
  const mesh = useRef(null)

  // const options = {
  //     damping: 20
  // }

  // const mouse = {
  //     x: useSpring(useMotionValue(0), options),
  //     y: useSpring(useMotionValue(0), options)
  // }

  // const manageMouseMove = (e) => {
  //     const { innerWidth, innerHeight } = window;
  //     const { clientX, clientY } = e;
  //     const x = -0.5 + (clientX / innerWidth)
  //     const y = -0.5 + (clientY / innerHeight)
  //     mouse.x.set(x);
  //     mouse.y.set(y);
  // }

  // useEffect( () => {
  //     window.addEventListener("mousemove", manageMouseMove)

  //     return () => window.removeEventListener("mouse", manageMouseMove);
  // }, [])

  const texture_1 = useTexture('/car.jpg')
  const texture_2 = useTexture('/yakshith.jpg')
  const texture_3 = useTexture('/car.jpg')
  const texture_4 = useTexture('/car.jpg')
  const texture_5 = useTexture('/yakshith.jpg')
  const texture_6 = useTexture('/car.jpg')

  return (
    <motion.mesh ref={mesh} rotation-y={progress} rotation-x={progress}>
      <boxGeometry args={[3.5, 3.5, 3.5]} />
      <meshStandardMaterial map={texture_1} attach='material-0' />
      <meshStandardMaterial map={texture_2} attach='material-1' />
      <meshStandardMaterial map={texture_3} attach='material-2' />
      <meshStandardMaterial map={texture_4} attach='material-3' />
      <meshStandardMaterial map={texture_5} attach='material-4' />
      <meshStandardMaterial map={texture_6} attach='material-5' />
    </motion.mesh>
  )
}
