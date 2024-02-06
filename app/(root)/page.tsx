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
import Check from './_components/check'
import Logo from '../(group)/(dashboard)/_components/logo'
import { Button } from '@/components/ui/button'

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
    router.push('/dashboard')
  }

  return (
    <div ref={container} className='pt-4'>
      <nav className='flex justify-between items-center px-4 lg:px-14 '>
        <div className='max-w-max'>
          <Logo />
        </div>
        <div className='flex justify-center items-center gap-2 md:gap-6 pl-8'>
          <Button onClick={handleClick} variant={'outline'}>
            <span className='font-[600] text-[#4c4c4fa9]'>Login</span>
          </Button>
          <Button onClick={handleClick} variant={'signUp'}>
            Sign up
          </Button>
        </div>
      </nav>
      <div className='w-full lg:hidden'>
        <div className='cube'>
          <Canvas>
            <OrbitControls enableZoom={false} enablePan={false} />
            <ambientLight intensity={2} />
            <directionalLight position={[2, 1, 1]} />
            <Cube progress={smoothProgress} />
          </Canvas>
        </div>
      </div>
      <div className='flex gap-5 flex-col lg:flex-row'>
        <div className='w-full lg:w-[50%] pt-10 md:pt-12 lg:pt-28 px-2 md:px-4 lg:pl-20'>
          <h1 className='text-3xl md:text-5xl lg:text-6xl font-[900] opacity-75 text-center lg:text-left '>
            We Offer Hundreds Of
          </h1>
          <h1 className='text-3xl md:text-5xl lg:text-6xl font-[900] opacity-75 text-center lg:text-left'>
            Courses To Choose
          </h1>
          <h1 className='text-3xl md:text-5xl lg:text-6xl font-[900] opacity-75 text-center lg:text-left'>
            From
          </h1>
          <p className='text-[#8D9096] mt-7'>
            With hundreds of options available, you will have the opportunity to
            explore your passions and develop new skills
          </p>
          <div className='flex gap-4 my-8'>
            <input
              placeholder='Search and Explore our courses'
              className='w-[70%] lg:w-[400px] border border-solid border-[#8D9096] h-11 rounded-lg px-3'
              type='text'
            />
            <Button size={'lg'} variant={'signUp'}>
              Search
            </Button>
          </div>
          <div className='w-[80%] md:w-[70%] lg:w-full flex gap-6 flex-col lg:flex-row m-auto'>
            <div className='flex justify-center items-center shadow-inner py-6 px-4 rounded-lg '>
              <p className='text-4xl text-[#424446]'>1259</p>
              <div className='flex flex-col items-start justify-center ml-4'>
                <p className='text-sm text-[#4859FE]'>Current</p>
                <p className='text-sm text-[#4859FE]'>Students</p>
              </div>
            </div>
            <div className='flex justify-center items-center shadow-inner py-6 px-4 rounded-lg'>
              <p className='text-4xl text-[#424446]'>250+</p>
              <div className='flex flex-col items-start justify-center ml-4'>
                <p className='text-sm text-[#4859FE]'>Modern</p>
                <p className='text-sm text-[#4859FE]'>Courses</p>
              </div>
            </div>
            <div className='flex justify-center items-center shadow-inner py-6 px-4 rounded-lg'>
              <p className='text-4xl text-[#424446]'>38</p>
              <div className='flex flex-col items-start justify-center ml-4'>
                <p className='text-sm text-[#4859FE]'>Talented</p>
                <p className='text-sm text-[#4859FE]'>Instructor</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-[50%] hidden lg:block'>
          <div className='cube'>
            <Canvas>
              <OrbitControls enableZoom={false} enablePan={false} />
              <ambientLight intensity={2} />
              <directionalLight position={[2, 1, 1]} />
              <Cube progress={smoothProgress} />
            </Canvas>
          </div>
        </div>
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
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial map={texture_1} attach='material-0' />
      <meshStandardMaterial map={texture_2} attach='material-1' />
      <meshStandardMaterial map={texture_3} attach='material-2' />
      <meshStandardMaterial map={texture_4} attach='material-3' />
      <meshStandardMaterial map={texture_5} attach='material-4' />
      <meshStandardMaterial map={texture_6} attach='material-5' />
    </motion.mesh>
  )
}
