import { useState, useEffect } from 'react'
import Map from '../components/Map'
import UserInterface from '../components/UserInterface'

export default function Home() {
  const [coins, setCoins] = useState([])
  const [score, setScore] = useState(0)

  useEffect(() => {
    fetchCoins()
  }, [])

  const fetchCoins = async () => {
    const response = await fetch('/api/coins')
    const data = await response.json()
    setCoins(data)
  }

  const collectCoin = (coinId) => {
    setCoins(coins.filter(coin => coin.id !== coinId))
    setScore(prevScore => prevScore + 1)
  }

  return (
    <div className="flex flex-col h-screen">
      <Map coins={coins} onCollectCoin={collectCoin} />
      <UserInterface score={score} />
    </div>
  )
}