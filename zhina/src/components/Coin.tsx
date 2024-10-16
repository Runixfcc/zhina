import { useEffect, useState } from 'react'

export default function Coin({ position, onCollect }) {
  const [collected, setCollected] = useState(false)

  useEffect(() => {
    const checkCollision = (e) => {
      const playerRect = e.target.getBoundingClientRect()
      const coinRect = {
        left: position.x,
        top: position.y,
        right: position.x + 20,
        bottom: position.y + 20,
      }

      if (
        playerRect.left < coinRect.right &&
        playerRect.right > coinRect.left &&
        playerRect.top < coinRect.bottom &&
        playerRect.bottom > coinRect.top
      ) {
        setCollected(true)
        onCollect()
      }
    }

    document.addEventListener('mousemove', checkCollision)
    return () => document.removeEventListener('mousemove', checkCollision)
  }, [position, onCollect])

  if (collected) return null

  return (
    <div 
      className="absolute w-5 h-5 bg-yellow-400 rounded-full"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  )
}