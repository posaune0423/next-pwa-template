'use client'

import { useEffect } from 'react'
import { useA2HS } from '@/hooks/useA2HS'

const Providers = ({ children }: { children: React.ReactNode }) => {
  const { promptEvent } = useA2HS()

  useEffect(() => {
    console.log(promptEvent)
  }, [promptEvent])

  return <>{children}</>
}

export default Providers
