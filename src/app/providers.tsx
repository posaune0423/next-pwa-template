'use client'

import { useEffect } from 'react'
import { useA2HS } from '@/hooks/useA2HS'

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [promptEvent, promptToInstall] = useA2HS()

  useEffect(() => {
    console.log(promptEvent)
    promptToInstall()
  }, [promptEvent, promptToInstall])

  return <>{children}</>
}

export default Providers
