'use client'

import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { SearchInput } from './search-input'
import { dark } from '@clerk/themes'

const NavbarRoutes = () => {
  const pathname = usePathname()

  const isTeacherPage = pathname?.startsWith('/teacher')
  const isPlayerpage = pathname?.includes('/courses')
  const isSearchPage = pathname === '/search' || '/dashboard'

  return (
    <>
      {isSearchPage && (
        <div className='hidden md:block'>
          <SearchInput />
        </div>
      )}
      <div className='flex gap-x-2 ml-auto'>
        {isTeacherPage || isPlayerpage ? (
          <Link href='/dashboard'>
            <Button size='sm' variant='outline'>
              <LogOut className='h-4 w-4 mr-2' />
              Exit
            </Button>
          </Link>
        ) : (
          <Link href='/teacher/courses'>
            <Button size='sm' variant='outline'>
              Teacher mode
            </Button>
          </Link>
        )}
        <UserButton
          appearance={{
            baseTheme: dark,
          }}
          afterSignOutUrl='/'
        />
      </div>
    </>
  )
}

export default NavbarRoutes
