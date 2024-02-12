'use client'
import React, { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'

import { OrbitControls } from '@react-three/drei'
import { useSpring, useScroll, useTransform } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { auth } from '@clerk/nextjs'
import Cube from './cube'
const Hero = () => {
  const router = useRouter()
  const [text, setText] = useState('')
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })
  const progress = useTransform(scrollYProgress, [0, 1], [0, 5])
  const smoothProgress = useSpring(progress, { damping: 30 })

  const handleClick = () => {
    router.push(`search?title=${text}`)
  }
  return (
    <div>
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
          <div className='flex gap-4 my-8 px-2'>
            <input
              value={text}
              onChange={(e) => {
                setText(e.target.value)
              }}
              placeholder='Search and Explore our courses'
              className='w-[70%] lg:w-[400px] border border-solid border-[#8D9096] h-11 rounded-lg px-3'
              type='text'
            />
            <Button onClick={handleClick} size={'lg'} variant={'signUp'}>
              Search
            </Button>
          </div>
          <div className='w-[80%] md:w-[70%] lg:w-full flex gap-6 flex-col lg:flex-row m-auto pb-7 lg:pb-0'>
            <div className='flex justify-evenly lg:justify-center items-center shadow-4xl py-6 px-4 rounded-lg'>
              <p className='text-4xl text-gray-300 '>1259</p>
              <div className='flex flex-col items-start justify-center ml-4 pl-[10px]'>
                <p className='text-sm text-[#4859FE]'>Current</p>
                <p className='text-sm text-[#4859FE]'>Students</p>
              </div>
            </div>
            <div className='flex justify-evenly lg:justify-center items-center shadow-4xl py-6 px-4 rounded-lg'>
              <p className='text-4xl text-gray-300'>250+</p>
              <div className='flex flex-col items-start justify-center ml-4'>
                <p className='text-sm text-[#4859FE]'>Modern</p>
                <p className='text-sm text-[#4859FE]'>Courses</p>
              </div>
            </div>
            <div className='flex justify-evenly lg:justify-center items-center shadow-4xl py-6 px-4 rounded-lg'>
              <p className='text-4xl text-gray-300 pl-[30px]'>38</p>
              <div className='flex flex-col items-start justify-center ml-4 pl-[30px]'>
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

export default Hero
