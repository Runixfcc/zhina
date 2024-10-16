import { useState } from 'react'
import Coin from './Coin'

export default function Map({ coins, onCollectCoin }) {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 })

  const movePlayer = (e) => {
    const map = e.target
    const rect = map.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setPlayerPosition({ x, y })
  }

  return (
    <div 
      className="flex-1 relative bg-gray-200 overflow-hidden"
      onClick={movePlayer}
    >
      {/* Add map tiles or background here */}
      <div 
        className="absolute w-6 h-6 bg-blue-500 rounded-full transition-all duration-300 ease-in-out"
        style={{ left: `${playerPosition.x}px`, top: `${playerPosition.y}px` }}
      />
      {coins.map(coin => (
        <Coin 
          key={coin.id} 
          position={coin.position} 
          onCollect={() => onCollectCoin(coin.id)} 
        />
      ))}
    </div>
  )
}