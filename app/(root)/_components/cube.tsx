import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { motion } from 'framer-motion-3d'
import { useTexture } from '@react-three/drei'
import useScreenWidth from '@/hooks/use-screen-width'
export default function Cube({ progress }: { progress: any }) {
  const mesh = useRef<any>(null)

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.1
      mesh.current.rotation.y += delta * 0.005
      mesh.current.rotation.z += delta * 0.05
    }
  })
  let width = useScreenWidth()
  let arr: [number | undefined, number | undefined, number | undefined] = [
    4.1, 3, 3.4,
  ]
  if (width < 410) {
    arr = [3.8, 2.7, 3.1]
  }

  // const options = {
  //   damping: 20,
  // }

  // const mouse = {
  //   x: useSpring(useMotionValue(0), options),
  //   y: useSpring(useMotionValue(0), options),
  // }

  // const manageMouseMove = (e: any) => {
  //   const { innerWidth, innerHeight } = window
  //   const { clientX, clientY } = e
  //   const x = -0.5 + clientX / innerWidth
  //   const y = -0.5 + clientY / innerHeight
  //   mouse.x.set(x)
  //   mouse.y.set(y)
  // }

  // useEffect(() => {
  //   window.addEventListener('mousemove', manageMouseMove)

  //   return () => window.removeEventListener('mouse', manageMouseMove)
  // }, [])

  const texture_1 = useTexture('/Screenshot (149).png')
  const texture_2 = useTexture('/Screenshot (148).png')
  const texture_3 = useTexture('/Screenshot (147).png')
  const texture_4 = useTexture('/Screenshot (149).png')
  const texture_5 = useTexture('/Screenshot (149).png')
  const texture_6 = useTexture('/Screenshot (148).png')

  return (
    <motion.mesh ref={mesh} rotation-y={progress} rotation-x={progress}>
      <boxGeometry args={arr} />
      <meshStandardMaterial map={texture_1} attach='material-0' />
      <meshStandardMaterial map={texture_2} attach='material-1' />
      <meshStandardMaterial map={texture_3} attach='material-2' />
      <meshStandardMaterial map={texture_4} attach='material-3' />
      <meshStandardMaterial map={texture_5} attach='material-4' />
      <meshStandardMaterial map={texture_6} attach='material-5' />
    </motion.mesh>
  )
}
