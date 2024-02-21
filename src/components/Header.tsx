'use client'

import { useA2HS } from '@/hooks/useA2HS'

const Header = () => {
  const { promptToInstall } = useA2HS()
  return (
    <header className='flex w-full items-center gap-4 bg-white p-4'>
      <h1 className='text-2xl font-bold'>PWA Sample</h1>
      <button
        onClick={promptToInstall}
        className='rounded-xl bg-black px-4 py-2 text-sm text-white'
      >
        Install
      </button>
    </header>
  )
}

export default Header
