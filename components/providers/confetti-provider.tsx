'use client'

import ReactConfetti from 'react-confetti'

import { useConfettiStore } from '@/hooks/use-confetti-store'

export const ConfettiProvider = () => {
  const confetti = useConfettiStore()

  if (!confetti.isOpen) return null

  return (
    <ReactConfetti
      className='pointer-events-none relative'
      numberOfPieces={600}
      recycle={false}
      onConfettiComplete={() => {
        confetti.onClose()
      }}
    />
  )
}
