'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const AuthBtn = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/search')
  }
  return (
    <div className='flex justify-center items-center gap-2 md:gap-6 pl-8'>
      <Button onClick={handleClick} variant={'outline'}>
        <span className='font-[600] text-[#d9d9eaa9]'>Login</span>
      </Button>
      <Button onClick={handleClick} variant={'signUp'}>
        Sign up
      </Button>
    </div>
  )
}

export default AuthBtn
