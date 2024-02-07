import Logo from '../(group)/(dashboard)/_components/logo'
import { Button } from '@/components/ui/button'
import { auth } from '@clerk/nextjs'
import Hero from './_components/hero'
import AuthBtn from './_components/authBtn'

export default function index() {
  let { userId } = auth()

  // const router = useRouter()
  // const container = useRef(null)
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ['start start', 'end end'],
  // })
  // const progress = useTransform(scrollYProgress, [0, 1], [0, 5])
  // const smoothProgress = useSpring(progress, { damping: 30 })

  // const handleClick = () => {
  //   router.push('/dashboard')
  // }

  return (
    <div className='pt-4'>
      <nav className='flex justify-between items-center px-4 lg:px-14 '>
        <div className='max-w-max'>
          <Logo />
        </div>
        {!userId && <AuthBtn />}
      </nav>
      <Hero />
    </div>
  )
}
