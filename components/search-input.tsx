'use client'

import { Search } from 'lucide-react'
import { Input } from './ui/input'
import { useEffect, useState } from 'react'
import { useDebounce } from '@/hooks/use-debounce'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string'

export const SearchInput = () => {
  const searchParams = useSearchParams()
  const [value, setValue] = useState(searchParams.get('title') || '')
  const debouncedValue = useDebounce(value)
  const router = useRouter()
  const pathname = usePathname()
  const currentCategoryId = searchParams.get('categoryId')

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          categoryId: currentCategoryId,
          title: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true },
    )
    router.push(url)
  }, [debouncedValue, currentCategoryId, router, pathname])

  return (
    <div className='relative'>
      <Search className='h-4 w-4 absolute top-3 left-3 text-slate-600' />
      <Input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className='w-full md:w-[300px] pl-9 rounded-full focus-visible:ring-slate-200'
        placeholder='Search for a course'
      />
    </div>
  )
}
